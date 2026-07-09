"use client";

import { SITE_INDEX } from "../_data/portfolio";

export default function SiteIndex() {
  const loop = [...SITE_INDEX, ...SITE_INDEX];

  return (
    <section aria-label="Site index" className="ctr-strip-section">
      <div className="ctr-strip-note">
        <span className="ctr-strip-note-text">Site Index</span>
        <span className="ctr-strip-note-sub">Selected sites, by area and typology</span>
      </div>
      <div className="ctr-strip-track">
        {loop.map((s, i) => (
          <span key={`${s.name}-${i}`} className="ctr-strip-item">
            <span className="ctr-strip-name">{s.name}</span>
            <span className="ctr-strip-meta">{s.meta}</span>
          </span>
        ))}
      </div>

      <style>{`
        .ctr-strip-section {
          background-color: #e7e0cb;
          padding: 22px 0 18px;
          overflow: hidden;
          border-top: 1px solid rgba(33,42,31,0.1);
          border-bottom: 1px solid rgba(33,42,31,0.1);
        }
        .ctr-strip-note {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px 14px;
          display: flex;
          align-items: baseline;
          gap: 10px;
          flex-wrap: wrap;
        }
        .ctr-strip-note-text { font-family: var(--font-mono, monospace); font-size: 10.5px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #212a1f; }
        .ctr-strip-note-sub { font-size: 12px; color: #868c76; }
        .ctr-strip-track {
          display: flex;
          gap: 30px;
          width: max-content;
          animation: ctr-strip-scroll 36s linear infinite;
        }
        .ctr-strip-section:hover .ctr-strip-track { animation-play-state: paused; }
        .ctr-strip-item {
          display: flex;
          align-items: baseline;
          gap: 10px;
          white-space: nowrap;
        }
        .ctr-strip-name { font-family: var(--font-display, serif); font-weight: 600; font-style: italic; font-size: 18px; color: #212a1f; }
        .ctr-strip-meta { font-family: var(--font-mono, monospace); font-size: 10px; font-weight: 500; color: #4c5343; }
        @keyframes ctr-strip-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ctr-strip-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
