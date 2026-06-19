"use client";

import { STACK } from "../_data/portfolio";

export default function StackStrip() {
  const loop = [...STACK, ...STACK];

  return (
    <section aria-label="Tools and stack" className="cortex-stack-section">
      <div className="cortex-stack-track">
        {loop.map((tool, i) => (
          <span key={`${tool}-${i}`} className="cortex-stack-item">
            <span className="cortex-stack-bracket">import</span> {tool}
          </span>
        ))}
      </div>

      <style>{`
        .cortex-stack-section {
          background-color: #0f1525;
          border-top: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 26px 0;
          overflow: hidden;
        }
        .cortex-stack-track {
          display: flex;
          gap: 48px;
          width: max-content;
          animation: cortex-stack-scroll 32s linear infinite;
        }
        .cortex-stack-section:hover .cortex-stack-track { animation-play-state: paused; }
        .cortex-stack-item {
          font-family: var(--font-mono, monospace);
          font-size: 13.5px;
          color: #eef1f8;
          white-space: nowrap;
        }
        .cortex-stack-bracket { color: #8b5cf6; }
        @keyframes cortex-stack-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .cortex-stack-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
