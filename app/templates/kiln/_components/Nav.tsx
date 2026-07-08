"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll } from "framer-motion";
import { OWNER } from "../_data/portfolio";

const NAV_LINKS = [
  { label: "Collection", href: "#collection" },
  { label: "The Kiln", href: "#the-kiln" },
  { label: "Craft", href: "#craft" },
  { label: "Contact", href: "#contact" },
];

const FONT_DISPLAY = "'Newsreader', serif";
const FONT_BODY = "'Karla', sans-serif";

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
        backgroundColor: "rgba(247,241,232,0.92)",
        borderBottom: "1px solid rgba(58,46,34,0.14)",
        backdropFilter: "blur(10px)",
        boxShadow: scrolled ? "0 8px 24px rgba(58,46,34,0.1)" : "none",
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
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#3a2e22" }}>
          <svg width="26" height="26" viewBox="0 0 28 28" aria-hidden="true">
            <circle cx="14" cy="14" r="12" fill="none" stroke="#c15f3c" strokeWidth="1.4" />
            <path d="M10 18 C9 14 9 11 14 11 C19 11 19 14 18 18 Z" fill="none" stroke="#6f7d58" strokeWidth="1.3" />
          </svg>
          <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: "21px", letterSpacing: "0.01em" }}>
            {OWNER.name.split(" ")[0]} <span style={{ fontStyle: "italic", color: "#c15f3c" }}>Solberg</span>
          </span>
        </a>

        <nav className="kln-nav-links" aria-label="Primary navigation" style={{ display: "none", gap: "28px", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: FONT_BODY,
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.02em",
                color: "#6b5a45",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#3a2e22")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b5a45")}
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
              color: "#f7f1e8",
              textDecoration: "none",
              backgroundColor: "#c15f3c",
              borderRadius: "4px",
              padding: "10px 20px",
            }}
          >
            Shop The Collection
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="kln-hamburger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#3a2e22" }}
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
            backgroundColor: "#efe4d3",
            borderTop: "1px solid rgba(58,46,34,0.14)",
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
              style={{ fontFamily: FONT_BODY, fontWeight: 500, fontSize: "16px", color: "#3a2e22", textDecoration: "none" }}
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
              color: "#f7f1e8",
              textDecoration: "none",
              backgroundColor: "#c15f3c",
              borderRadius: "4px",
              padding: "12px 20px",
              textAlign: "center",
            }}
          >
            Shop The Collection
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
          backgroundImage: "linear-gradient(90deg, #c15f3c, #6f7d58)",
        }}
      />

      <style>{`
        @media (max-width: 768px) {
          .kln-nav-links { display: none !important; }
          .kln-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .kln-nav-links { display: flex !important; }
        }
      `}</style>
    </header>
  );

  return createPortal(nav, document.body);
}
