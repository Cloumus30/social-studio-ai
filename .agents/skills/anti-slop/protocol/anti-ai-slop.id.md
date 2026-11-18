# Standar Anti-AI-Slop (Bahasa Indonesia)

Panduan praktis untuk mendeteksi dan menulis ulang pola yang membuat teks terasa dihasilkan oleh model bahasa tanpa sentuhan editorial manusia. Dua bahasa: ini versi Indonesia; versi Inggris ada di `anti-ai-slop.en.md`. Bebas dan terbuka.

## Prinsip inti

Kalau teks terasa, terlihat, atau berbunyi seperti keluaran model bahasa tanpa penyuntingan manusia, teks itu gagal. Ini bukan daftar periksa sekali baca. Ini refleks: setiap aturan di bawah sekaligus detektor dan instruksi penulisan ulang.

## Disiplin remediasi (deteksi itu setengah kerja; perbaikannya adalah menulis ulang ke bahasa yang wajar)

Ketika pola slop ditemukan, jangan sekadar dihapus. Tulis ulang sehingga seorang editor manusia yang berpengalaman akan menulis kalimat itu. Penulisan ulang, bukan penandaan, yang menjadi hasil akhir.

1. Temukan pola spesifiknya (aturan mana yang dilanggar).
2. Tulis ulang ke bahasa yang wajar, dengan tetap menjaga makna asli: katakan hal itu secara langsung, ganti slop dengan detail konkret.
3. Baca ulang dengan uji lakmus. Kalau masih terasa seperti model, tulis ulang lagi.
4. Bervariasi, jangan berformula. Penggantian satu pola dengan pola lain (em-dash diganti koma tapi kalimatnya tetap kaku, "signifikan" diganti "penting" tapi nadanya sama) bukan perbaikan. Susun ulang kalimatnya.

Arahnya selalu sama: menuju cara seorang pakar manusia sungguhan menulis, dengan variasi ritme, detail konkret, dan satu klaim jelas per kalimat.

---

## 1. Larangan simbol

### Em-dash dan double-hyphen

| Konteks | Em-dash | Double-hyphen (--) | Gantinya |
|---------|---------|---------------------|----------|
| Obrolan kasual | dilarang | boleh | pemisah kasual wajar |
| Artefak publik (dokumen, proposal, situs, aplikasi, slide, ekspor) | dilarang | dilarang | parafrase: koma, tanda kurung, titik dua, titik, atau susun ulang kalimat |
| Komentar kode | dilarang | boleh, hemat | lebih baik susun ulang |

Kebiasaan em-dash sering berpindah ke pengganti lain, jadi melarangnya saja tidak cukup. Perhatikan penerusnya di bagian 15.

### Simbol lainnya

- Emoji sebagai penanda daftar (roket, kunci, bola lampu, bintang, centang, peniti, api): gunakan titik biasa atau nomor. Emoji hanya kalau pembaca memintanya.
- Emoji di judul/kepala bagian: judul teks bersih tanpa hiasan.
- Tanda kutip keriting dan apostrof keriting di konteks teks biasa (formulir, kode, obrolan, keterangan gambar): jejak salin-tempel yang kentara; normalkan.

---

## 2. Daftar hitam kosakata

Kata dan frasa yang muncul dalam teks mesin jauh lebih sering daripada dalam tulisan manusia. Tingkatan berdasarkan kebaruan: kata yang masih lolos di era model terkini paling perlu diwaspadai.

**Kata yang masih lolos di era terkini (bobot tertinggi):** "menyoroti", "menggarisbawahi", "memfasilitasi", "mengoptimalkan", "memanfaatkan", "mewujudkan", "mengakselerasi".

**Kata sifat pengembung kualitas:** komprehensif, holistik, inovatif, transformatif, signifikan, krusial, esensial, fundamental, substansial, inklusif, berkelanjutan, progresif, dinamis, sinergis, optimal, relevan (sebagai pengisi generik).

**Kata benda figuratif:** ekosistem (kecuali arti harfiah), lanskap (figuratif), fondasi, pilar, katalis, tonggak, jembatan, gerbang, benang merah, sinergi, stakeholder (kecuali konteks korporat yang memang pakai istilah ini).

**Klaster promo dan pariwisata:** "tidak dapat dipungkiri", "tak terelakkan", "sudah sepatutnya", "sangat penting untuk diperhatikan", "perlu digarisbawahi", "membuktikan komitmen", "kelas dunia", "bertaraf internasional", "berdaya saing tinggi".

**Frasa baku:** "transformasi digital", "optimalisasi proses", "peningkatan kapasitas", "pemberdayaan masyarakat" (tanpa objek spesifik), "penguatan ekosistem", "sinergi antar-pemangku kepentingan", "kolaborasi yang erat", "langkah strategis".

**Inflasi latinat dan formal (lebih baik pakai kata biasa):** memanfaatkan lebih baik gunakan, melaksanakan lebih baik lakukan, mengimplementasikan lebih baik terapkan, memperoleh lebih baik dapat, memfasilitasi lebih baik bantu, mengoptimalkan lebih baik perbaiki, krusial/pivotal lebih baik penting atau jelaskan mengapa.

**Klaster pasar dan e-commerce:** "berkualitas tinggi", "terbuat dari bahan pilihan", "cocok untuk semua kalangan", "dapatkan sekarang", "stok terbatas", "jangan sampai ketinggalan", "harga terjangkau dengan kualitas premium".

---

## 3. Larangan kata penghubung pengisi

- Jangan tumpuk "Selain itu / Di sisi lain / Lebih lanjut / Dengan demikian / Oleh karena itu / Sehubungan dengan hal tersebut" dalam satu paragraf atau berurutan. Katakan poin berikutnya langsung, atau pakai penghubung pendek ("Juga", "Dan", "Tapi", "Padahal").
- "Menariknya,", "Pentingnya,", "Tak kalah pentingnya," di awal kalimat: kalau kontennya memang menarik, itu kelihatan sendiri. Hapus labelnya.
- "Perlu dicatat bahwa...": langsung katakan hal itu.
- "Sebagaimana telah disebutkan sebelumnya" kecuali memang merujuk bagian yang jauh.
- "Beranjak ke...", "Mari kita bahas...", "Berikut ini akan dijelaskan...": langsung saja masuk ke substansi.
- Klaster birokrasi: "terlepas dari hal tersebut", "kendati demikian", "sehubungan dengan itu", "berkenaan dengan", "dalam rangka", "guna mewujudkan": ganti dengan kalimat pendek langsung ke pokok.

---

## 4. Larangan struktur kalimat

| Pola | Contoh | Perbaikan |
|------|--------|-----------|
| Tiga kata sifat berurutan | "solusi yang komprehensif, inovatif, dan berkelanjutan" | pilih satu atau dua yang benar-benar penting |
| "Tidak hanya... tetapi juga" | dipakai berulang | maksimal sekali per dokumen |
| Pembuka "Dengan [gerund]" | "Dengan memanfaatkan teknologi terkini..." | tulis ulang sebagai pernyataan langsung |
| Pengisi "Baik... maupun..." | "Baik pemula maupun profesional..." | pakai daftar atau sapa pembaca langsung |
| Rangkaian "Pastikan bahwa" | "Pastikan bahwa... memastikan bahwa..." | instruksi langsung: "Lakukan X" |
| Paralelisme paksa | struktur paralel padahal isinya tidak paralel | biarkan isi menentukan struktur |
| "Sebagai kesimpulan" / "Dapat disimpulkan bahwa" | ketika teks sudah pendek | akhiri saja; isi adalah kesimpulannya |
| Ringkasan penutup bagian | mini-ringkasan di akhir setiap bagian | akhiri di poin substantif terakhir |
| Pengulangan pertanyaan | "Pertanyaan Anda tentang X ini penting karena..." | mulai dengan jawabannya |
| Pertanyaan retoris pengisi | "Lalu apa artinya ini?" | katakan langsung apa artinya |

---

## 5. Larangan pola semantik

**Gravitasi berlebihan:** formulir login adalah formulir login, bukan "pintu gerbang menuju pengalaman digital pengguna". Jangan perlakukan hal rutin seolah sangat monumental.

**Menjelaskan signifikansi alih-alih membuktikannya:** "Hal ini sangat signifikan karena...", "Pentingnya X tidak bisa diremehkan." Hapus labelnya; tambahkan detail spesifik yang membuat pentingnya terlihat sendiri.

**Komprehensif palsu:** "dari startup hingga perusahaan besar, dari pemasaran hingga teknik" kecuali memang benar-benar mencakup semuanya.

**Metafora "perjalanan":** sesuatu bukan perjalanan kecuali memang ada perpindahan fisik atau perubahan multi-tahap yang nyata. Mendaftar akun bukan "memulai sebuah perjalanan".

**Contrast framing (pola nomor satu setelah em-dash):** seluruh keluarga negasi-lalu-afirmasi. "Bukan X tapi Y", "X bukan Y", "Bukan X, justru Y", "Meskipun X, Y lebih baik", "X bukan sekadar Y", definisi didaktis "X berbeda dari Y: X adalah..., Y adalah...". Susun ulang: katakan hal positifnya secara langsung dengan detail konkret yang membuatnya benar. Negasi tunggal atas satu fakta tidak apa-apa; itu baru menjadi contrast framing ketika diikuti afirmasi.

**Framing dikotomi palsu:** menyederhanakan poin nuansatif menjadi dua kutub untuk efek dramatis. "Pertanyaannya bukan X, melainkan Y.", "Ini bukan soal X, ini soal Y.", "Ada dua jenis orang...", "Bukan soal apakah, melainkan kapan." Dunia jarang biner; nyatakan klaim sebenarnya dengan kondisi aslinya.

**Arc penebusan default:** ketidakmampuan mengakhiri dengan negatif, memaksa pelajaran atau hikmah ke setiap hasil buruk ("Namun dengan pendekatan yang tepat..."). Beberapa hasil memang murni gagal; nyatakan akar masalahnya.

**Nada poster motivasi:** tidak semua masalah adalah "peluang". Sebut masalah sebagai masalah.

**Poin daftar bold-dulu:** setiap item daftar dibuka dengan frasa tebal, lalu titik dua, lalu deskripsi, adalah pola format yang paling mencolok. Gunakan prosa, atau poin biasa tanpa kepala tebal.

**Listikel berkedok prosa:** poin berurutan yang disamarkan sebagai paragraf ("Pertama... Kedua... Ketiga...").

**Inflasi kepala bagian:** tidak perlu H2/H3 untuk konten yang hanya satu atau dua kalimat. Kepala bagian harus layak mendapatkan tempatnya.

---

## 6. Larangan agen palsu

Benda mati tidak melakukan tindakan manusia. Ini salah satu penanda paling umum; sebagian besar kelebihan kata kerja mesin adalah kata kerja agen palsu.

| Dilarang | Perbaikan |
|---------|-----------|
| "data menunjukkan kepada kita" | nyatakan temuannya, atau "analis menemukan..." |
| "laporan menyoroti" | "laporan menunjukkan..." atau nyatakan temuannya |
| "pasar memberikan penghargaan kepada" | "[aktor spesifik] diuntungkan dari..." |
| "pendekatan ini mengatasi" | "pendekatan ini menjawab..." atau susun ulang |
| "kerangka ini memahami" | hapus; kerangka tidak memahami apa pun |
| "algoritma belajar" | boleh hanya dalam konteks machine learning yang harfiah |

**Penghindaran kopula:** jangan ganti "adalah" dengan "berfungsi sebagai / berdiri sebagai / merupakan representasi dari / menandai", atau "memiliki" dengan "menampilkan / menawarkan / membanggakan", ketika kata aslinya sudah cukup. Tandai dua atau lebih kalimat seperti ini yang berdekatan.

---

## 7. Kelebihan present participle

Larang klausa "-ing" yang ditambahkan di akhir kalimat untuk kesan analitis palsu: "menyoroti pentingnya", "menampilkan keragaman", "menekankan signifikansi", "mencerminkan relevansi yang terus bertahan", "menggarisbawahi perlunya", "membuka jalan bagi", "memastikan aksesibilitas". (Berbeda dari pembuka "Dengan [gerund]" di bagian 4; ini adalah pengisi akhir kalimat.)

## 8. Disiplin kata keterangan

Potong kata keterangan yang mengembangkan atau menghindari tanpa menambah informasi: sangat, sungguh, benar-benar, tentunya, jelas, nyatanya, pada dasarnya, pada hakikatnya, sejatinya, secara signifikan, secara substansial, secara komprehensif, secara fundamental, semakin (ketika samar). Uji: hapus kata itu; kalau kalimat bermakna sama, keluarkan.

## 9. Ritme dan burstiness

Tulisan manusia memvariasikan panjang kalimat dan paragraf; tulisan mesin berirama seperti metronom.

- **Keseragaman ritme adalah penanda struktural yang paling bertahan.** Kalimat-kalimat berkelompok di rentang 18 sampai 24 kata, paragraf demi paragraf. Periksa ini lebih dulu.
- **Paragraf persegi panjang sempurna:** tiga paragraf berturut-turut yang masing-masing berisi jumlah kalimat serupa dengan panjang serupa, membentuk kisi-kisi. Variasikan kedalaman paragraf, tidak hanya panjang kalimat.
- Campurkan kalimat pendek (3 sampai 8 kata) dengan kalimat panjang (20 sampai 30). Variasikan penutup paragraf. Pilih dua atau empat item daripada refleks tiga item.

## 10. Siklus sinonim (elegant variation)

Jangan gilir sinonim untuk entitas yang sama. Kalau subjeknya Python, terus sebut Python, bukan "bahasa pemrograman itu", "alat ini", "teknologi buatan Guido". Pengulangan kata paling jelas lebih baik daripada variasi paksa.

## 11. Atribusi samar

"Para ahli sepakat", "penelitian menunjukkan", "studi membuktikan", "data mengkonfirmasi" tanpa sumber spesifik. Sebut sumbernya atau potong klaim itu.

## 12. Disiplin hedging

- Simpan hedging untuk ketidakpastian yang nyata. Hedging pra-permintaan-maaf sebelum klaim yang sebenarnya percaya diri ("Mungkin Anda akan menemukan bahwa X cocok untuk Anda...", "Tergantung situasinya...") adalah pelunakan posisi, bukan nuansa.
- Dalam percakapan panjang, waspadai posisi yang benar yang perlahan melunak giliran demi giliran. Nyatakan sekali, langsung, dan pertahankan.

## 13. Penyalahgunaan perangkat retoris

- Pertanyaan retoris yang langsung dijawab sendiri: "Hasilnya? Perubahan menyeluruh."
- Pertanyaan pivot di tengah kalimat untuk ketegangan mikro: "Tapi sekarang? Anda tidak akan bisa tidak melihatnya." / "Solusinya? Lebih sederhana dari yang Anda kira."
- Aforisma penutup atau kalimat terakhir yang berdentam: "Dan itu mengubah segalanya."
- Setup-resolusi: "Meski X tampak Y, kenyataannya adalah Z."
- "Bayangkan sebuah dunia di mana..." atau analogi menggurui "Anggap saja ini seperti...".
- Keaslian yang dipertunjukkan: "Jujur saja,", "Saya akan blak-blakan,", "Terus terang saya pikir,". Penanda kejujuran itulah yang menjadi telornya; nyatakan penilaian langsung tanpa deklarasi.

---

## 14. Sycophancy dan artefak obrolan

- **Pembuka:** "Tentu!", "Baik, berikut ini...", "Pertanyaan yang bagus!", "Semoga ini membantu!", "Sebagai model bahasa AI", "Per pengetahuan terakhir saya".
- **Penutup giliran:** "Jika Anda mau, saya bisa...", "Apakah Anda ingin saya elaborasi?", "Beri tahu saya jika butuh detail lebih." Akhiri di mana konten berakhir.

---

## 15. Panel penanda model 2026

Generasi model saat ini sudah menekan penanda lama dan memunculkan yang baru. Periksa panel ini sekaligus.

- **Penerus tanda baca:** kepadatan elaborasi titik dua ("Intinya: X." "Hasilnya: Y."), lonjakan titik koma, jejak tanda kutip keriting.
- **Pivot afirmatif (eskalasi, berbeda dari contrast framing):** "Ini bukan sekadar X, ini Y." / "Bukan hanya memoar, ini surat cinta." Perbaikan: nyatakan Y langsung dengan detail yang membuatnya benar.
- **Triplet staccato:** "Tanpa rapat. Tanpa birokrasi. Langsung hasil." Perbaikan: satu kalimat sungguhan.
- **Kolokasi signifikansi baku:** "memainkan peran krusial", "menjadi bukti nyata dari", "berfungsi sebagai pengingat", "menggarisbawahi pentingnya", "berada di garis terdepan", "membuka jalan bagi", "meninggalkan jejak yang tak terhapus".
- **Panel kepadatan struktural:** judul case di setiap kepala bagian, penanda emoji per bagian, garis horizontal di antara setiap seksi, poin tebal-titik-dua, blockquote dekoratif, markdown bocor ke platform teks biasa.
- **Khusus satu keluarga model:** cenderung keras ke poin simetris dan pro-kontra seimbang bahkan untuk tugas naratif. Ketika menyunting keluaran itu, pecah daftar tiga poin refleksif.

---

## 16. Catatan khusus per tipe dokumen

- **Proposal dan laporan:** mulai dari kesimpulan; satu ide per paragraf; bukti sebelum klaim; tanpa contrast framing.
- **Slide:** teks isi dan catatan pembicara mengikuti semua aturan di atas. Penanda slide paling umum adalah judul yang menyebut topik alih-alih wawasan; judul aksi menyatakan kesimpulan.
- **Kode dan komentar:** tandai perancah yang tidak akan ditulis manusia mana pun, komentar yang terlalu jelas untuk baris yang sudah self-evident, nama variabel lokal yang berlebihan padahal `i` sudah cukup, helper yang hanya membungkus satu built-in. Dalam coding agen multi-giliran, refactor daripada menambahkan logika baru di ujung fungsi.
- **Salinan media sosial dan pemasaran:** register slop dengan volume tertinggi; frasa ajakan bertindak klise dan urgensi manufaktur adalah titik deteksi pertama. Klaster CTA khas Indonesia: "Yuk simak!", "Tunggu apa lagi?", "Jangan sampai ketinggalan!", "Buruan sebelum kehabisan!", "Segera hubungi kami!", "Dapatkan promo eksklusifnya sekarang!".

---

## 17. Disiplin klaim deteksi AI

Kalau Anda menilai atau menandai teks, berhati-hati dengan apa yang Anda klaim. Standar ini adalah penskoran gaya editorial: ia menandai pola stilistik, terlepas dari siapa atau apa yang menulis teks itu. Standar ini bukan pengklasifikasi kepengarangan dan bukan pemeriksa asal-usul kriptografis.

Tiga hal yang berbeda, tidak boleh dicampuradukkan: (1) penskoran gaya editorial (standar ini), (2) deteksi statistik (pengklasifikasi sinyal model; bias dan bisa dielakkan, dan butuh model yang berjalan), (3) penandaan asal-usul kriptografis (C2PA, SynthID; buta terhadap yang tidak mengadopsinya).

Jangan klaim "tidak terdeteksi", "melewati detektor", "99% terlihat manusia", "dijamin lulus [detektor manapun]", atau persentase akurasi apa pun yang tidak bisa Anda buktikan dengan bukti tersimpan.

Detektor memiliki bias yang terdokumentasi terhadap penulis berbahasa non-Inggris asli dan penulis neurodivergent (tingkat positif palsu yang membuatnya tidak andal untuk penilaian kepengarangan individual). Jangan sajikan skor gaya sebagai bukti bahwa seseorang memakai AI, dan jangan biarkannya mendorong tindakan punitif.

Perlakukan leksikon pola terlarang sebagai artefak bertanggal dan berversi dengan jadwal pembaruan; penanda mengalami depresiasi seiring model berubah.

---

## Uji lakmus

Baca ulang. Apakah terdengar seperti keluaran model? Kalau ya, tulis ulang sampai terdengar seperti tulisan seorang pakar manusia, karena memang itulah yang seharusnya menulisnya.
