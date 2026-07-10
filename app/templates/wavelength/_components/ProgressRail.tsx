"use client";

import { useEffect, useState } from "react";
import { useActiveSection } from "../_utils/reveal";

const CHAPTERS = [
  { id: "intro", index: "00", label: "Intro" },
  { id: "reel", index: "01", label: "Reel" },
  { id: "credits", index: "02", label: "Credits" },
  { id: "frequencies", index: "03", label: "Frequencies" },
  { id: "sessions", index: "04", label: "Sessions" },
  { id: "contact", index: "05", label: "Contact" },
];

export default function ProgressRail() {
  const active = useActiveSection(CHAPTERS.map((c) => c.id));
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setScrollPct(max > 0 ? (doc.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Desktop: left-edge chapter rail (replaces a top navbar entirely) */}
      <nav aria-label="Chapters" className="wl-rail">
        {CHAPTERS.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => goTo(c.id)}
            className={`wl-rail-item ${active === c.id ? "wl-rail-item-active" : ""}`}
            aria-current={active === c.id ? "true" : undefined}
          >
            <span className="wl-rail-tick" />
            <span className="wl-rail-meta">
              <span className="wl-rail-index">{c.index}</span>
              <span className="wl-rail-label">{c.label}</span>
            </span>
          </button>
        ))}
      </nav>

      {/* Mobile: slim top progress line, no menu */}
      <div className="wl-top-progress" aria-hidden="true">
        <div className="wl-top-progress-fill" style={{ width: `${scrollPct}%` }} />
      </div>

      <style>{`
        .wl-rail {
          position: fixed;
          left: 28px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 40;
          display: none;
          flex-direction: column;
          gap: 18px;
        }
        .wl-rail-item {
          display: flex;
          align-items: center;
          gap: 10px;
          background: none;
          border: none;
          padding: 4px 0;
          cursor: pointer;
          color: inherit;
        }
        .wl-rail-tick {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 1.5px solid rgba(242,242,238,0.3);
          flex-shrink: 0;
          transition: background-color 0.25s, border-color 0.25s, box-shadow 0.25s;
        }
        .wl-rail-item-active .wl-rail-tick {
          background-color: #c6ff3d;
          border-color: #c6ff3d;
          box-shadow: 0 0 0 4px rgba(198,255,61,0.16);
        }
        .wl-rail-meta {
          display: flex;
          align-items: baseline;
          gap: 8px;
          max-width: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-width 0.3s ease, opacity 0.25s ease;
          white-space: nowrap;
        }
        .wl-rail-item:hover .wl-rail-meta,
        .wl-rail-item-active .wl-rail-meta {
          max-width: 160px;
          opacity: 1;
        }
        .wl-rail-index {
          font-family: var(--font-mono, monospace);
          font-size: 10px;
          color: rgba(242,242,238,0.4);
        }
        .wl-rail-label {
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: rgba(242,242,238,0.75);
        }
        .wl-rail-item-active .wl-rail-label { color: #f2f2ee; }

        .wl-top-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          z-index: 40;
          background-color: rgba(242,242,238,0.08);
        }
        .wl-top-progress-fill {
          height: 100%;
          background-color: #c6ff3d;
          box-shadow: 0 0 8px rgba(198,255,61,0.6);
        }

        @media (min-width: 860px) {
          .wl-rail { display: flex; }
          .wl-top-progress { display: none; }
        }
      `}</style>
    </>
  );
}
