"use client";

import { DEPARTURES } from "../_data/portfolio";
import { useReveal } from "../_utils/reveal";

/* Career highlights — an airport split-flap departures board. Amber
   mono type on black flap cells with a centre seam; rows flip in with
   a staggered rotateX. */
export default function Departures() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="departures" className="mrd-departures">
      <div ref={ref} className={`mrd-dep-inner mrd-reveal ${visible ? "mrd-reveal-in" : ""}`}>
        <header className="mrd-dep-head">
          <span className="mrd-dep-kicker">06 · Highlights</span>
          <h2 className="mrd-dep-title">Departures board</h2>
        </header>

        <div className="mrd-board" role="table" aria-label="Career highlights">
          <div className="mrd-board-row mrd-board-row-head" role="row">
            <span role="columnheader">Flight</span>
            <span role="columnheader" className="mrd-board-dest-col">Milestone</span>
            <span role="columnheader">Year</span>
            <span role="columnheader" className="mrd-board-status-col">Status</span>
          </div>

          {DEPARTURES.map((d, i) => (
            <div
              key={d.flight}
              className={`mrd-board-row ${visible ? "mrd-board-row-in" : ""}`}
              style={{ transitionDelay: `${0.1 + i * 0.09}s` }}
              role="row"
            >
              <span className="mrd-flap mrd-flap-dim" role="cell">{d.flight}</span>
              <span className="mrd-flap mrd-board-dest-col" role="cell">{d.destination}</span>
              <span className="mrd-flap mrd-flap-dim" role="cell">{d.time}</span>
              <span className={`mrd-flap mrd-board-status-col ${d.ok ? "mrd-flap-ok" : ""}`} role="cell">
                {d.status}
              </span>
            </div>
          ))}
        </div>

        <p className="mrd-dep-footnote">All times local. Career milestones update on completion of each check.</p>
      </div>

      <style>{`
        .mrd-departures { padding: clamp(56px, 9vw, 110px) 20px; max-width: var(--max-w); margin: 0 auto; }
        .mrd-departures .mrd-reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .mrd-departures .mrd-reveal-in { opacity: 1; transform: translateY(0); }
        .mrd-dep-head { margin-bottom: 30px; }
        .mrd-dep-kicker {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--mrd-amber);
        }
        .mrd-dep-title {
          margin: 8px 0 0;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(28px, 4.6vw, 42px);
          letter-spacing: -0.01em;
          color: var(--mrd-text);
        }
        .mrd-board {
          background-color: #04060b;
          border: 1px solid rgba(214,226,247,0.1);
          border-radius: 14px;
          padding: clamp(12px, 2.4vw, 22px);
          display: flex;
          flex-direction: column;
          gap: 8px;
          overflow: hidden;
        }
        .mrd-board-row {
          display: grid;
          grid-template-columns: 108px 1fr;
          grid-template-areas:
            "flight time"
            "dest dest"
            "status status";
          gap: 6px;
          perspective: 600px;
          opacity: 0;
          transform: rotateX(-40deg);
          transform-origin: top center;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .mrd-board-row > :nth-child(1) { grid-area: flight; }
        .mrd-board-row > :nth-child(2) { grid-area: dest; }
        .mrd-board-row > :nth-child(3) { grid-area: time; justify-self: end; }
        .mrd-board-row > :nth-child(4) { grid-area: status; }
        .mrd-board-row-in { opacity: 1; transform: rotateX(0); }
        .mrd-board-row-head {
          opacity: 1;
          transform: none;
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--mrd-text-faint);
          padding: 4px 10px 6px;
          border-bottom: 1px solid rgba(214,226,247,0.08);
          display: none;
        }
        .mrd-flap {
          font-family: var(--font-mono);
          font-size: clamp(13px, 1.7vw, 15.5px);
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--mrd-amber);
          background:
            linear-gradient(180deg, #171a21 0 49%, rgba(0,0,0,0.9) 49% 51%, #101319 51% 100%);
          border: 1px solid rgba(214,226,247,0.07);
          border-radius: 5px;
          padding: 12px 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .mrd-flap-dim { color: rgba(232,238,251,0.68); }
        .mrd-flap-ok { color: var(--mrd-green); text-shadow: 0 0 12px rgba(88,214,143,0.4); }
        .mrd-dep-footnote {
          margin: 14px 2px 0;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--mrd-text-faint);
        }
        @media (min-width: 768px) {
          .mrd-board { gap: 9px; }
          .mrd-board-row, .mrd-board-row-head {
            grid-template-columns: 110px 1fr 90px 170px;
            grid-template-areas: none;
            gap: 9px;
            align-items: stretch;
          }
          .mrd-board-row > :nth-child(1),
          .mrd-board-row > :nth-child(2),
          .mrd-board-row > :nth-child(3),
          .mrd-board-row > :nth-child(4) { grid-area: auto; justify-self: stretch; }
          .mrd-board-row-head { display: grid; border-bottom: none; padding-bottom: 0; }
          .mrd-board-row-head span { padding: 0 12px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .mrd-departures .mrd-reveal, .mrd-board-row { opacity: 1; transform: none; transition: none; }
        }
      `}</style>
    </section>
  );
}
