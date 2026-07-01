"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { OWNER } from "../_data/portfolio";

const noopSubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
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
        transition: "background-color 0.3s ease, border-color 0.3s ease",
        backgroundColor: scrolled ? "rgba(251,253,246,0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid #e0e5d5" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Left — nav links (desktop) */}
        <nav
          style={{
            display: "flex",
            gap: "32px",
            alignItems: "center",
          }}
          className="adaline-nav-links"
          aria-label="Primary navigation"
        >
          {NAV_LINKS.slice(0, 3).map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "inherit",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                color: "#0a1d08",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Center — name / logo */}
        <a
          href="#home"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "inherit",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "#0a1d08",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          {OWNER.name}
        </a>

        {/* Right — nav links + CTAs (desktop) */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "24px" }}
          className="adaline-nav-right"
        >
          {NAV_LINKS.slice(3).map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "inherit",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                color: "#0a1d08",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              className="adaline-nav-link-hide"
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.resumeUrl}
            style={{
              fontFamily: "inherit",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "#0a1d08",
              textDecoration: "none",
              border: "1px solid #0a1d08",
              borderRadius: "20px",
              padding: "8px 20px",
              transition: "background-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0a1d08";
              e.currentTarget.style.color = "#fbfdf6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#0a1d08";
            }}
          >
            Resume
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: "inherit",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "#fbfdf6",
              textDecoration: "none",
              backgroundColor: "#4a3212",
              borderRadius: "20px",
              padding: "8px 20px",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#203b14")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#4a3212")
            }
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: "#0a1d08",
          }}
          className="adaline-hamburger"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "#fbfdf6",
            borderTop: "1px solid #e0e5d5",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          className="adaline-mobile-menu"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "inherit",
                fontSize: "18px",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                color: "#0a1d08",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: "flex", gap: "12px", paddingTop: "8px" }}>
            <a
              href={OWNER.resumeUrl}
              style={{
                fontFamily: "inherit",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                color: "#0a1d08",
                textDecoration: "none",
                border: "1px solid #0a1d08",
                borderRadius: "20px",
                padding: "10px 20px",
              }}
            >
              Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "inherit",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                color: "#fbfdf6",
                textDecoration: "none",
                backgroundColor: "#4a3212",
                borderRadius: "20px",
                padding: "10px 20px",
              }}
            >
              Contact
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .adaline-nav-links { display: none !important; }
          .adaline-nav-right { display: none !important; }
          .adaline-hamburger { display: flex !important; }
        }
        @media (max-width: 1024px) {
          .adaline-nav-link-hide { display: none; }
        }
      `}</style>
    </header>
  );

  return createPortal(nav, document.body);
}
