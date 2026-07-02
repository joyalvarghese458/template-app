"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll } from "framer-motion";
import { OWNER } from "../_data/portfolio";

const NAV_LINKS = [
  { label: "Fragrances", href: "#fragrances" },
  { label: "The Accord", href: "#the-accord" },
  { label: "Craft", href: "#craft" },
  { label: "Contact", href: "#contact" },
];

const FONT_DISPLAY = "'Cormorant Garamond', serif";
const FONT_BODY = "'Jost', sans-serif";

const noopSubscribe = () => () => {};

// The shared site layout wraps every template in a page-enter transition div
// (components/PageTransition.tsx). Any transform on that ancestor gives
// position:fixed descendants a new containing block, so they drift with
// scroll instead of staying pinned. Portaling straight to <body> sidesteps
// that ancestor without touching any file outside this template's own folder
// — the nav stays fixed on every scroll position, on every page load.
function useIsClient() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isClient = useIsClient();

  if (!isClient) return null;

  const nav = (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "rgba(250,245,234,0.92)",
        borderBottom: "1px solid rgba(43,32,21,0.14)",
        backdropFilter: "blur(10px)",
        boxShadow: scrolled ? "0 8px 24px rgba(43,32,21,0.1)" : "none",
        transition: "box-shadow 0.3s ease",
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
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#2b2015" }}>
          <svg width="26" height="26" viewBox="0 0 28 28" aria-hidden="true">
            <circle cx="14" cy="14" r="12" fill="none" stroke="#b6752c" strokeWidth="1.3" />
            <circle cx="14" cy="14" r="7.5" fill="none" stroke="#b1556b" strokeWidth="1.1" />
            <circle cx="14" cy="14" r="2" fill="#b6752c" />
          </svg>
          <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: "22px", letterSpacing: "0.01em" }}>
            {OWNER.name.split(" ")[0]} <span style={{ fontStyle: "italic", color: "#b6752c" }}>Rousseau</span>
          </span>
        </a>

        <nav className="sil-nav-links" aria-label="Primary navigation" style={{ display: "none", gap: "28px", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: FONT_BODY,
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.02em",
                color: "#6f5f47",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2b2015")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6f5f47")}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.resumeUrl}
            style={{
              fontFamily: FONT_BODY,
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.02em",
              color: "#faf5ea",
              textDecoration: "none",
              backgroundColor: "#b6752c",
              borderRadius: "4px",
              padding: "10px 20px",
            }}
          >
            The Collection
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="sil-hamburger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#2b2015" }}
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
            backgroundColor: "#f3ecdc",
            borderTop: "1px solid rgba(43,32,21,0.14)",
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
              style={{ fontFamily: FONT_BODY, fontWeight: 500, fontSize: "16px", color: "#2b2015", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.resumeUrl}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: FONT_BODY,
              fontWeight: 600,
              fontSize: "15px",
              color: "#faf5ea",
              textDecoration: "none",
              backgroundColor: "#b6752c",
              borderRadius: "4px",
              padding: "12px 20px",
              textAlign: "center",
            }}
          >
            The Collection
          </a>
        </div>
      )}

      <motion.div
        aria-hidden="true"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0% 50%",
          position: "absolute",
          bottom: "-1.5px",
          left: 0,
          right: 0,
          height: "2px",
          backgroundImage: "linear-gradient(90deg, #b6752c, #b1556b)",
        }}
      />

      <style>{`
        @media (max-width: 768px) {
          .sil-nav-links { display: none !important; }
          .sil-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .sil-nav-links { display: flex !important; }
        }
      `}</style>
    </header>
  );

  return createPortal(nav, document.body);
}
