type InfoPillProps = {
  label: string;
  value: string;
};

export default function InfoPill({ label, value }: InfoPillProps) {
  const singleLineLabels = new Set(["Email", "Phone", "Website"]);
  const valueClassName = singleLineLabels.has(label)
    ? "overflow-hidden text-ellipsis whitespace-nowrap"
    : "break-words";

  return (
    <div className="flex min-h-[112px] flex-col justify-start rounded-2xl border border-slate-200/90 bg-white px-4 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-700">
        {label}
      </p>
      <p className={`mt-2 text-sm font-medium leading-7 text-slate-900 ${valueClassName}`}>
        {value}
      </p>
    </div>
  );
}
