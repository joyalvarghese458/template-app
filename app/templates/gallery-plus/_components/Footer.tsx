"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Footer.module.css";

const MARQUEE_TEXT =
  "WEDDINGS · WILDLIFE · FASHION · PORTRAITS · TRAVEL · EVENTS · COMMERCIAL · CINEMATIC · STREET · ";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(
        `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}`
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>{MARQUEE_TEXT}</span>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.brand}>
          <p className={styles.brandName}>GALLERY+</p>
          <p className={styles.brandSub}>Fine Art Photography</p>
          <p className={styles.brandBio}>
            Capturing light, emotion, and story through the lens. Available worldwide for commissions.
          </p>
          <Link href="/templates/gallery-plus/contact" className={styles.bookBtn}>
            Book a Session →
          </Link>
        </div>

        <div className={styles.col}>
          <p className={styles.colLabel}>Navigate</p>
          <Link href="/templates/gallery-plus" className={styles.footLink}>Home</Link>
          <Link href="/templates/gallery-plus/works" className={styles.footLink}>Portfolio</Link>
          <Link href="/templates/gallery-plus/contact" className={styles.footLink}>Contact</Link>
          <Link href="/templates/gallery-plus/contact" className={styles.footLink}>Bookings</Link>
        </div>

        <div className={styles.col}>
          <p className={styles.colLabel}>Disciplines</p>
          <span className={styles.footText}>Weddings &amp; Portraits</span>
          <span className={styles.footText}>Wildlife &amp; Nature</span>
          <span className={styles.footText}>Fashion &amp; Editorial</span>
          <span className={styles.footText}>Travel &amp; Landscape</span>
          <span className={styles.footText}>Commercial &amp; Brands</span>
        </div>

        <div className={styles.col}>
          <p className={styles.colLabel}>Connect</p>
          <a href="#" className={styles.footLink}>Instagram <span>↗</span></a>
          <a href="#" className={styles.footLink}>Facebook <span>↗</span></a>
          <a href="#" className={styles.footLink}>500px <span>↗</span></a>
          <a href="#" className={styles.footLink}>Behance <span>↗</span></a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className={styles.footLink}>
            WhatsApp <span>↗</span>
          </a>
        </div>
      </div>

      <div className={styles.lockup} aria-hidden="true">GALLERY+</div>

      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <span className={styles.dot} />
          <span>Mumbai · {time} IST</span>
        </div>
        <p>© 2026 Gallery+ Photography. All rights reserved.</p>
        <p className={styles.bottomRight}>Crafted with intention ✦</p>
      </div>
    </footer>
  );
}
