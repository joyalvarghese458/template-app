"use client";

import { useEffect, useState } from "react";

type RevealOptions = {
  threshold?: number;
  once?: boolean;
};

export function useScrollReveal<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  options: RevealOptions = {}
) {
  const { threshold = 0.15, once = true } = options;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
          return;
        }

        if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, ref, threshold]);

  return isVisible;
}
