# RecruitFlow — Dummy Recruitment Pipeline Automation

Prototype web statis untuk demo penjualan improvement Human Capital.

## Yang ditampilkan

- pipeline kandidat dari `New` sampai `Hired`
- auto-scoring kandidat berdasarkan skill dan pengalaman
- auto-routing kandidat prioritas ke screening
- bulk import CV PDF/DOCX dari folder komputer atau Google Drive yang tersinkron
- direct Google Drive cloud import melalui OAuth + Google Picker
- job ad builder dengan spesifikasi publik dan scoring rules internal
- automation trail per kandidat
- reminder SLA dan task queue
- activity feed yang menunjukkan kerja otomatis sistem

## Cara membuka

1. Jalankan `server.py`
2. Buka `http://127.0.0.1:8765`

## Script demo singkat

1. Klik **Simulasikan Kandidat Baru**
2. Tambahkan kandidat dengan skill kuat
3. Tunjukkan bahwa sistem langsung memberi score dan mengarahkan kandidat ke screening
4. Klik **Lanjutkan** pada kandidat untuk memperlihatkan automation di setiap stage
5. Klik **Jalankan Automation Harian** untuk menunjukkan SLA reminder dan task queue

Atau, untuk demo yang lebih kuat:

1. Klik **Import CV**
2. Pilih posisi tujuan
3. Pilih folder berisi CV PDF/DOCX
4. Import sekaligus ke pipeline tanpa ketik manual

Folder `sample-cvs` sudah disertakan untuk mencoba alur impor dengan cepat.

## Modul Iklan Lowongan & Scoring Khusus

Klik **Buat Iklan Lowongan** untuk membuat:

- spesifikasi publik: ringkasan, tanggung jawab, kualifikasi, benefit
- spesifikasi internal: minimum pengalaman, must-have skills, nice-to-have skills, keyword penambah score, red flag, dan threshold auto-screening

Saat CV diimport untuk posisi tersebut, score kandidat dihitung dari aturan internal lowongan, bukan hanya dari skill umum.

## Catatan Google Drive

- Jika Google Drive sudah tersinkron ke komputer melalui Google Drive for desktop, gunakan jalur **Pilih folder**.
- Untuk direct import cloud, isi `drive-config.js` dengan:
  - OAuth Client ID
  - API key
  - Cloud project number / App ID
- Authorized JavaScript origin untuk demo lokal:
  - `http://127.0.0.1:8765`
  - `http://localhost:8765`
- Jalur folder cloud memakai scope `https://www.googleapis.com/auth/drive.readonly` karena aplikasi harus membaca isi folder yang dipilih dan mengunduh CV di dalamnya.
- Jika ingin izin yang lebih sempit, gunakan pendekatan file-per-file dengan scope `https://www.googleapis.com/auth/drive.file`.
- File Word yang didukung saat ini adalah `.docx`; format `.doc` lama perlu proses konversi tambahan.
- Detail setup tersedia di `GOOGLE_DRIVE_SETUP.md`.

## Nilai jual yang ingin terlihat

Recruiter tidak lagi sibuk mengejar status kandidat satu per satu; sistem yang menjaga ritme proses, manusia fokus pada keputusan.
