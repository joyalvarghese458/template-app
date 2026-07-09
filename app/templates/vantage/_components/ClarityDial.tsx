"use client";

import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { OWNER } from "../_data/portfolio";

const R = 86;
const CIRCUMFERENCE = 2 * Math.PI * R;

export default function ClarityDial() {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(0, OWNER.clarityIndex, {
      duration: 1.6,
      delay: 0.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, []);

  const offset = CIRCUMFERENCE * (1 - OWNER.clarityIndex / 100);

  return (
    <div className="vtg-dial">
      <svg viewBox="0 0 200 200" className="vtg-dial-svg" aria-hidden="true">
        <circle cx="100" cy="100" r={R} fill="none" stroke="rgba(23,20,15,0.1)" strokeWidth="10" />
        <motion.circle
          cx="100"
          cy="100"
          r={R}
          fill="none"
          stroke="#0f6b56"
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
            stroke="rgba(23,20,15,0.16)"
            strokeWidth="1.5"
            transform={`rotate(${i * 10} 100 100)`}
          />
        ))}
      </svg>

      <div className="vtg-dial-center">
        <span className="vtg-dial-value">{display}</span>
        <span className="vtg-dial-label">Clarity Index</span>
      </div>

      <div className="vtg-dial-orbit" aria-hidden="true">
        <span className="vtg-dial-orbit-dot" />
      </div>

      <style>{`
        .vtg-dial {
          position: relative;
          width: clamp(160px, 22vw, 208px);
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .vtg-dial-svg { width: 100%; height: 100%; display: block; }
        .vtg-dial-center {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
        }
        .vtg-dial-value {
          font-family: var(--font-display, serif);
          font-weight: 700;
          font-size: clamp(30px, 4.6vw, 42px);
          color: #17140f;
          line-height: 1;
        }
        .vtg-dial-label {
          font-family: var(--font-mono, monospace);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #8a8271;
          margin-top: 4px;
        }
        .vtg-dial-orbit {
          position: absolute;
          inset: -14px;
          border-radius: 50%;
          border: 1px dashed rgba(179,112,59,0.4);
          animation: vtg-orbit-spin 14s linear infinite;
        }
        .vtg-dial-orbit-dot {
          position: absolute;
          top: -4px;
          left: 50%;
          width: 8px;
          height: 8px;
          margin-left: -4px;
          border-radius: 50%;
          background-color: #b3703b;
          box-shadow: 0 0 0 4px rgba(179,112,59,0.18);
        }
        @keyframes vtg-orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .vtg-dial-orbit { animation: none; }
        }
      `}</style>
    </div>
  );
}
