import type { Variants } from "framer-motion";

export const ease = [0.25, 0.4, 0.25, 1] as const;
export const easeOut = [0.0, 0.0, 0.2, 1] as const;
export const spring = { type: "spring", stiffness: 80, damping: 18 } as const;

export const viewport = { once: true, margin: "-80px" } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease } },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease } },
};

export const clipUp: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    opacity: 1,
    transition: { duration: 0.85, ease },
  },
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

export const heroLine: Variants = {
  hidden: { y: "115%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 1.0, ease } },
};

export const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
};
