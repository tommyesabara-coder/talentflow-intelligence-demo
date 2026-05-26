# Setup Ollama untuk Parser CV Lokal

Tujuan: membuat parsing CV memakai AI lokal di laptop, tanpa biaya API.

## 1. Install Ollama

Download dan install Ollama dari:

https://ollama.com/download

Setelah selesai, buka aplikasi Ollama sekali agar service lokal berjalan.

## 2. Download model AI lokal

Buka Command Prompt / PowerShell, lalu jalankan:

```powershell
ollama pull qwen2.5:1.5b
```

Model ini cukup kuat untuk membaca CV dan melakukan ekstraksi terstruktur. Jika laptop terasa berat, bisa ganti ke model lebih kecil:

```powershell
ollama pull llama3.2:3b
```

Jika mengganti model, ubah `.env`:

```env
OLLAMA_RESUME_MODEL=llama3.2:3b
```

## 3. Jalankan aplikasi

Pastikan `.env` berisi:

```env
LOCAL_ONLY_PARSER=true
OLLAMA_ENABLED=true
OLLAMA_BASE_URL=http://127.0.0.1:11434
OLLAMA_RESUME_MODEL=qwen2.5:1.5b
OLLAMA_TIMEOUT=120
OLLAMA_NUM_CTX=8192
```

Jika Ollama aktif, status aplikasi akan menampilkan:

`Ollama Local AI`

Jika Ollama belum aktif, aplikasi tetap berjalan memakai `Local Max Parser`.
