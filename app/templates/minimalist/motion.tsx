"use client";

import React, { memo, ReactNode, useEffect, useRef } from "react";
import { motion, MotionProps, useScroll, useTransform } from "framer-motion";

const M = {
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
  section: motion.section,
  header: motion.header,
  article: motion.article,
  nav: motion.nav,
  a: motion.a,
  button: motion.button,
  footer: motion.footer,
  details: motion.details,
} as const;

type MotionTag = keyof typeof M;

interface FadeInProps extends Omit<MotionProps, "style"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: MotionTag;
  className?: string;
  style?: React.CSSProperties;
}

export const FadeIn = memo(function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 28,
  as = "div",
  className,
  style,
  ...rest
}: FadeInProps) {
  const Tag = M[as] ?? M.div;
  return (
    <Tag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      {...(rest as object)}
    >
      {children}
    </Tag>
  );
});

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export function Magnet({
  children,
  padding = 140,
  strength = 4,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(pointer: coarse)").matches) return;

    function onMouseMove(e: MouseEvent) {
      const node = ref.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const inZone =
        e.clientX > rect.left - padding &&
        e.clientX < rect.right + padding &&
        e.clientY > rect.top - padding &&
        e.clientY < rect.bottom + padding;

      if (inZone) {
        const distX = e.clientX - centerX;
        const distY = e.clientY - centerY;
        node.style.setProperty("--magnet-x", `${distX / strength}px`);
        node.style.setProperty("--magnet-y", `${distY / strength}px`);
        node.style.transition = activeTransition;
      } else {
        node.style.setProperty("--magnet-x", "0px");
        node.style.setProperty("--magnet-y", "0px");
        node.style.transition = inactiveTransition;
      }
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div
      ref={ref}
      className={className}
      style={
        {
          willChange: "transform",
          transition: inactiveTransition,
          "--magnet-x": "0px",
          "--magnet-y": "0px",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");

  return (
    <p ref={ref} className={className} aria-label={text} style={style}>
      {chars.map((char, index) => {
        const start = index / chars.length;
        const end = (index + 1) / chars.length;
        return (
          <AnimatedChar
            key={`${char}-${index}`}
            char={char}
            scrollYProgress={scrollYProgress}
            start={start}
            end={end}
          />
        );
      })}
    </p>
  );
}

const AnimatedChar = memo(function AnimatedChar({
  char,
  scrollYProgress,
  start,
  end,
}: {
  char: string;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
  return (
    <span style={{ position: "relative", display: "inline", whiteSpace: "pre-wrap" }}>
      <span style={{ opacity: 0 }}>{char}</span>
      <motion.span style={{ opacity, position: "absolute", left: 0, top: 0 }} aria-hidden>
        {char}
      </motion.span>
    </span>
  );
});
