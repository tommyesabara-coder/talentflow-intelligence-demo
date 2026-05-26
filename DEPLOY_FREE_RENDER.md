# Deploy online gratis — TalentFlow Intelligence

Jalur paling praktis untuk demo online gratis saat ini adalah **Render Free Web Service**.

## Kenapa Render?

- Bisa menjalankan backend Python, bukan hanya file statis.
- Cocok untuk demo aplikasi ini karena parsing CV berjalan lewat `server.py`.
- Ada free web service, tetapi aplikasi bisa “tidur” setelah tidak dipakai beberapa menit dan akan cold start saat dibuka lagi.

## File yang sudah disiapkan

- `requirements.txt` — dependency Python untuk baca PDF/DOCX.
- `Procfile` — perintah jalan standar: `python server.py`.
- `render.yaml` — blueprint deployment Render.
- `server.py` — sudah dibuat kompatibel dengan hosting cloud memakai environment variable `PORT`.

## Langkah deploy

### 1. Upload project ke GitHub

Pastikan file rahasia tidak ikut ter-upload:

- `.env`
- `drive-config.js`
- `openai.env`

File tersebut sudah masuk `.gitignore`.

### 2. Buat akun Render

Buka:

https://render.com

Login dengan GitHub.

### 3. Buat service baru

Pilih:

**New → Web Service → Connect GitHub repository**

Lalu isi:

- Runtime: Python
- Build Command: `pip install -r requirements.txt`
- Start Command: `python server.py`
- Plan: Free

Jika Render membaca `render.yaml`, sebagian konfigurasi akan otomatis.

### 4. Masukkan API key di Render

Masuk ke:

**Environment → Environment Variables**

Isi:

```text
GEMINI_API_KEY=isi_key_gemini_anda
GEMINI_RESUME_MODEL=gemini-2.5-flash
HYBRID_FAST_PARSER=true
HYBRID_CONFIDENCE_THRESHOLD=0.78
HYBRID_FIELD_CONFIDENCE_THRESHOLD=0.64
```

Jangan masukkan API key langsung ke file project.

### 5. Deploy

Klik **Deploy**.

Setelah selesai, Render akan memberi URL seperti:

```text
https://talentflow-intelligence-demo.onrender.com
```

## Catatan penting untuk demo publik

Hosting gratis cocok untuk preview calon client, bukan produksi serius.

Risiko free hosting:

- Aplikasi bisa sleep saat tidak dipakai.
- Upload CV dan parsing bisa lebih lambat setelah cold start.
- Data saat ini masih banyak tersimpan di browser/local demo, belum database cloud production.
- Untuk dijual ke banyak perusahaan, perlu login, database, storage CV aman, audit log, dan pembatasan akses.

