"use client";

import { OWNER } from "../_data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0a0a14", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "44px 20px" }}>
      <div className="prism-footer-row" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 600, fontSize: "16px", color: "#f5f4fa" }}>{OWNER.name}</span>
          <span style={{ fontSize: "10.5px", fontWeight: 600, color: "#6b6886", textTransform: "uppercase", letterSpacing: "0.05em" }}>{OWNER.title}</span>
        </div>

        <nav aria-label="Social links" style={{ display: "flex", gap: "22px" }}>
          {[
            { label: "Dribbble", href: OWNER.dribbble },
            { label: "Behance", href: OWNER.behance },
            { label: "LinkedIn", href: OWNER.linkedin },
            { label: "Email", href: `mailto:${OWNER.email}` },
          ].map((link) => (
            <a key={link.label} href={link.href} style={{ fontSize: "12px", fontWeight: 600, color: "#a8a6c0", textDecoration: "none" }}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.08)", margin: "26px 0", maxWidth: "1180px", marginLeft: "auto", marginRight: "auto" }} />

      <p style={{ fontSize: "11px", fontWeight: 600, color: "#6b6886", textTransform: "uppercase", letterSpacing: "0.04em", margin: 0, textAlign: "center" }}>
        © {year} {OWNER.name} — {OWNER.location}
      </p>

      <style>{`
        .prism-footer-row { display: flex; flex-direction: column; gap: 20px; align-items: flex-start; }
        @media (min-width: 640px) {
          .prism-footer-row { flex-direction: row; align-items: center; justify-content: space-between; }
        }
      `}</style>
    </footer>
  );
}
