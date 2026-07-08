"use client";

import { AFFILIATIONS } from "../_data/portfolio";

export default function PressStrip() {
  const loop = [...AFFILIATIONS, ...AFFILIATIONS];

  return (
    <section aria-label="Press features and affiliations" className="esc-strip-section">
      <div className="esc-strip-track">
        {loop.map((a, i) => (
          <span key={`${a.name}-${i}`} className="esc-strip-item">
            <span className="esc-strip-name">{a.name}</span>
            <span className="esc-strip-role">{a.role}</span>
            <span className="esc-strip-glyph">✧</span>
          </span>
        ))}
      </div>

      <style>{`
        .esc-strip-section {
          background-color: #17140f;
          padding: 18px 0;
          overflow: hidden;
          border-top: 1px solid rgba(242,234,217,0.1);
          border-bottom: 1px solid rgba(242,234,217,0.1);
        }
        .esc-strip-track {
          display: flex;
          gap: 32px;
          width: max-content;
          animation: esc-strip-scroll 38s linear infinite;
        }
        .esc-strip-section:hover .esc-strip-track { animation-play-state: paused; }
        .esc-strip-item {
          display: flex;
          align-items: baseline;
          gap: 10px;
          white-space: nowrap;
        }
        .esc-strip-name { font-family: var(--font-display, serif); font-weight: 600; font-style: italic; font-size: 18px; color: #f2ead9; }
        .esc-strip-role { font-size: 10.5px; font-weight: 500; color: #b9ac93; text-transform: uppercase; letter-spacing: 0.04em; }
        .esc-strip-glyph { color: #c9a24b; margin-left: 22px; font-size: 11px; }
        @keyframes esc-strip-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .esc-strip-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
