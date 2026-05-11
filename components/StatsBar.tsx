"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 100, suffix: "+", label: "Templates" },
  { value: 50,  suffix: "+", label: "Happy Clients" },
  { value: 1,   suffix: "",  label: "Year Free Support" },
  { value: 5,   suffix: "★", label: "Average Rating" },
] as const;

// rAF-based count-up with cubic ease-out
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
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
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
    <div className={`text-center py-10 px-6 ${border}`}>
      <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2 tabular-nums">
        {count}
        {suffix}
      </div>
      <p className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
}

// Border logic for 2×2 mobile grid → 4-column desktop row
const BORDERS = [
  "border-r border-b border-white/10 md:border-b-0",
  "border-b border-white/10 md:border-b-0 md:border-r md:border-white/10",
  "border-r border-white/10",
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
    <section
      ref={sectionRef}
      className="relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay — slightly lighter than AboutSection so stats pop */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4">
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
