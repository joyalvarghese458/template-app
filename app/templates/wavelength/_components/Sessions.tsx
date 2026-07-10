"use client";

import { SESSIONS } from "../_data/portfolio";
import { useReveal } from "../_utils/reveal";
import ChapterHead from "./ChapterHead";

export default function Sessions() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="sessions" className="wl-sessions">
      <div ref={ref} className={`wl-sessions-inner wl-reveal ${visible ? "wl-reveal-in" : ""}`}>
        <ChapterHead index="04" title="Sessions" sub="Voice memos, transcribed — what people say after the mix is locked." />

        <div className="wl-sessions-list">
          {SESSIONS.map((s) => (
            <div key={s.name} className="wl-session">
              <div className="wl-session-meta">
                <PlayGlyph />
                <span className="wl-session-time">{s.timestamp}</span>
              </div>
              <p className="wl-session-quote">&ldquo;{s.quote}&rdquo;</p>
              <span className="wl-session-cite">{s.name} — <span className="wl-session-role">{s.role}</span></span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .wl-sessions { padding: clamp(60px, 8vw, 100px) 20px; max-width: var(--max-w); margin: 0 auto; }
        .wl-reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .wl-reveal-in { opacity: 1; transform: translateY(0); }
        .wl-sessions-list { margin-top: 32px; display: flex; flex-direction: column; }
        .wl-session {
          padding: 26px 2px;
          border-bottom: 1px solid rgba(242,242,238,0.1);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .wl-session:first-child { border-top: 1px solid rgba(242,242,238,0.1); }
        .wl-session-meta { display: flex; align-items: center; gap: 10px; }
        .wl-session-time { font-family: var(--font-mono, monospace); font-size: 11px; color: rgba(242,242,238,0.35); }
        .wl-session-quote { font-family: var(--font-display, sans-serif); font-size: clamp(16px, 2.4vw, 20px); font-weight: 500; line-height: 1.55; color: #f2f2ee; margin: 0; max-width: 720px; }
        .wl-session-cite { font-family: var(--font-mono, monospace); font-size: 12px; color: #c6ff3d; }
        .wl-session-role { color: rgba(242,242,238,0.4); }
      `}</style>
    </section>
  );
}

function PlayGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <circle cx="9" cy="9" r="8.25" fill="none" stroke="rgba(198,255,61,0.4)" strokeWidth="1" />
      <path d="M7.2 5.6L12.4 9L7.2 12.4V5.6Z" fill="#c6ff3d" />
    </svg>
  );
}
