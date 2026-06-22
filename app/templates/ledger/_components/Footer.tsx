"use client";

import { OWNER } from "../_data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#f8f3e7", borderTop: "1px solid rgba(22,41,31,0.12)", padding: "40px 20px" }}>
      <div className="ledger-footer-row" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "17px", color: "#16291f" }}>{OWNER.name}</span>
          <span style={{ fontFamily: "var(--font-body, sans-serif)", fontSize: "10.5px", fontWeight: 600, color: "#8a9388", textTransform: "uppercase", letterSpacing: "0.04em" }}>{OWNER.title}</span>
        </div>

        <nav aria-label="Footer links" style={{ display: "flex", gap: "22px" }}>
          {[
            { label: "LinkedIn", href: OWNER.linkedin },
            { label: "Email", href: `mailto:${OWNER.email}` },
          ].map((link) => (
            <a key={link.label} href={link.href} style={{ fontFamily: "var(--font-body, sans-serif)", fontSize: "11.5px", fontWeight: 600, color: "#4d5f52", textDecoration: "none" }}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div style={{ height: "1px", backgroundColor: "rgba(22,41,31,0.12)", margin: "26px 0", maxWidth: "1180px", marginLeft: "auto", marginRight: "auto" }} />

      <p style={{ fontFamily: "var(--font-body, sans-serif)", fontSize: "10.5px", fontWeight: 600, color: "#8a9388", textTransform: "uppercase", letterSpacing: "0.03em", margin: 0, textAlign: "center" }}>
        © {year} {OWNER.name} — {OWNER.location}
      </p>

      <style>{`
        .ledger-footer-row { display: flex; flex-direction: column; gap: 20px; align-items: flex-start; }
        @media (min-width: 640px) {
          .ledger-footer-row { flex-direction: row; align-items: center; justify-content: space-between; }
        }
      `}</style>
    </footer>
  );
}
