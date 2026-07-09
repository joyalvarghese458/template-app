export default function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span style={{ fontFamily: "var(--font-mono, monospace)", fontWeight: 700, fontSize: "12px", color: "#4b6b3f" }}>{index}</span>
      <span style={{ width: "24px", height: "1px", backgroundColor: "rgba(33,42,31,0.25)" }} />
      <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", fontWeight: 700, color: "#4c5343", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}
