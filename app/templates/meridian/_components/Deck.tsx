"use client";

import { useEffect, useState } from "react";
import { NAV, OWNER } from "../_data/portfolio";
import { useActiveSection } from "../_utils/reveal";

/* Fixed "overhead panel" nav — callsign, section links, live UTC clock,
   and a flight-progress bar that tracks scroll along the bottom edge. */
export default function Deck() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [utc, setUtc] = useState("--:--");
  const active = useActiveSection(NAV.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(1, window.scrollY / total) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = String(d.getUTCHours()).padStart(2, "0");
      const mm = String(d.getUTCMinutes()).padStart(2, "0");
      setUtc(`${hh}:${mm}`);
    };
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="mrd-deck">
        <div className="mrd-deck-inner">
        <a href="#horizon" className="mrd-deck-brand" onClick={() => setOpen(false)}>
          <svg viewBox="0 0 24 24" className="mrd-deck-plane" aria-hidden="true">
            <path
              d="M21 15.5v-2l-8-4.5V4.2a1.3 1.3 0 1 0-2.6 0V9L2.4 13.5v2l8-2.3v4.6l-2.2 1.6v1.4l3.5-1 3.5 1v-1.4l-2.2-1.6v-4.6l8 2.3Z"
              fill="currentColor"
            />
          </svg>
          <span className="mrd-deck-callsign">{OWNER.callsign}</span>
          <span className="mrd-deck-sub">{OWNER.shortName} · B787</span>
        </a>

        <nav className="mrd-deck-nav" aria-label="Sections">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`mrd-deck-link ${active === n.id ? "mrd-deck-link-active" : ""}`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="mrd-deck-right">
          <span className="mrd-deck-clock" suppressHydrationWarning>
            {utc}<span className="mrd-deck-clock-z">Z</span>
          </span>
          <button
            type="button"
            className="mrd-deck-burger"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`mrd-burger-bar ${open ? "mrd-burger-bar-x1" : ""}`} />
            <span className={`mrd-burger-bar ${open ? "mrd-burger-bar-x2" : ""}`} />
          </button>
        </div>
      </div>

        <div className="mrd-deck-progress" aria-hidden="true">
          <div className="mrd-deck-progress-fill" style={{ width: `${progress * 100}%` }} />
        </div>
      </header>

      <div className={`mrd-deck-overlay ${open ? "mrd-deck-overlay-open" : ""}`}>
        <nav className="mrd-overlay-nav" aria-label="Sections">
          {NAV.map((n, i) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="mrd-overlay-link"
              style={{ transitionDelay: open ? `${0.06 + i * 0.04}s` : "0s" }}
              onClick={() => setOpen(false)}
            >
              <span className="mrd-overlay-num">{String(i + 1).padStart(2, "0")}</span>
              {n.label}
            </a>
          ))}
        </nav>
        <p className="mrd-overlay-foot">{OWNER.base} · {OWNER.availability}</p>
      </div>

      <style>{`
        .mrd-deck {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 60;
          background-color: rgba(7, 12, 22, 0.86);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--mrd-line-soft);
        }
        .mrd-deck-inner {
          max-width: var(--max-w);
          margin: 0 auto;
          padding: 0 20px;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .mrd-deck-brand {
          display: inline-flex;
          align-items: baseline;
          gap: 9px;
          text-decoration: none;
          min-height: 44px;
          align-items: center;
        }
        .mrd-deck-plane { width: 17px; height: 17px; color: var(--mrd-amber); transform: rotate(45deg); flex-shrink: 0; }
        .mrd-deck-callsign {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 15px;
          letter-spacing: 0.14em;
          color: var(--mrd-text);
        }
        .mrd-deck-sub {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.08em;
          color: var(--mrd-text-faint);
          display: none;
        }
        .mrd-deck-nav { display: none; gap: 4px; }
        .mrd-deck-link {
          font-family: var(--font-mono);
          font-size: 11.5px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--mrd-text-soft);
          text-decoration: none;
          padding: 12px 11px;
          border-radius: 6px;
          transition: color 0.2s, background-color 0.2s;
        }
        .mrd-deck-link:hover { color: var(--mrd-text); background-color: rgba(214,226,247,0.06); }
        .mrd-deck-link-active { color: var(--mrd-amber); }
        .mrd-deck-right { display: flex; align-items: center; gap: 10px; }
        .mrd-deck-clock {
          font-family: var(--font-mono);
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--mrd-ice);
          border: 1px solid var(--mrd-ice-dim);
          border-radius: 6px;
          padding: 6px 10px;
        }
        .mrd-deck-clock-z { color: var(--mrd-text-faint); margin-left: 2px; }
        .mrd-deck-burger {
          width: 44px;
          height: 44px;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: none;
          border: 1px solid var(--mrd-line);
          border-radius: 8px;
          cursor: pointer;
          padding: 0;
        }
        .mrd-burger-bar {
          width: 18px;
          height: 2px;
          background-color: var(--mrd-text);
          border-radius: 2px;
          transition: transform 0.25s ease;
        }
        .mrd-burger-bar-x1 { transform: translateY(4px) rotate(45deg); }
        .mrd-burger-bar-x2 { transform: translateY(-4px) rotate(-45deg); }
        .mrd-deck-progress { height: 2px; background-color: rgba(214,226,247,0.07); }
        .mrd-deck-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--mrd-ice), var(--mrd-amber));
          transition: width 0.1s linear;
        }
        .mrd-deck-overlay {
          position: fixed;
          inset: 64px 0 0 0;
          z-index: 55;
          background-color: #070c16;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 36px 24px 28px;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
          overflow-y: auto;
        }
        .mrd-deck-overlay-open { opacity: 1; visibility: visible; }
        .mrd-overlay-nav { display: flex; flex-direction: column; }
        .mrd-overlay-link {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(26px, 7vw, 34px);
          color: var(--mrd-text);
          text-decoration: none;
          padding: 12px 4px;
          border-bottom: 1px solid var(--mrd-line-soft);
          display: flex;
          align-items: baseline;
          gap: 14px;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .mrd-deck-overlay-open .mrd-overlay-link { opacity: 1; transform: translateY(0); }
        .mrd-overlay-link:active { color: var(--mrd-amber); }
        .mrd-overlay-num {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 500;
          color: var(--mrd-amber);
        }
        .mrd-overlay-foot {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--mrd-text-faint);
          margin: 24px 0 0;
          line-height: 1.7;
        }
        @media (min-width: 640px) {
          .mrd-deck-sub { display: inline; }
        }
        @media (min-width: 960px) {
          .mrd-deck-nav { display: flex; }
          .mrd-deck-burger { display: none; }
          .mrd-deck-overlay { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .mrd-deck-progress-fill, .mrd-overlay-link, .mrd-deck-overlay { transition: none; }
        }
      `}</style>
    </>
  );
}
