type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
}: SectionHeadingProps) {
  if (tone === "dark") {
    return (
      <div className="border-b border-white/10 pb-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-300/80">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white">
          {title}
        </h2>
        {description ? (
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            {description}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div className="border-b border-slate-200 pb-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-[1.65rem] font-semibold tracking-[-0.04em] text-slate-950">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}
