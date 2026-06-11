"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  Globe,
  GraduationCap,
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
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { DetailDialog } from "./components/detail-dialog";
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

type DialogState = {
  title: string;
  eyebrow: string;
  body: string;
  bullets: string[];
} | null;

const cardMotion = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] as const },
};

function getInitialTheme(): ThemeMode {
  return "light";
}

function buildResumeText() {
  return [
    `${profile.name} - ${profile.title}`,
    `${profile.location} | ${profile.email} | ${profile.phone}`,
    "",
    "Summary",
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
    skills.join(", "),
    "",
    "Education",
    `${education.degree}, ${education.program}`,
    education.institution,
    "",
    "Certifications",
    ...certifications,
  ].join("\n");
}

function SectionHeading({
  icon: Icon,
  eyebrow,
  title,
  titleClass = "text-slate-950",
  iconShellClass = "border-slate-200 bg-slate-100",
}: {
  icon: typeof Sparkles;
  eyebrow: string;
  title: string;
  titleClass?: string;
  iconShellClass?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className={`mt-0.5 rounded-2xl border p-2.5 ${iconShellClass}`}>
        <Icon className="h-4 w-4 text-[#b88746]" />
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-[0.24em] text-[#b88746]">
          {eyebrow}
        </p>
        <h2 className={`mt-2 text-lg font-semibold tracking-tight sm:text-xl ${titleClass}`}>
          {title}
        </h2>
      </div>
    </div>
  );
}

export default function SlateResume() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [shareLabel, setShareLabel] = useState("Share Profile");
  const [dialog, setDialog] = useState<DialogState>(null);

  const isLight = theme === "light";

  const shellClass = isLight
    ? "bg-[#f4f6f8] text-slate-950"
    : "bg-[#0b1020] text-white";
  const pageGlow = isLight
    ? "bg-[radial-gradient(circle_at_top,rgba(184,135,70,0.12),transparent_42%)]"
    : "bg-[radial-gradient(circle_at_top,rgba(214,168,95,0.16),transparent_42%)]";
  const panelClass = isLight
    ? "border-slate-200 bg-white text-slate-950 shadow-[0_16px_45px_rgba(15,23,42,0.08)]"
    : "border-white/12 bg-white/6 text-white shadow-[0_18px_55px_rgba(2,6,23,0.45)]";
  const softPanelClass = isLight
    ? "border-slate-200 bg-slate-50"
    : "border-white/10 bg-black/18";
  const headingClass = isLight ? "text-slate-950" : "text-white";
  const bodyClass = isLight ? "text-slate-600" : "text-white/72";
  const strongTextClass = isLight ? "text-slate-700" : "text-white/82";
  const pillClass = isLight
    ? "border-slate-200 bg-slate-50 text-slate-700"
    : "border-white/12 bg-white/8 text-white/78";
  const iconShellClass = isLight
    ? "border-slate-200 bg-slate-100"
    : "border-white/12 bg-white/8";
  const timelineClass = isLight ? "bg-slate-200" : "bg-white/10";
  const dateChipClass = isLight
    ? "border-slate-200 bg-slate-50 text-slate-600"
    : "border-white/12 bg-white/8 text-white/65";

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
    const a = document.createElement("a");
    a.href = url;
    a.download = "adarsh-pandey-slate-resume.txt";
    a.click();
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

        <div className="relative mx-auto max-w-6xl px-3 py-3 sm:px-5 sm:py-5 lg:px-8 lg:py-8">
          <motion.section
            {...cardMotion}
            className={`overflow-hidden rounded-[30px] border ${panelClass}`}
          >
            <div className="border-b border-black/6 px-4 py-4 sm:px-6 sm:py-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <Badge
                    className={
                      isLight
                        ? "border-slate-200 bg-slate-100 text-slate-600"
                        : "border-white/12 bg-white/8 text-white/72"
                    }
                  >
                    ATS Resume Template
                  </Badge>
                  <h1 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                    {profile.name}
                  </h1>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#b88746] sm:text-[13px]">
                    {profile.title}
                  </p>
                  <p className={`mt-4 max-w-2xl text-sm leading-7 ${bodyClass}`}>
                    {profile.tagline}
                  </p>
                </div>

                <div className={`rounded-[24px] border p-3 sm:min-w-[240px] ${softPanelClass}`}>
                  <div className="flex items-center gap-3">
                    <div className="h-16 w-16 overflow-hidden rounded-2xl border border-black/8">
                      <Image
                        src={portraitImage}
                        alt={`${profile.name} portrait`}
                        width={128}
                        height={128}
                        priority
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className={`text-sm font-semibold ${headingClass}`}>{profile.name}</p>
                      <p className={`mt-1 text-xs leading-5 ${bodyClass}`}>{profile.location}</p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-[#b88746]">
                        Open to creator, content, and design-led roles
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  { icon: Mail, text: profile.email },
                  { icon: Phone, text: profile.phone },
                  { icon: Globe, text: profile.website },
                  { icon: MapPin, text: profile.location },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className={`flex items-center gap-3 rounded-2xl border px-3.5 py-3 text-sm ${softPanelClass}`}
                  >
                    <Icon className="h-4 w-4 shrink-0 text-[#b88746]" />
                    <span className={`min-w-0 truncate ${strongTextClass}`}>{text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2.5">
                <Button onClick={downloadResume}>
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
                <Button
                  variant={isLight ? "ghost" : "secondary"}
                  className={isLight ? "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100" : ""}
                  asChild
                >
                  <a href={`mailto:${profile.email}`}>
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
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
                  {isLight ? (
                    <MoonStar className="h-4 w-4" />
                  ) : (
                    <SunMedium className="h-4 w-4" />
                  )}
                  Theme
                </Button>
              </div>
            </div>

            <div className="grid gap-4 px-4 py-4 sm:px-6 sm:py-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-4">
                <motion.section
                  {...cardMotion}
                  className={`rounded-[26px] border p-4 sm:p-5 ${panelClass}`}
                >
                  <SectionHeading
                    icon={UserRound}
                    eyebrow="Professional Summary"
                    title="Mobile-first recruiter snapshot"
                    titleClass={headingClass}
                    iconShellClass={iconShellClass}
                  />
                  <div className={`mt-5 space-y-3 text-sm leading-7 ${bodyClass}`}>
                    {profile.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </motion.section>

                <motion.section
                  {...cardMotion}
                  className={`rounded-[26px] border p-4 sm:p-5 ${panelClass}`}
                >
                  <SectionHeading
                    icon={BriefcaseBusiness}
                    eyebrow="Experience"
                    title="Career history"
                    titleClass={headingClass}
                    iconShellClass={iconShellClass}
                  />
                  <div className="mt-5 space-y-4">
                    {experience.map((item, index) => (
                      <div key={`${item.role}-${item.company}`} className="relative pl-5">
                        <div className={`absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-[#b88746]`} />
                        {index < experience.length - 1 ? (
                          <div className={`absolute left-[4px] top-6 h-[calc(100%+0.7rem)] w-px ${timelineClass}`} />
                        ) : null}
                        <button
                          type="button"
                          onClick={() =>
                            setDialog({
                              title: item.role,
                              eyebrow: `${item.company} · ${item.duration}`,
                              body: item.summary,
                              bullets: item.achievements,
                            })
                          }
                          className={`w-full rounded-[22px] border p-4 text-left transition hover:-translate-y-0.5 ${softPanelClass}`}
                        >
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <p className={`text-base font-semibold ${headingClass}`}>{item.role}</p>
                              <p className={`mt-1 text-sm ${bodyClass}`}>{item.company}</p>
                            </div>
                            <span className={`inline-flex rounded-full border px-3 py-1 text-xs ${dateChipClass}`}>
                              {item.duration}
                            </span>
                          </div>
                          <p className={`mt-3 text-sm leading-6 ${bodyClass}`}>{item.summary}</p>
                          <ul className={`mt-3 space-y-2 text-sm leading-6 ${strongTextClass}`}>
                            {item.achievements.slice(0, 2).map((achievement) => (
                              <li key={achievement} className="flex gap-2">
                                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b88746]" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#b88746]">
                            View full details
                            <ArrowUpRight className="h-4 w-4" />
                          </div>
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.section>

                <motion.section
                  {...cardMotion}
                  className={`rounded-[26px] border p-4 sm:p-5 ${panelClass}`}
                >
                  <SectionHeading
                    icon={BookOpen}
                    eyebrow="Projects"
                    title="Relevant work samples"
                    titleClass={headingClass}
                    iconShellClass={iconShellClass}
                  />
                  <div className="mt-5 grid gap-4">
                    {projects.map((project) => (
                      <article
                        key={project.title}
                        className={`overflow-hidden rounded-[24px] border ${softPanelClass}`}
                      >
                        <div className="border-b border-black/6">
                          <Image
                            src={project.image}
                            alt={`${project.title} preview`}
                            width={800}
                            height={520}
                            className="h-auto w-full object-cover"
                            unoptimized
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex flex-wrap gap-2">
                            {project.stack.map((item) => (
                              <span
                                key={item}
                                className={`rounded-full border px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] ${pillClass}`}
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                          <h3 className={`mt-4 text-lg font-semibold ${headingClass}`}>
                            {project.title}
                          </h3>
                          <p className={`mt-2 text-sm leading-6 ${bodyClass}`}>
                            {project.description}
                          </p>
                          <ul className={`mt-3 space-y-2 text-sm leading-6 ${strongTextClass}`}>
                            {project.highlights.slice(0, 2).map((highlight) => (
                              <li key={highlight} className="flex gap-2">
                                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b88746]" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 flex flex-wrap gap-2">
                            <Button
                              variant={isLight ? "ghost" : "secondary"}
                              className={isLight ? "border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700 hover:bg-slate-100" : "px-3 py-2 text-xs"}
                              onClick={() =>
                                setDialog({
                                  title: project.title,
                                  eyebrow: project.stack.join(" · "),
                                  body: project.description,
                                  bullets: project.highlights,
                                })
                              }
                            >
                              Details
                            </Button>
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
              </div>

              <div className="space-y-4">
                <motion.section
                  {...cardMotion}
                  className={`rounded-[26px] border p-4 sm:p-5 ${panelClass}`}
                >
                  <SectionHeading
                    icon={Sparkles}
                    eyebrow="ATS Snapshot"
                    title="What recruiters notice first"
                    titleClass={headingClass}
                    iconShellClass={iconShellClass}
                  />
                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    {recruiterSnapshot.map((item) => (
                      <div
                        key={item.label}
                        className={`rounded-[22px] border p-4 ${softPanelClass}`}
                      >
                        <p className="text-2xl font-semibold text-[#b88746]">{item.value}</p>
                        <p className={`mt-1 text-sm ${bodyClass}`}>{item.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      "Clear fit for creator-led content, education, and design-support roles",
                      "Strong communication, presentation structure, and audience retention instincts",
                      "Comfortable translating technical ideas into easy-to-scan experiences",
                    ].map((point) => (
                      <div
                        key={point}
                        className={`rounded-2xl border p-4 text-sm leading-6 ${softPanelClass} ${strongTextClass}`}
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </motion.section>

                <motion.section
                  {...cardMotion}
                  className={`rounded-[26px] border p-4 sm:p-5 ${panelClass}`}
                >
                  <SectionHeading
                    icon={Sparkles}
                    eyebrow="Core Skills"
                    title="Keywords and competencies"
                    titleClass={headingClass}
                    iconShellClass={iconShellClass}
                  />
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className={`rounded-full border px-3 py-2 text-xs ${pillClass}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.section>

                <motion.section
                  {...cardMotion}
                  className={`rounded-[26px] border p-4 sm:p-5 ${panelClass}`}
                >
                  <SectionHeading
                    icon={GraduationCap}
                    eyebrow="Education"
                    title="Academic foundation"
                    titleClass={headingClass}
                    iconShellClass={iconShellClass}
                  />
                  <div className={`mt-5 rounded-[22px] border p-4 ${softPanelClass}`}>
                    <p className={`text-base font-semibold ${headingClass}`}>{education.degree}</p>
                    <p className="mt-1 text-sm font-medium text-[#b88746]">{education.program}</p>
                    <p className={`mt-3 text-sm leading-6 ${bodyClass}`}>{education.institution}</p>
                    <p className={`mt-2 text-sm leading-6 ${bodyClass}`}>{education.note}</p>
                  </div>
                </motion.section>

                <motion.section
                  {...cardMotion}
                  className={`rounded-[26px] border p-4 sm:p-5 ${panelClass}`}
                >
                  <SectionHeading
                    icon={Award}
                    eyebrow="Certifications"
                    title="Proof of learning"
                    titleClass={headingClass}
                    iconShellClass={iconShellClass}
                  />
                  <div className="mt-5 space-y-3">
                    {certifications.map((item) => (
                      <div
                        key={item}
                        className={`rounded-2xl border p-4 text-sm ${softPanelClass} ${strongTextClass}`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.section>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <motion.section
                    {...cardMotion}
                    className={`rounded-[26px] border p-4 sm:p-5 ${panelClass}`}
                  >
                    <SectionHeading
                      icon={Languages}
                      eyebrow="Languages"
                      title="Communication range"
                      titleClass={headingClass}
                      iconShellClass={iconShellClass}
                    />
                    <div className="mt-5 space-y-3">
                      {languages.map((item) => (
                        <div
                          key={item}
                          className={`rounded-2xl border p-4 text-sm ${softPanelClass} ${strongTextClass}`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.section>

                  <motion.section
                    {...cardMotion}
                    className={`rounded-[26px] border p-4 sm:p-5 ${panelClass}`}
                  >
                    <SectionHeading
                      icon={Trophy}
                      eyebrow="Achievements"
                      title="Career highlights"
                      titleClass={headingClass}
                      iconShellClass={iconShellClass}
                    />
                    <div className="mt-5 space-y-3">
                      {achievements.map((item) => (
                        <div
                          key={item}
                          className={`rounded-2xl border p-4 text-sm leading-6 ${softPanelClass} ${strongTextClass}`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.section>
                </div>

                <motion.section
                  {...cardMotion}
                  className={`rounded-[26px] border p-4 sm:p-5 ${panelClass}`}
                >
                  <SectionHeading
                    icon={Mail}
                    eyebrow="References"
                    title="Available on request"
                    titleClass={headingClass}
                    iconShellClass={iconShellClass}
                  />
                  <div className="mt-5 space-y-4">
                    {references.map((reference) => (
                      <div
                        key={reference.email}
                        className={`rounded-[22px] border p-4 ${softPanelClass}`}
                      >
                        <p className={`text-base font-semibold ${headingClass}`}>{reference.name}</p>
                        <p className={`mt-1 text-sm ${bodyClass}`}>
                          {reference.role} · {reference.company}
                        </p>
                        <a
                          href={`mailto:${reference.email}`}
                          className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#b88746]"
                        >
                          {reference.email}
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    ))}
                  </div>
                </motion.section>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      <DetailDialog
        open={dialog !== null}
        title={dialog?.title ?? ""}
        eyebrow={dialog?.eyebrow ?? ""}
        body={dialog?.body ?? ""}
        bullets={dialog?.bullets ?? []}
        onClose={() => setDialog(null)}
      />
    </main>
  );
}
