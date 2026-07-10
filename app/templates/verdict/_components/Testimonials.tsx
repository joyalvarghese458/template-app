"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import SectionLabel from "./SectionLabel";

const ACCENTS = ["#7c2334", "#b6903f", "#7c2334"];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f6f2e8" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="06" label="Client Testimony" />
          <h2 className="vd-quote-heading">What clients say once the file is closed.</h2>
        </motion.div>

        <div className="vd-quote-grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="vd-quote-card"
              style={{ borderTopColor: ACCENTS[i % ACCENTS.length] }}
            >
              <span className="vd-quote-mark" style={{ color: ACCENTS[i % ACCENTS.length] }}>&ldquo;</span>
              <blockquote className="vd-quote-text">{t.quote}</blockquote>
              <figcaption className="vd-quote-cite">
                <span className="vd-quote-name">{t.name}</span>
                <span className="vd-quote-role">{t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        .vd-quote-heading {
          font-family: var(--font-display, serif);
          font-weight: 700;
          font-size: clamp(28px, 4.8vw, 42px);
          color: #17140f;
          margin: 16px 0 40px;
          line-height: 1.15;
        }
        .vd-quote-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
        .vd-quote-card {
          border: 1px solid rgba(23,20,15,0.13);
          border-top: 3px solid;
          border-radius: 16px;
          padding: 28px 24px;
          background-color: #ece3cf;
          margin: 0;
        }
        .vd-quote-mark { font-family: var(--font-display, serif); font-size: 44px; line-height: 1; display: block; margin-bottom: 4px; }
        .vd-quote-text { font-size: 14.5px; line-height: 1.72; color: #17140f; margin: 0 0 20px; font-style: normal; }
        .vd-quote-cite { display: flex; flex-direction: column; gap: 2px; }
        .vd-quote-name { font-size: 13.5px; font-weight: 700; color: #17140f; }
        .vd-quote-role { font-size: 11.5px; color: #948b74; }
        @media (min-width: 860px) {
          .vd-quote-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
