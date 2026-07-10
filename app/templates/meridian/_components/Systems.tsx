"use client";

import { ANNUNCIATORS, GAUGES } from "../_data/portfolio";
import { useReveal } from "../_utils/reveal";

/* Competencies — an overhead annunciator panel of lit caption tiles,
   plus three engine-style arc gauges. */
export default function Systems() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const R = 54;
  const CIRC = Math.PI * R; // semicircle arc length

  return (
    <section id="systems" className="mrd-systems">
      <div ref={ref} className={`mrd-systems-inner mrd-reveal ${visible ? "mrd-reveal-in" : ""}`}>
        <header className="mrd-systems-head">
          <span className="mrd-systems-kicker">05 · Competencies</span>
          <h2 className="mrd-systems-title">Systems panel</h2>
          <p className="mrd-systems-blurb">All annunciators green. Qualifications and standing checks at a glance.</p>
        </header>

        <div className="mrd-panel-box">
          <div className="mrd-annunciators">
            {ANNUNCIATORS.map((a, i) => (
              <div
                key={a.label}
                className={`mrd-annunciator ${a.state === "green" ? "mrd-ann-green" : "mrd-ann-amber"}`}
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                {a.label}
              </div>
            ))}
          </div>

          <div className="mrd-gauges">
            {GAUGES.map((g, i) => (
              <div key={g.label} className="mrd-gauge" style={{ transitionDelay: `${0.3 + i * 0.12}s` }}>
                <svg viewBox="0 0 140 84" className="mrd-gauge-svg" aria-hidden="true">
                  <path
                    d={`M ${70 - R} 74 A ${R} ${R} 0 0 1 ${70 + R} 74`}
                    fill="none"
                    stroke="rgba(214,226,247,0.12)"
                    strokeWidth="9"
                    strokeLinecap="round"
                  />
                  <path
                    d={`M ${70 - R} 74 A ${R} ${R} 0 0 1 ${70 + R} 74`}
                    fill="none"
                    stroke="#58d68f"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeDasharray={CIRC}
                    strokeDashoffset={visible ? CIRC * (1 - g.value / 100) : CIRC}
                    className="mrd-gauge-arc"
                  />
                  <text x="70" y="66" textAnchor="middle" fill="#e8eefb" fontSize="24" fontWeight="700" style={{ fontFamily: "var(--font-mono)" }}>
                    {g.value}
                  </text>
                  <text x="70" y="80" textAnchor="middle" fill="rgba(232,238,251,0.4)" fontSize="9" style={{ fontFamily: "var(--font-mono)" }}>
                    PCT
                  </text>
                </svg>
                <span className="mrd-gauge-label">{g.label}</span>
                <span className="mrd-gauge-caption">{g.caption}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .mrd-systems {
          padding: clamp(56px, 9vw, 110px) 20px;
          background-color: #05080f;
          border-top: 1px solid var(--mrd-line-soft);
        }
        .mrd-systems-inner { max-width: var(--max-w); margin: 0 auto; }
        .mrd-systems .mrd-reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .mrd-systems .mrd-reveal-in { opacity: 1; transform: translateY(0); }
        .mrd-systems-head { margin-bottom: 30px; max-width: 640px; }
        .mrd-systems-kicker {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--mrd-green);
        }
        .mrd-systems-title {
          margin: 8px 0 10px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(28px, 4.6vw, 42px);
          letter-spacing: -0.01em;
          color: var(--mrd-text);
        }
        .mrd-systems-blurb { margin: 0; font-size: 15px; line-height: 1.7; color: var(--mrd-text-soft); }
        .mrd-panel-box {
          border: 1px solid rgba(214,226,247,0.1);
          border-radius: 16px;
          background:
            linear-gradient(180deg, rgba(214,226,247,0.03), transparent 40%),
            #090d17;
          box-shadow: inset 0 2px 18px rgba(0,0,0,0.55);
          padding: clamp(18px, 3.4vw, 34px);
          display: flex;
          flex-direction: column;
          gap: clamp(22px, 4vw, 36px);
        }
        .mrd-annunciators {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }
        .mrd-annunciator {
          font-family: var(--font-mono);
          font-size: clamp(10.5px, 1.4vw, 12px);
          font-weight: 600;
          letter-spacing: 0.1em;
          text-align: center;
          padding: 16px 8px;
          border-radius: 6px;
          border: 1px solid;
          opacity: 0;
          transform: scale(0.96);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .mrd-reveal-in .mrd-annunciator { opacity: 1; transform: scale(1); }
        .mrd-ann-green {
          color: var(--mrd-green);
          border-color: rgba(88,214,143,0.3);
          background-color: rgba(88,214,143,0.07);
          text-shadow: 0 0 14px rgba(88,214,143,0.45);
        }
        .mrd-ann-amber {
          color: var(--mrd-amber);
          border-color: var(--mrd-amber-dim);
          background-color: rgba(245,168,60,0.07);
          text-shadow: 0 0 14px rgba(245,168,60,0.4);
        }
        .mrd-gauges {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          border-top: 1px solid rgba(214,226,247,0.08);
          padding-top: clamp(20px, 3.4vw, 30px);
        }
        .mrd-gauge {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          opacity: 0;
          transition: opacity 0.6s ease;
        }
        .mrd-reveal-in .mrd-gauge { opacity: 1; }
        .mrd-gauge-svg { width: min(200px, 60vw); height: auto; }
        .mrd-gauge-arc { transition: stroke-dashoffset 1.4s cubic-bezier(0.22, 1, 0.36, 1); }
        .mrd-gauge-label { font-family: var(--font-mono); font-size: 11.5px; font-weight: 700; letter-spacing: 0.14em; color: var(--mrd-text); }
        .mrd-gauge-caption { font-size: 12px; color: var(--mrd-text-faint); }
        @media (min-width: 640px) {
          .mrd-annunciators { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .mrd-gauges { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        @media (prefers-reduced-motion: reduce) {
          .mrd-systems .mrd-reveal, .mrd-annunciator, .mrd-gauge { opacity: 1; transform: none; transition: none; }
          .mrd-gauge-arc { transition: none; }
        }
      `}</style>
    </section>
  );
}
