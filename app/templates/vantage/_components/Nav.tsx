"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll } from "framer-motion";
import { OWNER } from "../_data/portfolio";

const NAV_LINKS = [
  { label: "Method", href: "#method" },
  { label: "Engagements", href: "#engagements" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

const FONT_DISPLAY = "'Fraunces', serif";
const FONT_BODY = "'Manrope', sans-serif";

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
        backgroundColor: "rgba(246,243,234,0.9)",
        borderBottom: "1px solid rgba(23,20,15,0.12)",
        backdropFilter: "blur(10px)",
        boxShadow: scrolled ? "0 8px 24px rgba(23,20,15,0.08)" : "none",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#17140f" }}>
          <svg width="26" height="26" viewBox="0 0 28 28" aria-hidden="true">
            <path d="M4 22L14 4L24 22" fill="none" stroke="#0f6b56" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M9 22L14 12L19 22" fill="none" stroke="#b3703b" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
          <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: "20px", letterSpacing: "0.01em" }}>
            {OWNER.name.split(" ")[0]} <span style={{ fontStyle: "italic", color: "#0f6b56" }}>Anand</span>
          </span>
        </a>

        <nav className="vtg-nav-links" aria-label="Primary navigation" style={{ display: "none", gap: "28px", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: FONT_BODY,
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.01em",
                color: "#4a4438",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#17140f")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4a4438")}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.calendly}
            style={{
              fontFamily: FONT_BODY,
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.01em",
              color: "#f6f3ea",
              textDecoration: "none",
              backgroundColor: "#0f6b56",
              borderRadius: "6px",
              padding: "10px 20px",
            }}
          >
            Book A Call
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="vtg-hamburger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#17140f" }}
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
            backgroundColor: "#eee8d9",
            borderTop: "1px solid rgba(23,20,15,0.12)",
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
              style={{ fontFamily: FONT_BODY, fontWeight: 600, fontSize: "16px", color: "#17140f", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.calendly}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: FONT_BODY,
              fontWeight: 700,
              fontSize: "15px",
              color: "#f6f3ea",
              textDecoration: "none",
              backgroundColor: "#0f6b56",
              borderRadius: "6px",
              padding: "12px 20px",
              textAlign: "center",
            }}
          >
            Book A Call
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
          backgroundImage: "linear-gradient(90deg, #0f6b56, #b3703b)",
        }}
      />

      <style>{`
        @media (max-width: 768px) {
          .vtg-nav-links { display: none !important; }
          .vtg-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .vtg-nav-links { display: flex !important; }
        }
      `}</style>
    </header>
  );

  return createPortal(nav, document.body);
}
