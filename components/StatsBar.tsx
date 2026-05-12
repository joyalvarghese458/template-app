"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 30,  suffix: "+", label: "Portfolio Templates" },
  { value: 120, suffix: "+", label: "Portfolios Delivered" },
  { value: 1,   suffix: "",  label: "Year Free Support" },
  { value: 5,   suffix: "★", label: "Average Rating" },
] as const;

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;

    startRef.current = 0;

    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, target, duration]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  active,
  border,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
  border: string;
}) {
  const count = useCountUp(value, active);

  return (
    <div className={`flex items-center justify-center gap-3 py-6 px-6 ${border}`}>
      <span className="text-brand text-lg leading-none" aria-hidden="true">
        •
      </span>
      <div className="text-center">
        <span className="text-2xl sm:text-3xl font-extrabold text-canvas-bg tabular-nums">
          {count}
          {suffix}
        </span>
        <span className="ml-2 text-[11px] sm:text-xs font-semibold text-canvas-bg/80 uppercase tracking-[0.18em]">
          {label}
        </span>
      </div>
    </div>
  );
}

const BORDERS = [
  "border-r border-b border-canvas-bg/10 md:border-b-0",
  "border-b border-canvas-bg/10 md:border-b-0 md:border-r md:border-canvas-bg/10",
  "border-r border-canvas-bg/10",
  "",
];

export default function StatsBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-ink">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {STATS.map(({ value, suffix, label }, i) => (
          <StatItem
            key={label}
            value={value}
            suffix={suffix}
            label={label}
            active={active}
            border={BORDERS[i]}
          />
        ))}
      </div>
    </section>
  );
}
