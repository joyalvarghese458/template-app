"use client";

import { PROFILE, NAV_LINKS } from "../_data/portfolio";
import styles from "../theme.module.css";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href="#hero" className={styles.footerBrand} aria-label="Back to top">
          {PROFILE.name}
        </a>

        <div className={styles.footerDivider} />

        <div className={styles.footerBottom}>
          <nav className={styles.footerNav} aria-label="Footer navigation">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={styles.footerNavLink}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className={styles.footerSocials}>
            {[
              { href: PROFILE.instagram, label: "IG" },
              { href: PROFILE.behance,   label: "BE" },
              { href: PROFILE.linkedin,  label: "LI" },
              { href: PROFILE.dribbble,  label: "DR" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerSocialLink}
                aria-label={s.label}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <span className={styles.footerCopy}>
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </span>
          <button
            type="button"
            className={styles.backToTop}
            onClick={scrollTop}
            aria-label="Back to top"
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
