"use client";

import { RECOGNITION } from "../_data/portfolio";

export default function Recognition() {
  const loop = [...RECOGNITION, ...RECOGNITION];

  return (
    <section aria-label="Recognized by" className="vd-recog-section">
      <div className="vd-recog-track">
        {loop.map((f, i) => (
          <span key={`${f.name}-${i}`} className="vd-recog-item">
            <span className="vd-recog-name">{f.name}</span>
            <span className="vd-recog-role">{f.role}</span>
            <span className="vd-recog-glyph">●</span>
          </span>
        ))}
      </div>

      <style>{`
        .vd-recog-section {
          background-color: #0d0d10;
          padding: 18px 0;
          overflow: hidden;
        }
        .vd-recog-track {
          display: flex;
          gap: 32px;
          width: max-content;
          animation: vd-recog-scroll 40s linear infinite;
        }
        .vd-recog-section:hover .vd-recog-track { animation-play-state: paused; }
        .vd-recog-item {
          display: flex;
          align-items: baseline;
          gap: 10px;
          white-space: nowrap;
        }
        .vd-recog-name { font-family: var(--font-display, serif); font-weight: 700; font-style: italic; font-size: 17px; color: #f6f2e8; }
        .vd-recog-role { font-size: 10.5px; font-weight: 500; color: rgba(246,242,232,0.5); text-transform: uppercase; letter-spacing: 0.04em; }
        .vd-recog-glyph { color: #b6903f; margin-left: 22px; font-size: 8px; }
        @keyframes vd-recog-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .vd-recog-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
