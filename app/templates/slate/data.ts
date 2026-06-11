export type SlateProfile = {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  linkedin: string;
  github: string;
  tagline: string;
  summary: string[];
};

export type SlateExperience = {
  role: string;
  company: string;
  duration: string;
  summary: string;
  achievements: string[];
};

export type SlateProject = {
  title: string;
  stack: string[];
  description: string;
  image: string;
  github: string;
  live: string;
  highlights: string[];
};

export type SlateReference = {
  name: string;
  role: string;
  company: string;
  email: string;
};

function svgDataUri(svg: string) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function projectPreview(accent: string, label: string, chips: string[]) {
  return svgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0f172a" />
          <stop offset="100%" stop-color="${accent}" />
        </linearGradient>
      </defs>
      <rect width="800" height="520" rx="40" fill="url(#bg)" />
      <rect x="36" y="36" width="728" height="448" rx="28" fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.16)" />
      <circle cx="84" cy="84" r="10" fill="#fde68a" />
      <circle cx="116" cy="84" r="10" fill="#86efac" />
      <circle cx="148" cy="84" r="10" fill="#93c5fd" />
      <text x="58" y="154" fill="#ffffff" font-size="48" font-family="Arial, sans-serif" font-weight="700">${label}</text>
      <rect x="58" y="190" width="250" height="18" rx="9" fill="rgba(255,255,255,0.25)" />
      <rect x="58" y="224" width="330" height="18" rx="9" fill="rgba(255,255,255,0.14)" />
      <rect x="58" y="258" width="290" height="18" rx="9" fill="rgba(255,255,255,0.14)" />
      <rect x="464" y="150" width="236" height="240" rx="24" fill="rgba(255,255,255,0.11)" />
      <rect x="490" y="182" width="180" height="14" rx="7" fill="rgba(255,255,255,0.24)" />
      <rect x="490" y="214" width="150" height="14" rx="7" fill="rgba(255,255,255,0.14)" />
      <rect x="490" y="256" width="180" height="92" rx="16" fill="rgba(15,23,42,0.44)" stroke="rgba(255,255,255,0.12)" />
      ${chips
        .map(
          (chip, index) => `
        <rect x="${58 + index * 118}" y="352" width="104" height="34" rx="17" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.18)" />
        <text x="${74 + index * 118}" y="374" fill="#ffffff" font-size="18" font-family="Arial, sans-serif">${chip}</text>`
        )
        .join("")}
    </svg>
  `);
}

export const portraitImage = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 860">
    <defs>
      <radialGradient id="halo" cx="50%" cy="18%" r="62%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.95)" />
        <stop offset="25%" stop-color="rgba(255,255,255,0.3)" />
        <stop offset="100%" stop-color="rgba(11,15,25,0)" />
      </radialGradient>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#111827" />
        <stop offset="100%" stop-color="#020617" />
      </linearGradient>
      <linearGradient id="jacket" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#64748b" />
        <stop offset="100%" stop-color="#1e293b" />
      </linearGradient>
    </defs>
    <rect width="640" height="860" rx="48" fill="url(#bg)" />
    <ellipse cx="320" cy="140" rx="250" ry="170" fill="url(#halo)" />
    <ellipse cx="320" cy="796" rx="160" ry="28" fill="rgba(255,255,255,0.12)" />
    <path d="M170 770c22-142 68-226 150-226s128 84 150 226" fill="url(#jacket)" />
    <path d="M234 768c9-97 30-177 86-225l-39-70c-60 29-109 98-126 295z" fill="#334155" opacity="0.92" />
    <path d="M406 768c-9-97-30-177-86-225l39-70c60 29 109 98 126 295z" fill="#0f172a" opacity="0.95" />
    <path d="M273 555h94l16 160h-126z" fill="#f8fafc" />
    <path d="M271 554c14 28 35 42 49 42s35-14 49-42l-11-44h-76z" fill="#d4a373" />
    <ellipse cx="320" cy="400" rx="88" ry="112" fill="#d7a77a" />
    <path d="M255 410c7 49 28 93 65 93 37 0 58-44 65-93 7-49-9-120-65-120s-72 71-65 120z" fill="#d9a87c" />
    <path d="M242 389c8-92 64-139 134-129 32 5 54 24 63 53 5 15 7 48 2 76-12-20-20-49-28-58-17 6-52 4-81-7-19-7-36-18-50-31-12 28-31 71-40 96-7-1-12 0-17 0 1-1 7 0 17 0z" fill="#111827" />
    <path d="M280 448c19 24 81 24 100 0-6 42-27 67-50 67s-44-25-50-67z" fill="#101828" opacity="0.18" />
    <path d="M292 464c10 11 57 11 67 0-7 23-20 36-33 36s-26-13-34-36z" fill="#0f172a" opacity="0.26" />
    <path d="M283 335c7-43 34-83 102-74 38 5 56 31 61 66-18-26-39-48-63-53-50-12-85-3-100 7z" fill="#111827" />
  </svg>
`);

export const profile: SlateProfile = {
  name: "Adarsh Pandey",
  title: "Tech Content Creator",
  location: "Etawah, Uttar Pradesh, India",
  email: "adarshpandeycoc521@gmail.com",
  phone: "+91 98765 43210",
  website: "pandeyadarshyt.com",
  linkedin: "https://www.linkedin.com",
  github: "https://github.com",
  tagline: "Creative educator blending storytelling, design, and technical execution.",
  summary: [
    "Tech-focused creator with 5+ years of cross-platform content, brand collaborations, and audience-first product storytelling.",
    "Builds recruiter-friendly narratives, educational content systems, and premium visual experiences that make expertise easy to scan in under two minutes.",
  ],
};

export const recruiterSnapshot = [
  { label: "Clients", value: "5+" },
  { label: "Years", value: "5+" },
  { label: "Projects", value: "25+" },
  { label: "Primary Focus", value: "Education + Creator Ops" },
];

export const experience: SlateExperience[] = [
  {
    role: "Content Creator & Tech YouTuber",
    company: "Tech Fab",
    duration: "Apr 2021 - Present",
    summary:
      "Lead creator for tech explainers, product tutorials, and creator-education content with a premium editorial delivery style.",
    achievements: [
      "Scaled a creator brand with tutorials, reviews, and educational series",
      "Built repeatable video production and content packaging systems",
      "Partnered with clients on visibility, trust, and technical clarity",
    ],
  },
  {
    role: "Freelance Blogger",
    company: "Google Blogger",
    duration: "Apr 2021 - Present",
    summary:
      "Publishes technical and creator-focused writing tailored for discoverability, readability, and audience retention.",
    achievements: [
      "Produced SEO-conscious editorial content across multiple niches",
      "Turned long-form topics into fast-scanning article structures",
      "Improved content consistency through reusable writing frameworks",
    ],
  },
  {
    role: "Graphic Designer",
    company: "Inamigos (IAF)",
    duration: "Jul 2025 - Jul 2025",
    summary:
      "Delivered campaign graphics and promotional visuals with a clean, platform-ready design language.",
    achievements: [
      "Created polished launch graphics and social assets",
      "Balanced high-contrast branding with platform readability",
    ],
  },
  {
    role: "Winter Intern",
    company: "Techkriti, IIT Kanpur",
    duration: "Jan 2025 - Mar 2025",
    summary:
      "Supported technical program delivery and learned structured execution inside a high-performance academic environment.",
    achievements: [
      "Contributed to event and program coordination",
      "Strengthened presentation, communication, and collaboration skills",
    ],
  },
];

export const projects: SlateProject[] = [
  {
    title: "Creator Growth Dashboard",
    stack: ["Next.js", "TypeScript", "Analytics"],
    description:
      "A premium dashboard concept for tracking audience growth, retention, and brand campaign performance.",
    image: projectPreview("#334155", "Growth Command", ["Retention", "Content", "Brand"]),
    github: "https://github.com",
    live: "https://example.com",
    highlights: [
      "Designed around recruiter and sponsor scan patterns",
      "Shows campaign health, weekly cadence, and content velocity",
      "Balances dashboard clarity with creator-brand aesthetics",
    ],
  },
  {
    title: "Tech Fab Media Kit",
    stack: ["Branding", "UI Design", "Motion"],
    description:
      "A sponsor-ready digital resume and media kit for brand partnerships, education offers, and community trust signals.",
    image: projectPreview("#854d0e", "Brand Deck", ["Media Kit", "Deals", "Press"]),
    github: "https://github.com",
    live: "https://example.com",
    highlights: [
      "Refined hierarchy for sponsor review calls",
      "Condensed performance metrics into premium card modules",
      "Built to feel editorial without sacrificing readability",
    ],
  },
  {
    title: "Course Launch Landing System",
    stack: ["Framer Motion", "Tailwind", "Copywriting"],
    description:
      "A structured launch experience for educational offers with clear learning outcomes, trust-building, and conversion sections.",
    image: projectPreview("#14532d", "Launch Flow", ["Curriculum", "Proof", "Enroll"]),
    github: "https://github.com",
    live: "https://example.com",
    highlights: [
      "Sequenced information for mobile-first conversion",
      "Used concise copy to reduce friction for first-time buyers",
      "Made proof, outcomes, and CTA moments easier to compare",
    ],
  },
];

export const skills = [
  "UI/UX Design",
  "Graphic Design",
  "Product Design",
  "Video Editing",
  "Web Design",
  "Beat Production",
  "Content Writing",
  "SEO",
  "HTML5",
  "CSS3",
  "JavaScript",
  "Teaching",
];

export const certifications = [
  "Canva Design Certification",
  "Google Digital Marketing",
  "WordPress Publishing",
  "SEO Fundamentals",
];

export const achievements = [
  "Built a recognizable creator identity across tech and education content",
  "Delivered 25+ projects spanning design, content, and web execution",
  "Earned long-term audience trust through clear, teachable communication",
];

export const education = {
  degree: "Bachelor of Technology",
  program: "Computer Science and Engineering",
  institution: "State Technical University",
  note:
    "Academic foundation in computing, web technologies, and applied problem solving.",
};

export const languages = ["English", "Hindi", "Native Hindi + fluent English presentation"];

export const references: SlateReference[] = [
  {
    name: "R. Sharma",
    role: "Brand Partnerships Lead",
    company: "Independent Media Network",
    email: "brandlead@example.com",
  },
  {
    name: "N. Singh",
    role: "Program Mentor",
    company: "Techkriti Circle",
    email: "mentor@example.com",
  },
];
