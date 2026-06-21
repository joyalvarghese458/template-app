export const OWNER = {
  name: "Milo Reyes",
  title: "Senior Product Designer",
  tagline: "Crafting interfaces people fall for.",
  subtagline:
    "I'm a product designer obsessed with the details — the easing curve, the empty state, the moment an interface feels alive. Currently designing the next generation of creative tools.",
  email: "milo.reyes@example.com",
  dribbble: "https://dribbble.com/miloreyes",
  behance: "https://behance.net/miloreyes",
  linkedin: "https://linkedin.com/in/miloreyes",
  twitter: "https://x.com/miloreyes",
  resumeUrl: "#",
  location: "Los Angeles, CA",
  availability: "Booking new projects for Q3",
  stats: [
    { value: "9", label: "Years in product design" },
    { value: "40+", label: "Products launched" },
    { value: "3", label: "Design awards" },
    { value: "1.2M", label: "Users designed for" },
  ],
};

export const ABOUT = {
  intro:
    "I'm a senior product designer who's spent the last nine years turning ambiguous problems into interfaces people actually enjoy. I move between UX strategy, visual design, and prototyping depending on what the problem needs.",
  philosophy:
    "Design is a series of small, defensible decisions. I'd rather ship a simple flow backed by research than a beautiful one based on a hunch.",
  focus: [
    "Product design & UX strategy",
    "Design systems & component libraries",
    "Prototyping & interaction design",
    "Cross-functional collaboration with eng & PM",
  ],
};

export const WORK = [
  {
    id: "01",
    title: "Atlas — Analytics Dashboard",
    category: "Product Design · SaaS",
    description:
      "Redesigned a data-dense analytics dashboard into a modular, glanceable system used by enterprise teams daily.",
    tools: ["Figma", "Framer", "Notion"],
    outcomes: [
      "-45% time-to-insight",
      "NPS jumped from 21 to 58",
      "Adopted by 1,200+ teams",
    ],
  },
  {
    id: "02",
    title: "Halo — Wearable Companion App",
    category: "UI/UX · Health Tech",
    description:
      "Designed the companion app for a sleep-tracking wearable, focused on calm, glanceable nightly summaries.",
    tools: ["Figma", "Principle", "After Effects"],
    outcomes: [
      "4.8★ App Store rating",
      "+62% weekly active retention",
      "Featured by Apple Health",
    ],
  },
  {
    id: "03",
    title: "Glow — Design System",
    category: "Design Systems · Internal Tooling",
    description: "Built a token-based, theme-aware design system powering 7 internal products.",
    tools: ["Figma", "Tokens Studio", "Storybook"],
    outcomes: [
      "Shipped 9 themes from 1 system",
      "70% faster feature design time",
      "Adopted org-wide in 2 quarters",
    ],
  },
  {
    id: "04",
    title: "Sundial — Calendar Concept",
    category: "UI/UX · Concept",
    description:
      "A self-initiated concept reimagining the calendar as a calmer, time-of-day-aware planning surface.",
    tools: ["Figma", "Lottie", "Rive"],
    outcomes: [
      "220K+ views on X",
      "Prototype tested with 18 users",
      "Picked up by 2 indie calendar apps",
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Senior Product Designer",
    company: "Lumen Software",
    period: "2021 — Present",
    description: "Own end-to-end design for the analytics platform and mentor a team of 3 designers.",
    highlights: ["Design Leadership", "Design Systems", "0→1 Products"],
  },
  {
    role: "Product Designer",
    company: "Northwind",
    period: "2018 — 2021",
    description: "Designed core flows for a consumer fintech app used by over a million people.",
    highlights: ["Mobile UX", "User Research", "A/B Testing"],
  },
  {
    role: "UI Designer",
    company: "Freelance",
    period: "2016 — 2018",
    description: "Designed marketing sites and early-stage product UI for startups across fintech and health.",
    highlights: ["Visual Design", "Landing Pages", "Rapid Prototyping"],
  },
];

export const SKILLS: Record<string, { name: string; level: number }[]> = {
  "Design": [
    { name: "UI Design", level: 96 },
    { name: "Prototyping", level: 90 },
    { name: "Design Systems", level: 88 },
    { name: "Visual Design", level: 92 },
  ],
  "Research & Strategy": [
    { name: "User Research", level: 80 },
    { name: "UX Strategy", level: 85 },
    { name: "A/B Testing", level: 75 },
    { name: "Workshops & Facilitation", level: 82 },
  ],
};

export const CERTIFICATIONS = [
  { title: "B.A. in Interaction Design", issuer: "California College of the Arts", year: "2016" },
  { title: "Google UX Design Professional Certificate", issuer: "Google", year: "2019" },
  { title: "Advanced Prototyping with Framer", issuer: "Framer", year: "2022" },
  { title: "Design Leadership Certificate", issuer: "DesignBetter / InVision", year: "2021" },
];

export const TOOLS = [
  "Figma", "Framer", "Notion", "Rive", "Principle", "After Effects", "Linear", "Webflow",
];
