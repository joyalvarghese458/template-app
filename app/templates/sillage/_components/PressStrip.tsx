"use client";

import { AFFILIATIONS } from "../_data/portfolio";

export default function PressStrip() {
  const loop = [...AFFILIATIONS, ...AFFILIATIONS];

  return (
    <section aria-label="Stockists and press features" className="sil-strip-section">
      <div className="sil-strip-track">
        {loop.map((a, i) => (
          <span key={`${a.name}-${i}`} className="sil-strip-item">
            <span className="sil-strip-name">{a.name}</span>
            <span className="sil-strip-role">{a.role}</span>
            <span className="sil-strip-glyph">✦</span>
          </span>
        ))}
      </div>

      <style>{`
        .sil-strip-section {
          background-color: #f3ecdc;
          padding: 18px 0;
          overflow: hidden;
          border-top: 1px solid rgba(43,32,21,0.12);
          border-bottom: 1px solid rgba(43,32,21,0.12);
        }
        .sil-strip-track {
          display: flex;
          gap: 32px;
          width: max-content;
          animation: sil-strip-scroll 38s linear infinite;
        }
        .sil-strip-section:hover .sil-strip-track { animation-play-state: paused; }
        .sil-strip-item {
          display: flex;
          align-items: baseline;
          gap: 10px;
          white-space: nowrap;
        }
        .sil-strip-name { font-family: var(--font-display, serif); font-weight: 600; font-style: italic; font-size: 18px; color: #2b2015; }
        .sil-strip-role { font-size: 10.5px; font-weight: 500; color: #6f5f47; text-transform: uppercase; letter-spacing: 0.04em; }
        .sil-strip-glyph { color: #b1556b; margin-left: 22px; font-size: 11px; }
        @keyframes sil-strip-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .sil-strip-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
