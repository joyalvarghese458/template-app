"use client";

import { TOOLS } from "../_data/portfolio";

export default function ToolTicker() {
  const loop = [...TOOLS, ...TOOLS];

  return (
    <section aria-label="Tools and arsenal" className="cipher-ticker-section">
      <div className="cipher-ticker-track">
        {loop.map((tool, i) => (
          <span key={`${tool}-${i}`} className="cipher-ticker-item">
            <span className="cipher-ticker-glyph">&gt;_</span> {tool}
          </span>
        ))}
      </div>

      <style>{`
        .cipher-ticker-section {
          background-color: #0d120f;
          border-top: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 26px 0;
          overflow: hidden;
        }
        .cipher-ticker-track {
          display: flex;
          gap: 48px;
          width: max-content;
          animation: cipher-ticker-scroll 32s linear infinite;
        }
        .cipher-ticker-section:hover .cipher-ticker-track { animation-play-state: paused; }
        .cipher-ticker-item {
          font-family: var(--font-mono, monospace);
          font-size: 13.5px;
          color: #e9f5ee;
          white-space: nowrap;
        }
        .cipher-ticker-glyph { color: #39ff8c; }
        @keyframes cipher-ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .cipher-ticker-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
