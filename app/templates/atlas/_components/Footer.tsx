"use client";

import { OWNER } from "../_data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0a0f1c", borderTop: "1px solid rgba(243,239,228,0.08)", padding: "40px 20px" }}>
      <div className="atlas-footer-row" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "17px", color: "#f3efe4" }}>{OWNER.name}</span>
          <span style={{ fontSize: "10.5px", fontWeight: 600, color: "#6c7790", textTransform: "uppercase", letterSpacing: "0.05em" }}>{OWNER.title}</span>
        </div>

        <nav aria-label="Footer links" style={{ display: "flex", gap: "22px" }}>
          {[
            { label: "LinkedIn", href: OWNER.linkedin },
            { label: "Email", href: `mailto:${OWNER.email}` },
          ].map((link) => (
            <a key={link.label} href={link.href} style={{ fontSize: "12px", fontWeight: 500, color: "#aab4c9", textDecoration: "none" }}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div style={{ height: "1px", backgroundColor: "rgba(243,239,228,0.08)", margin: "26px 0", maxWidth: "1180px", marginLeft: "auto", marginRight: "auto" }} />

      <p style={{ fontSize: "11px", fontWeight: 500, color: "#6c7790", textTransform: "uppercase", letterSpacing: "0.04em", margin: 0, textAlign: "center" }}>
        © {year} {OWNER.name} — {OWNER.location}
      </p>

      <style>{`
        .atlas-footer-row { display: flex; flex-direction: column; gap: 20px; align-items: flex-start; }
        @media (min-width: 640px) {
          .atlas-footer-row { flex-direction: row; align-items: center; justify-content: space-between; }
        }
      `}</style>
    </footer>
  );
}
