"use client";

import { TOOLS } from "../_data/portfolio";

export default function ToolStrip() {
  const loop = [...TOOLS, ...TOOLS];

  return (
    <section aria-label="Engineering software" className="redline-strip-section">
      <div className="redline-strip-track">
        {loop.map((tool, i) => (
          <span key={`${tool}-${i}`} className="redline-strip-item">
            {tool} <span className="redline-strip-glyph">●</span>
          </span>
        ))}
      </div>

      <style>{`
        .redline-strip-section {
          background-color: #16161a;
          border-top: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 20px 0;
          overflow: hidden;
        }
        .redline-strip-track {
          display: flex;
          gap: 32px;
          width: max-content;
          animation: redline-strip-scroll 28s linear infinite;
        }
        .redline-strip-section:hover .redline-strip-track { animation-play-state: paused; }
        .redline-strip-item {
          display: flex;
          align-items: center;
          gap: 32px;
          font-family: var(--font-display, sans-serif);
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #f2f2f0;
          white-space: nowrap;
        }
        .redline-strip-glyph { color: #e10600; font-size: 8px; }
        @keyframes redline-strip-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .redline-strip-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
