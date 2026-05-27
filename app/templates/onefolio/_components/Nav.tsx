"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, PROFILE } from "../_data/portfolio";
import styles from "../theme.module.css";

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]    = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <div className={styles.container}>
          <div className={styles.navInner}>

            {/* Logo */}
            <a href="#hero" className={styles.logo} aria-label="Home">
              {PROFILE.initials}
              <span className={styles.logoAccent}>.</span>
            </a>

            {/* Desktop links */}
            <nav className={styles.navLinks} aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right side */}
            <div className={styles.navRight}>
              <a href={`mailto:${PROFILE.email}`} className={styles.navCta}>
                Hire Me
              </a>

              {/* Hamburger */}
              <button
                className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ""}`}
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Backdrop */}
        <div className={styles.mobileMenuBg} onClick={closeMenu} />

        {/* Panel */}
        <div className={styles.mobileMenuPanel}>
          <div className={styles.mobileMenuTop}>
            <span className={styles.mobileMenuLogo}>
              {PROFILE.initials}
              <span className={styles.logoAccent}>.</span>
            </span>
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              style={{ color: "var(--cf-muted)", fontSize: "1.5rem", lineHeight: 1 }}
            >
              ✕
            </button>
          </div>

          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileMenuLink}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <a
            href={`mailto:${PROFILE.email}`}
            className={styles.mobileMenuCta}
            onClick={closeMenu}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </>
  );
}
