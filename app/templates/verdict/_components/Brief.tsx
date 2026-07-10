"use client";

import { motion } from "framer-motion";
import { BRIEF } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";

export default function Brief() {
  return (
    <section id="brief" style={{ padding: "clamp(64px, 10vw, 128px) 20px", backgroundColor: "#0d0d10" }}>
      <div style={{ maxWidth: "880px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <div className="vd-brief-label">
            <span className="vd-brief-label-index">00</span>
            <span className="vd-brief-label-dash" />
            <span className="vd-brief-label-text">{BRIEF.kicker}</span>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.18, 0.1)} initial="hidden" whileInView="visible" viewport={VIEWPORT} style={{ marginTop: "28px" }}>
          {BRIEF.lines.map((line, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="vd-brief-line"
              style={{ opacity: i === BRIEF.lines.length - 1 ? 1 : 0.55 }}
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
          className="vd-brief-signoff"
        >
          — {BRIEF.signOff}
        </motion.p>
      </div>

      <style>{`
        .vd-brief-label { display: flex; align-items: center; gap: 12px; }
        .vd-brief-label-index { font-family: var(--font-mono, monospace); font-weight: 700; font-size: 12px; color: #d9b06a; }
        .vd-brief-label-dash { width: 24px; height: 1px; background-color: rgba(246,242,232,0.25); }
        .vd-brief-label-text { font-family: var(--font-mono, monospace); font-size: 11px; font-weight: 700; color: rgba(246,242,232,0.6); letter-spacing: 0.1em; text-transform: uppercase; }
        .vd-brief-line {
          font-family: var(--font-display, serif);
          font-weight: 500;
          font-size: clamp(24px, 4.6vw, 40px);
          line-height: 1.32;
          color: #f6f2e8;
          margin: 0 0 10px;
        }
        .vd-brief-signoff {
          margin-top: 32px;
          font-family: var(--font-mono, monospace);
          font-size: 13px;
          color: #a13347;
          letter-spacing: 0.01em;
        }
      `}</style>
    </section>
  );
}
