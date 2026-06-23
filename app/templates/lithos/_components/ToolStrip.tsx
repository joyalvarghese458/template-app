"use client";

import { TOOLS } from "../_data/portfolio";

export default function ToolStrip() {
  const loop = [...TOOLS, ...TOOLS];

  return (
    <section aria-label="Field and lab tools" className="lithos-strip-section">
      <div className="lithos-strip-track">
        {loop.map((tool, i) => (
          <span key={`${tool}-${i}`} className="lithos-strip-item">
            {tool} <span className="lithos-strip-glyph">●</span>
          </span>
        ))}
      </div>

      <style>{`
        .lithos-strip-section {
          background-color: #1c1610;
          border-top: 1px solid rgba(255,255,255,0.09);
          border-bottom: 1px solid rgba(255,255,255,0.09);
          padding: 20px 0;
          overflow: hidden;
        }
        .lithos-strip-track {
          display: flex;
          gap: 32px;
          width: max-content;
          animation: lithos-strip-scroll 32s linear infinite;
        }
        .lithos-strip-section:hover .lithos-strip-track { animation-play-state: paused; }
        .lithos-strip-item {
          display: flex;
          align-items: center;
          gap: 32px;
          font-family: var(--font-body, sans-serif);
          font-size: 15px;
          font-weight: 500;
          color: #f4ece1;
          white-space: nowrap;
        }
        .lithos-strip-glyph { color: #e8702a; font-size: 8px; }
        @keyframes lithos-strip-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .lithos-strip-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
