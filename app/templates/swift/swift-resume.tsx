"use client";

import type { ComponentType, ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  GitBranch,
  Globe,
  GraduationCap,
  Languages,
  Link2,
  Mail,
  MapPin,
  MoonStar,
  Phone,
  Quote,
  Send,
  Share2,
  Sparkles,
  SunMedium,
} from "lucide-react";

type ThemeMode = "dark" | "light";

type ThemePalette = {
  background: string;
  surface: string;
  surfaceStrong: string;
  border: string;
  text: string;
  muted: string;
  subtle: string;
  shadow: string;
};

const sectionIds = ["about", "experience", "projects", "achievements"] as const;

const profile = {
  name: "Joyal Varghese",
  title: "Full Stack Developer",
  photo:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=500&q=80",
  location: "Dubai, UAE",
  email: "joyal@swiftfolio.dev",
  phone: "+971 56 845 0406",
  linkedin: "linkedin.com/in/joyalvarghese",
  github: "github.com/joyalvarghese",
  website: "swiftfolio.dev",
  summary: [
    "Product-minded full stack developer with 7+ years of experience designing, shipping, and scaling business-critical digital platforms across ERP, SaaS, and internal operations.",
    "Known for translating complex workflows into polished, high-performance products that recruiters, founders, and engineering teams can understand in minutes. Strong across architecture, frontend systems, APIs, and UI craft.",
  ],
};

const expertise = [
  "React",
  "Next.js",
  "TypeScript",
  "NestJS",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "MongoDB",
  "Docker",
  "AWS",
  "UI/UX",
];

const education = {
  degree: "B.Tech in Computer Science",
  institution: "APJ Abdul Kalam Technological University",
  year: "2019",
  highlights:
    "Graduated with distinction, led capstone delivery, and received academic excellence recognition.",
};

const languages = [
  "English - Fluent",
  "Malayalam - Native",
  "Hindi - Intermediate",
];

const certifications = [
  "AWS Cloud Practitioner",
  "Google UX Design",
  "Meta Front-End Developer",
];

const references = [
  {
    name: "Akhil Menon",
    role: "Engineering Manager",
    company: "ETC ERP Solutions",
    email: "akhil.menon@etcerp.com",
    phone: "+971 50 555 1201",
  },
  {
    name: "Rhea Thomas",
    role: "Product Director",
    company: "Nova Workspace",
    email: "rhea.thomas@novaworkspace.com",
    phone: "+971 52 777 8841",
  },
];

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "ETC ERP Solutions",
    duration: "2024 - Present",
    description:
      "Leading ERP feature delivery across finance, HRMS, and operations, while modernizing internal frontend architecture and backend performance.",
    achievements: [
      "Developed ERP modules used by 20+ enterprise teams",
      "Built inventory and procurement workflows with role-based access",
      "Integrated HRMS functionality with payroll and attendance systems",
      "Reduced application response times by 38% through query and API optimization",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Nova Workspace",
    duration: "2021 - 2024",
    description:
      "Built customer-facing web products and internal dashboards with a focus on conversion, clarity, and maintainable component systems.",
    achievements: [
      "Shipped reusable design system primitives across 4 products",
      "Delivered analytics dashboards for leadership decision-making",
      "Introduced CI quality gates and improved release confidence",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Freelance / Contract",
    duration: "2019 - 2021",
    description:
      "Partnered with startups and agencies to launch polished marketing sites, SaaS dashboards, and mobile-responsive interfaces.",
    achievements: [
      "Launched 15+ responsive interfaces across client engagements",
      "Improved Lighthouse performance and accessibility scores",
      "Turned Figma systems into production-ready component libraries",
    ],
  },
];

const projects = [
  {
    name: "ERP Management System",
    stack: "React + NestJS + PostgreSQL",
    description:
      "A modular ERP platform for procurement, finance, HR, and warehouse operations with advanced user permissions and reporting.",
    image: "/landing-img.png",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    name: "Talent Operations Dashboard",
    stack: "Next.js + Prisma + MongoDB",
    description:
      "An internal recruiter and HR dashboard designed to surface team metrics, hiring status, and employee lifecycle workflows.",
    image: "/hero-test.webp",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    name: "Portfolio Builder Platform",
    stack: "Next.js + TypeScript + AWS",
    description:
      "A premium portfolio generation product with reusable templates, optimized media delivery, and a frictionless editing experience.",
    image: "/new-landing.webp",
    github: "https://github.com",
    live: "https://example.com",
  },
];

const achievements = [
  "Best Developer Award",
  "Academic Excellence Award",
  "Hackathon Finalist",
  "Team Leadership Recognition",
];

const palettes: Record<ThemeMode, ThemePalette> = {
  dark: {
    background:
      "linear-gradient(135deg, #0B1020 0%, #131C35 35%, #221538 68%, #2D1B45 100%)",
    surface: "rgba(255,255,255,0.06)",
    surfaceStrong: "rgba(255,255,255,0.1)",
    border: "rgba(255,255,255,0.12)",
    text: "#FFFFFF",
    muted: "#D1D5DB",
    subtle: "#9CA3AF",
    shadow: "0 24px 80px rgba(6, 10, 24, 0.42)",
  },
  light: {
    background:
      "linear-gradient(135deg, #f7f7fb 0%, #eceffc 32%, #f5ebff 68%, #fff3f8 100%)",
    surface: "rgba(255,255,255,0.68)",
    surfaceStrong: "rgba(255,255,255,0.85)",
    border: "rgba(129, 140, 248, 0.18)",
    text: "#111827",
    muted: "#374151",
    subtle: "#6B7280",
    shadow: "0 24px 80px rgba(88, 70, 126, 0.15)",
  },
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const containerReveal: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

export default function SwiftResume() {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [activeSection, setActiveSection] =
    useState<(typeof sectionIds)[number]>("about");
  const [shareLabel, setShareLabel] = useState("Share Profile");

  const palette = palettes[theme];

  const navItems = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "achievements", label: "Achievements" },
    ],
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id as (typeof sectionIds)[number]);
        }
      },
      {
        rootMargin: "-20% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleDownloadResume = () => {
    const lines = [
      profile.name,
      profile.title,
      `${profile.location} | ${profile.email} | ${profile.phone}`,
      `${profile.linkedin} | ${profile.github} | ${profile.website}`,
      "",
      "Professional Summary",
      ...profile.summary,
      "",
      "Expertise",
      ...expertise.map((item) => `- ${item}`),
      "",
      "Experience",
      ...experiences.flatMap((item) => [
        `${item.role} - ${item.company} (${item.duration})`,
        item.description,
        ...item.achievements.map((achievement) => `- ${achievement}`),
        "",
      ]),
    ];

    const blob = new Blob([lines.join("\n")], {
      type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "joyal-varghese-resume.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    const shareData = {
      title: `${profile.name} - ${profile.title}`,
      text: "Take a look at my Swift digital resume.",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setShareLabel("Link Copied");
        window.setTimeout(() => setShareLabel("Share Profile"), 1800);
      }
    } catch {
      setShareLabel("Share Cancelled");
      window.setTimeout(() => setShareLabel("Share Profile"), 1800);
    }
  };

  return (
    <div
      className="min-h-screen px-3 py-8 sm:px-6 sm:py-20 lg:px-8"
      style={{
        background: palette.background,
        color: palette.text,
      }}
    >
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-20 h-72 w-72 rounded-full bg-[#FF4FA1]/20 blur-3xl" />
        <div className="absolute right-[12%] top-32 h-80 w-80 rounded-full bg-[#8B5CF6]/20 blur-3xl" />
        <div className="absolute bottom-16 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-[1400px] flex-col gap-4 sm:gap-6">
        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-xl transition hover:-translate-y-0.5 sm:px-4 sm:py-2 sm:text-sm"
            style={{
              background: palette.surface,
              borderColor: palette.border,
              boxShadow: palette.shadow,
              color: palette.text,
            }}
          >
            {theme === "dark" ? <SunMedium size={16} /> : <MoonStar size={16} />}
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <motion.section
          initial="hidden"
          animate="show"
          variants={containerReveal}
          className="overflow-hidden rounded-[24px] border p-3 shadow-2xl backdrop-blur-2xl sm:p-6 lg:p-10"
          style={{
            background: palette.surface,
            borderColor: palette.border,
            boxShadow: palette.shadow,
          }}
        >
          <div className="grid gap-3 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-8">
            <motion.div
              variants={cardReveal}
              className="flex min-w-0 items-center gap-3 sm:gap-4 md:items-center md:gap-6"
            >
              <div
                className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[20px] border sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 lg:rounded-[28px]"
                style={{ borderColor: palette.border }}
              >
                <Image
                  src={profile.photo}
                  alt={`${profile.name} portrait`}
                  fill
                  sizes="(min-width: 1024px) 128px, (min-width: 768px) 112px, 96px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>
              <div className="min-w-0 space-y-1 sm:space-y-3">
                <div>
                  <h1 className="text-[1.55rem] font-semibold leading-none tracking-tight sm:text-[2.35rem] lg:text-[3.4rem]">
                    {profile.name}
                  </h1>
                  <p className="mt-1 text-xs sm:mt-2 sm:text-base lg:text-lg" style={{ color: palette.muted }}>
                    {profile.title}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={cardReveal} className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-3">
              <ContactChip
                icon={Mail}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
                palette={palette}
              />
              <ContactChip
                icon={Phone}
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phone}`}
                palette={palette}
              />
              <ContactChip
                icon={MapPin}
                label="Location"
                value={profile.location}
                palette={palette}
              />
              <ContactChip
                icon={Link2}
                label="LinkedIn"
                value={profile.linkedin}
                href="https://linkedin.com"
                palette={palette}
              />
              <ContactChip
                icon={GitBranch}
                label="GitHub"
                value={profile.github}
                href="https://github.com"
                palette={palette}
              />
              <ContactChip
                icon={Globe}
                label="Portfolio"
                value={profile.website}
                href="https://example.com"
                palette={palette}
              />
            </motion.div>
          </div>

          <motion.div variants={cardReveal} className="mt-3 grid grid-cols-2 gap-2 md:flex md:flex-wrap md:gap-3 lg:mt-8">
            <ActionButton
              icon={Download}
              label="Download Resume"
              onClick={handleDownloadResume}
              primary
              palette={palette}
            />
            <ActionButton
              icon={Send}
              label="Contact"
              href={`mailto:${profile.email}`}
              palette={palette}
            />
            <ActionButton icon={Link2} label="LinkedIn" href="https://linkedin.com" palette={palette} />
            <ActionButton
              icon={GitBranch}
              label="GitHub"
              href="https://github.com"
              palette={palette}
            />
            <ActionButton
              icon={Share2}
              label={shareLabel}
              onClick={handleShare}
              palette={palette}
            />
          </motion.div>
        </motion.section>

        <div className="grid gap-4 md:gap-5 lg:grid-cols-[minmax(280px,0.32fr)_minmax(0,0.68fr)] lg:gap-6">
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:order-1 lg:sticky lg:top-20 lg:grid-cols-1 lg:self-start lg:gap-6"
          >
            <GlassCard palette={palette}>
              <SidebarTitle icon={Sparkles} title="Expertise" />
              <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2.5">
                {expertise.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border px-2 py-1 text-[10px] sm:px-3 sm:py-1.5 sm:text-sm"
                    style={{
                      background: palette.surfaceStrong,
                      borderColor: palette.border,
                      color: palette.muted,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </GlassCard>

            <GlassCard palette={palette}>
              <SidebarTitle icon={GraduationCap} title="Education" />
              <div className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
                <p className="text-sm font-semibold sm:text-lg">{education.degree}</p>
                <p className="text-xs sm:text-base" style={{ color: palette.muted }}>{education.institution}</p>
                <p className="text-[11px] sm:text-sm" style={{ color: palette.subtle }}>
                  Graduation Year: {education.year}
                </p>
                <p className="text-[11px] leading-5 sm:text-sm sm:leading-6" style={{ color: palette.muted }}>
                  {education.highlights}
                </p>
              </div>
            </GlassCard>

            <GlassCard palette={palette}>
              <SidebarTitle icon={Languages} title="Languages" />
              <div className="mt-3 space-y-1.5 text-[11px] sm:mt-4 sm:space-y-2 sm:text-sm" style={{ color: palette.muted }}>
                {languages.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </GlassCard>

            <GlassCard palette={palette}>
              <SidebarTitle icon={BadgeCheck} title="Certifications" />
              <div className="mt-3 space-y-2 sm:mt-4 sm:space-y-3">
                {certifications.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border px-3 py-2 text-[11px] sm:px-4 sm:py-3 sm:text-sm"
                    style={{
                      background: palette.surfaceStrong,
                      borderColor: palette.border,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard palette={palette}>
              <SidebarTitle icon={Quote} title="References" />
              <div className="mt-3 space-y-2 sm:mt-4 sm:space-y-4">
                {references.map((reference) => (
                  <div
                    key={reference.email}
                    className="rounded-2xl border p-3 sm:p-4"
                    style={{ borderColor: palette.border }}
                  >
                    <p className="text-sm font-semibold sm:text-base">{reference.name}</p>
                    <p className="mt-1 text-[11px] sm:text-sm" style={{ color: palette.muted }}>
                      {reference.role} | {reference.company}
                    </p>
                    <p className="mt-2 text-[11px] sm:mt-3 sm:text-sm" style={{ color: palette.subtle }}>
                      {reference.email}
                    </p>
                    <p className="text-[11px] sm:text-sm" style={{ color: palette.subtle }}>
                      {reference.phone}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.aside>

          <div className="order-1 space-y-4 sm:space-y-6 lg:order-2">
            <div className="block">
              <GlassCard palette={palette}>
                <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="shrink-0 rounded-full border px-3 py-2 text-xs font-medium transition sm:px-4 sm:text-sm"
                      style={{
                        background:
                          activeSection === item.id
                            ? "linear-gradient(135deg, rgba(255,79,161,0.25), rgba(139,92,246,0.25))"
                            : palette.surfaceStrong,
                        borderColor: palette.border,
                        color: palette.text,
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </GlassCard>
            </div>

            <motion.section
              id="about"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard palette={palette}>
                <SectionTitle
                  icon={Globe}
                  title="About"
                  subtitle="Professional summary and career objective"
                  palette={palette}
                />
                <div
                  className="mt-3 space-y-3 text-[12px] leading-5 sm:mt-5 sm:space-y-4 sm:text-[15px] sm:leading-7"
                  style={{ color: palette.muted }}
                >
                  {profile.summary.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <p>
                    Career objective: continue building premium, scalable products that blend
                    engineering rigor with clear product thinking, while mentoring teams and
                    raising the bar for user experience.
                  </p>
                </div>
              </GlassCard>
            </motion.section>

            <motion.section
              id="experience"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard palette={palette}>
                <SectionTitle
                  icon={BriefcaseBusiness}
                  title="Experience"
                  subtitle="Modern career journey with measurable outcomes"
                  palette={palette}
                />
                <div className="relative mt-4 space-y-4 pl-4 sm:mt-8 sm:space-y-8 sm:pl-8">
                  <div
                    className="absolute left-[6px] top-0 h-full w-px sm:left-3"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,79,161,0.8), rgba(139,92,246,0.15))",
                    }}
                  />
                  {experiences.map((item, index) => (
                    <motion.div
                      key={`${item.role}-${item.company}`}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: index * 0.06 }}
                      className="relative rounded-[20px] border p-3 transition hover:-translate-y-1 sm:rounded-[24px] sm:p-5"
                      style={{
                        background: palette.surfaceStrong,
                        borderColor: palette.border,
                      }}
                    >
                      <span className="absolute -left-[17px] top-5 h-3 w-3 rounded-full border-[3px] border-[#FF4FA1] bg-[#FFD2E8] shadow-[0_0_0_4px_rgba(255,79,161,0.14)] sm:-left-[33px] sm:top-7 sm:h-[18px] sm:w-[18px] sm:border-4 sm:shadow-[0_0_0_6px_rgba(255,79,161,0.14)]" />
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                        <div>
                          <h3 className="text-base font-semibold sm:text-xl">{item.role}</h3>
                          <p className="mt-1 text-[11px] sm:text-base" style={{ color: palette.muted }}>
                            {item.company}
                          </p>
                        </div>
                        <span
                          className="inline-flex self-start rounded-full px-2 py-1 text-[10px] font-medium sm:px-3 sm:text-sm"
                          style={{
                            background: "rgba(255,79,161,0.16)",
                            color: palette.text,
                          }}
                        >
                          {item.duration}
                        </span>
                      </div>
                      <p className="mt-3 text-[11px] leading-5 sm:mt-4 sm:text-sm sm:leading-6" style={{ color: palette.muted }}>
                        {item.description}
                      </p>
                      <div className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
                        {item.achievements.map((achievement) => (
                          <p
                            key={achievement}
                            className="flex gap-2 text-[11px] leading-5 sm:gap-3 sm:text-sm sm:leading-6"
                            style={{ color: palette.muted }}
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF4FA1]" />
                            <span>{achievement}</span>
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.section>

            <motion.section
              id="projects"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard palette={palette}>
                <SectionTitle
                  icon={Globe}
                  title="Projects"
                  subtitle="Selected work and product highlights"
                  palette={palette}
                />
                <div className="mt-4 grid gap-3 sm:mt-6 sm:gap-5 xl:grid-cols-2">
                  {projects.map((project, index) => (
                    <motion.article
                      key={project.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: index * 0.06 }}
                      className="overflow-hidden rounded-[20px] border transition hover:-translate-y-1 hover:shadow-2xl sm:rounded-[24px]"
                      style={{
                        background: palette.surfaceStrong,
                        borderColor: palette.border,
                      }}
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          sizes="(min-width: 1280px) 420px, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      <div className="space-y-3 p-3 sm:space-y-4 sm:p-5">
                        <div>
                          <h3 className="text-base font-semibold sm:text-xl">{project.name}</h3>
                          <p className="mt-1 text-[11px] sm:text-sm" style={{ color: palette.muted }}>
                            {project.stack}
                          </p>
                        </div>
                        <p className="text-[11px] leading-5 sm:text-sm sm:leading-6" style={{ color: palette.muted }}>
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          <Link
                            href={project.github}
                            target="_blank"
                            className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] transition hover:-translate-y-0.5 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
                            style={{ borderColor: palette.border }}
                          >
                            <GitBranch size={15} />
                            GitHub
                          </Link>
                          <Link
                            href={project.live}
                            target="_blank"
                            className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] transition hover:-translate-y-0.5 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
                            style={{
                              borderColor: "rgba(255,79,161,0.26)",
                              background: "rgba(255,79,161,0.16)",
                            }}
                          >
                            <ExternalLink size={15} />
                            Live Demo
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </GlassCard>
            </motion.section>

            <motion.section
              id="achievements"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid gap-3 sm:gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                <GlassCard palette={palette}>
                  <SectionTitle
                    icon={Award}
                    title="Achievements"
                    subtitle="Recognition that supports recruiter review"
                    palette={palette}
                  />
                  <div className="mt-4 grid gap-3 sm:mt-6 sm:gap-4 sm:grid-cols-2">
                    {achievements.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45, delay: index * 0.05 }}
                        className="rounded-[18px] border p-3 sm:rounded-[22px] sm:p-4"
                        style={{
                          background: palette.surfaceStrong,
                          borderColor: palette.border,
                        }}
                      >
                        <p className="flex items-center gap-2 text-sm font-medium sm:gap-3 sm:text-base">
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FF4FA1]/15 text-[#FF4FA1] sm:h-9 sm:w-9">
                            <Award size={16} />
                          </span>
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>

                <GlassCard palette={palette}>
                  <SectionTitle
                    icon={Sparkles}
                    title="Design Style"
                    subtitle="How this resume presents work"
                    palette={palette}
                  />
                  <div
                    className="mt-4 space-y-3 text-[11px] leading-5 sm:mt-5 sm:space-y-4 sm:text-sm sm:leading-6"
                    style={{ color: palette.muted }}
                  >
                    <p>
                      Luxury glassmorphism dashboard aesthetic with soft borders,
                      cinematic gradients, and recruiter-first hierarchy.
                    </p>
                    <p>
                      Optimized for quick scanning on desktop, tablet, and mobile with
                      motion accents that support the content instead of distracting from it.
                    </p>
                    <p>
                      Built as a true single-page digital CV so hiring teams can assess
                      profile, skills, timeline, and projects without navigating away.
                    </p>
                  </div>
                </GlassCard>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}

function GlassCard({
  children,
  palette,
}: {
  children: ReactNode;
  palette: ThemePalette;
}) {
  return (
    <div
      className="rounded-[20px] border p-3 shadow-2xl backdrop-blur-2xl sm:rounded-[24px] sm:p-6"
      style={{
        background: palette.surface,
        borderColor: palette.border,
        boxShadow: palette.shadow,
      }}
    >
      {children}
    </div>
  );
}

function SidebarTitle({
  icon: Icon,
  title,
}: {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#8B5CF6]/15 text-[#FF4FA1] sm:h-10 sm:w-10 sm:rounded-2xl">
        <Icon size={18} />
      </span>
      <h2 className="text-sm font-semibold uppercase tracking-[0.12em] sm:text-lg sm:normal-case sm:tracking-normal">{title}</h2>
    </div>
  );
}

function SectionTitle({
  icon: Icon,
  title,
  subtitle,
  palette,
}: {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  subtitle: string;
  palette: ThemePalette;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#8B5CF6]/15 text-[#FF4FA1] sm:h-11 sm:w-11 sm:rounded-2xl">
          <Icon size={18} />
        </span>
        <div>
          <h2 className="text-lg font-semibold uppercase tracking-[0.08em] sm:text-2xl sm:tracking-tight sm:normal-case">{title}</h2>
          <p className="hidden text-sm sm:block" style={{ color: palette.subtle }}>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

function ContactChip({
  icon: Icon,
  label,
  value,
  href,
  palette,
}: {
  icon: ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  href?: string;
  palette: ThemePalette;
}) {
  const content = (
    <div
      className="rounded-[14px] border p-2 transition hover:-translate-y-0.5 sm:rounded-[20px] sm:p-4"
      style={{
        background: palette.surfaceStrong,
        borderColor: palette.border,
      }}
    >
      <div className="flex items-start gap-2 sm:gap-3">
        <span className="mt-0.5 text-[#FF4FA1]">
          <Icon size={15} />
        </span>
        <div className="min-w-0">
          <p className="text-[8px] uppercase tracking-[0.12em] sm:text-xs sm:tracking-[0.2em]" style={{ color: palette.subtle }}>
            {label}
          </p>
          <p className="mt-0.5 truncate text-[10px] font-medium sm:mt-1 sm:text-sm">{value}</p>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {content}
      </Link>
    );
  }

  return content;
}

function ActionButton({
  icon: Icon,
  label,
  href,
  onClick,
  primary,
  palette,
}: {
  icon: ComponentType<{ size?: number; className?: string }>;
  label: string;
  href?: string;
  onClick?: () => void;
  primary?: boolean;
  palette: ThemePalette;
}) {
  const className =
    "inline-flex items-center justify-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-medium transition hover:-translate-y-0.5 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm";
  const style = {
    background: primary
      ? "linear-gradient(135deg, rgba(255,79,161,0.95), rgba(139,92,246,0.95))"
      : palette.surfaceStrong,
    borderColor: primary ? "transparent" : palette.border,
    color: primary ? "#FFFFFF" : palette.text,
  };

  if (href) {
    return (
      <Link
        href={href}
        className={className}
        style={style}
        target="_blank"
        rel="noreferrer"
      >
        <Icon size={16} />
        {label}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className} style={style}>
      <Icon size={16} />
      {label}
    </button>
  );
}
