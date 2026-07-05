"use client";

import { OWNER } from "../_data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#04141d", borderTop: "1px solid rgba(255,255,255,0.09)", padding: "40px 20px" }}>
      <div className="marea-footer-row" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ fontFamily: "var(--font-display, serif)", fontStyle: "italic", fontWeight: 500, fontSize: "19px", color: "#eaf6f5" }}>{OWNER.brand}</span>
          <span style={{ fontSize: "10.5px", fontWeight: 600, color: "#5c7c80", textTransform: "uppercase", letterSpacing: "0.05em" }}>{OWNER.name} · {OWNER.title}</span>
        </div>

        <nav aria-label="Footer links" style={{ display: "flex", gap: "22px" }}>
          {[
            { label: "LinkedIn", href: OWNER.linkedin },
            { label: "Scholar", href: OWNER.scholar },
            { label: "Email", href: `mailto:${OWNER.email}` },
          ].map((link) => (
            <a key={link.label} href={link.href} style={{ fontSize: "11.5px", fontWeight: 600, color: "#9fc0c2", textDecoration: "none" }}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.09)", margin: "26px 0", maxWidth: "1180px", marginLeft: "auto", marginRight: "auto" }} />

      <p style={{ fontSize: "10.5px", fontWeight: 600, color: "#5c7c80", textTransform: "uppercase", letterSpacing: "0.04em", margin: 0, textAlign: "center" }}>
        © {year} {OWNER.name} — {OWNER.location}
      </p>

      <style>{`
        .marea-footer-row { display: flex; flex-direction: column; gap: 20px; align-items: flex-start; }
        @media (min-width: 640px) {
          .marea-footer-row { flex-direction: row; align-items: center; justify-content: space-between; }
        }
      `}</style>
    </footer>
  );
}
