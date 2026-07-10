"use client";

import { PRACTICE_AREAS } from "../_data/portfolio";

export default function PracticeStrip() {
  const loop = [...PRACTICE_AREAS, ...PRACTICE_AREAS];

  return (
    <section aria-label="Practice areas" className="vd-strip-section">
      <div className="vd-strip-note">
        <span className="vd-strip-note-text">Practice areas</span>
        <span className="vd-strip-note-nda">Engagements available on a retained or matter basis</span>
      </div>
      <div className="vd-strip-track">
        {loop.map((s, i) => (
          <span key={`${s}-${i}`} className="vd-strip-item">
            <span className="vd-strip-name">{s}</span>
            <span className="vd-strip-glyph">§</span>
          </span>
        ))}
      </div>

      <style>{`
        .vd-strip-section {
          background-color: #ece3cf;
          padding: 22px 0 18px;
          overflow: hidden;
          border-top: 1px solid rgba(23,20,15,0.1);
          border-bottom: 1px solid rgba(23,20,15,0.1);
        }
        .vd-strip-note {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px 14px;
          display: flex;
          align-items: baseline;
          gap: 10px;
          flex-wrap: wrap;
        }
        .vd-strip-note-text { font-family: var(--font-mono, monospace); font-size: 10.5px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #17140f; }
        .vd-strip-note-nda { font-size: 12px; color: #948b74; }
        .vd-strip-track {
          display: flex;
          gap: 30px;
          width: max-content;
          animation: vd-strip-scroll 34s linear infinite;
        }
        .vd-strip-section:hover .vd-strip-track { animation-play-state: paused; }
        .vd-strip-item {
          display: flex;
          align-items: baseline;
          gap: 20px;
          white-space: nowrap;
        }
        .vd-strip-name { font-family: var(--font-display, serif); font-weight: 700; font-size: 19px; color: #17140f; }
        .vd-strip-glyph { color: #7c2334; font-size: 16px; opacity: 0.7; }
        @keyframes vd-strip-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .vd-strip-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
