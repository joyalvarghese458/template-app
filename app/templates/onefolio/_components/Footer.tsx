"use client";

import { NAV_LINKS, PROFILE } from "../_data/portfolio";
import styles from "../theme.module.css";

const SOCIALS = [
  { label: "Instagram", href: PROFILE.instagram },
  { label: "Behance",   href: PROFILE.behance   },
  { label: "LinkedIn",  href: PROFILE.linkedin  },
  { label: "Dribbble",  href: PROFILE.dribbble  },
  { label: "Twitter",   href: PROFILE.twitter   },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      {/* Decorative glow */}
      <div className={styles.footerBlob} aria-hidden="true" />

      <div className={styles.container}>
        {/* Big brand name */}
        <a href="#hero" className={styles.footerBrand}>
          {PROFILE.name}
        </a>
        <p className={styles.footerTagline}>{PROFILE.philosophy}</p>

        {/* Divider */}
        <div className={styles.footerDivider} />

        {/* Bottom row */}
        <div className={styles.footerBottom}>
          {/* Nav links */}
          <nav className={styles.footerNav} aria-label="Footer navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={styles.footerNavLink}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social links */}
          <div className={styles.footerSocials}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerSocialLink}
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Copyright + back to top */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <p className={styles.footerCopy}>
              © {year} {PROFILE.name}. All rights reserved.
            </p>
            <button onClick={scrollTop} className={styles.backToTop} aria-label="Back to top">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true">
                <path d="M12 19V5" /><path d="M5 12l7-7 7 7" />
              </svg>
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
