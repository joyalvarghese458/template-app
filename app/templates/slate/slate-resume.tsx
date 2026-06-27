"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  Globe,
  GraduationCap,
  Lightbulb,
  Languages,
  Link2,
  Mail,
  MapPin,
  MoonStar,
  Phone,
  Share2,
  Sparkles,
  SunMedium,
  Trophy,
  UserRound,
} from "lucide-react";
import { Button } from "./components/ui/button";
import {
  achievements,
  certifications,
  education,
  experience,
  languages,
  portraitImage,
  profile,
  projects,
  recruiterSnapshot,
  references,
  skills,
} from "./data";

type ThemeMode = "dark" | "light";

const cardMotion = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.46, ease: [0.22, 1, 0.36, 1] as const },
};

function getInitialTheme(): ThemeMode {
  return "dark";
}

function buildResumeText() {
  return [
    `${profile.name} - ${profile.title}`,
    `${profile.location} | ${profile.email} | ${profile.phone} | ${profile.website}`,
    "",
    "Professional Summary",
    ...profile.summary,
    "",
    "Experience",
    ...experience.flatMap((item) => [
      `${item.role} - ${item.company} (${item.duration})`,
      item.summary,
      ...item.achievements.map((achievement) => `- ${achievement}`),
      "",
    ]),
    "Skills",
    ...skills.map((group) => `${group.category}: ${group.items.join(", ")}`),
    "",
    "Education",
    `${education.degree} | ${education.institution} | ${education.duration}`,
    education.note,
    "",
    "Certifications",
    ...certifications.map(
      (item) => `${item.name} - ${item.issuer} (${item.year})`
    ),
  ].join("\n");
}

function SectionHeading({
  icon: Icon,
  title,
  subtitle,
  titleClass,
  subtitleClass,
  iconShellClass,
}: {
  icon: typeof Sparkles;
  title: string;
  subtitle?: string;
  titleClass: string;
  subtitleClass: string;
  iconShellClass: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className={`rounded-2xl border p-2.5 ${iconShellClass}`}>
        <Icon className="h-4 w-4 text-[#d6a85f]" />
      </div>
      <div>
        <h2 className={`text-xl font-semibold tracking-[-0.03em] ${titleClass}`}>
          {title}
        </h2>
        {subtitle ? (
          <p className={`mt-1 text-sm leading-6 ${subtitleClass}`}>{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}

export default function SlateResume() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [shareLabel, setShareLabel] = useState("Share Profile");

  const isLight = theme === "light";

  const shellClass = isLight
    ? "bg-[#eef2f6] text-slate-950"
    : "bg-[#070b14] text-white";
  const pageGlow = isLight
    ? "bg-[radial-gradient(circle_at_top,rgba(184,135,70,0.14),transparent_44%)]"
    : "bg-[radial-gradient(circle_at_top,rgba(214,168,95,0.16),transparent_42%)]";
  const frameClass = isLight
    ? "border-slate-200/80 bg-white/90 shadow-[0_28px_90px_rgba(15,23,42,0.08)]"
    : "border-white/10 bg-[#0d1321]/88 shadow-[0_34px_110px_rgba(1,6,18,0.55)]";
  const sectionClass = isLight
    ? "border-slate-200/90 bg-white/70"
    : "border-white/8 bg-white/[0.03]";
  const insetClass = isLight
    ? "border-slate-200 bg-slate-50"
    : "border-white/10 bg-black/18";
  const headingClass = isLight ? "text-slate-950" : "text-white";
  const bodyClass = isLight ? "text-slate-600" : "text-white/70";
  const strongTextClass = isLight ? "text-slate-700" : "text-white/82";
  const subtitleClass = isLight ? "text-slate-500" : "text-white/60";
  const iconShellClass = isLight
    ? "border-slate-200 bg-slate-100"
    : "border-white/10 bg-white/6";
  const chipClass = isLight
    ? "border-slate-200 bg-slate-50 text-slate-700"
    : "border-white/10 bg-white/5 text-white/78";
  const statClass = isLight
    ? "border-slate-200 bg-slate-50/80"
    : "border-white/10 bg-white/[0.04]";
  const dividerClass = isLight ? "border-slate-200/90" : "border-white/8";
  const timelineClass = isLight ? "bg-slate-200" : "bg-white/10";

  const resumeText = useMemo(() => buildResumeText(), []);

  useEffect(() => {
    const stored = window.localStorage.getItem("slate-theme");
    if (stored !== "dark" && stored !== "light") return;
    if (stored === theme) return;

    const rafId = window.requestAnimationFrame(() => {
      setTheme(stored);
    });

    return () => window.cancelAnimationFrame(rafId);
  }, [theme]);

  function persistTheme(nextTheme: ThemeMode) {
    setTheme(nextTheme);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("slate-theme", nextTheme);
    }
  }

  function downloadResume() {
    const blob = new Blob([resumeText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "adarsh-pandey-slate-resume.txt";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  async function shareProfile() {
    const shareData = {
      title: `${profile.name} - ${profile.title}`,
      text: "Take a look at my Slate digital resume.",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
      }
      setShareLabel("Shared");
    } catch {
      setShareLabel("Link Ready");
    } finally {
      window.setTimeout(() => setShareLabel("Share Profile"), 1600);
    }
  }

  return (
    <main className={`min-h-screen transition-colors duration-300 ${shellClass}`}>
      <div className="relative">
        <div className={`pointer-events-none absolute inset-0 ${pageGlow}`} />

        <div className="relative mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-10">
          <motion.div
            initial={cardMotion.initial}
            animate={{ opacity: 1, y: 0 }}
            transition={cardMotion.transition}
            className={`overflow-hidden rounded-[32px] border backdrop-blur-xl ${frameClass}`}
          >
            <header className={`border-b px-5 py-6 sm:px-7 sm:py-8 lg:px-10 ${dividerClass}`}>
              <div className="flex flex-col gap-6 lg:gap-7">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div className="flex min-w-0 flex-col gap-5 sm:flex-row sm:items-start">
                    <div className={`w-full max-w-[132px] shrink-0 rounded-[24px] border p-2 ${insetClass}`}>
                      <div className="overflow-hidden rounded-[18px] bg-black/20">
                        <Image
                          src={portraitImage}
                          alt={`${profile.name} portrait`}
                          width={640}
                          height={860}
                          priority
                          className="h-auto w-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#d6a85f]">
                        Professional Resume
                      </p>
                      <h1 className={`mt-3 text-3xl font-semibold tracking-[-0.06em] sm:text-4xl lg:text-[3.2rem] ${headingClass}`}>
                        {profile.name}
                      </h1>
                      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#d6a85f] sm:text-[13px]">
                        {profile.title}
                      </p>
                      <p className={`mt-4 max-w-3xl text-sm leading-7 sm:text-[15px] ${bodyClass}`}>
                        {profile.tagline}
                      </p>
                      <div className={`mt-4 inline-flex max-w-full rounded-full border px-4 py-2 text-sm ${chipClass}`}>
                        {profile.availability}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5 md:max-w-[280px] md:justify-end">
                    <Button onClick={downloadResume}>
                      <Download className="h-4 w-4" />
                      Download Resume
                    </Button>
                    <Button
                      variant={isLight ? "ghost" : "secondary"}
                      className={isLight ? "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100" : ""}
                      asChild
                    >
                      <a href={profile.linkedin} target="_blank" rel="noreferrer">
                        <Link2 className="h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button
                      variant={isLight ? "ghost" : "secondary"}
                      className={isLight ? "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100" : ""}
                      asChild
                    >
                      <a href={profile.github} target="_blank" rel="noreferrer">
                        <Globe className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button
                      variant={isLight ? "ghost" : "secondary"}
                      className={isLight ? "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100" : ""}
                      onClick={shareProfile}
                    >
                      <Share2 className="h-4 w-4" />
                      {shareLabel}
                    </Button>
                    <Button
                      variant={isLight ? "ghost" : "secondary"}
                      className={isLight ? "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100" : ""}
                      onClick={() => persistTheme(isLight ? "dark" : "light")}
                    >
                      {isLight ? <MoonStar className="h-4 w-4" /> : <SunMedium className="h-4 w-4" />}
                      Theme
                    </Button>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {[
                    { icon: MapPin, label: "Location", value: profile.location },
                    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
                    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
                    { icon: Globe, label: "Website", value: profile.website, href: `https://${profile.website}` },
                  ].map(({ icon: Icon, label, value, href }) => {
                    const content = (
                      <div className={`h-full rounded-[22px] border px-4 py-3.5 ${insetClass}`}>
                        <div className="flex items-start gap-3">
                          <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#d6a85f]" />
                          <div className="min-w-0">
                            <p className="text-[11px] uppercase tracking-[0.18em] text-[#d6a85f]">
                              {label}
                            </p>
                            <p className={`mt-1 break-words text-sm leading-6 ${strongTextClass}`}>
                              {value}
                            </p>
                          </div>
                        </div>
                      </div>
                    );

                    return href ? (
                      <a key={label} href={href} className="block h-full">
                        {content}
                      </a>
                    ) : (
                      <div key={label}>{content}</div>
                    );
                  })}
                </div>
              </div>
            </header>

            <div className="grid gap-6 px-5 py-6 sm:px-7 sm:py-7 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.9fr)] lg:items-start lg:gap-8 lg:px-10 lg:py-10">
              <div className="space-y-6">
                <motion.section
                  {...cardMotion}
                  className={`rounded-[30px] border p-5 sm:p-6 ${sectionClass}`}
                >
                  <SectionHeading
                    icon={UserRound}
                    title="Professional Summary"
                    subtitle="A concise introduction to the value, style, and direction behind the work."
                    titleClass={headingClass}
                    subtitleClass={subtitleClass}
                    iconShellClass={iconShellClass}
                  />
                  <div className={`mt-6 space-y-4 text-[15px] leading-8 ${bodyClass}`}>
                    {profile.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </motion.section>

                <motion.section
                  {...cardMotion}
                  className={`rounded-[30px] border p-5 sm:p-6 ${sectionClass}`}
                >
                  <SectionHeading
                    icon={BriefcaseBusiness}
                    title="Experience"
                    subtitle="A recruiter-friendly timeline with role, impact, and context."
                    titleClass={headingClass}
                    subtitleClass={subtitleClass}
                    iconShellClass={iconShellClass}
                  />
                  <div className="mt-6 space-y-5">
                    {experience.map((item, index) => (
                      <article
                        key={`${item.role}-${item.company}`}
                        className={`relative pl-6 ${index < experience.length - 1 ? "pb-5" : ""}`}
                      >
                        <span className="absolute left-0 top-2.5 h-2.5 w-2.5 rounded-full bg-[#d6a85f]" />
                        {index < experience.length - 1 ? (
                          <span className={`absolute bottom-0 left-[4px] top-6 w-px ${timelineClass}`} />
                        ) : null}

                        <div className={`rounded-[24px] border px-4 py-4 ${insetClass}`}>
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <h3 className={`text-lg font-semibold ${headingClass}`}>{item.role}</h3>
                              <p className={`mt-1 text-sm ${strongTextClass}`}>{item.company}</p>
                            </div>
                            <p className="text-sm text-[#d6a85f]">{item.duration}</p>
                          </div>
                          <p className={`mt-3 text-sm leading-7 ${bodyClass}`}>{item.summary}</p>
                          <ul className={`mt-4 space-y-2 text-sm leading-7 ${strongTextClass}`}>
                            {item.achievements.map((achievement) => (
                              <li key={achievement} className="flex gap-3">
                                <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#d6a85f]" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </article>
                    ))}
                  </div>
                </motion.section>

                <motion.section
                  {...cardMotion}
                  className={`rounded-[30px] border p-5 sm:p-6 ${sectionClass}`}
                >
                  <SectionHeading
                    icon={Link2}
                    title="Projects"
                    subtitle="Selected work samples with direct proof and cleaner hierarchy."
                    titleClass={headingClass}
                    subtitleClass={subtitleClass}
                    iconShellClass={iconShellClass}
                  />
                  <div className="mt-6 grid gap-4 xl:grid-cols-2">
                    {projects.map((project) => (
                      <article
                        key={project.title}
                        className={`overflow-hidden rounded-[26px] border ${insetClass}`}
                      >
                        <div className={`border-b ${dividerClass}`}>
                          <Image
                            src={project.image}
                            alt={`${project.title} preview`}
                            width={960}
                            height={640}
                            className="aspect-[16/10] h-auto w-full object-cover"
                            unoptimized
                          />
                        </div>
                        <div className="p-4">
                          <h3 className={`text-lg font-semibold ${headingClass}`}>{project.title}</h3>
                          <p className={`mt-2 text-sm leading-7 ${bodyClass}`}>{project.description}</p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.stack.map((item) => (
                              <span
                                key={item}
                                className={`rounded-full border px-3 py-1.5 text-xs ${chipClass}`}
                              >
                                {item}
                              </span>
                            ))}
                          </div>

                          <ul className={`mt-4 space-y-2 text-sm leading-7 ${strongTextClass}`}>
                            {project.highlights.slice(0, 2).map((highlight) => (
                              <li key={highlight} className="flex gap-3">
                                <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#d6a85f]" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-5 flex flex-wrap gap-2.5">
                            <Button
                              variant={isLight ? "ghost" : "secondary"}
                              className={isLight ? "border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700 hover:bg-slate-100" : "px-3 py-2 text-xs"}
                              asChild
                            >
                              <Link href={project.github} target="_blank">
                                GitHub
                                <Globe className="h-3.5 w-3.5" />
                              </Link>
                            </Button>
                            <Button
                              variant={isLight ? "ghost" : "secondary"}
                              className={isLight ? "border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700 hover:bg-slate-100" : "px-3 py-2 text-xs"}
                              asChild
                            >
                              <Link href={project.live} target="_blank">
                                Live Demo
                                <ExternalLink className="h-3.5 w-3.5" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </motion.section>

                <motion.section
                  {...cardMotion}
                  className={`rounded-[30px] border p-5 sm:p-6 ${sectionClass}`}
                >
                  <SectionHeading
                    icon={Award}
                    title="Certifications"
                    subtitle="Resume-style credentials kept concise and easy to scan."
                    titleClass={headingClass}
                    subtitleClass={subtitleClass}
                    iconShellClass={iconShellClass}
                  />
                  <div className="mt-6 space-y-3">
                    {certifications.map((item) => (
                      <div
                        key={item.name}
                        className={`rounded-[22px] border px-4 py-3.5 ${insetClass}`}
                      >
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                          <p className={`text-sm font-semibold ${headingClass}`}>{item.name}</p>
                          <p className="text-sm text-[#d6a85f]">{item.year}</p>
                        </div>
                        <p className={`mt-1 text-sm ${bodyClass}`}>{item.issuer}</p>
                      </div>
                    ))}
                  </div>
                </motion.section>
              </div>

              <motion.aside {...cardMotion} className="lg:sticky lg:top-6 lg:self-stretch">
                <div
                  className={`rounded-[30px] border p-5 sm:p-6 ${sectionClass} lg:flex lg:min-h-full lg:flex-col`}
                >
                  <section>
                    <SectionHeading
                      icon={Sparkles}
                      title="ATS Snapshot"
                      subtitle="High-priority signals recruiters usually scan first."
                      titleClass={headingClass}
                      subtitleClass={subtitleClass}
                      iconShellClass={iconShellClass}
                    />
                    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                      {recruiterSnapshot.map((item) => (
                        <div key={item.label} className={`rounded-[24px] border px-4 py-4 ${statClass}`}>
                          <p className="text-[11px] uppercase tracking-[0.18em] text-[#d6a85f]">
                            {item.label}
                          </p>
                          <p className={`mt-2 text-2xl font-semibold tracking-[-0.04em] ${headingClass}`}>
                            {item.value}
                          </p>
                          <p className={`mt-2 text-sm leading-6 ${bodyClass}`}>{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="mt-6">
                    <SectionHeading
                      icon={Sparkles}
                      title="Core Skills"
                      subtitle="Organized for fast screening and keyword matching."
                      titleClass={headingClass}
                      subtitleClass={subtitleClass}
                      iconShellClass={iconShellClass}
                    />
                    <div className="mt-6 space-y-4">
                      {skills.map((group) => (
                        <div key={group.category} className={`rounded-[24px] border p-4 ${insetClass}`}>
                          <p className="text-sm font-semibold text-[#d6a85f]">{group.category}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {group.items.map((item) => (
                              <span
                                key={item}
                                className={`rounded-full border px-3 py-1.5 text-xs ${chipClass}`}
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="mt-6">
                    <SectionHeading
                      icon={GraduationCap}
                      title="Education"
                      subtitle="Academic background presented with resume-style brevity."
                      titleClass={headingClass}
                      subtitleClass={subtitleClass}
                      iconShellClass={iconShellClass}
                    />
                    <div className={`mt-6 rounded-[24px] border px-4 py-4 ${insetClass}`}>
                      <h3 className={`text-lg font-semibold ${headingClass}`}>{education.degree}</h3>
                      <div className="mt-2 flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:justify-between">
                        <p className={strongTextClass}>{education.institution}</p>
                        <p className="text-[#d6a85f]">{education.duration}</p>
                      </div>
                      <p className={`mt-3 text-sm leading-7 ${bodyClass}`}>{education.note}</p>
                    </div>
                  </section>

                  <section className="mt-6">
                    <SectionHeading
                      icon={Trophy}
                      title="Achievements"
                      subtitle="Key wins that reinforce credibility."
                      titleClass={headingClass}
                      subtitleClass={subtitleClass}
                      iconShellClass={iconShellClass}
                    />
                    <div className="mt-6 space-y-3">
                      {achievements.map((item) => (
                        <div key={item} className={`rounded-[22px] border px-4 py-3.5 ${insetClass}`}>
                          <p className={`text-sm leading-7 ${strongTextClass}`}>{item}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="mt-6">
                    <SectionHeading
                      icon={Languages}
                      title="Languages"
                      subtitle="Communication range for global and local collaboration."
                      titleClass={headingClass}
                      subtitleClass={subtitleClass}
                      iconShellClass={iconShellClass}
                    />
                    <div className="mt-6 space-y-3">
                      {languages.map((item) => (
                        <div
                          key={item.name}
                          className={`rounded-[22px] border px-4 py-3.5 ${insetClass}`}
                        >
                          <div className="flex items-center justify-between gap-4">
                            <p className={`text-sm font-semibold ${headingClass}`}>{item.name}</p>
                            <p className={`text-right text-sm ${bodyClass}`}>{item.level}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="mt-6">
                    <SectionHeading
                      icon={Lightbulb}
                      title="Working Style"
                      subtitle="A quick signal of how this candidate approaches content and collaboration."
                      titleClass={headingClass}
                      subtitleClass={subtitleClass}
                      iconShellClass={iconShellClass}
                    />
                    <div className={`mt-6 rounded-[24px] border px-4 py-4 ${insetClass}`}>
                      <p className={`text-sm leading-7 ${strongTextClass}`}>
                        Clear communication, polished execution, and mobile-first thinking across content,
                        design, and educational products.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {["Structured", "Collaborative", "Audience-first"].map((item) => (
                          <span
                            key={item}
                            className={`rounded-full border px-3 py-1.5 text-xs ${chipClass}`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </section>

                  <section className="mt-6">
                    <SectionHeading
                      icon={Mail}
                      title="References"
                      subtitle="Compact supporting contacts placed at the end of the sidebar."
                      titleClass={headingClass}
                      subtitleClass={subtitleClass}
                      iconShellClass={iconShellClass}
                    />
                    <div className="mt-6 space-y-3">
                      {references.map((reference) => (
                        <div
                          key={reference.contact}
                          className={`rounded-[22px] border px-4 py-3.5 ${insetClass}`}
                        >
                          <p className={`text-sm font-semibold ${headingClass}`}>{reference.name}</p>
                          <p className={`mt-1 text-sm ${bodyClass}`}>
                            {reference.role} - {reference.company}
                          </p>
                          <a
                            href={`mailto:${reference.contact}`}
                            className="mt-3 inline-flex items-center gap-2 break-all text-sm text-[#d6a85f]"
                          >
                            {reference.contact}
                            <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </motion.aside>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
