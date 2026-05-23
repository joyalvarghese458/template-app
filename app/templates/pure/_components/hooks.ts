"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveal on scroll using IntersectionObserver.
 * Adds the visible state once the element enters the viewport.
 */
export function useReveal<T extends HTMLElement>(_threshold = 0.18) {
  const ref = useRef<T>(null);
  return { ref, visible: true } as const;
}

/**
 * Track pointer position relative to a node — used for tilt/parallax.
 */
export function usePointerTilt<T extends HTMLElement>(strength = 12) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let tRX = 0;
    let tRY = 0;
    let cRX = 0;
    let cRY = 0;

    const move = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      tRY = x * strength;
      tRX = -y * strength;
    };

    const reset = () => {
      tRX = 0;
      tRY = 0;
    };

    const tick = () => {
      cRX += (tRX - cRX) * 0.08;
      cRY += (tRY - cRY) * 0.08;
      el.style.transform = `perspective(900px) rotateX(${cRX}deg) rotateY(${cRY}deg)`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", reset);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", reset);
    };
  }, [strength]);

  return ref;
}

/**
 * Detects when initial document + assets have finished loading.
 * Falls back to a max-timeout to avoid stalling on slow networks.
 */
export function usePageLoaded(minDuration = 900, maxDuration = 3500) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const start = performance.now();

    const finish = () => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, minDuration - elapsed);
      window.setTimeout(() => setReady(true), remaining);
    };

    if (document.readyState === "complete") {
      finish();
      return;
    }

    const onLoad = () => finish();
    window.addEventListener("load", onLoad);
    const fallback = window.setTimeout(finish, maxDuration);

    return () => {
      window.removeEventListener("load", onLoad);
      window.clearTimeout(fallback);
    };
  }, [minDuration, maxDuration]);

  return ready;
}

/**
 * Parallax scroll — moves an element on Y axis based on scroll.
 */
export function useScrollParallax<T extends HTMLElement>(speed = 0.2) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const tick = () => {
      const rect = el.getBoundingClientRect();
      const wh = window.innerHeight;
      const progress = (rect.top - wh) / (wh + rect.height);
      el.style.setProperty("--parallax", `${-progress * speed * 100}px`);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [speed]);

  return ref;
}
