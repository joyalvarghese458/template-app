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
    <section>
      <SectionHeading
        eyebrow={props.eyebrow}
        title={props.title}
        description={props.description}
        tone="dark"
      />

      <div className="mt-5 space-y-3">
        {props.kind === "skills"
          ? props.items.map((group) => (
              <article key={group.category} className="rounded-[18px] border border-white/10 bg-white/5 p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-200/90">
                  {group.category}
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))
          : null}

        {props.kind === "certifications"
          ? props.items.map((item) => (
              <article key={`${item.name}-${item.issuer}`} className="rounded-[18px] border border-white/10 bg-white/5 p-4">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                  <h3 className="text-sm font-semibold text-white">{item.name}</h3>
                  <p className="text-sm text-slate-400">{item.year}</p>
                </div>
                <p className="mt-1 text-sm text-slate-300">{item.issuer}</p>
              </article>
            ))
          : null}

        {props.kind === "languages"
          ? props.items.map((item) => (
              <article
                key={item.name}
                className="flex items-center justify-between gap-3 rounded-[18px] border border-white/10 bg-white/5 px-4 py-3"
              >
                <h3 className="text-sm font-semibold text-white">{item.name}</h3>
                <p className="text-sm text-slate-300">{item.proficiency}</p>
              </article>
            ))
          : null}

        {props.kind === "achievements"
          ? props.items.map((item) => (
              <article key={`${item.title}-${item.date}`} className="rounded-[18px] border border-white/10 bg-white/5 p-4">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.date}</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))
          : null}

        {props.kind === "references"
          ? props.items.map((item) => (
              <article key={`${item.name}-${item.contact}`} className="rounded-[18px] border border-white/10 bg-white/5 p-4">
                <h3 className="text-sm font-semibold text-white">{item.name}</h3>
                <p className="mt-1 text-sm text-slate-300">
                  {item.position} • {item.company}
                </p>
                <p className="mt-2 break-all text-sm text-slate-400">{item.contact}</p>
              </article>
            ))
          : null}
      </div>
    </section>
  );
}
