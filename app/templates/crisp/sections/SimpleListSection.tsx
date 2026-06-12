import SectionHeading from "../components/SectionHeading";
import type {
  CrispAchievement,
  CrispCertification,
  CrispEducation,
  CrispLanguage,
  CrispReference,
} from "../types";

type SectionKind =
  | "education"
  | "certifications"
  | "languages"
  | "achievements"
  | "references";

type SimpleListSectionProps = {
  kind: SectionKind;
  eyebrow: string;
  title: string;
  description: string;
  items:
    | CrispEducation[]
    | CrispCertification[]
    | CrispLanguage[]
    | CrispAchievement[]
    | CrispReference[];
};

export default function SimpleListSection({
  kind,
  eyebrow,
  title,
  description,
  items,
}: SimpleListSectionProps) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:p-8">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-6 space-y-3">
        {kind === "education"
          ? (items as CrispEducation[]).map((item) => (
              <article
                key={`${item.degree}-${item.institution}`}
                className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4"
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
            ))
          : null}

        {kind === "certifications"
          ? (items as CrispCertification[]).map((item) => (
              <article
                key={`${item.name}-${item.issuer}`}
                className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-base font-semibold text-slate-950">{item.name}</h3>
                  <p className="text-sm text-slate-500">{item.year}</p>
                </div>
                <p className="mt-1 text-sm text-slate-700">{item.issuer}</p>
              </article>
            ))
          : null}

        {kind === "languages"
          ? (items as CrispLanguage[]).map((item) => (
              <article
                key={item.name}
                className="flex items-center justify-between gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4"
              >
                <h3 className="text-base font-semibold text-slate-950">{item.name}</h3>
                <p className="text-sm text-slate-700">{item.proficiency}</p>
              </article>
            ))
          : null}

        {kind === "achievements"
          ? (items as CrispAchievement[]).map((item) => (
              <article
                key={`${item.title}-${item.date}`}
                className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-base font-semibold text-slate-950">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.date}</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {item.description}
                </p>
              </article>
            ))
          : null}

        {kind === "references"
          ? (items as CrispReference[]).map((item) => (
              <article
                key={`${item.name}-${item.contact}`}
                className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4"
              >
                <h3 className="text-base font-semibold text-slate-950">{item.name}</h3>
                <p className="mt-1 text-sm text-slate-700">
                  {item.position} • {item.company}
                </p>
                <p className="mt-2 break-all text-sm text-slate-600">{item.contact}</p>
              </article>
            ))
          : null}
      </div>
    </section>
  );
}
