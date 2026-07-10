"use client";

import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { OWNER } from "../_data/portfolio";

const R = 86;
const CIRCUMFERENCE = 2 * Math.PI * R;

export default function VerdictScale() {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(0, OWNER.winRate, {
      duration: 1.6,
      delay: 0.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, []);

  const offset = CIRCUMFERENCE * (1 - OWNER.winRate / 100);

  return (
    <div className="vd-dial">
      <svg viewBox="0 0 200 200" className="vd-dial-svg" aria-hidden="true">
        <circle cx="100" cy="100" r={R} fill="none" stroke="rgba(246,242,232,0.14)" strokeWidth="10" />
        <motion.circle
          cx="100"
          cy="100"
          r={R}
          fill="none"
          stroke="#b6903f"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          initial={{ strokeDashoffset: CIRCUMFERENCE }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          transform="rotate(-90 100 100)"
        />
        {Array.from({ length: 36 }).map((_, i) => (
          <line
            key={i}
            x1="100"
            y1="8"
            x2="100"
            y2="15"
            stroke="rgba(246,242,232,0.18)"
            strokeWidth="1.5"
            transform={`rotate(${i * 10} 100 100)`}
          />
        ))}
      </svg>

      <div className="vd-dial-center">
        {/* Miniature tipping scale-of-justice glyph */}
        <motion.svg
          width="26"
          height="18"
          viewBox="0 0 28 20"
          aria-hidden="true"
          animate={{ rotate: [0, -4, 0, 4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "14px 3px" }}
        >
          <line x1="14" y1="1" x2="14" y2="15" stroke="#7c2334" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="4" y1="5" x2="24" y2="5" stroke="#7c2334" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M4 5L1.5 10.5a3.2 3.2 0 0 0 5 0L4 5z" fill="none" stroke="rgba(246,242,232,0.7)" strokeWidth="1.1" />
          <path d="M24 5L21.5 10.5a3.2 3.2 0 0 0 5 0L24 5z" fill="none" stroke="rgba(246,242,232,0.7)" strokeWidth="1.1" />
        </motion.svg>
        <span className="vd-dial-value">{display}%</span>
        <span className="vd-dial-label">Win Rate</span>
      </div>

      <div className="vd-dial-orbit" aria-hidden="true">
        <span className="vd-dial-orbit-dot" />
      </div>

      <style>{`
        .vd-dial {
          position: relative;
          width: clamp(160px, 22vw, 208px);
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .vd-dial-svg { width: 100%; height: 100%; display: block; }
        .vd-dial-center {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
        }
        .vd-dial-value {
          font-family: var(--font-display, serif);
          font-weight: 700;
          font-size: clamp(28px, 4.4vw, 38px);
          color: #f6f2e8;
          line-height: 1;
          margin-top: 4px;
        }
        .vd-dial-label {
          font-family: var(--font-mono, monospace);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #948b74;
          margin-top: 4px;
        }
        .vd-dial-orbit {
          position: absolute;
          inset: -14px;
          border-radius: 50%;
          border: 1px dashed rgba(182,144,63,0.4);
          animation: vd-orbit-spin 14s linear infinite;
        }
        .vd-dial-orbit-dot {
          position: absolute;
          top: -4px;
          left: 50%;
          width: 8px;
          height: 8px;
          margin-left: -4px;
          border-radius: 50%;
          background-color: #7c2334;
          box-shadow: 0 0 0 4px rgba(124,35,52,0.25);
        }
        @keyframes vd-orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .vd-dial-orbit { animation: none; }
        }
      `}</style>
    </div>
  );
}
