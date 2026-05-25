"use client";

import { PROFILE } from "../_data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--i-border)",
        background: "var(--i-bg)",
        padding: "3rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "var(--i-accent-dim)",
              border: "1px solid var(--i-accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              color: "var(--i-accent)",
            }}
          >
            {PROFILE.initials}
          </div>
          <span
            style={{
              fontSize: "0.875rem",
              color: "var(--i-ink-muted)",
            }}
          >
            © {year} {PROFILE.name}. All rights reserved.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: "2rem",
            fontSize: "0.8rem",
            color: "var(--i-ink-faint)",
          }}
        >
          {[
            { label: "Instagram", href: PROFILE.instagram },
            { label: "Vimeo", href: PROFILE.vimeo },
            { label: "LinkedIn", href: PROFILE.linkedin },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                color: "inherit",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--i-accent)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--i-ink-faint)")
              }
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${PROFILE.email}`}
          style={{
            fontSize: "0.8rem",
            color: "var(--i-ink-faint)",
            textDecoration: "none",
            letterSpacing: "0.05em",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.color = "var(--i-ink)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.color = "var(--i-ink-faint)")
          }
        >
          {PROFILE.email}
        </a>
      </div>
    </footer>
  );
}
