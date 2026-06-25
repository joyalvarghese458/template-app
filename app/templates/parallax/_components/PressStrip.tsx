"use client";

import { AFFILIATIONS } from "../_data/portfolio";

export default function PressStrip() {
  const loop = [...AFFILIATIONS, ...AFFILIATIONS];

  return (
    <section aria-label="Schools, festivals, and studio affiliations" className="prlx-strip-section">
      <div className="prlx-strip-track">
        {loop.map((a, i) => (
          <span key={`${a.name}-${i}`} className="prlx-strip-item">
            <span className="prlx-strip-name">{a.name}</span>
            <span className="prlx-strip-role">{a.role}</span>
            <span className="prlx-strip-glyph">»</span>
          </span>
        ))}
      </div>

      <style>{`
        .prlx-strip-section {
          background-color: #131419;
          padding: 18px 0;
          overflow: hidden;
          border-top: 1px solid rgba(241,243,246,0.08);
          border-bottom: 1px solid rgba(241,243,246,0.08);
        }
        .prlx-strip-track {
          display: flex;
          gap: 32px;
          width: max-content;
          animation: prlx-strip-scroll 34s linear infinite;
        }
        .prlx-strip-section:hover .prlx-strip-track { animation-play-state: paused; }
        .prlx-strip-item {
          display: flex;
          align-items: baseline;
          gap: 10px;
          white-space: nowrap;
        }
        .prlx-strip-name { font-family: var(--font-display, sans-serif); font-size: 15px; font-weight: 700; color: #f1f3f6; }
        .prlx-strip-role { font-size: 11px; font-weight: 500; color: #9ba1ad; text-transform: uppercase; letter-spacing: 0.03em; }
        .prlx-strip-glyph { color: #2dd4bf; margin-left: 22px; font-weight: 700; }
        @keyframes prlx-strip-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .prlx-strip-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
