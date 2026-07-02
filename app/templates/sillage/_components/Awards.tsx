"use client";

import { motion } from "framer-motion";
import { AWARDS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Awards() {
  return (
    <section id="awards" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f3ecdc" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="09" label="Recognition" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 40px)", color: "#2b2015", margin: "16px 0 40px", lineHeight: 1.15 }}>
            Sealed and stamped.
          </h2>
        </motion.div>

        <div className="sil-award-grid">
          {AWARDS.map((award, i) => (
            <motion.div
              key={award.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="sil-award-card"
            >
              <span className="sil-award-seal" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1l1.9 3.4L14.7 5l-2 3.3L14.7 13l-3.8.6L9 17l-1.9-3.4L3.3 13l2-4.7-2-3.3 3.8-.6L9 1z" fill="#faf5ea" />
                </svg>
              </span>
              <h3 className="sil-award-title">{award.title}</h3>
              <p className="sil-award-issuer">{award.issuer}</p>
              <p className="sil-award-year">{award.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .sil-award-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .sil-award-card {
          border: 1px solid rgba(43,32,21,0.14);
          border-radius: 14px;
          padding: 24px 22px;
          background-color: #faf5ea;
          text-align: center;
        }
        .sil-award-seal {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #b1556b;
          margin: 0 auto;
        }
        .sil-award-title { font-family: var(--font-display, serif); font-weight: 600; font-size: 16.5px; color: #2b2015; margin: 12px 0 6px; line-height: 1.35; }
        .sil-award-issuer { font-size: 12.5px; color: #6f5f47; margin: 0; }
        .sil-award-year { font-family: var(--font-display, serif); font-size: 12px; font-weight: 700; color: #b6752c; margin: 10px 0 0; }
        @media (min-width: 600px) {
          .sil-award-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 980px) {
          .sil-award-grid { grid-template-columns: repeat(4, minmax(0,1fr)); gap: 18px; }
        }
      `}</style>
    </section>
  );
}
