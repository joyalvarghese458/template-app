"use client";

import { RATINGS } from "../_data/portfolio";
import { useReveal } from "../_utils/reveal";

/* Licences & ratings — laminated licence placards: corner screws,
   status LED, authority line, barcode footer. */
export default function Ratings() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="ratings" className="mrd-ratings">
      <div ref={ref} className={`mrd-ratings-inner mrd-reveal ${visible ? "mrd-reveal-in" : ""}`}>
        <header className="mrd-ratings-head">
          <span className="mrd-ratings-kicker">04 · Credentials</span>
          <h2 className="mrd-ratings-title">Licences &amp; ratings</h2>
        </header>

        <div className="mrd-ratings-grid">
          {RATINGS.map((r, i) => (
            <article key={r.code} className="mrd-licence" style={{ transitionDelay: `${i * 0.07}s` }}>
              <span className="mrd-licence-screw mrd-licence-screw-tl" aria-hidden="true" />
              <span className="mrd-licence-screw mrd-licence-screw-tr" aria-hidden="true" />

              <div className="mrd-licence-strip">
                <span className="mrd-licence-code">{r.code}</span>
                <span className={`mrd-licence-status ${r.status === "VALID" || r.status === "CURRENT" ? "mrd-licence-status-ok" : "mrd-licence-status-renewed"}`}>
                  <span className="mrd-licence-led" /> {r.status}
                </span>
              </div>

              <h3 className="mrd-licence-title">{r.title}</h3>
              <p className="mrd-licence-authority">{r.authority} · Issued {r.issued}</p>
              <p className="mrd-licence-detail">{r.detail}</p>

              <div className="mrd-licence-barcode" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .mrd-ratings { padding: clamp(56px, 9vw, 110px) 20px; max-width: var(--max-w); margin: 0 auto; }
        .mrd-ratings .mrd-reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .mrd-ratings .mrd-reveal-in { opacity: 1; transform: translateY(0); }
        .mrd-ratings-head { margin-bottom: 30px; }
        .mrd-ratings-kicker {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--mrd-amber);
        }
        .mrd-ratings-title {
          margin: 8px 0 0;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(28px, 4.6vw, 42px);
          letter-spacing: -0.01em;
          color: var(--mrd-text);
        }
        .mrd-ratings-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }
        .mrd-licence {
          position: relative;
          background: linear-gradient(160deg, var(--mrd-panel-2), var(--mrd-panel));
          border: 1px solid var(--mrd-line);
          border-radius: 12px;
          padding: 18px 18px 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.6s ease, transform 0.6s ease, border-color 0.2s ease, box-shadow 0.25s ease;
        }
        .mrd-reveal-in .mrd-licence { opacity: 1; transform: translateY(0); }
        .mrd-licence:hover {
          border-color: var(--mrd-ice-dim);
          box-shadow: 0 14px 32px -14px rgba(0,0,0,0.6);
          transform: translateY(-4px);
        }
        .mrd-licence-screw {
          position: absolute;
          top: 10px;
          width: 7px; height: 7px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, rgba(232,238,251,0.5), rgba(232,238,251,0.12) 60%);
          border: 1px solid rgba(232,238,251,0.18);
        }
        .mrd-licence-screw-tl { left: 10px; }
        .mrd-licence-screw-tr { right: 10px; }
        .mrd-licence-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 0 8px;
        }
        .mrd-licence-code {
          font-family: var(--font-mono);
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--mrd-ice);
        }
        .mrd-licence-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          border-radius: 100px;
          padding: 5px 10px;
          border: 1px solid;
        }
        .mrd-licence-led { width: 5px; height: 5px; border-radius: 50%; background-color: currentColor; }
        .mrd-licence-status-ok { color: var(--mrd-green); border-color: rgba(88,214,143,0.35); }
        .mrd-licence-status-renewed { color: var(--mrd-amber); border-color: var(--mrd-amber-dim); }
        .mrd-licence-title {
          margin: 0;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 16.5px;
          line-height: 1.35;
          color: var(--mrd-text);
        }
        .mrd-licence-authority { margin: 0; font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.04em; color: var(--mrd-text-faint); }
        .mrd-licence-detail { margin: 0; font-size: 13.5px; line-height: 1.65; color: var(--mrd-text-soft); flex-grow: 1; }
        .mrd-licence-barcode {
          height: 26px;
          border-radius: 4px;
          background: repeating-linear-gradient(
            90deg,
            rgba(232,238,251,0.55) 0 2px,
            transparent 2px 5px,
            rgba(232,238,251,0.55) 5px 6px,
            transparent 6px 11px,
            rgba(232,238,251,0.55) 11px 14px,
            transparent 14px 17px
          );
          opacity: 0.5;
        }
        @media (min-width: 640px) {
          .mrd-ratings-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (min-width: 1024px) {
          .mrd-ratings-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        @media (prefers-reduced-motion: reduce) {
          .mrd-ratings .mrd-reveal, .mrd-licence { opacity: 1; transform: none; transition: none; }
        }
      `}</style>
    </section>
  );
}
