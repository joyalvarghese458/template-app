"use client";

import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../_data/portfolio";
import { slideAlt, slideUp, VIEWPORT } from "../_utils/motion";
import { Eyebrow } from "./About";

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#faf8ff" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <Eyebrow label="Credentials" />
          <h2 style={{ fontWeight: 800, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#1c1530", margin: "14px 0 40px", lineHeight: 1.18 }}>
            Certifications &amp; background.
          </h2>
        </motion.div>

        <div className="ascend-cert-grid">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.title}
              variants={slideAlt(i, 30)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="ascend-cert-card"
            >
              <span aria-hidden="true" className="ascend-cert-seal">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3 6.5 7 1-5 5 1.5 7L12 18l-6.5 3.5L7 14.5l-5-5 7-1L12 2z" stroke="#ff5fa2" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="ascend-cert-title">{cert.title}</h3>
              <p className="ascend-cert-issuer">{cert.issuer}</p>
              <p className="ascend-cert-year">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .ascend-cert-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .ascend-cert-card {
          border-radius: 16px;
          border: 1px solid rgba(28,21,48,0.08);
          padding: 20px;
          background-color: #fff;
        }
        .ascend-cert-title { font-size: 14.5px; font-weight: 800; color: #1c1530; margin: 0 0 6px; line-height: 1.4; }
        .ascend-cert-issuer { font-size: 12.5px; color: #6b6280; margin: 0; }
        .ascend-cert-year { font-size: 11.5px; font-weight: 700; color: #7c5cff; margin: 8px 0 0; }
        @media (min-width: 600px) {
          .ascend-cert-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 980px) {
          .ascend-cert-grid { grid-template-columns: repeat(4, minmax(0,1fr)); gap: 18px; }
        }
      `}</style>
    </section>
  );
}
