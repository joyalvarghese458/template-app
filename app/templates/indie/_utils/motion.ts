import type { Variants } from "framer-motion";

// Cinematic easing curves — slower, more luxurious than standard
export const ease = [0.16, 1, 0.3, 1] as const;       // expo-like ease-out
export const easeIn = [0.76, 0, 0.24, 1] as const;    // sharp ease-in
export const easeInOut = [0.87, 0, 0.13, 1] as const; // symmetric slow
export const spring = { type: "spring", stiffness: 80, damping: 22 } as const;

export const viewport = { once: true, margin: "-60px" } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, ease } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.0, ease } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.0, ease } },
};

export const clipReveal: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    opacity: 1,
    transition: { duration: 1.3, ease },
  },
};

// Hero text — lines revealed from below (overflow hidden parent required)
export const heroLine: Variants = {
  hidden: { y: "115%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 1.2, ease },
  },
};

export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const staggerSlow: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};
