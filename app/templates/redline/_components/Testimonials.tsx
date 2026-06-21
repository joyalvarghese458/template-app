"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#16161a" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="09" label="From The Paddock" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(28px, 5vw, 42px)", color: "#f2f2f0", margin: "16px 0 40px", lineHeight: 1.1, textTransform: "uppercase" }}>
            What the team says.
          </h2>
        </motion.div>

        <div className="redline-testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="redline-testimonial-card"
            >
              <span className="redline-testimonial-quote-mark">&ldquo;</span>
              <blockquote className="redline-testimonial-quote">{t.quote}</blockquote>
              <figcaption className="redline-testimonial-cite">
                <span className="redline-testimonial-name">{t.name}</span>
                <span className="redline-testimonial-role">{t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        .redline-testimonial-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
        .redline-testimonial-card {
          border: 1px solid rgba(255,255,255,0.1);
          border-top: 3px solid #e10600;
          border-radius: 10px;
          padding: 26px 24px;
          background-color: #1d1d22;
          margin: 0;
        }
        .redline-testimonial-quote-mark { font-family: var(--font-display, sans-serif); font-size: 40px; color: #e10600; line-height: 1; display: block; margin-bottom: 4px; }
        .redline-testimonial-quote { font-size: 14.5px; line-height: 1.7; color: #d4d4d8; margin: 0 0 18px; font-style: normal; }
        .redline-testimonial-cite { display: flex; flex-direction: column; gap: 2px; }
        .redline-testimonial-name { font-size: 13.5px; font-weight: 700; color: #f2f2f0; }
        .redline-testimonial-role { font-size: 11.5px; color: #9a9aa0; }
        @media (min-width: 760px) {
          .redline-testimonial-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
