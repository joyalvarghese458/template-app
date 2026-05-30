"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollY } from "./hooks";
import styles from "../styles.module.css";

const LINKS = [
  { label: "Work",    href: "#work" },
  { label: "About",   href: "#about" },
  { label: "Skills",  href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const scrollY = useScrollY();
  const [open, setOpen] = useState(false);
  const scrolled = scrollY > 40;

  const handleLink = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <div className={styles.navInner}>
          {/* Logo */}
          <span
            className={styles.navLogo}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ALEX<span className={styles.navLogoAccent}>.</span>
          </span>

          {/* Desktop links */}
          <ul className={styles.navLinks}>
            {LINKS.map((l) => (
              <li key={l.label}>
                <span
                  className={styles.navLink}
                  onClick={() => handleLink(l.href)}
                >
                  {l.label}
                </span>
              </li>
            ))}
            <li>
              <span
                className={styles.navCta}
                onClick={() => handleLink("#contact")}
              >
                Hire Me
              </span>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className={`${styles.navHamburger} ${open ? styles.navHamburgerOpen : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={styles.navHamburgerLine} />
            <span className={styles.navHamburgerLine} />
            <span className={styles.navHamburgerLine} />
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {LINKS.map((l, i) => (
              <motion.span
                key={l.label}
                className={styles.mobileMenuLink}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                onClick={() => handleLink(l.href)}
              >
                {l.label}
              </motion.span>
            ))}
            <motion.span
              className={styles.mobileMenuLink}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: LINKS.length * 0.07, duration: 0.4 }}
              onClick={() => handleLink("#contact")}
              style={{ color: "#a78bfa" }}
            >
              Hire Me →
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
