"use client";

import { PRESS } from "../_data/portfolio";

export default function PressStrip() {
  const loop = [...PRESS, ...PRESS];

  return (
    <section aria-label="Press and accolades" className="umami-strip-section">
      <div className="umami-strip-track">
        {loop.map((p, i) => (
          <span key={`${p.name}-${i}`} className="umami-strip-item">
            <span className="umami-strip-name">{p.name}</span>
            <span className="umami-strip-role">{p.role}</span>
            <span className="umami-strip-glyph">~</span>
          </span>
        ))}
      </div>

      <style>{`
        .umami-strip-section {
          background-color: #1c1613;
          padding: 18px 0;
          overflow: hidden;
          border-top: 1px solid rgba(245,236,224,0.08);
          border-bottom: 1px solid rgba(245,236,224,0.08);
        }
        .umami-strip-track {
          display: flex;
          gap: 32px;
          width: max-content;
          animation: umami-strip-scroll 34s linear infinite;
        }
        .umami-strip-section:hover .umami-strip-track { animation-play-state: paused; }
        .umami-strip-item {
          display: flex;
          align-items: baseline;
          gap: 10px;
          white-space: nowrap;
        }
        .umami-strip-name { font-family: var(--font-display, serif); font-size: 16px; font-weight: 600; color: #f5ece0; }
        .umami-strip-role { font-size: 11px; font-weight: 500; color: #c4b6a8; text-transform: uppercase; letter-spacing: 0.03em; }
        .umami-strip-glyph { color: #e8552c; margin-left: 22px; font-weight: 700; }
        @keyframes umami-strip-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .umami-strip-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
