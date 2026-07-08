"use client";

import { AFFILIATIONS } from "../_data/portfolio";

export default function PressStrip() {
  const loop = [...AFFILIATIONS, ...AFFILIATIONS];

  return (
    <section aria-label="Press features and affiliations" className="kln-strip-section">
      <div className="kln-strip-track">
        {loop.map((a, i) => (
          <span key={`${a.name}-${i}`} className="kln-strip-item">
            <span className="kln-strip-name">{a.name}</span>
            <span className="kln-strip-role">{a.role}</span>
            <span className="kln-strip-glyph">●</span>
          </span>
        ))}
      </div>

      <style>{`
        .kln-strip-section {
          background-color: #efe4d3;
          padding: 18px 0;
          overflow: hidden;
          border-top: 1px solid rgba(58,46,34,0.12);
          border-bottom: 1px solid rgba(58,46,34,0.12);
        }
        .kln-strip-track {
          display: flex;
          gap: 32px;
          width: max-content;
          animation: kln-strip-scroll 38s linear infinite;
        }
        .kln-strip-section:hover .kln-strip-track { animation-play-state: paused; }
        .kln-strip-item {
          display: flex;
          align-items: baseline;
          gap: 10px;
          white-space: nowrap;
        }
        .kln-strip-name { font-family: var(--font-display, serif); font-weight: 600; font-style: italic; font-size: 18px; color: #3a2e22; }
        .kln-strip-role { font-size: 10.5px; font-weight: 500; color: #6b5a45; text-transform: uppercase; letter-spacing: 0.04em; }
        .kln-strip-glyph { color: #c15f3c; margin-left: 22px; font-size: 8px; }
        @keyframes kln-strip-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .kln-strip-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
