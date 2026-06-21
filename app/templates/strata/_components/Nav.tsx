"use client";

import { useState, useEffect } from "react";
import { OWNER } from "../_data/portfolio";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(238,240,236,0.92)" : "transparent",
        borderBottom: scrolled ? "2px solid #1f2421" : "2px solid transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 20px",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "9px", textDecoration: "none", color: "#1f2421" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9.5" stroke="#1f2421" strokeWidth="1.4" />
            <path d="M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5" stroke="#f15a24" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="12" cy="12" r="2" fill="#1f2421" />
          </svg>
          <span style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "16px", letterSpacing: "0.01em" }}>{OWNER.name}</span>
        </a>

        <nav className="strata-nav-links" aria-label="Primary navigation" style={{ display: "none", gap: "26px", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "13px",
                fontWeight: 500,
                color: "#5c655e",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1f2421")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#5c655e")}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.resumeUrl}
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "13px",
              fontWeight: 700,
              color: "#f6f4ee",
              textDecoration: "none",
              backgroundColor: "#1f2421",
              borderRadius: "4px",
              padding: "10px 18px",
            }}
          >
            Resume
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="strata-hamburger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#1f2421" }}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            backgroundColor: "#eef0ec",
            borderTop: "2px solid #1f2421",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "16px", color: "#1f2421", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.resumeUrl}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "14px",
              fontWeight: 700,
              color: "#f6f4ee",
              textDecoration: "none",
              backgroundColor: "#1f2421",
              borderRadius: "4px",
              padding: "12px 20px",
              textAlign: "center",
            }}
          >
            Resume
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .strata-nav-links { display: none !important; }
          .strata-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .strata-nav-links { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
