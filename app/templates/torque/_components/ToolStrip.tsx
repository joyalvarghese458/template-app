"use client";

import { TOOLS } from "../_data/portfolio";

export default function ToolStrip() {
  const loop = [...TOOLS, ...TOOLS];

  return (
    <section
      aria-label="Engineering tools and software"
      className="torque-marquee-section"
      style={{
        backgroundColor: "#11151b",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "28px 0",
        overflow: "hidden",
      }}
    >
      <div className="torque-marquee-track">
        {loop.map((tool, i) => (
          <span key={`${tool}-${i}`} className="torque-marquee-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" stroke="#ff6a1f" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="12" cy="12" r="5" stroke="#3fa9f5" strokeWidth="1.6" />
            </svg>
            {tool}
          </span>
        ))}
      </div>

      <style>{`
        .torque-marquee-track {
          display: flex;
          gap: 56px;
          width: max-content;
          animation: torqueMarquee 32s linear infinite;
        }
        .torque-marquee-section:hover .torque-marquee-track {
          animation-play-state: paused;
        }
        .torque-marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono, monospace);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: #8a93a3;
          white-space: nowrap;
        }
        @keyframes torqueMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .torque-marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
