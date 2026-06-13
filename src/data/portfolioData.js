/**
 * portfolioData.js
 * ─────────────────────────────────────────────
 * Single source of truth for ALL portfolio content.
 * Edit this file to update your portfolio — no need
 * to touch any component files.
 */

/* ── Personal Info ─────────────────────────── */
export const PERSONAL = {
  name:      "Murali A",
  shortName: "Murali",
  role:      "Full-Stack Web Developer",
  location:  "Erode, Tamil Nadu, India",
  email:     "muraliofficial68@gmail.com",
  phone:     "+91 6383217328",
  portfolio: "https://my-self-murali.vercel.app",
  github:    "https://github.com/muraliofficial",
  linkedin:  "https://www.linkedin.com/in/murali-a-096738297/",
  resume:    "/Murali_A.pdf",
  bio: [
    "I'm a Full-Stack Web Developer with 3+ years of experience building high-performance web architectures and fluid user experiences. My core stack revolves around React.js, Vue 3, Tailwind CSS v4, and Node.js — backed by Firebase for cloud infrastructure.",
    "I thrive at the intersection of clean code and stunning design, optimizing for both developer velocity and end-user delight. Currently engineering enterprise-grade systems at BMTechnovations, Erode.",
  ],
};

/* ── Navigation Links ──────────────────────── */
export const NAV_LINKS = [
  { label: "Home",       href: "#hero",       icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { label: "About",      href: "#about",      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { label: "Skills",     href: "#skills",     icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  { label: "Experience", href: "#experience", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { label: "Projects",   href: "#projects",   icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
  { label: "Contact",    href: "#contact",    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
];

/* ── Hero Tech Stack Chips ─────────────────── */
export const TECH_STACK = [
  { name: "React.js",    color: "#61DAFB", glyph: "⚛" },
  // { name: "Next.js",     color: "#ffffff", glyph: "▲" },
  { name: "Vue 3",       color: "#42b883", glyph: "◈" },
  { name: "Java Script", color: "#FFCA28", glyph: "✨" },
  { name: "Tailwind v4", color: "#38BDF8", glyph: "◉" },
  { name: "Node.js",     color: "#8CC84B", glyph: "⬡" },
  { name: "Firebase",    color: "#FFCA28", glyph: "🔥" },
  { name: "MongoDB",     color: "#4DB33D", glyph: "◆" },
  // { name: "Electron.js", color: "#9FEAF9", glyph: "⚡" },
];

/* ── Hero Typewriter Roles ─────────────────── */
export const ROLES = [
  "Full-Stack Web Developer",
  "React & Vue Specialist",
  "Tailwind CSS v4 Architect",
  "Firebase Cloud Engineer",
];

/* ── Hero Stats ────────────────────────────── */
export const STATS = [
  { label: "Years Experience", value: 3,  suffix: "+" },
  { label: "Projects Shipped", value: 10, suffix: "+" },
  { label: "Tech Stack Tools", value: 20, suffix: "+" },
  { label: "Best Employee",    value: 1,  suffix: "🏆" },
];

/* ── Skills Categories ─────────────────────── */
export const SKILL_CATEGORIES = [
  {
    label:     "Frontend Frameworks",
    icon:      "⚛",
    accent:    "#61DAFB",
    accentBg:  "rgba(97,218,251,0.08)",
    accentDim: "rgba(97,218,251,0.3)",
    skills: [
      { name: "React.js",      icon: "⚛" },
      { name: "Vue 3",         icon: "◈" },
      { name: "Handlebars.js", icon: "🖐" },
      { name: "JavaScript",    icon: "✨" },
      // { name: "Next.js",       icon: "▲" },
    ],
  },
  {
    label:     "UI & Styling",
    icon:      "🎨",
    accent:    "#38BDF8",
    accentBg:  "rgba(56,189,248,0.08)",
    accentDim: "rgba(56,189,248,0.3)",
    skills: [
      { name: "HTML5",           icon: "🏗" },
      { name: "CSS3",            icon: "🎨" },
      { name: "Tailwind CSS v4", icon: "◉" },
      { name: "Bootstrap",       icon: "⚡" },
    ],
  },
  {
    label:     "Backend & APIs",
    icon:      "⬡",
    accent:    "#8CC84B",
    accentBg:  "rgba(140,200,75,0.08)",
    accentDim: "rgba(140,200,75,0.3)",
    skills: [
      { name: "Node.js",    icon: "⬡" },
      { name: "Express.js", icon: "🚂" },
      { name: "REST APIs",  icon: "🔗" },
      { name: "Axios",      icon: "📡" },
    ],
  },
  {
    label:     "Cloud & Database",
    icon:      "🔥",
    accent:    "#FFCA28",
    accentBg:  "rgba(255,202,40,0.08)",
    accentDim: "rgba(255,202,40,0.3)",
    skills: [
      { name: "Firebase",   icon: "🔥" },
      { name: "MongoDB",    icon: "◆"  },
      { name: "SQL Server", icon: "🗄" },
    ],
  },
  {
    label:     "Dev Tools & Workflow",
    icon:      "🛠",
    accent:    "#a78bfa",
    accentBg:  "rgba(167,139,250,0.08)",
    accentDim: "rgba(167,139,250,0.3)",
    skills: [
      { name: "VS Code",      icon: "📝" },
      { name: "Cursor AI",    icon: "🤖" },
      { name: "Claude AI",    icon: "🧠" },
      { name: "Git & GitHub", icon: "🌿" },
      { name: "SourceTree",   icon: "🌲" },
      { name: "Postman API",  icon: "📮" },
    ],
  },
];

/* ── Work Experience ───────────────────────── */
export const JOBS = [
  {
    role:      "Web Developer",
    company:   "BMTechnovations",
    location:  "Erode",
    period:    "2025 – Present",
    current:   true,
    highlights: [
      "Engineering dynamic enterprise web systems using Vue 3, Tailwind CSS v4 & Handlebars.js",
      // "Building native hybrid desktop applications using Electron.js",
      "Managing cloud DB streams, secure user sessions & real-time endpoints via Firebase",
      "Optimizing sprint velocity with Cursor AI, managing collaborative Git trees via SourceTree",
    ],
    award: null,
  },
  {
    role:      "Front-End Developer Intern",
    company:   "Segolsys Software & Technology",
    location:  "Coimbatore",
    period:    "Mar 2024 – Sep 2024",
    current:   false,
    highlights: [
      "Developed and optimized cross-browser compliant user interfaces using HTML, CSS, JavaScript & Bootstrap",
    ],
    award: null,
  },
  {
    role:      "Software Engineer",
    company:   "Optech Software India Pvt. Ltd.",
    location:  "Coimbatore",
    period:    "Dec 2022 – Dec 2023",
    current:   false,
    highlights: [
      "Debugged complex Billing ERP software and handled high-tier corporate technical resolutions",
    ],
    award: "Best Employee of the Year — 2023",
  },
];

/* ── Projects ──────────────────────────────── */
export const PROJECTS = [
  {
    name:        "BuyKart",
    badge:       "⭐ Featured",
    subtitle:    "Full-Stack E-Commerce & Inventory Management",
    icon:        "🛒",
    description: "A dual-sided web architecture featuring a secure consumer storefront for ordering, paired with a heavy-duty administrative dashboard for real-time stock mutations, inventory management, and full lifecycle delivery tracking.",
    stack:       ["HTML5", "Tailwind CSS", "JavaScript", "Node.js", "Express.js", "Firebase"],
    link:        "https://buykart-pearl.vercel.app",
    accent:      "#7c3aed",
    accentBg:    "rgba(124,58,237,0.08)",
    accentDim:   "rgba(124,58,237,0.45)",
    featured:    true,
  },
  // {
  //   name:        "Senthoora Fancy Store",
  //   badge:       "Interactive",
  //   subtitle:    "Interactive Business Platform",
  //   icon:        "✨",
  //   description: "High-outreach business blogging platform tailored with fluid, physics-based scroll triggers and micro-interactions for a premium user experience.",
  //   stack:       ["React.js", "Semantic UI React", "AOS", "React Spring"],
  //   link:        null,
  //   accent:      "#38BDF8",
  //   accentBg:    "rgba(56,189,248,0.08)",
  //   accentDim:   "rgba(56,189,248,0.35)",
  //   featured:    false,
  // },
  {
    name:        "EasyMart",
    badge:       "UI",
    subtitle:    "Online Grocery App",
    icon:        "🛍",
    description: "Clean client-facing e-commerce UI executing fundamental CRUD operations for swift item management and cart state handling.",
    stack:       ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link:        "https://easymart-shopping.netlify.app/",
    accent:      "#4DB33D",
    accentBg:    "rgba(77,179,61,0.08)",
    accentDim:   "rgba(77,179,61,0.35)",
    featured:    false,
  },
];

/* ── Education ─────────────────────────────── */
export const EDUCATION = {
  degree:  "B.Sc. Information Technology",
  college: "Sri Vasavi College, Erode",
  period:  "2019 – 2022",
  score:   "84%",
};

/* ── Achievements ──────────────────────────── */
export const ACHIEVEMENTS = [
  { emoji: "🏆", title: "Best Employee of the Year", sub: "Optech Software India Pvt. Ltd. · 2023" },
  { emoji: "🥈", title: "Runner-up — Papyrus",       sub: "Technical Presentation Competition" },
  { emoji: "📸", title: "First Prize — Photography", sub: "College Photography Competition" },
];

/* ── Stable Particles (pre-computed, no random on render) ── */
export const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  id:       i,
  size:     1.5 + (i * 0.37) % 3,
  left:     (i * 6.25) % 100,
  duration: 10 + (i * 1.3) % 14,
  delay:    (i * 0.75) % 12,
  opacity:  0.2 + (i * 0.02) % 0.5,
}));
