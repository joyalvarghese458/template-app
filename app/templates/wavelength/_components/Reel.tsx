"use client";

import { REEL } from "../_data/portfolio";
import { useReveal } from "../_utils/reveal";
import ChapterHead from "./ChapterHead";

export default function Reel() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="reel" className="wl-reel">
      <div ref={ref} className={`wl-reel-inner wl-reveal ${visible ? "wl-reveal-in" : ""}`}>
        <ChapterHead index="01" title="The reel" sub="Six sessions worth pressing play on. Tap a title for the notes." />

        <ol className="wl-reel-list">
          {REEL.map((r) => (
            <li key={r.id} className="wl-reel-row">
              <details>
                <summary className="wl-reel-summary">
                  <span className="wl-reel-index">{r.id}</span>
                  <span className="wl-reel-title">{r.title}</span>
                  <span className="wl-reel-type">{r.type}</span>
                  <span className="wl-reel-year">{r.year}</span>
                  <span className="wl-reel-caret" aria-hidden="true">+</span>
                </summary>
                <div className="wl-reel-detail">
                  <MiniWave />
                  <div>
                    <p className="wl-reel-note">{r.note}</p>
                    <span className="wl-reel-role">{r.role}</span>
                  </div>
                </div>
              </details>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        .wl-reel { padding: clamp(60px, 8vw, 100px) 20px; max-width: var(--max-w); margin: 0 auto; }
        .wl-reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .wl-reveal-in { opacity: 1; transform: translateY(0); }
        .wl-reel-list { list-style: none; margin: 32px 0 0; padding: 0; border-top: 1px solid rgba(242,242,238,0.1); }
        .wl-reel-row { border-bottom: 1px solid rgba(242,242,238,0.1); }
        .wl-reel-row details summary { list-style: none; }
        .wl-reel-row details summary::-webkit-details-marker { display: none; }
        .wl-reel-summary {
          display: grid;
          grid-template-columns: 28px 1fr auto;
          align-items: baseline;
          gap: 8px 14px;
          padding: 18px 6px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .wl-reel-summary:hover { background-color: rgba(242,242,238,0.03); }
        .wl-reel-index { font-family: var(--font-mono, monospace); font-size: 11px; color: rgba(242,242,238,0.35); }
        .wl-reel-title { font-family: var(--font-display, sans-serif); font-weight: 600; font-size: clamp(18px, 3vw, 24px); color: #f2f2ee; grid-row: 1; }
        .wl-reel-type { grid-column: 2; font-family: var(--font-mono, monospace); font-size: 11px; color: rgba(242,242,238,0.4); text-transform: uppercase; letter-spacing: 0.04em; }
        .wl-reel-year { font-family: var(--font-mono, monospace); font-size: 12px; color: rgba(242,242,238,0.45); justify-self: end; }
        .wl-reel-caret {
          grid-column: 3;
          grid-row: 1 / span 2;
          align-self: center;
          font-family: var(--font-mono, monospace);
          font-size: 18px;
          color: #c6ff3d;
          transition: transform 0.25s ease;
        }
        details[open] .wl-reel-caret { transform: rotate(45deg); }
        .wl-reel-detail {
          display: flex;
          gap: 18px;
          padding: 2px 6px 26px 42px;
          align-items: flex-start;
        }
        .wl-reel-note { font-size: 14px; line-height: 1.7; color: rgba(242,242,238,0.68); margin: 0 0 8px; max-width: 560px; }
        .wl-reel-role { font-family: var(--font-mono, monospace); font-size: 11px; color: #c6ff3d; }
        @media (min-width: 640px) {
          .wl-reel-summary { grid-template-columns: 32px 1fr auto auto; align-items: center; }
          .wl-reel-title { grid-row: auto; }
          .wl-reel-type { grid-column: auto; }
          .wl-reel-caret { grid-row: auto; }
        }
      `}</style>
    </section>
  );
}

function MiniWave() {
  return (
    <svg width="28" height="20" viewBox="0 0 28 20" aria-hidden="true" className="wl-mini-wave">
      {[3, 9, 15, 21, 25].map((x, i) => (
        <rect key={x} x={x} y={2} width="2.4" rx="1.2" height="16" style={{ animationDelay: `${i * 0.12}s` }} />
      ))}
      <style>{`
        .wl-mini-wave rect { fill: #c6ff3d; transform-origin: center; animation: wl-mini-eq 1.1s ease-in-out infinite; }
        @keyframes wl-mini-eq { 0%, 100% { transform: scaleY(0.35); } 50% { transform: scaleY(1); } }
      `}</style>
    </svg>
  );
}
