import SectionHeading from "../components/SectionHeading";

type ProfessionalSummarySectionProps = {
  summary: string;
  focus: string;
  industryExpertise: string;
};

export default function ProfessionalSummarySection({
  summary,
  focus,
  industryExpertise,
}: ProfessionalSummarySectionProps) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_14px_36px_rgba(15,23,42,0.05)] sm:p-8">
      <SectionHeading
        eyebrow="01"
        title="Professional Summary"
        description="A concise executive overview designed for recruiters and leadership teams."
      />
      <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-700">
        <p>{summary}</p>
        <p>{focus}</p>
        <p>{industryExpertise}</p>
      </div>
    </section>
  );
}
