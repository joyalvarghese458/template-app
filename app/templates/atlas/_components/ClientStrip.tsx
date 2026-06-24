"use client";

import { INDUSTRIES } from "../_data/portfolio";

export default function ClientStrip() {
  const loop = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <section aria-label="Industries advised" className="atlas-strip-section">
      <div className="atlas-strip-track">
        {loop.map((industry, i) => (
          <span key={`${industry}-${i}`} className="atlas-strip-item">
            {industry} <span className="atlas-strip-glyph">/</span>
          </span>
        ))}
      </div>

      <style>{`
        .atlas-strip-section {
          background-color: #111a2c;
          padding: 18px 0;
          overflow: hidden;
          border-top: 1px solid rgba(243,239,228,0.08);
          border-bottom: 1px solid rgba(243,239,228,0.08);
        }
        .atlas-strip-track {
          display: flex;
          gap: 32px;
          width: max-content;
          animation: atlas-strip-scroll 32s linear infinite;
        }
        .atlas-strip-section:hover .atlas-strip-track { animation-play-state: paused; }
        .atlas-strip-item {
          display: flex;
          align-items: center;
          gap: 32px;
          font-family: var(--font-display, serif);
          font-size: 15px;
          font-weight: 500;
          color: #f3efe4;
          white-space: nowrap;
        }
        .atlas-strip-glyph { color: #d4af6a; }
        @keyframes atlas-strip-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .atlas-strip-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
