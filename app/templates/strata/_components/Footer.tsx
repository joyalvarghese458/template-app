"use client";

import { OWNER } from "../_data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#1f2421", borderTop: "1px solid #454c45", padding: "40px 20px" }}>
      <div className="strata-footer-row" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "17px", color: "#eef0ec", textTransform: "uppercase" }}>{OWNER.name}</span>
          <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "10.5px", fontWeight: 500, color: "#8b8d87", textTransform: "uppercase", letterSpacing: "0.05em" }}>{OWNER.title}</span>
        </div>

        <nav aria-label="Footer links" style={{ display: "flex", gap: "22px" }}>
          {[
            { label: "LinkedIn", href: OWNER.linkedin },
            { label: "Email", href: `mailto:${OWNER.email}` },
          ].map((link) => (
            <a key={link.label} href={link.href} style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11.5px", fontWeight: 500, color: "#a9ada6", textDecoration: "none" }}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div style={{ height: "1px", backgroundColor: "#454c45", margin: "26px 0", maxWidth: "1180px", marginLeft: "auto", marginRight: "auto" }} />

      <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "10.5px", fontWeight: 500, color: "#6f756e", textTransform: "uppercase", letterSpacing: "0.04em", margin: 0, textAlign: "center" }}>
        © {year} {OWNER.name} — {OWNER.location}
      </p>

      <style>{`
        .strata-footer-row { display: flex; flex-direction: column; gap: 20px; align-items: flex-start; }
        @media (min-width: 640px) {
          .strata-footer-row { flex-direction: row; align-items: center; justify-content: space-between; }
        }
      `}</style>
    </footer>
  );
}
