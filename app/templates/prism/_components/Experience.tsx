"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0a0a14" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="03" label="Experience" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 600, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#f5f4fa", margin: "16px 0 40px", lineHeight: 1.2 }}>
            Nine years, one craft.
          </h2>
        </motion.div>

        <div style={{ position: "relative", paddingLeft: "28px" }}>
          <span aria-hidden="true" style={{ position: "absolute", left: "5px", top: "8px", bottom: "8px", width: "1px", backgroundImage: "linear-gradient(#2dd9c4, #6c63ff, #e94fd1)", opacity: 0.4 }} />
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
              <span aria-hidden="true" style={{ position: "absolute", left: "-28px", top: "6px", width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#0a0a14", border: "2px solid #6c63ff" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#f5f4fa", margin: 0 }}>
                  {role.role} <span style={{ color: "#a8a6c0", fontWeight: 400 }}>· {role.company}</span>
                </h3>
                <span style={{ fontFamily: "var(--font-display, sans-serif)", fontSize: "11.5px", color: "#2dd9c4" }}>{role.period}</span>
              </div>
              <p style={{ fontSize: "14.5px", lineHeight: 1.7, color: "#a8a6c0", margin: "0 0 14px" }}>{role.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {role.highlights.map((h) => (
                  <span key={h} style={{ fontSize: "11px", fontWeight: 600, color: "#d8d6e8", border: "1px solid rgba(255,255,255,0.16)", borderRadius: "100px", padding: "4px 10px", backgroundColor: "rgba(255,255,255,0.04)" }}>
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
