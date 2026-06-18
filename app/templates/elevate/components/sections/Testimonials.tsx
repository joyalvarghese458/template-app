"use client";

import { useMemo, useRef, useState } from "react";

import type { Trainer } from "../../data/trainer";
import RevealBlock from "../common/RevealBlock";
import SectionLabel from "../common/SectionLabel";
import styles from "../../styles.module.css";

function StarRow({ count }: { count: number }) {
  return (
    <div className={styles.starRow}>
      {Array.from({ length: count }).map((_, index) => (
        <svg key={index} viewBox="0 0 24 24" fill="currentColor">
          <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 19.8l1-6.1L3.2 9.4l6.1-.9L12 3Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials({ trainer }: { trainer: Trainer }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = useMemo(() => trainer.testimonials, [trainer.testimonials]);

  const updateIndex = () => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const cardWidth = scroller.firstElementChild instanceof HTMLElement
      ? scroller.firstElementChild.offsetWidth + 24
      : 1;

    setActiveIndex(Math.round(scroller.scrollLeft / cardWidth));
  };

  const scrollByCard = (direction: 1 | -1) => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const cardWidth = scroller.firstElementChild instanceof HTMLElement
      ? scroller.firstElementChild.offsetWidth + 24
      : 320;

    scroller.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <section className={`${styles.section} ${styles.testimonialsSection}`}>
      <div className={styles.sectionInner}>
        <RevealBlock className={styles.testimonialHeader}>
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className={styles.sectionHeading}>Real Results, Real People</h2>
        </RevealBlock>

        <div className={styles.testimonialControls}>
          <button
            type="button"
            className={styles.testimonialArrow}
            onClick={() => scrollByCard(-1)}
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            type="button"
            className={styles.testimonialArrow}
            onClick={() => scrollByCard(1)}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

        <div
          ref={scrollerRef}
          className={styles.testimonialStrip}
          onScroll={updateIndex}
        >
          {cards.map((testimonial, index) => (
            <RevealBlock key={testimonial.name} className={styles.testimonialCard} delay={(index % 4 === 0 ? 0 : ((index % 4) * 100)) as 0 | 100 | 200 | 300}>
              <span className={styles.quoteMark}>“</span>
              <p className={styles.testimonialQuote}>{testimonial.quote}</p>
              <div className={styles.testimonialMeta}>
                <span className={styles.testimonialAvatar}>
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </span>
                <div>
                  <p className={styles.testimonialName}>{testimonial.name}</p>
                  <p className={styles.testimonialClass}>{testimonial.classType}</p>
                </div>
              </div>
              <StarRow count={testimonial.rating} />
            </RevealBlock>
          ))}
        </div>

        <div className={styles.testimonialDots}>
          {cards.map((testimonial, index) => (
            <span
              key={testimonial.name}
              className={`${styles.testimonialDot} ${
                index === activeIndex ? styles.testimonialDotActive : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
