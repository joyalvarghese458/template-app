"use client";

import { OWNER } from "../_data/portfolio";
import { useReveal } from "../_utils/reveal";

/* Contact — a boarding pass. White card, airline header strip, field
   grid, barcode, and a tear-off stub across a perforated rule with
   notch cutouts. Stub sits right on desktop, below on mobile. */
export default function BoardingPass() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="mrd-contact">
      <div ref={ref} className={`mrd-contact-inner mrd-reveal ${visible ? "mrd-reveal-in" : ""}`}>
        <header className="mrd-contact-head">
          <span className="mrd-contact-kicker">07 · Contact</span>
          <h2 className="mrd-contact-title">Ready for pushback?</h2>
          <p className="mrd-contact-blurb">
            For rosters, references, or a full crew file — send a message and I will get back within 24 hours, any timezone.
          </p>
        </header>

        <div className="mrd-pass" role="group" aria-label="Contact card styled as a boarding pass">
          <div className="mrd-pass-main">
            <div className="mrd-pass-strip">
              <span className="mrd-pass-airline">
                <svg viewBox="0 0 24 24" className="mrd-pass-plane" aria-hidden="true">
                  <path d="M21 15.5v-2l-8-4.5V4.2a1.3 1.3 0 1 0-2.6 0V9L2.4 13.5v2l8-2.3v4.6l-2.2 1.6v1.4l3.5-1 3.5 1v-1.4l-2.2-1.6v-4.6l8 2.3Z" fill="currentColor" />
                </svg>
                MERIDIAN CREW
              </span>
              <span className="mrd-pass-class">PRIORITY / CAPTAIN</span>
            </div>

            <div className="mrd-pass-fields">
              <div className="mrd-pass-field">
                <span className="mrd-pass-label">Captain</span>
                <span className="mrd-pass-value">{OWNER.name}</span>
              </div>
              <div className="mrd-pass-field">
                <span className="mrd-pass-label">Base</span>
                <span className="mrd-pass-value">{OWNER.base}</span>
              </div>
              <div className="mrd-pass-field">
                <span className="mrd-pass-label">Email</span>
                <a className="mrd-pass-value mrd-pass-link" href={`mailto:${OWNER.email}`}>{OWNER.email}</a>
              </div>
              <div className="mrd-pass-field">
                <span className="mrd-pass-label">Phone</span>
                <a className="mrd-pass-value mrd-pass-link" href={`tel:${OWNER.phone.replace(/\s/g, "")}`}>{OWNER.phone}</a>
              </div>
            </div>

            <div className="mrd-pass-actions">
              <a href={`mailto:${OWNER.email}?subject=Crew%20file%20request`} className="mrd-pass-cta">
                Begin boarding — say hello
              </a>
              <div className="mrd-pass-barcode" aria-hidden="true" />
            </div>
          </div>

          <div className="mrd-pass-perf" aria-hidden="true" />

          <div className="mrd-pass-stub" aria-hidden="true">
            <div className="mrd-stub-row">
              <div className="mrd-pass-field">
                <span className="mrd-pass-label">Seat</span>
                <span className="mrd-pass-value">1A</span>
              </div>
              <div className="mrd-pass-field">
                <span className="mrd-pass-label">Gate</span>
                <span className="mrd-pass-value">C4</span>
              </div>
            </div>
            <div className="mrd-pass-field">
              <span className="mrd-pass-label">Boarding</span>
              <span className="mrd-pass-value">ANYTIME</span>
            </div>
            <div className="mrd-stub-code" />
          </div>
        </div>
      </div>

      <style>{`
        .mrd-contact { padding: clamp(56px, 9vw, 110px) 20px clamp(70px, 10vw, 130px); max-width: var(--max-w); margin: 0 auto; }
        .mrd-contact .mrd-reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .mrd-contact .mrd-reveal-in { opacity: 1; transform: translateY(0); }
        .mrd-contact-head { margin-bottom: 30px; max-width: 620px; }
        .mrd-contact-kicker {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--mrd-ice);
        }
        .mrd-contact-title {
          margin: 8px 0 10px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(28px, 4.6vw, 42px);
          letter-spacing: -0.01em;
          color: var(--mrd-text);
        }
        .mrd-contact-blurb { margin: 0; font-size: 15px; line-height: 1.7; color: var(--mrd-text-soft); }
        .mrd-pass {
          background-color: #fdfcf7;
          color: var(--mrd-ink);
          border-radius: 16px;
          box-shadow: 0 30px 70px -28px rgba(0,0,0,0.75);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          max-width: 860px;
        }
        .mrd-pass-main { padding: 0 0 22px; flex: 1; min-width: 0; }
        .mrd-pass-strip {
          background: linear-gradient(90deg, #1b2a4a, #14203a);
          color: #fdfcf7;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          padding: 14px 22px;
        }
        .mrd-pass-airline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 14px;
          letter-spacing: 0.16em;
        }
        .mrd-pass-plane { width: 15px; height: 15px; color: var(--mrd-amber); transform: rotate(45deg); }
        .mrd-pass-class { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 0.14em; color: rgba(253,252,247,0.7); }
        .mrd-pass-fields {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px 24px;
          padding: 22px 22px 0;
        }
        .mrd-pass-field { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
        .mrd-pass-label {
          font-family: var(--font-mono);
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(35,42,60,0.45);
        }
        .mrd-pass-value {
          font-family: var(--font-mono);
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.02em;
          overflow-wrap: anywhere;
        }
        .mrd-pass-link { color: var(--mrd-ink); text-decoration: none; position: relative; }
        .mrd-pass-link::after {
          content: "";
          position: absolute;
          left: 0; bottom: -2px;
          width: 100%; height: 2px;
          background-color: var(--mrd-amber);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .mrd-pass-link:hover::after { transform: scaleX(1); }
        .mrd-pass-actions {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
          padding: 24px 22px 0;
        }
        .mrd-pass-cta {
          font-size: 14px;
          font-weight: 700;
          color: #12100a;
          background-color: var(--mrd-amber);
          border-radius: 8px;
          padding: 14px 22px;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .mrd-pass-cta:hover { transform: translateY(-2px); box-shadow: 0 12px 24px -8px rgba(245,168,60,0.55); }
        .mrd-pass-cta:active { transform: scale(0.97); }
        .mrd-pass-barcode {
          flex: 1;
          min-width: 120px;
          height: 34px;
          background: repeating-linear-gradient(
            90deg,
            rgba(35,42,60,0.85) 0 2px,
            transparent 2px 5px,
            rgba(35,42,60,0.85) 5px 6px,
            transparent 6px 10px,
            rgba(35,42,60,0.85) 10px 13px,
            transparent 13px 16px
          );
        }
        .mrd-pass-perf {
          position: relative;
          border-top: 2px dashed rgba(35,42,60,0.3);
          margin: 0 10px;
        }
        .mrd-pass-perf::before, .mrd-pass-perf::after {
          content: "";
          position: absolute;
          top: -11px;
          width: 20px; height: 20px;
          border-radius: 50%;
          background-color: var(--mrd-bg);
        }
        .mrd-pass-perf::before { left: -21px; }
        .mrd-pass-perf::after { right: -21px; }
        .mrd-pass-stub {
          padding: 20px 22px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          background-image: repeating-linear-gradient(45deg, transparent 0 14px, rgba(35,42,60,0.03) 14px 15px);
        }
        .mrd-stub-row { display: flex; gap: 32px; }
        .mrd-stub-code {
          width: 74px; height: 74px;
          border-radius: 6px;
          background:
            conic-gradient(from 90deg at 3px 3px, rgba(35,42,60,0.9) 90deg, transparent 0) 0 0 / 11px 11px round;
          opacity: 0.85;
        }
        @media (min-width: 640px) {
          .mrd-pass-fields { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (min-width: 900px) {
          .mrd-pass { flex-direction: row; }
          .mrd-pass-perf { border-top: none; border-left: 2px dashed rgba(35,42,60,0.3); margin: 10px 0; }
          .mrd-pass-perf::before, .mrd-pass-perf::after { left: -11px; }
          .mrd-pass-perf::before { top: -21px; }
          .mrd-pass-perf::after { top: auto; bottom: -21px; right: auto; }
          .mrd-pass-stub { width: 230px; flex-shrink: 0; justify-content: space-between; }
        }
        @media (prefers-reduced-motion: reduce) {
          .mrd-contact .mrd-reveal { opacity: 1; transform: none; transition: none; }
        }
      `}</style>
    </section>
  );
}
