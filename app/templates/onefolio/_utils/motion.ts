import type { Variants } from "framer-motion";

// ── Easing curves ────────────────────────────────────────────────────
export const ease        = [0.25, 0.4, 0.25, 1]      as const;
export const easeOut     = [0.0,  0.0,  0.2,  1]      as const;
export const easeInOut   = [0.76, 0,    0.24, 1]      as const;
export const spring      = { type: "spring", stiffness: 100, damping: 20 } as const;
export const springSnappy = { type: "spring", stiffness: 220, damping: 28 } as const;

// ── Shared viewport config ───────────────────────────────────────────
export const viewport    = { once: true, margin: "-80px" }  as const;
export const viewportMid = { once: true, margin: "-120px" } as const;

// ── Entrance variants ────────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0,   transition: { duration: 0.85, ease } },
};

export const fadeUpSoft: Variants = {
  hidden:  { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0,   transition: { duration: 0.7,  ease } },
};

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1,         transition: { duration: 0.9,  ease } },
};

export const fadeLeft: Variants = {
  hidden:  { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0,   transition: { duration: 0.75, ease } },
};

export const fadeRight: Variants = {
  hidden:  { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0,   transition: { duration: 0.75, ease } },
};

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1,    transition: { duration: 0.8, ease } },
};

export const scaleInFast: Variants = {
  hidden:  { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1,   transition: { duration: 0.55, ease } },
};

// Clip reveal — wipes content upward from bottom
export const clipUp: Variants = {
  hidden:  { clipPath: "inset(100% 0 0 0)", opacity: 0 },
  visible: { clipPath: "inset(0% 0 0 0)",   opacity: 1,
             transition: { duration: 0.9, ease } },
};

// ── Stagger containers ───────────────────────────────────────────────

export const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const staggerFast: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

export const staggerSlow: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
};

// ── Hero text reveal (lines lift from bottom) ────────────────────────
export const heroLine: Variants = {
  hidden:  { y: "115%", opacity: 0 },
  visible: { y:   "0%", opacity: 1,
             transition: { duration: 1.0, ease: easeInOut } },
};

export const heroContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.35 } },
};

// ── Blob / shape float ───────────────────────────────────────────────
export const floatSlow: Variants = {
  initial:  { y: 0 },
  animate:  { y: [-12, 12, -12], transition: { duration: 7, repeat: Infinity, ease: "easeInOut" } },
};

export const floatMed: Variants = {
  initial:  { y: 0 },
  animate:  { y: [-8, 8, -8], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } },
};
