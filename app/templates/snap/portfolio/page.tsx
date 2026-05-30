"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis }        from "../_hooks/useLenis";
import GrainOverlay        from "../_components/GrainOverlay";
import ScrollProgress      from "../_components/ScrollProgress";
import CustomCursor        from "../_components/CustomCursor";
import Nav                 from "../_components/Nav";
import Footer              from "../_components/Footer";
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from "../_data/portfolio";
import { stagger, scaleIn, viewport } from "../_utils/motion";
import styles from "../theme.module.css";

export default function SnapPortfolio() {
  useLenis();
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === active);

  return (
    <div className={styles.page}>
      <GrainOverlay />
      <ScrollProgress />
      <CustomCursor />
      <Nav />

      <main>
        {/* Hero */}
        <section className={styles.portfolioHero}>
          <div className={styles.portfolioHeroBg} />
          <div className={styles.container} style={{ position: "relative", zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className={styles.eyebrow}>The Portfolio</div>
              <h1 className={styles.portfolioHeroTitle}>
                Every <em>frame</em>, a story
              </h1>
              <p className={styles.portfolioHeroSub}>
                14 years · 32 countries · 600+ stories told
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter bar */}
        <div className={styles.container}>
          <div className={styles.filterBar}>
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.filterBtn} ${active === cat.id ? styles.filterBtnActive : ""}`}
                onClick={() => setActive(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className={styles.masonryGrid}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  className={styles.masonryItem}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.masonryImg}
                    loading="lazy"
                    draggable={false}
                  />
                  <div className={styles.masonryOverlay}>
                    <div className={styles.masonryCaption}>
                      <span className={styles.masonryCaptionTitle}>{item.title}</span>
                      <span className={styles.masonryCaptionLoc}>{item.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA */}
        <section
          style={{
            padding: "clamp(4rem, 8vw, 7rem) 0",
            textAlign: "center",
            background: "var(--snap-bg2)",
          }}
        >
          <div className={styles.container}>
            <div className={styles.eyebrow} style={{ justifyContent: "center", marginBottom: "1.5rem" }}>
              Ready to create?
            </div>
            <h2 className={styles.sectionTitle} style={{ marginBottom: "1rem" }}>
              Let&apos;s make something <em>extraordinary</em>
            </h2>
            <p className={styles.sectionLead} style={{ textAlign: "center", margin: "0 auto 2.5rem" }}>
              I take a limited number of bookings each year. Let&apos;s see if we&apos;re the right fit.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/templates/snap/contact" className={styles.btnPrimary}>
                Book a Session
              </Link>
              <Link href="/templates/snap" className={styles.btnGhost}>
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
