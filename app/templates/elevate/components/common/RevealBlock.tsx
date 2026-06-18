"use client";

import { useRef } from "react";

import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "../../styles.module.css";

type RevealBlockProps = {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 100 | 200 | 300;
};

export default function RevealBlock({
  children,
  className,
  delay = 0,
}: RevealBlockProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useScrollReveal(ref);

  return (
    <div
      ref={ref}
      className={[
        styles.revealBlock,
        isVisible ? styles.revealVisible : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
