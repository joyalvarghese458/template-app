"use client";

import { OWNER } from "../_data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#f3f0e5", borderTop: "1px solid rgba(33,42,31,0.12)", padding: "40px 20px" }}>
      <div className="ctr-footer-row" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "19px", color: "#212a1f" }}>{OWNER.name}</span>
          <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "10px", fontWeight: 700, color: "#868c76", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            {OWNER.title} · {OWNER.practice}
          </span>
        </div>

        <nav aria-label="Footer links" style={{ display: "flex", gap: "22px" }}>
          {[
            { label: "LinkedIn", href: OWNER.linkedin },
            { label: "Instagram", href: OWNER.instagram },
            { label: "Email", href: `mailto:${OWNER.email}` },
          ].map((link) => (
            <a key={link.label} href={link.href} style={{ fontSize: "12px", fontWeight: 600, color: "#4c5343", textDecoration: "none" }}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div style={{ height: "1px", backgroundColor: "rgba(33,42,31,0.12)", margin: "26px 0", maxWidth: "1200px", marginLeft: "auto", marginRight: "auto" }} />

      <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "10.5px", fontWeight: 600, color: "#868c76", textTransform: "uppercase", letterSpacing: "0.04em", margin: 0, textAlign: "center" }}>
        © {year} {OWNER.practice} — {OWNER.location} · {OWNER.coordinates}
      </p>

      <style>{`
        .ctr-footer-row { display: flex; flex-direction: column; gap: 20px; align-items: flex-start; }
        @media (min-width: 640px) {
          .ctr-footer-row { flex-direction: row; align-items: center; justify-content: space-between; }
        }
      `}</style>
    </footer>
  );
}
