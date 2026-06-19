"use client";

import { OWNER } from "../_data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#1a1714", borderTop: "1px solid rgba(243,239,230,0.12)", padding: "40px 20px" }}>
      <div className="byline-footer-inner" style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <div className="byline-footer-row">
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ fontFamily: "var(--font-display, serif)", fontWeight: 700, fontSize: "17px", color: "#f3efe6" }}>
              {OWNER.name}
            </span>
            <span style={{ fontFamily: "var(--font-type, monospace)", fontSize: "10.5px", color: "#8a8276", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {OWNER.title}
            </span>
          </div>

          <nav aria-label="Social links" style={{ display: "flex", gap: "22px" }}>
            {[
              { label: "X / Twitter", href: OWNER.twitter },
              { label: "LinkedIn", href: OWNER.linkedin },
              { label: "Email", href: `mailto:${OWNER.email}` },
            ].map((link) => (
              <a key={link.label} href={link.href} style={{ fontFamily: "var(--font-type, monospace)", fontSize: "11.5px", color: "#ece4d3", textDecoration: "none", opacity: 0.7 }}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div style={{ height: "1px", backgroundColor: "rgba(243,239,230,0.1)", margin: "28px 0" }} />

        <p style={{ fontFamily: "var(--font-type, monospace)", fontSize: "10.5px", color: "#6e6759", textTransform: "uppercase", letterSpacing: "0.04em", margin: 0, textAlign: "center" }}>
          © {year} {OWNER.name} — {OWNER.location}
        </p>
      </div>

      <style>{`
        .byline-footer-row { display: flex; flex-direction: column; gap: 20px; align-items: flex-start; }
        @media (min-width: 640px) {
          .byline-footer-row { flex-direction: row; align-items: center; justify-content: space-between; }
        }
      `}</style>
    </footer>
  );
}
