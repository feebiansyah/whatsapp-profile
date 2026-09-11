# Profil WhatsApp statis

React + Vite, tanpa database, API, atau dependency tambahan.

## Menjalankan

- `npm run dev` lalu buka `http://localhost:5173/abdan/citra`.
- `npm run build` menghasilkan folder `dist`.
- `npm run preview` untuk melihat hasil build.
- `node tests/profiles.mjs` untuk memeriksa render route.

Contoh tersedia: `/abdan/citra`, `/abdan/amira-putri`, `/nipon/citra`, dan `/nipon/amira-putri`.
Alamat yang tidak terdaftar (termasuk `/`) menampilkan "Profil tidak ditemukan."

## Menambah karakter atau kelompok

1. Duplikat seluruh folder `src/profiles/abdan/citra/`.
2. Rename menjadi, misalnya, `src/profiles/abdan/nadia/`.
3. Ganti `profile.jpg` dengan foto Anda, tetap gunakan nama file tersebut.
4. Edit `config.js`: name, description, messageLink, videoCallLink, callLink, dan downloadLink.
5. Save; `/abdan/nadia` otomatis tersedia. Untuk deployment, build dan deploy ulang.

Untuk kelompok baru, copy folder karakter ke `src/profiles/hillsant/citra/`; URL otomatis `/hillsant/citra`.
Gunakan huruf kecil, angka, dan tanda hubung pada nama folder (contoh `amira-putri`). Nama tampilan bebas di config.
Tidak perlu mengubah App.jsx, import, route, atau array apa pun.

## Foto dan tautan contoh

Avatar inisial JPG lokal adalah placeholder, bukan foto karakter asli. Ganti dengan foto sendiri.
messageLink contoh membuka WhatsApp dengan teks contoh tanpa nomor tujuan.
videoCallLink dan callLink contoh menuju beranda WhatsApp: ganti dengan tautan panggilan asli Anda.
Label tombol tidak otomatis membuat panggilan; tujuannya sepenuhnya berasal dari config.
Semua link dibuka pada tab yang sama. downloadLink boleh dihapus untuk memakai URL unduhan default.

## Struktur dan desain

- `src/components/WhatsAppProfile.jsx`: satu template dan auto-discovery `import.meta.glob`.
- `src/App.jsx`: satu route dinamis `/:group/:character` dan fallback.
- `src/index.css`: seluruh style halaman, mobile-first dan putih penuh.
- `src/profiles/{group}/{character}/`: config dan foto masing-masing profil.

Screenshot belum disertakan; desain mengikuti ukuran dan warna pada spesifikasi tertulis.

## Deployment

Upload hasil `dist` ke hosting statis. Aktifkan SPA fallback/rewrite ke `/index.html` untuk URL yang bukan file agar refresh dan kunjungan langsung ke `/abdan/citra` bekerja. File JS, CSS, dan foto tetap harus dilayani sebagai file biasa. Tidak perlu backend atau database.
