import type { Variants } from "framer-motion";

// ── Easing presets ───────────────────────────────────────────────
export const ease = [0.25, 0.4, 0.25, 1] as const;
export const easeOut = [0.0, 0.0, 0.2, 1] as const;

// Shared viewport intersection config — fires once
export const viewport = { once: true, margin: "-80px" } as const;

// ── Basic variants ───────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, ease },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease },
  },
};

// ── Hero text — lines revealed from clip bottom-up ───────────────

export const heroLine: Variants = {
  hidden: { y: "105%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.95, ease },
  },
};

export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.35,
    },
  },
};

// ── Stagger containers ───────────────────────────────────────────

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.0,
    },
  },
};
