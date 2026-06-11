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
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

function SectionHeading({
  icon: Icon,
  eyebrow,
  title,
  titleClass = "text-white",
}: {
  icon: typeof Sparkles;
  eyebrow: string;
  title: string;
  titleClass?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 rounded-2xl border border-white/14 bg-white/8 p-2.5">
        <Icon className="h-4 w-4 text-[#d6a85f]" />
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#d6a85f]">
          {eyebrow}
        </p>
        <h2 className={`mt-2 text-xl font-semibold tracking-tight sm:text-2xl ${titleClass}`}>
          {title}
        </h2>
      </div>
    </div>
  );
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

export default function SlateResume() {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [shareLabel, setShareLabel] = useState("Share Profile");
  const [dialog, setDialog] = useState<DialogState>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem("slate-theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("slate-theme", theme);
  }, [theme]);

  const isLight = theme === "light";

  const shellClass = isLight
    ? "bg-[#edf1f5] text-slate-900"
    : "bg-[#050816] text-white";

  const panelClass = isLight
    ? "border-slate-300/70 bg-white/84 text-slate-900"
    : "border-white/12 bg-white/7 text-white";

  const subTextClass = isLight ? "text-slate-600" : "text-white/70";
  const headingClass = isLight ? "text-slate-900" : "text-white";
  const mutedPanelClass = isLight
    ? "border-slate-300 bg-slate-950/[0.03]"
    : "border-white/10 bg-black/10";
  const mutedTextClass = isLight ? "text-slate-700" : "text-white/78";

  const cardClass = `${panelClass} backdrop-blur-xl shadow-[0_18px_60px_rgba(2,6,23,0.18)]`;

  const resumeText = useMemo(() => buildResumeText(), []);

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
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-white/12 blur-3xl" />
          <div className="absolute left-0 top-28 h-40 w-40 rounded-full bg-white/8 blur-3xl" />
          <div className="absolute right-[-4rem] top-40 h-60 w-60 rounded-full bg-[#d6a85f]/14 blur-3xl" />
          <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.26),transparent_58%)] opacity-60" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
          <motion.section
            {...cardMotion}
            className={`overflow-hidden rounded-[32px] border ${cardClass}`}
          >
            <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
              <div className="flex flex-col justify-between gap-6">
                <div>
                  <Badge className={isLight ? "border-slate-300 bg-slate-950/[0.03] text-slate-700" : ""}>
                    Premium Digital Resume
                  </Badge>
                  <h1 className="mt-4 text-5xl font-semibold uppercase tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                    {profile.name.split(" ").map((part) => (
                      <span key={part} className="block">
                        {part}
                      </span>
                    ))}
                  </h1>
                  <p className="mt-2 text-lg font-medium uppercase tracking-[0.2em] text-[#d6a85f] sm:text-xl">
                    {profile.title}
                  </p>
                  <p className={`mt-5 max-w-xl text-sm leading-7 sm:text-base ${subTextClass}`}>
                    {profile.tagline}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className={`rounded-[26px] border p-4 ${cardClass}`}>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#d6a85f]">
                      Contact
                    </p>
                    <div className={`mt-4 space-y-3 text-sm ${subTextClass}`}>
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-[#d6a85f]" />
                        <span>{profile.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-[#d6a85f]" />
                        <span>{profile.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-[#d6a85f]" />
                        <span>{profile.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="h-4 w-4 text-[#d6a85f]" />
                        <span>{profile.website}</span>
                      </div>
                    </div>
                  </div>

                  <div className={`rounded-[26px] border p-4 ${cardClass}`}>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#d6a85f]">
                      Creative DNA
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {recruiterSnapshot.map((item) => (
                        <div
                          key={item.label}
                          className={`rounded-2xl border p-3 ${mutedPanelClass}`}
                        >
                          <p className="text-xl font-semibold text-[#8ef285]">
                            {item.value}
                          </p>
                          <p className={`mt-1 text-xs leading-5 ${subTextClass}`}>
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  <Button onClick={downloadResume}>
                    <Download className="h-4 w-4" />
                    Download Resume
                  </Button>
                  <Button variant="secondary" asChild>
                    <a href={`mailto:${profile.email}`}>
                      <Mail className="h-4 w-4" />
                      Contact
                    </a>
                  </Button>
                  <Button variant="secondary" asChild>
                    <a href={profile.linkedin} target="_blank" rel="noreferrer">
                      <Link2 className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="secondary" asChild>
                    <a href={profile.github} target="_blank" rel="noreferrer">
                      <Globe className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="ghost" onClick={shareProfile}>
                    <Share2 className="h-4 w-4" />
                    {shareLabel}
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => setTheme(isLight ? "dark" : "light")}
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

              <div className="relative">
                <div className="relative mx-auto max-w-md">
                  <div className="absolute left-0 top-8 z-20 w-44 rounded-[26px] border border-white/14 bg-white/10 p-4 backdrop-blur-md sm:w-52">
                    <p className={`text-sm font-semibold ${headingClass}`}>Recruiter Snapshot</p>
                    <p className={`mt-3 text-sm leading-6 ${subTextClass}`}>
                      Creator, educator, and designer with strong visual hierarchy and audience trust.
                    </p>
                  </div>

                  <div className="absolute right-0 top-20 z-20 w-36 rounded-[24px] border border-white/14 bg-white/10 p-4 backdrop-blur-md sm:w-44">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[#8ef285]">
                      Skills
                    </p>
                    <p className={`mt-3 text-sm leading-6 ${subTextClass}`}>
                      UI/UX, content systems, editing, SEO, web basics
                    </p>
                  </div>

                  <div className="relative mx-auto mt-16 overflow-hidden rounded-[32px] border border-white/14 bg-black/20 p-3 backdrop-blur-md sm:mt-8">
                    <Image
                      src={portraitImage}
                      alt={`${profile.name} profile portrait`}
                      width={640}
                      height={860}
                      priority
                      className="h-auto w-full rounded-[26px] object-cover"
                    />
                  </div>

                  <div className="absolute bottom-4 right-4 z-20 w-52 rounded-[26px] border border-white/14 bg-white/10 p-4 backdrop-blur-md sm:bottom-10 sm:right-[-1.25rem]">
                    <p className={`text-sm font-semibold ${headingClass}`}>Education</p>
                    <p className={`mt-2 text-sm leading-6 ${subTextClass}`}>
                      {education.degree}, {education.program}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.18fr_0.82fr]">
            <div className="space-y-4">
              <motion.section
                {...cardMotion}
                className={`rounded-[28px] border p-5 sm:p-6 ${cardClass}`}
              >
                <SectionHeading
                  icon={UserRound}
                  eyebrow="About"
                  title="Summary"
                  titleClass={headingClass}
                />
                <div className={`mt-5 space-y-4 text-sm leading-7 sm:text-[15px] ${subTextClass}`}>
                  {profile.summary.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </motion.section>

              <motion.section
                {...cardMotion}
                className={`rounded-[28px] border p-5 sm:p-6 ${cardClass}`}
              >
                <SectionHeading
                  icon={BriefcaseBusiness}
                  eyebrow="Experience"
                  title="Selected Roles"
                  titleClass={headingClass}
                />
                <div className="mt-5 space-y-4">
                  {experience.map((item, index) => (
                    <button
                      key={`${item.role}-${item.company}`}
                      type="button"
                      onClick={() =>
                        setDialog({
                          title: item.role,
                          eyebrow: `${item.company} · ${item.duration}`,
                          body: item.summary,
                          bullets: item.achievements,
                        })
                      }
                      className={`w-full rounded-[24px] border p-4 text-left transition hover:-translate-y-0.5 ${isLight ? "border-slate-300 bg-slate-950/[0.03] hover:bg-slate-950/[0.05]" : "border-white/10 bg-black/10 hover:bg-white/8"}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className={`text-base font-semibold ${headingClass}`}>
                            {item.role}
                          </p>
                          <p className={`mt-1 text-sm ${subTextClass}`}>
                            {item.company}
                          </p>
                        </div>
                        <span className="rounded-full border border-white/12 px-3 py-1 text-xs text-white/70">
                          {item.duration}
                        </span>
                      </div>
                      <p className={`mt-3 text-sm leading-6 ${subTextClass}`}>
                        {item.summary}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-sm text-[#d6a85f]">
                        View details
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                      {index < experience.length - 1 ? (
                        <div className="mt-4 h-px w-full bg-white/10" />
                      ) : null}
                    </button>
                  ))}
                </div>
              </motion.section>

              <motion.section
                {...cardMotion}
                className={`rounded-[28px] border p-5 sm:p-6 ${cardClass}`}
              >
                <SectionHeading
                  icon={BookOpen}
                  eyebrow="Projects"
                  title="Featured Work"
                  titleClass={headingClass}
                />
                <div className="mt-5 grid gap-4 xl:grid-cols-2">
                  {projects.map((project) => (
                    <article
                      key={project.title}
                      className={`overflow-hidden rounded-[24px] border ${mutedPanelClass}`}
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="h-44 w-full object-cover"
                      />
                      <div className="p-4">
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((item) => (
                            <span
                              key={item}
                              className={`rounded-full border border-white/12 px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] ${subTextClass}`}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                        <h3 className={`mt-4 text-lg font-semibold ${headingClass}`}>
                          {project.title}
                        </h3>
                        <p className={`mt-2 text-sm leading-6 ${subTextClass}`}>
                          {project.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Button
                            variant="secondary"
                            className="px-3 py-2 text-xs"
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
                          <Button variant="ghost" className="px-3 py-2 text-xs" asChild>
                            <Link href={project.github} target="_blank">
                              GitHub
                              <Globe className="h-3.5 w-3.5" />
                            </Link>
                          </Button>
                          <Button variant="ghost" className="px-3 py-2 text-xs" asChild>
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
                className={`rounded-[28px] border p-5 sm:p-6 ${cardClass}`}
              >
                <SectionHeading
                  icon={Sparkles}
                  eyebrow="ATS Snapshot"
                  title="Quick Recruiter Read"
                  titleClass={headingClass}
                />
                <div className="mt-5 space-y-3">
                  {[
                    "Tech creator with design fluency and educational communication strength",
                    "Strong fit for content strategy, creator partnerships, education brands, and visual storytelling roles",
                    "Blends presentation clarity with hands-on web, design, and growth execution",
                  ].map((point) => (
                    <div
                      key={point}
                      className={`rounded-2xl border p-4 text-sm leading-6 ${mutedPanelClass} ${mutedTextClass}`}
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </motion.section>

              <motion.section
                {...cardMotion}
                className={`rounded-[28px] border p-5 sm:p-6 ${cardClass}`}
              >
                <SectionHeading
                  icon={Sparkles}
                  eyebrow="Expertise"
                  title="Skills"
                  titleClass={headingClass}
                />
                <div className="mt-5 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full border px-3 py-2 text-xs ${isLight ? "border-slate-300 bg-slate-950/[0.03] text-slate-700" : "border-white/12 bg-white/8 text-white/80"}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.section>

              <motion.section
                {...cardMotion}
                className={`rounded-[28px] border p-5 sm:p-6 ${cardClass}`}
              >
                <SectionHeading
                  icon={GraduationCap}
                  eyebrow="Education"
                  title="Academic Foundation"
                  titleClass={headingClass}
                />
                <div className={`mt-5 rounded-[24px] border p-4 ${mutedPanelClass}`}>
                  <p className={`text-base font-semibold ${headingClass}`}>
                    {education.degree}
                  </p>
                  <p className="mt-1 text-sm text-[#d6a85f]">{education.program}</p>
                  <p className={`mt-3 text-sm leading-6 ${subTextClass}`}>
                    {education.institution}
                  </p>
                  <p className={`mt-2 text-sm leading-6 ${subTextClass}`}>
                    {education.note}
                  </p>
                </div>
              </motion.section>

              <motion.section
                {...cardMotion}
                className={`rounded-[28px] border p-5 sm:p-6 ${cardClass}`}
              >
                <SectionHeading
                  icon={Award}
                  eyebrow="Credentials"
                  title="Certifications"
                  titleClass={headingClass}
                />
                <div className="mt-5 space-y-3">
                  {certifications.map((item) => (
                    <div
                      key={item}
                      className={`rounded-2xl border p-4 text-sm ${mutedPanelClass} ${mutedTextClass}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.section>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <motion.section
                  {...cardMotion}
                  className={`rounded-[28px] border p-5 sm:p-6 ${cardClass}`}
                >
                  <SectionHeading
                    icon={Languages}
                    eyebrow="Languages"
                    title="Communication"
                    titleClass={headingClass}
                  />
                  <div className="mt-5 space-y-3">
                    {languages.map((item) => (
                      <div
                        key={item}
                        className={`rounded-2xl border p-4 text-sm ${mutedPanelClass} ${mutedTextClass}`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.section>

                <motion.section
                  {...cardMotion}
                  className={`rounded-[28px] border p-5 sm:p-6 ${cardClass}`}
                >
                  <SectionHeading
                    icon={Trophy}
                    eyebrow="Achievements"
                    title="Highlights"
                    titleClass={headingClass}
                  />
                  <div className="mt-5 space-y-3">
                    {achievements.map((item) => (
                      <div
                        key={item}
                        className={`rounded-2xl border p-4 text-sm leading-6 ${mutedPanelClass} ${mutedTextClass}`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.section>
              </div>

              <motion.section
                {...cardMotion}
                className={`rounded-[28px] border p-5 sm:p-6 ${cardClass}`}
              >
                <SectionHeading
                  icon={Mail}
                  eyebrow="References"
                  title="Available Contacts"
                  titleClass={headingClass}
                />
                <div className="mt-5 space-y-4">
                  {references.map((reference) => (
                    <div
                      key={reference.email}
                      className={`rounded-[24px] border p-4 ${mutedPanelClass}`}
                    >
                      <p className={`text-base font-semibold ${headingClass}`}>
                        {reference.name}
                      </p>
                      <p className={`mt-1 text-sm ${subTextClass}`}>
                        {reference.role} · {reference.company}
                      </p>
                      <a
                        href={`mailto:${reference.email}`}
                        className="mt-3 inline-flex items-center gap-2 text-sm text-[#d6a85f]"
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
