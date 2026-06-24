"use client";

import { AFFILIATIONS } from "../_data/portfolio";

export default function LeadershipStrip() {
  const loop = [...AFFILIATIONS, ...AFFILIATIONS];

  return (
    <section aria-label="Boards and leadership affiliations" className="ech-strip-section">
      <div className="ech-strip-track">
        {loop.map((aff, i) => (
          <span key={`${aff.name}-${i}`} className="ech-strip-item">
            <span className="ech-strip-name">{aff.name}</span>
            <span className="ech-strip-role">{aff.role}</span>
            <span className="ech-strip-glyph">»</span>
          </span>
        ))}
      </div>

      <style>{`
        .ech-strip-section {
          background-color: #11151d;
          padding: 18px 0;
          overflow: hidden;
          border-top: 1px solid rgba(238,241,246,0.08);
          border-bottom: 1px solid rgba(238,241,246,0.08);
        }
        .ech-strip-track {
          display: flex;
          gap: 32px;
          width: max-content;
          animation: ech-strip-scroll 36s linear infinite;
        }
        .ech-strip-section:hover .ech-strip-track { animation-play-state: paused; }
        .ech-strip-item {
          display: flex;
          align-items: baseline;
          gap: 10px;
          white-space: nowrap;
        }
        .ech-strip-name { font-family: var(--font-display, serif); font-size: 15px; font-weight: 600; color: #eef1f6; }
        .ech-strip-role { font-size: 11px; font-weight: 500; color: #9aa7bb; text-transform: uppercase; letter-spacing: 0.03em; }
        .ech-strip-glyph { color: #3b6fe0; margin-left: 22px; font-weight: 700; }
        @keyframes ech-strip-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ech-strip-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
