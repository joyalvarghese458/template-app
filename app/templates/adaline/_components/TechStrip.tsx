"use client";

import { motion } from "framer-motion";
import { TECHNOLOGIES } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";

export default function TechStrip() {
  return (
    <section
      style={{
        backgroundColor: "#0a1d08",
        borderTop: "1px solid #1a3010",
        borderBottom: "1px solid #1a3010",
        padding: "48px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px",
          }}
        >
          {/* Micro-label */}
          <p
            style={{
              fontFamily: "'JetBrains Mono', 'IBM Plex Mono', monospace",
              fontSize: "14px",
              fontWeight: 400,
              letterSpacing: "0.02em",
              color: "#d7e8b5",
              textTransform: "uppercase",
              margin: 0,
              opacity: 0.7,
            }}
          >
            Technologies
          </p>

          {/* Tech logos row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {TECHNOLOGIES.map((tech) => (
              <TechItem key={tech} name={tech} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TechItem({ name }: { name: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        opacity: 0.65,
        transition: "opacity 0.2s",
        cursor: "default",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
    >
      <TechIcon name={name} />
      <span
        style={{
          fontFamily: "inherit",
          fontSize: "14px",
          fontWeight: 700,
          letterSpacing: "-0.04em",
          color: "#fbfdf6",
        }}
      >
        {name}
      </span>
    </div>
  );
}

function TechIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    React: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2.2" fill="#d7e8b5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#d7e8b5" strokeWidth="1.2" fill="none" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#d7e8b5" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#d7e8b5" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
      </svg>
    ),
    "Next.js": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#d7e8b5" strokeWidth="1.2" />
        <path d="M9 8.5L16 15.5M9 15.5V8.5" stroke="#d7e8b5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    NestJS: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="#d7e8b5" strokeWidth="1.2" fill="none" />
        <path d="M12 6L16 8.5V13.5L12 16L8 13.5V8.5L12 6Z" stroke="#d7e8b5" strokeWidth="1" fill="#d7e8b5" opacity="0.15" />
      </svg>
    ),
    "Node.js": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L20.5 7V17L12 22L3.5 17V7L12 2Z" stroke="#d7e8b5" strokeWidth="1.2" fill="none" />
        <path d="M8.5 9.5C9.5 9.5 10.5 10 10.5 11.5C10.5 13 9.5 13.5 8.5 13.5H7V9.5H8.5Z" fill="#d7e8b5" opacity="0.6" />
        <path d="M13 9.5H14.5C16 9.5 17 10.5 17 11.5C17 12.5 16 13.5 14.5 13.5H13V9.5Z" fill="#d7e8b5" opacity="0.6" />
      </svg>
    ),
    PostgreSQL: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="7" rx="8" ry="3.5" stroke="#d7e8b5" strokeWidth="1.2" fill="none" />
        <path d="M4 7V17C4 18.93 7.58 20.5 12 20.5S20 18.93 20 17V7" stroke="#d7e8b5" strokeWidth="1.2" fill="none" />
        <path d="M4 12C4 13.93 7.58 15.5 12 15.5S20 13.93 20 12" stroke="#d7e8b5" strokeWidth="1" fill="none" />
      </svg>
    ),
    TypeScript: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="3" stroke="#d7e8b5" strokeWidth="1.2" fill="none" />
        <path d="M7 9H17M12 9V17" stroke="#d7e8b5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    Docker: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 11H20C20 11 21 14 18 16H6C3 15 4 11 4 11Z" stroke="#d7e8b5" strokeWidth="1.2" fill="none" />
        <rect x="7" y="7" width="3" height="3" rx="0.5" stroke="#d7e8b5" strokeWidth="1" fill="none" />
        <rect x="11" y="7" width="3" height="3" rx="0.5" stroke="#d7e8b5" strokeWidth="1" fill="none" />
        <rect x="15" y="7" width="3" height="3" rx="0.5" stroke="#d7e8b5" strokeWidth="1" fill="none" />
        <rect x="11" y="11" width="3" height="0" rx="0.5" stroke="#d7e8b5" strokeWidth="1" fill="none" />
      </svg>
    ),
    AWS: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M6 14C4.5 14 3 12.88 3 11S4.3 8 6 8.2C6.3 6.4 7.8 5 9.7 5C10.4 5 11 5.2 11.5 5.5C12.2 4 13.7 3 15.4 3C18 3 20 5 20 7.5C21.2 8 22 9.2 22 10.5C22 12.4 20.4 14 18.5 14H6Z" stroke="#d7e8b5" strokeWidth="1.2" fill="none" />
        <path d="M8 18L10 16M10 16L12 14M12 14L14 16M14 16L16 18" stroke="#d7e8b5" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  };

  return (
    <span style={{ color: "#d7e8b5", display: "flex", alignItems: "center" }}>
      {icons[name] ?? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#d7e8b5" strokeWidth="1.2" />
          <path d="M12 8v4M12 16h.01" stroke="#d7e8b5" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )}
    </span>
  );
}
