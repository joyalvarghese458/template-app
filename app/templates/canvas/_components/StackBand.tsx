"use client";

import { TOOLS } from "../_data/portfolio";

export default function StackBand() {
  const loop = [...TOOLS, ...TOOLS];

  return (
    <section aria-label="Design tools" className="canvas-band-section">
      <div className="canvas-band-track">
        {loop.map((tool, i) => (
          <span key={`${tool}-${i}`} className="canvas-band-item">
            {tool} <span className="canvas-band-glyph">✦</span>
          </span>
        ))}
      </div>

      <style>{`
        .canvas-band-section {
          background-color: #14110f;
          padding: 18px 0;
          overflow: hidden;
        }
        .canvas-band-track {
          display: flex;
          gap: 28px;
          width: max-content;
          animation: canvas-band-scroll 30s linear infinite;
        }
        .canvas-band-section:hover .canvas-band-track { animation-play-state: paused; }
        .canvas-band-item {
          display: flex;
          align-items: center;
          gap: 28px;
          font-family: var(--font-display, sans-serif);
          font-size: 17px;
          color: #f7f3ea;
          white-space: nowrap;
        }
        .canvas-band-glyph { color: #f5c518; }
        @keyframes canvas-band-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .canvas-band-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
