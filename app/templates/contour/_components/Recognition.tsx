"use client";

import { RECOGNITION } from "../_data/portfolio";

export default function Recognition() {
  const loop = [...RECOGNITION, ...RECOGNITION];

  return (
    <section aria-label="Awards and recognition" className="ctr-recog-section">
      <div className="ctr-recog-track">
        {loop.map((r, i) => (
          <span key={`${r.name}-${i}`} className="ctr-recog-item">
            <span className="ctr-recog-name">{r.name}</span>
            <span className="ctr-recog-role">{r.role}</span>
            <span className="ctr-recog-glyph">●</span>
          </span>
        ))}
      </div>

      <style>{`
        .ctr-recog-section {
          background-color: #212a1f;
          padding: 18px 0;
          overflow: hidden;
        }
        .ctr-recog-track {
          display: flex;
          gap: 32px;
          width: max-content;
          animation: ctr-recog-scroll 40s linear infinite;
        }
        .ctr-recog-section:hover .ctr-recog-track { animation-play-state: paused; }
        .ctr-recog-item {
          display: flex;
          align-items: baseline;
          gap: 10px;
          white-space: nowrap;
        }
        .ctr-recog-name { font-family: var(--font-display, serif); font-weight: 600; font-style: italic; font-size: 17px; color: #f3f0e5; }
        .ctr-recog-role { font-size: 10.5px; font-weight: 500; color: rgba(243,240,229,0.5); text-transform: uppercase; letter-spacing: 0.04em; }
        .ctr-recog-glyph { color: #6f9459; margin-left: 22px; font-size: 8px; }
        @keyframes ctr-recog-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ctr-recog-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
