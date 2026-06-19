"use client";

import { motion } from "framer-motion";
import { AWARDS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { Kicker } from "./About";

export default function Awards() {
  return (
    <section id="awards" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f3efe6" }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <Kicker index="05" label="Recognition" />
          <h2
            style={{
              fontFamily: "var(--font-display, serif)",
              fontWeight: 700,
              fontSize: "clamp(26px, 4.5vw, 38px)",
              color: "#1a1714",
              margin: "0 0 36px",
              lineHeight: 1.15,
            }}
          >
            Awards &amp; credentials.
          </h2>
        </motion.div>

        <div className="byline-awards-grid">
          {AWARDS.map((award, i) => (
            <motion.div
              key={award.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.07 }}
              className="byline-award-card"
            >
              <span aria-hidden="true" className="byline-award-seal">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3 6.5 7 1-5 5 1.5 7L12 18l-6.5 3.5L7 14.5l-5-5 7-1L12 2z" stroke="#b3231a" strokeWidth="1.3" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="byline-award-title">{award.title}</h3>
              <p className="byline-award-issuer">{award.issuer}</p>
              <p className="byline-award-year">{award.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .byline-awards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .byline-award-card {
          border: 1px solid rgba(26,23,20,0.16);
          border-radius: 4px;
          padding: 20px;
          background-color: #ece4d3;
        }
        .byline-award-seal { display: inline-block; margin-bottom: 12px; }
        .byline-award-title {
          font-family: var(--font-display, serif);
          font-weight: 700;
          font-size: 15.5px;
          color: #1a1714;
          margin: 0 0 6px;
          line-height: 1.4;
        }
        .byline-award-issuer { font-size: 13px; color: #5b554c; margin: 0; }
        .byline-award-year {
          font-family: var(--font-type, monospace);
          font-size: 11.5px;
          color: #b3231a;
          margin: 8px 0 0;
        }
        @media (min-width: 600px) {
          .byline-awards-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 980px) {
          .byline-awards-grid { grid-template-columns: repeat(4, minmax(0,1fr)); gap: 18px; }
        }
      `}</style>
    </section>
  );
}
