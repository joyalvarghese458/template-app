"use client";

import { motion } from "framer-motion";
import { ETHOS } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";

export default function Ethos() {
  return (
    <section id="ethos" style={{ padding: "clamp(64px, 10vw, 128px) 20px", backgroundColor: "#212a1f" }}>
      <div style={{ maxWidth: "880px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <div className="ctr-ethos-label">
            <span className="ctr-ethos-label-index">00</span>
            <span className="ctr-ethos-label-dash" />
            <span className="ctr-ethos-label-text">{ETHOS.kicker}</span>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.18, 0.1)} initial="hidden" whileInView="visible" viewport={VIEWPORT} style={{ marginTop: "28px" }}>
          {ETHOS.lines.map((line, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="ctr-ethos-line"
              style={{ opacity: i === ETHOS.lines.length - 1 ? 1 : 0.55 }}
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
          className="ctr-ethos-signoff"
        >
          — {ETHOS.signOff}
        </motion.p>
      </div>

      <style>{`
        .ctr-ethos-label { display: flex; align-items: center; gap: 12px; }
        .ctr-ethos-label-index { font-family: var(--font-mono, monospace); font-weight: 700; font-size: 12px; color: #6f9459; }
        .ctr-ethos-label-dash { width: 24px; height: 1px; background-color: rgba(243,240,229,0.25); }
        .ctr-ethos-label-text { font-family: var(--font-mono, monospace); font-size: 11px; font-weight: 700; color: rgba(243,240,229,0.6); letter-spacing: 0.1em; text-transform: uppercase; }
        .ctr-ethos-line {
          font-family: var(--font-display, serif);
          font-weight: 500;
          font-size: clamp(23px, 4.4vw, 38px);
          line-height: 1.34;
          color: #f3f0e5;
          margin: 0 0 10px;
        }
        .ctr-ethos-signoff {
          margin-top: 32px;
          font-family: var(--font-mono, monospace);
          font-size: 13px;
          color: #3f8a95;
          letter-spacing: 0.01em;
        }
      `}</style>
    </section>
  );
}
