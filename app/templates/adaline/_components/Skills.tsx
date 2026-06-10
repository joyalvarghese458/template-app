"use client";

import { motion } from "framer-motion";
import { SKILLS } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";

export default function Skills() {
  const categories = Object.entries(SKILLS) as [string, string[]][];

  return (
    <section
      id="skills"
      style={{
        backgroundColor: "#d7e8b5",
        padding: "120px 24px",
        borderTop: "1px solid #c5ccb6",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{ marginBottom: "80px" }}
        >
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "'JetBrains Mono', 'IBM Plex Mono', monospace",
              fontSize: "14px",
              fontWeight: 400,
              letterSpacing: "0.02em",
              color: "#0a1d08",
              textTransform: "uppercase",
              margin: "0 0 16px",
            }}
          >
            Skills
          </motion.p>
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
              maxWidth: "440px",
            }}
          >
            The full stack.
          </motion.h2>
        </motion.div>

        {/* Skill categories */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "48px 64px",
          }}
          className="adaline-skills-grid"
        >
          {categories.map(([category, skills]) => (
            <SkillCategory key={category} category={category} skills={skills} />
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .adaline-skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .adaline-skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function SkillCategory({
  category,
  skills,
}: {
  category: string;
  skills: string[];
}) {
  return (
    <motion.div
      variants={fadeUp}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      {/* Category label */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            width: "20px",
            height: "1px",
            backgroundColor: "#4a3212",
            opacity: 0.5,
          }}
        />
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "12px",
            letterSpacing: "0.02em",
            color: "#0a1d08",
            textTransform: "uppercase",
            opacity: 0.55,
            margin: 0,
          }}
        >
          {category}
        </p>
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {skills.map((skill) => (
          <span
            key={skill}
            style={{
              fontFamily: "inherit",
              fontSize: "14px",
              fontWeight: 400,
              letterSpacing: "-0.56px",
              color: "#0a1d08",
              backgroundColor: "#fbfdf6",
              border: "1px solid #c5ccb6",
              borderRadius: "9999px",
              padding: "6px 14px",
              transition: "background-color 0.2s, border-color 0.2s, color 0.2s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#203b14";
              e.currentTarget.style.color = "#fbfdf6";
              e.currentTarget.style.borderColor = "#203b14";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#fbfdf6";
              e.currentTarget.style.color = "#0a1d08";
              e.currentTarget.style.borderColor = "#c5ccb6";
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
