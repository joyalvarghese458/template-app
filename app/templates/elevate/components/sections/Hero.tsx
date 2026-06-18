"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { heroImages } from "../../data/media";
import type { Trainer } from "../../data/trainer";
import { useParallax } from "../../hooks/useParallax";
import StatCounter from "../common/StatCounter";
import styles from "../../styles.module.css";

function HeroSlide({
  src,
  alt,
  active,
  priority,
}: {
  src: string;
  alt: string;
  active: boolean;
  priority?: boolean;
}) {
  const innerRef = useRef<HTMLDivElement | null>(null);

  useParallax(innerRef, 0.4);

  return (
    <div className={`${styles.heroSlide} ${active ? styles.heroSlideActive : ""}`}>
      <div ref={innerRef} className={styles.heroParallaxLayer}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className={styles.heroImage}
        />
      </div>
      <div className={styles.heroSlideOverlay} />
    </div>
  );
}

export default function Hero({ trainer }: { trainer: Trainer }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroImages.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroBackground}>
        {heroImages.map((image, index) => (
          <HeroSlide
            key={image}
            src={image}
            alt={`${trainer.name} training session ${index + 1}`}
            active={index === activeSlide}
            priority={index === 0}
          />
        ))}
      </div>

      <div className={styles.heroContent}>
        <p className={`${styles.heroOverline} ${styles.heroOverlineAnimate}`}>
          Personal Trainer · {trainer.location.split(",")[0]}
        </p>

        <h1 className={`${styles.heroTitle} ${styles.heroTitleAnimate}`}>
          <span>Train Hard.</span>
          <span>
            Live <em>Strong.</em>
          </span>
        </h1>

        <p className={`${styles.heroTagline} ${styles.heroTaglineAnimate}`}>
          {trainer.tagline}
        </p>

        <div className={`${styles.heroActions} ${styles.heroActionsAnimate}`}>
          <a href="#contact" className={styles.primaryButton}>
            Book a Free Session
          </a>
          <a href="#classes" className={styles.secondaryButton}>
            See My Classes
          </a>
        </div>

        <div className={styles.heroIndicators} aria-hidden="true">
          {heroImages.map((image, index) => (
            <span key={image} className={styles.heroIndicator}>
              <span
                className={`${styles.heroIndicatorFill} ${
                  index === activeSlide ? styles.heroIndicatorFillActive : ""
                }`}
              />
            </span>
          ))}
        </div>
      </div>

      <div className={`${styles.heroStats} ${styles.heroStatsAnimate}`}>
        {trainer.stats.map((stat) => (
          <StatCounter
            key={stat.label}
            label={stat.label}
            target={stat.target}
            suffix={stat.suffix}
          />
        ))}
      </div>
    </section>
  );
}
