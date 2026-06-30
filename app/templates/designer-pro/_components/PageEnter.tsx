"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Layered on top of the site-wide fade-up (.page-enter) every template gets —
// a slower fade + scale settle that reads as more deliberate for a creative
// portfolio. Safe to animate scale here because Nav portals straight to
// document.body (see Nav.tsx), so it sits outside this subtree entirely and
// never inherits this div's transform containing block.
// Note: deliberately no `filter: blur()` step — blurring large bright text
// (e.g. the About page's headline) against this template's near-black bg
// spreads luminance into the surrounding area and reads as a white flash.
// (The <html> dark-background flash on refresh/navigation is handled by a
// plain CSS override in layout.tsx, not JS — see the comment there for why.)
export default function PageEnter({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
