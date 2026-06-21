"use client";

import { TOOLS } from "../_data/portfolio";

export default function ToolBand() {
  const loop = [...TOOLS, ...TOOLS];

  return (
    <section aria-label="Design tools" className="prism-band-section">
      <div className="prism-band-track">
        {loop.map((tool, i) => (
          <span key={`${tool}-${i}`} className="prism-band-item">
            {tool} <span className="prism-band-glyph">◆</span>
          </span>
        ))}
      </div>

      <style>{`
        .prism-band-section {
          background-color: rgba(255,255,255,0.03);
          border-top: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 22px 0;
          overflow: hidden;
        }
        .prism-band-track {
          display: flex;
          gap: 40px;
          width: max-content;
          animation: prism-band-scroll 30s linear infinite;
        }
        .prism-band-section:hover .prism-band-track { animation-play-state: paused; }
        .prism-band-item {
          display: flex;
          align-items: center;
          gap: 40px;
          font-family: var(--font-display, sans-serif);
          font-size: 15px;
          font-weight: 500;
          color: #f5f4fa;
          white-space: nowrap;
        }
        .prism-band-glyph { font-size: 9px; background-image: linear-gradient(120deg, #2dd9c4, #e94fd1); -webkit-background-clip: text; background-clip: text; color: transparent; }
        @keyframes prism-band-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .prism-band-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
