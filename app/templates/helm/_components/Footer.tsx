import Link from "next/link";
import { NAV_ITEMS, PROFILE, SOCIALS } from "../_data/content";
import theme from "./theme.module.css";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={theme.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <p className={`${theme.display} ${styles.brandName}`}>
              {PROFILE.name}
            </p>
            <p className={styles.brandRole}>{PROFILE.role}, {PROFILE.company}</p>
          </div>

          <div className={styles.cols}>
            <div className={styles.col}>
              <span className={styles.colLabel}>Navigate</span>
              {NAV_ITEMS.map((item) => (
                <Link key={item.key} href={item.href} className={styles.colLink}>
                  {item.label}
                </Link>
              ))}
            </div>

            <div className={styles.col}>
              <span className={styles.colLabel}>Connect</span>
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} className={styles.colLink}>
                  {s.label}
                </a>
              ))}
            </div>

            <div className={styles.col}>
              <span className={styles.colLabel}>Direct</span>
              <a href={`mailto:${PROFILE.email}`} className={styles.colLink}>
                {PROFILE.email}
              </a>
              <span className={styles.colLink}>{PROFILE.location}</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</span>
          <span>{PROFILE.availability}</span>
        </div>
      </div>
    </footer>
  );
}
