"use client";

import { TOOLS } from "../_data/portfolio";

export default function ToolStrip() {
  const loop = [...TOOLS, ...TOOLS];

  return (
    <section aria-label="Field and lab instruments" className="marea-strip-section">
      <div className="marea-strip-track">
        {loop.map((tool, i) => (
          <span key={`${tool}-${i}`} className="marea-strip-item">
            {tool} <span className="marea-strip-glyph">●</span>
          </span>
        ))}
      </div>

      <style>{`
        .marea-strip-section {
          background-color: #071c27;
          border-top: 1px solid rgba(255,255,255,0.09);
          border-bottom: 1px solid rgba(255,255,255,0.09);
          padding: 20px 0;
          overflow: hidden;
        }
        .marea-strip-track {
          display: flex;
          gap: 32px;
          width: max-content;
          animation: marea-strip-scroll 32s linear infinite;
        }
        .marea-strip-section:hover .marea-strip-track { animation-play-state: paused; }
        .marea-strip-item {
          display: flex;
          align-items: center;
          gap: 32px;
          font-family: var(--font-body, sans-serif);
          font-size: 15px;
          font-weight: 500;
          color: #eaf6f5;
          white-space: nowrap;
        }
        .marea-strip-glyph { color: #2fe2c4; font-size: 8px; }
        @keyframes marea-strip-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marea-strip-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
