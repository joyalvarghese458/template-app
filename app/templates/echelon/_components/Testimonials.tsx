"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#3b6fe0", "#d98a3d", "#6f97f2"];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#11151d" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="10" label="Board Room" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#eef1f6", margin: "16px 0 40px", lineHeight: 1.2 }}>
            What the board says.
          </h2>
        </motion.div>

        <div className="ech-testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="ech-testimonial-card"
              style={{ borderTopColor: ACCENTS[i % ACCENTS.length] }}
            >
              <span className="ech-testimonial-quote-mark" style={{ color: ACCENTS[i % ACCENTS.length] }}>&ldquo;</span>
              <blockquote className="ech-testimonial-quote">{t.quote}</blockquote>
              <figcaption className="ech-testimonial-cite">
                <span className="ech-testimonial-name">{t.name}</span>
                <span className="ech-testimonial-role">{t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        .ech-testimonial-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
        .ech-testimonial-card {
          border: 1px solid rgba(238,241,246,0.1);
          border-top: 3px solid;
          border-radius: 14px;
          padding: 26px 24px;
          background-color: #161b25;
          margin: 0;
        }
        .ech-testimonial-quote-mark { font-family: var(--font-display, serif); font-size: 40px; line-height: 1; display: block; margin-bottom: 4px; }
        .ech-testimonial-quote { font-size: 14.5px; line-height: 1.7; color: #eef1f6; margin: 0 0 18px; font-style: normal; }
        .ech-testimonial-cite { display: flex; flex-direction: column; gap: 2px; }
        .ech-testimonial-name { font-size: 13.5px; font-weight: 600; color: #eef1f6; }
        .ech-testimonial-role { font-size: 11.5px; color: #9aa7bb; }
        @media (min-width: 760px) {
          .ech-testimonial-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
