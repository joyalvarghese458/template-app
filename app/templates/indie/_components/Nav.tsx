"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILE, NAV_LINKS } from "../_data/portfolio";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "1.5rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background 0.5s ease, backdrop-filter 0.5s ease, padding 0.4s ease",
          background: scrolled ? "rgba(5, 5, 8, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--i-border)" : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "var(--i-accent-dim)",
              border: "1px solid var(--i-accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              color: "var(--i-accent)",
              flexShrink: 0,
            }}
          >
            {PROFILE.initials}
          </div>
          <span
            style={{
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "var(--i-ink)",
              letterSpacing: "0.03em",
            }}
          >
            {PROFILE.name}
          </span>
        </a>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            gap: "2.5rem",
            alignItems: "center",
          }}
          className="indie-nav-links"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--i-ink-muted)",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--i-ink)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--i-ink-muted)")
              }
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.06em",
              padding: "0.6rem 1.25rem",
              borderRadius: "100px",
              border: "1px solid var(--i-accent)",
              color: "var(--i-accent)",
              textDecoration: "none",
              transition: "all 0.3s ease",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLElement;
              el.style.background = "var(--i-accent-dim)";
              el.style.boxShadow = "0 0 20px var(--i-accent-glow)";
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLElement;
              el.style.background = "transparent";
              el.style.boxShadow = "none";
            }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            color: "var(--i-ink)",
          }}
          className="indie-hamburger"
        >
          <div
            style={{
              width: 24,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                width: menuOpen ? 24 : 24,
                height: 1.5,
                background: "var(--i-ink)",
                borderRadius: 2,
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform: menuOpen ? "rotate(45deg) translateY(6.5px)" : "none",
              }}
            />
            <div
              style={{
                width: 16,
                height: 1.5,
                background: "var(--i-ink)",
                borderRadius: 2,
                transition: "opacity 0.3s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <div
              style={{
                width: menuOpen ? 24 : 24,
                height: 1.5,
                background: "var(--i-ink)",
                borderRadius: 2,
                transition: "transform 0.3s ease",
                transform: menuOpen ? "rotate(-45deg) translateY(-6.5px)" : "none",
              }}
            />
          </div>
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999,
              background: "rgba(5, 5, 8, 0.97)",
              backdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2.5rem",
            }}
          >
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: "clamp(2rem, 8vw, 3.5rem)",
                  fontFamily: "var(--i-font-display)",
                  fontWeight: 300,
                  color: "var(--i-ink)",
                  textDecoration: "none",
                  letterSpacing: "-0.02em",
                  transition: "color 0.3s ease",
                }}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "0.875rem",
                padding: "0.75rem 2rem",
                borderRadius: "100px",
                border: "1px solid var(--i-accent)",
                color: "var(--i-accent)",
                textDecoration: "none",
                marginTop: "1rem",
              }}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .indie-nav-links { display: none !important; }
          .indie-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
