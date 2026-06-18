"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import styles from "../../styles.module.css";

type PhotoCarouselProps = {
  images: string[];
  title: string;
  duration: string;
};

export default function PhotoCarousel({
  images,
  title,
  duration,
}: PhotoCarouselProps) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);

  useEffect(() => {
    if (safeImages.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % safeImages.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [safeImages.length]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    setStartX(event.clientX);
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (startX === null) {
      return;
    }

    const distance = event.clientX - startX;

    if (Math.abs(distance) > 40) {
      setActiveIndex((current) => {
        const nextIndex =
          distance < 0 ? current + 1 : current - 1 + safeImages.length;
        return ((nextIndex % safeImages.length) + safeImages.length) % safeImages.length;
      });
    }

    setStartX(null);
  };

  return (
    <div
      className={styles.mediaCard}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerLeave={() => setStartX(null)}
    >
      {safeImages.map((image, index) => (
        <div
          key={`${title}-${image}`}
          className={`${styles.carouselSlide} ${
            index === activeIndex ? styles.carouselSlideActive : ""
          }`}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 767px) 50vw, 33vw"
            className={styles.mediaImage}
          />
        </div>
      ))}

      <div className={styles.mediaOverlay} />
      <span className={styles.mediaBadge}>{title}</span>
      <span className={styles.mediaDuration}>{duration}</span>

      <div className={styles.carouselDots}>
        {safeImages.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            className={`${styles.carouselDot} ${
              index === activeIndex ? styles.carouselDotActive : ""
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
