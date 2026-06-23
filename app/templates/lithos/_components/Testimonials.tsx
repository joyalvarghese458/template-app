"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#1c1610" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="09" label="From The Field" />
          <h2 className="lithos-h2-static">What advisors say.</h2>
        </motion.div>

        <div className="lithos-testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="lithos-testimonial-card"
            >
              <span className="lithos-testimonial-quote-mark">&ldquo;</span>
              <blockquote className="lithos-testimonial-quote">{t.quote}</blockquote>
              <figcaption className="lithos-testimonial-cite">
                <span className="lithos-testimonial-name">{t.name}</span>
                <span className="lithos-testimonial-role">{t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        .lithos-testimonial-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
        .lithos-testimonial-card {
          border: 1px solid rgba(255,255,255,0.09);
          border-top: 3px solid #e8702a;
          border-radius: 10px;
          padding: 26px 24px;
          background-color: #251d15;
          margin: 0;
        }
        .lithos-testimonial-quote-mark { font-family: var(--font-display, serif); font-style: italic; font-size: 40px; color: #e8702a; line-height: 1; display: block; margin-bottom: 4px; }
        .lithos-testimonial-quote { font-size: 14.5px; line-height: 1.7; color: #d8cdbe; margin: 0 0 18px; font-style: normal; }
        .lithos-testimonial-cite { display: flex; flex-direction: column; gap: 2px; }
        .lithos-testimonial-name { font-size: 13.5px; font-weight: 700; color: #f4ece1; }
        .lithos-testimonial-role { font-size: 11.5px; color: #b3a392; }
        @media (min-width: 760px) {
          .lithos-testimonial-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
