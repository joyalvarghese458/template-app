"use client";

import { FEATURED } from "../_data/portfolio";

export default function Featured() {
  const loop = [...FEATURED, ...FEATURED];

  return (
    <section aria-label="Featured in and speaking" className="vtg-featured-section">
      <div className="vtg-featured-track">
        {loop.map((f, i) => (
          <span key={`${f.name}-${i}`} className="vtg-featured-item">
            <span className="vtg-featured-name">{f.name}</span>
            <span className="vtg-featured-role">{f.role}</span>
            <span className="vtg-featured-glyph">●</span>
          </span>
        ))}
      </div>

      <style>{`
        .vtg-featured-section {
          background-color: #17140f;
          padding: 18px 0;
          overflow: hidden;
        }
        .vtg-featured-track {
          display: flex;
          gap: 32px;
          width: max-content;
          animation: vtg-featured-scroll 40s linear infinite;
        }
        .vtg-featured-section:hover .vtg-featured-track { animation-play-state: paused; }
        .vtg-featured-item {
          display: flex;
          align-items: baseline;
          gap: 10px;
          white-space: nowrap;
        }
        .vtg-featured-name { font-family: var(--font-display, serif); font-weight: 600; font-style: italic; font-size: 17px; color: #f6f3ea; }
        .vtg-featured-role { font-size: 10.5px; font-weight: 500; color: rgba(246,243,234,0.5); text-transform: uppercase; letter-spacing: 0.04em; }
        .vtg-featured-glyph { color: #17916f; margin-left: 22px; font-size: 8px; }
        @keyframes vtg-featured-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .vtg-featured-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
