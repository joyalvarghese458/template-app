"use client";

import { motion } from "framer-motion";
import { ABOUT, OWNER } from "../_data/portfolio";
import { fadeUp, slideRight, stagger, VIEWPORT } from "../_utils/motion";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "clamp(64px, 10vw, 128px) 24px",
        backgroundColor: "#0b0e13",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.3fr)", gap: "56px" }} className="torque-about-grid">
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <SectionLabel index="01" label="About" />
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 600,
              color: "#eef1f5",
              lineHeight: 1.15,
              marginTop: "16px",
              marginBottom: "0",
            }}
          >
            From first sketch to final spec.
          </h2>

          <div
            style={{
              marginTop: "32px",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "10px",
              padding: "20px",
              backgroundColor: "#11151b",
            }}
          >
            <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", color: "#3fa9f5", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 12px" }}>
              Core focus
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {ABOUT.focus.map((item) => (
                <li key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", color: "#8a93a3" }}>
                  <span style={{ color: "#ff6a1f", marginTop: "2px" }}>▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          variants={stagger(0.14)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{ display: "flex", flexDirection: "column", gap: "20px", paddingTop: "8px" }}
        >
          <motion.p variants={fadeUp} style={{ fontSize: "17px", lineHeight: 1.75, color: "#c4cad3", margin: 0 }}>
            {ABOUT.intro}
          </motion.p>
          <motion.p variants={fadeUp} style={{ fontSize: "17px", lineHeight: 1.75, color: "#c4cad3", margin: 0 }}>
            {ABOUT.philosophy}
          </motion.p>
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", gap: "24px", flexWrap: "wrap", marginTop: "8px", fontFamily: "var(--font-mono, monospace)", fontSize: "13px", color: "#8a93a3" }}
          >
            <span>{OWNER.location}</span>
            <span style={{ color: "#2dd4bf" }}>{OWNER.availability}</span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .torque-about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "13px", color: "#ff6a1f" }}>{index}</span>
      <span style={{ width: "24px", height: "1px", backgroundColor: "rgba(255,255,255,0.2)" }} />
      <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "13px", color: "#8a93a3", letterSpacing: "0.14em", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}
