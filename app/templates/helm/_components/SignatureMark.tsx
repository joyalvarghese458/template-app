"use client";

import { motion } from "framer-motion";

// A stylised signature flourish — draws itself in via framer-motion's
// pathLength prop the first time it scrolls into view. Used as a recurring
// "executive signature" motif across the template instead of a literal,
// hard-to-render cursive wordmark.
export default function SignatureMark({
  className,
  color = "var(--helm-accent)",
  delay = 0,
}: {
  className?: string;
  color?: string;
  delay?: number;
}) {
  return (
    <svg
      viewBox="0 0 320 70"
      fill="none"
      className={className}
      aria-hidden="true"
      style={{ overflow: "visible" }}
    >
      <motion.path
        d="M8 46 C 34 10, 56 10, 70 34 C 84 58, 104 58, 116 32 C 128 6, 154 6, 166 30
           C 178 54, 198 54, 210 30 C 218 14, 232 8, 244 16 C 252 22, 250 34, 240 36
           C 232 37.5, 228 30, 234 24 C 248 10, 276 8, 296 22 C 306 29, 310 38, 308 46"
        stroke={color}
        strokeWidth={2.25}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1], delay }}
      />
    </svg>
  );
}
