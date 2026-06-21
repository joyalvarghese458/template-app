"use client";

import { TOOLS } from "../_data/portfolio";

export default function ToolStrip() {
  const loop = [...TOOLS, ...TOOLS];

  return (
    <section aria-label="Engineering software" className="strata-strip-section">
      <div className="strata-strip-track">
        {loop.map((tool, i) => (
          <span key={`${tool}-${i}`} className="strata-strip-item">
            {tool} <span className="strata-strip-glyph">/</span>
          </span>
        ))}
      </div>

      <style>{`
        .strata-strip-section {
          background-color: #1f2421;
          padding: 18px 0;
          overflow: hidden;
        }
        .strata-strip-track {
          display: flex;
          gap: 28px;
          width: max-content;
          animation: strata-strip-scroll 30s linear infinite;
        }
        .strata-strip-section:hover .strata-strip-track { animation-play-state: paused; }
        .strata-strip-item {
          display: flex;
          align-items: center;
          gap: 28px;
          font-family: var(--font-mono, monospace);
          font-size: 13.5px;
          font-weight: 500;
          color: #eef0ec;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          white-space: nowrap;
        }
        .strata-strip-glyph { color: #f15a24; }
        @keyframes strata-strip-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .strata-strip-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
