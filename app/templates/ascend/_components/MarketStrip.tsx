"use client";

import { MARKETS } from "../_data/portfolio";

export default function MarketStrip() {
  const loop = [...MARKETS, ...MARKETS];

  return (
    <section aria-label="Markets clients have been placed in" className="ascend-market-section">
      <p className="ascend-market-label">Clients placed across</p>
      <div className="ascend-market-track">
        {loop.map((m, i) => (
          <span key={`${m}-${i}`} className="ascend-market-item">{m}</span>
        ))}
      </div>

      <style>{`
        .ascend-market-section {
          background-color: #fff;
          border-top: 1px solid rgba(28,21,48,0.08);
          border-bottom: 1px solid rgba(28,21,48,0.08);
          padding: 22px 0;
          overflow: hidden;
        }
        .ascend-market-label {
          text-align: center;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #a39cb0;
          text-transform: uppercase;
          margin: 0 0 12px;
        }
        .ascend-market-track {
          display: flex;
          gap: 14px;
          width: max-content;
          animation: ascend-market-scroll 28s linear infinite;
          padding: 0 20px;
        }
        .ascend-market-section:hover .ascend-market-track { animation-play-state: paused; }
        .ascend-market-item {
          font-size: 14px;
          font-weight: 700;
          color: #1c1530;
          background-color: #f3effc;
          border-radius: 100px;
          padding: 8px 18px;
          white-space: nowrap;
        }
        @keyframes ascend-market-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ascend-market-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
