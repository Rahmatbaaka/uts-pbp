# Digital Wedding Invitation

![Platform](https://img.shields.io/badge/Platform-Web%20Browser-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla%20ES6+-F7DF1E?logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Selesai-success)

Undangan pernikahan digital berbasis web yang responsif dan elegan dengan tema *Royal Navy & Soft Sky Accent*. Proyek ini dibangun menggunakan HTML5, CSS3 (Bootstrap 5), dan JavaScript murni (Vanilla JS) tanpa membutuhkan server backend khusus.

## 🌟 Fitur Utama

- **Cover Fullscreen with Slide-out Animation**: Tampilan pembuka interaktif dengan animasi geser ke atas saat membuka undangan.
- **Nama Tamu Dinamis via URL**: Menampilkan nama tamu secara kustom berdasarkan query parameter `?tamu=Nama_Tamu`.
- **Musik Latar Interaktif**: Pemutar audio latar belakang otomatis lengkap dengan tombol toggle melayang (*floating button*).
- **Hitung Mundur (Countdown Timer)**: Estimasi waktu *real-time* menuju hari pernikahan.
- **Kartu Acara Terpisah (Dual Event Card)**: Informasi Akad dan Resepsi yang terbagi jelas beserta tombol navigasi ke Google Maps.
- **Tanda Kasih Digital**: Fitur penyalinan nomor rekening bank (BCA & Mandiri) dalam satu kali klik.
- **Formulir RSVP & Ucapan**: Pengiriman ucapan selamat dan status kehadiran yang tersimpan di `localStorage` browser.
- **Desain Seamless & Responsif**: Transisi warna antar-section yang mulus menggunakan pembatas *SVG Wave Divider*.

## 🛠️ Teknologi yang Digunakan

- **Markup**: HTML5 (Struktur semantik, meta tag responsif, audio tersemat, SVG vektor).
- **Styling**: CSS3 & Bootstrap 5.3 (Grid system, utility classes, cards, badges, CSS Variables).
- **Iconography**: Bootstrap Icons v1.11.1.
- **Typography**: Google Fonts (Cormorant Garamond, Great Vibes, Pinyon Script, & Inter).
- **Scripting**: Vanilla JavaScript ES6+ (DOM Manipulation, URLSearchParams API, Clipboard API, LocalStorage).

## 📁 Struktur Folder Proyek

```text
undangan-digital/
├── assets/
│   ├── audio/
│   │   └── audio.mp3
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   ├── mempelai-pria.jpg
│   │   └── mempelai-wanita.png
│   └── js/
│       └── main.js
├── index.html
└── README.md
``` 
## Panduan Menjalankan Proyek

### 1. Kloning Repositori

```bash
git clone https://github.com/Rahmatbaaka/uts-pbp.git
cd uts-pbp
```

### 2. Menjalankan Aplikasi

Aplikasi web dapat dibuka melalui salah satu cara berikut:

#### Cara 1: Buka Langsung di Peramban
Klik ganda file `index.html` atau seret (*drag and drop*) file ke jendela browser pilihan Anda.

#### Cara 2: Menggunakan Server Lokal (Direkomendasikan)

- **Menggunakan Python 3**:
  ```bash
  python -m http.server 8000
  ```
  Lalu buka alamat `http://localhost:8000` di peramban.

- **Menggunakan PHP**:
  ```bash
  php -S localhost:8000
  ```

- **Menggunakan Ekstensi Live Server (VS Code)**:
  Klik kanan pada file `index.html` lalu pilih **"Open with Live Server"**.

---

> Project ini dibuat untuk pemenuhan tugas Mandiri mata kuliah Pemrograman Berbasis Platform (PBP).
