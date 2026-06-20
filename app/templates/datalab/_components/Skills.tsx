"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SKILLS } from "../_data/portfolio";
import theme from "../theme.module.css";
import { Cpu, Server, Terminal, HelpCircle } from "lucide-react";

export default function Skills() {
  // Set default selected skill
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    level: number;
    info: string;
  }>(SKILLS[0].skills[0]);

  const getIcon = (categoryTitle: string) => {
    if (categoryTitle.toLowerCase().includes("programming")) return <Terminal size={18} className="text-[#06b6d4]" />;
    if (categoryTitle.toLowerCase().includes("learning")) return <Cpu size={18} className="text-[#8b5cf6]" />;
    return <Server size={18} className="text-[#f59e0b]" />;
  };

  return (
    <section
      id="skills"
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
            03 // Tech Stack
          </span>
          <h2 style={{ fontSize: "32px", fontWeight: 700, marginTop: "8px" }}>Competency Matrix</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Grid: Skill categories */}
          <div className="lg:col-span-8" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {SKILLS.map((category) => (
              <div key={category.title}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                  {getIcon(category.title)}
                  <h3 style={{ fontSize: "18px", fontWeight: 600 }}>{category.title}</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {category.skills.map((skill) => {
                    const isSelected = skill.name === selectedSkill.name;
                    return (
                      <button
                        key={skill.name}
                        onClick={() => setSelectedSkill(skill)}
                        className={theme.card}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "16px 12px",
                          cursor: "pointer",
                          borderColor: isSelected ? "var(--color-teal)" : "var(--color-border)",
                          backgroundColor: isSelected ? "rgba(6, 182, 212, 0.05)" : "var(--color-surface-card)",
                        }}
                      >
                        <span className={theme.mono} style={{ fontSize: "14px", fontWeight: 600, color: isSelected ? "var(--color-teal)" : "var(--color-ink)" }}>
                          {skill.name}
                        </span>
                        <div
                          style={{
                            width: "100%",
                            height: "2px",
                            backgroundColor: "var(--color-surface-soft)",
                            marginTop: "8px",
                            borderRadius: "1px",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              width: `${skill.level}%`,
                              height: "100%",
                              backgroundColor: isSelected ? "var(--color-teal)" : "var(--color-purple)",
                            }}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Panel: Active skill metrics */}
          <div className="lg:col-span-4" style={{ position: "sticky", top: "100px" }}>
            <div className={theme.card} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--color-teal)" }}>
                <HelpCircle size={16} />
                <span className={theme.mono} style={{ fontSize: "11px", textTransform: "uppercase" }}>Feature Inspector</span>
              </div>

              <div>
                <h3 className={theme.mono} style={{ fontSize: "24px", fontWeight: 700, color: "var(--color-ink)" }}>
                  {selectedSkill.name}
                </h3>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "8px" }}>
                  <span className={theme.mono} style={{ fontSize: "12px", color: "var(--color-ink-muted)" }}>Confidence Interval:</span>
                  <span className={theme.mono} style={{ fontSize: "14px", fontWeight: 600, color: "var(--color-emerald)" }}>
                    {selectedSkill.level}%
                  </span>
                </div>
              </div>

              {/* Dynamic progress bar animation */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--color-ink-soft)" }}>
                  <span>Novice</span>
                  <span>Competent</span>
                  <span>Expert</span>
                </div>
                <div style={{ width: "100%", height: "8px", backgroundColor: "var(--color-surface-soft)", borderRadius: "4px", overflow: "hidden" }}>
                  <motion.div
                    key={selectedSkill.name}
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedSkill.level}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{
                      height: "100%",
                      background: "linear-gradient(90deg, var(--color-purple), var(--color-teal))",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  borderTop: "1px solid var(--color-border)",
                  paddingTop: "16px",
                  fontSize: "13px",
                  color: "var(--color-ink-soft)",
                  lineHeight: 1.6,
                }}
              >
                <div className={theme.mono} style={{ fontSize: "10px", color: "var(--color-ink-muted)", marginBottom: "6px" }}>SUMMARY_STAT:</div>
                <p>{selectedSkill.info}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .lg\\:col-span-8 { grid-column: span 8 / span 12 !important; }
          .lg\\:col-span-4 { grid-column: span 4 / span 12 !important; }
        }
      `}</style>
    </section>
  );
}
