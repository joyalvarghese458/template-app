"use client";

import { OWNER } from "../_data/portfolio";
import { useReveal } from "../_utils/reveal";
import Waveform from "./Waveform";

export default function Intro() {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="intro" className="wl-intro">
      <div className="wl-intro-inner">
        <div ref={ref} className={`wl-intro-col-text wl-reveal ${visible ? "wl-reveal-in" : ""}`}>
          <span className="wl-eyebrow">
            <span className="wl-eyebrow-dot" /> {OWNER.availability}
          </span>

          <h1 className="wl-headline">
            {OWNER.headline.map((line, i) => (
              <span key={i} className="wl-headline-line">{line}</span>
            ))}
          </h1>

          <p className="wl-subhead">{OWNER.subhead}</p>

          <div className="wl-now">
            {OWNER.nowScoring.map((n) => (
              <div key={n.label} className="wl-now-row">
                <span className="wl-now-label">{n.label}</span>
                <span className="wl-now-value">{n.value}</span>
              </div>
            ))}
          </div>

          <div className="wl-cta-row">
            <a href="#reel" className="wl-btn-primary">Hear the reel</a>
            <a href="#contact" className="wl-btn-outline">Book a session</a>
          </div>

          <div className="wl-stats-row">
            {OWNER.stats.map((s) => (
              <div key={s.label} className="wl-stat">
                <span className="wl-stat-value">{s.value}</span>
                <span className="wl-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="wl-intro-col-visual">
          <div className="wl-sticky">
            <Waveform />
            <p className="wl-scope-caption">
              {OWNER.name} — {OWNER.role}<br />
              <span className="wl-scope-caption-soft">{OWNER.location}</span>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .wl-intro {
          padding: clamp(90px, 12vw, 140px) 20px 40px;
          max-width: var(--max-w);
          margin: 0 auto;
        }
        .wl-intro-inner {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: start;
        }
        .wl-intro-col-text { display: flex; flex-direction: column; gap: 22px; }
        .wl-reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .wl-reveal-in { opacity: 1; transform: translateY(0); }
        .wl-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #c6ff3d;
          border: 1px solid rgba(198,255,61,0.35);
          border-radius: 100px;
          padding: 8px 14px 8px 11px;
        }
        .wl-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background-color: #c6ff3d; }
        .wl-headline {
          margin: 0;
          font-family: var(--font-display, sans-serif);
          font-weight: 600;
          font-size: clamp(32px, 6.4vw, 54px);
          line-height: 1.08;
          letter-spacing: -0.01em;
          color: #f2f2ee;
        }
        .wl-headline-line { display: block; }
        .wl-subhead { font-size: 15.5px; line-height: 1.75; color: rgba(242,242,238,0.6); margin: 0; max-width: 520px; }
        .wl-now {
          display: flex;
          flex-direction: column;
          gap: 8px;
          border-top: 1px solid rgba(242,242,238,0.1);
          border-bottom: 1px solid rgba(242,242,238,0.1);
          padding: 14px 0;
          max-width: 480px;
        }
        .wl-now-row { display: flex; align-items: baseline; gap: 12px; font-size: 13px; }
        .wl-now-label { font-family: var(--font-mono, monospace); color: rgba(242,242,238,0.4); min-width: 92px; flex-shrink: 0; }
        .wl-now-value { color: rgba(242,242,238,0.85); }
        .wl-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .wl-btn-primary, .wl-btn-outline {
          font-family: var(--font-body, sans-serif);
          font-size: 14px;
          font-weight: 700;
          padding: 14px 24px;
          border-radius: 100px;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
        }
        .wl-btn-primary { color: #0a0a0c; background-color: #c6ff3d; }
        .wl-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 26px -6px rgba(198,255,61,0.4); }
        .wl-btn-outline { color: #f2f2ee; border: 1px solid rgba(242,242,238,0.28); }
        .wl-btn-outline:hover { transform: translateY(-2px); background-color: rgba(242,242,238,0.06); }
        .wl-stats-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 16px;
          margin-top: 4px;
        }
        .wl-stat { display: flex; flex-direction: column; gap: 2px; }
        .wl-stat-value { font-family: var(--font-display, sans-serif); font-weight: 600; font-size: 24px; color: #f2f2ee; }
        .wl-stat-label { font-size: 10.5px; color: rgba(242,242,238,0.4); text-transform: uppercase; letter-spacing: 0.03em; }
        .wl-intro-col-visual { position: static; }
        .wl-sticky { display: flex; flex-direction: column; gap: 14px; }
        .wl-scope-caption { font-size: 12px; color: rgba(242,242,238,0.4); line-height: 1.6; margin: 0; padding-left: 2px; }
        .wl-scope-caption-soft { color: rgba(242,242,238,0.28); }
        @media (min-width: 640px) {
          .wl-stats-row { grid-template-columns: repeat(4, minmax(0,1fr)); }
        }
        @media (min-width: 960px) {
          .wl-intro-inner { grid-template-columns: 1.05fr 0.95fr; gap: 64px; }
          .wl-intro-col-visual { position: sticky; top: 110px; align-self: start; }
        }
      `}</style>
    </section>
  );
}
