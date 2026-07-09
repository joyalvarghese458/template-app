"use client";

import { SECTORS } from "../_data/portfolio";

export default function SectorStrip() {
  const loop = [...SECTORS, ...SECTORS];

  return (
    <section aria-label="Sectors advised" className="vtg-strip-section">
      <div className="vtg-strip-note">
        <span className="vtg-strip-note-text">Engagements across sectors</span>
        <span className="vtg-strip-note-nda">Client names withheld under NDA</span>
      </div>
      <div className="vtg-strip-track">
        {loop.map((s, i) => (
          <span key={`${s}-${i}`} className="vtg-strip-item">
            <span className="vtg-strip-name">{s}</span>
            <span className="vtg-strip-glyph">/</span>
          </span>
        ))}
      </div>

      <style>{`
        .vtg-strip-section {
          background-color: #eee8d9;
          padding: 22px 0 18px;
          overflow: hidden;
          border-top: 1px solid rgba(23,20,15,0.1);
          border-bottom: 1px solid rgba(23,20,15,0.1);
        }
        .vtg-strip-note {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px 14px;
          display: flex;
          align-items: baseline;
          gap: 10px;
          flex-wrap: wrap;
        }
        .vtg-strip-note-text { font-family: var(--font-mono, monospace); font-size: 10.5px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #17140f; }
        .vtg-strip-note-nda { font-size: 12px; color: #8a8271; }
        .vtg-strip-track {
          display: flex;
          gap: 30px;
          width: max-content;
          animation: vtg-strip-scroll 34s linear infinite;
        }
        .vtg-strip-section:hover .vtg-strip-track { animation-play-state: paused; }
        .vtg-strip-item {
          display: flex;
          align-items: baseline;
          gap: 20px;
          white-space: nowrap;
        }
        .vtg-strip-name { font-family: var(--font-display, serif); font-weight: 600; font-size: 19px; color: #17140f; }
        .vtg-strip-glyph { color: #b3703b; font-size: 16px; opacity: 0.6; }
        @keyframes vtg-strip-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .vtg-strip-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
