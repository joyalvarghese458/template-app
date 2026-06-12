"use client";

import Image from "next/image";

import LinkRow from "./components/LinkRow";
import {
  achievements,
  certifications,
  education,
  experiences,
  languages,
  portraitImage,
  profile,
  projects,
  quickSnapshot,
  references,
  skillCategories,
} from "./constants/resume-data";
import { useResumeActions } from "./hooks/use-resume-actions";
import ExperienceSection from "./sections/ExperienceSection";
import ProfessionalSummarySection from "./sections/ProfessionalSummarySection";
import ProjectsSection from "./sections/ProjectsSection";
import SimpleListSection from "./sections/SimpleListSection";
import SkillsSection from "./sections/SkillsSection";
import styles from "./styles/crisp.module.css";
import { crispTemplateConfig } from "./template.config";
import { buildResumeText } from "./utils/build-resume-text";

const resumeText = buildResumeText({
  profile,
  experiences,
  skillCategories,
  projects,
  education,
  certifications,
  languages,
  achievements,
  references,
});

export default function CrispTemplate() {
  const { downloadResume, shareResume, shareLabel } =
    useResumeActions(crispTemplateConfig.downloadFileName, resumeText);
  const heroHighlights = quickSnapshot.slice(0, 4);

  return (
    <main className={`${styles.page} min-h-screen ${styles.shell}`}>
      <div className="mx-auto max-w-[1200px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div
          className={`${styles.heroCard} ${styles.heroSurface} overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]`}
        >
          <header className="border-b border-slate-200 px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
            <div className="flex flex-col gap-6">
              <div className="grid gap-6 lg:grid-cols-[132px_minmax(0,1fr)] lg:items-start lg:gap-8">
                <div className="mx-auto w-full max-w-[132px] lg:mx-0">
                  <div className="relative rounded-[24px] border border-slate-200 bg-white p-2 shadow-[0_16px_30px_rgba(15,23,42,0.06)]">
                    <span className={`absolute inset-y-3 left-0 w-1 rounded-full ${styles.heroAccentBar}`} />
                    <div className="overflow-hidden rounded-[18px] bg-slate-50">
                      <Image
                        src={portraitImage}
                        alt={`${profile.name} portrait`}
                        width={640}
                        height={760}
                        priority
                        unoptimized
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="min-w-0">
                  <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-700 lg:text-left">
                    Professional Resume
                  </p>
                  <h1 className="mt-3 text-center text-3xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-4xl lg:text-left lg:text-[3.35rem]">
                    {profile.name}
                  </h1>
                  <p className="mt-2 text-center text-sm font-semibold uppercase tracking-[0.24em] text-slate-600 sm:text-[13px] lg:text-left">
                    {profile.title}
                  </p>
                  <p className="mx-auto mt-4 max-w-3xl text-center text-[15px] leading-7 text-slate-700 lg:mx-0 lg:text-left">
                    {profile.summary}
                  </p>

                  <div className={`${styles.infoBar} mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4`}>
                    <div className={styles.infoItem}>
                      <span className={styles.infoIcon}>•</span>
                      <div className="min-w-0">
                        <p className={styles.infoLabel}>Location</p>
                        <p className={styles.infoValue}>{profile.location}</p>
                      </div>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoIcon}>•</span>
                      <div className="min-w-0">
                        <p className={styles.infoLabel}>Email</p>
                        <p className={`${styles.infoValue} truncate`}>{profile.email}</p>
                      </div>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoIcon}>•</span>
                      <div className="min-w-0">
                        <p className={styles.infoLabel}>Phone</p>
                        <p className={`${styles.infoValue} truncate`}>{profile.phone}</p>
                      </div>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoIcon}>•</span>
                      <div className="min-w-0">
                        <p className={styles.infoLabel}>Website</p>
                        <p className={`${styles.infoValue} truncate`}>{profile.website}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <LinkRow links={profile.links} />
                  </div>

                  <div className={`${styles.highlightsRow} mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4`}>
                    {heroHighlights.map((item) => (
                      <div key={item.label} className={styles.highlightItem}>
                        <p className="text-lg font-semibold tracking-[-0.03em] text-slate-950">
                          {item.value}
                        </p>
                        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-slate-200 pt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Current Role
                    </p>
                    <p className="mt-2 text-base font-semibold text-slate-950">
                      {profile.currentRole}
                    </p>
                  </div>

                  <div className={`${styles.screenOnly} mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap`}>
                    <button
                      type="button"
                      onClick={downloadResume}
                      className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(37,99,235,0.18)] transition hover:bg-slate-800 sm:w-auto"
                    >
                      Download Resume
                    </button>
                    <button
                      type="button"
                      onClick={shareResume}
                      className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white/90 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:bg-sky-50/70 sm:w-auto"
                    >
                      {shareLabel === "Share" ? "Share Profile" : shareLabel}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="grid gap-6 px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <div className={styles.sectionCard}>
              <ProfessionalSummarySection
                summary={profile.summary}
                focus={profile.focus}
                specializations={profile.specializations}
              />
            </div>

            <div className={styles.sectionCard}>
              <ExperienceSection experiences={experiences} />
            </div>

            <div className={styles.sectionCard}>
              <SkillsSection skillCategories={skillCategories} />
            </div>

            <div className={styles.sectionCard}>
              <ProjectsSection projects={projects} />
            </div>

            <div className={styles.sectionCard}>
              <SimpleListSection
                kind="education"
                eyebrow="05"
                title="Education"
                description="Academic background kept compact and easy to scan."
                items={education}
              />
            </div>

            <div className={styles.sectionCard}>
              <SimpleListSection
                kind="certifications"
                eyebrow="06"
                title="Certifications"
                description="Professional credentials presented without oversized cards."
                items={certifications}
              />
            </div>

            <div className={styles.sectionCard}>
              <SimpleListSection
                kind="languages"
                eyebrow="07"
                title="Languages"
                description="Communication range for regional and global collaboration."
                items={languages}
              />
            </div>

            <div className={styles.sectionCard}>
              <SimpleListSection
                kind="achievements"
                eyebrow="08"
                title="Achievements"
                description="Notable wins that reinforce credibility in a professional format."
                items={achievements}
              />
            </div>

            {references.length ? (
              <div className={styles.sectionCard}>
                <SimpleListSection
                  kind="references"
                  eyebrow="09"
                  title="References"
                  description="Displayed only when available, in a compact resume-friendly format."
                  items={references}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}
