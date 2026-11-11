# PANDUAN STRUKTUR ASET & SPESIFIKASI FOTO / SCREENSHOT
## Portfolio Abhipraya — Designer × Coder & Digital Garden

Folder `assets/` telah dirapikan dan disesuaikan ke dalam kategori yang jelas. Anda cukup memasukkan file foto atau screenshot (SS) ke dalam folder yang bersangkutan sesuai panduan di bawah ini.

---

## 📁 Struktur Folder Aset

```
assets/
├── portrait/                                # 1. Foto Profil & Potret Split Hero
│   ├── README.md                            # Spesifikasi foto studio & pose
│   ├── foto-abhi.jpeg                       # Foto asli saat ini (kamera di tangan)
│   ├── portrait-coder.webp / .jpg           # Hasil render sisi Coder (blueprint & code)
│   └── portrait-designer.webp / .jpg        # Hasil render sisi Designer (painterly & tokens)
│
├── projects/                                # 2. Screenshot Proyek & Case Study
│   ├── ipguard/                             # IPGuard Asset Protection Platform
│   ├── mlbb/                                # MLBB Draft Studio & OBS Overlays
│   ├── happy-budgeting/                     # Financial Management System (DFD 0-3)
│   ├── lahanaman/                           # LahanAman WebGIS Landslide DSS
│   ├── spada-bot/                           # SPADA Telegram Academic Bot
│   ├── simple-ar/                           # SimpleARPlacement Unity ARCore
│   ├── jogjalensa/                          # JogjaLensa Rental Marketplace
│   ├── cerberus/                            # Cerberus Automated Threat Defense
│   └── ucd-comp/                            # National UCD Competition Prototype
│
├── shelves/                                 # 3. Diagram / Infografis Digital Garden
│   └── README.md                            # Panduan diagram arsitektur & teknis
│
├── sertifikat/                              # 4. Sertifikat Dicoding, IBM & Kompetisi
└── videos/                                  # 5. Video Demo Proyek (Gemastik, PekanIT)
```

---

## 📸 1. Panduan Foto Profil (`assets/portrait/`)

Untuk bagian **Hero Designer × Coder Split-Screen**:

### Spesifikasi Foto Potret yang Ideal:
- **Pose:** Menghadap lurus ke depan (*front-facing*) atau sedikit sudut 3/4. Posisi hidung, dagu, dan dasi tepat di tengah vertikal.
- **Bahu:** Seimbang kanan dan kiri (simetris memudahkan split visual).
- **Pencahayaan:** Terang merata (*soft studio lighting*), tidak ada bayangan keras di satu sisi wajah.
- **Latar Belakang:** Polos terang (putih/abu-abu netral studio) atau file PNG transparan.
- **Rasio Aspek:** 4:5 (misal: `1200 × 1500 px` atau `800 × 1000 px`).
- **Format:** JPG, PNG, atau WEBP resolusi tinggi.

> 💡 **Fitur Otomatis:**  
> Ketika Anda memasukkan foto baru (misal: `assets/portrait/foto-studio-baru.jpg`), Anda dapat menjalankan perintah:  
> `python tools/generate_split_portrait.py assets/portrait/foto-studio-baru.jpg`  
> Script ini akan otomatis memotong dan merender dua file produksi: `portrait-designer.webp` dan `portrait-coder.webp`.

---

## 🖥️ 2. Panduan Screenshot Proyek (`assets/projects/`)

Setiap folder proyek membutuhkan 1 gambar sampul utama (*cover*) dan 1–3 screenshot detail untuk modal Case Study:

| Folder Proyek | Jenis Screenshot yang Dibutuhkan | Rekomendasi Resolusi | Nama File yang Disarankan |
| :--- | :--- | :--- | :--- |
| **`ipguard/`** | Dashboard file vault terenkripsi, modal verifikasi steganografi, mobile QR keystore | 16:10 / 16:9 (`1920×1080` atau `1600×1000`) | `cover.png`, `verify-modal.png`, `auth-request.png` |
| **`mlbb/`** | Tampilan transparan OBS broadcast pick/ban, panel operator turnamen | 16:9 (`1920×1080`) | `overlay-draft.webp`, `overlay-score.webp`, `control-panel-operator.webp` |
| **`happy-budgeting/`** | Dashboard sistem anggaran, tabel approval berjenjang, diagram DFD Level 2 | 16:10 / 16:9 (`1920×1080`) | `budgeting-dashboard.png`, `approval-list.png`, `dfd-level2.png` |
| **`lahanaman/`** | Peta interaktif WebGIS choropleth kerentanan longsor, filter layer drawer | 16:10 / 16:9 (`1920×1080` atau `1600×1000`) | `cover.png`, `map-layers.png` |
| **`spada-bot/`** | Tampilan chat Telegram bot dengan pesan deadline tugas & tombol inline | 16:10 atau vertikal smartphone | `cover.png`, `telegram-chat.png` |
| **`simple-ar/`** | Penempatan objek 3D di lantai/meja nyata (ARCore plane), UI gestur | 16:10 atau 9:16 mobile (`1080×2340`) | `simple-ar-placement-ui.webp`, `cover.png` |
| **`jogjalensa/`** | Halaman katalog kamera & lensa, form checkout booking sewa | 16:10 / 16:9 (`1600×1000`) | `jogjalensa-malioboro.jpg`, `catalog.png` |
| **`cerberus/`** | Terminal dashboard inspeksi paket jaringan, hasil deteksi alert Suricata | 16:10 / 16:9 (`1400×800`) | `core-loop.webp`, `orchestrator-atlas.webp` |
| **`ucd-comp/`** | Mockup high-fidelity Figma transit UI, wireframe alur pengguna, grafik SUS | 16:10 / 16:9 (`1920×1080`) | `cover.png`, `figma-screens.png`, `sus-testing.png` |

---

## 📚 3. Panduan Diagram Digital Garden (`assets/shelves/`)

Folder ini untuk infografis atau diagram alur yang disisipkan di dalam artikel Shelves:
- **Format:** SVG (paling tajam) atau PNG transparan.
- **Gaya:** Minimalis monokrom dengan aksen biru `#285DCA`, background transparan atau `#FFFFFF`.
- **Topik:**
  - `ecdsa-keystore-flow.svg` (Alur autentikasi hardware TEE).
  - `xchacha20-pipeline.svg` (Alur enkripsi file vault).
  - `dfd-budgeting-levels.svg` (Hirarki DFD 0–3).

---

## 🚀 Cara Kerja Setelah Anda Memasukkan File Baru

1. Masukkan file gambar Anda ke dalam folder yang sesuai di atas.
2. Beri nama file sesuai saran di tabel (atau gunakan nama file yang sama untuk menimpa langsung).
3. Jika Anda ingin mengubah nama file di website, cukup sesuaikan path di `script.js` pada objek `projectsData`.
4. Lakukan commit & push:
   ```bash
   git add assets/
   git commit -m "Update project screenshots and portrait assets"
   git push origin main
   ```
5. Cloudflare Pages akan otomatis mendeteksi dan memperbarui website live dalam waktu ~20 detik!
