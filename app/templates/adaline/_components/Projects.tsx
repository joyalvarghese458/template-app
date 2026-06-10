"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "../_data/portfolio";
import { fadeUp, scaleIn, stagger, VIEWPORT } from "../_utils/motion";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  outcomes: string[];
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        backgroundColor: "#203b14",
        padding: "120px 24px",
        borderTop: "1px solid #1a3010",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "80px",
          }}
        >
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "'JetBrains Mono', 'IBM Plex Mono', monospace",
              fontSize: "14px",
              fontWeight: 400,
              letterSpacing: "0.02em",
              color: "#d7e8b5",
              textTransform: "uppercase",
              margin: 0,
              opacity: 0.8,
            }}
          >
            Featured Projects
          </motion.p>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "inherit",
              fontSize: "clamp(32px, 3.5vw, 47px)",
              fontWeight: 400,
              lineHeight: 0.98,
              letterSpacing: "-1.88px",
              color: "#fbfdf6",
              margin: 0,
              maxWidth: "560px",
            }}
          >
            Systems built to last.
          </motion.h2>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="adaline-projects-grid"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .adaline-projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .adaline-projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const CARD_ACCENTS = ["#d7e8b5", "#c5ccb6", "#e0e5d5", "#d7e8b5", "#eff2e8", "#d7e8b5"];

function ProjectCard({ project }: { project: Project }) {
  const accentIdx = parseInt(project.id, 10) - 1;
  const accent = CARD_ACCENTS[accentIdx % CARD_ACCENTS.length];

  return (
    <motion.article
      variants={scaleIn}
      style={{
        backgroundColor: "#fbfdf6",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: "8px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "0",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        cursor: "default",
        boxShadow: "0 2px 16px rgba(10,29,8,0.18)",
      }}
      whileHover={{
        y: -6,
        transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      {/* Colored top accent bar */}
      <div style={{ height: "4px", backgroundColor: accent }} />

      <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", gap: "18px", flexGrow: 1 }}>
        {/* Project number + number accent */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "12px",
              letterSpacing: "0.02em",
              color: "#0a1d08",
              opacity: 0.4,
              textTransform: "uppercase",
            }}
          >
            {project.id}
          </span>
          <span
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "9999px",
              backgroundColor: accent,
              display: "inline-block",
              opacity: 0.7,
            }}
          />
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "inherit",
            fontSize: "20px",
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: "-0.04em",
            color: "#0a1d08",
            margin: 0,
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: "inherit",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: 1.67,
            letterSpacing: "-0.56px",
            color: "#0a1d08",
            opacity: 0.65,
            margin: 0,
            flexGrow: 1,
          }}
        >
          {project.description}
        </p>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "#e0e5d5" }} />

        {/* Key outcomes */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {project.outcomes.map((outcome) => (
            <div
              key={outcome}
              style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                style={{ flexShrink: 0, marginTop: "2px" }}
              >
                <path
                  d="M2.5 7L5.5 10L11.5 4"
                  stroke="#203b14"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                style={{
                  fontFamily: "inherit",
                  fontSize: "13px",
                  fontWeight: 400,
                  letterSpacing: "-0.04em",
                  color: "#0a1d08",
                  opacity: 0.7,
                  lineHeight: 1.5,
                }}
              >
                {outcome}
              </span>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "0.02em",
                color: "#203b14",
                backgroundColor: "#d7e8b5",
                borderRadius: "9999px",
                padding: "3px 10px",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* View project button */}
        <button
          style={{
            fontFamily: "inherit",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "-0.56px",
            color: "#fbfdf6",
            background: "#4a3212",
            border: "none",
            borderRadius: "20px",
            padding: "10px 24px",
            cursor: "pointer",
            transition: "background-color 0.2s",
            alignSelf: "flex-start",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#203b14";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#4a3212";
          }}
        >
          View Project
        </button>
      </div>
    </motion.article>
  );
}
