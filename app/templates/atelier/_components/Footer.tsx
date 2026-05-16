"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [time, setTime] = useState("");
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      const ss = String(d.getSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const marqueeText = "VISUAL STORYTELLING — MOTION DESIGN — 3D / CGI — BRAND SYSTEMS — ";

  return (
    <footer className={styles.footer}>
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack} ref={marqueeRef}>
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>{marqueeText}</span>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.col}>
          <p className={styles.colLabel}>Contact</p>
          <a href="mailto:hello@atelier.studio" className={styles.bigLink}>
            hello@atelier.studio
          </a>
          <p className={styles.muted}>+1 (415) 555 — 0182</p>
        </div>

        <div className={styles.col}>
          <p className={styles.colLabel}>Studios</p>
          <p>San Francisco</p>
          <p>Berlin</p>
          <p>Tokyo</p>
        </div>

        <div className={styles.col}>
          <p className={styles.colLabel}>Channels</p>
          <a href="#" className={styles.smallLink}>Instagram <span>↗</span></a>
          <a href="#" className={styles.smallLink}>Behance <span>↗</span></a>
          <a href="#" className={styles.smallLink}>Vimeo <span>↗</span></a>
          <a href="#" className={styles.smallLink}>LinkedIn <span>↗</span></a>
        </div>

        <div className={styles.col}>
          <p className={styles.colLabel}>Navigate</p>
          <Link href="/templates/atelier" className={styles.smallLink}>Index</Link>
          <Link href="/templates/atelier/work" className={styles.smallLink}>Work</Link>
          <Link href="/templates/atelier/about" className={styles.smallLink}>About</Link>
          <Link href="/templates/atelier/services" className={styles.smallLink}>Services</Link>
          <Link href="/templates/atelier/contact" className={styles.smallLink}>Contact</Link>
        </div>
      </div>

      <div className={styles.lockup} aria-hidden="true">
        ATELIER
      </div>

      <div className={styles.bottom}>
        <div>
          <span className={styles.dot} />
          <span>SF · {time}</span>
        </div>
        <p>© 2026 Atelier Studio. All rights reserved.</p>
        <p>Crafted with intention</p>
      </div>
    </footer>
  );
}