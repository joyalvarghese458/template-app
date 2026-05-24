"use client";

import { useState, useEffect } from "react";
import { PROFILE, NAV_LINKS } from "../_data/portfolio";
import styles from "../theme.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <div className={styles.container}>
          <div className={styles.navInner}>
            <a href="#hero" className={styles.logo}>
              {PROFILE.initials}<span className={styles.logoDot}>.</span>
            </a>

            <nav className={styles.navLinks} aria-label="Primary navigation">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className={styles.navLink}>
                  {l.label}
                </a>
              ))}
            </nav>

            <div className={styles.navRight}>
              <a href="#contact" className={styles.navCta}>Hire me</a>
              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((o) => !o)}
                className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ""}`}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        aria-modal={menuOpen}
        aria-hidden={!menuOpen}
      >
        <div className={styles.mobileMenuBg} onClick={close} />
        <nav className={styles.mobileMenuPanel} aria-label="Mobile navigation">
          <div className={styles.mobileMenuTop}>
            <span className={styles.mobileMenuLogo}>
              {PROFILE.initials}<span className={styles.logoDot}>.</span>
            </span>
          </div>
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className={styles.mobileMenuLink}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={close} className={styles.mobileMenuCta}>
            Hire me
          </a>
        </nav>
      </div>
    </>
  );
}
