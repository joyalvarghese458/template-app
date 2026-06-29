"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useIsClient } from "./hooks";
import { NAV_ITEMS, PROFILE } from "../_data/content";
import styles from "./Nav.module.css";

// The shared site layout wraps every template route in a page-enter transition
// div that applies a transform during its enter animation. Any non-"none"
// transform on an ancestor gives position:fixed descendants a new containing
// block, so a normally-fixed header would drift with scroll instead of
// staying pinned. Portaling straight to <body> sidesteps that ancestor
// entirely without touching any file outside this template's own folder.
export default function Nav() {
  const pathname = usePathname();
  const isClient = useIsClient();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Close the mobile menu when the route changes, without a setState-in-effect:
  // React allows (and recommends) adjusting state during render in response to
  // a prop change by tracking the previous value and branching before paint.
  const [menuPathname, setMenuPathname] = useState(pathname);
  if (pathname !== menuPathname) {
    setMenuPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  if (!isClient) return null;

  const activeKey = NAV_ITEMS.find((item) => item.href === pathname)?.key ?? "home";

  const nav = (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <div className={styles.inner}>
          <Link href="/templates/helm" className={styles.brand}>
            <span className={styles.mark}>{PROFILE.initials}</span>
            <span className={styles.brandText}>
              <span className={styles.brandName}>{PROFILE.name}</span>
              <span className={styles.brandRole}>{PROFILE.role}, {PROFILE.company}</span>
            </span>
          </Link>

          <nav className={styles.links} aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`${styles.link} ${activeKey === item.key ? styles.linkActive : ""}`}
              >
                {item.label}
                {activeKey === item.key && (
                  <motion.span
                    layoutId="helm-nav-underline"
                    className={styles.underline}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobilePanel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className={styles.mobileLinks}>
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className={`${styles.mobileLink} ${activeKey === item.key ? styles.mobileLinkActive : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    <span className={styles.mobileIndex}>{String(i + 1).padStart(2, "0")}</span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className={styles.mobileFooter}>
              <span>{PROFILE.location}</span>
              <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  return createPortal(nav, document.body);
}
