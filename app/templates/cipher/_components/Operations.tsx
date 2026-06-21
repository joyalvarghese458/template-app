"use client";

import { motion } from "framer-motion";
import { OPERATIONS, type Severity } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const SEVERITY_COLOR: Record<Severity, string> = {
  Critical: "#ff3b5c",
  High: "#ffb627",
  Medium: "#39ff8c",
};

export default function Operations() {
  return (
    <section id="operations" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0a0f0c" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="02" label="Operations Log" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#e9f5ee", margin: "16px 0 40px", lineHeight: 1.18 }}>
            CTFs, pentests &amp; bug bounty finds.
          </h2>
        </motion.div>

        <div className="cipher-op-grid">
          {OPERATIONS.map((op, i) => {
            const color = SEVERITY_COLOR[op.severity];
            return (
              <motion.article
                key={op.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                transition={{ delay: (i % 2) * 0.1 }}
                whileHover={{ y: -4, borderColor: "rgba(57,255,140,0.4)" }}
                className="cipher-op-card"
                style={{ borderLeft: `3px solid ${color}` }}
              >
                <div className="cipher-op-head">
                  <span className="cipher-op-id">{op.id}</span>
                  <span className="cipher-op-severity" style={{ color, borderColor: `${color}55` }}>{op.severity}</span>
                </div>
                <p className="cipher-op-codename">OPERATION {op.codename.toUpperCase()}</p>
                <h3 className="cipher-op-title">{op.title}</h3>
                <p className="cipher-op-desc">{op.description}</p>
                <div className="cipher-op-tools">
                  {op.tools.map((t) => (
                    <span key={t} className="cipher-op-tool-tag">{t}</span>
                  ))}
                </div>
                <ul className="cipher-op-findings">
                  {op.findings.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>

      <style>{`
        .cipher-op-grid { display: grid; grid-template-columns: 1fr; gap: 22px; }
        .cipher-op-card {
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 26px;
          background-color: #121810;
          transition: border-color 0.25s;
        }
        .cipher-op-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 10px; }
        .cipher-op-id { font-family: var(--font-mono, monospace); font-size: 13px; color: #39ff8c; }
        .cipher-op-severity {
          font-family: var(--font-mono, monospace);
          font-size: 10.5px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1px solid;
          border-radius: 4px;
          padding: 3px 8px;
        }
        .cipher-op-codename {
          font-family: var(--font-mono, monospace);
          font-size: 10.5px;
          letter-spacing: 0.1em;
          color: #4d5d54;
          margin: 0 0 10px;
        }
        .cipher-op-title { font-size: 19.5px; font-weight: 700; color: #e9f5ee; margin: 0 0 12px; }
        .cipher-op-desc { font-size: 14.5px; line-height: 1.7; color: #8aa194; margin: 0 0 16px; }
        .cipher-op-tools { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
        .cipher-op-tool-tag {
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          color: #8aa194;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 4px;
          padding: 4px 8px;
        }
        .cipher-op-findings { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
        .cipher-op-findings li {
          padding-left: 18px;
          position: relative;
          font-size: 13.5px;
          color: #c8d6cd;
        }
        .cipher-op-findings li::before { content: "✓"; position: absolute; left: 0; color: #39ff8c; }
        @media (min-width: 760px) {
          .cipher-op-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
