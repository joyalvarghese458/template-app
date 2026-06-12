import SectionHeading from "../components/SectionHeading";
import type { CrispSkillCategory } from "../types";

type SkillsSectionProps = {
  skillCategories: CrispSkillCategory[];
};

export default function SkillsSection({ skillCategories }: SkillsSectionProps) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:p-8">
      <SectionHeading
        eyebrow="03"
        title="Skills"
        description="Grouped capabilities for clean keyword coverage instead of a noisy badge cloud."
      />
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {skillCategories.map((group) => (
          <article
            key={group.category}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
          >
            <h3 className="text-base font-semibold text-slate-950">
              {group.category}
            </h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
