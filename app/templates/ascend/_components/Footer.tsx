"use client";

import { OWNER } from "../_data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#faf8ff", borderTop: "1px solid rgba(28,21,48,0.08)", padding: "44px 20px" }}>
      <div className="ascend-footer-row" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span className="ascend-footer-dot" aria-hidden="true" />
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ fontWeight: 800, fontSize: "16px", color: "#1c1530" }}>{OWNER.name}</span>
            <span style={{ fontSize: "11px", color: "#a39cb0" }}>{OWNER.title}</span>
          </div>
        </div>

        <nav aria-label="Social links" style={{ display: "flex", gap: "22px" }}>
          {[
            { label: "LinkedIn", href: OWNER.linkedin },
            { label: "Email", href: `mailto:${OWNER.email}` },
          ].map((link) => (
            <a key={link.label} href={link.href} style={{ fontSize: "13px", fontWeight: 600, color: "#6b6280", textDecoration: "none" }}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div style={{ height: "1px", backgroundColor: "rgba(28,21,48,0.08)", margin: "28px 0", maxWidth: "1180px", marginLeft: "auto", marginRight: "auto" }} />

      <p style={{ fontSize: "11.5px", color: "#a39cb0", margin: 0, textAlign: "center" }}>
        © {year} {OWNER.name} — {OWNER.location}
      </p>

      <style>{`
        .ascend-footer-dot {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(120deg, #ff7a59, #ff5fa2, #7c5cff);
          display: inline-block;
        }
        .ascend-footer-row { display: flex; flex-direction: column; gap: 20px; align-items: flex-start; }
        @media (min-width: 640px) {
          .ascend-footer-row { flex-direction: row; align-items: center; justify-content: space-between; }
        }
      `}</style>
    </footer>
  );
}
