"use client";

import { motion } from "framer-motion";
import { MANIFESTO } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";

export default function Manifesto() {
  return (
    <section id="manifesto" style={{ padding: "clamp(64px, 10vw, 128px) 20px", backgroundColor: "#17140f" }}>
      <div style={{ maxWidth: "880px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <div className="vtg-manifesto-label">
            <span className="vtg-manifesto-label-index">00</span>
            <span className="vtg-manifesto-label-dash" />
            <span className="vtg-manifesto-label-text">{MANIFESTO.kicker}</span>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.18, 0.1)} initial="hidden" whileInView="visible" viewport={VIEWPORT} style={{ marginTop: "28px" }}>
          {MANIFESTO.lines.map((line, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="vtg-manifesto-line"
              style={{ opacity: i === MANIFESTO.lines.length - 1 ? 1 : 0.55 }}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          transition={{ delay: 0.5 }}
          className="vtg-manifesto-signoff"
        >
          — {MANIFESTO.signOff}
        </motion.p>
      </div>

      <style>{`
        .vtg-manifesto-label { display: flex; align-items: center; gap: 12px; }
        .vtg-manifesto-label-index { font-family: var(--font-mono, monospace); font-weight: 700; font-size: 12px; color: #17916f; }
        .vtg-manifesto-label-dash { width: 24px; height: 1px; background-color: rgba(246,243,234,0.25); }
        .vtg-manifesto-label-text { font-family: var(--font-mono, monospace); font-size: 11px; font-weight: 700; color: rgba(246,243,234,0.6); letter-spacing: 0.1em; text-transform: uppercase; }
        .vtg-manifesto-line {
          font-family: var(--font-display, serif);
          font-weight: 500;
          font-size: clamp(24px, 4.6vw, 40px);
          line-height: 1.32;
          color: #f6f3ea;
          margin: 0 0 10px;
        }
        .vtg-manifesto-signoff {
          margin-top: 32px;
          font-family: var(--font-mono, monospace);
          font-size: 13px;
          color: #c88a53;
          letter-spacing: 0.01em;
        }
      `}</style>
    </section>
  );
}
