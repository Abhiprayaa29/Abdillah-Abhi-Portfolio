const data = {
  mlbb: {
    title: 'MLBB Draft Studio',
    role: 'Full-stack developer',
    status: 'Repository publik',
    demo: null,
    stack: ['React 18', 'Vite', 'Tailwind CSS v4', 'Express', 'Socket.IO'],
    problem:
      'Operator turnamen membutuhkan satu sumber kebenaran untuk aksi draft, timer, konfigurasi tim, state pertandingan, dan overlay siap siar.',
    contribution:
      'Repository memisahkan state bersama dari UI: engine draft di sisi server memiliki transisi state, sementara antarmuka mengonsumsi state otoritatif melalui Socket.IO.',
    challenge:
      'Menyinkronkan draft, timer, dan skor antara panel operator dan beberapa Browser Source OBS secara real-time tanpa reload — state dipegang penuh oleh server, ditulis atomik (file .tmp lalu rename) dengan autosave dan retensi backup, sehingga state pertandingan pulih persis setelah crash atau restart.',
    features: [
      'Engine draft dengan urutan aksi pick/ban, pencegahan duplikat, undo, lock, reset, dan preset.',
      'Countdown otoritatif di server yang disinkronkan antar klien operator dan overlay.',
      'Route draft dan scoreboard transparan untuk OBS Browser Source.',
      'State pertandingan persisten, backup, konfigurasi tema, serta perlindungan operator-token opsional.',
    ],
    result:
      'Dirancang sebagai sumber siaran OBS: control panel di PC operator, overlay draft + scoreboard transparan (1920×1080, aman juga di 1280×720 tanpa scrollbar) di PC siaran lewat LAN. Pengujian otomatis: 131 asersi backend dan 115 asersi E2E lulus; dataset 133 hero tervalidasi 0 error. Status: fixture teruji, koneksi grid live belum terverifikasi.',
    engineering:
      'Engine draft dijaga tetap terpisah dari UI berupa fungsi transisi state; server memiliki state bersama dan menyiarkan perubahan ke klien.',
    github: 'https://github.com/Abhiprayaa29/mlbb-draft-studio',
    image: './assets/projects/mlbb/control-panel-operator.webp',
    alt: 'Panel operator MLBB Draft Studio pada sesi selftest: fase pick, statistik game, dan grid 133 hero',
    iw: 1600,
    ih: 1000,
    gallery: [
      {
        src: './assets/projects/mlbb/control-panel-operator.webp',
        alt: 'Panel operator MLBB Draft Studio pada sesi selftest: fase pick, statistik game, dan grid 133 hero',
        iw: 1600,
        ih: 1000,
      },
      {
        src: './assets/projects/mlbb/control-panel-grid.webp',
        alt: 'Tab GRID panel operator: sumber data GRID live dengan fixture draft.json pada fase ban',
        iw: 1600,
        ih: 1000,
      },
      {
        src: './assets/projects/mlbb/overlay-draft.webp',
        alt: 'Overlay draft broadcast 1920x1080: slot pick kedua tim, timer, dan branding turnamen',
        iw: 1600,
        ih: 900,
      },
      {
        src: './assets/projects/mlbb/overlay-score.webp',
        alt: 'Overlay scoreboard 1920x1080: skor tim, kill, gold, turret, lord, dan turtle saat menunggu data pertandingan',
        iw: 1600,
        ih: 900,
      },
    ],
  },
  spada: {
    title: 'SPADA Telegram Bot',
    role: 'Developer & automation',
    status: 'Pemakaian personal · repo publik',
    demo: null,
    stack: ['Python', 'Telegram Bot', 'FastAPI', 'BeautifulSoup'],
    problem:
      'Data mata kuliah, deadline, kehadiran, tugas, dan nilai tersebar di alur LMS yang merepotkan untuk dicek secara manual.',
    contribution:
      'Repository menggabungkan bot Telegram, scraper LMS, tracker, dan dashboard FastAPI read-only di sekitar state lokal bersama.',
    challenge:
      'Menjaga sesi login SPADA tetap dipakai scraper otomatis (pengecekan deadline tiap 30 menit, absensi 5 menit sebelum kelas berakhir) dengan state lokal yang aman — kredensial tidak pernah masuk .env — plus pairing QR agar dashboard web read-only bisa mengakses data tanpa login ulang.',
    features: [
      'Login SPADA dan deteksi semester dengan penyimpanan data sesi.',
      'Pengingat deadline 24 jam, 1 jam, dan 15 menit sebelum tenggat.',
      'Alur kehadiran terjadwal dengan bukti screenshot dikirim kembali ke Telegram.',
      'Dashboard FastAPI dengan pairing QR, cookie sesi, jadwal, tugas, nilai, dan tampilan kehadiran.',
    ],
    result:
      'Dipakai untuk kebutuhan kuliah sendiri di UPNYK: pengingat deadline, absensi otomatis dengan screenshot bukti ke Telegram, dan briefing harian jam 07:00 WIB. Bisa di-deploy ke GCP e2-micro (1 CPU, 512 MB RAM) dengan systemd yang start otomatis saat reboot.',
    engineering:
      'Proyek ini menghubungkan otomasi web eksternal, state lokal, pesan Telegram, pengecekan terjadwal, dan antarmuka web terpisah tanpa membocorkan sesi rahasia ke frontend.',
    github: 'https://github.com/Abhiprayaa29/bot_spada',
  },
  jogjalensa: {
    title: 'JogjaLensa',
    role: 'Full-stack developer',
    status: 'Proyek kuliah · repo publik',
    demo: null,
    stack: ['PHP 8', 'Bootstrap 5.3', 'MySQL / MariaDB', 'Apache'],
    problem:
      'Orang yang mencari fotografer membutuhkan cara lebih mudah untuk membandingkan layanan, harga, portofolio, dan informasi booking di satu tempat.',
    contribution:
      'Repository mengimplementasikan struktur aplikasi PHP yang mencakup landing page, autentikasi, dashboard klien dan vendor, booking, bukti pembayaran, ulasan, dan manajemen profil vendor.',
    challenge:
      'PHP native prosedural dengan mysqli dan relasi foreign key, dibagi menjadi dua alur peran dalam satu aplikasi: klien (cari vendor, booking, unggah bukti bayar, review, invoice) dan vendor (CRUD paket, galeri portofolio, terima/tolak/selesaikan order) yang saling bergantung pada data yang sama.',
    features: [
      'Pencarian vendor dengan filter kategori/lokasi dan pengurutan harga.',
      'Dashboard klien dengan status booking dan alur invoice.',
      'Dashboard vendor dengan CRUD paket, galeri portofolio, dan manajemen order.',
      'Statistik berbasis database serta alur ulasan/rating.',
    ],
    result:
      'Proyek Pemrograman Web semester 3 — aplikasi full-stack yang berjalan lokal via XAMPP/Laragon (Apache + MySQL/MariaDB), dari landing page sampai alur pembayaran dan ulasan dengan dua alur peran: klien dan vendor.',
    engineering:
      'Proyek ini menunjukkan pemikiran aplikasi web end-to-end: komposisi UI, penanganan request, alur kerja per peran, unggah file, dan akses data relasional.',
    github: 'https://github.com/Abhiprayaa29/ProjectPemogramanWeb-Abdillah-Abhi',
  },
  ar: {
    title: 'SimpleARPlacement',
    role: 'Unity AR developer',
    status: 'Repository publik',
    demo: null,
    stack: ['Unity', 'AR Foundation 6.5', 'ARCore 6.5', 'C#'],
    problem:
      'Pengguna membutuhkan model interaksi mobile yang langsung untuk menempatkan objek 3D ke permukaan dunia nyata yang terdeteksi.',
    contribution:
      'Repository mengimplementasikan logika penempatan yang melakukan raycast ke plane terdeteksi, mengelola anchor AR opsional, serta menyediakan aksi UI untuk rotasi, skala, dan reset.',
    challenge:
      'Menempatkan objek pada hasil deteksi permukaan lewat raycast + anchor AR, dengan seluruh input memakai Unity Input System (bukan input legacy), di atas konfigurasi Android yang ketat untuk ARCore: IL2CPP, ARM64, minimum API 26, OpenGLES3.',
    features: [
      'Penempatan dengan sekali tap menggunakan raycast AR terhadap geometri plane terdeteksi.',
      'Pemasangan anchor agar objek tetap sejajar dengan permukaan terdeteksi bila memungkinkan.',
      'Kontrol rotasi dan skala dengan batas terlindungi serta jeda penempatan.',
      'Penyegaran state UI dan perlindungan pointer-over-UI untuk interaksi sentuh.',
    ],
    result:
      'APK berhasil dibangun dan berjalan di Samsung Galaxy A54 dengan sesi AR aktif dan UI tampil. Lima skenario pengujian terdokumentasi: permukaan bertekstur/polos, cahaya terang/redup, dan gerakan kamera cepat.',
    engineering:
      'Proyek memisahkan logika penempatan dari kontrol UI dan memakai Unity Input System + AR Foundation alih-alih satu skrip interaksi monolitik.',
    github: 'https://github.com/Abhiprayaa29/simple-ar-placement',
    image: './assets/projects/ar/simple-ar-placement-ui.webp',
    alt: 'Tangkapan layar SimpleARPlacement di Android: prompt Tap to Place di atas kamera AR dengan palet objek 3D di bawah',
    iw: 1080,
    ih: 2340,
  },
  cerberus: {
    title: 'Cerberus',
    role: 'Kustomisasi & orkestrasi',
    status: 'Bagian dari oh-my-open-pentest',
    demo: null,
    stack: ['Bun', 'TypeScript', 'OpenCode', 'Multi-Agent'],
    problem:
      'Pengujian keamanan yang kompleks diuntungkan dari dekomposisi: perencanaan, riset, eksekusi, verifikasi, dan pelaporan sebaiknya tidak ditangani sebagai satu tugas agen tunggal.',
    contribution:
      'Repository mendefinisikan Cerberus sebagai orkektor yang mengarahkan pekerjaan ke agen khusus dan playbook keamanan terstruktur untuk pengujian yang berizin.',
    challenge:
      'Merutekan tiap permintaan berdasarkan intent lalu mendelegasikan ke sub-agent spesialis (Scout, Intel, Sentinel, Talos, dan lainnya) yang bisa berjalan paralel, dengan verifikasi setiap temuan sebelum masuk laporan dan fallback chain antar provider model.',
    features: [
      'Perutean berbasis intent untuk tugas riset, implementasi, investigasi, dan perbaikan.',
      'Peran agen spesialis seperti Scout, Intel, Sentinel, Talos, dan Cerberus-Junior.',
      'Tugas latar belakang paralel dan perutean model berbasis kategori.',
      'Batas cakupan dan keselamatan yang eksplisit untuk pengujian keamanan yang berizin.',
    ],
    result:
      'Dikustomisasi dan diadaptasi sebagai bagian kerangka oh-my-open-pentest (bunx oh-my-open-pentest install; verifikasi lewat perintah doctor). Kerangka menyediakan 109+ tools keamanan terintegrasi, 250+ skill playbooks, dan 10 mode engagement dengan laporan ber-CVSS.',
    engineering:
      'Sinyal terkuat adalah desain orkestrasi: mendekomposisi masalah besar menjadi tanggung jawab spesialis yang terbatas, lalu memverifikasi hasil kerja sebelum dilanjutkan.',
    note: 'Hanya untuk pengujian yang berizin di lingkungan lab: sistem milik sendiri, lab pribadi, atau program bug bounty dalam scope — sesuai disclaimer di repository. Tidak untuk menguji sistem pihak lain tanpa izin tertulis.',
    github: 'https://github.com/Abhiprayaa29/Cerberus',
    image: './assets/projects/cerberus/orchestrator-atlas.webp',
    alt: 'Konsol orkestrasi Cerberus: terminal agen dan tabel tugas paralel dengan status eksekusi',
    iw: 1600,
    ih: 540,
    gallery: [
      {
        src: './assets/projects/cerberus/orchestrator-atlas.webp',
        alt: 'Konsol orkestrasi Cerberus: terminal agen dan tabel tugas paralel dengan status eksekusi',
        iw: 1600,
        ih: 540,
      },
      {
        src: './assets/projects/cerberus/core-loop.webp',
        alt: 'Diagram alur inti Cerberus: Human Intent, Agent Execution, dan Verified Result dengan prinsip minimum intervention',
        iw: 1408,
        ih: 768,
      },
      {
        src: './assets/projects/cerberus/ultrawork-flow.webp',
        alt: 'Diagram alur Ultrawork: jalur langsung ulw dibandingkan alur multi-tahap Prometheus ke Atlas hingga selesai',
        iw: 1408,
        ih: 768,
      },
    ],
  },
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
$$('#mobileNav a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuBtn?.getAttribute('aria-expanded') === 'true') setMenu(false);
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 900 && menuBtn?.getAttribute('aria-expanded') === 'true') setMenu(false);
});

const applyTheme = (t, save) => {
  document.documentElement.setAttribute('data-theme', t);
  if (save) {
    try {
      localStorage.setItem('theme', t);
    } catch (e) {}
  }
  const dark = t === 'dark';
  $$('.theme-toggle').forEach((b) => {
    b.setAttribute('aria-pressed', String(dark));
    b.setAttribute('aria-label', dark ? 'Aktifkan mode terang' : 'Aktifkan mode malam');
  });
  const lbl = $('.theme-toggle-label');
  if (lbl) lbl.textContent = dark ? 'Mode terang' : 'Mode malam';
  const m = document.querySelector('meta[name="theme-color"]');
  if (m) m.setAttribute('content', dark ? '#000000' : '#ffffff');
};
applyTheme(document.documentElement.getAttribute('data-theme') || 'light', false);
$$('.theme-toggle').forEach((btn) =>
  btn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('theme-anim');
      setTimeout(() => document.documentElement.classList.remove('theme-anim'), 320);
    }
    applyTheme(next, true);
  }),
);
const scheme = window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null;
scheme?.addEventListener?.('change', (e) => {
  let saved = null;
  try {
    saved = localStorage.getItem('theme');
  } catch (err) {}
  if (saved !== 'light' && saved !== 'dark') applyTheme(e.matches ? 'dark' : 'light', false);
});

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = $$('.desktop-nav a, .mobile-nav-inner > a[href^="#"]');
let currentNav = '';
const markActive = (id) => {
  if (id === currentNav) return;
  currentNav = id;
  navLinks.forEach((a) => {
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
    if (sections.length && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      active = sections[sections.length - 1].id;
    }
    markActive(active);
  });
};
window.addEventListener('scroll', spyScroll, { passive: true });
window.addEventListener('resize', spyScroll);
spyScroll();

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const blocks = [...document.querySelectorAll('.hero .container > *, section .container > *')];
  blocks.forEach((el) => el.classList.add('reveal'));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0, rootMargin: '0px 0px -30px 0px' },
  );
  blocks.forEach((el) => io.observe(el));
}

const techIcons = {
  'React 18': 'i-react',
  Vite: 'i-vite',
  'Tailwind CSS v4': 'i-tailwindcss',
  Express: 'i-express',
  'Socket.IO': 'i-socketdotio',
  Python: 'i-python',
  FastAPI: 'i-fastapi',
  'PHP 8': 'i-php',
  'Bootstrap 5.3': 'i-bootstrap',
  'MySQL / MariaDB': 'i-mysql',
  Apache: 'i-apache',
  Unity: 'i-unity',
  'C#': 'i-csharp',
  Bun: 'i-bun',
  TypeScript: 'i-typescript',
};

const techHtml = (label) => {
  const icon = techIcons[label];
  const ico = icon ? `<svg class="ico" aria-hidden="true"><use href="#${icon}" /></svg>` : '';
  return `<span class="tech">${ico}${label}</span>`;
};

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
  $('#dialogStack').innerHTML = p.stack.map(techHtml).join(' · ');
  const note = $('#dialogNote');
  note.textContent = p.note || '';
  note.hidden = !p.note;
  const demo = $('#dialogDemo');
  if (p.demo) {
    demo.href = p.demo;
    demo.hidden = false;
  } else {
    demo.hidden = true;
  }
  const list = $('#dialogFeatures');
  list.innerHTML = '';
  p.features.forEach((f) => {
    const li = document.createElement('li');
    li.textContent = f;
    list.appendChild(li);
  });
  const gallery =
    p.gallery && p.gallery.length
      ? p.gallery
      : p.image
        ? [{ src: p.image, alt: p.alt, iw: p.iw, ih: p.ih }]
        : [];
  if (gallery.length) {
    dialogVisual.hidden = false;
    dialogVisual.classList.toggle('dialog-visual-gallery', gallery.length > 1);
    dialogVisual.innerHTML = gallery
      .map(
        (g) =>
          `<img src="${g.src}" alt="${g.alt}" width="${g.iw}" height="${g.ih}" loading="lazy">`,
      )
      .join('');
  } else {
    dialogVisual.hidden = true;
    dialogVisual.classList.remove('dialog-visual-gallery');
    dialogVisual.innerHTML = '';
  }
  $('#dialogGithub').href = p.github;
  dialog.showModal();
};

$$('.project-row').forEach((row) => {
  row.addEventListener('click', (e) => {
    if (e.target.closest('a,button')) return;
    openCaseStudy(row.dataset.project);
  });
});
$$('.row-open').forEach((btn) => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.open || btn.closest('.project-row')?.dataset.project;
    if (key) openCaseStudy(key);
  });
});
$('#dialogClose').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (e) => {
  if (e.target === dialog) dialog.close();
});

const certDialog = $('#certDialog');
$$('.cert-thumb').forEach((btn) => {
  btn.addEventListener('click', () => {
    const img = $('#certImage');
    img.src = `assets/sertifikat/preview/${btn.dataset.cert}-full.webp`;
    img.alt = `Sertifikat ${btn.dataset.title}`;
    $('#certTitle').textContent = btn.dataset.title;
    certDialog.showModal();
  });
});
$('#certClose').addEventListener('click', () => certDialog.close());
certDialog.addEventListener('click', (e) => {
  if (e.target === certDialog) certDialog.close();
});

const featuredSlides = [
  {
    key: 'mlbb',
    text: 'Panel operator dan overlay OBS transparan (1920×1080) yang dirancang sebagai sumber siaran turnamen lewat LAN — draft, timer, dan skor tersinkron real-time tanpa reload.',
    metrics: [
      ['131', 'asersi backend lulus'],
      ['115', 'asersi E2E lulus'],
      ['133', 'hero tervalidasi 0 error'],
    ],
  },
  {
    key: 'spada',
    text: 'Bot Telegram untuk jadwal kuliah: pengingat deadline 24 jam / 1 jam / 15 menit, absensi otomatis dengan screenshot bukti, dan dashboard web read-only dengan pairing QR.',
    metrics: [
      ['3', 'pengingat deadline'],
      ['30', 'menit sekali cek tugas'],
      ['512', 'MB RAM GCP e2-micro'],
    ],
  },
  {
    key: 'jogjalensa',
    text: 'Marketplace fotografi dua peran: klien mencari vendor, booking, unggah bukti bayar, dan ulasan bintang; vendor mengelola paket, galeri portofolio, serta order.',
    metrics: [
      ['2', 'alur peran: klien & vendor'],
      ['4', 'modul inti aplikasi'],
      ['PHP 8', 'prosedural + MySQL (XAMPP)'],
    ],
  },
  {
    key: 'ar',
    text: 'Aplikasi Android AR: tap untuk menempatkan objek 3D di permukaan yang terdeteksi, dengan kontrol rotasi, skala, dan reset langsung dari UI.',
    metrics: [
      ['5', 'skenario pengujian AR'],
      ['26', 'minimum API Android'],
      ['3', 'kontrol objek di UI'],
    ],
  },
  {
    key: 'cerberus',
    text: 'Orkestrasi multi-agent berbasis intent: masalah dipecah untuk sub-agent spesialis, lalu hasilnya diverifikasi sebelum pekerjaan berlanjut.',
    metrics: [
      ['109+', 'tools keamanan terintegrasi'],
      ['250+', 'skill playbooks'],
      ['10', 'mode engagement'],
    ],
  },
];
const featEl = $('.featured');
if (featEl) {
  const titleEl = featEl.querySelector('.featured-title');
  const textEl = featEl.querySelector('.featured-text');
  const metricsEl = featEl.querySelector('.featured-metrics');
  const openBtn = featEl.querySelector('.featured-actions .row-open');
  const repoLink = featEl.querySelector('.featured-actions .row-link');
  const dotsWrap = featEl.querySelector('.featured-dots');
  const reduceMQ = matchMedia('(prefers-reduced-motion: reduce)');
  let idx = 0,
    timer = null,
    paused = false,
    fadeT = null;
  const paint = (i) => {
    const s = featuredSlides[i],
      p = data[s.key];
    titleEl.textContent = p.title;
    textEl.textContent = s.text;
    metricsEl.innerHTML = s.metrics
      .map((m) => `<li><strong>${m[0]}</strong><span>${m[1]}</span></li>`)
      .join('');
    openBtn.dataset.open = s.key;
    repoLink.href = p.github;
    [...dotsWrap.children].forEach((d, di) =>
      d.setAttribute('aria-current', di === i ? 'true' : 'false'),
    );
  };
  const stop = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  };
  const go = (i, manual) => {
    idx = (i + featuredSlides.length) % featuredSlides.length;
    if (reduceMQ.matches) {
      paint(idx);
    } else {
      clearTimeout(fadeT);
      featEl.classList.add('is-fading');
      fadeT = setTimeout(() => {
        paint(idx);
        featEl.classList.remove('is-fading');
      }, 200);
    }
    if (manual) {
      stop();
      start();
    }
  };
  const start = () => {
    if (timer || paused || document.hidden || reduceMQ.matches) return;
    timer = setInterval(() => go(idx + 1, false), 7000);
  };
  featuredSlides.forEach((s, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'featured-dot';
    b.setAttribute(
      'aria-label',
      `Proyek unggulan ${i + 1} dari ${featuredSlides.length}: ${data[s.key].title}`,
    );
    b.addEventListener('click', () => go(i, true));
    dotsWrap.appendChild(b);
  });
  paint(0);
  featEl.querySelector('[data-feat="prev"]').addEventListener('click', () => go(idx - 1, true));
  featEl.querySelector('[data-feat="next"]').addEventListener('click', () => go(idx + 1, true));
  featEl.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(idx - 1, true);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(idx + 1, true);
    }
  });
  const hold = () => {
    paused = true;
    stop();
  };
  const release = () => {
    paused = false;
    start();
  };
  featEl.addEventListener('pointerenter', (e) => {
    if (e.pointerType === 'mouse') hold();
  });
  featEl.addEventListener('pointerleave', (e) => {
    if (e.pointerType === 'mouse') release();
  });
  featEl.addEventListener('focusin', hold);
  featEl.addEventListener('focusout', (e) => {
    if (!featEl.contains(e.relatedTarget)) release();
  });
  document.addEventListener('visibilitychange', () => {
    document.hidden ? stop() : start();
  });
  reduceMQ.addEventListener?.('change', () => {
    stop();
    start();
  });
  let sx = 0,
    sy = 0;
  featEl.addEventListener(
    'touchstart',
    (e) => {
      if (e.touches.length === 1) {
        sx = e.touches[0].clientX;
        sy = e.touches[0].clientY;
      }
    },
    { passive: true },
  );
  featEl.addEventListener(
    'touchend',
    (e) => {
      const t = e.changedTouches[0];
      if (!t) return;
      const dx = t.clientX - sx,
        dy = t.clientY - sy;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5)
        go(dx < 0 ? idx + 1 : idx - 1, true);
    },
    { passive: true },
  );
  start();
}

const copyBtn = $('#copyEmail');
const copyUse = $('#copyIcon')?.querySelector('use');
copyBtn?.addEventListener('click', async () => {
  const email = 'abdillahabhi12@gmail.com';
  try {
    await navigator.clipboard.writeText(email);
    $('#copyLabel').lastChild.textContent = 'Email tersalin';
    copyUse?.setAttribute('href', '#i-check');
    setTimeout(() => {
      $('#copyLabel').lastChild.textContent = 'Salin email';
      copyUse?.setAttribute('href', '#i-copy');
    }, 1500);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});

const VISIT_ID_KEY = 'abhi_vid';
const VISIT_COOKIE = 'abhi_vid';
const VISIT_ID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const makeVisitorId = () => {
  try {
    if (globalThis.crypto?.randomUUID) return crypto.randomUUID();
  } catch {
    /* fall through to the manual fallback */
  }
  const bytes = new Uint8Array(16);
  try {
    if (globalThis.crypto?.getRandomValues) crypto.getRandomValues(bytes);
    else throw new Error('no secure random source');
  } catch {
    for (let i = 0; i < 16; i += 1) bytes[i] = Math.floor(Math.random() * 256);
  }
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
};

const readVisitCookie = () => {
  try {
    const part = document.cookie.split('; ').find((c) => c.startsWith(`${VISIT_COOKIE}=`));
    if (!part) return '';
    return decodeURIComponent(part.slice(VISIT_COOKIE.length + 1));
  } catch {
    return '';
  }
};

const getVisitorId = () => {
  let id = '';
  try {
    id = localStorage.getItem(VISIT_ID_KEY) || '';
  } catch {
    id = '';
  }
  if (!VISIT_ID_RE.test(id)) id = readVisitCookie();
  if (!VISIT_ID_RE.test(id)) {
    id = makeVisitorId();
    try {
      localStorage.setItem(VISIT_ID_KEY, id);
    } catch {
      /* storage unavailable - the cookie below still carries the id */
    }
  }
  try {
    if (!VISIT_ID_RE.test(readVisitCookie())) {
      document.cookie = `${VISIT_COOKIE}=${encodeURIComponent(id)}; Path=/; Max-Age=31536000; SameSite=Lax`;
    }
  } catch {
    /* cookie write refused - the request body below still carries the id */
  }
  return id;
};

const reportVisit = async () => {
  try {
    const res = await fetch('/api/visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ visitorId: getVisitorId() }),
      keepalive: true,
    });
    window.__visit = await res.json();
  } catch {
    window.__visit = { ok: false, available: false };
  }
};

const reportStats = async () => {
  const el = document.getElementById('footerStats');
  if (!el) return;
  try {
    const res = await fetch('/api/stats', { headers: { Accept: 'application/json' } });
    if (!res.ok) return;
    const data = await res.json();
    if (!data || data.available !== true) return;
    const unique = Math.round(Number(data.uniqueVisitors));
    const total = Math.round(Number(data.totalVisits));
    const returning = Math.round(Number(data.returningVisits));
    if (![unique, total, returning].every(Number.isFinite)) return;
    if (unique < 0 || total < 0 || returning < 0) return;
    if (unique === 0 && total === 0) return;
    el.textContent = `${unique} unique visitors \u00b7 ${total} visits \u00b7 ${returning} returning`;
    el.hidden = false;
    window.__stats = data;
  } catch {
    /* stats are decoration - leave the footer untouched */
  }
};

const startTracking = () => {
  // both are fire-and-forget: the decorative stats read must never sit on the
  // critical path behind the visit write
  reportVisit();
  reportStats();
};

if (document.readyState === 'complete') startTracking();
else window.addEventListener('load', startTracking, { once: true });

const initAmbient = () => {
  const el = document.querySelector('.hero-glow');
  if (!el || !window.matchMedia) return;
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let x = 0;
  let y = 0;
  let queued = false;
  const paint = () => {
    queued = false;
    el.style.setProperty('--amb-x', x.toFixed(1) + 'px');
    el.style.setProperty('--amb-y', y.toFixed(1) + 'px');
  };
  window.addEventListener(
    'pointermove',
    (e) => {
      if (e.pointerType !== 'mouse') return;
      x = (e.clientX / window.innerWidth) * 24 - 12;
      y = (e.clientY / window.innerHeight) * 24 - 12;
      if (queued) return;
      queued = true;
      requestAnimationFrame(paint);
    },
    { passive: true },
  );
};

initAmbient();
