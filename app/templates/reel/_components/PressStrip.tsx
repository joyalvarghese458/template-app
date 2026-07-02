"use client";

import { AFFILIATIONS } from "../_data/portfolio";

export default function PressStrip() {
  const loop = [...AFFILIATIONS, ...AFFILIATIONS];

  return (
    <section aria-label="Festival selections and screenings" className="rl-strip-section">
      <div className="rl-strip-bulbs" aria-hidden="true" />
      <div className="rl-strip-track">
        {loop.map((a, i) => (
          <span key={`${a.name}-${i}`} className="rl-strip-item">
            <span className="rl-strip-name">{a.name}</span>
            <span className="rl-strip-role">{a.role}</span>
            <span className="rl-strip-glyph">●</span>
          </span>
        ))}
      </div>

      <style>{`
        .rl-strip-section {
          position: relative;
          background-color: #14100c;
          padding: 18px 0;
          overflow: hidden;
          border-top: 1px solid rgba(201,161,90,0.18);
          border-bottom: 1px solid rgba(201,161,90,0.18);
        }
        .rl-strip-bulbs {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: radial-gradient(circle, rgba(201,161,90,0.5) 1.5px, transparent 1.5px);
          background-size: 26px 100%;
          background-position: 0 4px;
          opacity: 0.6;
          animation: rl-bulb-flicker 2.4s steps(2) infinite;
        }
        @keyframes rl-bulb-flicker { 0%, 100% { opacity: 0.35; } 50% { opacity: 0.7; } }
        .rl-strip-track {
          display: flex;
          gap: 32px;
          width: max-content;
          animation: rl-strip-scroll 36s linear infinite;
        }
        .rl-strip-section:hover .rl-strip-track { animation-play-state: paused; }
        .rl-strip-item {
          display: flex;
          align-items: baseline;
          gap: 10px;
          white-space: nowrap;
        }
        .rl-strip-name { font-family: var(--font-display, sans-serif); font-weight: 400; letter-spacing: 0.03em; text-transform: uppercase; font-size: 17px; color: #f3ece1; }
        .rl-strip-role { font-size: 11px; font-weight: 500; color: #b7a996; text-transform: uppercase; letter-spacing: 0.03em; }
        .rl-strip-glyph { color: #d1263f; margin-left: 22px; font-size: 6px; }
        @keyframes rl-strip-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .rl-strip-track, .rl-strip-bulbs { animation: none; }
        }
      `}</style>
    </section>
  );
}
