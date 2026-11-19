# 🎨 Social Graphic Studio (Logikanya.Tech)

Studio otomatisasi pembuatan aset grafis media sosial (Instagram Carousel 4:5 dan Story/Reel 9:16) berkualitas tinggi berbasis HTML/Tailwind CSS dengan mesin render otomatis Playwright (output gambar Retina 4K PNG).

Dibangun dengan mematuhi dua standar baku:
* 🛡️ **[Hallmark (The Floor Rules)](.agents/skills/hallmark/SKILL.md):** Standar desain visual profesional tanpa gradasi neon murahan, tanpa card-in-card nesting, dan alokasi minimal 50% canvas untuk elemen visual.
* ✍️ **[Anti-Slop (dharmawan-id)](.agents/skills/anti-slop/SKILL.md):** Standar copywriting bahasa Indonesia praktisi teknologi yang alami, lugas, dan bersih dari klise AI.

---

## 💻 1. Panduan Setup Lintas OS (Cross-Platform)

Repositori ini dirancang agar dapat langsung dijalankan dengan lancar di **macOS**, **Linux / WSL**, maupun **Windows**.

### Prasyarat
* **Node.js:** Versi 18 ke atas (`node -v`)
* **Browser:** Google Chrome, Microsoft Edge, Brave, atau Chromium bawaan Playwright.

### Langkah Instalasi

```bash
# 1. Clone repositori ini
git clone <url-repo-anda>
cd social-graphic-studio

# 2. Install dependencies (Playwright)
npm install

# 3. (Opsional tapi disarankan) Install Chromium Playwright jika di OS Anda belum ada Chrome
npm run install:browsers
```

> **Catatan untuk Linux / WSL (Ubuntu/Debian):**  
> Jika render gagal karena dependensi library OS Linux belum lengkap, jalankan perintah ini sekali:  
> `npx playwright install-deps`

---

## 🚀 2. Cara Menjalankan Render (Commands)

Render script (`render.js`) otomatis mendeteksi browser di sistem Anda dan mengonversi file HTML ke PNG beresolusi Retina 2x (sangat tajam untuk Instagram).

### A. Render Carousel Feed (Aspek Rasio 4:5)
Base 1080 × 1350 px dirender ke **2160 × 2700 px**:
```bash
# Render seluruh slide di dalam folder slides/ suatu project
node render.js --input projects/data-warehouse/slides/ --output output/data-warehouse/ --format carousel
```

### B. Render Story / Reel Teaser (Aspek Rasio 9:16)
Base 1080 × 1920 px dirender ke **2160 × 3840 px**:
```bash
# Render single file story teaser
node render.js --input projects/data-warehouse/story-teaser.html --output output/data-warehouse/ --format story
```

### C. Opsi Skala Resolusi Tambahan
Secara default skala resolusi adalah `2x` (Retina 4K). Anda dapat menyesuaikannya:
```bash
# Skala 1x (1080x1350)
node render.js --input projects/data-warehouse/slides/ --scale 1

# Skala 3x Ultra-HD (3240x4050)
node render.js --input projects/data-warehouse/slides/ --scale 3
```

---

## 📁 3. Struktur Direktori

```text
social-graphic-studio/
├── .agents/
│   └── skills/                  # Skill AI terpasang (anti-slop & hallmark)
│       ├── anti-slop/           # Standar copywriting bebas AI-slop
│       └── hallmark/            # Standar desain visual modern
├── templates/
│   ├── carousel-slide.html      # Template dasar slide carousel (4:5)
│   └── story-slide.html         # Template dasar story teaser (9:16)
├── projects/
│   ├── data-warehouse/          # Proyek konten: Data Warehouse
│   │   ├── slides/              # Slide 1-6 format HTML
│   │   ├── story-teaser.html    # Story teaser 9:16
│   │   ├── caption.txt          # Naskah caption feed Instagram
│   │   └── assets/              # Gambar/diagram pelengkap
│   └── quantum-computing/       # Proyek konten: Quantum & Photonic
├── output/                      # Folder hasil render PNG (diabaikan Git)
├── package.json                 # Konfigurasi npm & scripts
├── render.js                    # Script render lintas OS (Playwright)
├── STYLE_GUIDE.md               # Aturan warna, grid blueprint, tipografi & snippet
├── WORKFLOW.md                  # SOP 5 tahap pembuatan konten
└── SKILL.md                     # Definisi skill studio untuk AI Agent
```

---

## 🎨 4. Identitas Brand & Desain (Logikanya.Tech)

* **Palet Warna:**
  * Background: Pure White (`#ffffff` / `bg-white`)
  * Primary Text: Deep Charcoal Zinc 900 (`#18181b`)
  * Accent Utama: Terracotta Orange (`#c2410c`)
  * Accent Sekunder: Cyan 600 (`#0891b2`)
  * Surface Card: Slate 50 (`#f8fafc`)
* **Grid Texture:** Blueprint Square Grid 40x40px (`opacity: 0.6`).
* **Tipografi:**
  * Judul & Display: `Poppins`
  * Body, Penjelas & Data Teknis: `Inter` (dengan Tabular Numbers untuk angka/badge)
* **Ikon:** Lucide Icons (`<script src="https://unpkg.com/lucide@latest"></script>`).

Untuk aturan detail dan pustaka kode komponen siap pakai, baca [STYLE_GUIDE.md](STYLE_GUIDE.md).

---

## ✍️ 5. Alur Pembuatan Konten Baru

1. Buat folder baru di `projects/<nama-topik>/`.
2. Salin template dari `templates/` ke folder `slides/` proyek baru Anda.
3. Tulis naskah dengan mematuhi [WORKFLOW.md](WORKFLOW.md) dan [Anti-Slop](.agents/skills/anti-slop/SKILL.md) (<45 kata per slide).
4. Jalankan perintah `render.js` untuk menghasilkan gambar PNG Retina 4K di folder lokal `output/<nama-topik>/`.
5. Review hasil render secara lokal melalui `walkthrough.md`.
6. *(Opsional - Hanya jika diminta)* Unggah ke Google Drive dengan perintah `npm run upload`.

---

## ☁️ 6. Sinkronisasi ke Google Drive (On-Demand / Sesuai Permintaan)

> 🛑 **Prinsip Utama:** Studio mengutamakan penyimpanan **lokal terlebih dahulu**. Sistem **TIDAK AKAN** mengunggah berkas ke Google Drive kecuali ada instruksi atau perintah eksplisit dari pengguna.

Jika Anda ingin mencadangkan atau membagikan aset ke Google Drive, gunakan perintah:

```bash
# 1. Unggah proyek tertentu (contoh: data-warehouse)
npm run upload -- --project data-warehouse
# atau: node upload.js --project data-warehouse

# 2. Unggah seluruh proyek yang ada di folder output/
npm run upload -- --all

# 3. Kustomisasi nama subfolder di Google Drive
node upload.js --project quantum-computing --subfolder "01 - Quantum Computing & Photonic"
```

### Fitur Sinkronisasi:
* **Deteksi Folder Otomatis:** Otomatis mencari atau membuat folder induk `Logikanya.Tech - Social Graphics` di Google Drive Anda.
* **In-Place Update:** Jika berkas gambar dengan nama yang sama sudah ada di Drive, script akan melakukan pembaruan berkas di tempat (*update in-place*) tanpa membuat duplikat ID atau merusak tautan yang sudah dibagikan.
* **Sync Metadata:** Setiap proses unggah menghasilkan file `output/<project>/gdrive-sync.json` yang mencatat ID Drive, tautan web preview, dan riwayat waktu sinkronisasi.

---

## 📜 Lisensi
MIT License © 2026 Logikanya.Tech
