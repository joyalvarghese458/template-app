"use client";

import { OWNER } from "../_data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="wl-footer">
      <div className="wl-footer-row">
        <span className="wl-footer-name">{OWNER.practice}</span>
        <span className="wl-footer-copy">© {year} — {OWNER.location}</span>
        <nav aria-label="Footer links" className="wl-footer-links">
          <a href={OWNER.linkedin}>LinkedIn</a>
          <a href={OWNER.calendly}>Book a call</a>
          <a href={`mailto:${OWNER.email}`}>Email</a>
        </nav>
      </div>

      <style>{`
        .wl-footer {
          border-top: 1px solid rgba(242,242,238,0.1);
          padding: 26px 20px;
          max-width: var(--max-w);
          margin: 0 auto;
        }
        .wl-footer-row {
          display: flex;
          flex-direction: column;
          gap: 14px;
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          color: rgba(242,242,238,0.4);
        }
        .wl-footer-name { color: rgba(242,242,238,0.7); font-weight: 700; }
        .wl-footer-links { display: flex; gap: 18px; }
        .wl-footer-links a { color: rgba(242,242,238,0.4); text-decoration: none; }
        .wl-footer-links a:hover { color: #c6ff3d; }
        @media (min-width: 640px) {
          .wl-footer-row { flex-direction: row; align-items: center; justify-content: space-between; }
        }
      `}</style>
    </footer>
  );
}
