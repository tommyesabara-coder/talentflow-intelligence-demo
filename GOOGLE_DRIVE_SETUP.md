# Google Drive Cloud Import Setup

## Yang perlu disiapkan

1. Google Cloud project
2. Google Drive API aktif
3. OAuth consent screen
4. OAuth Client ID untuk web app
5. API key
6. Cloud project number / App ID

## Authorized JavaScript origins untuk demo lokal

- `http://127.0.0.1:8765`
- `http://localhost:8765`

## Scope yang dipakai

Untuk fitur **pilih folder lalu import semua CV di dalam folder**, demo ini memakai:

```text
https://www.googleapis.com/auth/drive.readonly
```

Alasannya: aplikasi perlu membaca isi folder yang dipilih dan mengunduh seluruh file CV PDF/DOCX di dalamnya.

Jika nanti Anda ingin jalur izin yang lebih sempit, gunakan pola **pilih file satu per satu** dengan:

```text
https://www.googleapis.com/auth/drive.file
```

## Isi file konfigurasi

Salin isi `drive-config.example.js` ke `drive-config.js`, lalu ganti nilainya:

```js
window.RECRUITFLOW_DRIVE_CONFIG = {
  clientId: "YOUR_GOOGLE_OAUTH_CLIENT_ID.apps.googleusercontent.com",
  apiKey: "YOUR_GOOGLE_API_KEY",
  appId: "YOUR_GOOGLE_CLOUD_PROJECT_NUMBER",
  scope: "https://www.googleapis.com/auth/drive.readonly",
};
```

## Cara kerja integrasinya

1. User klik **Hubungkan Drive**
2. Google Identity Services meminta izin akses
3. User klik **Pilih folder Drive**
4. Google Picker membuka folder selector
5. Aplikasi mengambil semua PDF/DOCX langsung dari folder yang dipilih
6. File dikirim ke parser CV yang sama
7. Kandidat otomatis masuk ke recruitment pipeline

## Catatan produksi

- Scope `drive.readonly` adalah restricted scope, jadi aplikasi publik akan membutuhkan proses verifikasi tambahan dari Google.
- Bila produk nanti dijual luas, pertimbangkan menyediakan dua mode:
  - **Folder import** untuk admin internal
  - **File picker** untuk izin paling sempit
