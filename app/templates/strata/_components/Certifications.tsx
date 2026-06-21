"use client";

import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#e4e7e0" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="05" label="Credentials" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(28px, 5vw, 42px)", color: "#1f2421", margin: "16px 0 40px", lineHeight: 1.08, textTransform: "uppercase" }}>
            Licenses &amp; education.
          </h2>
        </motion.div>

        <div className="strata-cert-grid">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="strata-cert-card"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ marginBottom: "14px" }}>
                <circle cx="12" cy="9" r="6.5" stroke="#f15a24" strokeWidth="1.4" />
                <path d="M8.5 14.5L7 21l5-2.5 5 2.5-1.5-6.5" stroke="#1f2421" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
              <h3 className="strata-cert-title">{cert.title}</h3>
              <p className="strata-cert-issuer">{cert.issuer}</p>
              <p className="strata-cert-year">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .strata-cert-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .strata-cert-card {
          border: 1.5px solid #1f2421;
          padding: 22px;
          background-color: #ffffff;
        }
        .strata-cert-title { font-size: 14.5px; font-weight: 700; color: #1f2421; margin: 0 0 6px; line-height: 1.4; }
        .strata-cert-issuer { font-size: 13px; color: #5c655e; margin: 0; }
        .strata-cert-year { font-family: var(--font-mono, monospace); font-size: 11px; font-weight: 700; color: #f15a24; margin: 10px 0 0; }
        @media (min-width: 600px) {
          .strata-cert-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 980px) {
          .strata-cert-grid { grid-template-columns: repeat(4, minmax(0,1fr)); gap: 18px; }
        }
      `}</style>
    </section>
  );
}
