"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        backgroundColor: "#fbfdf6",
        padding: "120px 24px",
        borderTop: "1px solid #e0e5d5",
        backgroundImage: "radial-gradient(ellipse 60% 40% at 90% 20%, #d7e8b5 0%, transparent 70%), radial-gradient(ellipse 50% 35% at 5% 80%, #eff2e8 0%, transparent 65%)",
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
            Experience
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
              maxWidth: "480px",
            }}
          >
            Where I've built things.
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "0",
              top: "8px",
              bottom: "0",
              width: "1px",
              backgroundColor: "#e0e5d5",
            }}
            aria-hidden="true"
          />

          <motion.div
            variants={stagger(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            style={{ display: "flex", flexDirection: "column", gap: "0" }}
          >
            {EXPERIENCE.map((exp, i) => (
              <TimelineItem key={i} exp={exp} isLast={i === EXPERIENCE.length - 1} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface Exp {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

function TimelineItem({ exp, isLast }: { exp: Exp; isLast: boolean }) {
  return (
    <motion.div
      variants={fadeUp}
      style={{
        display: "grid",
        gridTemplateColumns: "200px 1fr",
        gap: "48px",
        paddingLeft: "32px",
        paddingBottom: isLast ? "0" : "64px",
        position: "relative",
      }}
      className="adaline-timeline-item"
    >
      {/* Dot */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-5px",
          top: "8px",
          width: "9px",
          height: "9px",
          borderRadius: "9999px",
          backgroundColor: "#4a3212",
          border: "2px solid #d7e8b5",
          boxShadow: "0 0 0 3px rgba(74,50,18,0.15)",
        }}
      />

      {/* Left — period */}
      <div style={{ paddingTop: "2px" }}>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "12px",
            letterSpacing: "0.02em",
            color: "#0a1d08",
            opacity: 0.5,
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          {exp.period}
        </p>
      </div>

      {/* Right — content */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div>
          <h3
            style={{
              fontFamily: "inherit",
              fontSize: "22px",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-0.04em",
              color: "#0a1d08",
              margin: "0 0 4px",
            }}
          >
            {exp.role}
          </h3>
          <p
            style={{
              fontFamily: "inherit",
              fontSize: "14px",
              fontWeight: 400,
              letterSpacing: "-0.56px",
              color: "#4a3212",
              margin: 0,
              opacity: 0.8,
            }}
          >
            {exp.company}
          </p>
        </div>

        <p
          style={{
            fontFamily: "inherit",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: 1.67,
            letterSpacing: "-0.04em",
            color: "#0a1d08",
            opacity: 0.65,
            margin: 0,
            maxWidth: "580px",
          }}
        >
          {exp.description}
        </p>

        {/* Highlight tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {exp.highlights.map((h) => (
            <span
              key={h}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
                letterSpacing: "0.02em",
                color: "#203b14",
                backgroundColor: "#d7e8b5",
                border: "1px solid #c5ccb6",
                borderRadius: "9999px",
                padding: "3px 12px",
              }}
            >
              {h}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .adaline-timeline-item {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </motion.div>
  );
}
