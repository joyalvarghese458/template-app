"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#eef0ec" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="03" label="Experience" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(28px, 5vw, 42px)", color: "#1f2421", margin: "16px 0 40px", lineHeight: 1.08, textTransform: "uppercase" }}>
            Eleven years on record.
          </h2>
        </motion.div>

        <div style={{ position: "relative", paddingLeft: "28px" }}>
          <span aria-hidden="true" style={{ position: "absolute", left: "5px", top: "8px", bottom: "8px", width: "1.5px", backgroundColor: "#1f2421", opacity: 0.18 }} />
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
              <span aria-hidden="true" style={{ position: "absolute", left: "-28px", top: "6px", width: "11px", height: "11px", backgroundColor: "#eef0ec", border: "2px solid #f15a24" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#1f2421", margin: 0 }}>
                  {role.role} <span style={{ color: "#5c655e", fontWeight: 400 }}>· {role.company}</span>
                </h3>
                <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11.5px", fontWeight: 600, color: "#f15a24" }}>{role.period}</span>
              </div>
              <p style={{ fontSize: "14.5px", lineHeight: 1.7, color: "#5c655e", margin: "0 0 14px" }}>{role.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {role.highlights.map((h) => (
                  <span key={h} style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", fontWeight: 500, color: "#2c4a5e", border: "1px solid #2c4a5e", borderRadius: "3px", padding: "4px 9px" }}>
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
