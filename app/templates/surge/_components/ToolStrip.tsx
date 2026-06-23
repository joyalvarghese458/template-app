"use client";

import { TOOLS } from "../_data/portfolio";

export default function ToolStrip() {
  const loop = [...TOOLS, ...TOOLS];

  return (
    <section aria-label="Marketing tools" className="surge-strip-section">
      <div className="surge-strip-track">
        {loop.map((tool, i) => (
          <span key={`${tool}-${i}`} className="surge-strip-item">
            {tool} <span className="surge-strip-glyph">/</span>
          </span>
        ))}
      </div>

      <style>{`
        .surge-strip-section {
          background-color: #0f1222;
          padding: 18px 0;
          overflow: hidden;
        }
        .surge-strip-track {
          display: flex;
          gap: 32px;
          width: max-content;
          animation: surge-strip-scroll 30s linear infinite;
        }
        .surge-strip-section:hover .surge-strip-track { animation-play-state: paused; }
        .surge-strip-item {
          display: flex;
          align-items: center;
          gap: 32px;
          font-family: var(--font-display, sans-serif);
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
          white-space: nowrap;
        }
        .surge-strip-glyph { color: #ff3d7f; }
        @keyframes surge-strip-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .surge-strip-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
