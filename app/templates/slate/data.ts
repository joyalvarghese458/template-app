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
  availability: string;
};

export type SlateHeroStat = {
  label: string;
  value: string;
  detail: string;
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

export type SlateSkillGroup = {
  category: string;
  items: string[];
};

export type SlateCertification = {
  name: string;
  issuer: string;
  year: string;
};

export type SlateEducation = {
  degree: string;
  institution: string;
  duration: string;
  note: string;
};

export type SlateLanguage = {
  name: string;
  level: string;
};

export type SlateReference = {
  name: string;
  role: string;
  company: string;
  contact: string;
};

function svgDataUri(svg: string) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function projectPreview(accent: string, label: string, subtitle: string, chips: string[]) {
  return svgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 640">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#09111f" />
          <stop offset="100%" stop-color="${accent}" />
        </linearGradient>
      </defs>
      <rect width="960" height="640" rx="44" fill="url(#bg)" />
      <rect x="44" y="44" width="872" height="552" rx="32" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
      <rect x="78" y="78" width="804" height="40" rx="20" fill="rgba(255,255,255,0.07)" />
      <circle cx="110" cy="98" r="8" fill="#f2c078" />
      <circle cx="138" cy="98" r="8" fill="rgba(255,255,255,0.3)" />
      <circle cx="166" cy="98" r="8" fill="rgba(255,255,255,0.18)" />
      <text x="78" y="220" fill="#ffffff" font-size="62" font-family="Arial, sans-serif" font-weight="700">${label}</text>
      <text x="78" y="266" fill="rgba(255,255,255,0.72)" font-size="24" font-family="Arial, sans-serif">${subtitle}</text>
      <rect x="78" y="314" width="356" height="162" rx="26" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" />
      <rect x="474" y="168" width="338" height="248" rx="30" fill="rgba(8,15,30,0.48)" stroke="rgba(255,255,255,0.12)" />
      <rect x="504" y="206" width="278" height="20" rx="10" fill="rgba(255,255,255,0.18)" />
      <rect x="504" y="244" width="210" height="18" rx="9" fill="rgba(255,255,255,0.11)" />
      <rect x="504" y="288" width="248" height="86" rx="20" fill="rgba(255,255,255,0.08)" />
      ${chips
        .map(
          (chip, index) => `
        <rect x="${78 + index * 152}" y="514" width="132" height="40" rx="20" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" />
        <text x="${101 + index * 152}" y="540" fill="#ffffff" font-size="18" font-family="Arial, sans-serif">${chip}</text>`
        )
        .join("")}
    </svg>
  `);
}

export const portraitImage = "/passportsize.jpg";

export const profile: SlateProfile = {
  name: "Adarsh Pandey",
  title: "Tech Content Creator",
  location: "Etawah, Uttar Pradesh, India",
  email: "adarshpandeycoc521@gmail.com",
  phone: "+91 98765 43210",
  website: "pandeyadarshyt.com",
  linkedin: "https://www.linkedin.com",
  github: "https://github.com",
  tagline:
    "Creator, educator, and design-minded problem solver building clear technical stories for audiences, clients, and hiring teams.",
  summary: [
    "Tech-focused creator with 5+ years of cross-platform content, brand collaborations, and educational storytelling.",
    "Combines product thinking, visual structure, and communication systems to make complex topics easier to trust and faster to scan.",
  ],
  availability: "Available for full-time creator, content, and design-led roles",
};

export const recruiterSnapshot: SlateHeroStat[] = [
  {
    label: "Years of Experience",
    value: "5+",
    detail: "Content, education, and digital execution",
  },
  {
    label: "Projects Completed",
    value: "25+",
    detail: "Brand, web, and creator-facing work",
  },
  {
    label: "Clients Served",
    value: "5+",
    detail: "Independent brands and campaigns",
  },
  {
    label: "Primary Expertise",
    value: "Content + Design",
    detail: "Technical education and premium presentation",
  },
  {
    label: "Availability",
    value: "Open",
    detail: "Actively exploring high-impact opportunities",
  },
];

export const experience: SlateExperience[] = [
  {
    role: "Content Creator & Tech YouTuber",
    company: "Tech Fab",
    duration: "Apr 2021 - Present",
    summary:
      "Lead creator for tutorials, product explainers, and education-driven content with a polished editorial delivery style.",
    achievements: [
      "Scaled a creator brand through tutorials, reviews, and structured educational series",
      "Built repeatable video production, scripting, and packaging workflows",
      "Partnered with clients on visibility, trust, and technical clarity",
    ],
  },
  {
    role: "Freelance Blogger",
    company: "Google Blogger",
    duration: "Apr 2021 - Present",
    summary:
      "Publishes technical and creator-focused writing shaped for discoverability, readability, and audience retention.",
    achievements: [
      "Produced SEO-conscious editorial content across multiple niches",
      "Turned long-form topics into quick-scanning article structures",
      "Improved consistency through reusable writing frameworks",
    ],
  },
  {
    role: "Graphic Designer",
    company: "Inamigos (IAF)",
    duration: "Jul 2025",
    summary:
      "Delivered campaign graphics and promotional visuals with a clean, platform-ready design language.",
    achievements: [
      "Created polished launch graphics and social assets",
      "Balanced bold branding with platform readability",
    ],
  },
  {
    role: "Winter Intern",
    company: "Techkriti, IIT Kanpur",
    duration: "Jan 2025 - Mar 2025",
    summary:
      "Supported technical program delivery inside a fast-moving academic environment.",
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
      "A performance dashboard concept for tracking audience growth, retention, and brand campaign reporting.",
    image: projectPreview("#243b53", "Growth Command", "Audience reporting system", [
      "Retention",
      "Content",
      "Brand",
    ]),
    github: "https://github.com",
    live: "https://example.com",
    highlights: [
      "Designed around sponsor and recruiter scan patterns",
      "Shows campaign health, cadence, and content velocity in one view",
      "Balances operational clarity with a premium visual tone",
    ],
  },
  {
    title: "Tech Fab Media Kit",
    stack: ["Branding", "UI Design", "Motion"],
    description:
      "A sponsor-ready media kit built to present performance, services, and collaboration value with stronger hierarchy.",
    image: projectPreview("#7c4a1d", "Brand Deck", "Partnership positioning kit", [
      "Media Kit",
      "Deals",
      "Press",
    ]),
    github: "https://github.com",
    live: "https://example.com",
    highlights: [
      "Refined hierarchy for sponsor review calls",
      "Condensed metrics into premium presentation blocks",
      "Kept the experience editorial without losing readability",
    ],
  },
  {
    title: "Course Launch Landing System",
    stack: ["Framer Motion", "Tailwind", "Copywriting"],
    description:
      "A structured launch experience for educational offers focused on outcomes, proof, and conversion clarity.",
    image: projectPreview("#1f5f4a", "Launch Flow", "Education funnel prototype", [
      "Curriculum",
      "Proof",
      "Enroll",
    ]),
    github: "https://github.com",
    live: "https://example.com",
    highlights: [
      "Sequenced information for mobile-first conversion",
      "Reduced friction with concise teaching-oriented copy",
      "Made proof, outcomes, and CTAs easier to compare",
    ],
  },
  {
    title: "Creator Portfolio Resume Hub",
    stack: ["Next.js", "Resume UX", "Content Strategy"],
    description:
      "A hybrid portfolio and resume experience designed to help recruiters, sponsors, and collaborators scan work faster.",
    image: projectPreview("#4f3b8b", "Resume Hub", "Portfolio-resume hybrid system", [
      "Resume",
      "Proof",
      "Reach",
    ]),
    github: "https://github.com",
    live: "https://example.com",
    highlights: [
      "Combined case studies, profile signals, and contact pathways in one experience",
      "Improved resume-style hierarchy without losing creator personality",
      "Organized content for faster mobile review by hiring teams and brand partners",
    ],
  },
];

export const skills: SlateSkillGroup[] = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "Next.js", "TypeScript"],
  },
  {
    category: "Design",
    items: ["UI Design", "UX Thinking", "Graphic Design", "Figma", "Web Design"],
  },
  {
    category: "Content",
    items: ["Content Writing", "Video Editing", "Teaching", "Storytelling", "SEO"],
  },
];

export const certifications: SlateCertification[] = [
  { name: "Canva Design Certification", issuer: "Canva", year: "2025" },
  { name: "Google Digital Marketing", issuer: "Google", year: "2024" },
  { name: "WordPress Publishing", issuer: "WordPress", year: "2024" },
  { name: "SEO Fundamentals", issuer: "Independent Learning", year: "2023" },
];

export const achievements = [
  "Built a recognizable creator identity across tech and education content.",
  "Delivered 25+ projects spanning design, content, and web execution.",
  "Earned long-term audience trust through clear, teachable communication.",
];

export const education: SlateEducation = {
  degree: "Bachelor of Technology in Computer Science and Engineering",
  institution: "State Technical University",
  duration: "2021 - 2025",
  note:
    "Coursework centered on computing fundamentals, web technologies, and applied problem solving.",
};

export const languages: SlateLanguage[] = [
  { name: "Hindi", level: "Native" },
  { name: "English", level: "Professional working proficiency" },
];

export const references: SlateReference[] = [
  {
    name: "R. Sharma",
    role: "Brand Partnerships Lead",
    company: "Independent Media Network",
    contact: "brandlead@example.com",
  },
  {
    name: "N. Singh",
    role: "Program Mentor",
    company: "Techkriti Circle",
    contact: "mentor@example.com",
  },
];
