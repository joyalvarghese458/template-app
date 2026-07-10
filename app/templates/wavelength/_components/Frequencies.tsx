"use client";

import { FREQUENCIES } from "../_data/portfolio";
import { useReveal } from "../_utils/reveal";
import ChapterHead from "./ChapterHead";

const BAR_COUNT = 7;

export default function Frequencies() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="frequencies" className="wl-freq">
      <div ref={ref} className={`wl-freq-inner wl-reveal ${visible ? "wl-reveal-in" : ""}`}>
        <ChapterHead index="03" title="Frequencies" sub="The tools running under every session, tuned by years of use." />

        <div className="wl-freq-list">
          {FREQUENCIES.map((f) => {
            const floor = (f.value / 100) * 0.32;
            const ceiling = f.value / 100;
            return (
              <div key={f.label} className="wl-freq-row">
                <span className="wl-freq-label">{f.label}</span>
                <div className="wl-freq-bars" role="img" aria-label={`${f.label}: ${f.value}%`}>
                  {Array.from({ length: BAR_COUNT }).map((_, i) => (
                    <span
                      key={i}
                      className="wl-freq-bar"
                      style={
                        {
                          "--wl-floor": floor,
                          "--wl-ceil": ceiling,
                          animationDelay: `${(i * 0.09).toFixed(2)}s`,
                          animationDuration: `${(1.1 + (i % 3) * 0.25).toFixed(2)}s`,
                        } as React.CSSProperties
                      }
                    />
                  ))}
                </div>
                <span className="wl-freq-value">{f.value}%</span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .wl-freq { padding: clamp(60px, 8vw, 100px) 20px; max-width: var(--max-w); margin: 0 auto; }
        .wl-reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .wl-reveal-in { opacity: 1; transform: translateY(0); }
        .wl-freq-list { margin-top: 32px; display: flex; flex-direction: column; }
        .wl-freq-row {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 6px 16px;
          padding: 16px 2px;
          border-bottom: 1px solid rgba(242,242,238,0.08);
        }
        .wl-freq-label { font-size: 14px; color: #f2f2ee; font-weight: 500; }
        .wl-freq-value { font-family: var(--font-mono, monospace); font-size: 11px; color: rgba(242,242,238,0.4); justify-self: end; }
        .wl-freq-bars {
          grid-column: 1 / -1;
          display: flex;
          align-items: flex-end;
          gap: 4px;
          height: 30px;
        }
        .wl-freq-bar {
          width: 5px;
          height: 100%;
          border-radius: 2px;
          background-color: #c6ff3d;
          opacity: 0.85;
          transform-origin: bottom;
          transform: scaleY(var(--wl-floor, 0.3));
          animation-name: wl-eq-bounce;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }
        @keyframes wl-eq-bounce {
          from { transform: scaleY(var(--wl-floor, 0.3)); }
          to { transform: scaleY(var(--wl-ceil, 0.9)); }
        }
        @media (min-width: 640px) {
          .wl-freq-row { grid-template-columns: 200px 1fr auto; gap: 20px; }
          .wl-freq-bars { grid-column: auto; height: 26px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .wl-freq-bar { animation: none; transform: scaleY(var(--wl-ceil, 0.9)); }
        }
      `}</style>
    </section>
  );
}
