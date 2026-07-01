"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { OWNER } from "../_data/portfolio";

const noopSubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isClient = useIsClient();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!isClient) return null;

  const nav = (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(250,248,255,0.82)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(28,21,48,0.08)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 24px", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "9px", textDecoration: "none", color: "#1c1530" }}>
          <span className="ascend-logo-dot" aria-hidden="true" />
          <span style={{ fontSize: "15px", fontWeight: 700, letterSpacing: "-0.01em" }}>{OWNER.name}</span>
        </a>

        <nav className="ascend-nav-links" aria-label="Primary navigation" style={{ display: "none", gap: "30px", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ fontSize: "14.5px", fontWeight: 500, color: "#6b6280", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1c1530")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6280")}
            >
              {link.label}
            </a>
          ))}
          <a href={OWNER.calendarUrl} className="ascend-nav-cta">
            Book a Call
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="ascend-hamburger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#1c1530" }}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div style={{ backgroundColor: "#faf8ff", borderTop: "1px solid rgba(28,21,48,0.08)", padding: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{ fontSize: "16px", fontWeight: 600, color: "#1c1530", textDecoration: "none" }}>
              {link.label}
            </a>
          ))}
          <a href={OWNER.calendarUrl} onClick={() => setMenuOpen(false)} className="ascend-nav-cta" style={{ textAlign: "center" }}>
            Book a Call
          </a>
        </div>
      )}

      <style>{`
        .ascend-logo-dot {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: linear-gradient(120deg, #ff7a59, #ff5fa2, #7c5cff);
          display: inline-block;
        }
        .ascend-nav-cta {
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          text-decoration: none;
          background: linear-gradient(120deg, #ff7a59, #ff5fa2, #7c5cff);
          border-radius: 100px;
          padding: 10px 22px;
          display: inline-block;
          transition: transform 0.2s;
        }
        .ascend-nav-cta:hover { transform: translateY(-2px); }
        @media (max-width: 820px) {
          .ascend-nav-links { display: none !important; }
          .ascend-hamburger { display: flex !important; }
        }
        @media (min-width: 821px) {
          .ascend-nav-links { display: flex !important; }
        }
      `}</style>
    </header>
  );

  return createPortal(nav, document.body);
}
