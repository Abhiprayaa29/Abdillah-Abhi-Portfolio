/**
 * ABHIPRAYA — DESIGNER × CODER & DIGITAL GARDEN
 * Art Direction: Adham Dannaway × Tania Rascia
 * Production Vanilla JavaScript Engine (Zero external dependencies)
 */

'use strict';

// =============================================================================
// 1. VERIFIED PORTFOLIO DATA ARCHITECTURE
// =============================================================================

const projectsData = {
  "ipguard": {
    "title": "IPGuard — Secure Digital Asset Protection Platform",
    "discipline": "combined",
    "role": "Lead Architect & Full-Stack Developer",
    "status": "Verified & Frozen (M0–M4)",
    "problem": "Traditional cloud storage exposes high-value intellectual property (CAD files, source code, media) to server compromise, phishing attacks on 2FA credentials, and trivial watermark removal.",
    "contribution": "Architected the end-to-end platform: React 19 frontend, asynchronous FastAPI backend, PostgreSQL schema, Android Keystore mobile authenticator, authenticated file vault with XChaCha20-Poly1305, and LSB cryptographic steganography with Ed25519 signatures.",
    "challenge": "Eliminating shared secrets while guaranteeing zero-knowledge file encryption and verifiable tamper detection on PNG master files. Solved by decoupling key storage into hardware TEE/StrongBox silicon and binding file transactions to an immutable audit hash chain.",
    "engineering": "209/209 backend Pytest assertions passing (100%), Playwright browser E2E test suites verified, HKDF-SHA256 session key derivation, 24-byte CSPRNG nonces, and zero-password biometric QR challenges.",
    "design": "Engineered high-density administrative console, responsive security status indicators, visual QR authentication modals, and comprehensive asset inspector with cryptographic verification cards.",
    "result": "Production-ready, frozen reference implementation with zero-password hardware authentication and mathematically verifiable asset attribution.",
    "stack": ["React 19", "FastAPI", "PostgreSQL", "Android Keystore", "XChaCha20", "Ed25519", "Docker"],
    "github": "https://github.com/Abhiprayaa29/IPGuard",
    "image": "assets/projects/ipguard/ipguard-vault.png",
    "gallery": [
      { "src": "assets/projects/ipguard/ipguard-vault.png", "alt": "IPGuard encrypted asset vault console showing active files and cryptographic status" },
      { "src": "assets/projects/ipguard/ipguard-verify-modal.png", "alt": "IPGuard cryptographic verification modal validating Ed25519 signature" },
      { "src": "assets/projects/ipguard/ipguard-auth-request.png", "alt": "IPGuard Android mobile authenticator showing biometric challenge prompt" }
    ]
  },
  "mlbb": {
    "title": "MLBB Draft Studio — Broadcast Overlays & Operator Panel",
    "discipline": "combined",
    "role": "Full-Stack Developer & UI Designer",
    "status": "Production-ready LAN tournament tool",
    "problem": "Esports tournament operators lack a single source of truth for match state, draft timers, hero pick/ban sequences, and multi-screen transparent broadcast overlays.",
    "contribution": "Engineered server-authoritative draft engine, dual-workstation operator control panel, and three transparent 1920×1080 OBS broadcast overlays synchronized in real time.",
    "challenge": "Ensuring sub-16ms live synchronization across multiple OBS workstations with zero reload flashes and crash-proof atomic state recovery.",
    "engineering": "166 backend assertions passed, 121 E2E assertions passed, 133 heroes validated with zero schema errors. Atomic POSIX file swaps prevent match rollback.",
    "design": "Designed professional esports dark broadcast aesthetic, high-contrast tournament typography, timer meters, and operator interface with instant keyboard shortcuts.",
    "result": "Deployed for competitive LAN tournament production with zero-latency synchronization between operators and live broadcast feeds.",
    "stack": ["Node.js", "Express", "Socket.IO", "OBS Studio", "TailwindCSS", "JavaScript"],
    "github": "https://github.com/Abhiprayaa29/MLBB-Draft-Studio",
    "image": "assets/mlbb-draft-studio-aamon.png",
    "gallery": [
      { "src": "assets/mlbb-draft-studio-aamon.png", "alt": "MLBB Draft Studio live tournament draft screen with hero selection and timers" }
    ]
  },
  "lahanaman": {
    "title": "LahanAman — Landslide Vulnerability WebGIS & Decision Support",
    "discipline": "development",
    "role": "WebGIS Developer & Spatial Researcher",
    "status": "Completed Research Project",
    "problem": "Disaster management agencies in disaster-prone hilly areas lack intuitive web-accessible spatial platforms to calculate and visualize multi-variable landslide vulnerability.",
    "contribution": "Developed interactive WebGIS decision support system integrating slope analysis, geological rock formations, soil thickness, and rainfall precipitation layers.",
    "challenge": "Processing and rendering heterogeneous spatial GeoJSON polygons with responsive attribute filtering without frontend performance degradation.",
    "engineering": "Spatial multi-criteria decision modeling (AHP), GeoJSON spatial layers, responsive coordinate query inspector, and geospatial data normalization.",
    "design": "Designed clean cartographic choropleth legends, multi-layer toggle drawer, and localized disaster mitigation guidance summaries.",
    "result": "Functional spatial decision support platform visualizing disaster risk zones with actionable evacuation directives.",
    "stack": ["JavaScript", "WebGIS", "GeoJSON", "Leaflet", "HTML/CSS"],
    "github": "https://github.com/Abhiprayaa29/LahanAman-SistemInformasiGeografis",
    "image": "assets/projects/ipguard/ipguard-vault.png",
    "gallery": [
      { "src": "assets/projects/ipguard/ipguard-vault.png", "alt": "Spatial data visualization interface" }
    ]
  },
  "happy-budgeting": {
    "title": "Financial Management System — Workflow Analysis & UX Prototype",
    "discipline": "design",
    "role": "System Analyst & Lead UI/UX Designer",
    "status": "Institutional Research (UPN Veteran Yogyakarta)",
    "problem": "Complex institutional budgeting and approval processes suffer from opaque paper trails, ambiguous departmental approval hierarchies, and disconnected audit documentation.",
    "contribution": "Led comprehensive requirements engineering, structured hierarchical Data Flow Diagrams (DFD Levels 0–3), modeled relational schemas, and designed a complete enterprise design system in Figma.",
    "challenge": "Translating intricate governmental financial regulations and multi-role authorization policies into intuitive, error-preventing user flows.",
    "engineering": "Authored exhaustive Software Requirements Specifications (SRS), contextual data flow architectures, entity relationship modeling, and role-permission matrices.",
    "design": "Crafted 40+ high-fidelity Figma screens, comprehensive design token library (typography, states, elevation), and interactive prototyping for multi-department approval pipelines.",
    "result": "Approved institutional blueprint and interactive prototype adopted for institutional financial platform development.",
    "stack": ["Figma", "DFD 0-3", "SRS", "Workflow Modeling", "Design Systems"],
    "github": "https://github.com/Abhiprayaa29",
    "image": "assets/projects/happy-budgeting/budgeting-dashboard.png",
    "gallery": [
      { "src": "assets/projects/happy-budgeting/budgeting-dashboard.png", "alt": "Institutional Financial Management System dashboard layout" },
      { "src": "assets/projects/happy-budgeting/budgeting-approval-list.png", "alt": "Multi-tier approval verification queue and status tracker" },
      { "src": "assets/projects/happy-budgeting/budgeting-dfd-level2.png", "alt": "Hierarchical Data Flow Diagram Level 2 verification architecture" }
    ]
  },
  "spada-bot": {
    "title": "SPADA Academic Assistant — Automated Notification Telegram Bot",
    "discipline": "development",
    "role": "Backend Developer & Automation Engineer",
    "status": "Active Automation Tool",
    "problem": "University students frequently miss assignment deadlines and lecture announcements scattered across complex learning management portals.",
    "contribution": "Built automated notification bot that monitors academic assignment queues, schedules daily deadline briefings, and delivers immediate alerts via Telegram.",
    "challenge": "Handling asynchronous event webhooks and managing persistent student subscription states with high uptime.",
    "engineering": "FastAPI asynchronous service, python-telegram-bot framework, scheduled background workers, SQLite persistence.",
    "design": "Clean Telegram inline keyboard UX, markdown-formatted course briefs, and interactive snooze/acknowledgment commands.",
    "result": "Zero-maintenance personal academic notification pipeline with sub-second message delivery.",
    "stack": ["Python", "FastAPI", "Telegram Bot API", "Asyncio", "SQLite"],
    "github": "https://github.com/Abhiprayaa29/SPADA-Telegram-Bot",
    "image": "assets/projects/ipguard/ipguard-auth-request.png",
    "gallery": [
      { "src": "assets/projects/ipguard/ipguard-auth-request.png", "alt": "Automated notification queue and interactive mobile bot flow" }
    ]
  },
  "simple-ar": {
    "title": "SimpleARPlacement — Augmented Reality Surface Placement Engine",
    "discipline": "combined",
    "role": "AR Developer & 3D Artist",
    "status": "Completed Mobile AR Prototype",
    "problem": "Educational mobile applications struggle to provide realistic, stable 3D object manipulation on consumer handheld devices without marker tracking.",
    "contribution": "Developed markerless AR Android application implementing real-time horizontal plane detection, raycasting hit tests, and interactive touch transformations.",
    "challenge": "Preventing mesh jitter and managing texture memory under constrained mobile GPU hardware.",
    "engineering": "Unity 3D engine, C# scripting, AR Foundation framework, Google ARCore runtime.",
    "design": "Modeled custom 3D assets in Blender, optimized polygon topology, and engineered intuitive gesture controls (rotate, pinch-scale, translate).",
    "result": "Reliable mobile AR experience with smooth 60fps tracking across diverse physical environments.",
    "stack": ["Unity", "C#", "AR Foundation", "ARCore", "Blender 3D"],
    "github": "https://github.com/Abhiprayaa29/SimpleARPlacement-Unity",
    "image": "assets/projects/ipguard/ipguard-vault.png",
    "gallery": [
      { "src": "assets/projects/ipguard/ipguard-vault.png", "alt": "AR Foundation horizontal surface plane hit-testing and model visualization" }
    ]
  },
  "jogjalensa": {
    "title": "JogjaLensa — Camera & Lens Rental Marketplace",
    "discipline": "development",
    "role": "Full-Stack Web Developer",
    "status": "Completed Web Application",
    "problem": "Local photography rental stores in Yogyakarta rely on manual WhatsApp chat bookings, causing double-booking conflicts and inventory mismatch.",
    "contribution": "Built full-stack relational database marketplace with user authentication, catalog filtering, inventory date reservation, and rental history tracking.",
    "challenge": "Managing concurrent rental dates for limited physical lens inventory with transactional consistency.",
    "engineering": "PHP, MySQL relational schema, session-based authentication, SQL transaction safety, Apache web server.",
    "design": "Responsive interface, product specification grids, and reservation checkout forms.",
    "result": "Functional end-to-end rental management platform for photography enthusiasts in Yogyakarta.",
    "stack": ["PHP", "MySQL", "Bootstrap", "JavaScript", "HTML/CSS"],
    "github": "https://github.com/Abhiprayaa29/ProjectPemogramanWeb-Abdillah-Abhi",
    "image": "assets/jogjalensa-malioboro-small.jpg",
    "gallery": [
      { "src": "assets/jogjalensa-malioboro-small.jpg", "alt": "JogjaLensa photography catalog preview" }
    ]
  },
  "cerberus": {
    "title": "Cerberus — Automated Network Defense & Threat Rule Engine",
    "discipline": "development",
    "role": "Security Researcher & Developer",
    "status": "Research Lab Tool",
    "problem": "Small network environments lack lightweight, transparent intrusion detection and automated alert triage against known CVE exploit patterns.",
    "contribution": "Engineered automated packet inspection and signature analysis script pipeline parsing network pcap streams and correlating attack signatures.",
    "challenge": "Filtering false positive alerts from high-volume benign network traffic without dropping anomalous payloads.",
    "engineering": "Python packet parsing, Scapy, Snort/Suricata rule syntax, regex signature engine, structured JSON alert output.",
    "design": "Terminal dashboard with ANSI color highlighting and severity-ranked incident logs.",
    "result": "Accurate detection of SQL injection payloads, directory traversal, and brute-force scans in simulated laboratory environments.",
    "stack": ["Python", "Scapy", "Suricata Rules", "Network Security", "Linux"],
    "github": "https://github.com/Abhiprayaa29",
    "image": "assets/projects/ipguard/ipguard-verify-modal.png",
    "gallery": [
      { "src": "assets/projects/ipguard/ipguard-verify-modal.png", "alt": "Network security threat analysis interface" }
    ]
  },
  "ucd-comp": {
    "title": "User-Centered Design Case Study — National UI/UX Competition",
    "discipline": "design",
    "role": "Lead UX Researcher & Designer",
    "status": "National Finalist Selection",
    "problem": "Public transit commuters face severe cognitive friction when planning multi-modal trips across buses, commuter trains, and micro-transit under changing schedules.",
    "contribution": "Conducted user research interviews, constructed user personas, empathy maps, journey frameworks, low-fidelity wireframes, and high-fidelity interactive Figma prototypes.",
    "challenge": "Designing an accessible interface for users of varying digital literacy levels while retaining rich live schedule data.",
    "engineering": "Heuristic evaluation (Nielsen 10), cognitive walkthroughs, System Usability Scale (SUS) benchmark testing.",
    "design": "High-contrast transit route maps, large accessible tap targets, unified timeline trip cards, and WCAG AA compliant color contrast.",
    "result": "Recognized as national finalist for excellence in usability methodology and user-centered design fidelity.",
    "stack": ["Figma", "User Research", "Usability Testing", "Heuristic Evaluation", "Prototyping"],
    "github": "https://github.com/Abhiprayaa29",
    "image": "assets/projects/happy-budgeting/budgeting-dashboard.png",
    "gallery": [
      { "src": "assets/projects/happy-budgeting/budgeting-dashboard.png", "alt": "National UCD Competition prototype case study screens" }
    ]
  }
};

// Organized Shelves Data categorized into the 4 authentic digital garden shelves
const shelvesData = [
  // 01. FUNDAMENTALS
  {
    "id": "design-systems-enterprise",
    "shelf": "01. Fundamentals",
    "shelfKey": "fundamentals",
    "title": "Design Systems & Token Hierarchy in Figma for Complex Enterprise Workflows",
    "date": "Oct 2026",
    "tags": ["Design Systems", "Figma Variables", "Tokens", "Enterprise UI"],
    "summary": "Building scalable design token hierarchies across color semantics, typography scales, elevation, and component variants for high-density administrative software.",
    "content": "### The Challenge of High-Density Enterprise UI\nAdministrative platforms (such as university budgeting and institutional audit trackers) suffer when designers treat them like minimalist consumer apps. They require high data density, clear visual hierarchy, and unambiguous status communication.\n\n### Design Token Architecture\n1. **Primitive Tokens:** Raw values (`blue-500: #3b82f6`, `slate-900: #0f172a`).\n2. **Semantic Tokens:** Purpose-bound tokens (`color-action-primary: {blue-500}`, `color-surface-elevated: {slate-900}`).\n3. **Component Tokens:** Scoped parameters (`table-header-bg`, `status-pill-badge-text`).\n4. **Interactive Variants:** In Figma, states (Default, Hover, Active, Disabled, Focus) are coupled to keyboard navigation requirements, ensuring high-fidelity interactive prototypes match production frontend components 1:1."
  },
  {
    "id": "ucd-national-competition",
    "shelf": "01. Fundamentals",
    "shelfKey": "fundamentals",
    "title": "User-Centered Design & Usability Testing in High-Stakes National UX Competitions",
    "date": "Jul 2026",
    "tags": ["UCD", "Heuristic Evaluation", "SUS Testing", "User Research"],
    "summary": "Methodology for conducting rapid user interviews, affinity diagramming, heuristic audits, and System Usability Scale (SUS) benchmarks under competition constraints.",
    "content": "### The Rigor Behind Winning UX Design\nDesign competitions are not art contests; they evaluate whether a design solution solves real user pain points backed by empirical evidence.\n\n### Applied UCD Framework\n1. **Empathy Discovery:** Semi-structured user interviews uncovering behavioral workarounds and cognitive friction points.\n2. **Affinity Mapping:** Clustering qualitative feedback into primary problem themes.\n3. **Heuristic Evaluation:** Auditing interface wireframes against Nielsen's 10 Usability Heuristics before visual styling.\n4. **Quantitative Usability Testing:** Measuring task completion rates, error frequency, and System Usability Scale (SUS) scores across user test cohorts."
  },
  {
    "id": "data-science-foundations",
    "shelf": "01. Fundamentals",
    "shelfKey": "fundamentals",
    "title": "Data Science Foundations: Exploratory Data Analysis & Statistical Inference",
    "date": "Aug 2026",
    "tags": ["Data Science", "Python", "Pandas", "Statistical Inference"],
    "summary": "Key principles of cleaning tabular data, handling missing distributions, detecting outliers with IQR, and hypothesis testing.",
    "content": "### The Foundations of Empirical Analysis\nBefore applying predictive algorithms or machine learning classifiers, understanding the data distribution is paramount.\n\n### Core Analytical Phases\n1. **Data Wrangling:** Imputing missing values using median (for skewed distributions) or mode (for categorical factors), detecting duplicates, and normalizing scales.\n2. **Exploratory Data Analysis (EDA):** Visualizing feature covariance via heatmaps, box plots for IQR outlier detection, and kernel density estimates.\n3. **Statistical Validation:** Running t-tests or Chi-square independence tests to ensure observed differences represent true population signals rather than sampling variance."
  },

  // 02. DEEP DIVES
  {
    "id": "hw-bound-auth",
    "shelf": "02. Deep Dives",
    "shelfKey": "deep-dives",
    "title": "Hardware-Bound Authentication via Android Keystore & ECDSA P-256",
    "date": "Nov 2026",
    "tags": ["Android Keystore", "ECDSA P-256", "Hardware TEE", "Zero-Password"],
    "summary": "Architectural breakdown of eliminating shared secrets using non-exportable hardware keys inside Android TEE/StrongBox to sign cryptographic server challenges.",
    "content": "### Context & The Problem\nTraditional two-factor authentication (SMS OTP, email codes, authenticator apps) relies on shared secrets that can be phished via adversary-in-the-middle (AiTM) reverse proxies.\n\n### Cryptographic Architecture in IPGuard\n1. **Key Generation:** Keys are generated directly within the device's **Trusted Execution Environment (TEE)** or **StrongBox Keymaster** using the `NIST P-256` elliptic curve (secp256r1).\n2. **Challenge-Response Workflow:**\n   - Server issues a high-entropy CSPRNG nonce with a 60-second validity window.\n   - The Android client scans a dynamic QR code containing the session UUID and payload digest.\n   - The user authorizes via biometric prompt (Class 3 BiometricPrompt with CryptoObject).\n   - The private key signs `SHA256(nonce || timestamp || client_id)`.\n   - The server verifies the ECDSA signature using the registered public key stored in PostgreSQL.\n3. **Security Properties:**\n   - **Non-Exportability:** The private key never leaves hardware silicon, even under OS-level root compromise.\n   - **Replay Prevention:** Server invalidates the nonce upon first verification attempt.\n   - **Phishing Resistance:** The signed challenge includes origin-bound domain parameters."
  },
  {
    "id": "aead-vault-encryption",
    "shelf": "02. Deep Dives",
    "shelfKey": "deep-dives",
    "title": "Authenticated Zero-Knowledge Vault Encryption with XChaCha20-Poly1305 AEAD",
    "date": "Nov 2026",
    "tags": ["XChaCha20-Poly1305", "AEAD", "HKDF-SHA256", "CSPRNG"],
    "summary": "Implementing client-side authenticated file encryption with 24-byte CSPRNG nonces and HKDF per-session key derivation to protect assets at rest.",
    "content": "### Why XChaCha20-Poly1305?\nStandard AES-GCM uses a 96-bit (12-byte) nonce. If a nonce is ever reused with the same key, both confidentiality and authenticity are completely broken. With automated bulk operations, nonce collision probability under AES-GCM becomes a tangible risk.\n\n**XChaCha20-Poly1305** extends the nonce size to **192 bits (24 bytes)**:\n- Nonces can be generated safely using CSPRNG (`os.urandom(24)`) without tracking global counters.\n- Negligible collision probability over billions of encrypted blocks.\n- Exceptional performance on CPUs lacking hardware AES-NI instructions.\n\n### Cryptographic Pipeline in IPGuard\n1. Master secret derived via **HKDF-SHA256** with unique salt and domain separation info.\n2. Digital asset stream encrypted into chunks with individual Poly1305 MAC authentication tags.\n3. Decryption rejects the payload immediately if any bit in the ciphertext or tag is modified prior to plaintext recovery."
  },
  {
    "id": "realtime-socket-state",
    "shelf": "02. Deep Dives",
    "shelfKey": "deep-dives",
    "title": "Real-Time State Synchronization for Broadcast Overlays via Socket.IO",
    "date": "Oct 2026",
    "tags": ["Socket.IO", "OBS Browser Source", "Event-Driven", "Atomic State"],
    "summary": "Engineering a deterministic LAN state engine where tournament draft picks, countdown timers, and match scores sync to transparent OBS overlays with zero reload latency.",
    "content": "### Broadcast Engineering Requirements\nLive esports production demands zero visual glitching. If an operator updates a match score, drafts a hero, or triggers a pause, multiple 1080p OBS Browser Sources across production workstations must update concurrently within 16ms (1 frame at 60fps).\n\n### Architectural Implementation in MLBB Draft Studio\n1. **Server-Authoritative State Engine:** The browser UI never mutates state directly. All actions (pick, ban, timer tick, swap) dispatch action payloads to Express/Socket.IO backend.\n2. **Atomic Persistence:**\n   - Server writes state to a `.tmp` file and executes an atomic POSIX rename.\n   - Crash-proof state recovery prevents match rollback in power or network drops.\n3. **Decoupled Overlays:**\n   - Transparent OBS overlays (draft, scoreboard, Sponsor Edition) subscribe only to broadcast delta channels.\n   - Clean CSS transforms eliminate repaint flashes during live on-air transitions."
  },
  {
    "id": "dfd-enterprise-modeling",
    "shelf": "02. Deep Dives",
    "shelfKey": "deep-dives",
    "title": "Multi-Tier Workflow Modeling: DFD Levels 0–3 in Institutional Financial Systems",
    "date": "Oct 2026",
    "tags": ["DFD Levels 0-3", "System Analysis", "SRS", "Governance"],
    "summary": "Methodology for translating complex governmental budgeting regulations and multi-role approvals into rigorous Data Flow Diagrams and Software Requirements Specifications.",
    "content": "### Bridging Regulation and Engineering\nDuring research on financial management systems at UPN “Veteran” Yogyakarta, the core challenge was mapping hierarchical governance policies (PPK, Dean, Treasurer, Auditor) into unambiguous software contracts.\n\n### Hierarchical Data Flow Architecture\n- **Context Diagram (Level 0):** Defines external entities, system boundaries, and top-level document streams (budget proposals, disbursement receipts, accountability reports).\n- **DFD Level 1:** Deconstructs the system into core operational processes: (1.0) Proposal Ingestion, (2.0) Verification & Validation, (3.0) Multi-Tier Approval, (4.0) Disbursement, (5.0) Audit & Accountability.\n- **DFD Level 2 & 3:** Unpacks validation mechanics: boundary limits, account code verification, digital voucher generation, and rejection rollback branches.\n- **Outcome:** Comprehensive SRS that eliminates scope ambiguity before frontend prototype and backend schema development."
  },
  {
    "id": "cryptographic-steganography",
    "shelf": "02. Deep Dives",
    "shelfKey": "deep-dives",
    "title": "Invisible Cryptographic Watermarking: LSB Steganography & Ed25519 Signatures",
    "date": "Nov 2026",
    "tags": ["Steganography", "LSB", "Ed25519", "Audit Hash Chain"],
    "summary": "Embedding verifiable, tamper-evident authorship proofs directly into the pixel LSB channel of PNG master files backed by asymmetric digital signatures.",
    "content": "### Overcoming Visible Watermarking Flaws\nVisible watermarks ruin master artwork and are readily removed by AI inpainting. Metadata headers (EXIF) are routinely deleted by messaging apps and social media platforms.\n\n### The LSB Cryptographic Framing Pipeline\n1. **Binary Packet Framing:** Header `IPGW` (4 bytes) + Version (1 byte) + License ID (16 bytes UUID) + SHA-256 Digest of Original (32 bytes) + Ed25519 Signature (64 bytes).\n2. **Embedding:** The bitstream is written across the Least Significant Bits of the RGB channels in 24-bit PNG files. The perceptual visual change is zero (delta E < 0.1).\n3. **Audit Hash Chain:** Every embedding and verification event generates a SHA-256 hash linked to the previous transaction hash, creating an immutable internal audit ledger."
  },
  {
    "id": "sqli-exploitation-defense",
    "shelf": "02. Deep Dives",
    "shelfKey": "deep-dives",
    "title": "Time-Based Blind SQLi Exploitation Proof-of-Concept & PDO Parameterization",
    "date": "Apr 2026",
    "tags": ["SQLi", "Security Research", "PDO", "Defensive Engineering"],
    "summary": "Technical analysis of inferring database schema via sleep latency anomalies under zero-output conditions, and defensive mitigation via prepared statements.",
    "content": "### Exploitation Mechanics (Research Laboratory)\nUnder time-based blind SQL injection, the target application reveals no error messages and no database output in the HTTP response. Data extraction is achieved by evaluating boolean conditions paired with delay commands (`WAITFOR DELAY` / `SLEEP()`):\n- If `SUBSTRING(user(), 1, 1) = 'a'`, sleep 5 seconds; otherwise return immediately.\n- By sampling HTTP response latency across binary search iterations, full ASCII strings can be reconstructed bit by bit.\n\n### Comprehensive Defense\n1. **Prepared Statements (PDO):** Code and data must be strictly separated. Query plan compilation occurs before input substitution.\n2. **Principle of Least Privilege:** Database application user accounts must lack schema manipulation or table dump privileges.\n3. **Strict Type Casting:** Enforce strict integer parsing for numeric identifiers."
  },

  // 03. REBUILDING THE WHEEL
  {
    "id": "academic-automation-fastapi",
    "shelf": "03. Rebuilding the Wheel",
    "shelfKey": "rebuilding-the-wheel",
    "title": "Automating Academic Workflows: Event-Driven Telegram Bots with FastAPI",
    "date": "Sep 2026",
    "tags": ["FastAPI", "Telegram Bot API", "Cron Scheduling", "Webhooks"],
    "summary": "Designing a reliable notification and assignment sync service using asynchronous webhooks, cron scheduling, and Telegram Bot API.",
    "content": "### Workflow Motivation\nBalancing university coursework, research assistantships, and independent software development requires zero-friction task management. Relying on manually checking university portals (SPADA) leads to missed deadlines.\n\n### Technical Implementation\n1. **Asynchronous Gateway:** FastAPI handles incoming webhook requests from university alert feeds and user slash commands.\n2. **Scheduled Dispatch Engine:** Async background tasks query course API endpoints, compute pending assignment deltas, and format daily briefings.\n3. **Telegram Interface:** Interactive inline keyboards allow users to mark assignments complete, snooze reminders, or request syllabus outlines on demand."
  },
  {
    "id": "unity-ar-surface-tracking",
    "shelf": "03. Rebuilding the Wheel",
    "shelfKey": "rebuilding-the-wheel",
    "title": "Surface Plane Detection & Spatial Constraints in AR Foundation & ARCore",
    "date": "Oct 2026",
    "tags": ["Unity", "C#", "AR Foundation", "ARCore"],
    "summary": "Implementation details of surface plane classification, raycast hit testing, gesture manipulation, and spatial anchor stabilization on Android AR devices.",
    "content": "### Spatial Computing Mechanics\nAugmented reality requires mapping digital 3D meshes into real-world geometry with physical plausibility.\n\n### Implementation in SimpleARPlacement\n1. **AR Plane Manager:** Tracks feature points detected by the device camera and IMU sensors, classifying horizontal surfaces (floors, tabletops).\n2. **Raycasting Hit Testing:** When a screen tap occurs, `ARRaycastManager` fires a vector into the point cloud to find the nearest valid plane intersection.\n3. **Transform Constraints:** Custom C# scripts constrain rotation to the Y-axis (preventing unnatural tilting) and clamp scale factors within safe physical bounds."
  },
  {
    "id": "ai-agents-skillsbuild",
    "shelf": "03. Rebuilding the Wheel",
    "shelfKey": "rebuilding-the-wheel",
    "title": "Building Autonomous AI Agents: Architecture, Tool Calling & Structured Prompts",
    "date": "Oct 2026",
    "tags": ["AI Agents", "Tool Calling", "ReAct Framework", "IBM SkillsBuild"],
    "summary": "Architectural breakdown of autonomous agents: reasoning loops, deterministic tool invocation, structured JSON schemas, and safety boundaries.",
    "content": "### The Agentic Paradigm\nUnlike static single-turn prompt-response LLM usage, autonomous agents operate inside an iterative execution loop: **Reason → Plan → Act → Observe → Conclude**.\n\n### Key Architectural Pillars\n1. **Reasoning Engine (ReAct):** Breaking down high-level user intents into sequential sub-tasks.\n2. **Tool Definition via JSON Schema:** Declaring parameter schemas that the language model can invoke deterministically with validated arguments.\n3. **Observation Feedback:** Executing the tool locally, capturing the exact stdout/stderr or API return, and re-feeding it into the model context.\n4. **Safety Boundaries:** Enforcing timeout limits, maximum recursion loops, and strict sandboxed execution to prevent unbounded resource consumption."
  },

  // 04. CREATIVE PRACTICE
  {
    "id": "blender-3d-pipeline",
    "shelf": "04. Creative Practice",
    "shelfKey": "creative-practice",
    "title": "3D Asset Modeling & Spatial Pipeline in Blender for Interactive Real-Time Engines",
    "date": "May 2026",
    "tags": ["Blender 3D", "PBR Shading", "Mesh Topology", "Unity Pipeline"],
    "summary": "Low-poly mesh optimization, UV unwrapping, PBR material creation, and glTF/FBX export pipelines targeting mobile AR rendering.",
    "content": "### Balancing Fidelity and Mobile AR Performance\nMobile AR engines run under stringent thermal and battery limits. Models with excessive polygon density or uncompressed 4K textures trigger severe frame-rate drops.\n\n### Modeling Pipeline\n1. **Topology Optimization:** Modeling with clean quads, removing non-manifold vertices, and utilizing normal baking to capture high-resolution bevels onto lightweight meshes.\n2. **PBR Texturing:** Packaging Metallic, Roughness, and Ambient Occlusion into a single channel-packed texture map (ORM) to minimize draw calls.\n3. **Unity glTF/FBX Ingestion:** Rigorous origin pivot placement at ground contact point to ensure AR surface raycasts place objects seamlessly on physical planes."
  },
  {
    "id": "spatial-webgis-modeling",
    "shelf": "04. Creative Practice",
    "shelfKey": "creative-practice",
    "title": "Geospatial Modeling & Decision Support Systems for Landslide Susceptibility",
    "date": "Nov 2026",
    "tags": ["WebGIS", "Spatial Analysis", "DSS / SPK", "GeoJSON"],
    "summary": "Multi-criteria spatial analysis combining slope, lithology, rainfall data, and land cover into a WebGIS vulnerability decision support system.",
    "content": "### Problem Statement\nIn hilly regions such as Yogyakarta (Imogiri, Dlingo, Kulon Progo), landslide susceptibility assessment requires integrating heterogeneous geographic layers with varying spatial resolutions and physical scales.\n\n### Decision Support Framework in LahanAman\n1. **Layer Parameterization:**\n   - Slope gradient (DEM derived percentage categories).\n   - Soil thickness and lithological formation stability.\n   - Average monthly precipitation isohyets.\n   - Land cover classifications from multispectral satellite imagery.\n2. **Spatial Multi-Criteria Evaluation (AHP / Weighted Sum):**\n   - Normalized weight matrices assigned to each layer based on geotechnical literature.\n   - Spatial overlay calculations yielding categorized hazard indices (Low, Moderate, High, Critical).\n3. **WebGIS Interface:**\n   - Interactive GeoJSON polygon rendering with dynamic choropleth styling.\n   - Query inspector for localized coordinates with immediate mitigation guidelines."
  }
];

// Definition of the 4 authentic shelves for the digital garden
const shelfCategories = [
  {
    key: "fundamentals",
    number: "01",
    name: "Fundamentals",
    description: "Foundational knowledge and core principles across interface design, typography, layout, and software engineering."
  },
  {
    key: "deep-dives",
    number: "02",
    name: "Deep Dives",
    description: "Advanced explorations into systems architecture, cryptographic protocols, zero-knowledge storage, and real-time synchronization."
  },
  {
    key: "rebuilding-the-wheel",
    number: "03",
    name: "Rebuilding the Wheel",
    description: "Functional systems and prototypes built from scratch to understand how underlying engines and protocols operate."
  },
  {
    key: "creative-practice",
    number: "04",
    name: "Creative Practice",
    description: "Explorations at the intersection of visual communication, 3D modeling pipelines, spatial computing, and interactive prototypes."
  }
];

// =============================================================================
// 2. SIGNATURE ADHAM-INSPIRED ANIMATED CUTOUT PORTRAIT ENGINE
// =============================================================================

function initInteractiveSplitHero() {
  const portrait = document.getElementById('heroPortrait') || document.querySelector('.adham-portrait-container');
  const heroGrid = document.querySelector('.hero-editorial-grid');
  const designerCol = document.querySelector('.hero-col-designer');
  const coderCol = document.querySelector('.hero-col-coder');
  
  if (!portrait) return;

  let currentSplit = 50.0;
  let targetSplit = 50.0;
  let isHoveringColumn = false;
  let animFrameId = null;

  // Check prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Set CSS property
  function updateDOMSplit(val) {
    portrait.style.setProperty('--split-percent', `${val.toFixed(2)}%`);
  }

  // Animation Loop with smooth lerp easing
  function animate() {
    if (prefersReducedMotion) {
      currentSplit = targetSplit;
      updateDOMSplit(currentSplit);
      animFrameId = null;
      return;
    }

    const diff = targetSplit - currentSplit;
    if (Math.abs(diff) > 0.05) {
      currentSplit += diff * 0.14;
      updateDOMSplit(currentSplit);
      animFrameId = requestAnimationFrame(animate);
    } else {
      currentSplit = targetSplit;
      updateDOMSplit(currentSplit);
      animFrameId = null;
    }
  }

  function setTarget(val) {
    targetSplit = Math.max(0, Math.min(100, val));
    if (!animFrameId) {
      animFrameId = requestAnimationFrame(animate);
    }
  }

  // 1. Column Hover States (Full Designer 100% vs Full Coder 0%)
  if (designerCol) {
    designerCol.addEventListener('mouseenter', () => {
      isHoveringColumn = true;
      setTarget(100.0); // Reveal full artistic designer portrait
    });
    designerCol.addEventListener('mouseleave', () => {
      isHoveringColumn = false;
      setTarget(50.0);  // Return to 50/50 balance
    });
    // Mobile tap support
    designerCol.addEventListener('click', () => {
      setTarget(100.0);
    });
  }

  if (coderCol) {
    coderCol.addEventListener('mouseenter', () => {
      isHoveringColumn = true;
      setTarget(0.0);   // Reveal full clean photographic coder portrait
    });
    coderCol.addEventListener('mouseleave', () => {
      isHoveringColumn = false;
      setTarget(50.0);  // Return to 50/50 balance
    });
    // Mobile tap support
    coderCol.addEventListener('click', () => {
      setTarget(0.0);
    });
  }

  // 2. Interactive Pointer Movement Across Hero
  if (heroGrid) {
    heroGrid.addEventListener('pointermove', (e) => {
      if (isHoveringColumn) return;
      const rect = heroGrid.getBoundingClientRect();
      const x = e.clientX - rect.left;
      // Invert percentage so left side = 100% Designer, right side = 0% Coder
      const pct = (1 - (x / rect.width)) * 100;
      setTarget(pct);
    });

    heroGrid.addEventListener('pointerleave', () => {
      isHoveringColumn = false;
      setTarget(50.0);
    });
  }

  // 3. Direct Tap on Portrait Toggles State on Mobile
  let toggleState = 0; // 0: 50/50, 1: Designer (100), 2: Coder (0)
  portrait.addEventListener('click', () => {
    toggleState = (toggleState + 1) % 3;
    if (toggleState === 1) setTarget(100.0);
    else if (toggleState === 2) setTarget(0.0);
    else setTarget(50.0);
  });

  // Initial render at 50%
  updateDOMSplit(50.0);
}

// =============================================================================
// 3. SELECTED WORK SECTION (FILTERS & CASE STUDY MODAL)
// =============================================================================

function initWorkSection() {
  const filterBtns = document.querySelectorAll('.work-filter-bar .filter-btn');
  const projectEntries = document.querySelectorAll('.project-entry');
  const projectDialog = document.getElementById('projectDialog');
  const dialogClose = document.getElementById('projectDialogClose');
  const dialogBody = document.getElementById('projectDialogBody');

  // Filter Projects by Discipline
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      projectEntries.forEach(entry => {
        const disc = entry.dataset.discipline;
        if (filter === 'all' || disc === filter || (filter === 'hybrid' && disc === 'combined')) {
          entry.style.display = 'grid';
        } else {
          entry.style.display = 'none';
        }
      });
    });
  });

  // Open Case Study Modal
  document.querySelectorAll('.btn-case-study').forEach(btn => {
    btn.addEventListener('click', () => {
      const projId = btn.dataset.project;
      const data = projectsData[projId];
      if (!data || !projectDialog || !dialogBody) return;

      const galleryHtml = (data.gallery || []).map(item => `
        <figure style="margin: 20px 0;">
          <img src="${item.src}" alt="${item.alt}" style="width: 100%; border: 1px solid var(--border-color); border-radius: 4px;" loading="lazy">
          <figcaption style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); margin-top: 6px;">${item.alt}</figcaption>
        </figure>
      `).join('');

      dialogBody.innerHTML = `
        <article class="article-reader-container">
          <div class="project-meta-eyebrow" style="margin-bottom: 8px;">
            <span class="discipline-tag">${data.discipline.toUpperCase()}</span>
            <span>·</span>
            <span>${data.status}</span>
          </div>
          <h2 class="article-headline">${data.title}</h2>
          <div class="article-metadata-strip">
            <span><strong>Role:</strong> ${data.role}</span>
          </div>

          <div class="article-content">
            <h3>Problem Statement</h3>
            <p>${data.problem}</p>

            <h3>Core Contribution</h3>
            <p>${data.contribution}</p>

            ${data.engineering ? `
              <h3>Engineering Architecture</h3>
              <p>${data.engineering}</p>
            ` : ''}

            ${data.design ? `
              <h3>Design & User Experience</h3>
              <p>${data.design}</p>
            ` : ''}

            <h3>Key Challenges & Breakthroughs</h3>
            <p>${data.challenge}</p>

            <h3>Outcome & Results</h3>
            <p>${data.result}</p>

            <h3>Visual Artifacts</h3>
            ${galleryHtml}

            <h3>Technology Stack</h3>
            <div class="project-tech-stack" style="margin-top: 12px;">
              ${data.stack.map(s => `<span class="tech-tag">${s}</span>`).join('')}
            </div>

            ${data.github ? `
              <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid var(--border-color);">
                <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn-editorial-primary">
                  View Repository on GitHub ↗
                </a>
              </div>
            ` : ''}
          </div>
        </article>
      `;

      projectDialog.showModal();
    });
  });

  if (dialogClose && projectDialog) {
    dialogClose.addEventListener('click', () => projectDialog.close());
    projectDialog.addEventListener('click', (e) => {
      const rect = projectDialog.getBoundingClientRect();
      if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
        projectDialog.close();
      }
    });
  }
}

// =============================================================================
// 4. SHELVES: A REAL DIGITAL GARDEN (Tania Rascia Categorized Library)
// =============================================================================

function renderShelvesCatalog(searchQuery = '') {
  const container = document.getElementById('shelvesCatalog');
  if (!container) return;

  const query = searchQuery.toLowerCase().trim();

  // Filter notes
  const filteredNotes = shelvesData.filter(note => {
    if (!query) return true;
    const matchTitle = note.title.toLowerCase().includes(query);
    const matchTags = note.tags.some(t => t.toLowerCase().includes(query));
    const matchSummary = note.summary.toLowerCase().includes(query);
    const matchCategory = note.shelf.toLowerCase().includes(query);
    return matchTitle || matchTags || matchSummary || matchCategory;
  });

  let html = '';

  shelfCategories.forEach(cat => {
    const notesInShelf = filteredNotes.filter(n => n.shelfKey === cat.key);
    
    // Per instructions: Empty categories are hidden until real content is available
    if (notesInShelf.length === 0) return;

    html += `
      <section class="shelf-category-block" id="shelf-${cat.key}">
        <div class="shelf-category-header">
          <div class="shelf-category-title-group">
            <span class="shelf-num">${cat.number}</span>
            <h3 class="shelf-category-name">${cat.name}</h3>
          </div>
          <span class="shelf-count-badge">${notesInShelf.length} ${notesInShelf.length === 1 ? 'entry' : 'entries'}</span>
        </div>
        <p class="shelf-category-desc">${cat.description}</p>
        
        <ul class="shelf-entries-list">
          ${notesInShelf.map(note => `
            <li class="shelf-entry-item">
              <button class="shelf-entry-link" data-id="${note.id}" type="button">
                <span class="shelf-entry-title">${note.title}</span>
                <span class="shelf-entry-date">${note.date}</span>
                <span class="shelf-entry-tags">
                  ${note.tags.slice(0, 2).map(t => `<span class="shelf-tag">${t}</span>`).join('')}
                </span>
              </button>
            </li>
          `).join('')}
        </ul>
      </section>
    `;
  });

  if (!html) {
    html = `
      <div style="padding: 48px 0; text-align: center; color: var(--text-muted); font-family: var(--font-mono); font-size: 0.875rem;">
        No shelf notes found matching "${searchQuery}".
      </div>
    `;
  }

  container.innerHTML = html;

  // Re-bind article clicks
  container.querySelectorAll('.shelf-entry-link').forEach(btn => {
    btn.addEventListener('click', () => {
      openArticleReader(btn.dataset.id);
    });
  });
}

function openArticleReader(noteId) {
  const note = shelvesData.find(n => n.id === noteId);
  const dialog = document.getElementById('shelfDialog');
  const body = document.getElementById('shelfDialogBody');
  const breadcrumb = document.getElementById('shelfDialogBreadcrumb');

  if (!note || !dialog || !body) return;

  if (breadcrumb) {
    breadcrumb.innerHTML = `<span>Shelves</span> <span>/</span> <span>${note.shelf}</span>`;
  }

  // Simple Markdown to HTML parser
  function parseMarkdown(md) {
    let out = md
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/^\s*-\s+(.*$)/gim, '<li>$1</li>');
    
    // Wrap consecutive lis in ul
    out = out.replace(/(<li>[\s\S]*?<\/li>)/gm, '<ul>$1</ul>');
    // Fix nested double uls
    out = out.replace(/<\/ul>\s*<ul>/g, '');
    
    // Wrap paragraphs
    const blocks = out.split(/\n\n+/);
    return blocks.map(b => {
      b = b.trim();
      if (!b) return '';
      if (b.startsWith('<h') || b.startsWith('<ul') || b.startsWith('<pre')) return b;
      return `<p>${b}</p>`;
    }).join('\n');
  }

  // Find previous and next articles in the same shelf
  const shelfNotes = shelvesData.filter(n => n.shelfKey === note.shelfKey);
  const currentIndex = shelfNotes.findIndex(n => n.id === noteId);
  const prevNote = currentIndex > 0 ? shelfNotes[currentIndex - 1] : null;
  const nextNote = currentIndex < shelfNotes.length - 1 ? shelfNotes[currentIndex + 1] : null;

  body.innerHTML = `
    <article class="article-reader-container">
      <h1 class="article-headline">${note.title}</h1>
      <div class="article-metadata-strip">
        <span>Published ${note.date}</span>
        <span>·</span>
        <span>${note.shelf}</span>
        <span>·</span>
        <span>Tags: ${note.tags.join(', ')}</span>
      </div>

      <div class="article-content">
        ${parseMarkdown(note.content)}
      </div>

      <div class="article-footer-nav">
        <div>
          ${prevNote ? `
            <button class="article-nav-btn" onclick="openArticleReader('${prevNote.id}')">
              ← Previous: ${prevNote.title.slice(0, 32)}...
            </button>
          ` : ''}
        </div>
        <div>
          ${nextNote ? `
            <button class="article-nav-btn" onclick="openArticleReader('${nextNote.id}')">
              Next: ${nextNote.title.slice(0, 32)}... →
            </button>
          ` : ''}
        </div>
      </div>
    </article>
  `;

  dialog.showModal();
}

// Make openArticleReader available globally for prev/next buttons
window.openArticleReader = openArticleReader;

function initShelves() {
  renderShelvesCatalog('');

  const searchInput = document.getElementById('shelvesSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderShelvesCatalog(e.target.value);
    });
  }

  const shelfDialog = document.getElementById('shelfDialog');
  const shelfClose = document.getElementById('shelfDialogClose');
  if (shelfClose && shelfDialog) {
    shelfClose.addEventListener('click', () => shelfDialog.close());
    shelfDialog.addEventListener('click', (e) => {
      const rect = shelfDialog.getBoundingClientRect();
      if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
        shelfDialog.close();
      }
    });
  }
}

// =============================================================================
// 5. THEME TOGGLE (LIGHT PRIMARY / DARK SECONDARY)
// =============================================================================

function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggle');
  const root = document.documentElement;

  // Retrieve saved theme or default to light
  const savedTheme = localStorage.getItem('abhipraya_theme') || 'light';
  root.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('abhipraya_theme', next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    if (!toggleBtn) return;
    if (theme === 'dark') {
      toggleBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
      toggleBtn.setAttribute('aria-label', 'Switch to light mode');
    } else {
      toggleBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
      toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
    }
  }
}

// =============================================================================
// 6. CONTACT COPY & VISITOR ANALYTICS
// =============================================================================

function initContactAndAnalytics() {
  // Copy Email Button
  const copyBtn = document.getElementById('copyEmailBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const email = 'abdillahabhi12@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>Email Copied!</span>
        `;
        copyBtn.style.borderColor = 'var(--accent-primary)';
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
          copyBtn.style.borderColor = '';
        }, 2200);
      } catch (err) {
        window.location.href = `mailto:${email}`;
      }
    });
  }

  // First-party visitor count
  try {
    fetch('/api/visit', { method: 'POST' }).catch(() => {});
    fetch('/api/stats')
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        const statsEl = document.getElementById('visitorStats');
        if (statsEl && data && typeof data.totalVisits === 'number') {
          statsEl.textContent = `${data.totalVisits.toLocaleString()} visits`;
        }
      })
      .catch(() => {});
  } catch (_) {}
}

// =============================================================================
// DOM INITIALIZATION
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initInteractiveSplitHero();
  initWorkSection();
  initShelves();
  initContactAndAnalytics();
});
