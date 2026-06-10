"use client";

import { motion } from "framer-motion";
import { PROCESS } from "../_data/portfolio";
import { fadeUp, scaleIn, stagger, VIEWPORT } from "../_utils/motion";

export default function Process() {
  return (
    <section
      style={{
        backgroundColor: "#4a3212",
        padding: "120px 24px",
        borderTop: "1px solid #31200b",
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
              color: "#d7e8b5",
              textTransform: "uppercase",
              margin: "0 0 16px",
              opacity: 0.85,
            }}
          >
            How I Work
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
              maxWidth: "480px",
            }}
          >
            A deliberate process, every time.
          </motion.h2>
        </motion.div>

        {/* Process cards */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
          className="adaline-process-grid"
        >
          {PROCESS.map((step, i) => (
            <ProcessCard key={step.step} step={step} isLast={i === PROCESS.length - 1} />
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .adaline-process-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .adaline-process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

interface Step {
  step: string;
  title: string;
  description: string;
}

function ProcessCard({ step, isLast }: { step: Step; isLast: boolean }) {
  return (
    <motion.div
      variants={scaleIn}
      style={{
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "8px",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        position: "relative",
        backgroundColor: "rgba(251,253,246,0.07)",
        transition: "background-color 0.25s",
      }}
      whileHover={{
        backgroundColor: "rgba(251,253,246,0.13)",
        transition: { duration: 0.25 },
      }}
    >
      {/* Connector line (not on last) */}
      {!isLast && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "56px",
            right: "-13px",
            width: "24px",
            height: "1px",
            backgroundColor: "rgba(215,232,181,0.35)",
          }}
          className="adaline-connector"
        />
      )}

      {/* Step number */}
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "12px",
          letterSpacing: "0.02em",
          color: "#d7e8b5",
          opacity: 0.6,
          textTransform: "uppercase",
        }}
      >
        {step.step}
      </span>

      {/* Icon area */}
      <div
        style={{
          width: "40px",
          height: "40px",
          border: "1px solid rgba(215,232,181,0.3)",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(215,232,181,0.1)",
        }}
      >
        <StepIcon title={step.title} />
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "inherit",
          fontSize: "20px",
          fontWeight: 400,
          lineHeight: 1.2,
          letterSpacing: "-0.04em",
          color: "#fbfdf6",
          margin: 0,
        }}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: "inherit",
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: 1.67,
          letterSpacing: "-0.56px",
          color: "#fbfdf6",
          opacity: 0.6,
          margin: 0,
        }}
      >
        {step.description}
      </p>

      <style>{`
        @media (max-width: 1024px) {
          .adaline-connector { display: none; }
        }
      `}</style>
    </motion.div>
  );
}

function StepIcon({ title }: { title: string }) {
  const icons: Record<string, React.ReactNode> = {
    Discover: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="8" cy="8" r="5" stroke="#d7e8b5" strokeWidth="1.2" />
        <path d="M13 13L16 16" stroke="#d7e8b5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    Design: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="6" height="6" rx="1" stroke="#d7e8b5" strokeWidth="1.2" />
        <rect x="10" y="2" width="6" height="6" rx="1" stroke="#d7e8b5" strokeWidth="1.2" />
        <rect x="2" y="10" width="6" height="6" rx="1" stroke="#d7e8b5" strokeWidth="1.2" />
        <rect x="10" y="10" width="6" height="6" rx="1" stroke="#d7e8b5" strokeWidth="1.2" />
      </svg>
    ),
    Develop: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M5 6L2 9L5 12" stroke="#d7e8b5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 6L16 9L13 12" stroke="#d7e8b5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 3L8 15" stroke="#d7e8b5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    Deploy: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2V12" stroke="#d7e8b5" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 6L9 2L13 6" stroke="#d7e8b5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 16H15" stroke="#d7e8b5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  };

  return (
    <span style={{ color: "#0a1d08" }}>
      {icons[title] ?? null}
    </span>
  );
}
