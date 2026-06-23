"use client";

import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#ffffff" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="08" label="Credentials" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#0f1222", margin: "16px 0 40px", lineHeight: 1.18 }}>
            Certifications &amp; education.
          </h2>
        </motion.div>

        <div className="surge-cert-grid">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="surge-cert-card"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ marginBottom: "14px" }}>
                <path d="M12 2l3 6.5 7 1-5 5 1.5 7L12 18l-6.5 3.5L7 14.5l-5-5 7-1L12 2z" stroke="#ff3d7f" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
              <h3 className="surge-cert-title">{cert.title}</h3>
              <p className="surge-cert-issuer">{cert.issuer}</p>
              <p className="surge-cert-year">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .surge-cert-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .surge-cert-card {
          border: 1px solid rgba(15,18,34,0.1);
          border-radius: 16px;
          padding: 22px;
          background-color: #f8f9fb;
        }
        .surge-cert-title { font-size: 14.5px; font-weight: 700; color: #0f1222; margin: 0 0 6px; line-height: 1.4; }
        .surge-cert-issuer { font-size: 13px; color: #5b6178; margin: 0; }
        .surge-cert-year { font-family: var(--font-display, sans-serif); font-size: 11px; font-weight: 700; color: #2954ff; margin: 10px 0 0; }
        @media (min-width: 600px) {
          .surge-cert-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 980px) {
          .surge-cert-grid { grid-template-columns: repeat(4, minmax(0,1fr)); gap: 18px; }
        }
      `}</style>
    </section>
  );
}
