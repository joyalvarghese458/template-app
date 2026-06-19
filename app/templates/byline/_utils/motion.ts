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

export const stampIn: Variants = {
  hidden: { opacity: 0, scale: 1.6, rotate: -14 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: -8,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay: 0.9 },
  },
};

export const clipTilt = (index: number): Variants => {
  const rotate = index % 2 === 0 ? -1.4 : 1.6;
  return {
    hidden: { opacity: 0, y: 28, rotate: 0 },
    visible: {
      opacity: 1,
      y: 0,
      rotate,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };
};

export const VIEWPORT = { once: true, margin: "-60px" };
