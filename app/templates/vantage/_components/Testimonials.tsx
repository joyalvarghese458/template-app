"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import SectionLabel from "./SectionLabel";

const ACCENTS = ["#0f6b56", "#b3703b", "#0f6b56"];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#eee8d9" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="06" label="From The Room" />
          <h2 className="vtg-quote-heading">What clients say once it&apos;s over.</h2>
        </motion.div>

        <div className="vtg-quote-grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="vtg-quote-card"
              style={{ borderTopColor: ACCENTS[i % ACCENTS.length] }}
            >
              <span className="vtg-quote-mark" style={{ color: ACCENTS[i % ACCENTS.length] }}>&ldquo;</span>
              <blockquote className="vtg-quote-text">{t.quote}</blockquote>
              <figcaption className="vtg-quote-cite">
                <span className="vtg-quote-name">{t.name}</span>
                <span className="vtg-quote-role">{t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        .vtg-quote-heading {
          font-family: var(--font-display, serif);
          font-weight: 600;
          font-size: clamp(28px, 4.8vw, 42px);
          color: #17140f;
          margin: 16px 0 40px;
          line-height: 1.15;
        }
        .vtg-quote-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
        .vtg-quote-card {
          border: 1px solid rgba(23,20,15,0.13);
          border-top: 3px solid;
          border-radius: 16px;
          padding: 28px 24px;
          background-color: #f6f3ea;
          margin: 0;
        }
        .vtg-quote-mark { font-family: var(--font-display, serif); font-size: 44px; line-height: 1; display: block; margin-bottom: 4px; }
        .vtg-quote-text { font-size: 14.5px; line-height: 1.72; color: #17140f; margin: 0 0 20px; font-style: normal; }
        .vtg-quote-cite { display: flex; flex-direction: column; gap: 2px; }
        .vtg-quote-name { font-size: 13.5px; font-weight: 700; color: #17140f; }
        .vtg-quote-role { font-size: 11.5px; color: #8a8271; }
        @media (min-width: 860px) {
          .vtg-quote-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
