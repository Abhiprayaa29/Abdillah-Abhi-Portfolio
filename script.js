/**
 * Abhipraya — Personal Designer × Coder Portfolio & Digital Garden
 * Clean, dependency-free vanilla JS engine
 */

'use strict';

// -----------------------------------------------------------------------------
// 1. DATA BUNDLES (PROJECTS & SHELVES)
// -----------------------------------------------------------------------------
// Abhipraya — Designer × Coder & Digital Garden Data Architecture
const projectsData = {
  "ipguard": {
    "title": "IPGuard \u2014 Secure Digital Asset Protection Platform",
    "discipline": "combined",
    "role": "Lead Architect & Full-Stack Developer",
    "status": "Verified & Frozen (M0\u2013M4)",
    "problem": "Traditional cloud storage exposes high-value intellectual property (CAD, source code, media) to server compromise, phishing attacks on 2FA credentials, and trivial watermark removal.",
    "contribution": "Architected the end-to-end platform: React 19 frontend, asynchronous FastAPI backend, PostgreSQL schema, Android Keystore mobile authenticator, authenticated file vault with XChaCha20-Poly1305, and LSB cryptographic steganography with Ed25519 signatures.",
    "challenge": "Eliminating shared secrets while guaranteeing zero-knowledge file encryption and verifiable tamper detection on PNG master files. Solved by decoupling key storage into hardware TEE/StrongBox silicon and binding file transactions to an immutable audit hash chain.",
    "engineering": "209/209 backend Pytest assertions passing (100%), Playwright browser E2E test suites verified, HKDF-SHA256 session key derivation, 24-byte CSPRNG nonces, and zero-password biometric QR challenges.",
    "design": "Engineered high-density administrative console, responsive security status indicators, visual QR authentication modals, and comprehensive asset inspector with cryptographic verification cards.",
    "result": "Production-ready, frozen reference implementation with zero-password hardware authentication and mathematically verifiable asset attribution.",
    "stack": [
      "React 19",
      "FastAPI",
      "PostgreSQL",
      "Android Keystore",
      "XChaCha20",
      "Ed25519",
      "Docker"
    ],
    "github": "https://github.com/Abhiprayaa29/IPGuard",
    "image": "assets/projects/ipguard/ipguard-vault.png",
    "gallery": [
      {
        "src": "assets/projects/ipguard/ipguard-vault.png",
        "alt": "IPGuard encrypted asset vault console showing active files and cryptographic status"
      },
      {
        "src": "assets/projects/ipguard/ipguard-verify-modal.png",
        "alt": "IPGuard cryptographic verification modal validating Ed25519 signature"
      },
      {
        "src": "assets/projects/ipguard/ipguard-auth-request.png",
        "alt": "IPGuard Android mobile authenticator showing biometric challenge prompt"
      }
    ]
  },
  "mlbb": {
    "title": "MLBB Draft Studio \u2014 Broadcast Overlays & Operator Panel",
    "discipline": "combined",
    "role": "Full-Stack Developer & UI Designer",
    "status": "Production-ready LAN tournament tool",
    "problem": "Esports tournament operators lack a single source of truth for match state, draft timers, hero pick/ban sequences, and multi-screen transparent broadcast overlays.",
    "contribution": "Engineered server-authoritative draft engine, dual-workstation operator control panel, and three transparent 1920\u00d71080 OBS broadcast overlays synchronized in real time.",
    "challenge": "Ensuring sub-16ms live synchronization across multiple OBS workstations with zero reload flashes and crash-proof atomic state recovery.",
    "engineering": "166 backend assertions passed, 121 E2E assertions passed, 133 heroes validated with zero schema errors. Atomic POSIX file swaps prevent match rollback.",
    "design": "Designed professional esports dark broadcast aesthetic, high-contrast tournament typography, timer meters, and operator interface with instant keyboard shortcuts.",
    "result": "Deployed for competitive LAN tournament production with zero-latency synchronization between operators and live broadcast feeds.",
    "stack": [
      "React 18",
      "Vite",
      "Tailwind CSS v4",
      "Express",
      "Socket.IO",
      "OBS Studio"
    ],
    "github": "https://github.com/Abhiprayaa29/mlbb-draft-studio",
    "image": "assets/projects/mlbb/overlay-draft.webp",
    "gallery": [
      {
        "src": "assets/projects/mlbb/overlay-draft.webp",
        "alt": "1920x1080 transparent broadcast overlay showing draft pick/ban sequences and timers"
      },
      {
        "src": "assets/projects/mlbb/control-panel-operator.webp",
        "alt": "MLBB Draft Studio operator control panel with live timer and hero selection"
      }
    ]
  },
  "happy-budgeting": {
    "title": "Financial Management System Research & UI/UX",
    "discipline": "design",
    "role": "UI/UX Designer & System Analyst (Research Assistant)",
    "status": "Academic Research & System Specification",
    "problem": "University budget governance involves complex multi-role hierarchies (PPK, Dean, Treasurer, Auditor) with high compliance overhead and paper-based approval delays.",
    "contribution": "Defined Software Requirements Specifications (SRS), mapped business workflows into DFD Levels 0\u20133, and designed high-fidelity interactive design systems and prototypes in Figma.",
    "challenge": "Translating multi-stakeholder regulations into intuitive user journeys without sacrificing administrative verification depth.",
    "engineering": "Architected complete relational database models (ERD), multi-level data flow diagrams, functional requirements matrices, and error recovery branches.",
    "design": "Built enterprise design token system, dense data tables with clear approval workflows, status indicator badges, and accessible form validations in Figma.",
    "result": "Adopted as institutional SRS foundation for next-generation university financial automation.",
    "stack": [
      "Figma",
      "SRS Specification",
      "DFD Levels 0-3",
      "ERD Modeling",
      "User-Centered Design"
    ],
    "github": "https://github.com/Abhiprayaa29",
    "image": "assets/projects/happy-budgeting/budgeting-dashboard.png",
    "gallery": [
      {
        "src": "assets/projects/happy-budgeting/budgeting-dashboard.png",
        "alt": "Enterprise budgeting management dashboard mockup designed in Figma"
      },
      {
        "src": "assets/projects/happy-budgeting/budgeting-approval-list.png",
        "alt": "Financial approval queue interface with multi-tier verification steps"
      },
      {
        "src": "assets/projects/happy-budgeting/budgeting-dfd-level2.png",
        "alt": "DFD Level 2 process specification diagram for budget verification"
      }
    ]
  },
  "lahan-aman": {
    "title": "LahanAman \u2014 WebGIS Landslide Susceptibility SPK",
    "discipline": "development",
    "role": "Geospatial Analyst & Developer",
    "status": "Decision Support System & Spatial Research",
    "problem": "Disaster management agencies require accurate, localized spatial vulnerability mapping to prioritize landslide mitigation resources across hilly terrain.",
    "contribution": "Constructed multi-criteria spatial analysis model combining slope gradient DEM, lithology, rainfall data, and land cover into a WebGIS vulnerability decision support system.",
    "challenge": "Normalizing heterogeneous geographic layers with varying spatial resolutions into a mathematically consistent hazard index.",
    "engineering": "Spatial data processing, AHP multi-criteria weighting matrices, GeoJSON layer validation, and automated hazard classification algorithms.",
    "design": "Clean cartographic data visualization, intuitive choropleth legend hierarchy, and interactive map coordinate inspectors.",
    "result": "Comprehensive technical SPK specification and reproducible spatial data evaluation framework for Yogyakarta regencies.",
    "stack": [
      "WebGIS",
      "Spatial Analysis",
      "DSS / SPK",
      "GeoJSON",
      "Python"
    ],
    "github": "https://github.com/Abhiprayaa29",
    "image": "assets/projects/ar/simple-ar-placement-ui.webp",
    "gallery": [
      {
        "src": "assets/projects/ar/simple-ar-placement-ui.webp",
        "alt": "Interactive spatial computing interface"
      }
    ]
  },
  "findit-ugm": {
    "title": "Find IT! UGM 2026 \u2014 National UX Competition",
    "discipline": "design",
    "role": "Lead UX Designer & Video Producer",
    "status": "National Finalist & Best Video Award",
    "problem": "Modern mobile interfaces frequently fail to address cognitive overload and accessibility needs for users navigating critical information under time pressure.",
    "contribution": "Conducted end-to-end user research, empathy mapping, interactive prototyping in Figma, usability testing, and produced the award-winning demonstration video.",
    "challenge": "Balancing complex feature sets with minimalist, intuitive mobile navigation in a highly competitive national jury review.",
    "engineering": "Evaluated interaction performance, component token consistency, and structured usability test metrics.",
    "design": "Designed modern mobile design system, interactive micro-animations, accessible color contrast schemes, and motion graphics in After Effects.",
    "result": "Awarded National Finalist and Best Video Award at Find IT! 2026 hosted by KMTETI FT Universitas Gadjah Mada.",
    "stack": [
      "Figma",
      "UX Research",
      "Interactive Prototyping",
      "After Effects",
      "Usability Testing"
    ],
    "github": "https://github.com/Abhiprayaa29",
    "image": "assets/sertifikat/findit-2026-best-video.jpg",
    "gallery": [
      {
        "src": "assets/sertifikat/findit-2026-best-video.jpg",
        "alt": "Find IT! UGM 2026 Best Video Award certificate"
      }
    ]
  },
  "cerberus": {
    "title": "Cerberus Multi-Agent Orchestrator",
    "discipline": "development",
    "role": "Systems Developer",
    "status": "Developer Tooling",
    "problem": "Autonomous AI agent workflows frequently derail or hallucinate when executing multi-file codebase refactors without deterministic phase boundaries.",
    "contribution": "Developed ultra-work execution loop orchestrator in Bun & TypeScript that coordinates specialized sub-agents with strict verification gates.",
    "challenge": "Managing agent context limits while enforcing deterministic test runs and git rollback mechanisms.",
    "engineering": "Bun runtime, TypeScript, OpenCode SDK, event-driven task trees, automated test verification hooks.",
    "design": "Terminal telemetry dashboards with live execution graphs and task progress summaries.",
    "result": "Reliable developer tooling accelerating multi-phase codebase modernization with verified rollback guarantees.",
    "stack": [
      "Bun",
      "TypeScript",
      "OpenCode",
      "Multi-Agent Orchestration",
      "Git Automation"
    ],
    "github": "https://github.com/Abhiprayaa29/Cerberus",
    "image": "assets/projects/cerberus/core-loop.webp",
    "gallery": [
      {
        "src": "assets/projects/cerberus/core-loop.webp",
        "alt": "Cerberus core execution loop architecture diagram"
      }
    ]
  },
  "spada-bot": {
    "title": "Academic Automation Engine & Telegram Bot",
    "discipline": "development",
    "role": "Backend Developer",
    "status": "Production Service",
    "problem": "Students miss deadlines and course announcements due to fragmented university learning management systems without real-time mobile push notifications.",
    "contribution": "Built asynchronous task automation service with FastAPI and Telegram Bot API that delivers personalized assignment alerts and daily 07:00 briefing schedules.",
    "challenge": "Parsing dynamic academic calendars and synchronizing deadline changes without triggering rate limits.",
    "engineering": "FastAPI asynchronous background tasks, Telegram webhook endpoints, Cron schedule workers, and structured JSON storage.",
    "design": "Clean Telegram inline keyboard conversational UI with interactive quick-action buttons.",
    "result": "Zero missed deadlines across multiple university semesters with automated daily briefing summaries.",
    "stack": [
      "Python",
      "FastAPI",
      "Telegram Bot API",
      "Cron",
      "Asyncio"
    ],
    "github": "https://github.com/Abhiprayaa29/akademik-bot-fastapi",
    "image": "assets/projects/mlbb/control-panel-grid.webp",
    "gallery": [
      {
        "src": "assets/projects/mlbb/control-panel-grid.webp",
        "alt": "Academic automation schedule and grid overview"
      }
    ]
  },
  "simple-ar": {
    "title": "SimpleARPlacement \u2014 Interactive Augmented Reality",
    "discipline": "combined",
    "role": "AR Developer & 3D Specialist",
    "status": "Interactive Android Application",
    "problem": "Users lack intuitive spatial tools to visualize virtual 3D furniture and objects in physical architectural spaces prior to purchasing.",
    "contribution": "Developed native Android AR application with surface detection, raycast hit testing, real-time object placement, rotation, and scale gesture handling.",
    "challenge": "Maintaining rock-solid tracking stability during rapid device translation and varying ambient lighting conditions.",
    "engineering": "Unity 3D, C#, AR Foundation, ARCore point cloud classification, transform clamping scripts.",
    "design": "Minimalist on-screen gesture indicators, planar visualizers, and responsive 3D model selection carousel.",
    "result": "Smooth 60fps AR placement experience on standard Android mobile hardware.",
    "stack": [
      "Unity",
      "C#",
      "AR Foundation",
      "ARCore",
      "3D Modeling"
    ],
    "github": "https://github.com/Abhiprayaa29/simple-ar-placement",
    "image": "assets/projects/ar/simple-ar-placement-ui.webp",
    "gallery": [
      {
        "src": "assets/projects/ar/simple-ar-placement-ui.webp",
        "alt": "SimpleARPlacement Android application running surface plane detection and placement"
      }
    ]
  },
  "jogjalensa": {
    "title": "JogjaLensa \u2014 Camera & Lens Rental Marketplace",
    "discipline": "combined",
    "role": "Full-Stack Web Developer",
    "status": "Completed Web Application",
    "problem": "Local photography rental stores in Yogyakarta rely on manual WhatsApp chat bookings, causing double-booking conflicts and inventory mismatch.",
    "contribution": "Built full-stack relational database marketplace with user authentication, catalog filtering, inventory date reservation, and rental history tracking.",
    "challenge": "Managing concurrent rental dates for limited physical lens inventory.",
    "engineering": "PHP, MySQL relational schema, session-based authentication, SQL transaction safety, Apache web server.",
    "design": "Responsive Bootstrap 5.3 interface, product specification grids, and reservation checkout forms.",
    "result": "Functional end-to-end rental management platform for photography enthusiasts in Yogyakarta.",
    "stack": [
      "PHP",
      "MySQL",
      "Bootstrap",
      "JavaScript",
      "HTML/CSS"
    ],
    "github": "https://github.com/Abhiprayaa29/ProjectPemogramanWeb-Abdillah-Abhi",
    "image": "assets/jogjalensa-malioboro-small.jpg",
    "gallery": [
      {
        "src": "assets/jogjalensa-malioboro-small.jpg",
        "alt": "JogjaLensa photography catalog preview"
      }
    ]
  }
};

const shelvesData = [
  {
    "id": "hw-bound-auth",
    "title": "Hardware-Bound Authentication via Android Keystore & ECDSA P-256",
    "category": "Security & Cryptography",
    "catKey": "security",
    "tags": [
      "Android Keystore",
      "ECDSA P-256",
      "Hardware TEE",
      "Zero-Password"
    ],
    "date": "Nov 2026",
    "summary": "Architectural breakdown of eliminating shared secrets using non-exportable hardware keys inside Android TEE/StrongBox to sign cryptographic server challenges.",
    "content": "### Context & The Problem\nTraditional two-factor authentication (SMS OTP, email codes, authenticator apps) relies on shared secrets that can be phished via adversary-in-the-middle (AiTM) reverse proxies.\n\n### Cryptographic Architecture in IPGuard\n1. **Key Generation:** Keys are generated directly within the device's **Trusted Execution Environment (TEE)** or **StrongBox Keymaster** using the `NIST P-256` elliptic curve (secp256r1).\n2. **Challenge-Response Workflow:**\n   - Server issues a high-entropy CSPRNG nonce with a 60-second validity window.\n   - The Android client scans a dynamic QR code containing the session UUID and payload digest.\n   - The user authorizes via biometric prompt (Class 3 BiometricPrompt with CryptoObject).\n   - The private key signs `SHA256(nonce || timestamp || client_id)`.\n   - The server verifies the ECDSA signature using the registered public key stored in PostgreSQL.\n3. **Security Properties:**\n   - **Non-Exportability:** The private key never leaves hardware silicon, even under OS-level root compromise.\n   - **Replay Prevention:** Server invalidates the nonce upon first verification attempt.\n   - **Phishing Resistance:** The signed challenge includes origin-bound domain parameters."
  },
  {
    "id": "aead-vault-encryption",
    "title": "Authenticated Zero-Knowledge Vault Encryption with XChaCha20-Poly1305 AEAD",
    "category": "Security & Cryptography",
    "catKey": "security",
    "tags": [
      "XChaCha20-Poly1305",
      "AEAD",
      "HKDF-SHA256",
      "CSPRNG"
    ],
    "date": "Nov 2026",
    "summary": "Implementing client-side authenticated file encryption with 24-byte CSPRNG nonces and HKDF per-session key derivation to protect assets at rest.",
    "content": "### Why XChaCha20-Poly1305?\nStandard AES-GCM uses a 96-bit (12-byte) nonce. If a nonce is ever reused with the same key, both confidentiality and authenticity are completely broken. With automated bulk operations, nonce collision probability under AES-GCM becomes a tangible risk.\n\n**XChaCha20-Poly1305** extends the nonce size to **192 bits (24 bytes)**:\n- Nonces can be generated safely using CSPRNG (`os.urandom(24)`) without tracking global counters.\n- Negligible collision probability over billions of encrypted blocks.\n- Exceptional performance on CPUs lacking hardware AES-NI instructions.\n\n### Cryptographic Pipeline in IPGuard\n1. Master secret derived via **HKDF-SHA256** with unique salt and domain separation info.\n2. Digital asset stream encrypted into chunks with individual Poly1305 MAC authentication tags.\n3. Decryption rejects the payload immediately if any bit in the ciphertext or tag is modified prior to plaintext recovery."
  },
  {
    "id": "realtime-socket-state",
    "title": "Real-Time State Synchronization for Broadcast Overlays via Socket.IO",
    "category": "Systems & Architecture",
    "catKey": "architecture",
    "tags": [
      "Socket.IO",
      "OBS Browser Source",
      "Event-Driven",
      "Atomic State"
    ],
    "date": "Oct 2026",
    "summary": "Engineering a deterministic LAN state engine where tournament draft picks, countdown timers, and match scores sync to transparent OBS overlays with zero reload latency.",
    "content": "### Broadcast Engineering Requirements\nLive esports production demands zero visual glitching. If an operator updates a match score, drafts a hero, or triggers a pause, multiple 1080p OBS Browser Sources across production workstations must update concurrently within 16ms (1 frame at 60fps).\n\n### Architectural Implementation in MLBB Draft Studio\n1. **Server-Authoritative State Engine:** The browser UI never mutates state directly. All actions (pick, ban, timer tick, swap) dispatch action payloads to Express/Socket.IO backend.\n2. **Atomic Persistence:**\n   - Server writes state to a `.tmp` file and executes an atomic POSIX rename.\n   - Crash-proof state recovery prevents match rollback in power or network drops.\n3. **Decoupled Overlays:**\n   - Transparent OBS overlays (draft, scoreboard, Sponsor Edition) subscribe only to broadcast delta channels.\n   - Clean CSS transforms eliminate repaint flashes during live on-air transitions."
  },
  {
    "id": "spatial-webgis-modeling",
    "title": "Geospatial Modeling & Decision Support Systems for Landslide Susceptibility",
    "category": "Research & Spatial Computing",
    "catKey": "research",
    "tags": [
      "WebGIS",
      "Spatial Analysis",
      "DSS / SPK",
      "GeoJSON"
    ],
    "date": "Nov 2026",
    "summary": "Multi-criteria spatial analysis combining slope, lithology, rainfall data, and land cover into a WebGIS vulnerability decision support system.",
    "content": "### Problem Statement\nIn hilly regions such as Yogyakarta (Imogiri, Dlingo, Kulon Progo), landslide susceptibility assessment requires integrating heterogeneous geographic layers with varying spatial resolutions and physical scales.\n\n### Decision Support Framework in LahanAman\n1. **Layer Parameterization:**\n   - Slope gradient (DEM derived percentage categories).\n   - Soil thickness and lithological formation stability.\n   - Average monthly precipitation isohyets.\n   - Land cover classifications from multispectral satellite imagery.\n2. **Spatial Multi-Criteria Evaluation (AHP / Weighted Sum):**\n   - Normalized weight matrices assigned to each layer based on geotechnical literature.\n   - Spatial overlay calculations yielding categorized hazard indices (Low, Moderate, High, Critical).\n3. **WebGIS Interface:**\n   - Interactive GeoJSON polygon rendering with dynamic choropleth styling.\n   - Query inspector for localized coordinates with immediate mitigation guidelines."
  },
  {
    "id": "dfd-enterprise-modeling",
    "title": "Multi-Tier Workflow Modeling: DFD Levels 0\u20133 in Institutional Financial Systems",
    "category": "Systems & Architecture",
    "catKey": "architecture",
    "tags": [
      "DFD Levels 0-3",
      "System Analysis",
      "SRS",
      "Governance"
    ],
    "date": "Oct 2026",
    "summary": "Methodology for translating complex governmental budgeting regulations and multi-role approvals into rigorous Data Flow Diagrams and Software Requirements Specifications.",
    "content": "### Bridging Regulation and Engineering\nDuring research on financial management systems at UPN \u201cVeteran\u201d Yogyakarta, the core challenge was mapping hierarchical governance policies (PPK, Dean, Treasurer, Auditor) into unambiguous software contracts.\n\n### Hierarchical Data Flow Architecture\n- **Context Diagram (Level 0):** Defines external entities, system boundaries, and top-level document streams (budget proposals, disbursement receipts, accountability reports).\n- **DFD Level 1:** Deconstructs the system into core operational processes: (1.0) Proposal Ingestion, (2.0) Verification & Validation, (3.0) Multi-Tier Approval, (4.0) Disbursement, (5.0) Audit & Accountability.\n- **DFD Level 2 & 3:** Unpacks validation mechanics: boundary limits, account code verification, digital voucher generation, and rejection rollback branches.\n- **Outcome:** Comprehensive SRS that eliminates scope ambiguity before frontend prototype and backend schema development."
  },
  {
    "id": "design-systems-enterprise",
    "title": "Design Systems & Token Hierarchy in Figma for Complex Enterprise Workflows",
    "category": "Design Fundamentals",
    "catKey": "design",
    "tags": [
      "Design Systems",
      "Figma Variables",
      "Tokens",
      "Enterprise UI"
    ],
    "date": "Oct 2026",
    "summary": "Building scalable design token hierarchies across color semantics, typography scales, elevation, and component variants for high-density administrative software.",
    "content": "### The Challenge of High-Density Enterprise UI\nAdministrative platforms (like university budgeting and audit trackers) suffer when designers treat them like minimalist consumer apps. They require high data density, clear visual hierarchy, and unambiguous status communication.\n\n### Design Token Architecture\n1. **Primitive Tokens:** Raw values (`blue-500: #3b82f6`, `slate-900: #0f172a`).\n2. **Semantic Tokens:** Purpose-bound tokens (`color-action-primary: {blue-500}`, `color-surface-elevated: {slate-900}`).\n3. **Component Tokens:** Scoped parameters (`table-header-bg`, `status-pill-badge-text`).\n4. **Interactive Variants:** In Figma, states (Default, Hover, Active, Disabled, Focus) are coupled to keyboard navigation requirements, ensuring high-fidelity interactive prototypes match production frontend components 1:1."
  },
  {
    "id": "cryptographic-steganography",
    "title": "Invisible Cryptographic Watermarking: LSB Steganography & Ed25519 Signatures",
    "category": "Security & Cryptography",
    "catKey": "security",
    "tags": [
      "Steganography",
      "LSB",
      "Ed25519",
      "Audit Hash Chain"
    ],
    "date": "Nov 2026",
    "summary": "Embedding verifiable, tamper-evident authorship proofs directly into the pixel LSB channel of PNG master files backed by asymmetric digital signatures.",
    "content": "### Overcoming Visible Watermarking Flaws\nVisible watermarks ruin master artwork and are readily removed by AI inpainting. Metadata headers (EXIF) are routinely deleted by messaging apps and social media platforms.\n\n### The LSB Cryptographic Framing Pipeline\n1. **Binary Packet Framing:** Header `IPGW` (4 bytes) + Version (1 byte) + License ID (16 bytes UUID) + SHA-256 Digest of Original (32 bytes) + Ed25519 Signature (64 bytes).\n2. **Embedding:** The bitstream is written across the Least Significant Bits of the RGB channels in 24-bit PNG files. The perceptual visual change is zero (delta E < 0.1).\n3. **Audit Hash Chain:** Every embedding and verification event generates a SHA-256 hash linked to the previous transaction hash, creating an immutable internal audit ledger."
  },
  {
    "id": "academic-automation-fastapi",
    "title": "Automating Academic Workflows: Event-Driven Telegram Bots with FastAPI",
    "category": "Automation & Tooling",
    "catKey": "automation",
    "tags": [
      "FastAPI",
      "Telegram Bot API",
      "Cron Scheduling",
      "Webhooks"
    ],
    "date": "Sep 2026",
    "summary": "Designing a reliable notification and assignment sync service using asynchronous webhooks, cron scheduling, and Telegram Bot API.",
    "content": "### Workflow Motivation\nBalancing university coursework, research assistantships, and independent software development requires zero-friction task management. Relying on manually checking university portals (SPADA) leads to missed deadlines.\n\n### Technical Implementation\n1. **Asynchronous Gateway:** FastAPI handles incoming webhook requests from university alert feeds and user slash commands.\n2. **Scheduled Dispatch Engine:** Async background tasks query course API endpoints, compute pending assignment deltas, and format daily briefings.\n3. **Telegram Interface:** Interactive inline keyboards allow users to mark assignments complete, snooze reminders, or request syllabus outlines on demand."
  },
  {
    "id": "unity-ar-surface-tracking",
    "title": "Surface Plane Detection & Spatial Constraints in AR Foundation & ARCore",
    "category": "Research & Spatial Computing",
    "catKey": "research",
    "tags": [
      "Unity",
      "C#",
      "AR Foundation",
      "ARCore"
    ],
    "date": "Oct 2026",
    "summary": "Implementation details of surface plane classification, raycast hit testing, gesture manipulation, and spatial anchor stabilization on Android AR devices.",
    "content": "### Spatial Computing Mechanics\nAugmented reality requires mapping digital 3D meshes into real-world geometry with physical plausibility.\n\n### Implementation in SimpleARPlacement\n1. **AR Plane Manager:** Tracks feature points detected by the device camera and IMU sensors, classifying horizontal surfaces (floors, tabletops).\n2. **Raycasting Hit Testing:** When a screen tap occurs, `ARRaycastManager` fires a vector into the point cloud to find the nearest valid plane intersection.\n3. **Transform Constraints:** Custom C# scripts constrain rotation to the Y-axis (preventing unnatural tilting) and clamp scale factors within safe physical bounds."
  },
  {
    "id": "sqli-exploitation-defense",
    "title": "Time-Based Blind SQLi Exploitation Proof-of-Concept & PDO Parameterization",
    "category": "Security & Cryptography",
    "catKey": "security",
    "tags": [
      "SQLi",
      "Security Research",
      "PDO",
      "Defensive Engineering"
    ],
    "date": "Apr 2026",
    "summary": "Technical analysis of inferring database schema via sleep latency anomalies under zero-output conditions, and defensive mitigation via prepared statements.",
    "content": "### Exploitation Mechanics (Research Laboratory)\nUnder time-based blind SQL injection, the target application reveals no error messages and no database output in the HTTP response. Data extraction is achieved by evaluating boolean conditions paired with delay commands (`WAITFOR DELAY` / `SLEEP()`):\n- If `SUBSTRING(user(), 1, 1) = 'a'`, sleep 5 seconds; otherwise return immediately.\n- By sampling HTTP response latency across binary search iterations, full ASCII strings can be reconstructed bit by bit.\n\n### Comprehensive Defense\n1. **Prepared Statements (PDO):** Code and data must be strictly separated. Query plan compilation occurs before input substitution.\n2. **Principle of Least Privilege:** Database application user accounts must lack schema manipulation or table dump privileges.\n3. **Strict Type Casting:** Enforce strict integer parsing for numeric identifiers."
  },
  {
    "id": "data-science-foundations",
    "title": "Data Science Foundations: Exploratory Data Analysis & Statistical Inference",
    "category": "Engineering Fundamentals",
    "catKey": "engineering",
    "tags": [
      "Data Science",
      "Python",
      "Pandas",
      "Statistical Inference"
    ],
    "date": "Aug 2026",
    "summary": "Key principles of cleaning tabular data, handling missing distributions, detecting outliers with IQR, and hypothesis testing.",
    "content": "### The Foundations of Empirical Analysis\nBefore applying predictive algorithms or machine learning classifiers, understanding the data distribution is paramount.\n\n### Core Analytical Phases\n1. **Data Wrangling:** Imputing missing values using median (for skewed distributions) or mode (for categorical factors), detecting duplicates, and normalizing scales.\n2. **Exploratory Data Analysis (EDA):** Visualizing feature covariance via heatmaps, box plots for IQR outlier detection, and kernel density estimates.\n3. **Statistical Validation:** Running t-tests or Chi-square independence tests to ensure observed differences represent true population signals rather than sampling variance."
  },
  {
    "id": "ai-agents-skillsbuild",
    "title": "Building Autonomous AI Agents: Architecture, Tool Calling & Structured Prompts",
    "category": "Automation & Tooling",
    "catKey": "automation",
    "tags": [
      "AI Agents",
      "Tool Calling",
      "ReAct Framework",
      "IBM SkillsBuild"
    ],
    "date": "Oct 2026",
    "summary": "Architectural breakdown of autonomous agents: reasoning loops, deterministic tool invocation, structured JSON schemas, and safety boundaries.",
    "content": "### The Agentic Paradigm\nUnlike static single-turn prompt-response LLM usage, autonomous agents operate inside an iterative execution loop: **Reason \u2192 Plan \u2192 Act \u2192 Observe \u2192 Conclude**.\n\n### Key Architectural Pillars\n1. **Reasoning Engine (ReAct):** Breaking down high-level user intents into sequential sub-tasks.\n2. **Tool Definition via JSON Schema:** Declaring parameter schemas that the language model can invoke deterministically with validated arguments.\n3. **Observation Feedback:** Executing the tool locally, capturing the exact stdout/stderr or API return, and re-feeding it into the model context.\n4. **Safety Boundaries:** Enforcing timeout limits, maximum recursion loops, and strict sandboxed execution to prevent unbounded resource consumption."
  },
  {
    "id": "blender-3d-pipeline",
    "title": "3D Asset Modeling & Spatial Pipeline in Blender for Interactive Real-Time Engines",
    "category": "Creative & Visual Design",
    "catKey": "creative",
    "tags": [
      "Blender 3D",
      "PBR Shading",
      "Mesh Topology",
      "Unity Pipeline"
    ],
    "date": "May 2026",
    "summary": "Low-poly mesh optimization, UV unwrapping, PBR material creation, and glTF/FBX export pipelines targeting mobile AR rendering.",
    "content": "### Balancing Fidelity and Mobile AR Performance\nMobile AR engines run under stringent thermal and battery limits. Models with excessive polygon density or uncompressed 4K textures trigger severe frame-rate drops.\n\n### Modeling Pipeline\n1. **Topology Optimization:** Modeling with clean quads, removing non-manifold vertices, and utilizing normal baking to capture high-resolution bevels onto lightweight meshes.\n2. **PBR Texturing:** Packaging Metallic, Roughness, and Ambient Occlusion into a single channel-packed texture map (ORM) to minimize draw calls.\n3. **Unity glTF/FBX Ingestion:** Rigorous origin pivot placement at ground contact point to ensure AR surface raycasts place objects seamlessly on physical planes."
  },
  {
    "id": "ucd-national-competition",
    "title": "User-Centered Design & Usability Testing in High-Stakes National UX Competitions",
    "category": "Design Fundamentals",
    "catKey": "design",
    "tags": [
      "UCD",
      "Usability Testing",
      "UX Research",
      "Find IT! UGM"
    ],
    "date": "May 2026",
    "summary": "Methodological walkthrough of empathy mapping, problem framing, iterative prototyping, and narrative video production for Find IT! UGM 2026.",
    "content": "### Research Methodology\nEntering a national-level UX design competition requires going beyond aesthetic mockups to demonstrate empirical user need validation.\n\n### Phased Execution (Find IT! UGM 2026)\n1. **Empathy Research:** Qualitative interviews and persona mapping to identify acute friction points in digital workflows.\n2. **Information Architecture & User Flows:** Mapping user journey blueprints, edge-case recovery flows, and zero-state screens.\n3. **High-Fidelity Prototyping:** Building interactive Figma components utilizing auto-layout, conditional logic, and micro-interactions.\n4. **Validation & Narrative Production:** Conducting usability tests (System Usability Scale) and producing an engaging visual demonstration video that won **Best Video** nationally."
  }
];

// -----------------------------------------------------------------------------
// 2. DOM UTILITIES & HELPERS
// -----------------------------------------------------------------------------
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// Current year
const yearEl = $('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Simple Markdown-to-HTML parser for editorial Shelf reading
const parseMarkdown = (md) => {
  if (!md) return '';
  let html = '';
  const lines = md.split('\n');
  let inList = false;
  let inCode = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code blocks
    if (line.startsWith('```')) {
      if (inCode) {
        html += '</code></pre>';
        inCode = false;
      } else {
        html += '<pre><code>';
        inCode = true;
      }
      continue;
    }
    if (inCode) {
      html += line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '\n';
      continue;
    }

    // Headings
    if (line.startsWith('### ')) {
      if (inList) { html += '</ul>'; inList = false; }
      html += `<h3>${formatInline(line.slice(4))}</h3>`;
      continue;
    }
    if (line.startsWith('## ')) {
      if (inList) { html += '</ul>'; inList = false; }
      html += `<h2>${formatInline(line.slice(3))}</h2>`;
      continue;
    }

    // Unordered lists
    if (line.startsWith('- ') || line.startsWith('* ')) {
      if (!inList) { html += '<ul>'; inList = true; }
      html += `<li>${formatInline(line.slice(2))}</li>`;
      continue;
    }

    // Numbered lists
    const numMatch = line.match(/^(\d+)\.\s+(.*)/);
    if (numMatch) {
      if (!inList) { html += '<ol>'; inList = true; }
      html += `<li>${formatInline(numMatch[2])}</li>`;
      continue;
    }

    // Close list if line is empty or paragraph
    if (inList && !line.trim()) {
      html += '</ul>';
      inList = false;
      continue;
    }

    // Empty lines
    if (!line.trim()) continue;

    // Normal paragraph
    html += `<p>${formatInline(line)}</p>`;
  }

  if (inList) html += '</ul>';
  if (inCode) html += '</code></pre>';
  return html;
};

const formatInline = (text) => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
};

// -----------------------------------------------------------------------------
// 3. NAVIGATION & SCROLL SPY
// -----------------------------------------------------------------------------
const menuBtn = $('#menuBtn');
const mobileNav = $('#mobileNav');

const setMenu = (open) => {
  if (!menuBtn || !mobileNav) return;
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menuBtn.textContent = open ? '✕' : '☰';
  mobileNav.classList.toggle('open', open);
  document.documentElement.classList.toggle('menu-open', open);
};

menuBtn?.addEventListener('click', () => {
  setMenu(menuBtn.getAttribute('aria-expanded') !== 'true');
});

$$('#mobileNav a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (menuBtn?.getAttribute('aria-expanded') === 'true') setMenu(false);
    if (projectDialog?.open) projectDialog.close();
    if (shelfDialog?.open) shelfDialog.close();
    if (certDialog?.open) certDialog.close();
  }
});

const sections = $$('main section[id]');
const navLinks = $$('.desktop-nav a, .mobile-nav-inner a[href^="#"]');

const markActiveNav = (id) => {
  navLinks.forEach((a) => {
    if (a.getAttribute('href') === '#' + id) a.setAttribute('aria-current', 'true');
    else a.removeAttribute('aria-current');
  });
};

const handleScrollSpy = () => {
  const scrollPos = window.scrollY + 100;
  for (let i = sections.length - 1; i >= 0; i--) {
    const s = sections[i];
    if (s.offsetTop <= scrollPos) {
      markActiveNav(s.id);
      break;
    }
  }
};

window.addEventListener('scroll', handleScrollSpy, { passive: true });
handleScrollSpy();

// -----------------------------------------------------------------------------
// 4. SPLIT HERO INTERACTION (Adham Dannaway inspired)
// -----------------------------------------------------------------------------
const splitHero = $('.split-hero');
const splitDesigner = $('.split-designer');
const splitCoder = $('.split-coder');

if (splitHero && splitDesigner && splitCoder) {
  splitDesigner.addEventListener('mouseenter', () => {
    splitHero.classList.add('hover-designer');
    splitHero.classList.remove('hover-coder');
  });
  splitDesigner.addEventListener('mouseleave', () => {
    splitHero.classList.remove('hover-designer');
  });

  splitCoder.addEventListener('mouseenter', () => {
    splitHero.classList.add('hover-coder');
    splitHero.classList.remove('hover-designer');
  });
  splitCoder.addEventListener('mouseleave', () => {
    splitHero.classList.remove('hover-coder');
  });
}

// -----------------------------------------------------------------------------
// 5. WORK SHOWCASE FILTERING & CASE STUDY MODAL
// -----------------------------------------------------------------------------
const workFilterBtns = $$('.filter-btn[data-work-filter]');
const workCards = $$('.work-card');

const setWorkFilter = (filter) => {
  workFilterBtns.forEach((btn) => {
    const isActive = btn.dataset.workFilter === filter;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', String(isActive));
  });

  workCards.forEach((card) => {
    const disc = card.dataset.discipline;
    const match = filter === 'all' || disc === filter || (filter === 'combined' && disc === 'combined');
    card.classList.toggle('is-filtered-out', !match);
  });
};

workFilterBtns.forEach((btn) => {
  btn.addEventListener('click', () => setWorkFilter(btn.dataset.workFilter));
});

// Quick jump buttons in hero
$('#heroDesignerBtn')?.addEventListener('click', () => setWorkFilter('design'));
$('#heroCoderBtn')?.addEventListener('click', () => setWorkFilter('development'));

// Project Case Study Modal
const projectDialog = $('#projectDialog');
const openCaseStudy = (key) => {
  const p = projectsData[key];
  if (!p || !projectDialog) return;

  $('#caseTitle').textContent = p.title;
  $('#caseRole').textContent = p.role;
  $('#caseStatus').textContent = p.status;
  $('#caseDiscipline').textContent = p.discipline.toUpperCase();
  $('#caseProblem').textContent = p.problem;
  $('#caseContribution').textContent = p.contribution;
  $('#caseChallenge').textContent = p.challenge;
  $('#caseEngineering').textContent = p.engineering;
  $('#caseDesign').textContent = p.design || 'Intuitive user interface architecture aligned with technical constraints.';
  $('#caseResult').textContent = p.result;

  const stackEl = $('#caseStack');
  if (stackEl) {
    stackEl.innerHTML = p.stack.map((t) => `<span class="tech-chip">${t}</span>`).join(' ');
  }

  const galleryEl = $('#caseGallery');
  if (galleryEl) {
    if (p.gallery && p.gallery.length) {
      galleryEl.innerHTML = p.gallery
        .map((img) => `<img src="${img.src}" alt="${img.alt}" loading="lazy">`)
        .join('');
      galleryEl.hidden = false;
    } else {
      galleryEl.hidden = true;
    }
  }

  const githubLink = $('#caseGithub');
  if (githubLink) {
    githubLink.href = p.github;
    githubLink.hidden = !p.github;
  }

  projectDialog.showModal();
};

workCards.forEach((card) => {
  card.addEventListener('click', (e) => {
    if (e.target.closest('a')) return;
    openCaseStudy(card.dataset.project);
  });
});

$$('.work-open-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const key = btn.dataset.project || btn.closest('.work-card')?.dataset.project;
    if (key) openCaseStudy(key);
  });
});

$('#dialogClose')?.addEventListener('click', () => projectDialog?.close());
projectDialog?.addEventListener('click', (e) => {
  if (e.target === projectDialog) projectDialog.close();
});

// -----------------------------------------------------------------------------
// 6. SHELVES — DIGITAL GARDEN (Tania Rascia inspired)
// -----------------------------------------------------------------------------
const shelvesList = $('#shelvesList');
const searchInput = $('#shelfSearch');
const catFilterBtns = $$('.shelf-cat-btn');
const shelfCountBadge = $('#shelfCountBadge');
const shelfDialog = $('#shelfDialog');

let activeCategory = 'all';
let searchQuery = '';

const renderShelves = () => {
  if (!shelvesList) return;

  const filtered = shelvesData.filter((entry) => {
    const matchCat = activeCategory === 'all' || entry.catKey === activeCategory;
    if (!matchCat) return false;
    if (!searchQuery) return true;

    const q = searchQuery.toLowerCase();
    const matchTitle = entry.title.toLowerCase().includes(q);
    const matchSummary = entry.summary.toLowerCase().includes(q);
    const matchCategory = entry.category.toLowerCase().includes(q);
    const matchTags = entry.tags.some((t) => t.toLowerCase().includes(q));
    return matchTitle || matchSummary || matchCategory || matchTags;
  });

  if (shelfCountBadge) {
    shelfCountBadge.textContent = `${filtered.length} entries shown`;
  }

  if (filtered.length === 0) {
    shelvesList.innerHTML = `
      <div class="shelves-empty">
        <p>No shelf notes found matching "<strong>${searchQuery}</strong>".</p>
      </div>`;
    return;
  }

  shelvesList.innerHTML = filtered
    .map(
      (s) => `
    <article class="shelf-row" data-id="${s.id}" tabindex="0" role="button" aria-label="Open note: ${s.title}">
      <div class="shelf-meta">
        <span class="shelf-category-badge">${s.category}</span>
        <span class="shelf-date">${s.date}</span>
      </div>
      <div class="shelf-main">
        <h3 class="shelf-title">${s.title}</h3>
        <p class="shelf-summary">${s.summary}</p>
        <div class="shelf-tags">
          ${s.tags.map((t) => `<span class="shelf-tag">${t}</span>`).join('')}
        </div>
      </div>
      <div class="shelf-arrow" aria-hidden="true">→</div>
    </article>
  `,
    )
    .join('');

  // Attach click to open editorial reading view
  $$('.shelf-row', shelvesList).forEach((row) => {
    const handleOpen = () => openShelfArticle(row.dataset.id);
    row.addEventListener('click', handleOpen);
    row.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleOpen();
      }
    });
  });
};

const openShelfArticle = (id) => {
  const item = shelvesData.find((s) => s.id === id);
  if (!item || !shelfDialog) return;

  $('#shelfArticleCat').textContent = item.category;
  $('#shelfArticleTitle').textContent = item.title;
  $('#shelfArticleDate').textContent = item.date;
  $('#shelfArticleTags').textContent = item.tags.join(' · ');
  $('#shelfArticleBody').innerHTML = parseMarkdown(item.content);

  shelfDialog.showModal();
};

$('#shelfDialogClose')?.addEventListener('click', () => shelfDialog?.close());
shelfDialog?.addEventListener('click', (e) => {
  if (e.target === shelfDialog) shelfDialog.close();
});

// Category filtering
catFilterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    catFilterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.cat;
    renderShelves();
  });
});

// Real-time search with input debounce
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    renderShelves();
  });
}

renderShelves();

// -----------------------------------------------------------------------------
// 7. COPY EMAIL TO CLIPBOARD
// -----------------------------------------------------------------------------
const copyBtn = $('#copyEmail');
const copyLabel = $('#copyLabel');

copyBtn?.addEventListener('click', async () => {
  const email = 'abdillahabhi12@gmail.com';
  try {
    await navigator.clipboard.writeText(email);
    if (copyLabel) copyLabel.textContent = 'Email copied!';
    setTimeout(() => {
      if (copyLabel) copyLabel.textContent = 'Copy email';
    }, 2500);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});

// Certificate Dialog
const certDialog = $('#certDialog');
$$('.cert-thumb').forEach((btn) => {
  btn.addEventListener('click', () => {
    const img = $('#certImage');
    if (img) {
      img.src = `assets/sertifikat/preview/${btn.dataset.cert}-full.webp`;
      img.alt = `Certificate: ${btn.dataset.title}`;
    }
    const title = $('#certTitle');
    if (title) title.textContent = btn.dataset.title;
    certDialog?.showModal();
  });
});
$('#certClose')?.addEventListener('click', () => certDialog?.close());
certDialog?.addEventListener('click', (e) => {
  if (e.target === certDialog) certDialog.close();
});

// -----------------------------------------------------------------------------
// 8. CLOUDFLARE PAGES VISITOR TRACKING (First-Party D1 Integration)
// -----------------------------------------------------------------------------
const VISIT_ID_KEY = 'abhi_vid';
const VISIT_COOKIE = 'abhi_vid';
const VISIT_ID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const makeVisitorId = () => {
  if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
};

const readVisitCookie = () => {
  const m = document.cookie.match(/(?:^|;\s*)abhi_vid=([^;]+)/);
  return m ? decodeURIComponent(m[1]) : '';
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
    } catch {}
  }
  try {
    if (!VISIT_ID_RE.test(readVisitCookie())) {
      document.cookie = `${VISIT_COOKIE}=${encodeURIComponent(id)}; Path=/; Max-Age=31536000; SameSite=Lax`;
    }
  } catch {}
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
    el.textContent = `${unique} unique visitors · ${total} visits · ${returning} returning`;
    el.hidden = false;
    window.__stats = data;
  } catch {}
};

const startTracking = () => {
  reportVisit();
  reportStats();
};

if (document.readyState === 'complete') startTracking();
else window.addEventListener('load', startTracking, { once: true });
