"use client";

import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const stickySafeRoute =
    pathname === "/templates/onefolio" ||
    pathname === "/templates/graphic-designer" ||
    pathname === "/templates/prism";
  const className = stickySafeRoute ? "page-enter page-enter-no-transform" : "page-enter";

  return (
    <div key={pathname} className={className}>
      {children}
    </div>
  );
}
