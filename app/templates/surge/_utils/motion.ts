import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const stagger = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

export const popIn = (delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: "backOut", delay },
  },
});

export const growBar = (level: number, delay = 0): Variants => ({
  hidden: { height: "0%" },
  visible: {
    height: `${level}%`,
    transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1], delay },
  },
});

export const VIEWPORT = { once: true, margin: "-60px" };
