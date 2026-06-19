"use client";

import { PUBLICATIONS } from "../_data/portfolio";

export default function PublicationStrip() {
  const loop = [...PUBLICATIONS, ...PUBLICATIONS];

  return (
    <section aria-label="Bylines have appeared in" className="byline-pub-strip">
      <p className="byline-pub-label">Bylines have appeared in</p>
      <div className="byline-pub-track">
        {loop.map((pub, i) => (
          <span key={`${pub}-${i}`} className="byline-pub-item">
            {pub}
          </span>
        ))}
      </div>

      <style>{`
        .byline-pub-strip {
          background-color: #1a1714;
          padding: 24px 0;
          overflow: hidden;
        }
        .byline-pub-label {
          text-align: center;
          font-family: var(--font-type, monospace);
          font-size: 10px;
          letter-spacing: 0.1em;
          color: #8a8276;
          text-transform: uppercase;
          margin: 0 0 14px;
        }
        .byline-pub-track {
          display: flex;
          gap: 48px;
          width: max-content;
          animation: byline-pub-scroll 30s linear infinite;
          padding: 0 24px;
        }
        .byline-pub-strip:hover .byline-pub-track { animation-play-state: paused; }
        .byline-pub-item {
          font-family: var(--font-display, serif);
          font-weight: 600;
          font-style: italic;
          font-size: 17px;
          color: #ece4d3;
          white-space: nowrap;
        }
        @keyframes byline-pub-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .byline-pub-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
