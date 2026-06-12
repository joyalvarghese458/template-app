import SectionHeading from "../components/SectionHeading";
import type { PulseExperience } from "../types";

type ExperienceSectionProps = {
  experiences: PulseExperience[];
};

export default function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_14px_36px_rgba(15,23,42,0.05)] sm:p-8">
      <SectionHeading
        eyebrow="02"
        title="Experience"
        description="The primary resume section, presented as a clean executive timeline."
      />
      <div className="mt-6 space-y-6">
        {experiences.map((item, index) => (
          <article key={`${item.jobTitle}-${item.company}`} className="relative pl-7">
            <span className="absolute left-0 top-2 h-3 w-3 rounded-full border-2 border-slate-300 bg-slate-900" />
            {index < experiences.length - 1 ? (
              <span className="absolute left-[5px] top-5 h-[calc(100%+18px)] w-px bg-slate-200" />
            ) : null}

            <div className="rounded-[24px] bg-slate-50 px-5 py-5">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
                    {item.jobTitle}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-700">
                    {item.company} • {item.location}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{item.employmentType}</p>
                </div>
                <div className="text-sm text-slate-500 md:text-right">
                  <p>
                    {item.startDate} - {item.endDate}
                  </p>
                  <p className="mt-1 font-medium text-slate-700">{item.duration}</p>
                </div>
              </div>

              <p className="mt-4 text-[15px] leading-7 text-slate-700">
                {item.description}
              </p>

              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3">
                    <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
