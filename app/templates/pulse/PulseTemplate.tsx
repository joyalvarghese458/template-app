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
        <div className={`${styles.heroCard} shadow-[0_30px_90px_rgba(8,12,24,0.22)]`}>
          <div className="grid lg:grid-cols-[320px_minmax(0,1fr)]">
            <aside
              className={`${styles.sidebar} rounded-tl-[34px] rounded-tr-[34px] lg:rounded-tr-none lg:rounded-bl-[34px]`}
            >
              <div className="flex flex-col gap-7 px-6 py-8 sm:px-8 sm:py-10 lg:sticky lg:top-6 lg:py-12">
                <div>
                  <div className="mx-auto w-28 sm:w-32 lg:mx-0 lg:w-full lg:max-w-[168px]">
                    <div className={`${styles.portraitFrame} overflow-hidden rounded-[20px]`}>
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

                  <p className="mt-6 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-300/80 lg:text-left">
                    Executive Resume
                  </p>
                  <h1 className="mt-2 text-center text-[1.85rem] font-semibold leading-tight tracking-[-0.03em] text-white lg:text-left">
                    {profile.name}
                  </h1>
                  <p className="mt-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-300 lg:text-left">
                    {profile.title}
                  </p>
                  <p className="mt-3 text-center text-sm text-slate-400 lg:text-left">
                    {profile.experience} <span className="text-slate-600">/</span> {profile.location}
                  </p>
                </div>

                <div className={`${styles.sidebarDivider} grid grid-cols-2 gap-4 py-6`}>
                  {highlights.map((item) => (
                    <div key={item.label}>
                      <p className="text-lg font-semibold tracking-[-0.02em] text-white">
                        {item.value}
                      </p>
                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className={`${styles.sidebarDivider} space-y-3 py-6`}>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Email
                    </p>
                    <p className="mt-1 truncate text-sm text-slate-200">{profile.email}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Phone
                    </p>
                    <p className="mt-1 text-sm text-slate-200">{profile.phone}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Website
                    </p>
                    <p className="mt-1 truncate text-sm text-slate-200">{profile.website}</p>
                  </div>
                </div>

                <SocialLinks links={profile.links} tone="dark" />

                <div className={`${styles.sidebarDivider} py-6`}>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Current Role
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {profile.currentRoleTitle}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">{profile.currentRoleCompany}</p>
                </div>

                <div className={`${styles.screenOnly} flex flex-col gap-3`}>
                  <button
                    type="button"
                    onClick={downloadResume}
                    className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
                  >
                    Download Resume
                  </button>
                  <button
                    type="button"
                    onClick={shareResume}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10"
                  >
                    {shareLabel}
                  </button>
                </div>
              </div>
            </aside>

            <div className="min-w-0 space-y-8 overflow-hidden rounded-bl-[34px] rounded-br-[34px] bg-white px-5 py-8 sm:px-8 md:space-y-10 md:py-10 lg:rounded-bl-none lg:rounded-tr-[34px] lg:px-10 lg:py-12">
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
