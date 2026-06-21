"use client";

import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#070a08" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="05" label="Credentials" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#e9f5ee", margin: "16px 0 40px", lineHeight: 1.18 }}>
            Certifications &amp; clearances.
          </h2>
        </motion.div>

        <div className="cipher-cert-grid">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="cipher-cert-card"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ marginBottom: "14px" }}>
                <path d="M12 2.5l7.5 3v6c0 5-3.2 8.2-7.5 10-4.3-1.8-7.5-5-7.5-10v-6l7.5-3z" stroke="#39ff8c" strokeWidth="1.4" strokeLinejoin="round" />
                <path d="M9 12l2.2 2.2L15.5 9.5" stroke="#39ff8c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="cipher-cert-title">{cert.title}</h3>
              <p className="cipher-cert-issuer">{cert.issuer}</p>
              <p className="cipher-cert-year">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .cipher-cert-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .cipher-cert-card {
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 22px;
          background-color: #121810;
        }
        .cipher-cert-title { font-size: 15px; font-weight: 700; color: #e9f5ee; margin: 0 0 6px; line-height: 1.4; }
        .cipher-cert-issuer { font-size: 13px; color: #8aa194; margin: 0; }
        .cipher-cert-year { font-family: var(--font-mono, monospace); font-size: 11.5px; color: #39ff8c; margin: 8px 0 0; }
        @media (min-width: 600px) {
          .cipher-cert-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 980px) {
          .cipher-cert-grid { grid-template-columns: repeat(4, minmax(0,1fr)); gap: 18px; }
        }
      `}</style>
    </section>
  );
}
