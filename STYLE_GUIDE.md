# Style Guide: Logikanya.Tech (Social Graphic Studio)

Panduan desain visual dan copywriting resmi untuk seluruh aset grafis media sosial (Instagram Carousel 4:5 dan Story/Reel 9:16) di bawah brand **Logikanya.Tech**. 

Standar ini mengadopsi prinsip desain dari **[Hallmark](file:///Users/lcgoesinternational/Desktop/webmaster-dana/my-ai/.agents/skills/hallmark/SKILL.md)** (*The Floor Rules*) dan standar copywriting dari **[Anti-Slop](file:///Users/lcgoesinternational/Desktop/webmaster-dana/my-ai/.agents/skills/anti-slop/SKILL.md)** (*dharmawan-id*).

---

## 🎨 1. Palet Warna & Token CSS (`:root`)

Semua warna dideklarasikan sebagai token CSS di bagian `:root` atau inline theme block:

| Token / Komponen | Hex Code | Tailwind Equivalent | Keterangan |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | `#ffffff` | `bg-white` | Bersih, lapang, dan berbobot editorial |
| **Primary Text** | `#18181b` | `text-[#18181b]` | Deep charcoal (Zinc 900) untuk kontras tinggi ramah mata |
| **Secondary Text** | `#475569` | `text-slate-600` | Abu-abu medium untuk paragraf penjelas |
| **Brand Accent (Utama)**| `#c2410c` | `text-[#c2410c]` / `bg-[#c2410c]` | Terracotta Orange khas Logikanya.Tech |
| **Secondary Accent** | `#0891b2` | `text-[#0891b2]` / `bg-[#0891b2]` | Cyan 600 untuk teknologi kedua (fotonik/cahaya) |
| **Cards & Surfaces** | `#f8fafc` | `bg-[#f8fafc]` | Slate 50 untuk kotak diagram dan konten |
| **Subtle Borders** | `#e2e8f0` | `border-slate-200` | Border tipis 1px pemisah area |

---

## 📐 2. Background Texture (Blueprint Grid System)

Setiap slide dan teaser wajib menyertakan layer grid kotak tipis di belakang konten:

```html
<!-- Square Line Grid Pattern -->
<div class="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 pointer-events-none"></div>
```
* **Ukuran Grid:** `40px x 40px`.
* **Warna Garis:** `#e2e8f0`.
* **Opacity:** `0.6` (subtil, tidak mendominasi konten teks).

---

## 🔤 3. Tipografi (Typography)

Menggunakan kombinasi 2 font family resmi: **Poppins** (Headings & Display) dan **Inter** (Body & Data Teknis).

* **Font Judul / Display (Headings):** `Poppins`
  - Karakter: Geometris, tebal, memikat (*punchy*), dan sangat tegas di feed media sosial.
  - Judul Cover (Slide 1): `font-black text-5xl tracking-tight leading-[1.14]` (Weight 900)
  - Judul Slide Isi (2–7): `font-extrabold text-4xl tracking-tight` (Weight 800)
  - Nama Brand Logo: `font-extrabold text-2xl`
* **Font Konten & Data Teknis (Body & Technical):** `Inter`
  - Karakter: Tajam, netral, sangat mudah dibaca (*ultra-readable*) di layar smartphone pada ukuran kecil hingga menengah.
  - Body / Penjelas: `text-xl text-slate-600 leading-relaxed font-normal` (Weight 400 / 500)
  - Elemen Teknis (`.mono`): Penomoran slide (`SLIDE 01 / 07`), badge teknis, kode query SQL, parameter angka, dan handle (`@logikanyatech`) menggunakan **Inter dengan Tabular Numbers** (`font-feature-settings: 'tnum'; font-variant-numeric: tabular-nums`).

---

### Snippet Google Fonts CDN:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
```

---

## 🏷️ 3.1 Logo Resmi Logikanya.Tech (Brand Identity)

* **Berkas Aset:** `assets/logo.png` (PNG RGBA transparan resolusi tinggi)
* **Konsep Visual:** Bohlam ide berbentuk kurung kurawal `{ }` gelap, dengan microchip IC di bagian bawah dan 4 jalur sirkuit tembaga PCB (*copper circuit traces*) berwarna oranye terakota (`#c2410c`) yang mengarah ke atas.
* **Standar Tampilan Header Slide:**
  Menggunakan wadah frame putih minimalis berbingkai halus:
  ```html
  <div class="w-10 h-10 p-1.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0">
    <img src="../assets/logo.png" alt="Logikanya.Tech Logo" class="w-full h-full object-contain">
  </div>
  ```
* **Standar Slide 7 (CTA 3D):**
  Logo terintegrasi langsung pada permukaan tekstur plat 3D Monolith Three.js berdampingan dengan tipografi brand `Logikanya.Tech`.

---

## 🛡️ 4. Standar Desain Visual: Hallmark *The Floor*

Mengikuti standar baku [Hallmark](file:///Users/lcgoesinternational/Desktop/webmaster-dana/my-ai/.agents/skills/hallmark/SKILL.md) untuk mencegah *generic AI design defaults*:
1. ❌ **Tanpa Gradasi Murahan:** Dilarang keras menggunakan gradasi ungu-ke-biru/cyan (*purple-to-blue neon gradients*).
2. ❌ **Tanpa Card dalam Card (*No Card-in-Card Nesting*):** Jangan membuat kartu di dalam kartu yang membuat layout terasa sesak dan tebal.
3. ❌ **Tanpa Emoji sebagai Ikon:** Selalu gunakan SVG icon modern via Lucide Icons (`<i data-lucide="..."></i>`), bukan emoji karakter.
4. ❌ **Tanpa Metrik Palsu:** Dilarang mengarang testimoni, metrik, atau data tanpa referensi teknis yang jelas.
5. **50/50 Visual-Copy:** Minimal 50% area canvas didedikasikan untuk elemen visual (foto hardware berbingkai atau diagram skematik SVG).

---

## 🖼️ 5. Aturan Visual & Foto Nyata (CSS Frame Mockup)

1. **CSS Frame Mockup:**
   - Sudut melengkung halus: `rounded-3xl` (24px - 28px).
   - Border halus: `border border-slate-200`.
   - Gradient gelap bawah: `bg-gradient-to-t from-black/85 via-black/20 to-black/40` agar teks caption bawah tetap terbaca jelas di atas gambar terang.
2. **Aturan Badge Foto (Strict Rule):**
   - ❌ **DILARANG KERAS** menggunakan label *"Foto Asli"*, *"Gambar Nyata"*, atau *"Real Hardware"*.
   - ✅ **WAJIB** menggunakan **Nama Komponen Teknis Resmi** (contoh: `300MM SILICON WAFER`, `DILUTION REFRIGERATOR (-273°C)`, `INTEGRATED OPTICAL MODULATOR`).
   - Badge menggunakan format glassmorphism gelap: `bg-black/60 backdrop-blur-md text-white text-xs font-extrabold mono border border-white/20`.

---

## 📱 6. Format Story Teaser (9:16)

* **Dimensi:** Base `1080 x 1920 px` dirender dengan skala Retina 2x menjadi `2160 x 3840 px`.
* **Komposisi:**
  - Header brand di atas.
  - Hook headline tebal di bagian atas.
  - **Dual Real Photo Split:** Dua foto berdampingan (misal: Cryostat Kiri, Photonic Chip Kanan) dengan tinggi `560px` dan badge komponen masing-masing.
  - CTA Button besar di bawah mengarahkan audiens untuk geser ke postingan Feed.

---

## ✍️ 7. Standar Copywriting: Anti-Slop (dharmawan-id)

Merujuk langsung pada protokol [anti-slop](file:///Users/lcgoesinternational/Desktop/webmaster-dana/my-ai/.agents/skills/anti-slop/SKILL.md):
* **Nada Bicara:** Menggunakan bahasa Indonesia praktisi teknologi yang hidup (*Smart-Casual Tech*) dengan partikel autentik (*nah, sih, dong, kan, udah, nggak, duet maut*).
* **Eliminasi AI Calque:** Hindari konstruksi kaku terjemahan seperti *"yang mana"*, *"di mana"* (sebagai kata sambung), pembuka naskah definisi istilah, dan klise biner *"bukan X melainkan Y"*.
* **Batas Teks:** Maksimal **30–45 kata per slide** agar ritme membaca (*cadence*) tetap dinamis.

---

## 🚀 8. Standar Khusus Slide Penutup (CTA 3D Three.js)

Slide penutup (Slide 7 atau slide terakhir) wajib menggunakan template `templates/cta-3d-slide.html` dengan aturan ketat:
1. **Kanvas 3D Transparan Murni (*Seamless / Pure Transparent*):**
   * Objek 3D Three.js (Monolit Logikanya.Tech `{ }`) melayang langsung di atas kanvas putih dan grid blueprint slide.
   * ❌ **DILARANG** membuat kartu wadah gelap tebal atau bingkai jendela program macOS (tanpa titik merah/kuning/hijau).
   * ❌ **DILARANG** menambahkan teks overlay teknis di pojok-pojok viewport 3D (*no corner overlays*).
2. **Headline Ramah & Bebas Overclaim:**
   * ❌ **DILARANG** memakai headline bombastis/overclaim (misal: *"Bangun Sistem yang Tangguh, Bukan Sekadar Jalan"*).
   * ✅ **WAJIB** memakai nada santai, hangat, dan mengajak berdiskusi (contoh: *"Suka Bahasan Teknis Praktis Kayak Gini? / Yuk Konek di @logikanyatech"*).
   * ❌ **DILARANG** menaruh *eyebrow pill/badge* di atas headline CTA agar area atas tetap bersih dan lapang.
3. **1 Bar CTA Horizontal Elegan:**
   * ❌ **DILARANG** membuat tumpukan 3 kotak kartu aksi kecil yang membuat slide terasa sesak/ramai.
   * ✅ **WAJIB** menggunakan 1 baris horizontal lapang: Tombol utama *Follow @logikanyatech* (oranye terakota) diapit tombol ringan *Simpan* & *Bagikan*.

---

## 🚫 9. Standar Slide Sebelum CTA (Slide n-1)

Slide tepat sebelum slide penutup (misal: Slide 6 pada carousel 7 slide) memiliki aturan ketat:
1. ❌ **DILARANG KERAS MEMBERI PERTANYAAN:**
   * Jangan menaruh pertanyaan diskusi (*"Ngobrol Santai: ...?"*), polling A/B, atau ajakan komentar prematur di slide sebelum CTA.
2. ✅ **Murni Konten & Kesimpulan Teknis (*Architectural Takeaways*):**
   * Gunakan slide ini murni untuk tabel komparasi, cheatsheet, atau 2 kartu kesimpulan arsitektur yang berbobot edukatif.
3. ✅ **Arahkan ke Slide Penutup:**
   * Tombol aksi footer cukup bertuliskan `Slide Penutup ➔` untuk mengalirkan audiens secara alami ke slide CTA Three.js.

---

## 💡 10. Standar Istilah Ramah Pemula (*Layman-First Architecture*)

1. **Gunakan Nama Fungsi Sehari-hari Sebagai Sebutan Utama:**
   * Gunakan *"Database Transaksi (Kasir)"* alih-alih hanya *"OLTP"*.
   * Gunakan *"Gudang Data Analitik"* alih-alih hanya *"OLAP"*.
2. **Edukasi Singkatan Melalui Kartu Glosarium:**
   * Jika ingin memperkenalkan singkatan teknis (seperti OLTP & OLAP), buatkan 1 kartu info box glosarium khusus di Slide 2 dengan analogi kasir toko vs ruang arsip rekap tahunan.
   * Dilarang mencantumkan singkatan teknis mentah yang membingungkan di judul cover atau badge utama.

---

## 💻 11. Code Snippet Library (Siap Salin-Tempel)

### Snippet A: Blueprint Grid Texture
```html
<div class="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 pointer-events-none"></div>
```

### Snippet B: CSS Frame Mockup Foto Nyata + Badge Glassmorphism
```html
<div class="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 h-[430px] flex flex-col justify-between">
  <img 
    src="../assets/nama-foto.jpg" 
    alt="Deskripsi Komponen" 
    class="absolute inset-0 w-full h-full object-cover filter contrast-[1.05] brightness-[0.98]"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/30"></div>

  <!-- Top Badge (Nama Komponen Teknis Murni) -->
  <div class="relative z-10 p-5">
    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-xs font-extrabold mono border border-white/20">
      <i data-lucide="cpu" class="w-3 h-3 text-[#c2410c]"></i>
      NAMA KOMPONEN TEKNIS RESMI
    </span>
  </div>

  <!-- Bottom Caption -->
  <div class="relative z-10 p-5 text-white">
    <h4 class="font-extrabold text-lg text-white">Nama Perangkat</h4>
    <p class="text-xs text-slate-200 mt-1 leading-relaxed">
      Keterangan fisik komponen dan fungsinya di lapangan.
    </p>
  </div>
</div>
```

### Snippet C: Dual-Photo Story Split Container (9:16)
```html
<div class="grid grid-cols-2 gap-6">
  <!-- Foto Kiri -->
  <div class="relative rounded-[28px] overflow-hidden border border-slate-200 shadow-sm bg-slate-900 h-[560px] flex flex-col justify-between">
    <img src="./assets/foto-1.jpg" class="absolute inset-0 w-full h-full object-cover filter contrast-[1.05]" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/40"></div>
    <div class="relative z-10 p-5">
      <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-black/65 backdrop-blur-md text-white text-xs font-black mono border border-white/20">
        KOMPONEN A
      </span>
    </div>
    <div class="relative z-10 p-5 text-white">
      <h4 class="font-black text-xl">Judul Kiri</h4>
    </div>
  </div>

  <!-- Foto Kanan -->
  <div class="relative rounded-[28px] overflow-hidden border border-slate-200 shadow-sm bg-slate-900 h-[560px] flex flex-col justify-between">
    <img src="./assets/foto-2.jpg" class="absolute inset-0 w-full h-full object-cover filter contrast-[1.05]" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/40"></div>
    <div class="relative z-10 p-5">
      <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-black/65 backdrop-blur-md text-white text-xs font-black mono border border-white/20">
        KOMPONEN B
      </span>
    </div>
    <div class="relative z-10 p-5 text-white">
      <h4 class="font-black text-xl">Judul Kanan</h4>
    </div>
  </div>
</div>
```

---

### Snippet D: Pure Transparent 3D Canvas Container (Three.js Showcase)
Gunakan pola ini ketika menampilkan objek atau diagram 3D prosedural di slide:

```html
<!-- Container 3D Transparan -->
<div class="relative w-full h-[520px] flex items-center justify-center my-auto">
  <canvas id="three-canvas" class="w-full h-full block"></canvas>
</div>

<!-- Standar Setup Three.js (img2threejs Pipeline) -->
<script>
  const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('three-canvas'),
    antialias: true,
    alpha: true,
    powerPreference: "high-performance"
  });
  renderer.setClearColor(0x000000, 0); // Pure transparent agar grid latar tetap terlihat
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 2, 2));

  // Render frame pertama langsung agar siap di-capture oleh Playwright
  renderer.render(scene, camera);
  window.__THREE_READY__ = true;
</script>
```
