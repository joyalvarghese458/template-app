"use client";

import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#120e0a" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="08" label="Credentials" />
          <h2 className="lithos-h2-static">Papers to back the field notes.</h2>
        </motion.div>

        <div className="lithos-cert-grid">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="lithos-cert-card"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ marginBottom: "14px" }}>
                <path d="M12 2l3 6.5 7 1-5 5 1.5 7L12 18l-6.5 3.5L7 14.5l-5-5 7-1L12 2z" stroke="#e8702a" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
              <h3 className="lithos-cert-title">{cert.title}</h3>
              <p className="lithos-cert-issuer">{cert.issuer}</p>
              <p className="lithos-cert-year">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .lithos-cert-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .lithos-cert-card {
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 10px;
          padding: 22px;
          background-color: #1c1610;
        }
        .lithos-cert-title { font-size: 14.5px; font-weight: 600; color: #f4ece1; margin: 0 0 6px; line-height: 1.4; }
        .lithos-cert-issuer { font-size: 13px; color: #b3a392; margin: 0; }
        .lithos-cert-year { font-family: var(--font-display, serif); font-style: italic; font-size: 12px; font-weight: 500; color: #e8702a; margin: 10px 0 0; }
        @media (min-width: 600px) {
          .lithos-cert-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 980px) {
          .lithos-cert-grid { grid-template-columns: repeat(4, minmax(0,1fr)); gap: 18px; }
        }
      `}</style>
    </section>
  );
}
