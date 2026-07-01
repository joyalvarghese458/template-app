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
  { label: "Stories", href: "#stories" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isClient = useIsClient();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
        backgroundColor: scrolled ? "#f3efe6" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(26,23,20,0.16)" : "1px solid transparent",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* Issue bar */}
      <div
        className="byline-issue-bar"
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "8px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontFamily: "var(--font-type, monospace)", fontSize: "10.5px", letterSpacing: "0.06em", color: "#5b554c" }}>
          {OWNER.dateline}
        </span>
        <span style={{ fontFamily: "var(--font-type, monospace)", fontSize: "10.5px", letterSpacing: "0.06em", color: "#b3231a" }}>
          {OWNER.availability.toUpperCase()}
        </span>
      </div>

      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "0 20px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#home" style={{ textDecoration: "none", color: "#1a1714" }}>
          <span
            style={{
              fontFamily: "var(--font-display, serif)",
              fontWeight: 700,
              fontSize: "22px",
              letterSpacing: "-0.01em",
            }}
          >
            {OWNER.name}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="byline-nav-links" aria-label="Primary navigation" style={{ display: "none", gap: "26px", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-type, monospace)",
                fontSize: "12px",
                letterSpacing: "0.02em",
                color: "#1a1714",
                textDecoration: "none",
                borderBottom: "1px solid transparent",
                paddingBottom: "2px",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#b3231a")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-type, monospace)",
              fontSize: "12px",
              color: "#f3efe6",
              textDecoration: "none",
              backgroundColor: "#b3231a",
              borderRadius: "2px",
              padding: "8px 16px",
            }}
          >
            Have a Tip?
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="byline-hamburger"
          style={{ background: "none", border: "1px solid rgba(26,23,20,0.25)", borderRadius: "2px", cursor: "pointer", padding: "8px 10px", color: "#1a1714" }}
        >
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          className="byline-mobile-menu"
          style={{
            backgroundColor: "#f3efe6",
            borderTop: "1px solid rgba(26,23,20,0.16)",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "var(--font-type, monospace)", fontSize: "15px", color: "#1a1714", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-type, monospace)",
              fontSize: "13px",
              color: "#f3efe6",
              textDecoration: "none",
              backgroundColor: "#b3231a",
              borderRadius: "2px",
              padding: "10px 18px",
              textAlign: "center",
            }}
          >
            Have a Tip?
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 480px) {
          .byline-issue-bar { display: none; }
        }
        @media (min-width: 768px) {
          .byline-nav-links { display: flex !important; }
          .byline-hamburger { display: none !important; }
        }
      `}</style>
    </header>
  );

  return createPortal(nav, document.body);
}
