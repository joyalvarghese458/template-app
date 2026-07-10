"use client";

import { FLIGHT_LOG, OWNER } from "../_data/portfolio";
import { useReveal } from "../_utils/reveal";

/* Experience — a paper pilot logbook. The one light section on the
   page: cream ledger paper, red margin rule, ruled rows, ink stamps,
   double-rule running total. */
export default function FlightLog() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="flightlog" className="mrd-log">
      <div ref={ref} className={`mrd-log-inner mrd-reveal ${visible ? "mrd-reveal-in" : ""}`}>
        <header className="mrd-log-head">
          <div>
            <span className="mrd-log-kicker">02 · Experience</span>
            <h2 className="mrd-log-title">Pilot flight log</h2>
          </div>
          <div className="mrd-log-stamp" aria-hidden="true">
            <span>CERTIFIED TRUE</span>
            <span className="mrd-log-stamp-sub">{OWNER.shortName} · GCAA</span>
          </div>
        </header>

        <div className="mrd-log-book">
          <div className="mrd-log-row mrd-log-row-head" aria-hidden="true">
            <span>Period</span>
            <span>Operator / Aircraft</span>
            <span>Duty</span>
            <span className="mrd-log-cell-hours">Hours</span>
          </div>

          {FLIGHT_LOG.map((e, i) => (
            <article
              key={e.period}
              className="mrd-log-row"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="mrd-log-period">{e.period}</span>
              <span className="mrd-log-craft">
                <strong>{e.operator}</strong>
                <span className="mrd-log-aircraft">{e.aircraft}</span>
                <span className="mrd-log-note">{e.note}</span>
              </span>
              <span className="mrd-log-role">{e.role}</span>
              <span className="mrd-log-cell-hours mrd-log-hours">{e.hours}</span>
            </article>
          ))}

          <div className="mrd-log-total">
            <span>Total time carried forward</span>
            <span className="mrd-log-total-value">9,400 HRS</span>
          </div>
        </div>
      </div>

      <style>{`
        .mrd-log {
          background-color: var(--mrd-paper);
          color: var(--mrd-ink);
          padding: clamp(56px, 9vw, 110px) 20px;
          background-image:
            repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(35,42,60,0.045) 30px, rgba(35,42,60,0.045) 31px);
        }
        .mrd-log-inner { max-width: var(--max-w); margin: 0 auto; }
        .mrd-log .mrd-reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .mrd-log .mrd-reveal-in { opacity: 1; transform: translateY(0); }
        .mrd-log-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 34px;
        }
        .mrd-log-kicker {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #a5482f;
        }
        .mrd-log-title {
          margin: 8px 0 0;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(28px, 4.6vw, 42px);
          letter-spacing: -0.01em;
        }
        .mrd-log-stamp {
          border: 2px solid rgba(165, 72, 47, 0.55);
          color: rgba(165, 72, 47, 0.8);
          border-radius: 6px;
          padding: 8px 14px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          transform: rotate(-3deg);
          display: flex;
          flex-direction: column;
          gap: 2px;
          text-align: center;
        }
        .mrd-log-stamp-sub { font-size: 9px; font-weight: 500; letter-spacing: 0.08em; }
        .mrd-log-book {
          background-color: #faf6ea;
          border: 1px solid var(--mrd-paper-line);
          border-radius: 10px;
          box-shadow: 0 18px 40px -18px rgba(35,42,60,0.25);
          padding: 6px clamp(16px, 3vw, 30px) 0;
          position: relative;
          overflow: hidden;
        }
        .mrd-log-book::before {
          content: "";
          position: absolute;
          top: 0; bottom: 0;
          left: clamp(8px, 1.6vw, 16px);
          width: 1.5px;
          background-color: rgba(165, 72, 47, 0.4);
        }
        .mrd-log-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 6px;
          padding: 18px 4px 18px clamp(14px, 2.4vw, 24px);
          border-bottom: 1px solid var(--mrd-paper-line);
        }
        .mrd-log-row-head { display: none; }
        .mrd-log-period { font-family: var(--font-mono); font-size: 12px; font-weight: 600; color: #a5482f; letter-spacing: 0.06em; }
        .mrd-log-craft { display: flex; flex-direction: column; gap: 4px; font-size: 14.5px; }
        .mrd-log-craft strong { font-family: var(--font-display); font-weight: 700; font-size: 17px; }
        .mrd-log-aircraft { font-family: var(--font-mono); font-size: 12px; color: var(--mrd-ink-soft); letter-spacing: 0.08em; }
        .mrd-log-note { font-size: 13.5px; line-height: 1.65; color: var(--mrd-ink-soft); max-width: 520px; }
        .mrd-log-role { font-size: 13px; font-weight: 600; }
        .mrd-log-hours { font-family: var(--font-mono); font-size: 16px; font-weight: 700; }
        .mrd-log-total {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
          padding: 16px 4px 18px clamp(14px, 2.4vw, 24px);
          border-top: 3px double rgba(35,42,60,0.5);
          margin-top: -1px;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--mrd-ink-soft);
        }
        .mrd-log-total-value { font-size: 18px; font-weight: 700; color: var(--mrd-ink); }
        @media (min-width: 768px) {
          .mrd-log-row {
            grid-template-columns: 130px 1fr 170px 90px;
            gap: 18px;
            align-items: start;
          }
          .mrd-log-row-head {
            display: grid;
            padding-top: 16px;
            padding-bottom: 12px;
            font-family: var(--font-mono);
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: var(--mrd-ink-soft);
          }
          .mrd-log-cell-hours { text-align: right; }
          .mrd-log-role { padding-top: 2px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .mrd-log .mrd-reveal { opacity: 1; transform: none; transition: none; }
        }
      `}</style>
    </section>
  );
}
