import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  Copy,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Menu,
  MonitorCog,
  MoveUpRight,
  X,
} from 'lucide-react'

const GITHUB = 'https://github.com/Abhiprayaa29'
const EMAIL = 'abdillahabhi12@gmail.com'
const CV = '/cv/Abdillah-Abhi-CV.pdf'

const projects = [
  {
    id: 'mlbb',
    eyebrow: 'FEATURED · REAL-TIME WEB SYSTEM',
    title: 'MLBB Draft Studio',
    blurb: 'Operator control panel and real-time broadcast overlays for draft pick and scoreboard workflows.',
    stack: ['React 18', 'Vite', 'Tailwind CSS v4', 'Framer Motion', 'Express', 'Socket.IO'],
    proof: 'State engine + Socket.IO + JSON persistence',
    image: 'https://raw.githubusercontent.com/Abhiprayaa29/mlbb-draft-studio/main/public/assets/heroes/aamon-splash.jpg',
    imageAlt: 'Repository asset from MLBB Draft Studio used as contextual visual.',
    visual: 'image',
    details: {
      problem: 'Tournament operators need one source of truth for draft actions, timers, team configuration, match state, and broadcast-ready overlays.',
      contribution: 'Implemented a separated server-side state model and UI flow in the repository, with the UI consuming the authoritative state over Socket.IO.',
      features: [
        'Draft engine with ordered pick/ban actions, duplicate prevention, undo, lock, reset, and presets.',
        'Server-authoritative countdown synchronized across operator and overlay clients.',
        'Transparent draft and scoreboard overlay routes for OBS Browser Source.',
        'Persistent match state, backups, theme configuration, and optional operator token protection.',
      ],
      engineering: 'The draft engine is kept independent from the UI as pure state-transition functions; the server owns shared state and broadcasts changes to clients.',
    },
    github: `${GITHUB}/mlbb-draft-studio`,
  },
  {
    id: 'spada',
    eyebrow: 'FEATURED · AUTOMATION',
    title: 'SPADA Telegram Bot',
    blurb: 'A Telegram bot plus web dashboard that automates repetitive academic workflows around SPADA WIMAYA.',
    stack: ['Python', 'Telegram Bot', 'FastAPI', 'BeautifulSoup', 'QR Pairing'],
    proof: 'Scraper + scheduler + dashboard + local tracker',
    visual: 'automation',
    details: {
      problem: 'Course data, deadlines, attendance, assignments, and grades are spread across an LMS workflow that is repetitive to check manually.',
      contribution: 'Built the repository around a Telegram bot, LMS scraper, tracker, and read-only dashboard that share local state.',
      features: [
        'SPADA login and semester detection with stored session data.',
        'Deadline reminders at 24 hours, 1 hour, and 15 minutes before due time.',
        'Scheduled attendance flow with screenshot proof sent back to Telegram.',
        'FastAPI dashboard with QR pairing, session cookies, schedule, tasks, grades, and attendance views.',
      ],
      engineering: 'The project connects external web automation, local state, Telegram messaging, scheduled checks, and a separate web interface without exposing session secrets to the frontend.',
    },
    github: `${GITHUB}/bot_spada`,
  },
  {
    id: 'jogjalensa',
    eyebrow: 'FEATURED · FULL-STACK WEB',
    title: 'JogjaLensa',
    blurb: 'A photography marketplace concept for Yogyakarta covering discovery, booking, payment proof, vendor management, and reviews.',
    stack: ['PHP 8', 'Bootstrap 5.3', 'MySQL / MariaDB', 'Apache'],
    proof: 'Client + vendor workflow in one PHP application',
    image: 'https://raw.githubusercontent.com/Abhiprayaa29/ProjectPemogramanWeb-Abdillah-Abhi/main/assets/image/malioboro.jpg',
    imageAlt: 'Yogyakarta visual asset used by the JogjaLensa project.',
    visual: 'image',
    details: {
      problem: 'People looking for photographers need an easier way to compare services, prices, portfolios, and booking information in one place.',
      contribution: 'Implemented the PHP application structure covering landing page, authentication, client and vendor dashboards, booking, payment proof, reviews, and vendor profile management.',
      features: [
        'Vendor search with category/location filters and price sorting.',
        'Client dashboard with booking status and invoice flow.',
        'Vendor dashboard with package CRUD, portfolio gallery, and order management.',
        'Database-backed statistics and review/rating flow.',
      ],
      engineering: 'This project demonstrates end-to-end web application thinking: UI composition, request handling, role-specific workflows, file uploads, and relational data access.',
    },
    github: `${GITHUB}/ProjectPemogramanWeb-Abdillah-Abhi`,
  },
  {
    id: 'ar',
    eyebrow: 'EXPERIMENTAL · INTERACTIVE SYSTEM',
    title: 'SimpleARPlacement',
    blurb: 'An Android AR experience for detecting surfaces and placing, moving, rotating, scaling, and resetting a 3D object.',
    stack: ['Unity', 'AR Foundation 6.5', 'ARCore 6.5', 'C#', 'URP'],
    proof: 'Raycast + anchors + touch interaction',
    image: 'https://raw.githubusercontent.com/Abhiprayaa29/simple-ar-placement/main/Docs/SimpleARPlacement/Screenshots/05_template_ui.png',
    imageAlt: 'SimpleARPlacement interface screenshot from the repository documentation.',
    visual: 'image',
    details: {
      problem: 'Users need a direct mobile interaction model for placing a 3D object onto a detected real-world surface.',
      contribution: 'Implemented placement logic that raycasts onto detected planes, manages an optional AR anchor, and exposes UI actions for rotation, scaling, and reset.',
      features: [
        'Tap-to-place using AR raycasting against detected plane geometry.',
        'Anchor attachment to keep the placed object aligned with the detected surface when possible.',
        'Rotation and scale controls with guarded limits and placement cooldown.',
        'UI state refresh and pointer-over-UI protection for touch interactions.',
      ],
      engineering: 'The project separates placement logic from UI controls and uses Unity Input System + AR Foundation APIs rather than a single monolithic interaction script.',
    },
    github: `${GITHUB}/simple-ar-placement`,
  },
  {
    id: 'cerberus',
    eyebrow: 'ADVANCED · AI ORCHESTRATION',
    title: 'Cerberus',
    blurb: 'A multi-agent orchestration layer for authorized penetration-testing workflows, built around OpenCode.',
    stack: ['Bun', 'TypeScript', 'OpenCode', 'Multi-Agent', 'Tool Routing'],
    proof: 'Intent routing + specialist agents + verification',
    visual: 'orchestration',
    details: {
      problem: 'Complex security testing benefits from decomposition: planning, research, execution, verification, and reporting should not all be handled as one undifferentiated agent task.',
      contribution: 'The repository defines Cerberus as an orchestrator that routes work to specialized agents and structured security playbooks.',
      features: [
        'Intent-based routing for research, implementation, investigation, and fix tasks.',
        'Specialized agent roles such as Scout, Intel, Sentinel, Talos, and Cerberus-Junior.',
        'Parallel background tasks and category-based model routing.',
        'Explicit scope and safety boundaries for authorized security testing.',
      ],
      engineering: 'The strongest signal here is orchestration design: breaking a large problem into bounded specialist responsibilities, then verifying the resulting work before it moves forward.',
    },
    github: `${GITHUB}/Cerberus`,
  },
]

const experience = [
  { period: 'Aug 2026 — Now', title: 'Koordinator PDD', org: 'Serasehan Jurusan Informatika · Himpunan Mahasiswa Informatika, UPN “Veteran” Yogyakarta', note: 'Memimpin tim dokumentasi dan publikasi visual untuk event yang sedang berlangsung.' },
  { period: 'May 2026 — Now', title: 'Asisten Dosen', org: 'Riset Pengembangan Aplikasi Manajemen Keuangan · UPN “Veteran” Yogyakarta', note: 'Analisis kebutuhan, evaluasi arsitektur perangkat lunak, serta wireframe dan prototype UI/UX dengan Figma.' },
  { period: 'Sep 2025 — Now', title: 'Wakil Kepala Departemen Media & Informasi', org: 'Badan Keluarga Mahasiswa Kebumen (KBMK)', note: 'Koordinasi tim Medinfo, strategi konten, kalender editorial, dan pengawasan aset visual lintas platform.' },
  { period: 'Oct 2025 — Jan 2026', title: 'Koordinator PDD', org: 'Kebumen Campus Festival 2026', note: 'Memimpin 9 anggota dan membagi pipeline fotografi, videografi, desain grafis, serta copywriting.' },
  { period: 'Oct 2025 — Jan 2026', title: 'Koordinator PDD', org: 'SMANSAKU Campus Expo', note: 'Memimpin 4 anggota untuk strategi publikasi visual end-to-end dan produksi konten multi-platform.' },
]

const skills = [
  { title: 'Languages', items: ['C++', 'Python', 'PHP', 'Java', 'JavaScript'] },
  { title: 'Web & Application', items: ['HTML', 'CSS', 'Bootstrap', 'React', 'Vite', 'Tailwind CSS', 'Express', 'FastAPI', 'Socket.IO'] },
  { title: 'Interactive & Creative', items: ['Unity 3D', 'AR Foundation', 'ARCore', 'Blender 3D', 'SketchUp', 'Figma', 'Adobe Photoshop', 'Adobe After Effects', 'Canva'] },
]

function SectionHeading({ kicker, title, copy }) {
  return (
    <div className="grid gap-5 md:grid-cols-[0.34fr_1fr] md:items-end">
      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d7a441]">{kicker}</div>
      <div>
        <h2 className="display text-4xl font-semibold leading-[.96] sm:text-5xl">{title}</h2>
        {copy && <p className="mt-4 max-w-2xl text-sm leading-7 text-[#a7a195]">{copy}</p>}
      </div>
    </div>
  )
}

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { el.classList.add('is-visible'); return undefined }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('is-visible')
        observer.disconnect()
      }
    }, { threshold: 0.12 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

function ProjectVisual({ project }) {
  if (project.visual === 'image') {
    return (
      <div className="relative h-64 overflow-hidden border-b border-[#2c2a25] bg-[#0f0f0e] sm:h-72">
        <img src={project.image} alt={project.imageAlt} className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.03]" loading="lazy" />
        <div className="project-image-fade absolute inset-0" />
        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-white/90"><CircleDot size={13} className="text-[#d7a441]" /> repository visual</div>
          <ArrowUpRight size={18} className="text-white/75" />
        </div>
      </div>
    )
  }
  if (project.visual === 'automation') {
    return (
      <div className="code-sheen relative h-64 overflow-hidden border-b border-[#2c2a25] bg-[#10100f] p-5 sm:h-72 scanline">
        <div className="mb-5 flex items-center justify-between border-b border-[#282720] pb-3 text-[10px] uppercase tracking-[0.2em] text-[#8f897e]"><span>automation.pipeline</span><span className="text-[#9ac48a]">running</span></div>
        <div className="grid gap-3 text-xs font-mono text-[#bbb4a7]">
          {[
            ['01', 'SPADA', 'session authenticated'],
            ['02', 'SCRAPER', 'deadline + attendance data'],
            ['03', 'TRACKER', 'local state synchronized'],
            ['04', 'TELEGRAM', 'scheduled notification'],
          ].map(([n, a, b]) => (
            <div key={n} className="grid grid-cols-[24px_92px_1fr] gap-2 rounded-md border border-[#27251f] bg-black/15 px-3 py-3">
              <span className="text-[#d7a441]">{n}</span><span>{a}</span><span className="text-[#888175]">{b}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return (
    <div className="code-sheen relative h-64 overflow-hidden border-b border-[#2c2a25] bg-[#10100f] p-5 sm:h-72 scanline">
      <div className="flex items-center gap-2 border-b border-[#282720] pb-3 text-[10px] uppercase tracking-[0.2em] text-[#8f897e]"><span className="h-2 w-2 rounded-full bg-[#d7a441]" /> orchestration.graph</div>
      <div className="relative mt-5 h-40 font-mono text-[11px] text-[#b8b1a4]">
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-lg border border-[#4a3a1d] bg-[#1a1711] px-4 py-3 text-[#efcf8d]"><Layers3 size={16} /> CERBERUS</div>
        <div className="absolute left-[6%] top-[8%] rounded-md border border-[#2c2a25] bg-black/25 px-3 py-2">Scout</div>
        <div className="absolute right-[5%] top-[10%] rounded-md border border-[#2c2a25] bg-black/25 px-3 py-2">Intel</div>
        <div className="absolute left-[11%] bottom-[4%] rounded-md border border-[#2c2a25] bg-black/25 px-3 py-2">Sentinel</div>
        <div className="absolute right-[9%] bottom-[5%] rounded-md border border-[#2c2a25] bg-black/25 px-3 py-2">Talos</div>
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-40" viewBox="0 0 500 160" preserveAspectRatio="none">
          <path d="M80 26 L215 74 M420 28 L286 74 M105 136 L220 86 M395 134 L282 86" stroke="#d7a441" strokeWidth="1" fill="none" strokeDasharray="4 4" />
        </svg>
      </div>
    </div>
  )
}

function ProjectCard({ project, onOpen, featured = false }) {
  return (
    <article className={`project-card group overflow-hidden border border-[#2c2a25] bg-[#121211] ${featured ? 'md:col-span-1' : ''}`}>
      <ProjectVisual project={project} />
      <div className="p-5 sm:p-6">
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d7a441]">{project.eyebrow}</div>
        <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[#a7a195]">{project.blurb}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => <span key={item} className="pill px-2.5 py-1 text-[11px] text-[#c6c0b5]">{item}</span>)}
        </div>
        <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#2c2a25] pt-4">
          <span className="text-[11px] text-[#7f7a70]">{project.proof}</span>
          <button onClick={() => onOpen(project)} className="inline-flex items-center gap-2 text-xs font-semibold text-[#efcf8d] hover:text-white" type="button">
            Case study <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </article>
  )
}

function ProjectDialog({ project, onClose }) {
  const ref = useRef(null)
  useEffect(() => {
    if (!project) return undefined
    const el = ref.current
    if (!el) return undefined
    el.showModal()
    return () => { if (el.open) el.close() }
  }, [project])
  if (!project) return null
  return (
    <dialog ref={ref} className="dialog-backdrop w-[min(940px,calc(100vw-24px))] border border-[#3a352c] bg-[#11110f] p-0 text-white shadow-2xl shadow-black/50" onClose={onClose}>
      <div className="max-h-[88vh] overflow-y-auto">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#2c2a25] bg-[#11110f]/95 px-5 py-4 backdrop-blur sm:px-7">
          <div><div className="text-[10px] uppercase tracking-[0.2em] text-[#d7a441]">{project.eyebrow}</div><div className="mt-1 font-semibold">{project.title}</div></div>
          <button type="button" onClick={() => ref.current?.close()} className="rounded-md p-2 text-[#a7a195] hover:bg-white/5 hover:text-white" aria-label="Tutup detail proyek"><X size={19} /></button>
        </div>
        <div className="grid gap-8 p-5 sm:p-7 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            {project.visual === 'image' ? (
              <img src={project.image} alt={project.imageAlt} className="h-64 w-full object-cover" />
            ) : <ProjectVisual project={project} />}
            <div className="mt-4 flex flex-wrap gap-2">{project.stack.map(item => <span key={item} className="pill px-2.5 py-1 text-[11px] text-[#c6c0b5]">{item}</span>)}</div>
            <a href={project.github} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 border-b border-[#d7a441] pb-1 text-xs font-semibold text-[#efcf8d] hover:text-white">
              Open repository <ExternalLink size={14} />
            </a>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#777269]">Problem</div>
            <p className="mt-2 text-sm leading-7 text-[#d0c9bd]">{project.details.problem}</p>
            <div className="mt-7 text-[10px] uppercase tracking-[0.2em] text-[#777269]">Contribution</div>
            <p className="mt-2 text-sm leading-7 text-[#d0c9bd]">{project.details.contribution}</p>
            <div className="mt-7 text-[10px] uppercase tracking-[0.2em] text-[#777269]">Implemented highlights</div>
            <ul className="mt-3 grid gap-3">
              {project.details.features.map(f => <li key={f} className="flex gap-3 text-sm leading-6 text-[#d0c9bd]"><Check size={16} className="mt-1 shrink-0 text-[#d7a441]" />{f}</li>)}
            </ul>
            <div className="mt-7 text-[10px] uppercase tracking-[0.2em] text-[#777269]">Engineering signal</div>
            <p className="mt-2 text-sm leading-7 text-[#d0c9bd]">{project.details.engineering}</p>
          </div>
        </div>
      </div>
    </dialog>
  )
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [copied, setCopied] = useState(false)

  const nav = useMemo(() => [
    ['about', 'About'], ['projects', 'Projects'], ['experience', 'Experience'], ['skills', 'Skills'], ['contact', 'Contact'],
  ], [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <div className="relative isolate overflow-hidden">
      <div className="grain pointer-events-none fixed inset-0 z-50 opacity-20" aria-hidden="true" />
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[#211f1b] bg-[#0b0b0a]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-7 lg:px-10">
          <a href="#home" className="inline-flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            <span className="grid h-8 w-8 place-items-center rounded-md border border-[#4a3a1d] bg-[#15130f] text-xs font-semibold text-[#d7a441]">AA</span>
            <span className="hidden text-sm font-semibold sm:inline">Abdillah Abhi</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {nav.map(([id, label]) => <a key={id} href={`#${id}`} className="text-xs text-[#9d978c] transition hover:text-white">{label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href={CV} download className="hidden items-center gap-2 border border-[#3a352c] px-3 py-2 text-xs font-semibold text-[#efe8dc] hover:border-[#d7a441] sm:inline-flex"><Download size={14} /> CV</a>
            <button type="button" onClick={() => setMobileOpen(v => !v)} aria-expanded={mobileOpen} aria-controls="mobile-nav" className="grid h-9 w-9 place-items-center border border-[#2c2a25] text-[#d8d1c5] md:hidden" aria-label="Buka menu">
              {mobileOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>
        {mobileOpen && <div id="mobile-nav" className="border-t border-[#211f1b] bg-[#0b0b0a] px-5 py-4 md:hidden"><div className="grid gap-2">{nav.map(([id,label]) => <a key={id} href={`#${id}`} onClick={() => setMobileOpen(false)} className="border border-[#25231f] px-3 py-3 text-sm text-[#c7c0b5]">{label}</a>)}<a href={CV} download className="inline-flex items-center justify-center gap-2 border border-[#4a3a1d] px-3 py-3 text-sm font-semibold text-[#efcf8d]">Download CV <Download size={15}/></a></div></div>}
      </header>

      <main id="home" className="pt-16">
        <section className="mx-auto grid min-h-[calc(100vh-64px)] max-w-6xl items-center gap-10 px-5 py-16 sm:px-7 sm:py-20 lg:grid-cols-[1.15fr_.85fr] lg:px-10 lg:py-24">
          <Reveal>
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d7a441]"><span className="h-px w-10 bg-[#d7a441]/70"/>Software Developer · Informatics Engineering Student</div>
              <h1 className="display text-balance text-6xl font-semibold leading-[.9] sm:text-7xl lg:text-[7.2rem]">Build useful software.<br/><span className="text-[#d7a441]">Make it real.</span></h1>
              <p className="mt-8 max-w-xl text-base leading-7 text-[#b3ada2] sm:text-lg">Saya Abdillah Abhi, mahasiswa Teknik Informatika yang membangun solusi digital praktis melalui web, automation, real-time systems, dan interactive technology.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 bg-[#d7a441] px-5 py-3 text-sm font-semibold text-[#11110f] hover:bg-[#efcf8d]">Explore projects <ArrowDownRight size={17}/></a>
                <a href={CV} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-[#3a352c] px-5 py-3 text-sm font-semibold text-[#ebe5da] hover:border-[#d7a441]">View CV <ExternalLink size={16}/></a>
                <a href={GITHUB} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-[#3a352c] px-4 py-3 text-sm text-[#c9c1b6] hover:border-[#d7a441] hover:text-white"><Github size={16}/> GitHub</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:justify-self-end">
            <div className="relative max-w-md lg:max-w-sm">
              <div className="absolute -inset-5 border border-[#241f17]" aria-hidden="true"/>
              <div className="relative overflow-hidden border border-[#3a352c] bg-[#11110f] p-5 sm:p-7">
                <div className="flex items-center justify-between border-b border-[#2a2822] pb-4 text-[10px] uppercase tracking-[0.2em] text-[#7d786f]"><span>developer.index</span><span className="text-[#9ac48a]">verified scope</span></div>
                <div className="py-7 font-mono text-xs leading-7 text-[#b5afa5]">
                  <div><span className="text-[#d7a441]">const</span> identity = <span className="text-[#efcf8d]">“Abdillah Abhi”</span></div>
                  <div><span className="text-[#d7a441]">const</span> focus = [</div>
                  <div className="pl-5">“software”, “web”,</div>
                  <div className="pl-5">“automation”, “systems”</div>
                  <div>]</div>
                  <div className="mt-4"><span className="text-[#d7a441]">return</span> build(focus)</div>
                </div>
                <div className="grid grid-cols-2 gap-2 border-t border-[#2a2822] pt-4">
                  {[['Web', 'PHP · React'], ['Automation', 'Python'], ['Realtime', 'Socket.IO'], ['3D / AR', 'Unity']].map(([a,b]) => <div key={a} className="border border-[#25231f] p-3"><div className="text-[10px] uppercase tracking-[.16em] text-[#746f66]">{a}</div><div className="mt-1 text-xs text-[#ded7cb]">{b}</div></div>)}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="about" className="border-t border-[#211f1b]">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-7 sm:py-24 lg:px-10">
            <Reveal><SectionHeading kicker="01 · About" title="A developer with range — grounded in building." copy="Latar saya menggabungkan Teknik Informatika dengan pengalaman organisasi kreatif. Itu membuat saya terbiasa berpindah dari requirement, logic, dan architecture ke interface serta execution."/></Reveal>
            <div className="mt-14 grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
              <Reveal><div className="border-l border-[#d7a441] pl-5 text-2xl leading-8 text-[#ece7dc] sm:text-3xl">“Saya belajar paling cepat ketika ide harus berubah menjadi sesuatu yang benar-benar bisa dijalankan.”</div></Reveal>
              <Reveal delay={100}><div className="grid gap-4 text-sm leading-7 text-[#a7a195]"><p>Saat ini saya menempuh S1 Teknik Informatika di UPN “Veteran” Yogyakarta. Di repositori saya, fokus teknisnya terlihat lintas domain: aplikasi web, bot dan scraping, real-time interface, augmented reality, serta orkestrasi AI.</p><p>Di luar coding, saya memimpin dan mengoordinasikan tim PDD/Medinfo dalam beberapa event. Pengalaman tersebut memperkuat kemampuan memecah pekerjaan, menjaga kualitas, berkomunikasi, dan bekerja dengan deadline.</p><div className="grid gap-3 sm:grid-cols-3"><div className="border border-[#2c2a25] p-4"><GraduationCap size={18} className="text-[#d7a441]"/><div className="mt-4 text-[10px] uppercase tracking-[.18em] text-[#777269]">Education</div><div className="mt-1 text-sm text-white">S1 Teknik Informatika</div></div><div className="border border-[#2c2a25] p-4"><BriefcaseBusiness size={18} className="text-[#d7a441]"/><div className="mt-4 text-[10px] uppercase tracking-[.18em] text-[#777269]">Leadership</div><div className="mt-1 text-sm text-white">PDD / Medinfo</div></div><div className="border border-[#2c2a25] p-4"><Code2 size={18} className="text-[#d7a441]"/><div className="mt-4 text-[10px] uppercase tracking-[.18em] text-[#777269]">Build mode</div><div className="mt-1 text-sm text-white">Hands-on</div></div></div></div></Reveal>
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-[#211f1b]">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-7 sm:py-24 lg:px-10">
            <Reveal><SectionHeading kicker="02 · Selected Projects" title="Proof over buzzwords." copy="Lima project berikut dipilih karena paling jelas menunjukkan problem solving, system thinking, implementation depth, dan kemampuan menghubungkan beberapa layer teknis."/></Reveal>
            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              {projects.map((project, i) => <Reveal key={project.id} delay={(i % 2) * 80}><ProjectCard project={project} onOpen={setActiveProject} /></Reveal>)}
            </div>
          </div>
        </section>

        <section id="experience" className="border-t border-[#211f1b]">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-7 sm:py-24 lg:px-10">
            <Reveal><SectionHeading kicker="03 · Experience" title="Ownership shows up in the work." copy="Pengalaman di bawah mengikuti kategori CV: organisasi, riset/asistensi dosen, serta leadership event — tanpa mengubahnya menjadi klaim professional employment yang tidak tercantum."/></Reveal>
            <div className="mt-14 divide-y divide-[#2c2a25] border-y border-[#2c2a25]">
              {experience.map((item, i) => <Reveal key={`${item.title}-${item.period}`} delay={i*40}><div className="grid gap-3 py-6 md:grid-cols-[170px_1fr_auto] md:items-start md:gap-8"><div className="text-xs text-[#7f7a70]">{item.period}</div><div><div className="text-lg font-semibold text-white">{item.title}</div><div className="mt-1 text-sm text-[#d7a441]">{item.org}</div><p className="mt-2 max-w-2xl text-sm leading-6 text-[#a7a195]">{item.note}</p></div><MoveUpRight size={17} className="hidden text-[#69645b] md:block"/></div></Reveal>)}
            </div>
            <Reveal delay={100}><div className="mt-10 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center border border-[#3a352c] bg-[#121211] p-6 sm:p-7"><div><div className="text-[10px] uppercase tracking-[0.2em] text-[#d7a441]">Achievement</div><div className="mt-2 text-xl font-semibold">Finalist & Best Video Awardee — Find IT! UGM 2026</div><p className="mt-2 max-w-2xl text-sm leading-6 text-[#a7a195]">Penghargaan pada kompetisi UX Design tingkat nasional, sebagaimana tercantum di CV.</p></div><div className="hidden border-l border-[#2c2a25] pl-6 text-xs text-[#817b72] lg:block">May 2026<br/>KMTETI · FT UGM</div></div></Reveal>
          </div>
        </section>

        <section id="skills" className="border-t border-[#211f1b]">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-7 sm:py-24 lg:px-10">
            <Reveal><SectionHeading kicker="04 · Skills" title="A stack mapped to real work." copy="Tidak ada progress bar atau angka proficiency. Teknologi di sini diturunkan dari CV dan evidence di repository."/></Reveal>
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {skills.map((group, i) => <Reveal key={group.title} delay={i*80}><div className="border border-[#2c2a25] p-5 sm:p-6"><div className="text-[10px] uppercase tracking-[0.2em] text-[#d7a441]">{group.title}</div><div className="mt-5 flex flex-wrap gap-2">{group.items.map(item => <span key={item} className="border border-[#312f29] bg-white/[.02] px-3 py-2 text-xs text-[#d4cdc1]">{item}</span>)}</div></div></Reveal>)}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-[#211f1b]">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-7 sm:py-24 lg:px-10">
            <Reveal>
              <div className="grid gap-8 border border-[#3a352c] bg-[#121211] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div><div className="text-[10px] uppercase tracking-[0.22em] text-[#d7a441]">05 · Contact</div><h2 className="display mt-3 max-w-2xl text-4xl font-semibold leading-[.98] sm:text-6xl">Let’s build something worth putting in production.</h2><p className="mt-5 max-w-xl text-sm leading-7 text-[#a7a195]">Terbuka untuk kesempatan software development, web projects, collaboration, dan technical opportunities yang sejalan.</p></div>
                <div className="flex flex-col gap-2 sm:flex-row lg:flex-col"><a href={`mailto:${EMAIL}`} className="inline-flex items-center justify-between gap-4 border border-[#2f2d27] px-4 py-3 text-sm text-[#e3dccf] hover:border-[#d7a441]"><span>{EMAIL}</span><ArrowUpRight size={16}/></a><button type="button" onClick={copyEmail} className="inline-flex items-center justify-between gap-4 border border-[#2f2d27] px-4 py-3 text-sm text-[#e3dccf] hover:border-[#d7a441]"><span>{copied ? 'Email copied' : 'Copy email'}</span>{copied ? <Check size={16}/> : <Copy size={16}/>}</button><a href={GITHUB} target="_blank" rel="noreferrer" className="inline-flex items-center justify-between gap-4 border border-[#2f2d27] px-4 py-3 text-sm text-[#e3dccf] hover:border-[#d7a441]"><span>github.com/Abhiprayaa29</span><Github size={16}/></a></div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#211f1b]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-xs text-[#7f7a70] sm:flex-row sm:items-center sm:justify-between sm:px-7 lg:px-10">
          <div>© {new Date().getFullYear()} Abdillah Abhi. Built with React + Vite.</div>
          <div className="flex items-center gap-5"><a href="#home" className="hover:text-white">Back to top</a><a href={CV} download className="hover:text-white">Download CV</a><a href={GITHUB} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a></div>
        </div>
      </footer>

      <ProjectDialog project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  )
}

export default App
