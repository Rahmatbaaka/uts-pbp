// Audio controller (looping background music)
const audio = new Audio('assets/audio/audio.mp3');
audio.loop = true;
let isPlaying = false;

// Event listener saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
  initNamaTamu();
  initCountdown();
  initCharCounter();
  initFormRSVP();
  renderUcapan();
});

// Lepas lock scroll body dan jalankan animasi slide-out cover
function bukaUndangan() {
  const cover = document.getElementById('cover-section');
  const btnMusic = document.getElementById('btn-music');
  
  document.body.classList.remove('locked');

  if (cover) cover.classList.add('cover-hidden');
  if (btnMusic) btnMusic.classList.remove('d-none');

  // Play audio (catch error jika terhalang kebijakan autoplay browser)
  audio.play().then(() => {
    isPlaying = true;
    updateMusicButton();
  }).catch(err => console.log("Autoplay diblokir browser:", err));
}

function toggleMusik() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
  } else {
    audio.play();
    isPlaying = true;
  }
  updateMusicButton();
}

function updateMusicButton() {
  const btn = document.getElementById('btn-music');
  if (btn) {
    btn.innerHTML = isPlaying 
      ? '<i class="bi bi-disc-fill spin me-1"></i> Putar Musik' 
      : '<i class="bi bi-pause-circle me-1"></i> Jeda Musik';
  }
}

// Fitur salin nomor rekening ke clipboard
function salinBank(nomor, namaBank) {
  navigator.clipboard.writeText(nomor).then(() => {
    alert(`Nomor rekening ${namaBank} (${nomor}) berhasil disalin!`);
  }).catch(err => console.error("Gagal menyalin:", err));
}

// Ambil parameter nama tamu dari URL (?tamu=Nama_Tamu)
function initNamaTamu() {
  const urlParams = new URLSearchParams(window.location.search);
  const rawNama = urlParams.get('tamu');
  if (rawNama) {
    // Replace underscore (_) menjadi spasi untuk nama bergaya URL
    document.getElementById('nama-tamu').textContent = rawNama.replace(/_/g, ' ');
  }
}

// Timer hitung mundur ke tanggal target
function initCountdown() {
  const targetDate = new Date('2033-02-05T08:00:00').getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    if (distance < 0) return;

    document.getElementById('hari').textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById('jam').textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('menit').textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('detik').textContent = Math.floor((distance % (1000 * 60)) / 1000);
  }, 1000);
}

// Counter sisa karakter pada textarea ucapan
function initCharCounter() {
  const input = document.getElementById('ucapan');
  const count = document.getElementById('char-count');
  if (input && count) {
    input.addEventListener('input', (e) => count.textContent = `${e.target.value.length}/300`);
  }
}

// Simpan data RSVP ke LocalStorage 
function initFormRSVP() {
  const form = document.getElementById('form-rsvp');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const dataBaru = {
      nama: document.getElementById('nama').value,
      kehadiran: document.getElementById('kehadiran').value,
      jumlah: document.getElementById('jumlah').value,
      ucapan: document.getElementById('ucapan').value,
      waktu: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    };
    const dataLama = JSON.parse(localStorage.getItem('rsvp_ucapan')) || [];
    dataLama.unshift(dataBaru);
    localStorage.setItem('rsvp_ucapan', JSON.stringify(dataLama));
    form.reset();
    document.getElementById('char-count').textContent = '0/300';
    renderUcapan();
  });
}

// Render daftar ucapan dari LocalStorage ke DOM
function renderUcapan() {
  const container = document.getElementById('daftar-ucapan');
  if (!container) return;
  const data = JSON.parse(localStorage.getItem('rsvp_ucapan')) || [];
  if (data.length === 0) {
    container.innerHTML = '<p class="text-muted small text-center my-3">Belum ada ucapan tersimpan.</p>';
    return;
  }
  container.innerHTML = data.map(item => `
    <div class="bg-light p-3 rounded-3 mb-2 border-start border-4 border-primary shadow-sm">
      <div class="d-flex justify-content-between align-items-center mb-1">
        <strong class="small text-primary-blue"><i class="bi bi-person-circle me-1"></i>${escapeHtml(item.nama)}</strong>
        <span class="badge ${item.kehadiran === 'Hadir' ? 'bg-success' : 'bg-danger'}">${item.kehadiran} (${item.jumlah} org)</span>
      </div>
      <p class="small mb-1 text-secondary">${escapeHtml(item.ucapan)}</p>
      <small class="text-muted d-block" style="font-size: 0.65rem;">${item.waktu}</small>
    </div>
  `).join('');
}

// Pencegahan sederhana untuk mencegah XSS injection dari input user
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}