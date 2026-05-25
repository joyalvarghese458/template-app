"use client";

import { PROFILE } from "../_data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--i-border)",
        background: "var(--i-bg)",
        padding: "clamp(2rem, 4vw, 3rem) clamp(1.25rem, 4vw, 2rem)",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.25rem",
          flexWrap: "wrap",
        }}
        className="indie-footer-inner"
      >
        {/* Logo + copyright */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", minWidth: 0 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "var(--i-accent-dim)",
              border: "1px solid var(--i-accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              color: "var(--i-accent)",
              flexShrink: 0,
            }}
          >
            {PROFILE.initials}
          </div>
          <span
            style={{
              fontSize: "0.8rem",
              color: "var(--i-ink-muted)",
              whiteSpace: "nowrap",
            }}
          >
            © {year} {PROFILE.name}
          </span>
        </div>

        {/* Social links */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            fontSize: "0.78rem",
            color: "var(--i-ink-faint)",
            flexWrap: "wrap",
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
                padding: "0.25rem 0",
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

        {/* Email */}
        <a
          href={`mailto:${PROFILE.email}`}
          style={{
            fontSize: "0.78rem",
            color: "var(--i-ink-faint)",
            textDecoration: "none",
            letterSpacing: "0.04em",
            transition: "color 0.3s ease",
            wordBreak: "break-all",
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

      <style>{`
        @media (max-width: 640px) {
          .indie-footer-inner {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
