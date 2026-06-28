import SectionHeading from "../components/SectionHeading";
import type {
  PulseAchievement,
  PulseCertification,
  PulseLanguage,
  PulseReference,
  PulseSkillGroup,
} from "../types";

type SidebarSectionProps =
  | {
      kind: "skills";
      eyebrow: string;
      title: string;
      description: string;
      items: PulseSkillGroup[];
    }
  | {
      kind: "certifications";
      eyebrow: string;
      title: string;
      description: string;
      items: PulseCertification[];
    }
  | {
      kind: "languages";
      eyebrow: string;
      title: string;
      description: string;
      items: PulseLanguage[];
    }
  | {
      kind: "achievements";
      eyebrow: string;
      title: string;
      description: string;
      items: PulseAchievement[];
    }
  | {
      kind: "references";
      eyebrow: string;
      title: string;
      description: string;
      items: PulseReference[];
    };

export default function SidebarSection(props: SidebarSectionProps) {
  if (!props.items.length) {
    return null;
  }

  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_14px_36px_rgba(15,23,42,0.05)] sm:p-8">
      <SectionHeading
        eyebrow={props.eyebrow}
        title={props.title}
        description={props.description}
      />

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {props.kind === "skills"
          ? props.items.map((group) => (
              <article key={group.category} className="rounded-[18px] bg-slate-50 p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-700">
                  {group.category}
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))
          : null}

        {props.kind === "certifications"
          ? props.items.map((item) => (
              <article key={`${item.name}-${item.issuer}`} className="rounded-[18px] bg-slate-50 p-4">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                  <h3 className="text-sm font-semibold text-slate-950">{item.name}</h3>
                  <p className="text-sm text-slate-500">{item.year}</p>
                </div>
                <p className="mt-1 text-sm text-slate-700">{item.issuer}</p>
              </article>
            ))
          : null}

        {props.kind === "languages"
          ? props.items.map((item) => (
              <article
                key={item.name}
                className="flex items-center justify-between gap-3 rounded-[18px] bg-slate-50 px-4 py-3"
              >
                <h3 className="text-sm font-semibold text-slate-950">{item.name}</h3>
                <p className="text-sm text-slate-700">{item.proficiency}</p>
              </article>
            ))
          : null}

        {props.kind === "achievements"
          ? props.items.map((item) => (
              <article key={`${item.title}-${item.date}`} className="rounded-[18px] bg-slate-50 p-4">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                  <h3 className="text-sm font-semibold text-slate-950">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.date}</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {item.description}
                </p>
              </article>
            ))
          : null}

        {props.kind === "references"
          ? props.items.map((item) => (
              <article key={`${item.name}-${item.contact}`} className="rounded-[18px] bg-slate-50 p-4">
                <h3 className="text-sm font-semibold text-slate-950">{item.name}</h3>
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
