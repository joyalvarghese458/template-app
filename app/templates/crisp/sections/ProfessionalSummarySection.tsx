import SectionHeading from "../components/SectionHeading";

type ProfessionalSummarySectionProps = {
  summary: string;
  focus: string;
  specializations: string[];
};

export default function ProfessionalSummarySection({
  summary,
  focus,
  specializations,
}: ProfessionalSummarySectionProps) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:p-8">
      <SectionHeading
        eyebrow="01"
        title="Professional Summary"
        description="A concise overview designed to be readable in seconds and useful in print."
      />
      <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-700">
        <p>{summary}</p>
        <p>{focus}</p>
        <p>
          <span className="font-semibold text-slate-950">Specializations:</span>{" "}
          {specializations.join(", ")}
        </p>
      </div>
    </section>
  );
}
