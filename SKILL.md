---
name: social-graphic-studio
description: "Studio lengkap untuk membuat konten media sosial (Instagram Carousel 4:5 dan Story/Reel 9:16) berupa gambar Retina 4K dari HTML/CSS Tailwind dan copywriting persuasif santai berkualitas tinggi. Mengintegrasikan skill anti-slop (dharmawan-id) untuk copywriting alami bebas klise dan hallmark (nutlope) untuk standar estetika desain UI profesional."
---

# Social Graphic Studio

Skill ini mengotomatisasi pembuatan konten media sosial berbasis gambar visual dan tipografi modern (Instagram Carousel 4:5 dan Instagram Story 9:16), dari perumusan ide, penulisan naskah/copywriting santai manusiawi, hingga perenderan menjadi file PNG siap unggah beresolusi Retina 4K menggunakan Playwright.

Standar desain dan copywriting mengikuti panduan resmi di [STYLE_GUIDE.md](file:///Users/lcgoesinternational/Desktop/webmaster-dana/my-ai/social-graphic-studio/STYLE_GUIDE.md) serta terintegrasi dengan skill **[anti-slop](file:///Users/lcgoesinternational/Desktop/webmaster-dana/my-ai/.agents/skills/anti-slop/SKILL.md)** dan **[hallmark](file:///Users/lcgoesinternational/Desktop/webmaster-dana/my-ai/.agents/skills/hallmark/SKILL.md)**.

---

## 🚀 Alur Kerja Produksi

Ketika pengguna meminta dibuatkan konten media sosial (Carousel atau Story), ikuti 5 tahap terstruktur berikut:

```
[1. Pilih Framework] ➔ [2. Tulis Naskah (anti-slop)] ➔ [3. Layout HTML/CSS (hallmark)] ➔ [4. Render 4K] ➔ [5. Delivery]
```

---

### Tahap 1: Pilih Arsitektur Narasi Slide (5–7 Slide)
* **Slide 1 (Cover):** Scroll-stopper headline + Micro-subjudul + 50/50 visual split (Foto wafer/hardware + Skematik inti).
* **Slide 2 (Akar Masalah):** Analisis kendala teknologi lama menggunakan diagram SVG fungsional.
* **Slide 3 & 4 (Pilar Solusi):** Foto hardware nyata dengan CSS frame mockup + Diagram mekanisme kerja.
* **Slide 5 (Sinergi / Masa Depan):** Diagram arsitektur hibrida atau skenario nyata implementasi.
* **Slide 6 (Rangkuman & CTA):** Matriks komparasi tabel + Pertanyaan diskusi interaktif komunitas.
* **Story Teaser (9:16):** Teaser layar penuh dengan layout **Dua Foto Berdampingan** (*Dual Real Photo Split*).

---

### Tahap 2: Copywriting dengan Standar [anti-slop](file:///Users/lcgoesinternational/Desktop/webmaster-dana/my-ai/.agents/skills/anti-slop/SKILL.md)
> 🛑 **WAJIB (MANDATORY):** Setiap draf naskah slide dan caption WAJIB diaudit dan disaring menggunakan skill [anti-slop](file:///Users/lcgoesinternational/Desktop/webmaster-dana/my-ai/.agents/skills/anti-slop/SKILL.md) sebelum masuk ke tahap pembuatan file HTML.

Tulis naskah dengan gaya **Smart-Casual Tech Indonesian**:
* **Batas Kata:** Maksimal **30–45 kata per slide** agar nyaman dibaca di smartphone.
* **Nada Bicara:** Percakapan santai praktisi teknologi (*"udah mulai mentok"*, *"nggak pakai kabel tembaga lagi"*, *"kalian"*, *"duet maut"*).
* **Bebas Klise AI:** Hapus pola terjemahan calque (*"yang mana"*, *"di mana"*), pembuka definisi istilah, pertanyaan retoris pengisi (*"Lalu apa solusinya?"*), dan biner palsu (*"bukan X melainkan Y"*).
* **Akurasi:** Pertahankan nama teknis resmi secara presisi (*Quantum Tunneling, Dilution Cryostat, Waveguide, Qubit*).

---

### Tahap 3: Desain HTML/CSS dengan Standar [hallmark](file:///Users/lcgoesinternational/Desktop/webmaster-dana/my-ai/.agents/skills/hallmark/SKILL.md)
> 🛑 **WAJIB (MANDATORY):** Setiap layout HTML slide WAJIB mematuhi standar *The Floor* dari [hallmark](file:///Users/lcgoesinternational/Desktop/webmaster-dana/my-ai/.agents/skills/hallmark/SKILL.md) dan token [STYLE_GUIDE.md](file:///Users/lcgoesinternational/Desktop/webmaster-dana/my-ai/social-graphic-studio/STYLE_GUIDE.md).
* **Dimensi:**
  * Carousel: `width: 1080px`, `height: 1350px` (Rasio 4:5).
  * Story Teaser: `width: 1080px`, `height: 1920px` (Rasio 9:16).
* **Standar Visual [STYLE_GUIDE.md & Hallmark The Floor]:**
  * Canvas putih bersih (`#ffffff`), teks deep charcoal (`#18181b`), aksen oranye terakota (`#c2410c`).
  * Layer Background Grid: `40x40px square grid` dengan `opacity: 0.6`.
  * Komposisi 50/50: Minimal 50% ruang untuk elemen visual (foto nyata atau diagram SVG).
  * Dilarang gradasi ungu-ke-biru neon murahan, dilarang card dalam card (*no nested cards*), dan dilarang emoji sebagai icon.
  * Badge Komponen: Wajib gunakan nama komponen teknis resmi (`300MM SILICON WAFER`, `DILUTION CRYOSTAT (-273°C)`). Tanpa tulisan *"Foto Asli"*.

---

### Tahap 4: Jalankan Render Engine ke PNG Retina 4K
Jalankan script `render.js` (Playwright Chromium via Google Chrome sistem):

```bash
# Render slide Carousel (4:5) ke resolusi 2160 x 2700 px
node social-graphic-studio/render.js --input social-graphic-studio/projects/[nama-topik]/slides/ --output social-graphic-studio/output/[nama-topik]/ --format carousel

# Render Story Teaser (9:16) ke resolusi 2160 x 3840 px
node social-graphic-studio/render.js --input social-graphic-studio/projects/[nama-topik]/story-teaser.html --output social-graphic-studio/output/[nama-topik]/ --format story
```

---

### Tahap 5: Delivery & Output
1. Seluruh gambar PNG tersimpan di `./social-graphic-studio/output/[nama-topik]/`.
2. Siapkan file `caption.txt` lengkap dengan hook, poin santai, call-to-action, dan 5–8 hashtag.
3. Sajikan pratinjau visual kepada pengguna di dokumen `walkthrough.md`.
