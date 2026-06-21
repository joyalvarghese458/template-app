export const OWNER = {
  name: "Theo Marsh",
  title: "UI/UX & Graphic Designer",
  tagline: "Design that grabs attention and earns trust.",
  subtagline:
    "I design interfaces, brands, and the small moments in between — turning rough ideas into products people enjoy using and brands people remember.",
  email: "theo.marsh@example.com",
  dribbble: "https://dribbble.com/theomarsh",
  behance: "https://behance.net/theomarsh",
  linkedin: "https://linkedin.com/in/theomarsh",
  instagram: "https://instagram.com/theomarsh.design",
  resumeUrl: "#",
  location: "Brooklyn, NY",
  availability: "Open to freelance & full-time roles",
  stats: [
    { value: "80+", label: "Projects shipped" },
    { value: "6", label: "Years designing" },
    { value: "24", label: "Brands launched" },
    { value: "12", label: "Design awards" },
  ],
};

export const ABOUT = {
  intro:
    "I'm a UI/UX and graphic designer who moves fluidly between pixel-perfect interfaces and bold brand identities. I care about the system underneath the surface — the grid, the type scale, the states nobody notices until they're missing.",
  philosophy:
    "Good design disappears. Great design is felt. I prototype fast, test on real users early, and never ship a screen I can't explain in one sentence.",
  focus: [
    "Product & UI/UX design",
    "Brand identity & art direction",
    "Design systems & component libraries",
    "Motion & micro-interactions",
  ],
};

export const PROCESS = [
  { step: "01", title: "Discover", desc: "Stakeholder interviews, competitor teardown, and a clear brief everyone agrees on." },
  { step: "02", title: "Define", desc: "Sitemaps, user flows, and a content-first wireframe before any visual design." },
  { step: "03", title: "Design", desc: "High-fidelity UI, design tokens, and an interactive prototype in Figma." },
  { step: "04", title: "Deliver", desc: "Dev handoff, a documented design system, and QA through to launch." },
];

export const WORK = [
  {
    id: "01",
    title: "Finch — Banking App Redesign",
    category: "Product Design · Fintech",
    description:
      "Reimagined a clunky banking app into a calm, card-based experience used by 200K+ monthly active users.",
    tools: ["Figma", "Maze", "Lottie"],
    outcomes: [
      "+38% task completion rate",
      "App Store rating 3.1 → 4.7",
      "Cut onboarding drop-off by 52%",
    ],
  },
  {
    id: "02",
    title: "Marble & Co. — Brand Identity",
    category: "Branding · Hospitality",
    description:
      "Full identity system for a boutique hotel group — logo, type system, signage, and a tone-of-voice guide.",
    tools: ["Illustrator", "InDesign", "Figma"],
    outcomes: [
      "Rolled out across 6 properties",
      "Featured in Brand New",
      "40% increase in direct bookings",
    ],
  },
  {
    id: "03",
    title: "Loop — Design System",
    category: "Design Systems · SaaS",
    description:
      "Built a token-based design system and component library shared across 5 product teams.",
    tools: ["Figma", "Storybook", "Tokens Studio"],
    outcomes: [
      "Cut design-to-dev handoff time by 60%",
      "210+ documented components",
      "Adopted by 5 squads in 1 quarter",
    ],
  },
  {
    id: "04",
    title: "Pulse — Fitness App Concept",
    category: "UI/UX · Mobile",
    description:
      "Self-initiated concept exploring playful micro-interactions for a habit-building fitness app.",
    tools: ["Figma", "After Effects", "Principle"],
    outcomes: [
      "Featured on Muzli & Lapa Ninja",
      "12K+ Figma community likes",
      "Prototype tested with 30 users",
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Senior Product Designer",
    company: "Northstar Labs",
    period: "2022 — Present",
    description: "Lead design for the core banking app, mentor two junior designers, and own the design system.",
    highlights: ["Design Systems", "Mentorship", "Product Strategy"],
  },
  {
    role: "UI/UX Designer",
    company: "Studio Mast",
    period: "2019 — 2022",
    description: "Designed brand identities and digital products for hospitality and consumer clients.",
    highlights: ["Branding", "Art Direction", "Client Workshops"],
  },
  {
    role: "Junior Designer",
    company: "Freelance",
    period: "2018 — 2019",
    description: "Took on freelance logo, web, and print projects while building a personal practice.",
    highlights: ["Logo Design", "Web Design", "Print"],
  },
];

export const SKILLS: Record<string, string[]> = {
  "Design": ["Figma", "Adobe XD", "Illustrator", "Photoshop", "InDesign"],
  "Prototyping & Motion": ["Framer", "Principle", "After Effects", "Lottie"],
  "Systems & Handoff": ["Design Tokens", "Storybook", "Zeroheight", "Notion"],
  "Craft": ["Typography", "Art Direction", "Design Systems", "User Research"],
};

export const CERTIFICATIONS = [
  { title: "B.F.A. in Graphic Design", issuer: "Rhode Island School of Design", year: "2018" },
  { title: "Google UX Design Professional Certificate", issuer: "Google", year: "2021" },
  { title: "Advanced Typography", issuer: "School of Motion", year: "2020" },
  { title: "Design Systems Certification", issuer: "Designlab", year: "2022" },
];

export const TOOLS = [
  "Figma", "Adobe Illustrator", "Photoshop", "Framer", "Webflow", "After Effects", "Notion", "Principle",
];
