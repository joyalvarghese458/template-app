"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { pageLinks, site } from "./data";
import { FadeIn } from "./motion";
import styles from "./styles.module.css";

export default function TemplateShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className={styles.page}>
      <div className={styles.ambientGlow} aria-hidden="true" />
      <FadeIn as="header" y={-18} duration={0.6} className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerBar}>
            <Link
              href="/templates/minimalist"
              className={styles.brand}
              onClick={() => setMenuOpen(false)}
            >
              <span className={styles.brandMark}>MV</span>
              <span>
                {site.name}
                <small>{site.role}</small>
              </span>
            </Link>

            <nav className={styles.desktopNav} aria-label="Primary">
              {pageLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={active ? styles.navLinkActive : styles.navLink}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className={styles.headerActions}>
              <a href={`mailto:${site.email}`} className={styles.headerCta}>
                Start a project
              </a>
              <button
                type="button"
                className={styles.menuButton}
                onClick={() => setMenuOpen((value) => !value)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </FadeIn>

      <div
        className={menuOpen ? styles.mobileMenuOpen : styles.mobileMenu}
        aria-hidden={!menuOpen}
      >
        <div className={styles.mobileBackdrop} onClick={() => setMenuOpen(false)} />
        <div className={styles.mobilePanel}>
          <div className={styles.mobilePanelMeta}>
            <p>{site.tagline}</p>
            <span>{site.availability}</span>
          </div>
          <nav className={styles.mobileNav} aria-label="Mobile">
            {pageLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={active ? styles.mobileNavActive : styles.mobileNavLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <a href={`mailto:${site.email}`} className={styles.mobileCta}>
            {site.email}
          </a>
        </div>
      </div>

      <div key={pathname} className={styles.routeStage}>
        <main>{children}</main>

        <FadeIn as="footer" className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footerGrid}>
              <div>
                <p className={styles.footerHeading}>{site.name}</p>
                <p className={styles.footerCopy}>{site.tagline}</p>
              </div>
              <div>
                <p className={styles.footerHeading}>Navigate</p>
                <div className={styles.footerLinks}>
                  {pageLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={styles.footerLink}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className={styles.footerHeading}>Contact</p>
                <div className={styles.footerLinks}>
                  <a href={`mailto:${site.email}`} className={styles.footerLink}>
                    {site.email}
                  </a>
                  <a
                    href={`tel:${site.phone.replace(/\s+/g, "")}`}
                    className={styles.footerLink}
                  >
                    {site.phone}
                  </a>
                  <span className={styles.footerMuted}>{site.location}</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
