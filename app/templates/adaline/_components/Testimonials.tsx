"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";

export default function Testimonials() {
  return (
    <section
      style={{
        backgroundColor: "#e0e5d5",
        padding: "120px 24px",
        borderTop: "1px solid #c5ccb6",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{ marginBottom: "80px" }}
        >
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "'JetBrains Mono', 'IBM Plex Mono', monospace",
              fontSize: "14px",
              fontWeight: 400,
              letterSpacing: "0.02em",
              color: "#0a1d08",
              textTransform: "uppercase",
              margin: "0 0 16px",
            }}
          >
            Testimonials
          </motion.p>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "inherit",
              fontSize: "clamp(32px, 3.5vw, 47px)",
              fontWeight: 400,
              lineHeight: 0.98,
              letterSpacing: "-1.88px",
              color: "#0a1d08",
              margin: 0,
              maxWidth: "440px",
            }}
          >
            Words from the field.
          </motion.h2>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="adaline-testimonials-grid"
        >
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .adaline-testimonials-grid { grid-template-columns: 1fr !important; max-width: 600px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}

interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.blockquote
      variants={fadeUp}
      style={{
        backgroundColor: "#fbfdf6",
        border: "1px solid #c5ccb6",
        borderRadius: "8px",
        padding: "40px 32px",
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        boxShadow: "0 1px 8px rgba(10,29,8,0.06)",
      }}
    >
      {/* Opening quote mark */}
      <svg width="28" height="20" viewBox="0 0 28 20" fill="none" aria-hidden="true">
        <path
          d="M0 20V12C0 6 3.5 2 10.5 0L12 3.5C8.5 4.5 7 7 7 10.5H12V20H0ZM16 20V12C16 6 19.5 2 26.5 0L28 3.5C24.5 4.5 23 7 23 10.5H28V20H16Z"
          fill="#4a3212"
          opacity="0.45"
        />
      </svg>

      {/* Quote text */}
      <p
        style={{
          fontFamily: "inherit",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: 1.67,
          letterSpacing: "-0.04em",
          color: "#0a1d08",
          opacity: 0.8,
          margin: 0,
          fontStyle: "italic",
          flexGrow: 1,
        }}
      >
        {testimonial.quote}
      </p>

      {/* Divider */}
      <div style={{ height: "1px", backgroundColor: "#e0e5d5" }} />

      {/* Attribution */}
      <footer style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <cite
          style={{
            fontFamily: "inherit",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "-0.56px",
            color: "#0a1d08",
            fontStyle: "normal",
          }}
        >
          {testimonial.author}
        </cite>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "12px",
            letterSpacing: "0.02em",
            color: "#0a1d08",
            opacity: 0.5,
            textTransform: "uppercase",
          }}
        >
          {testimonial.title}
        </span>
      </footer>
    </motion.blockquote>
  );
}
