"use client";

import { motion } from "framer-motion";
import { CREDENTIALS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Credentials() {
  return (
    <section id="credentials" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0c0d10" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="09" label="Credentials" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#f1f3f6", margin: "16px 0 40px", lineHeight: 1.2 }}>
            Education &amp; recognition.
          </h2>
        </motion.div>

        <div className="prlx-cred-grid">
          {CREDENTIALS.map((cred, i) => (
            <motion.div
              key={cred.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="prlx-cred-card"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ marginBottom: "14px" }}>
                <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="#2dd4bf" strokeWidth="1.4" />
                <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="#ff7a3d" strokeWidth="1.4" />
              </svg>
              <h3 className="prlx-cred-title">{cred.title}</h3>
              <p className="prlx-cred-issuer">{cred.issuer}</p>
              <p className="prlx-cred-year">{cred.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .prlx-cred-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .prlx-cred-card {
          border: 1px solid rgba(241,243,246,0.1);
          border-radius: 14px;
          padding: 22px;
          background-color: #131419;
        }
        .prlx-cred-title { font-family: var(--font-display, sans-serif); font-size: 14.5px; font-weight: 700; color: #f1f3f6; margin: 0 0 6px; line-height: 1.4; }
        .prlx-cred-issuer { font-size: 13px; color: #9ba1ad; margin: 0; }
        .prlx-cred-year { font-family: var(--font-display, sans-serif); font-size: 11px; font-weight: 700; color: #ff7a3d; margin: 10px 0 0; }
        @media (min-width: 600px) {
          .prlx-cred-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 980px) {
          .prlx-cred-grid { grid-template-columns: repeat(4, minmax(0,1fr)); gap: 18px; }
        }
      `}</style>
    </section>
  );
}
