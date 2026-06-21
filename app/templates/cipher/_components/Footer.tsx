"use client";

import { OWNER } from "../_data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#070a08", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "48px 20px" }}>
      <div className="cipher-footer-row" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "17px", color: "#e9f5ee" }}>{OWNER.name}</span>
          <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "10.5px", color: "#4d5d54", textTransform: "uppercase", letterSpacing: "0.05em" }}>{OWNER.title}</span>
        </div>

        <nav aria-label="Social links" style={{ display: "flex", gap: "22px" }}>
          {[
            { label: "GitHub", href: OWNER.github },
            { label: "LinkedIn", href: OWNER.linkedin },
            { label: "HTB", href: OWNER.htb },
            { label: "Email", href: `mailto:${OWNER.email}` },
          ].map((link) => (
            <a key={link.label} href={link.href} style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11.5px", color: "#8aa194", textDecoration: "none" }}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.08)", margin: "28px 0", maxWidth: "1180px", marginLeft: "auto", marginRight: "auto" }} />

      <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "10.5px", color: "#4d5d54", textTransform: "uppercase", letterSpacing: "0.04em", margin: 0, textAlign: "center" }}>
        © {year} {OWNER.name} — connection secure
      </p>

      <style>{`
        .cipher-footer-row { display: flex; flex-direction: column; gap: 20px; align-items: flex-start; }
        @media (min-width: 640px) {
          .cipher-footer-row { flex-direction: row; align-items: center; justify-content: space-between; }
        }
      `}</style>
    </footer>
  );
}
