"use client";

import { OWNER } from "../_data/portfolio";
import { useReveal } from "../_utils/reveal";

/* Hero — "attitude indicator" instrument beside the headline. The
   instrument is pure SVG/CSS: banked horizon disc that slowly levels,
   pitch ladder, fixed wing symbol, bezel readouts. */
export default function Horizon() {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="horizon" className="mrd-horizon">
      <div className="mrd-horizon-inner">
        <div ref={ref} className={`mrd-horizon-text mrd-reveal ${visible ? "mrd-reveal-in" : ""}`}>
          <span className="mrd-eyebrow">
            <span className="mrd-eyebrow-dot" /> {OWNER.availability}
          </span>

          <h1 className="mrd-headline">
            {OWNER.headline.map((line, i) => (
              <span key={i} className="mrd-headline-line">{line}</span>
            ))}
          </h1>

          <p className="mrd-subhead">{OWNER.subhead}</p>

          <div className="mrd-cta-row">
            <a href="#flightlog" className="mrd-btn-primary">Open the flight log</a>
            <a href="#contact" className="mrd-btn-outline">Request crew file</a>
          </div>

          <div className="mrd-stats-row">
            {OWNER.stats.map((s) => (
              <div key={s.label} className="mrd-stat">
                <span className="mrd-stat-value">{s.value}</span>
                <span className="mrd-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mrd-horizon-visual">
          <div className="mrd-instrument-wrap">
            <svg viewBox="0 0 320 320" className="mrd-instrument" role="img" aria-label="Attitude indicator instrument">
              <defs>
                <clipPath id="mrd-ai-face">
                  <circle cx="160" cy="160" r="128" />
                </clipPath>
                <linearGradient id="mrd-sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#274a66" />
                  <stop offset="1" stopColor="#3f7ba0" />
                </linearGradient>
                <linearGradient id="mrd-ground" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#6e4a24" />
                  <stop offset="1" stopColor="#3d2a16" />
                </linearGradient>
              </defs>

              {/* bezel */}
              <circle cx="160" cy="160" r="152" fill="#0b111f" stroke="rgba(214,226,247,0.14)" strokeWidth="2" />
              <circle cx="160" cy="160" r="134" fill="#060a12" />

              {/* banked horizon disc — CSS animates it level */}
              <g clipPath="url(#mrd-ai-face)">
                <g className="mrd-ai-disc">
                  <rect x="-40" y="-40" width="400" height="200" fill="url(#mrd-sky)" />
                  <rect x="-40" y="160" width="400" height="200" fill="url(#mrd-ground)" />
                  <rect x="-40" y="158.75" width="400" height="2.5" fill="#e8eefb" />
                  {/* pitch ladder */}
                  {[-60, -30, 30, 60].map((off) => (
                    <g key={off}>
                      <rect x={off > 0 ? 120 : 128} y={160 + off - 1} width={off > 0 ? 80 : 64} height="2" fill="rgba(232,238,251,0.75)" />
                    </g>
                  ))}
                  <rect x="140" y="129" width="40" height="1.5" fill="rgba(232,238,251,0.45)" />
                  <rect x="140" y="189" width="40" height="1.5" fill="rgba(232,238,251,0.45)" />
                </g>
              </g>

              {/* fixed wing symbol */}
              <g>
                <rect x="70" y="157" width="52" height="6" rx="3" fill="#f5a83c" />
                <rect x="198" y="157" width="52" height="6" rx="3" fill="#f5a83c" />
                <circle cx="160" cy="160" r="6" fill="none" stroke="#f5a83c" strokeWidth="5" />
              </g>

              {/* bank scale ticks */}
              <g stroke="rgba(232,238,251,0.5)" strokeWidth="2">
                {[-60, -45, -30, -20, -10, 0, 10, 20, 30, 45, 60].map((deg) => {
                  const rad = ((deg - 90) * Math.PI) / 180;
                  const long = deg % 30 === 0;
                  const r1 = 134;
                  const r2 = long ? 120 : 126;
                  return (
                    <line
                      key={deg}
                      x1={160 + r1 * Math.cos(rad)}
                      y1={160 + r1 * Math.sin(rad)}
                      x2={160 + r2 * Math.cos(rad)}
                      y2={160 + r2 * Math.sin(rad)}
                    />
                  );
                })}
              </g>
              <path d="M160 30 l-8 14 h16 Z" fill="#7fd4f2" />
            </svg>

            <div className="mrd-readouts">
              <div className="mrd-readout">
                <span className="mrd-readout-label">ALT</span>
                <span className="mrd-readout-value">38,000</span>
              </div>
              <div className="mrd-readout">
                <span className="mrd-readout-label">HDG</span>
                <span className="mrd-readout-value">094°</span>
              </div>
              <div className="mrd-readout">
                <span className="mrd-readout-label">MACH</span>
                <span className="mrd-readout-value">0.85</span>
              </div>
            </div>

            <p className="mrd-instrument-caption">
              {OWNER.name} — {OWNER.role}<br />
              <span className="mrd-instrument-caption-soft">{OWNER.base}</span>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .mrd-horizon {
          padding: clamp(92px, 13vw, 150px) 20px 44px;
          max-width: var(--max-w);
          margin: 0 auto;
        }
        .mrd-horizon-inner {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: start;
        }
        .mrd-horizon-text { display: flex; flex-direction: column; gap: 22px; }
        .mrd-reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .mrd-reveal-in { opacity: 1; transform: translateY(0); }
        .mrd-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--mrd-amber);
          border: 1px solid var(--mrd-amber-dim);
          border-radius: 100px;
          padding: 8px 14px 8px 11px;
        }
        .mrd-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background-color: var(--mrd-amber);
          animation: mrd-beacon 1.8s ease-in-out infinite;
        }
        @keyframes mrd-beacon { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        .mrd-headline {
          margin: 0;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(34px, 6.6vw, 58px);
          line-height: 1.06;
          letter-spacing: -0.015em;
          color: var(--mrd-text);
        }
        .mrd-headline-line { display: block; }
        .mrd-headline-line:nth-child(2) { color: var(--mrd-ice); }
        .mrd-headline-line:nth-child(3) { color: var(--mrd-amber); }
        .mrd-subhead {
          font-size: 15.5px;
          line-height: 1.75;
          color: var(--mrd-text-soft);
          margin: 0;
          max-width: 540px;
        }
        .mrd-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .mrd-btn-primary, .mrd-btn-outline {
          font-size: 14px;
          font-weight: 700;
          padding: 14px 24px;
          border-radius: 8px;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
        }
        .mrd-btn-primary { color: #12100a; background-color: var(--mrd-amber); }
        .mrd-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 26px -6px rgba(245,168,60,0.4); }
        .mrd-btn-primary:active { transform: scale(0.97); }
        .mrd-btn-outline { color: var(--mrd-text); border: 1px solid var(--mrd-line); }
        .mrd-btn-outline:hover { transform: translateY(-2px); background-color: rgba(214,226,247,0.06); }
        .mrd-btn-outline:active { transform: scale(0.97); }
        .mrd-stats-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 6px;
        }
        .mrd-stat {
          display: flex; flex-direction: column; gap: 2px;
          border-left: 2px solid var(--mrd-line);
          padding-left: 12px;
        }
        .mrd-stat-value { font-family: var(--font-mono); font-weight: 700; font-size: 22px; color: var(--mrd-ice); }
        .mrd-stat-label { font-size: 10.5px; color: var(--mrd-text-faint); text-transform: uppercase; letter-spacing: 0.05em; }
        .mrd-horizon-visual { display: flex; justify-content: center; }
        .mrd-instrument-wrap { display: flex; flex-direction: column; gap: 16px; width: min(100%, 380px); }
        .mrd-instrument { width: 100%; height: auto; filter: drop-shadow(0 24px 48px rgba(0,0,0,0.5)); }
        .mrd-ai-disc {
          transform-origin: 160px 160px;
          animation: mrd-level 9s ease-in-out infinite;
        }
        @keyframes mrd-level {
          0%, 100% { transform: rotate(-7deg); }
          50% { transform: rotate(5deg); }
        }
        .mrd-readouts {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }
        .mrd-readout {
          background-color: var(--mrd-panel);
          border: 1px solid var(--mrd-line-soft);
          border-radius: 8px;
          padding: 10px 12px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .mrd-readout-label { font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.14em; color: var(--mrd-text-faint); }
        .mrd-readout-value { font-family: var(--font-mono); font-size: 16px; font-weight: 600; color: var(--mrd-green); }
        .mrd-instrument-caption { font-size: 12px; color: var(--mrd-text-soft); line-height: 1.6; margin: 0; }
        .mrd-instrument-caption-soft { color: var(--mrd-text-faint); }
        @media (min-width: 640px) {
          .mrd-stats-row { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }
        @media (min-width: 960px) {
          .mrd-horizon-inner { grid-template-columns: 1.05fr 0.95fr; gap: 64px; }
          .mrd-horizon-visual { position: sticky; top: 110px; align-self: start; }
        }
        @media (prefers-reduced-motion: reduce) {
          .mrd-ai-disc { animation: none; }
          .mrd-eyebrow-dot { animation: none; }
          .mrd-reveal { opacity: 1; transform: none; transition: none; }
        }
      `}</style>
    </section>
  );
}
