const data = {
  mlbb: {
    eyebrow:'UNGGLAN · SISTEM WEB REAL-TIME', title:'MLBB Draft Studio',
    role:'Full-stack developer', status:'Repository publik',
    stack:[['React 18','i-react'],['Vite','i-vite'],['Tailwind CSS','i-tailwindcss'],['Express','i-express'],['Socket.IO','i-socket']],
    problem:'Operator turnamen membutuhkan satu sumber kebenaran untuk aksi draft, timer, konfigurasi tim, state pertandingan, dan overlay siap siar.',
    contribution:'Repository memisahkan state bersama dari UI: engine draft di sisi server memiliki transisi state, sementara antarmuka mengonsumsi state otoritatif melalui Socket.IO.',
    features:['Engine draft dengan urutan aksi pick/ban, pencegahan duplikat, undo, lock, reset, dan preset.','Countdown otoritatif di server yang disinkronkan antar klien operator dan overlay.','Route draft dan scoreboard transparan untuk OBS Browser Source.','State pertandingan persisten, backup, konfigurasi tema, serta perlindungan operator-token opsional.'],
    engineering:'Engine draft dijaga tetap terpisah dari UI berupa fungsi transisi state; server memiliki state bersama dan menyiarkan perubahan ke klien.',
    github:'https://github.com/Abhiprayaa29/mlbb-draft-studio', visual:'image', image:'https://raw.githubusercontent.com/Abhiprayaa29/mlbb-draft-studio/main/public/assets/heroes/aamon-splash.jpg', alt:'Visual repository dari MLBB Draft Studio'
  },
  spada: {
    eyebrow:'UNGGLAN · OTOMASI', title:'SPADA Telegram Bot',
    role:'Developer & automation', status:'Repository publik',
    stack:[['Python','i-python'],['Telegram Bot','i-telegram'],['FastAPI','i-fastapi'],['BeautifulSoup','i-globe']],
    problem:'Data mata kuliah, deadline, kehadiran, tugas, dan nilai tersebar di alur LMS yang merepotkan untuk dicek secara manual.',
    contribution:'Repository menggabungkan bot Telegram, scraper LMS, tracker, dan dashboard FastAPI read-only di sekitar state lokal bersama.',
    features:['Login SPADA dan deteksi semester dengan penyimpanan data sesi.','Pengingat deadline 24 jam, 1 jam, dan 15 menit sebelum tenggat.','Alur kehadiran terjadwal dengan bukti screenshot dikirim kembali ke Telegram.','Dashboard FastAPI dengan pairing QR, cookie sesi, jadwal, tugas, nilai, dan tampilan kehadiran.'],
    engineering:'Proyek ini menghubungkan otomasi web eksternal, state lokal, pesan Telegram, pengecekan terjadwal, dan antarmuka web terpisah tanpa membocorkan sesi rahasia ke frontend.',
    github:'https://github.com/Abhiprayaa29/bot_spada', visual:'automation'
  },
  jogjalensa: {
    eyebrow:'UNGGLAN · WEB FULL-STACK', title:'JogjaLensa',
    role:'Full-stack developer', status:'Repository publik',
    stack:[['PHP 8','i-php'],['Bootstrap 5.3','i-bootstrap'],['MySQL / MariaDB','i-mysql'],['Apache','i-apache']],
    problem:'Orang yang mencari fotografer membutuhkan cara lebih mudah untuk membandingkan layanan, harga, portofolio, dan informasi booking di satu tempat.',
    contribution:'Repository mengimplementasikan struktur aplikasi PHP yang mencakup landing page, autentikasi, dashboard klien dan vendor, booking, bukti pembayaran, ulasan, dan manajemen profil vendor.',
    features:['Pencarian vendor dengan filter kategori/lokasi dan pengurutan harga.','Dashboard klien dengan status booking dan alur invoice.','Dashboard vendor dengan CRUD paket, galeri portofolio, dan manajemen order.','Statistik berbasis database serta alur ulasan/rating.'],
    engineering:'Proyek ini menunjukkan pemikiran aplikasi web end-to-end: komposisi UI, penanganan request, alur kerja per peran, unggah file, dan akses data relasional.',
    github:'https://github.com/Abhiprayaa29/ProjectPemogramanWeb-Abdillah-Abhi', visual:'image', image:'https://raw.githubusercontent.com/Abhiprayaa29/ProjectPemogramanWeb-Abdillah-Abhi/main/assets/image/malioboro.jpg', alt:'Aset visual Yogyakarta dari JogjaLensa'
  },
  ar: {
    eyebrow:'EKSPERIMENTAL · SISTEM INTERAKTIF', title:'SimpleARPlacement',
    role:'Unity AR developer', status:'Repository publik',
    stack:[['Unity','i-unity'],['AR Foundation','i-cube'],['ARCore','i-scan'],['C#','i-csharp']],
    problem:'Pengguna membutuhkan model interaksi mobile yang langsung untuk menempatkan objek 3D ke permukaan dunia nyata yang terdeteksi.',
    contribution:'Repository mengimplementasikan logika penempatan yang melakukan raycast ke plane terdeteksi, mengelola anchor AR opsional, serta menyediakan aksi UI untuk rotasi, skala, dan reset.',
    features:['Penempatan dengan sekali tap menggunakan raycast AR terhadap geometri plane terdeteksi.','Pemasangan anchor agar objek tetap sejajar dengan permukaan terdeteksi bila memungkinkan.','Kontrol rotasi dan skala dengan batas terlindungi serta jeda penempatan.','Penyegaran state UI dan perlindungan pointer-over-UI untuk interaksi sentuh.'],
    engineering:'Proyek memisahkan logika penempatan dari kontrol UI dan memakai Unity Input System + AR Foundation alih-alih satu skrip interaksi monolitik.',
    github:'https://github.com/Abhiprayaa29/simple-ar-placement', visual:'image', image:'https://raw.githubusercontent.com/Abhiprayaa29/simple-ar-placement/main/Docs/SimpleARPlacement/Screenshots/05_template_ui.png', alt:'Tangkapan layar antarmuka SimpleARPlacement'
  },
  cerberus: {
    eyebrow:'TINGKAT LANJUT · ORKESTRASI AI', title:'Cerberus',
    role:'Arsitek orkestrasi', status:'Repository publik',
    stack:[['Bun','i-bun'],['TypeScript','i-typescript'],['OpenCode','i-terminal'],['Multi-Agent','i-agents']],
    problem:'Pengujian keamanan yang kompleks diuntungkan dari dekomposisi: perencanaan, riset, eksekusi, verifikasi, dan pelaporan sebaiknya tidak ditangani sebagai satu tugas agen tunggal.',
    contribution:'Repository mendefinisikan Cerberus sebagai orkektor yang mengarahkan pekerjaan ke agen khusus dan playbook keamanan terstruktur untuk pengujian yang berizin.',
    features:['Perutean berbasis intent untuk tugas riset, implementasi, investigasi, dan perbaikan.','Peran agen spesialis seperti Scout, Intel, Sentinel, Talos, dan Cerberus-Junior.','Tugas latar belakang paralel dan perutean model berbasis kategori.','Batas cakupan dan keselamatan yang eksplisit untuk pengujian keamanan yang berizin.'],
    engineering:'Sinyal terkuat adalah desain orkestrasi: mendekomposisi masalah besar menjadi tanggung jawab spesialis yang terbatas, lalu memverifikasi hasil kerja sebelum dilanjutkan.',
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
  $('#dialogEngineering').textContent = p.engineering;
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
