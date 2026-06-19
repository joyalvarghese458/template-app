"use client";

import { OWNER } from "../_data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0b0e13", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "56px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "28px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={{ fontSize: "18px", fontWeight: 600, color: "#eef1f5", margin: 0 }}>{OWNER.name}</p>
            <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", color: "#8a93a3", textTransform: "uppercase", letterSpacing: "0.06em", margin: 0 }}>
              {OWNER.title}
            </p>
          </div>

          <nav aria-label="Social links" style={{ display: "flex", gap: "28px", alignItems: "center" }}>
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
                style={{ fontSize: "13px", color: "#8a93a3", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#eef1f5")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8a93a3")}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.08)" }} />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", color: "#5b6472", textTransform: "uppercase", letterSpacing: "0.04em", margin: 0 }}>
            © {year} {OWNER.name}
          </p>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ opacity: 0.3 }}>
            <circle cx="12" cy="12" r="5" stroke="#3fa9f5" strokeWidth="1.5" />
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" stroke="#ff6a1f" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", color: "#5b6472", textTransform: "uppercase", letterSpacing: "0.04em", margin: 0 }}>
            {OWNER.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
