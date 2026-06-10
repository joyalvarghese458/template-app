"use client";

import { OWNER } from "../_data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#0a1d08",
        padding: "64px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "48px",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "32px",
          }}
        >
          {/* Name & tagline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p
              style={{
                fontFamily: "inherit",
                fontSize: "20px",
                fontWeight: 400,
                letterSpacing: "-0.04em",
                color: "#fbfdf6",
                margin: 0,
              }}
            >
              {OWNER.name}
            </p>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
                letterSpacing: "0.02em",
                color: "#fbfdf6",
                opacity: 0.4,
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Full Stack Developer
            </p>
          </div>

          {/* Social links */}
          <nav aria-label="Social links" style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            {[
              { label: "LinkedIn", href: OWNER.linkedin },
              { label: "GitHub", href: OWNER.github },
              { label: "Email", href: `mailto:${OWNER.email}` },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                style={{
                  fontFamily: "inherit",
                  fontSize: "14px",
                  fontWeight: 400,
                  letterSpacing: "-0.56px",
                  color: "#fbfdf6",
                  opacity: 0.5,
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "#fbfdf6", opacity: 0.1 }} />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "12px",
              letterSpacing: "0.02em",
              color: "#fbfdf6",
              opacity: 0.3,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            © {year} {OWNER.name}
          </p>

          {/* Small botanical mark */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ opacity: 0.2 }}>
            <path
              d="M12 2C12 2 8 6 8 10C8 12.2 9.8 14 12 14C14.2 14 16 12.2 16 10C16 6 12 2 12 2Z"
              fill="#fbfdf6"
            />
            <path
              d="M12 14V22"
              stroke="#fbfdf6"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12 18C12 18 9 16 7 14"
              stroke="#fbfdf6"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "12px",
              letterSpacing: "0.02em",
              color: "#fbfdf6",
              opacity: 0.3,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            {OWNER.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
