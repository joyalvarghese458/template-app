"use client";

import { motion } from "framer-motion";
import { ABOUT } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";

export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#fbfdf6",
        padding: "120px 24px",
        backgroundImage: "radial-gradient(ellipse 55% 45% at 100% 100%, #d7e8b5 0%, transparent 60%), radial-gradient(ellipse 40% 35% at 0% 0%, #eff2e8 0%, transparent 60%)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{
            fontFamily: "'JetBrains Mono', 'IBM Plex Mono', monospace",
            fontSize: "14px",
            fontWeight: 400,
            letterSpacing: "0.02em",
            color: "#0a1d08",
            textTransform: "uppercase",
            margin: "0 0 64px",
          }}
        >
          About
        </motion.p>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="adaline-about-grid"
        >
          {/* Left — intro */}
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
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
              }}
            >
              A developer who thinks in systems.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "inherit",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: 1.67,
                letterSpacing: "-0.72px",
                color: "#0a1d08",
                opacity: 0.75,
                margin: 0,
              }}
            >
              {ABOUT.intro}
            </motion.p>
            <motion.div
              variants={fadeUp}
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {ABOUT.focus.map((item) => (
                <div
                  key={item}
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <div
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "9999px",
                      backgroundColor: "#4a3212",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "inherit",
                      fontSize: "14px",
                      fontWeight: 400,
                      letterSpacing: "-0.56px",
                      color: "#0a1d08",
                      opacity: 0.75,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — philosophy */}
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            {/* Decorative quote mark */}
            <motion.div variants={fadeUp}>
              <svg width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden="true">
                <path
                  d="M0 24V14C0 7 4 2 12 0L14 4C10 5 8 8 8 12H14V24H0ZM18 24V14C18 7 22 2 30 0L32 4C28 5 26 8 26 12H32V24H18Z"
                  fill="#4a3212"
                  opacity="0.25"
                />
              </svg>
            </motion.div>

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "inherit",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: 1.67,
                letterSpacing: "-0.72px",
                color: "#0a1d08",
                opacity: 0.75,
                margin: 0,
              }}
            >
              {ABOUT.philosophy}
            </motion.p>

            {/* Availability badge */}
            <motion.div variants={fadeUp} style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', 'IBM Plex Mono', monospace",
                  fontSize: "12px",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                  color: "#0a1d08",
                  backgroundColor: "#d7e8b5",
                  borderRadius: "9999px",
                  padding: "4px 12px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "9999px",
                    backgroundColor: "#203b14",
                    display: "inline-block",
                  }}
                />
                Available for new projects
              </span>
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={fadeUp}
              style={{
                height: "1px",
                backgroundColor: "#e0e5d5",
                width: "100%",
              }}
            />

            {/* Stats */}
            <motion.div
              variants={stagger(0.08)}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
            >
              {[
                { value: "7+", label: "Years Experience", bg: "#d7e8b5" },
                { value: "25+", label: "Projects Delivered", bg: "#eff2e8" },
                { value: "3", label: "Companies Served", bg: "#e0e5d5" },
                { value: "500+", label: "Users Impacted", bg: "#d7e8b5" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  style={{
                    backgroundColor: stat.bg,
                    borderRadius: "8px",
                    padding: "20px",
                    border: "1px solid #c5ccb6",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "inherit",
                      fontSize: "32px",
                      fontWeight: 400,
                      lineHeight: 1,
                      letterSpacing: "-1.5px",
                      color: "#0a1d08",
                      margin: "0 0 4px",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "12px",
                      letterSpacing: "0.02em",
                      color: "#0a1d08",
                      opacity: 0.55,
                      margin: 0,
                      textTransform: "uppercase",
                    }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .adaline-about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
