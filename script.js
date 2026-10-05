const data = {
  mlbb: {
    title:'MLBB Draft Studio',
    role:'Full-stack developer', status:'Repository publik', demo:null,
    stack:['React 18','Vite','Tailwind CSS v4','Express','Socket.IO'],
    problem:'Operator turnamen membutuhkan satu sumber kebenaran untuk aksi draft, timer, konfigurasi tim, state pertandingan, dan overlay siap siar.',
    contribution:'Repository memisahkan state bersama dari UI: engine draft di sisi server memiliki transisi state, sementara antarmuka mengonsumsi state otoritatif melalui Socket.IO.',
    challenge:'Menyinkronkan draft, timer, dan skor antara panel operator dan beberapa Browser Source OBS secara real-time tanpa reload — state dipegang penuh oleh server, ditulis atomik (file .tmp lalu rename) dengan autosave dan retensi backup, sehingga state pertandingan pulih persis setelah crash atau restart.',
    features:['Engine draft dengan urutan aksi pick/ban, pencegahan duplikat, undo, lock, reset, dan preset.','Countdown otoritatif di server yang disinkronkan antar klien operator dan overlay.','Route draft dan scoreboard transparan untuk OBS Browser Source.','State pertandingan persisten, backup, konfigurasi tema, serta perlindungan operator-token opsional.'],
    result:'Dipakai sebagai sumber siaran OBS: control panel di PC operator, overlay draft + scoreboard transparan (1920×1080, aman juga di 1280×720 tanpa scrollbar) di PC siaran lewat LAN. Pengujian otomatis: 131 asersi backend dan 115 asersi E2E lulus; dataset 133 hero tervalidasi 0 error. [ISI: nama turnamen/event yang sudah memakai ini, jika ada]',
    engineering:'Engine draft dijaga tetap terpisah dari UI berupa fungsi transisi state; server memiliki state bersama dan menyiarkan perubahan ke klien.',
    github:'https://github.com/Abhiprayaa29/mlbb-draft-studio',
    image:'./assets/mlbb-draft-studio-aamon.png', alt:'Seni splash hero Aamon dari dataset 133 hero pada repository MLBB Draft Studio', iw:500, ih:500
  },
  spada: {
    title:'SPADA Telegram Bot',
    role:'Developer & automation', status:'Pemakaian personal · repo publik', demo:null,
    stack:['Python','Telegram Bot','FastAPI','BeautifulSoup'],
    problem:'Data mata kuliah, deadline, kehadiran, tugas, dan nilai tersebar di alur LMS yang merepotkan untuk dicek secara manual.',
    contribution:'Repository menggabungkan bot Telegram, scraper LMS, tracker, dan dashboard FastAPI read-only di sekitar state lokal bersama.',
    challenge:'Menjaga sesi login SPADA tetap dipakai scraper otomatis (pengecekan deadline tiap 30 menit, absensi 5 menit sebelum kelas berakhir) dengan state lokal yang aman — kredensial tidak pernah masuk .env — plus pairing QR agar dashboard web read-only bisa mengakses data tanpa login ulang.',
    features:['Login SPADA dan deteksi semester dengan penyimpanan data sesi.','Pengingat deadline 24 jam, 1 jam, dan 15 menit sebelum tenggat.','Alur kehadiran terjadwal dengan bukti screenshot dikirim kembali ke Telegram.','Dashboard FastAPI dengan pairing QR, cookie sesi, jadwal, tugas, nilai, dan tampilan kehadiran.'],
    result:'Dipakai untuk kebutuhan kuliah sendiri di UPNYK: pengingat deadline, absensi otomatis dengan screenshot bukti ke Telegram, dan briefing harian jam 07:00 WIB. Bisa di-deploy ke GCP e2-micro (1 CPU, 512 MB RAM) dengan systemd yang start otomatis saat reboot.',
    engineering:'Proyek ini menghubungkan otomasi web eksternal, state lokal, pesan Telegram, pengecekan terjadwal, dan antarmuka web terpisah tanpa membocorkan sesi rahasia ke frontend.',
    github:'https://github.com/Abhiprayaa29/bot_spada'
  },
  jogjalensa: {
    title:'JogjaLensa',
    role:'Full-stack developer', status:'Proyek kuliah · repo publik', demo:null,
    stack:['PHP 8','Bootstrap 5.3','MySQL / MariaDB','Apache'],
    problem:'Orang yang mencari fotografer membutuhkan cara lebih mudah untuk membandingkan layanan, harga, portofolio, dan informasi booking di satu tempat.',
    contribution:'Repository mengimplementasikan struktur aplikasi PHP yang mencakup landing page, autentikasi, dashboard klien dan vendor, booking, bukti pembayaran, ulasan, dan manajemen profil vendor.',
    challenge:'PHP native prosedural dengan mysqli dan relasi foreign key, dibagi menjadi dua alur peran dalam satu aplikasi: klien (cari vendor, booking, unggah bukti bayar, review, invoice) dan vendor (CRUD paket, galeri portofolio, terima/tolak/selesaikan order) yang saling bergantung pada data yang sama.',
    features:['Pencarian vendor dengan filter kategori/lokasi dan pengurutan harga.','Dashboard klien dengan status booking dan alur invoice.','Dashboard vendor dengan CRUD paket, galeri portofolio, dan manajemen order.','Statistik berbasis database serta alur ulasan/rating.'],
    result:'Proyek Pemrograman Web semester 3; berjalan lokal via XAMPP/Laragon (Apache + MySQL/MariaDB). [ISI: hasil penggunaan — dipakai di mana, berapa vendor/klien jika sudah dijalankan]',
    engineering:'Proyek ini menunjukkan pemikiran aplikasi web end-to-end: komposisi UI, penanganan request, alur kerja per peran, unggah file, dan akses data relasional.',
    github:'https://github.com/Abhiprayaa29/ProjectPemogramanWeb-Abdillah-Abhi',
    image:'./assets/jogjalensa-malioboro-small.jpg', alt:'Suasana Jalan Malioboro Yogyakarta, visual latar untuk marketplace fotografi JogjaLensa', iw:1400, ih:933
  },
  ar: {
    title:'SimpleARPlacement',
    role:'Unity AR developer', status:'Repository publik', demo:null,
    stack:['Unity','AR Foundation 6.5','ARCore 6.5','C#'],
    problem:'Pengguna membutuhkan model interaksi mobile yang langsung untuk menempatkan objek 3D ke permukaan dunia nyata yang terdeteksi.',
    contribution:'Repository mengimplementasikan logika penempatan yang melakukan raycast ke plane terdeteksi, mengelola anchor AR opsional, serta menyediakan aksi UI untuk rotasi, skala, dan reset.',
    challenge:'Menempatkan objek pada hasil deteksi permukaan lewat raycast + anchor AR, dengan seluruh input memakai Unity Input System (bukan input legacy), di atas konfigurasi Android yang ketat untuk ARCore: IL2CPP, ARM64, minimum API 26, OpenGLES3.',
    features:['Penempatan dengan sekali tap menggunakan raycast AR terhadap geometri plane terdeteksi.','Pemasangan anchor agar objek tetap sejajar dengan permukaan terdeteksi bila memungkinkan.','Kontrol rotasi dan skala dengan batas terlindungi serta jeda penempatan.','Penyegaran state UI dan perlindungan pointer-over-UI untuk interaksi sentuh.'],
    result:'APK berhasil dibangun dan berjalan di Samsung Galaxy A54 dengan sesi AR aktif dan UI tampil. Lima skenario pengujian (permukaan bertekstur/polos, cahaya terang/redup, gerakan kamera cepat) sudah terdokumentasi — tabel hasil dan checklist screenshot/video belum diisi penuh. [ISI: hasil pengisian 5 skenario uji / perangkat lain yang sudah dicoba]',
    engineering:'Proyek memisahkan logika penempatan dari kontrol UI dan memakai Unity Input System + AR Foundation alih-alih satu skrip interaksi monolitik.',
    github:'https://github.com/Abhiprayaa29/simple-ar-placement',
    image:'./assets/simple-ar-placement-ui.jpg', alt:'Tangkapan layar antarmuka SimpleARPlacement di Android: object menu di bawah dan tombol opsi di atas kamera AR', iw:1080, ih:2340
  },
  cerberus: {
    title:'Cerberus',
    role:'Kustomisasi & orkestrasi', status:'Bagian dari oh-my-open-pentest', demo:null,
    stack:['Bun','TypeScript','OpenCode','Multi-Agent'],
    problem:'Pengujian keamanan yang kompleks diuntungkan dari dekomposisi: perencanaan, riset, eksekusi, verifikasi, dan pelaporan sebaiknya tidak ditangani sebagai satu tugas agen tunggal.',
    contribution:'Repository mendefinisikan Cerberus sebagai orkektor yang mengarahkan pekerjaan ke agen khusus dan playbook keamanan terstruktur untuk pengujian yang berizin.',
    challenge:'Merutekan tiap permintaan berdasarkan intent lalu mendelegasikan ke sub-agent spesialis (Scout, Intel, Sentinel, Talos, dan lainnya) yang bisa berjalan paralel, dengan verifikasi setiap temuan sebelum masuk laporan dan fallback chain antar provider model.',
    features:['Perutean berbasis intent untuk tugas riset, implementasi, investigasi, dan perbaikan.','Peran agen spesialis seperti Scout, Intel, Sentinel, Talos, dan Cerberus-Junior.','Tugas latar belakang paralel dan perutean model berbasis kategori.','Batas cakupan dan keselamatan yang eksplisit untuk pengujian keamanan yang berizin.'],
    result:'Dipasang sebagai bagian kerangka oh-my-open-pentest (bunx oh-my-open-pentest install; verifikasi lewat perintah doctor). Mencakup 109+ tools keamanan terintegrasi, 250+ skill playbooks, dan 10 mode engagement dengan laporan ber-CVSS. [ISI: penggunaan nyata — lab atau engagement mana yang sudah dijalankan, jika boleh dicatat]',
    engineering:'Sinyal terkuat adalah desain orkestrasi: mendekomposisi masalah besar menjadi tanggung jawab spesialis yang terbatas, lalu memverifikasi hasil kerja sebelum dilanjutkan.',
    note:'Hanya untuk pengujian yang berizin di lingkungan lab: sistem milik sendiri, lab pribadi, atau program bug bounty dalam scope — sesuai disclaimer di repository. Tidak untuk menguji sistem pihak lain tanpa izin tertulis.',
    github:'https://github.com/Abhiprayaa29/Cerberus'
  }
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

$('#year').textContent = new Date().getFullYear();

const menuBtn = $('#menuBtn');
const mobileNav = $('#mobileNav');
const setMenu = (open) => {
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Tutup navigasi' : 'Buka navigasi');
  menuBtn.textContent = open ? '×' : '☰';
  mobileNav.classList.toggle('open', open);
  document.documentElement.classList.toggle('menu-open', open);
};
menuBtn?.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
$$('#mobileNav a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menuBtn?.getAttribute('aria-expanded') === 'true') setMenu(false);
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 900 && menuBtn?.getAttribute('aria-expanded') === 'true') setMenu(false);
});

const applyTheme = (t, save) => {
  document.documentElement.setAttribute('data-theme', t);
  if (save) { try { localStorage.setItem('theme', t); } catch (e) {} }
  const dark = t === 'dark';
  $$('.theme-toggle').forEach(b => {
    b.setAttribute('aria-pressed', String(dark));
    b.setAttribute('aria-label', dark ? 'Aktifkan mode terang' : 'Aktifkan mode malam');
  });
  const lbl = $('.theme-toggle-label');
  if (lbl) lbl.textContent = dark ? 'Mode terang' : 'Mode malam';
  const m = document.querySelector('meta[name="theme-color"]');
  if (m) m.setAttribute('content', dark ? '#000000' : '#ffffff');
};
applyTheme(document.documentElement.getAttribute('data-theme') || 'light', false);
$$('.theme-toggle').forEach(btn => btn.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('theme-anim');
    setTimeout(() => document.documentElement.classList.remove('theme-anim'), 320);
  }
  applyTheme(next, true);
}));
const scheme = window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null;
scheme?.addEventListener?.('change', e => {
  let saved = null;
  try { saved = localStorage.getItem('theme'); } catch (err) {}
  if (saved !== 'light' && saved !== 'dark') applyTheme(e.matches ? 'dark' : 'light', false);
});

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = $$('.desktop-nav a, .mobile-nav-inner > a[href^="#"]');
let currentNav = '';
const markActive = (id) => {
  if (id === currentNav) return;
  currentNav = id;
  navLinks.forEach(a => {
    if (a.getAttribute('href') === '#' + id) a.setAttribute('aria-current', 'true');
    else a.removeAttribute('aria-current');
  });
};
let spyTick = false;
const spyScroll = () => {
  if (spyTick) return;
  spyTick = true;
  requestAnimationFrame(() => {
    spyTick = false;
    const line = 52 + window.innerHeight * 0.3;
    let active = '';
    for (const s of sections) {
      if (s.getBoundingClientRect().top <= line) active = s.id;
    }
    markActive(active);
  });
};
window.addEventListener('scroll', spyScroll, { passive: true });
window.addEventListener('resize', spyScroll);
spyScroll();

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const blocks = [...document.querySelectorAll('.hero .container > *, section .container > *')];
  blocks.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });
  blocks.forEach(el => io.observe(el));
}

const dialog = $('#projectDialog');
const dialogVisual = $('#dialogVisual');

const openCaseStudy = (key) => {
  const p = data[key];
  if (!p || dialog.open) return;
  $('#dialogTitle').textContent = p.title;
  $('#dialogRole').textContent = p.role;
  $('#dialogStatus').textContent = p.status;
  $('#dialogProblem').textContent = p.problem;
  $('#dialogContribution').textContent = p.contribution;
  $('#dialogChallenge').textContent = p.challenge;
  $('#dialogResult').textContent = p.result;
  $('#dialogEngineering').textContent = p.engineering;
  $('#dialogStack').textContent = p.stack.join(' · ');
  const note = $('#dialogNote');
  note.textContent = p.note || '';
  note.hidden = !p.note;
  const demo = $('#dialogDemo');
  if (p.demo) { demo.href = p.demo; demo.hidden = false; } else { demo.hidden = true; }
  const list = $('#dialogFeatures'); list.innerHTML = '';
  p.features.forEach(f => { const li = document.createElement('li'); li.textContent = f; list.appendChild(li); });
  if (p.image) {
    dialogVisual.hidden = false;
    dialogVisual.innerHTML = `<img src="${p.image}" alt="${p.alt}" width="${p.iw}" height="${p.ih}" loading="lazy">`;
  } else {
    dialogVisual.hidden = true;
    dialogVisual.innerHTML = '';
  }
  $('#dialogGithub').href = p.github;
  dialog.showModal();
};

$$('.project-row').forEach(row => {
  row.addEventListener('click', e => {
    if (e.target.closest('a,button')) return;
    openCaseStudy(row.dataset.project);
  });
});
$$('.row-open').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.open || btn.closest('.project-row')?.dataset.project;
    if (key) openCaseStudy(key);
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
