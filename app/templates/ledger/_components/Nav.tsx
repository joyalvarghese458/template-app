"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll } from "framer-motion";
import { OWNER } from "../_data/portfolio";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const noopSubscribe = () => () => {};

// SSR-safe "are we mounted on the client" check (no setState-in-effect needed):
// false during server render/hydration, true once running in the browser.
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

  // The shared site layout wraps every template in a page-enter transition div.
  // Any non-"none" transform on that ancestor (even after the animation settles)
  // gives position:fixed descendants a new containing block, so they drift with
  // scroll instead of staying pinned. Portaling straight to <body> sidesteps that
  // ancestor entirely, without needing changes outside this template's own folder.
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
        backgroundColor: scrolled ? "rgba(248,243,231,0.92)" : "rgba(248,243,231,0.55)",
        borderBottom: "1px solid rgba(22,41,31,0.12)",
        backdropFilter: "blur(10px)",
        transition: "background-color 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 20px",
          height: "66px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "9px", textDecoration: "none", color: "#16291f" }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9.5" stroke="#1f5c3f" strokeWidth="1.4" />
            <path d="M7.5 9.5h9M7.5 14.5h9" stroke="#1f5c3f" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="17.2" cy="6.8" r="1.6" fill="#b8862c" />
          </svg>
          <span style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "18px", letterSpacing: "0.01em", color: "#16291f" }}>{OWNER.name}</span>
        </a>

        <nav className="ledger-nav-links" aria-label="Primary navigation" style={{ display: "none", gap: "26px", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.01em",
                color: "#4d5f52",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#16291f")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4d5f52")}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.ctaHref}
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: "13.5px",
              fontWeight: 600,
              color: "#fffdf7",
              textDecoration: "none",
              backgroundColor: "#1f5c3f",
              borderRadius: "4px",
              padding: "9px 18px",
            }}
          >
            {OWNER.ctaLabel}
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="ledger-hamburger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#16291f" }}
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
            backgroundColor: "#f8f3e7",
            borderTop: "1px solid rgba(22,41,31,0.12)",
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
              style={{ fontFamily: "var(--font-body, sans-serif)", fontWeight: 500, fontSize: "16px", color: "#16291f", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={OWNER.ctaHref}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontWeight: 600,
              fontSize: "14px",
              color: "#fffdf7",
              textDecoration: "none",
              backgroundColor: "#1f5c3f",
              borderRadius: "4px",
              padding: "12px 20px",
              textAlign: "center",
            }}
          >
            {OWNER.ctaLabel}
          </a>
        </div>
      )}

      {/* Scroll progress bar — the ledger "balance line" sweeping under the nav */}
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
          backgroundImage: "linear-gradient(90deg, #1f5c3f, #b8862c)",
        }}
      />

      <style>{`
        @media (max-width: 768px) {
          .ledger-nav-links { display: none !important; }
          .ledger-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .ledger-nav-links { display: flex !important; }
        }
      `}</style>
    </header>
  );

  return createPortal(nav, document.body);
}
