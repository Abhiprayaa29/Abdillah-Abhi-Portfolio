# GRID.md — Spesifikasi Grid & Sistem Spasi

Sumber kebenaran untuk semua jarak/ritme layout di situs ini. Dibuat dari audit
kode yang ada + riset design system (Material Design 3, Tailwind CSS, Apple HIG,
Atlassian, konvensi 8pt). Tujuannya membuat jarak konsisten dan logis **tanpa**
mengubah bahasa desain modern-minimalis yang sudah berjalan.

## 1. Base unit

| Aturan | Nilai |
| --- | --- |
| Base unit (hard rule) | **4px** — semua `padding`, `margin`, `gap` kelipatan 4 |
| Ritme utama | **8px** — nilai default antar komponen (4, 8, 16, 24, 32, …) |
| Skala yang disarankan | 4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 112 · 128 |
| Aturan seksi | judul→intro = 16, intro→konten = 24/32, padding seksi = `--section-y` |
| Angka baru | wajib dari skala; nilai seperti 5/13/26px dilarang (bulatkan ke 4 terdekat) |

Nilai yang sudah `0 mod 4` tidak boleh diubah. Posisisi dekoratif (glow, dot)
bukan "jarak" dan dikecualikan.

## 2. Token layout (`styles.css` → `:root`)

| Token | Desktop ≥901 | Tablet 601–900 | Mobile ≤600 |
| --- | --- | --- | --- |
| `--max` (lebar konten) | 1040px | 1040px | 1040px |
| `--gutter` (sisi kiri/kanan) | 20px | 20px | **16px** |
| `--section-y` (padding seksi) | **112px** | 112px | **72px** |
| `--hero-pt` (padding atas hero) | **184px** | 152px | 132px |
| `--hero-pb` (padding bawah hero) | **128px** | 96px | 80px |

Formula kontainer: `width: min(var(--max), calc(100% - var(--gutter) * 2))`,
selalu terpusat (`margin-inline: auto`). Artinya lebar efektif = `min(1040,
vw − 2×gutter)`.

## 3. Kolom

| Breakpoint | Kolom | Gutter antar kolom | Catatan |
| --- | --- | --- | --- |
| Desktop ≥901 | **12** | 16px | Pada kontainer penuh 1040px: kolom = 72px tepat (12×72 + 11×16 = 1040) |
| Tablet 601–900 | **8** | 16px | Fluid; pada 768px → ±77px/kolom |
| Mobile ≤600 | **4** | 16px | Fluid (sisi 16px) |

Kolom adalah acuan spasial (bukan CSS grid literal di tiap section). Pemetaan
region terhadap kolom (panduan, bukan perubahan pixel):

| Region | Layout desktop | ≈ span |
| --- | --- | --- |
| Hero | satu kolom konten, terpusat | 12 |
| Tentang (`.about-cols`) | 300px + 1fr | ≈ 4 + 8 |
| Keahlian / Kontak (`.contact-wrap`) | 2 × 1fr | 6 + 6 |
| Sertifikat (`.cert-row`) | 96 + 168 + 1fr + auto | dalam 12 |
| Repositori / proyek | baris penuh 12 | 12 |

## 4. Breakpoint

| Nama | Rentang | Perilaku grid |
| --- | --- | --- |
| Desktop | ≥ 901px | 12 kolom, gutter 20, section 112 |
| Tablet | 601–900px | nav mobile aktif, kolom jadi 1 untuk region utama, hero 152/96 |
| Mobile | ≤ 600px | 4 kolom, gutter 16, section 72, hero 132/80 |

(`max-width: 768px` hanya untuk glow ambien — bukan breakpoint layout.)

## 5. Aturan yang diuji (`cdp-grid.js`)

1. Token `--gutter/--section-y/--hero-pt/--hero-pb/--max` sesuai tabel §2
   (nilai hero dibaca dari elemen `.hero` tempat token dipakai).
2. Setiap `.container` (termasuk `#footerStats`) = `min(1040, vw − 2×gutter)`
   dan terpusat (±1px).
3. `.section-pad` padding vertikal = `--section-y`; `.hero` = `--hero-pt/pb`.
4. Semua elemen ter-render: `padding-*`, `margin-top/bottom`, `gap`,
   `scroll-margin-top` → kelipatan 4px. Pengecualian: margin kiri/kanan dengan
   selisih ≤1px (hasil centering `auto` — nilai aslinya dijamin grid oleh
   `audit-spaces.js`), elemen tidak dirender (`rect` 0×0, mis. dialog tertutup),
   dan properti positioning dekoratif (§1).
   Kedua dialog (`projectDialog`, `certDialog`) dibuka lalu di-scan ulang —
   tetap 0 pelanggaran.
5. Semua `.section-intro` (4 di markup: proyek, pengalaman, sertifikat,
   repositori) punya `margin-top` = 16px.
6. Region utama runtuh jadi 1 kolom pada tablet/mobile; tidak ada overflow
   horizontal; section tidak saling tumpang tindih.
7. Kucing hero ikut grid: berjalan hanya di dalam kotak `.container`,
   garis dasar (lane) dihitung lalu di-snap ke 4px, ukuran 48px (32px ≤900),
   tidak pernah menutup CTA.

## 6. Kucing hero (pixel pet) × grid

- Ukuran: 48×48px desktop, 32×32px ≤900px — **tidak pernah** diskalakan ikut
  viewport; sprite 16×16 selalu `image-rendering: pixelated/crisp-edges`.
- Arena: hanya di dalam kolom kontainer (`minX..maxX` dihitung dari
  `offsetLeft/offsetWidth` `.container`) — tidak berjalan di margin luar.
- Lane: `round((contentBottom+16)/4) × 4`, di-clamp ke kotak hero — sisa
  ≥14px di bawah blok teks (busur lompatan ≤12px tidak pernah masuk kotak
  teks); teks tidak pernah bergerak (hanya `transform`/`opacity`).
- Visibilitas: desktop + tablet + mobile; disembunyikan hanya pada
  `prefers-reduced-motion` dan `print`.
- Zona: `z-index: -1` (di belakang teks), `pointer-events: none`,
  tidak pernah memotong kotak CTA.

## 7. Perintah verifikasi

```sh
npx prettier --check styles.css script.js   # wajib lulus (index.html: kegagalan pre-existing, di luar scope)
node --check script.js
node %TEMP%\opencode\audit-spaces.js         # deklarasi spasial authored → 4px
node %TEMP%\opencode\cdp-grid.js             # aturan grid (3 viewport + dialog)
node %TEMP%\opencode\cdp-cat.js              # kucing pixel (desktop+mobile)
```
