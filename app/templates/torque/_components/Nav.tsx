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
        backgroundColor: scrolled ? "rgba(11,14,19,0.85)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo mark */}
        <a
          href="#home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            color: "#eef1f5",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"
              stroke="#ff6a1f"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <circle cx="12" cy="12" r="5" stroke="#3fa9f5" strokeWidth="1.6" />
          </svg>
          <span style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "-0.02em" }}>
            {OWNER.name}
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          style={{ display: "flex", gap: "28px", alignItems: "center" }}
          className="torque-nav-links"
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.01em",
                color: "#8a93a3",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#eef1f5")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8a93a3")}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.resumeUrl}
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: "#0b0e13",
              textDecoration: "none",
              backgroundColor: "#ff6a1f",
              borderRadius: "4px",
              padding: "9px 18px",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff8347")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff6a1f")}
          >
            Resume
          </a>
        </nav>

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
            color: "#eef1f5",
          }}
          className="torque-hamburger"
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

      {menuOpen && (
        <div
          style={{
            backgroundColor: "#0b0e13",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          className="torque-mobile-menu"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "16px",
                fontWeight: 500,
                color: "#eef1f5",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.resumeUrl}
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: "14px",
              fontWeight: 700,
              color: "#0b0e13",
              textDecoration: "none",
              backgroundColor: "#ff6a1f",
              borderRadius: "4px",
              padding: "10px 20px",
              textAlign: "center",
            }}
          >
            Resume
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .torque-nav-links { display: none !important; }
          .torque-hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );

  return createPortal(nav, document.body);
}
