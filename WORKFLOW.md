# SOP & Workflow: Social Graphic Studio (Comprehensive Standard)

`social-graphic-studio` adalah sistem terintegrasi di Antigravity untuk memproduksi postingan **Carousel (4:5)** dan **Story Teaser (4:5)** dalam bentuk gambar beresolusi ultra tajam (**Retina 4K**) langsung dari kode HTML/CSS Tailwind dan Playwright.

Workflow ini mematuhi standar desain dari **[Hallmark](file:///Users/lcgoesinternational/Desktop/webmaster-dana/my-ai/.agents/skills/hallmark/SKILL.md)** (*The Floor Rules*) dan standar copywriting dari **[Anti-Slop](file:///Users/lcgoesinternational/Desktop/webmaster-dana/my-ai/.agents/skills/anti-slop/SKILL.md)** (*dharmawan-id*).

---

## 📁 Struktur Direktori Proyek

```text
social-graphic-studio/
├── SKILL.md                  # Definisi Skill untuk Antigravity AI Agent
├── WORKFLOW.md               # SOP alur kerja (dokumen ini)
├── STYLE_GUIDE.md            # Panduan resmi warna, tipografi, grid & snippet library
├── package.json              # Dependency Playwright & script render
├── render.js                 # Script Node.js pengubah HTML ke PNG Retina 2x (Google Chrome)
├── upload.js                 # Script pengunggah/pembaru aset ke Google Drive (On-Demand)
├── templates/                # Template dasar HTML slide (Standar Light Blueprint)
│   ├── carousel-slide.html   # Template Carousel 4:5 (1080x1350)
│   └── story-slide.html      # Template Story Teaser 4:5 (1080x1350)
├── projects/                 # Folder pengerjaan per topik konten
│   └── [nama-topik]/
│       ├── assets/           # Foto hardware / gambar pendukung
│       ├── slides/           # File HTML slide carousel 1 s/d N
│       ├── story-teaser.html # File HTML Story Teaser 4:5 (Dual Photo Split)
│       └── caption.txt       # Naskah caption media sosial
└── output/                   # Folder hasil render gambar PNG Retina 4K siap upload
    └── [nama-topik]/
        ├── slide-1-cover.png (2160x2700)
        ├── slide-2-...png
        ├── story-teaser.png  (2160x2700)
        └── gdrive-sync.json  # Metadata sinkronisasi Google Drive
```

---

## 🔄 Alur Kerja 5 Tahap (Production Pipeline)

```
[1. Riset & Framework] ➔ [2. Copywriting (Anti-Slop)] ➔ [3. Layout HTML (Hallmark Floor)] ➔ [4. Render 4K] ➔ [5. Delivery / GDrive]
```

### Tahap 1: Riset & Arsitektur Narasi
Tentukan struktur konten (standar 7 slide):
* **Slide 1 (Cover):** Hook kuat penahan scroll + Subjudul ringkas + Visual split (Foto nyata wafer/hardware + Skematik inti).
* **Slide 2 (Akar Masalah & Glosarium):** Bedah kendala sistem lama dengan diagram alur SVG fungsional + Box info glosarium istilah ramah pemula.
* **Slide 3 & 4 (Pilar Solusi & Pipeline):** Foto hardware nyata dengan CSS frame mockup + Diagram mekanisme kerja/pipeline.
* **Slide 5 (Kapan Wajib Pakai):** Kriteria kesiapan teknis atau skenario nyata implementasi di lapangan.
* **Slide 6 (Matriks Komparasi - Slide Sebelum CTA):** Tabel perbandingan parameter lapang (`py-6 px-7`, font 19px) + 2 poin kesimpulan arsitektur padat menempel rapat di bawah tabel (`gap-5`). (**DILARANG MEMBERI PERTANYAAN DI SLIDE INI DAN DILARANG MEMBIARKAN CELAH KOSONG DI TENGAH**).
* **Slide 7 (Slide Penutup / CTA 3D Three.js):** Monolit 3D Logikanya.Tech melayang di atas kanvas transparan murni (`h-[520px]`) + headline ramah tanpa overclaim + 1 bar CTA horizontal lapang + footer utuh sejajar.
* **Story Teaser (Format 4:5, 1080x1350):** Teaser proporsional dengan layout **Dua Foto Berdampingan** (*Dual Real Photo Split*), tanpa status bar hitam buatan AI.

---

### Tahap 2: Copywriting dengan Standar [Anti-Slop](file:///Users/lcgoesinternational/Desktop/webmaster-dana/my-ai/.agents/skills/anti-slop/SKILL.md)
> 🛑 **WAJIB (MANDATORY):** Setiap draf naskah slide dan caption WAJIB disaring dengan protokol [anti-slop](file:///Users/lcgoesinternational/Desktop/webmaster-dana/my-ai/.agents/skills/anti-slop/SKILL.md) sebelum masuk ke tahap layouting HTML.

Tulis naskah teks dengan aturan:
* **Maksimal 30–45 kata per slide** agar nyaman dibaca di smartphone.
* **Tone:** Santai khas obrolan engineer lokal (*"udah mulai mentok"*, *"nggak pakai kabel tembaga lagi"*, *"kalian"*, *"duet maut"*).
* **Layman-First Architecture:** Gunakan nama fungsi bahasa sehari-hari sebagai sebutan utama (contoh: *"Database Transaksi (Kasir)"* dan *"Gudang Data Analitik"*). Hindari singkatan mentah (OLTP/OLAP) di judul/badge utama.
* **Aturan Slide Sebelum CTA:** DILARANG menaruh pertanyaan diskusi atau polling di slide tepat sebelum slide CTA. Murni gunakan untuk kesimpulan teknis.
* **Aturan Headline CTA:** Wajib bersahabat, santai, dan bebas overclaim (contoh: *"Suka Bahasan Teknis Praktis Kayak Gini? / Yuk Konek di @logikanyatech"*). Dilarang memasang eyebrow pill di atas headline CTA.
* **Filter Slop Bahasa Indonesia:** Hapus pola terjemahan calque (*"yang mana"*, *"di mana"* sebagai sambung), hindari pembuka definisi istilah, pertanyaan retoris pengisi (*"Lalu apa solusinya?"*), dan kontras biner klise (*"bukan X melainkan Y"*).
* **Akurasi:** Pertahankan nama teknis resmi secara presisi (*Quantum Tunneling, Dilution Cryostat, Waveguide, Qubit*).

---

### Tahap 3: Desain HTML/CSS dengan Standar [Hallmark](file:///Users/lcgoesinternational/Desktop/webmaster-dana/my-ai/.agents/skills/hallmark/SKILL.md) & [STYLE_GUIDE.md](file:///Users/lcgoesinternational/Desktop/webmaster-dana/my-ai/social-graphic-studio/STYLE_GUIDE.md)
> 🛑 **WAJIB (MANDATORY):** Seluruh styling slide WAJIB mematuhi *The Floor* dari [hallmark](file:///Users/lcgoesinternational/Desktop/webmaster-dana/my-ai/.agents/skills/hallmark/SKILL.md), token [STYLE_GUIDE.md](file:///Users/lcgoesinternational/Desktop/webmaster-dana/my-ai/social-graphic-studio/STYLE_GUIDE.md), serta aturan tipografi mobile-first.

Bangun file HTML menggunakan Tailwind CSS mematuhi *The Floor*:
* **Dimensi Kanvas:** Seluruh slide Carousel dan Story Teaser wajib berukuran **1080 x 1350 px (4:5)**.
* **Aturan Skala Tipografi Mobile-First (Anti Teks Kekecilan):**
  - Judul Poin/Kartu: `text-[21px] - text-[23px] font-black`.
  - Deskripsi Poin/Body Teks: Minimal `text-[18px] - text-[19px] leading-relaxed`.
  - Nomor Badge Poin: `w-14 h-14 text-[22px] font-black mono`.
  - Tabel: Padding sel lapang `py-6 px-7`, parameter `text-[19px] font-black mono`, isi `text-[19px]`.
* **Aturan Footer Ukuran Besar di Seluruh Slide (1–7):**
  - Format wajib: `border-t-2 border-zinc-200 pt-5 z-10 mono text-[19px] text-zinc-600`.
  - Brand: `@logikanyatech` `text-[20px] font-black text-zinc-900`.
  - Navigasi CTA Kanan: `text-[19px] font-bold text-[#c2410c]` dengan panah/ikon `w-5 h-5`.
* **Eliminasi Total Celah Kosong (Zero Whitespace Void):**
  - Dilarang keras menggunakan kombinasi `my-auto` dan `justify-between` kaku yang menciptakan celah kosong putih 200–300px di tengah slide.
  - Kartu kesimpulan bawah wajib menempel padat dan proporsional di bawah tabel/elemen utama (`gap-5`).
* **Background Grid:** Sertakan `40x40px square grid` dengan `opacity-60`.
* **50/50 Visual Split:** Setiap slide memiliki minimal 50% ruang visual (foto nyata atau SVG diagram).
* **Hallmark The Floor:** Dilarang menggunakan gradasi ungu-ke-biru neon, dilarang card di dalam card (*no nested cards*), dilarang status bar artifisial ("Status: Enforced"), dan dilarang emoji sebagai icon (wajib Lucide Icons).
* **Relative Path:**
  - File di dalam `slides/*.html` memanggil aset dengan `../assets/[nama-file]`.
  - File di root project seperti `story-teaser.html` memanggil aset dengan `./assets/[nama-file]`.

---

### Tahap 4: Eksekusi Render ke PNG Retina 4K
Jalankan script `render.js` (otomatis mendeteksi Google Chrome sistem):

```bash
# 1. Render seluruh slide Carousel (4:5)
node social-graphic-studio/render.js --input social-graphic-studio/projects/[nama-topik]/slides/ --output social-graphic-studio/output/[nama-topik]/ --format carousel

# 2. Render Story Teaser (4:5)
node social-graphic-studio/render.js --input social-graphic-studio/projects/[nama-topik]/story-teaser.html --output social-graphic-studio/output/[nama-topik]/ --format carousel
```

---

### Tahap 5: Delivery & Sinkronisasi Google Drive
1. Periksa seluruh aset PNG Retina 4K di folder lokal:
   - `social-graphic-studio/output/[nama-topik]/slide-*.png` (2160 x 2700 px)
   - `social-graphic-studio/output/[nama-topik]/story-teaser.png` (2160 x 2700 px)
2. Pastikan file `caption.txt` sudah siap di-copy-paste ke Instagram & LinkedIn.
3. Sajikan pratinjau visual kepada pengguna melalui file `walkthrough.md`.
4. **Sinkronisasi Google Drive (On-Demand):**
   Ketika pengguna meminta untuk mengunggah atau memperbarui ke Google Drive, jalankan:
   ```bash
   cd social-graphic-studio && node upload.js --project [nama-topik]
   ```
   Script secara otomatis mendeteksi berkas yang sudah ada (`gdrive mutate update`) sehingga URL berkas tetap konsisten dan tidak terjadi duplikasi.
4. 🛑 **ATURAN GOOGLE DRIVE (ON-DEMAND ONLY):** DILARANG mengunggah ke Google Drive secara otomatis jika pengguna tidak menyuruh/meminta. Seluruh aset wajib disimpan di lokal terlebih dahulu. Hanya jalankan perintah di bawah ini apabila pengguna memberikan instruksi eksplisit:
   ```bash
   node social-graphic-studio/upload.js --project [nama-topik]
   # atau: npm run upload -- --project [nama-topik]
   ```

---

## 📈 Evolusi dari Versi Awal (Evolution Notes)

Berikut adalah rekap perbandingan antara **Workflow Versi Awal** saat studio pertama kali dibuat dibandingkan dengan **Workflow Mutakhir** saat ini:

| Parameter | Versi Awal (V1) | Versi Mutakhir (V2 - Current Standard) |
| :--- | :--- | :--- |
| **Tema Warna** | Dark Mode monolitik (`#0b0f19`) | Clean Light Mode arsitektural (`#ffffff`, `#18181b`, aksen `#c2410c`) |
| **Latar Belakang** | Gradasi radial blur sederhana | Blueprint Grid System `40x40px` (`opacity-60`) elegan |
| **Struktur Konten** | Teks dominan (banyak tulisan) | **50/50 Visual-Copy Split** (Seimbang antara visual & micro-copy) |
| **Integrasi Foto** | Tanpa integrasi foto nyata | **CSS Frame Mockup** + foto perangkat keras resolusi tinggi |
| **Pelabelan Foto** | Sempat mencantumkan *"Foto Asli"* | **Pure Technical Component Labels** (misal: `DILUTION CRYOSTAT (-273°C)`) |
| **Story Teaser (9:16)** | Layout kartu tunggal | **Dual-Photo Split** (Dua foto nyata berdampingan) |
| **Gaya Bahasa (Tone)** | Bahasa baku kaku / textbook | **Smart-Casual Tech Indonesian** (santai, mengalir, tanpa AI slop) |
| **Standar Eksternal** | Tidak terikat standar luar | Terikat wajib dengan **Hallmark** (desain) & **Anti-Slop** (copy) |
| **Kualitas Render** | Resolusi 1080p standar | **Retina 4K (deviceScaleFactor: 2)** via Google Chrome lokal |
| **Slide Penutup (CTA)** | Tumpukan 3 kotak kartu ramai | **3D Three.js Seamless Transparent** + 1 bar horizontal CTA lapang |
| **Slide Sebelum CTA** | Pertanyaan diskusi & polling prematur | **Murni Kesimpulan Teknis** (Dilarang ada pertanyaan) |
| **Terminologi Teknis** | Singkatan mentah (OLTP / OLAP) | **Layman-First Architecture** (nama fungsi harian + glosarium analogi) |
| **Tipografi Sistem** | Plus Jakarta Sans & JetBrains Mono | **Strict Inter & Poppins** (Poppins Display & Inter Tabular Body) |
| **Distribusi Aset** | Manual copy file lokal | **Local First + On-Demand Google Drive** (Hanya upload jika disuruh) |
