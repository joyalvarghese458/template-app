"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#b6752c", "#b1556b", "#b6752c"];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#faf5ea" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="10" label="Word Of Mouth" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 40px)", color: "#2b2015", margin: "16px 0 40px", lineHeight: 1.15 }}>
            What lingers after.
          </h2>
        </motion.div>

        <div className="sil-quote-grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="sil-quote-card"
              style={{ borderTopColor: ACCENTS[i % ACCENTS.length] }}
            >
              <span className="sil-quote-mark" style={{ color: ACCENTS[i % ACCENTS.length] }}>&ldquo;</span>
              <blockquote className="sil-quote-text">{t.quote}</blockquote>
              <figcaption className="sil-quote-cite">
                <span className="sil-quote-name">{t.name}</span>
                <span className="sil-quote-role">{t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        .sil-quote-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
        .sil-quote-card {
          border: 1px solid rgba(43,32,21,0.14);
          border-top: 3px solid;
          border-radius: 14px;
          padding: 26px 24px;
          background-color: #f3ecdc;
          margin: 0;
        }
        .sil-quote-mark { font-family: var(--font-display, serif); font-size: 42px; line-height: 1; display: block; margin-bottom: 4px; }
        .sil-quote-text { font-size: 14.5px; line-height: 1.7; color: #2b2015; margin: 0 0 18px; font-style: normal; }
        .sil-quote-cite { display: flex; flex-direction: column; gap: 2px; }
        .sil-quote-name { font-size: 13.5px; font-weight: 700; color: #2b2015; }
        .sil-quote-role { font-size: 11.5px; color: #6f5f47; }
        @media (min-width: 760px) {
          .sil-quote-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
