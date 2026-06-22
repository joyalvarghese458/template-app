"use client";

import { TOOLS } from "../_data/portfolio";

export default function ToolStrip() {
  const loop = [...TOOLS, ...TOOLS];

  return (
    <section aria-label="Accounting software" className="ledger-strip-section">
      <div className="ledger-strip-track">
        {loop.map((tool, i) => (
          <span key={`${tool}-${i}`} className="ledger-strip-item">
            {tool} <span className="ledger-strip-glyph">●</span>
          </span>
        ))}
      </div>

      <style>{`
        .ledger-strip-section {
          background-color: #f1e8d3;
          border-top: 1px solid rgba(22,41,31,0.12);
          border-bottom: 1px solid rgba(22,41,31,0.12);
          padding: 20px 0;
          overflow: hidden;
        }
        .ledger-strip-track {
          display: flex;
          gap: 32px;
          width: max-content;
          animation: ledger-strip-scroll 28s linear infinite;
        }
        .ledger-strip-section:hover .ledger-strip-track { animation-play-state: paused; }
        .ledger-strip-item {
          display: flex;
          align-items: center;
          gap: 32px;
          font-family: var(--font-display, serif);
          font-size: 15px;
          font-weight: 600;
          color: #16291f;
          white-space: nowrap;
        }
        .ledger-strip-glyph { color: #b8862c; font-size: 8px; }
        @keyframes ledger-strip-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ledger-strip-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
