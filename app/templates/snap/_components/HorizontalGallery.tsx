"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { GALLERY_PHOTOS } from "../_data/portfolio";
import styles from "../theme.module.css";

export default function HorizontalGallery() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = GALLERY_PHOTOS.length;

  // Scroll to a specific slide
  const scrollTo = useCallback((index: number) => {
    const outer = outerRef.current;
    if (!outer) return;
    const slides = outer.querySelectorAll<HTMLElement>(`.${styles.gallerySlide}`);
    if (!slides[index]) return;
    const paddingLeft = parseInt(getComputedStyle(outer).paddingLeft) || 0;
    outer.scrollTo({ left: slides[index].offsetLeft - paddingLeft, behavior: "smooth" });
    setCurrentIndex(index);
  }, []);

  const prev = () => scrollTo(Math.max(0, currentIndex - 1));
  const next = () => scrollTo(Math.min(total - 1, currentIndex + 1));

  // Sync dot indicator while scrolling
  useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;
    const onScroll = () => {
      const slides = outer.querySelectorAll<HTMLElement>(`.${styles.gallerySlide}`);
      let closest = 0;
      let minDist = Infinity;
      slides.forEach((slide, i) => {
        const dist = Math.abs(slide.offsetLeft - outer.scrollLeft - 24);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      setCurrentIndex(closest);
    };
    outer.addEventListener("scroll", onScroll, { passive: true });
    return () => outer.removeEventListener("scroll", onScroll);
  }, []);

  // Mouse drag-to-scroll
  useEffect(() => {
    const outer = outerRef.current;
    if (!outer || window.matchMedia("(pointer: coarse)").matches) return;
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    const onDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - outer.offsetLeft;
      scrollLeft = outer.scrollLeft;
      outer.style.cursor = "grabbing";
    };
    const onUp = () => {
      isDown = false;
      outer.style.cursor = "grab";
    };
    const onMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - outer.offsetLeft;
      outer.scrollLeft = scrollLeft - (x - startX) * 1.5;
    };
    outer.addEventListener("mousedown", onDown);
    outer.addEventListener("mouseup", onUp);
    outer.addEventListener("mouseleave", onUp);
    outer.addEventListener("mousemove", onMove);
    return () => {
      outer.removeEventListener("mousedown", onDown);
      outer.removeEventListener("mouseup", onUp);
      outer.removeEventListener("mouseleave", onUp);
      outer.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={styles.container}>
        <div className={styles.galleryHeader}>
          <div className={styles.eyebrow}>Gallery</div>
          <h2 className={styles.sectionTitle}>
            The <em>visual journey</em>
          </h2>
          <p className={styles.sectionLead}>
            Drag or use the arrows to explore a curated selection of frames
            from recent projects around the world.
          </p>
        </div>
      </div>

      {/* Outer = scroll container, inner = flex strip */}
      <div ref={outerRef} className={styles.galleryScrollOuter}>
        <div className={styles.galleryTrack}>
          {GALLERY_PHOTOS.map((photo, i) => (
            <div key={i} className={styles.gallerySlide}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className={styles.gallerySlideImg}
                loading="lazy"
                draggable={false}
              />
              <div className={styles.gallerySlideOverlay}>
                <div>
                  <span className={styles.gallerySlideNum}>
                    {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </span>
                  <div className={styles.gallerySlideLabel}>{photo.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.galleryNav}>
          <button
            className={styles.galleryNavBtn}
            onClick={prev}
            aria-label="Previous photo"
            disabled={currentIndex === 0}
          >
            <ChevronLeftIcon />
          </button>
          <button
            className={styles.galleryNavBtn}
            onClick={next}
            aria-label="Next photo"
            disabled={currentIndex === total - 1}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
