"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#e8552c", "#ff8a4c", "#7c2233"];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#15110f" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="10" label="At The Table" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.6vw, 40px)", color: "#f5ece0", margin: "16px 0 40px", lineHeight: 1.2 }}>
            What the table says.
          </h2>
        </motion.div>

        <div className="umami-testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="umami-testimonial-card"
              style={{ borderTopColor: ACCENTS[i % ACCENTS.length] }}
            >
              <span className="umami-testimonial-quote-mark" style={{ color: ACCENTS[i % ACCENTS.length] }}>&ldquo;</span>
              <blockquote className="umami-testimonial-quote">{t.quote}</blockquote>
              <figcaption className="umami-testimonial-cite">
                <span className="umami-testimonial-name">{t.name}</span>
                <span className="umami-testimonial-role">{t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        .umami-testimonial-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
        .umami-testimonial-card {
          border: 1px solid rgba(245,236,224,0.1);
          border-top: 3px solid;
          border-radius: 14px;
          padding: 26px 24px;
          background-color: #231b17;
          margin: 0;
        }
        .umami-testimonial-quote-mark { font-family: var(--font-display, serif); font-size: 40px; line-height: 1; display: block; margin-bottom: 4px; }
        .umami-testimonial-quote { font-size: 14.5px; line-height: 1.7; color: #f5ece0; margin: 0 0 18px; font-style: normal; }
        .umami-testimonial-cite { display: flex; flex-direction: column; gap: 2px; }
        .umami-testimonial-name { font-size: 13.5px; font-weight: 600; color: #f5ece0; }
        .umami-testimonial-role { font-size: 11.5px; color: #c4b6a8; }
        @media (min-width: 760px) {
          .umami-testimonial-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
