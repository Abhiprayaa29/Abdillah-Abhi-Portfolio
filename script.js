const data = {
  mlbb: {
    eyebrow:'UNGGLAN · SISTEM WEB REAL-TIME', title:'MLBB Draft Studio',
    role:'Full-stack developer', status:'Repository publik', demo:null,
    stack:[['React 18','i-react'],['Vite','i-vite'],['Tailwind CSS','i-tailwindcss'],['Express','i-express'],['Socket.IO','i-socket']],
    problem:'Operator turnamen membutuhkan satu sumber kebenaran untuk aksi draft, timer, konfigurasi tim, state pertandingan, dan overlay siap siar.',
    contribution:'Repository memisahkan state bersama dari UI: engine draft di sisi server memiliki transisi state, sementara antarmuka mengonsumsi state otoritatif melalui Socket.IO.',
    challenge:'Menyinkronkan draft, timer, dan skor antara panel operator dan beberapa Browser Source OBS secara real-time tanpa reload — state dipegang penuh oleh server, ditulis atomik (file .tmp lalu rename) dengan autosave dan retensi backup, sehingga state pertandingan pulih persis setelah crash atau restart.',
    features:['Engine draft dengan urutan aksi pick/ban, pencegahan duplikat, undo, lock, reset, dan preset.','Countdown otoritatif di server yang disinkronkan antar klien operator dan overlay.','Route draft dan scoreboard transparan untuk OBS Browser Source.','State pertandingan persisten, backup, konfigurasi tema, serta perlindungan operator-token opsional.'],
    result:'Dipakai sebagai sumber siaran OBS: control panel di PC operator, overlay draft + scoreboard transparan (1920×1080, aman juga di 1280×720 tanpa scrollbar) di PC siaran lewat LAN. Pengujian otomatis: 131 asersi backend dan 115 asersi E2E lulus; dataset 133 hero tervalidasi 0 error. [ISI: nama turnamen/event yang sudah memakai ini, jika ada]',
    engineering:'Engine draft dijaga tetap terpisah dari UI berupa fungsi transisi state; server memiliki state bersama dan menyiarkan perubahan ke klien.',
    github:'https://github.com/Abhiprayaa29/mlbb-draft-studio', visual:'image', image:'./assets/mlbb-draft-studio-aamon.png', alt:'Seni splash hero Aamon dari dataset 133 hero pada repository MLBB Draft Studio'
  },
  spada: {
    eyebrow:'UNGGLAN · OTOMASI', title:'SPADA Telegram Bot',
    role:'Developer & automation', status:'Pemakaian personal · repo publik', demo:null,
    stack:[['Python','i-python'],['Telegram Bot','i-telegram'],['FastAPI','i-fastapi'],['BeautifulSoup','i-globe']],
    problem:'Data mata kuliah, deadline, kehadiran, tugas, dan nilai tersebar di alur LMS yang merepotkan untuk dicek secara manual.',
    contribution:'Repository menggabungkan bot Telegram, scraper LMS, tracker, dan dashboard FastAPI read-only di sekitar state lokal bersama.',
    challenge:'Menjaga sesi login SPADA tetap dipakai scraper otomatis (pengecekan deadline tiap 30 menit, absensi 5 menit sebelum kelas berakhir) dengan state lokal yang aman — kredensial tidak pernah masuk .env — plus pairing QR agar dashboard web read-only bisa mengakses data tanpa login ulang.',
    features:['Login SPADA dan deteksi semester dengan penyimpanan data sesi.','Pengingat deadline 24 jam, 1 jam, dan 15 menit sebelum tenggat.','Alur kehadiran terjadwal dengan bukti screenshot dikirim kembali ke Telegram.','Dashboard FastAPI dengan pairing QR, cookie sesi, jadwal, tugas, nilai, dan tampilan kehadiran.'],
    result:'Dipakai untuk kebutuhan kuliah sendiri di UPNYK: pengingat deadline, absensi otomatis dengan screenshot bukti ke Telegram, dan briefing harian jam 07:00 WIB. Bisa di-deploy ke GCP e2-micro (1 CPU, 512 MB RAM) dengan systemd yang start otomatis saat reboot.',
    engineering:'Proyek ini menghubungkan otomasi web eksternal, state lokal, pesan Telegram, pengecekan terjadwal, dan antarmuka web terpisah tanpa membocorkan sesi rahasia ke frontend.',
    github:'https://github.com/Abhiprayaa29/bot_spada', visual:'automation'
  },
  jogjalensa: {
    eyebrow:'UNGGLAN · WEB FULL-STACK', title:'JogjaLensa',
    role:'Full-stack developer', status:'Proyek kuliah · repo publik', demo:null,
    stack:[['PHP 8','i-php'],['Bootstrap 5.3','i-bootstrap'],['MySQL / MariaDB','i-mysql'],['Apache','i-apache']],
    problem:'Orang yang mencari fotografer membutuhkan cara lebih mudah untuk membandingkan layanan, harga, portofolio, dan informasi booking di satu tempat.',
    contribution:'Repository mengimplementasikan struktur aplikasi PHP yang mencakup landing page, autentikasi, dashboard klien dan vendor, booking, bukti pembayaran, ulasan, dan manajemen profil vendor.',
    challenge:'PHP native prosedural dengan mysqli dan relasi foreign key, dibagi menjadi dua alur peran dalam satu aplikasi: klien (cari vendor, booking, unggah bukti bayar, review, invoice) dan vendor (CRUD paket, galeri portofolio, terima/tolak/selesaikan order) yang saling bergantung pada data yang sama.',
    features:['Pencarian vendor dengan filter kategori/lokasi dan pengurutan harga.','Dashboard klien dengan status booking dan alur invoice.','Dashboard vendor dengan CRUD paket, galeri portofolio, dan manajemen order.','Statistik berbasis database serta alur ulasan/rating.'],
    result:'Proyek Pemrograman Web semester 3; berjalan lokal via XAMPP/Laragon (Apache + MySQL/MariaDB). [ISI: hasil penggunaan — dipakai di mana, berapa vendor/klien jika sudah dijalankan]',
    engineering:'Proyek ini menunjukkan pemikiran aplikasi web end-to-end: komposisi UI, penanganan request, alur kerja per peran, unggah file, dan akses data relasional.',
    github:'https://github.com/Abhiprayaa29/ProjectPemogramanWeb-Abdillah-Abhi', visual:'image', image:'./assets/jogjalensa-malioboro-small.jpg', alt:'Suasana Jalan Malioboro Yogyakarta, visual latar untuk marketplace fotografi JogjaLensa'
  },
  ar: {
    eyebrow:'EKSPERIMENTAL · SISTEM INTERAKTIF', title:'SimpleARPlacement',
    role:'Unity AR developer', status:'Repository publik', demo:null,
    stack:[['Unity','i-unity'],['AR Foundation','i-cube'],['ARCore','i-scan'],['C#','i-csharp']],
    problem:'Pengguna membutuhkan model interaksi mobile yang langsung untuk menempatkan objek 3D ke permukaan dunia nyata yang terdeteksi.',
    contribution:'Repository mengimplementasikan logika penempatan yang melakukan raycast ke plane terdeteksi, mengelola anchor AR opsional, serta menyediakan aksi UI untuk rotasi, skala, dan reset.',
    challenge:'Menempatkan objek pada hasil deteksi permukaan lewat raycast + anchor AR, dengan seluruh input memakai Unity Input System (bukan input legacy), di atas konfigurasi Android yang ketat untuk ARCore: IL2CPP, ARM64, minimum API 26, OpenGLES3.',
    features:['Penempatan dengan sekali tap menggunakan raycast AR terhadap geometri plane terdeteksi.','Pemasangan anchor agar objek tetap sejajar dengan permukaan terdeteksi bila memungkinkan.','Kontrol rotasi dan skala dengan batas terlindungi serta jeda penempatan.','Penyegaran state UI dan perlindungan pointer-over-UI untuk interaksi sentuh.'],
    result:'APK berhasil dibangun dan berjalan di Samsung Galaxy A54 dengan sesi AR aktif dan UI tampil. Lima skenario pengujian (permukaan bertekstur/polos, cahaya terang/redup, gerakan kamera cepat) sudah terdokumentasi — tabel hasil dan checklist screenshot/video belum diisi penuh. [ISI: hasil pengisian 5 skenario uji / perangkat lain yang sudah dicoba]',
    engineering:'Proyek memisahkan logika penempatan dari kontrol UI dan memakai Unity Input System + AR Foundation alih-alih satu skrip interaksi monolitik.',
    github:'https://github.com/Abhiprayaa29/simple-ar-placement', visual:'image', image:'./assets/simple-ar-placement-ui.jpg', alt:'Tangkapan layar antarmuka SimpleARPlacement di Android: object menu di bawah dan tombol opsi di atas kamera AR'
  },
  cerberus: {
    eyebrow:'TINGKAT LANJUT · ORKESTRASI AI', title:'Cerberus',
    role:'Kustomisasi & orkestrasi', status:'Bagian dari oh-my-open-pentest', demo:null,
    stack:[['Bun','i-bun'],['TypeScript','i-typescript'],['OpenCode','i-terminal'],['Multi-Agent','i-agents']],
    problem:'Pengujian keamanan yang kompleks diuntungkan dari dekomposisi: perencanaan, riset, eksekusi, verifikasi, dan pelaporan sebaiknya tidak ditangani sebagai satu tugas agen tunggal.',
    contribution:'Repository mendefinisikan Cerberus sebagai orkektor yang mengarahkan pekerjaan ke agen khusus dan playbook keamanan terstruktur untuk pengujian yang berizin.',
    challenge:'Merutekan tiap permintaan berdasarkan intent lalu mendelegasikan ke sub-agent spesialis (Scout, Intel, Sentinel, Talos, dan lainnya) yang bisa berjalan paralel, dengan verifikasi setiap temuan sebelum masuk laporan dan fallback chain antar provider model.',
    features:['Perutean berbasis intent untuk tugas riset, implementasi, investigasi, dan perbaikan.','Peran agen spesialis seperti Scout, Intel, Sentinel, Talos, dan Cerberus-Junior.','Tugas latar belakang paralel dan perutean model berbasis kategori.','Batas cakupan dan keselamatan yang eksplisit untuk pengujian keamanan yang berizin.'],
    result:'Dipasang sebagai bagian kerangka oh-my-open-pentest (bunx oh-my-open-pentest install; verifikasi lewat perintah doctor). Mencakup 109+ tools keamanan terintegrasi, 250+ skill playbooks, dan 10 mode engagement dengan laporan ber-CVSS. [ISI: penggunaan nyata — lab atau engagement mana yang sudah dijalankan, jika boleh dicatat]',
    engineering:'Sinyal terkuat adalah desain orkestrasi: mendekomposisi masalah besar menjadi tanggung jawab spesialis yang terbatas, lalu memverifikasi hasil kerja sebelum dilanjutkan.',
    note:'Hanya untuk pengujian yang berizin: sistem milik sendiri, lab pribadi, atau program bug bounty dalam scope — sesuai disclaimer di repository. Tidak untuk menguji sistem pihak lain tanpa izin tertulis.',
    github:'https://github.com/Abhiprayaa29/Cerberus', visual:'orchestration'
  }
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

$('#year').textContent = new Date().getFullYear();

const menuBtn = $('#menuBtn');
const mobileNav = $('#mobileNav');
menuBtn?.addEventListener('click', () => {
  const open = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!open));
  menuBtn.setAttribute('aria-label', open ? 'Buka navigasi' : 'Tutup navigasi');
  mobileNav.hidden = open;
  menuBtn.textContent = open ? '☰' : '×';
});
$$('#mobileNav a').forEach(a => a.addEventListener('click', () => {
  menuBtn.setAttribute('aria-expanded','false');
  menuBtn.setAttribute('aria-label','Buka navigasi');
  menuBtn.textContent = '☰';
  mobileNav.hidden = true;
}));

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduced) $$('.reveal').forEach(el => el.classList.add('is-visible'));
else {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, {threshold: .12});
  $$('.reveal').forEach(el => observer.observe(el));
}

const dialog = $('#projectDialog');
const dialogVisual = $('#dialogVisual');
const setDialogVisual = (p) => {
  if (p.visual === 'image') {
    dialogVisual.className = 'dialog-visual';
    dialogVisual.innerHTML = `<img src="${p.image}" alt="${p.alt}" loading="lazy" onerror="this.remove();this.parentNode.classList.add('image-fallback')">`;
  } else if (p.visual === 'automation') {
    dialogVisual.className = 'dialog-visual code';
    dialogVisual.innerHTML = '<div class="mini-head"><span>automation.pipeline</span><span class="live">berjalan</span></div><div class="pipeline"><div><b>01</b><strong>SPADA</strong><span>sesi terautentikasi</span></div><div><b>02</b><strong>SCRAPER</strong><span>data deadline + kehadiran</span></div><div><b>03</b><strong>TRACKER</strong><span>state lokal tersinkron</span></div><div><b>04</b><strong>TELEGRAM</strong><span>notifikasi terjadwal</span></div></div>';
  } else {
    dialogVisual.className = 'dialog-visual code orchestration';
    dialogVisual.innerHTML = '<div class="mini-head"><span>orchestration.graph</span><span class="live">terkendali</span></div><div class="graph"><div class="node main">CERBERUS</div><div class="node n1">Scout</div><div class="node n2">Intel</div><div class="node n3">Sentinel</div><div class="node n4">Talos</div><svg viewBox="0 0 500 160" preserveAspectRatio="none" aria-hidden="true"><path d="M80 26 L215 74 M420 28 L286 74 M105 136 L220 86 M395 134 L282 86"/></svg></div>';
  }
};

const openCaseStudy = (key) => {
  const p = data[key];
  if (!p || dialog.open) return;
  $('#dialogEyebrow').textContent = p.eyebrow;
  $('#dialogTitle').textContent = p.title;
  $('#dialogRole').textContent = p.role;
  $('#dialogStatus').textContent = p.status;
  $('#dialogProblem').textContent = p.problem;
  $('#dialogContribution').textContent = p.contribution;
  $('#dialogChallenge').textContent = p.challenge;
  $('#dialogResult').textContent = p.result;
  $('#dialogEngineering').textContent = p.engineering;
  const note = $('#dialogNote');
  note.textContent = p.note || '';
  note.hidden = !p.note;
  const demo = $('#dialogDemo');
  if (p.demo) { demo.href = p.demo; demo.hidden = false; } else { demo.hidden = true; }
  const list = $('#dialogFeatures'); list.innerHTML = '';
  p.features.forEach(f => { const li = document.createElement('li'); li.textContent = f; list.appendChild(li); });
  const stack = $('#dialogStack'); stack.innerHTML = '';
  p.stack.forEach(([name, icon]) => {
    const chip = document.createElement('span');
    chip.innerHTML = `<svg class="ico" aria-hidden="true"><use href="#${icon}"/></svg>`;
    chip.append(name);
    stack.appendChild(chip);
  });
  $('#dialogGithub').href = p.github;
  setDialogVisual(p);
  dialog.showModal();
};

$$('.project-card').forEach(card => {
  card.addEventListener('click', () => openCaseStudy(card.dataset.project));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCaseStudy(card.dataset.project); }
  });
});
$('#dialogClose').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });

const copyBtn = $('#copyEmail');
const copyUse = $('#copyIcon')?.querySelector('use');
copyBtn?.addEventListener('click', async () => {
  const email = 'abdillahabhi12@gmail.com';
  try {
    await navigator.clipboard.writeText(email);
    $('#copyLabel').lastChild.textContent = 'Email tersalin';
    copyUse?.setAttribute('href', '#i-check');
    setTimeout(() => { $('#copyLabel').lastChild.textContent = 'Salin email'; copyUse?.setAttribute('href', '#i-copy'); }, 1500);
  }
  catch { window.location.href = `mailto:${email}`; }
});
