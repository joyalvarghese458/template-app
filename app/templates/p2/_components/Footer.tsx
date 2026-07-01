import Link from "next/link";
import { NAV_ITEMS, PROFILE } from "../_data/content";
import theme from "./theme.module.css";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${theme.container} ${styles.inner}`}>
        <div className={styles.intro}>
          <p className={theme.eyebrow}>Private care, designed to feel human</p>
          <h2 className={theme.displayTitle}>{PROFILE.name}</h2>
          <p className={styles.copy}>{PROFILE.focus}</p>
        </div>

        <div className={styles.links}>
          <div>
            <span className={styles.label}>Navigate</span>
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className={styles.link}>
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            <span className={styles.label}>Reach out</span>
            <a href={`mailto:${PROFILE.email}`} className={styles.link}>
              {PROFILE.email}
            </a>
            <a href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`} className={styles.link}>
              {PROFILE.phone}
            </a>
            <span className={styles.link}>{PROFILE.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
