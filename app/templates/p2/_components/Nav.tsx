"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CALL_LINK, NAV_ITEMS, PROFILE } from "../_data/content";
import theme from "./theme.module.css";
import styles from "./Nav.module.css";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.wrap}>
      <div className={`${theme.container} ${styles.inner}`}>
        <Link href="/templates/p2" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.brandMark}>A</span>
          <span>
            <strong>{PROFILE.name}</strong>
            <small>{PROFILE.role}</small>
          </span>
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`} aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.link} ${active ? styles.linkActive : ""}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <a href={CALL_LINK} className={`${theme.button} ${theme.buttonPrimary}`}>
            Book a consult
          </a>
        </nav>
      </div>
    </header>
  );
}
