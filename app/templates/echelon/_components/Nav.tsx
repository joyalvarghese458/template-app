"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll } from "framer-motion";
import { OWNER } from "../_data/portfolio";

const NAV_LINKS = [
  { label: "Mandates", href: "#mandates" },
  { label: "Principles", href: "#principles" },
  { label: "Command", href: "#command" },
  { label: "Competencies", href: "#competencies" },
  { label: "Contact", href: "#contact" },
];

const FONT_DISPLAY = "'Domine', Georgia, serif";
const FONT_BODY = "'Karla', sans-serif";

const noopSubscribe = () => () => {};

// The shared site layout wraps every template in a page-enter transition div
// (components/PageTransition.tsx). Any transform on that ancestor gives
// position:fixed descendants a new containing block, so they drift with
// scroll instead of staying pinned. Portaling straight to <body> sidesteps
// that ancestor without touching any file outside this template's own folder.
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
        backgroundColor: "rgba(11,14,20,0.86)",
        borderBottom: "1px solid rgba(238,241,246,0.1)",
        backdropFilter: "blur(10px)",
        boxShadow: scrolled ? "0 8px 24px rgba(0,0,0,0.45)" : "none",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 20px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "9px", textDecoration: "none", color: "#eef1f6" }}>
          <svg width="24" height="24" viewBox="0 0 28 28" aria-hidden="true">
            <path d="M14 2 L25 8 V20 L14 26 L3 20 V8 Z" fill="none" stroke="#3b6fe0" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M14 9 L19.5 12 V18 L14 21 L8.5 18 V12 Z" fill="none" stroke="#d98a3d" strokeWidth="1.2" strokeLinejoin="round" />
          </svg>
          <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: "17px", letterSpacing: "-0.01em" }}>{OWNER.name}</span>
        </a>

        <nav className="ech-nav-links" aria-label="Primary navigation" style={{ display: "none", gap: "26px", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: FONT_BODY,
                fontSize: "14px",
                fontWeight: 500,
                color: "#9aa7bb",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#eef1f6")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9aa7bb")}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.resumeUrl}
            style={{
              fontFamily: FONT_BODY,
              fontSize: "13px",
              fontWeight: 700,
              color: "#0b0e14",
              textDecoration: "none",
              backgroundImage: "linear-gradient(120deg, #3b6fe0, #6f97f2)",
              borderRadius: "100px",
              padding: "10px 20px",
            }}
          >
            Leadership Profile
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="ech-hamburger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#eef1f6" }}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            backgroundColor: "#11151d",
            borderTop: "1px solid rgba(238,241,246,0.1)",
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
              style={{ fontFamily: FONT_BODY, fontWeight: 500, fontSize: "16px", color: "#eef1f6", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.resumeUrl}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: FONT_BODY,
              fontWeight: 700,
              fontSize: "14.5px",
              color: "#0b0e14",
              textDecoration: "none",
              backgroundImage: "linear-gradient(120deg, #3b6fe0, #6f97f2)",
              borderRadius: "100px",
              padding: "12px 20px",
              textAlign: "center",
            }}
          >
            Leadership Profile
          </a>
        </div>
      )}

      {/* Scroll progress bar */}
      <motion.div
        aria-hidden="true"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0% 50%",
          position: "absolute",
          bottom: "-1.5px",
          left: 0,
          right: 0,
          height: "2.5px",
          backgroundImage: "linear-gradient(90deg, #3b6fe0, #6f97f2, #d98a3d)",
        }}
      />

      <style>{`
        @media (max-width: 768px) {
          .ech-nav-links { display: none !important; }
          .ech-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .ech-nav-links { display: flex !important; }
        }
      `}</style>
    </header>
  );

  return createPortal(nav, document.body);
}
