"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f3ecdc" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="07" label="Training & Practice" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 40px)", color: "#2b2015", margin: "16px 0 40px", lineHeight: 1.15 }}>
            Every house teaches a habit.
          </h2>
        </motion.div>

        <div style={{ position: "relative", paddingLeft: "28px" }}>
          <span aria-hidden="true" style={{ position: "absolute", left: "5px", top: "8px", bottom: "8px", width: "1px", backgroundImage: "linear-gradient(#b6752c, #b1556b)", opacity: 0.4 }} />
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
              <span aria-hidden="true" style={{ position: "absolute", left: "-28px", top: "6px", width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#faf5ea", border: "2px solid #b1556b" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                <h3 style={{ fontFamily: "var(--font-display, serif)", fontSize: "19px", fontWeight: 600, color: "#2b2015", margin: 0 }}>
                  {role.role} <span style={{ color: "#6f5f47", fontWeight: 400, fontFamily: "var(--font-body, sans-serif)", fontSize: "15px" }}>· {role.company}</span>
                </h3>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#b1556b" }}>{role.period}</span>
              </div>
              <p style={{ fontSize: "14.5px", lineHeight: 1.7, color: "#6f5f47", margin: "0 0 14px" }}>{role.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {role.highlights.map((h) => (
                  <span key={h} style={{ fontSize: "11px", fontWeight: 500, color: "#b6752c", border: "1px solid rgba(182,117,44,0.35)", borderRadius: "100px", padding: "4px 10px" }}>
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
