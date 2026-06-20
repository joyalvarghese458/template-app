"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "../_data/portfolio";
import theme from "../theme.module.css";
import { Calendar, Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "100px 0",
        position: "relative",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width)",
          width: "100%",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div style={{ marginBottom: "40px" }}>
          <span className={theme.mono} style={{ fontSize: "13px", color: "var(--color-teal)", textTransform: "uppercase" }}>
            04 // Practical Training
          </span>
          <h2 style={{ fontSize: "32px", fontWeight: 700, marginTop: "8px" }}>Experience Timeline</h2>
        </div>

        <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
          
          {/* Vertical central timeline line */}
          <div
            style={{
              position: "absolute",
              left: "16px",
              top: "10px",
              bottom: "10px",
              width: "2px",
              backgroundColor: "var(--color-surface-soft)",
              backgroundImage: "linear-gradient(to bottom, var(--color-teal), var(--color-purple))",
              opacity: 0.3,
            }}
            className="md:left-1/2 md:-marginLeft-1"
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {EXPERIENCE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  className={`md:flex-row ${isEven ? "md:justify-start" : "md:justify-end"}`}
                >
                  
                  {/* Circle indicator on the timeline */}
                  <div
                    style={{
                      position: "absolute",
                      left: "16px",
                      top: "20px",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-bg)",
                      border: `3px solid ${idx % 2 === 0 ? "var(--color-teal)" : "var(--color-purple)"}`,
                      boxShadow: `0 0 6px ${idx % 2 === 0 ? "var(--color-teal)" : "var(--color-purple)"}`,
                      zIndex: 10,
                    }}
                    className="md:left-1/2 md:translate-x-[-6px]"
                  />

                  {/* Card Container */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`${theme.card} timeline-card md:w-[calc(50%-40px)] ${isEven ? "md:mr-[40px] md:ml-0" : "md:ml-[40px]"}`}
                    style={{
                      marginLeft: "40px",
                      backgroundColor: "var(--color-surface-card)",
                      maxWidth: "600px",
                    }}
                  >
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px", gap: "8px" }}>
                      <span className={theme.mono} style={{ fontSize: "11px", color: "var(--color-teal)", display: "flex", alignItems: "center", gap: "4px" }}>
                        <Briefcase size={12} />
                        {item.company}
                      </span>
                      <span className={theme.mono} style={{ fontSize: "11px", color: "var(--color-ink-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
                        <Calendar size={12} />
                        {item.period}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "12px", color: "var(--color-ink)" }}>
                      {item.role}
                    </h3>

                    <ul style={{ paddingLeft: "16px", listStyleType: "disc", display: "flex", flexDirection: "column", gap: "8px" }}>
                      {item.description.map((bullet, bIdx) => (
                        <li key={bIdx} style={{ fontSize: "13px", color: "var(--color-ink-soft)", lineHeight: 1.5 }}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .md\\:left-1\\/2 { left: 50% !important; }
          .md\\:translate-x-\\[-6px\\] { transform: translateX(-5px) !important; }
          .md\\:flex-row { flex-direction: row !important; }
          .md\\:justify-start { justify-content: flex-start !important; }
          .md\\:justify-end { justify-content: flex-end !important; }
          .md\\:w-\\[calc\\(50\\%-40px\\)\\] { width: calc(50% - 30px) !important; }
          .md\\:mr-\\[40px\\] { margin-right: 30px !important; }
          .md\\:ml-0 { margin-left: 0 !important; }
          .md\\:ml-\\[40px\\] { margin-left: 30px !important; }
        }
      `}</style>
    </section>
  );
}
