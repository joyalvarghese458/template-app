"use client";

import { CREDITS } from "../_data/portfolio";
import { useReveal } from "../_utils/reveal";
import ChapterHead from "./ChapterHead";

export default function Credits() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="credits" className="wl-credits">
      <div ref={ref} className={`wl-credits-inner wl-reveal ${visible ? "wl-reveal-in" : ""}`}>
        <ChapterHead index="02" title="Credits" sub="Roll call — every project, in order of appearance." />

        <div className="wl-credits-roll">
          {CREDITS.map((c, i) => (
            <div key={`${c.project}-${i}`} className="wl-credits-row">
              <span className="wl-credits-role">{c.role}</span>
              <span className="wl-credits-project">{c.project}</span>
              <span className="wl-credits-context">{c.context}</span>
              <span className="wl-credits-year">{c.year}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .wl-credits { padding: clamp(60px, 8vw, 100px) 20px; max-width: var(--max-w); margin: 0 auto; }
        .wl-reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .wl-reveal-in { opacity: 1; transform: translateY(0); }
        .wl-credits-roll {
          margin-top: 32px;
          border-top: 1px solid rgba(242,242,238,0.1);
          font-family: var(--font-mono, monospace);
        }
        .wl-credits-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2px 16px;
          padding: 13px 2px;
          border-bottom: 1px solid rgba(242,242,238,0.08);
          font-size: 12.5px;
        }
        .wl-credits-role { color: #c6ff3d; font-weight: 700; }
        .wl-credits-project { color: #f2f2ee; }
        .wl-credits-context { color: rgba(242,242,238,0.42); }
        .wl-credits-year { color: rgba(242,242,238,0.3); }
        @media (min-width: 760px) {
          .wl-credits-row {
            grid-template-columns: 190px 1fr 1.4fr 50px;
            align-items: baseline;
            gap: 12px 20px;
          }
          .wl-credits-year { text-align: right; }
        }
      `}</style>
    </section>
  );
}
