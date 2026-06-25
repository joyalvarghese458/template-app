"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#2dd4bf", "#ff7a3d", "#9089fc"];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#131419" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="10" label="Crit Notes" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#f1f3f6", margin: "16px 0 40px", lineHeight: 1.2 }}>
            What the crit room says.
          </h2>
        </motion.div>

        <div className="prlx-testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="prlx-testimonial-card"
              style={{ borderTopColor: ACCENTS[i % ACCENTS.length] }}
            >
              <span className="prlx-testimonial-quote-mark" style={{ color: ACCENTS[i % ACCENTS.length] }}>&ldquo;</span>
              <blockquote className="prlx-testimonial-quote">{t.quote}</blockquote>
              <figcaption className="prlx-testimonial-cite">
                <span className="prlx-testimonial-name">{t.name}</span>
                <span className="prlx-testimonial-role">{t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        .prlx-testimonial-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
        .prlx-testimonial-card {
          border: 1px solid rgba(241,243,246,0.1);
          border-top: 3px solid;
          border-radius: 14px;
          padding: 26px 24px;
          background-color: #181a21;
          margin: 0;
        }
        .prlx-testimonial-quote-mark { font-family: var(--font-display, sans-serif); font-size: 40px; line-height: 1; display: block; margin-bottom: 4px; }
        .prlx-testimonial-quote { font-size: 14.5px; line-height: 1.7; color: #f1f3f6; margin: 0 0 18px; font-style: normal; }
        .prlx-testimonial-cite { display: flex; flex-direction: column; gap: 2px; }
        .prlx-testimonial-name { font-size: 13.5px; font-weight: 700; color: #f1f3f6; }
        .prlx-testimonial-role { font-size: 11.5px; color: #9ba1ad; }
        @media (min-width: 760px) {
          .prlx-testimonial-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
