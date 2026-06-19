"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "clamp(64px, 10vw, 128px) 24px",
        backgroundColor: "#0b0e13",
      }}
    >
      <div style={{ maxWidth: "920px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="03" label="Experience" />
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 600,
              color: "#eef1f5",
              marginTop: "16px",
              marginBottom: "48px",
            }}
          >
            Nine years on the production floor and in the FEA solver.
          </h2>
        </motion.div>

        <div style={{ position: "relative", paddingLeft: "32px" }}>
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "5px",
              top: "8px",
              bottom: "8px",
              width: "1px",
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          />
          {EXPERIENCE.map((role, i) => (
            <motion.div
              key={role.role + role.company}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              style={{ position: "relative", paddingBottom: i === EXPERIENCE.length - 1 ? 0 : "44px" }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-32px",
                  top: "6px",
                  width: "11px",
                  height: "11px",
                  borderRadius: "50%",
                  backgroundColor: "#0b0e13",
                  border: "2px solid #ff6a1f",
                }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#eef1f5", margin: 0 }}>
                  {role.role} <span style={{ color: "#8a93a3", fontWeight: 400 }}>· {role.company}</span>
                </h3>
                <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "12px", color: "#3fa9f5" }}>
                  {role.period}
                </span>
              </div>
              <p style={{ fontSize: "14.5px", lineHeight: 1.7, color: "#8a93a3", margin: "0 0 14px" }}>
                {role.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {role.highlights.map((h) => (
                  <span
                    key={h}
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "11px",
                      color: "#2dd4bf",
                      border: "1px solid rgba(45,212,191,0.3)",
                      borderRadius: "4px",
                      padding: "4px 8px",
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
