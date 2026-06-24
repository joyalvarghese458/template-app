"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#15110f" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="07" label="Time In Kitchens" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.6vw, 40px)", color: "#f5ece0", margin: "16px 0 40px", lineHeight: 1.2 }}>
            Fifteen years on the line.
          </h2>
        </motion.div>

        <div style={{ position: "relative", paddingLeft: "28px" }}>
          <span aria-hidden="true" style={{ position: "absolute", left: "5px", top: "8px", bottom: "8px", width: "1.5px", backgroundImage: "linear-gradient(#e8552c, #ff8a4c, #7c2233)", opacity: 0.4 }} />
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
              <span aria-hidden="true" style={{ position: "absolute", left: "-28px", top: "6px", width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#15110f", border: "2px solid #e8552c" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                <h3 style={{ fontFamily: "var(--font-display, serif)", fontSize: "18px", fontWeight: 600, color: "#f5ece0", margin: 0 }}>
                  {role.role} <span style={{ color: "#c4b6a8", fontWeight: 400, fontFamily: "var(--font-body, sans-serif)" }}>· {role.company}</span>
                </h3>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#ff8a4c" }}>{role.period}</span>
              </div>
              <p style={{ fontSize: "14.5px", lineHeight: 1.7, color: "#c4b6a8", margin: "0 0 14px" }}>{role.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {role.highlights.map((h) => (
                  <span key={h} style={{ fontSize: "11px", fontWeight: 500, color: "#e8552c", border: "1px solid rgba(232,85,44,0.3)", borderRadius: "100px", padding: "4px 10px" }}>
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
