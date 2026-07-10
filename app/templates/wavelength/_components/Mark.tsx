"use client";

import { OWNER } from "../_data/portfolio";

export default function Mark() {
  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button type="button" onClick={goTop} className="wl-mark" aria-label="Scroll to top">
      {OWNER.initials}
      <style>{`
        .wl-mark {
          position: fixed;
          top: 24px;
          right: 24px;
          z-index: 40;
          font-family: var(--font-mono, monospace);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: rgba(242,242,238,0.7);
          background-color: rgba(19,19,22,0.7);
          border: 1px solid rgba(242,242,238,0.14);
          border-radius: 100px;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(6px);
          transition: color 0.2s, border-color 0.2s;
        }
        .wl-mark:hover { color: #c6ff3d; border-color: rgba(198,255,61,0.4); }
      `}</style>
    </button>
  );
}
