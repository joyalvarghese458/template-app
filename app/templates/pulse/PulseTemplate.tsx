"use client";

import Image from "next/image";

import SocialLinks from "./components/SocialLinks";
import {
  achievements,
  certifications,
  education,
  experiences,
  highlights,
  languages,
  portraitImage,
  profile,
  projects,
  references,
  skillGroups,
} from "./constants/resume-data";
import { useResumeActions } from "./hooks/use-resume-actions";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProfessionalSummarySection from "./sections/ProfessionalSummarySection";
import ProjectsSection from "./sections/ProjectsSection";
import SidebarSection from "./sections/SidebarSection";
import styles from "./styles/pulse.module.css";
import { pulseTemplateConfig } from "./template.config";
import { buildResumeText } from "./utils/build-resume-text";

const resumeText = buildResumeText({
  profile,
  experiences,
  projects,
  education,
  skillGroups,
  certifications,
  languages,
  achievements,
  references,
});

export default function PulseTemplate() {
  const { downloadResume, shareResume, shareLabel } = useResumeActions(
    pulseTemplateConfig.downloadFileName,
    resumeText,
  );

  return (
    <main className={`${styles.page} min-h-screen ${styles.shell}`}>
      <div className="mx-auto max-w-[1280px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div
          className={`${styles.heroCard} ${styles.heroSurface} overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.07)]`}
        >
          <header className="border-b border-slate-200 px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[136px_minmax(0,1fr)] lg:items-start lg:gap-8">
              <div className="mx-auto w-full max-w-[136px] lg:mx-0">
                <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
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

              <div className="min-w-0">
                <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500 lg:text-left">
                  Executive Resume
                </p>
                <h1 className="mt-3 text-center text-3xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-4xl lg:text-left lg:text-[3.5rem]">
                  {profile.name}
                </h1>
                <p className="mt-2 text-center text-sm font-semibold uppercase tracking-[0.24em] text-slate-600 sm:text-[13px] lg:text-left">
                  {profile.title}
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-slate-600 lg:justify-start">
                  <span>{profile.experience}</span>
                  <span className="hidden sm:inline text-slate-300">/</span>
                  <span>{profile.location}</span>
                </div>

                <p className="mx-auto mt-5 max-w-3xl text-center text-[15px] leading-7 text-slate-700 lg:mx-0 lg:text-left">
                  {profile.summary}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="border-b border-slate-200 pb-3 sm:border-b-0 sm:border-r sm:pr-3 lg:pr-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Location
                    </p>
                    <p className="mt-2 text-sm text-slate-900">{profile.location}</p>
                  </div>
                  <div className="border-b border-slate-200 pb-3 sm:border-b-0 sm:border-r sm:pr-3 lg:pr-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Email
                    </p>
                    <p className="mt-2 truncate text-sm text-slate-900">{profile.email}</p>
                  </div>
                  <div className="border-b border-slate-200 pb-3 lg:border-b-0 lg:border-r lg:pr-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Phone
                    </p>
                    <p className="mt-2 text-sm text-slate-900">{profile.phone}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Website
                    </p>
                    <p className="mt-2 truncate text-sm text-slate-900">{profile.website}</p>
                  </div>
                </div>

                <div className="mt-5">
                  <SocialLinks links={profile.links} />
                </div>

                <div className={`${styles.heroMetricGrid} mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4`}>
                  {highlights.map((item) => (
                    <div key={item.label} className={styles.heroMetricItem}>
                      <p className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
                        {item.value}
                      </p>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Current Role
                    </p>
                    <p className="mt-2 text-base font-semibold text-slate-950">
                      {profile.currentRoleTitle}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      {profile.currentRoleCompany}
                    </p>
                  </div>

                  <div className={`${styles.screenOnly} flex flex-col gap-3 sm:flex-row`}>
                    <button
                      type="button"
                      onClick={downloadResume}
                      className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      Download Resume
                    </button>
                    <button
                      type="button"
                      onClick={shareResume}
                      className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                    >
                      {shareLabel}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="flex flex-col gap-8 px-5 py-8 sm:px-8 md:gap-10 md:py-10 lg:grid lg:grid-cols-[minmax(0,1.7fr)_minmax(280px,1fr)] lg:items-start lg:gap-10 lg:px-10 lg:py-12 xl:gap-12">
            <div className="min-w-0 space-y-8 md:space-y-10 lg:space-y-12">
              <div className={styles.contentBlock}>
                <ProfessionalSummarySection
                  summary={profile.summary}
                  focus={profile.focus}
                  industryExpertise={profile.industryExpertise}
                />
              </div>

              <div className={styles.contentBlock}>
                <ExperienceSection experiences={experiences} />
              </div>

              <div className={styles.contentBlock}>
                <ProjectsSection projects={projects} />
              </div>

              <div className={styles.contentBlock}>
                <EducationSection education={education} />
              </div>
            </div>

            <aside className="min-w-0 space-y-8 md:space-y-10 lg:space-y-12">
              <div className={styles.contentBlock}>
                <SidebarSection
                  kind="skills"
                  eyebrow="05"
                  title="Skills"
                  description="Grouped capability blocks instead of noisy badge clouds."
                  items={skillGroups}
                />
              </div>

              <div className={styles.contentBlock}>
                <SidebarSection
                  kind="certifications"
                  eyebrow="06"
                  title="Certifications"
                  description="Compact credentials presented in a clean executive format."
                  items={certifications}
                />
              </div>

              <div className={styles.contentBlock}>
                <SidebarSection
                  kind="languages"
                  eyebrow="07"
                  title="Languages"
                  description="Professional communication range."
                  items={languages}
                />
              </div>

              <div className={styles.contentBlock}>
                <SidebarSection
                  kind="achievements"
                  eyebrow="08"
                  title="Achievements"
                  description="Concise proof points that strengthen the profile."
                  items={achievements}
                />
              </div>

              {references.length ? (
                <div className={styles.contentBlock}>
                  <SidebarSection
                    kind="references"
                    eyebrow="09"
                    title="References"
                    description="Shown only when supporting data is available."
                    items={references}
                  />
                </div>
              ) : null}
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
