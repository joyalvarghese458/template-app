import { pulsePortrait, pulseProjectPreview } from "../assets/placeholders";
import type {
  PulseAchievement,
  PulseCertification,
  PulseEducation,
  PulseExperience,
  PulseHighlight,
  PulseLanguage,
  PulseProfile,
  PulseProject,
  PulseReference,
  PulseSkillGroup,
} from "../types";

export const portraitImage = pulsePortrait;

export const profile: PulseProfile = {
  name: "Sarah Thompson",
  title: "Product Design Director",
  experience: "12+ Years Experience",
  location: "Dubai, United Arab Emirates",
  email: "sarah.thompson@pulsefolio.dev",
  phone: "+971 56 845 0406",
  website: "www.sarahthompson.design",
  summary:
    "Product design leader with 12+ years of experience building scalable digital products, design systems, and enterprise workflows across startup and SaaS environments.",
  focus:
    "Career focus: design leadership, cross-functional product strategy, and premium customer experience systems.",
  industryExpertise:
    "Industry expertise: B2B SaaS, enterprise transformation, operations tooling, and executive-facing reporting platforms.",
  currentRoleTitle: "Director of Product Design",
  currentRoleCompany: "Northstar Platforms",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "Portfolio", href: "https://example.com" },
    { label: "Behance", href: "https://www.behance.net" },
    { label: "GitHub", href: "https://github.com" },
  ],
};

export const highlights: PulseHighlight[] = [
  { label: "Years Experience", value: "12+" },
  { label: "Projects Delivered", value: "25+" },
  { label: "Clients Advised", value: "15+" },
  { label: "Availability", value: "Open to Opportunities" },
];

export const experiences: PulseExperience[] = [
  {
    jobTitle: "Director of Product Design",
    company: "Northstar Platforms",
    location: "Dubai, UAE",
    employmentType: "Full-time",
    startDate: "Apr 2022",
    endDate: "Present",
    duration: "2 yrs 2 mos",
    description:
      "Leading product design strategy across enterprise workflow products, design systems, and leadership reporting experiences for regional and international teams.",
    achievements: [
      "Built a unified design system adopted across 7 product areas",
      "Partnered with engineering and product leadership to improve release clarity and reduce rework",
      "Raised executive confidence through clearer reporting, stronger UX governance, and measurable delivery outcomes",
    ],
  },
  {
    jobTitle: "Senior Product Designer",
    company: "Verve Cloud",
    location: "Remote",
    employmentType: "Full-time",
    startDate: "Jan 2018",
    endDate: "Mar 2022",
    duration: "4 yrs 3 mos",
    description:
      "Designed SaaS platforms for onboarding, analytics, and internal operations with a focus on customer adoption and structured product storytelling.",
    achievements: [
      "Improved onboarding completion through stronger hierarchy and lower friction workflows",
      "Launched premium analytics experiences for leadership and customer success teams",
      "Standardized research, content, and accessibility patterns for faster multi-team delivery",
    ],
  },
  {
    jobTitle: "UX Designer",
    company: "Studio Foundry",
    location: "London, UK",
    employmentType: "Contract",
    startDate: "Jun 2013",
    endDate: "Dec 2017",
    duration: "4 yrs 7 mos",
    description:
      "Created web and mobile experiences for startups, founders, and consultants seeking premium but recruiter-friendly digital profiles and product interfaces.",
    achievements: [
      "Delivered polished client-facing interfaces without sacrificing readability or mobile behavior",
      "Translated executive briefs into clear user journeys and production-ready design systems",
      "Balanced personal brand presentation with business-focused conversion and trust signals",
    ],
  },
];

export const projects: PulseProject[] = [
  {
    name: "Executive Insights Suite",
    description:
      "A leadership reporting platform built to make KPI trends, team performance, and strategic opportunities easier to scan and act on.",
    technologies: ["Next.js", "TypeScript", "Analytics UX"],
    coverImage: pulseProjectPreview("#dbeafe", "Insights Suite", "Leadership reporting system", [
      "KPIs",
      "Strategy",
      "Reports",
    ]),
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    name: "Design System Rollout",
    description:
      "A component, documentation, and governance program that aligned multiple product teams around one scalable interface language.",
    technologies: ["Figma", "Design Systems", "Docs"],
    coverImage: pulseProjectPreview("#e2e8f0", "System Rollout", "Cross-product design system", [
      "Tokens",
      "Governance",
      "Scale",
    ]),
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
];

export const education: PulseEducation[] = [
  {
    degree: "Master of Arts in Design Leadership",
    institution: "Royal College of Art",
    year: "2013",
    description:
      "Focused on product strategy, systems thinking, and leading multi-disciplinary design teams.",
  },
  {
    degree: "Bachelor of Design in Interaction Design",
    institution: "University of the Arts London",
    year: "2011",
    description:
      "Built a foundation in interface design, digital publishing, and user-centered experience design.",
  },
];

export const skillGroups: PulseSkillGroup[] = [
  {
    category: "Product Design",
    items: ["Design Systems", "UX Strategy", "Research", "Journey Mapping"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Leadership",
    items: ["Team Management", "Mentoring", "Stakeholder Alignment", "Roadmapping"],
  },
];

export const certifications: PulseCertification[] = [
  { name: "Google UX Design", issuer: "Google", year: "2021" },
  { name: "Enterprise Design Systems", issuer: "InVision", year: "2022" },
  { name: "Leadership Communication", issuer: "LinkedIn Learning", year: "2024" },
];

export const languages: PulseLanguage[] = [
  { name: "English", proficiency: "Native" },
  { name: "Arabic", proficiency: "Professional" },
  { name: "Hindi", proficiency: "Conversational" },
];

export const achievements: PulseAchievement[] = [
  {
    title: "Design Leadership Award",
    date: "2024",
    description:
      "Recognized for delivering a cross-product design system that improved quality and speed across multiple teams.",
  },
  {
    title: "Conference Speaker",
    date: "2023",
    description:
      "Invited to present a framework for scaling product design operations in enterprise environments.",
  },
];

export const references: PulseReference[] = [
  {
    name: "Amina Rahman",
    position: "VP Product",
    company: "Northstar Platforms",
    contact: "amina.rahman@northstar.example",
  },
  {
    name: "Daniel Brooks",
    position: "Chief Experience Officer",
    company: "Verve Cloud",
    contact: "daniel.brooks@verve.example",
  },
];
