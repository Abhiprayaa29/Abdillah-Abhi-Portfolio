const data = {
  mlbb: {
    eyebrow:'FEATURED · REAL-TIME WEB SYSTEM', title:'MLBB Draft Studio',
    problem:'Tournament operators need one source of truth for draft actions, timers, team configuration, match state, and broadcast-ready overlays.',
    contribution:'The repository separates shared state from the UI: a server-side draft engine owns state transitions while the interface consumes authoritative state through Socket.IO.',
    features:['Draft engine with ordered pick/ban actions, duplicate prevention, undo, lock, reset, and presets.','Server-authoritative countdown synchronized across operator and overlay clients.','Transparent draft and scoreboard overlay routes for OBS Browser Source.','Persistent match state, backups, theme configuration, and optional operator-token protection.'],
    engineering:'The draft engine is kept independent from the UI as state-transition functions; the server owns shared state and broadcasts changes to clients.',
    github:'https://github.com/Abhiprayaa29/mlbb-draft-studio', visual:'image', image:'https://raw.githubusercontent.com/Abhiprayaa29/mlbb-draft-studio/main/public/assets/heroes/aamon-splash.jpg', alt:'Repository visual from MLBB Draft Studio'
  },
  spada: {
    eyebrow:'FEATURED · AUTOMATION', title:'SPADA Telegram Bot',
    problem:'Course data, deadlines, attendance, assignments, and grades are spread across an LMS workflow that is repetitive to check manually.',
    contribution:'The repository combines a Telegram bot, LMS scraper, tracker, and read-only FastAPI dashboard around shared local state.',
    features:['SPADA login and semester detection with stored session data.','Deadline reminders at 24 hours, 1 hour, and 15 minutes before due time.','Scheduled attendance flow with screenshot proof sent back to Telegram.','FastAPI dashboard with QR pairing, session cookies, schedule, tasks, grades, and attendance views.'],
    engineering:'This project connects external web automation, local state, Telegram messaging, scheduled checks, and a separate web interface without exposing session secrets to the frontend.',
    github:'https://github.com/Abhiprayaa29/bot_spada', visual:'automation'
  },
  jogjalensa: {
    eyebrow:'FEATURED · FULL-STACK WEB', title:'JogjaLensa',
    problem:'People looking for photographers need an easier way to compare services, prices, portfolios, and booking information in one place.',
    contribution:'The repository implements the PHP application structure covering landing page, authentication, client and vendor dashboards, booking, payment proof, reviews, and vendor profile management.',
    features:['Vendor search with category/location filters and price sorting.','Client dashboard with booking status and invoice flow.','Vendor dashboard with package CRUD, portfolio gallery, and order management.','Database-backed statistics and review/rating flow.'],
    engineering:'This project demonstrates end-to-end web application thinking: UI composition, request handling, role-specific workflows, file uploads, and relational data access.',
    github:'https://github.com/Abhiprayaa29/ProjectPemogramanWeb-Abdillah-Abhi', visual:'image', image:'https://raw.githubusercontent.com/Abhiprayaa29/ProjectPemogramanWeb-Abdillah-Abhi/main/assets/image/malioboro.jpg', alt:'Yogyakarta visual asset from JogjaLensa'
  },
  ar: {
    eyebrow:'EXPERIMENTAL · INTERACTIVE SYSTEM', title:'SimpleARPlacement',
    problem:'Users need a direct mobile interaction model for placing a 3D object onto a detected real-world surface.',
    contribution:'The repository implements placement logic that raycasts onto detected planes, manages an optional AR anchor, and exposes UI actions for rotation, scaling, and reset.',
    features:['Tap-to-place using AR raycasting against detected plane geometry.','Anchor attachment to keep the placed object aligned with the detected surface when possible.','Rotation and scale controls with guarded limits and placement cooldown.','UI state refresh and pointer-over-UI protection for touch interactions.'],
    engineering:'The project separates placement logic from UI controls and uses Unity Input System + AR Foundation APIs rather than a single monolithic interaction script.',
    github:'https://github.com/Abhiprayaa29/simple-ar-placement', visual:'image', image:'https://raw.githubusercontent.com/Abhiprayaa29/simple-ar-placement/main/Docs/SimpleARPlacement/Screenshots/05_template_ui.png', alt:'SimpleARPlacement interface screenshot'
  },
  cerberus: {
    eyebrow:'ADVANCED · AI ORCHESTRATION', title:'Cerberus',
    problem:'Complex security testing benefits from decomposition: planning, research, execution, verification, and reporting should not all be handled as one undifferentiated agent task.',
    contribution:'The repository defines Cerberus as an orchestrator that routes work to specialized agents and structured security playbooks for authorized testing.',
    features:['Intent-based routing for research, implementation, investigation, and fix tasks.','Specialized agent roles such as Scout, Intel, Sentinel, Talos, and Cerberus-Junior.','Parallel background tasks and category-based model routing.','Explicit scope and safety boundaries for authorized security testing.'],
    engineering:'The strongest signal is orchestration design: decomposing a large problem into bounded specialist responsibilities, then verifying the resulting work before it moves forward.',
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
  menuBtn.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
  mobileNav.hidden = open;
  menuBtn.textContent = open ? '☰' : '×';
});
$$('#mobileNav a').forEach(a => a.addEventListener('click', () => {
  menuBtn.setAttribute('aria-expanded','false');
  menuBtn.setAttribute('aria-label','Open navigation');
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
    dialogVisual.innerHTML = '<div class="mini-head"><span>automation.pipeline</span><span class="live">running</span></div><div class="pipeline"><div><b>01</b><strong>SPADA</strong><span>session authenticated</span></div><div><b>02</b><strong>SCRAPER</strong><span>deadline + attendance data</span></div><div><b>03</b><strong>TRACKER</strong><span>local state synchronized</span></div><div><b>04</b><strong>TELEGRAM</strong><span>scheduled notification</span></div></div>';
  } else {
    dialogVisual.className = 'dialog-visual code orchestration';
    dialogVisual.innerHTML = '<div class="mini-head"><span>orchestration.graph</span><span class="live">bounded</span></div><div class="graph"><div class="node main">CERBERUS</div><div class="node n1">Scout</div><div class="node n2">Intel</div><div class="node n3">Sentinel</div><div class="node n4">Talos</div><svg viewBox="0 0 500 160" preserveAspectRatio="none" aria-hidden="true"><path d="M80 26 L215 74 M420 28 L286 74 M105 136 L220 86 M395 134 L282 86"/></svg></div>';
  }
};
$$('.case-button').forEach(button => button.addEventListener('click', () => {
  const p = data[button.dataset.project];
  if (!p) return;
  $('#dialogEyebrow').textContent = p.eyebrow;
  $('#dialogTitle').textContent = p.title;
  $('#dialogProblem').textContent = p.problem;
  $('#dialogContribution').textContent = p.contribution;
  $('#dialogEngineering').textContent = p.engineering;
  const list = $('#dialogFeatures'); list.innerHTML = '';
  p.features.forEach(f => { const li = document.createElement('li'); li.textContent = f; list.appendChild(li); });
  $('#dialogGithub').href = p.github;
  setDialogVisual(p);
  dialog.showModal();
}));
$('#dialogClose').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });

const copyBtn = $('#copyEmail');
copyBtn?.addEventListener('click', async () => {
  const email = 'abdillahabhi12@gmail.com';
  try { await navigator.clipboard.writeText(email); $('#copyLabel').textContent = 'Email copied'; $('#copyIcon').textContent = '✓'; setTimeout(() => { $('#copyLabel').textContent='Copy email'; $('#copyIcon').textContent='⧉'; }, 1500); }
  catch { window.location.href = `mailto:${email}`; }
});
