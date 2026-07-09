"use client";

import { motion } from "framer-motion";

export default function Compass() {
  return (
    <div className="ctr-compass">
      <svg viewBox="0 0 100 100" className="ctr-compass-svg" aria-hidden="true">
        <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(33,42,31,0.2)" strokeWidth="1" />
        <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(33,42,31,0.14)" strokeWidth="1" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line
            key={deg}
            x1="50"
            y1="6"
            x2="50"
            y2={deg % 90 === 0 ? "13" : "10"}
            stroke="rgba(33,42,31,0.4)"
            strokeWidth="1"
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
        <text x="50" y="19" fontSize="9" fontWeight="700" fontFamily="var(--font-mono, monospace)" fill="#212a1f" textAnchor="middle">N</text>
        <text x="87" y="53.5" fontSize="7" fontFamily="var(--font-mono, monospace)" fill="#4c5343" textAnchor="middle">E</text>
        <text x="50" y="88" fontSize="7" fontFamily="var(--font-mono, monospace)" fill="#4c5343" textAnchor="middle">S</text>
        <text x="13" y="53.5" fontSize="7" fontFamily="var(--font-mono, monospace)" fill="#4c5343" textAnchor="middle">W</text>

        <motion.g
          initial={{ rotate: -32, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.6, ease: [0.34, 1.4, 0.4, 1] }}
          style={{ transformOrigin: "50px 50px" }}
        >
          <path d="M50 26 L56 50 L50 46 L44 50 Z" fill="#2f6b74" />
          <path d="M50 74 L56 50 L50 54 L44 50 Z" fill="#4b6b3f" />
        </motion.g>
        <circle cx="50" cy="50" r="3" fill="#212a1f" />
      </svg>
      <span className="ctr-compass-label">True North</span>

      <style>{`
        .ctr-compass {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          width: clamp(84px, 12vw, 108px);
        }
        .ctr-compass-svg { width: 100%; height: auto; display: block; }
        .ctr-compass-label {
          font-family: var(--font-mono, monospace);
          font-size: 8.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #868c76;
        }
      `}</style>
    </div>
  );
}
