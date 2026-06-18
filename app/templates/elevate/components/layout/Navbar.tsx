"use client";

import { useEffect, useState } from "react";

import { useActiveSection } from "../../hooks/useActiveSection";
import styles from "../../styles.module.css";

type NavbarProps = {
  trainerName: string;
  sectionIds: string[];
};

const links = [
  { id: "about", label: "About" },
  { id: "classes", label: "Classes" },
  { id: "schedule", label: "Schedule" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ trainerName, sectionIds }: NavbarProps) {
  const activeSection = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}
      >
        <a href="#hero" className={styles.navBrand}>
          {trainerName}
        </a>

        <nav className={styles.navLinks} aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${styles.navLink} ${
                activeSection === link.id ? styles.navLinkActive : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className={styles.navCta}>
          Book a Session
        </a>

        <button
          type="button"
          className={styles.menuToggle}
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <span />
          <span />
        </button>
      </header>

      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <button
          type="button"
          className={styles.mobileMenuClose}
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>
        <nav className={styles.mobileMenuNav} aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${styles.mobileMenuLink} ${
                activeSection === link.id ? styles.mobileMenuLinkActive : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={styles.mobileMenuButton}
            onClick={() => setMenuOpen(false)}
          >
            Book a Session
          </a>
        </nav>
      </div>
    </>
  );
}
