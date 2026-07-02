"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#14100c" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="07" label="Production History" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 400, textTransform: "uppercase", fontSize: "clamp(28px, 4.8vw, 40px)", color: "#f3ece1", margin: "16px 0 40px", lineHeight: 1.15 }}>
            Every set earns the next one.
          </h2>
        </motion.div>

        <div style={{ position: "relative", paddingLeft: "28px" }}>
          <span aria-hidden="true" style={{ position: "absolute", left: "5px", top: "8px", bottom: "8px", width: "1.5px", backgroundImage: "repeating-linear-gradient(#c9a15a 0 6px, transparent 6px 12px)", opacity: 0.6 }} />
          {EXPERIENCE.map((role, i) => (
            <motion.div
              key={role.role + role.company}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              style={{ position: "relative", paddingBottom: i === EXPERIENCE.length - 1 ? 0 : "40px" }}
            >
              <span aria-hidden="true" style={{ position: "absolute", left: "-28px", top: "6px", width: "11px", height: "11px", borderRadius: "3px", backgroundColor: "#0a0806", border: "2px solid #d1263f" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                <h3 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.02em", fontSize: "18px", color: "#f3ece1", margin: 0 }}>
                  {role.role} <span style={{ color: "#b7a996", fontWeight: 400, fontFamily: "var(--font-body, sans-serif)", textTransform: "none" }}>· {role.company}</span>
                </h3>
                <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "12px", fontWeight: 700, color: "#c9a15a" }}>{role.period}</span>
              </div>
              <p style={{ fontSize: "14.5px", lineHeight: 1.7, color: "#b7a996", margin: "0 0 14px" }}>{role.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {role.highlights.map((h) => (
                  <span key={h} style={{ fontSize: "11px", fontWeight: 500, color: "#d1263f", border: "1px solid rgba(209,38,63,0.35)", borderRadius: "100px", padding: "4px 10px" }}>
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
