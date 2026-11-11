# Folder: assets/portrait/
## Foto Potret & Split Hero Engine

Folder ini berisi aset foto potret Anda untuk tampilan **Hero Split-Screen (Designer × Coder)**.

### File yang ada saat ini:
- `foto-abhi.jpeg` : Foto asli saat ini (pose memegang kamera, resolusi 864×1296).
- `portrait-coder.jpg` & `.webp` : Versi Coder yang diproduksi (dengan grid blueprint koordinat & kode kriptografi).
- `portrait-designer.jpg` & `.webp` : Versi Designer yang diproduksi (dengan aksen watercolor cyan/kobalt, kurva bezier, dan palet Figma).

### Jika Anda ingin memasukkan foto studio baru:
1. Letakkan foto studio Anda di folder ini (misal beri nama `studio-portrait.jpg`).
2. **Kriteria foto yang optimal:**
   - Menghadap lurus ke depan (*front-facing*) simetris.
   - Bahu seimbang kanan dan kiri.
   - Background netral (putih/abu-abu terang) atau transparan PNG.
   - Rasio 4:5 (contoh: 1200×1500 atau 800×1000).
3. Jalankan script generator otomatis yang sudah kami siapkan di root:
   ```bash
   python tools/generate_split_portrait.py assets/portrait/studio-portrait.jpg
   ```
   Script tersebut akan otomatis meng-update file `portrait-coder` dan `portrait-designer` di folder `assets/`!
