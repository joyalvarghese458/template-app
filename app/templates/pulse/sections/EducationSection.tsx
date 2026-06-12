import SectionHeading from "../components/SectionHeading";
import type { PulseEducation } from "../types";

type EducationSectionProps = {
  education: PulseEducation[];
};

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_14px_36px_rgba(15,23,42,0.05)] sm:p-8">
      <SectionHeading
        eyebrow="04"
        title="Education"
        description="Academic background kept compact, clear, and recruiter-friendly."
      />
      <div className="mt-6 space-y-3">
        {education.map((item) => (
          <article
            key={`${item.degree}-${item.institution}`}
            className="rounded-[22px] bg-slate-50 px-5 py-4"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-base font-semibold text-slate-950">{item.degree}</h3>
              <p className="text-sm text-slate-500">{item.year}</p>
            </div>
            <p className="mt-1 text-sm font-medium text-slate-700">
              {item.institution}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
