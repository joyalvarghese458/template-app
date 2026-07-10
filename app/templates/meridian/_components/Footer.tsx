import { OWNER } from "../_data/portfolio";

export default function Footer() {
  return (
    <footer className="mrd-footer">
      <div className="mrd-footer-inner">
        <span className="mrd-footer-name">{OWNER.name} · {OWNER.role}</span>
        <span className="mrd-footer-coords">25°15′N 055°21′E · UTC+4</span>
        <span className="mrd-footer-note">© {new Date().getFullYear()} — Logbook closed, transponder standby.</span>
      </div>

      <style>{`
        .mrd-footer { border-top: 1px solid var(--mrd-line-soft); background-color: #05080f; }
        .mrd-footer-inner {
          max-width: var(--max-w);
          margin: 0 auto;
          padding: 26px 20px 30px;
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          justify-content: space-between;
          gap: 10px 24px;
        }
        .mrd-footer-name { font-size: 12.5px; font-weight: 600; color: var(--mrd-text-soft); }
        .mrd-footer-coords { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.1em; color: var(--mrd-ice); }
        .mrd-footer-note { font-family: var(--font-mono); font-size: 11px; color: var(--mrd-text-faint); }
      `}</style>
    </footer>
  );
}
