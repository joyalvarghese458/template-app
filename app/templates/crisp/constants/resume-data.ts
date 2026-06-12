import { crispPortrait, crispProjectThumbnail } from "../assets/placeholders";
import type {
  CrispAchievement,
  CrispCertification,
  CrispEducation,
  CrispExperience,
  CrispLanguage,
  CrispProfile,
  CrispProject,
  CrispReference,
  CrispSkillCategory,
  CrispSnapshotItem,
} from "../types";

export const portraitImage = crispPortrait;

export const profile: CrispProfile = {
  name: "Ava Morgan",
  title: "Senior Product Designer & Frontend Strategist",
  location: "Dubai, United Arab Emirates",
  email: "ava.morgan@crispfolio.dev",
  phone: "+971 56 845 0406",
  website: "www.avamorgan.design",
  currentRole: "Lead Product Designer, Northstar Systems",
  availability: "Open to senior product, design systems, and digital experience roles",
  summary:
    "Recruiter-friendly product designer with 8+ years of experience shaping complex platforms into clear, high-conviction user journeys. Strong across design systems, product thinking, and frontend collaboration, with a track record of turning operational requirements into polished, measurable outcomes.",
  focus: "Career focus: enterprise product design, design systems, and conversion-conscious digital experiences.",
  specializations: [
    "Design systems",
    "UX strategy",
    "Cross-functional leadership",
  ],
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "Portfolio", href: "https://example.com" },
    { label: "Behance", href: "https://www.behance.net" },
  ],
};

export const quickSnapshot: CrispSnapshotItem[] = [
  {
    label: "Experience",
    value: "8+ Years",
    detail: "Product, UX, and systems-led delivery",
  },
  {
    label: "Industry",
    value: "SaaS & Enterprise",
    detail: "B2B platforms, dashboards, and workflows",
  },
  {
    label: "Availability",
    value: "Interviewing",
    detail: "Available for strategic IC or lead roles",
  },
  {
    label: "Primary Expertise",
    value: "Design Systems",
    detail: "Scalable UI structure and product clarity",
  },
  {
    label: "Current Role",
    value: "Lead Product Designer",
    detail: "Northstar Systems",
  },
];

export const experiences: CrispExperience[] = [
  {
    jobTitle: "Lead Product Designer",
    company: "Northstar Systems",
    employmentType: "Full-time",
    startDate: "Mar 2023",
    endDate: "Present",
    duration: "1 yr 3 mos",
    description:
      "Leading product and UX direction for workflow-heavy enterprise applications, with emphasis on system consistency, user confidence, and measurable delivery outcomes.",
    achievements: [
      "Built a reusable design system that reduced UI inconsistency across 6 core modules",
      "Partnered with engineering to improve handoff quality and shorten implementation cycles",
      "Introduced recruiter-ready case study narratives for major launches and internal product reviews",
    ],
  },
  {
    jobTitle: "Senior Product Designer",
    company: "Verve Cloud",
    employmentType: "Full-time",
    startDate: "Jan 2020",
    endDate: "Feb 2023",
    duration: "3 yrs 2 mos",
    description:
      "Designed customer-facing SaaS experiences spanning onboarding, analytics, and account workflows for mid-market operations teams.",
    achievements: [
      "Improved onboarding completion by 24% through simpler information hierarchy",
      "Launched multi-team reporting experiences with cleaner data presentation and reduced support friction",
      "Standardized content, component, and accessibility patterns across key product surfaces",
    ],
  },
  {
    jobTitle: "UI/UX Designer",
    company: "Studio Form",
    employmentType: "Contract",
    startDate: "Jun 2017",
    endDate: "Dec 2019",
    duration: "2 yrs 7 mos",
    description:
      "Delivered responsive web experiences and branded digital products for agencies, startups, and executive clients.",
    achievements: [
      "Created premium but readable portfolio and resume experiences for leadership and creative clients",
      "Balanced strong visual polish with accessibility, mobile responsiveness, and print readiness",
      "Collaborated directly with stakeholders to translate ambiguous goals into production-ready interfaces",
    ],
  },
];

export const skillCategories: CrispSkillCategory[] = [
  {
    category: "Product Design",
    items: ["UX Strategy", "User Research", "Wireframing", "Interaction Design"],
  },
  {
    category: "Design Systems",
    items: ["Component Libraries", "Documentation", "Accessibility", "Token Strategy"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Collaboration",
    items: ["Stakeholder Alignment", "Design Critique", "Cross-functional Delivery"],
  },
];

export const projects: CrispProject[] = [
  {
    name: "Ops Control Center",
    description:
      "A workflow redesign for an enterprise operations suite focused on faster scanning, clearer status handling, and more confident decision-making.",
    technologies: ["Next.js", "TypeScript", "Design Systems"],
    thumbnail: crispProjectThumbnail("#dbeafe", "Ops Control", "Enterprise workflow redesign", [
      "Workflow",
      "Audit",
      "Scale",
    ]),
    links: [
      { label: "Case Study", href: "https://example.com" },
      { label: "Prototype", href: "https://example.com" },
    ],
  },
  {
    name: "Executive Reporting Portal",
    description:
      "A recruiter-friendly analytics experience balancing KPI visibility, concise storytelling, and print-ready reporting for leadership reviews.",
    technologies: ["Figma", "Analytics UX", "Content Design"],
    thumbnail: crispProjectThumbnail("#e2e8f0", "Reporting Hub", "Leadership reporting experience", [
      "KPI",
      "Reports",
      "PDF",
    ]),
    links: [
      { label: "Overview", href: "https://example.com" },
      { label: "Live Preview", href: "https://example.com" },
    ],
  },
];

export const education: CrispEducation[] = [
  {
    degree: "Master of Design in Interaction Design",
    institution: "University of Leeds",
    year: "2017",
    description:
      "Focused on user-centered product thinking, interface systems, and digital service design.",
  },
  {
    degree: "Bachelor of Fine Arts in Visual Communication",
    institution: "Kingston University",
    year: "2015",
    description:
      "Built foundations in typography, editorial hierarchy, and digital communication design.",
  },
];

export const certifications: CrispCertification[] = [
  { name: "Google UX Design Certificate", issuer: "Google", year: "2022" },
  { name: "Accessible Components Workshop", issuer: "Deque", year: "2023" },
  { name: "Design Systems Mastery", issuer: "In-house Program", year: "2024" },
];

export const languages: CrispLanguage[] = [
  { name: "English", proficiency: "Fluent" },
  { name: "Arabic", proficiency: "Intermediate" },
  { name: "French", proficiency: "Conversational" },
];

export const achievements: CrispAchievement[] = [
  {
    title: "Design Excellence Award",
    date: "2024",
    description:
      "Recognized for leading a design system rollout that improved delivery consistency across multiple products.",
  },
  {
    title: "Speaker, Product Systems Forum",
    date: "2023",
    description:
      "Presented a practical framework for scaling component-driven collaboration between design and engineering teams.",
  },
];

export const references: CrispReference[] = [
  {
    name: "Rina Thomas",
    position: "Director of Product",
    company: "Northstar Systems",
    contact: "rina.thomas@northstar.example",
  },
  {
    name: "Daniel Hughes",
    position: "Engineering Manager",
    company: "Verve Cloud",
    contact: "daniel.hughes@verve.example",
  },
];
