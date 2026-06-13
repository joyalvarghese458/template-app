"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sun, Wind, Moon, Heart, Activity, Users,
  MapPin, Clock, Mail, MessageCircle,
  Camera, X as XIcon, Play,
  BookOpen, Headphones, FileText,
  ChevronRight, ArrowRight, Menu,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ComponentType } from "react";
import { useState } from "react";
import { data } from "./data";

type IconComponent = ComponentType<LucideProps>;

const P = {
  bg:        "#faf8f4",
  surface:   "#f4f0e8",
  sand:      "#ede8de",
  earth:     "#8b7355",
  earthDark: "#6d5a40",
  leaf:      "#6b8f71",
  charcoal:  "#2c2420",
  fog:       "#786e66",
  mist:      "#a89e94",
  taupe:     "#c4b8a8",
  border:    "rgba(44,36,32,0.07)",
  shadow:    "rgba(44,36,32,0.09)",
} as const;

const iconMap: Record<string, IconComponent> = {
  sun: Sun, wind: Wind, moon: Moon, heart: Heart,
  activity: Activity, users: Users,
  book: BookOpen, headphones: Headphones, file: FileText,
};

const VP   = { once: true, amount: 0.16 } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

function fadeUp(delay = 0) {
  return {
    initial:     { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0  },
    viewport:    VP,
    transition:  { duration: 0.75, ease: EASE, delay },
  } as const;
}

function slideLeft(delay = 0) {
  return {
    initial:     { opacity: 0, x: -28 },
    whileInView: { opacity: 1, x: 0   },
    viewport:    VP,
    transition:  { duration: 0.8, ease: EASE, delay },
  } as const;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="tracking-widest text-xs uppercase font-mono" style={{ color: P.mist }}>
      {children}
    </p>
  );
}

/* ─── Botanical SVG components ────────────────────────── */

function Flower({
  size = 80,
  color = P.earth,
  opacity = 0.12,
}: {
  size?: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={i} transform={`rotate(${i * 45} 50 50)`}>
          <ellipse cx="50" cy="16" rx="8.5" ry="26" fill={color} fillOpacity={opacity} />
        </g>
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={`i${i}`} transform={`rotate(${i * 45 + 22.5} 50 50)`}>
          <ellipse cx="50" cy="28" rx="5.5" ry="16" fill={color} fillOpacity={opacity * 1.5} />
        </g>
      ))}
      <circle cx="50" cy="50" r="9" fill={color} fillOpacity={opacity * 3} />
      <circle cx="50" cy="50" r="5" fill={color} fillOpacity={opacity * 4} />
    </svg>
  );
}

function Leaf({
  size = 36,
  color = P.leaf,
  opacity = 0.18,
  rotate = 0,
}: {
  size?: number;
  color?: string;
  opacity?: number;
  rotate?: number;
}) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.65)}
      viewBox="0 0 36 60"
      aria-hidden="true"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path
        d="M18 58 C18 58 2 42 2 24 C2 10 9 2 18 2 C27 2 34 10 34 24 C34 42 18 58 18 58Z"
        fill={color}
        fillOpacity={opacity}
      />
      <path
        d="M18 56 Q14 40 18 2"
        stroke={color}
        strokeOpacity={opacity * 1.6}
        strokeWidth="0.9"
        fill="none"
      />
      {[0.3, 0.52, 0.72].map((t, i) => (
        <path
          key={i}
          d={`M18 ${58 - t * 56} Q${i % 2 === 0 ? 10 : 26} ${58 - t * 56 - 8} ${i % 2 === 0 ? 6 : 30} ${58 - t * 56 - 4}`}
          stroke={color}
          strokeOpacity={opacity * 1.2}
          strokeWidth="0.7"
          fill="none"
        />
      ))}
    </svg>
  );
}

function VineDecor({
  width = 110,
  height = 420,
  color = P.leaf,
  opacity = 0.11,
  flip = false,
}: {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
  flip?: boolean;
}) {
  const cx = width / 2;
  const leafRows = [0.08, 0.22, 0.38, 0.54, 0.7, 0.85];

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <path
        d={`M${cx} 0
           C ${cx - 28} ${height * 0.18}, ${cx + 28} ${height * 0.34}, ${cx} ${height * 0.5}
           C ${cx - 28} ${height * 0.66}, ${cx + 28} ${height * 0.82}, ${cx} ${height}`}
        stroke={color}
        strokeOpacity={opacity}
        strokeWidth="1.4"
        fill="none"
      />
      {leafRows.map((t, i) => {
        const y = height * t;
        const side = i % 2 === 0 ? 1 : -1;
        const lx = cx + side * 30;
        const angle = side * 50;
        return (
          <g key={i} transform={`translate(${lx} ${y}) rotate(${angle})`}>
            <path
              d="M0 16 C-9 6 -9 -6 0 -16 C9 -6 9 6 0 16Z"
              fill={color}
              fillOpacity={opacity * 1.8}
            />
            <line
              x1="0" y1="14" x2="0" y2="-14"
              stroke={color}
              strokeOpacity={opacity * 2.2}
              strokeWidth="0.8"
            />
          </g>
        );
      })}
    </svg>
  );
}

function HorizontalVine({
  width = 500,
  height = 72,
  color = P.leaf,
  opacity = 0.09,
  flipV = false,
}: {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
  flipV?: boolean;
}) {
  const cy = height / 2;
  const leafPositions = [0.08, 0.22, 0.38, 0.55, 0.71, 0.87];
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      style={{ transform: flipV ? "scaleY(-1)" : undefined }}
    >
      <path
        d={`M 0 ${cy}
           C ${width * 0.18} ${cy - 22}, ${width * 0.36} ${cy + 22}, ${width * 0.5} ${cy}
           C ${width * 0.64} ${cy - 22}, ${width * 0.82} ${cy + 22}, ${width} ${cy}`}
        stroke={color}
        strokeOpacity={opacity}
        strokeWidth="1.3"
        fill="none"
      />
      {leafPositions.map((t, i) => {
        const x = width * t;
        const yOff = i % 2 === 0 ? -16 : 16;
        const angle = i % 2 === 0 ? -65 : 65;
        return (
          <g key={i} transform={`translate(${x} ${cy + yOff}) rotate(${angle})`}>
            <path
              d="M0 11 C-7 4 -7 -4 0 -11 C7 -4 7 4 0 11Z"
              fill={color}
              fillOpacity={opacity * 1.8}
            />
            <line x1="0" y1="9" x2="0" y2="-9" stroke={color} strokeOpacity={opacity * 2.2} strokeWidth="0.7" />
          </g>
        );
      })}
    </svg>
  );
}

function ScrollFlower({
  size = 120,
  color = P.earth,
  opacity = 0.09,
  speed = 420,
  reverse = false,
  style,
}: {
  size?: number;
  color?: string;
  opacity?: number;
  speed?: number;
  reverse?: boolean;
  style?: React.CSSProperties;
}) {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], reverse ? [0, -speed] : [0, speed]);

  return (
    <motion.div
      style={{ ...style, rotate, willChange: "transform" }}
      aria-hidden="true"
    >
      <Flower size={size} color={color} opacity={opacity} />
    </motion.div>
  );
}

function AmbientFlower({
  size = 48,
  color = P.leaf,
  opacity = 0.1,
  duration = 22,
  reverse = false,
  style,
}: {
  size?: number;
  color?: string;
  opacity?: number;
  duration?: number;
  reverse?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      style={{ ...style, willChange: "transform" }}
      aria-hidden="true"
    >
      <Flower size={size} color={color} opacity={opacity} />
    </motion.div>
  );
}

function ParallaxLeaf({
  size = 44,
  color = P.leaf,
  opacity = 0.14,
  rotate = 0,
  yRange = [-60, 0] as [number, number],
  style,
}: {
  size?: number;
  color?: string;
  opacity?: number;
  rotate?: number;
  yRange?: [number, number];
  style?: React.CSSProperties;
}) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <motion.div style={{ ...style, y }} aria-hidden="true">
      <Leaf size={size} color={color} opacity={opacity} rotate={rotate} />
    </motion.div>
  );
}

/* ─── Nav ─────────────────────────────────────────────── */

const NAV_LINKS = [
  { href: "#about",    label: "About"    },
  { href: "#practice", label: "Classes"  },
  { href: "#journey",  label: "Journey"  },
  { href: "#retreats", label: "Retreats" },
  { href: "#gallery",  label: "Gallery"  },
];

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{ backgroundColor: "rgba(250,248,244,0.9)", borderBottom: `1px solid ${P.border}` }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        <a href="#home" className="font-serif text-lg leading-none tracking-tight" style={{ color: P.charcoal }}>
          {data.name}
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors duration-200"
              style={{ color: P.fog }}
              onMouseEnter={(e) => (e.currentTarget.style.color = P.charcoal)}
              onMouseLeave={(e) => (e.currentTarget.style.color = P.fog)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex text-sm px-5 py-2.5 rounded-full font-medium transition-colors duration-200"
            style={{ backgroundColor: P.earth, color: "#fff" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = P.earthDark)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = P.earth)}
          >
            Work With Me
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2"
            style={{ color: P.fog }}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 pt-4 space-y-4" style={{ backgroundColor: P.bg, borderTop: `1px solid ${P.border}` }}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block text-sm py-1" style={{ color: P.fog }}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="inline-flex text-sm px-5 py-2.5 rounded-full font-medium" style={{ backgroundColor: P.earth, color: "#fff" }}>
            Work With Me
          </a>
        </div>
      )}
    </header>
  );
}

/* ─── Hero ────────────────────────────────────────────── */

function Hero() {
  const stats = [
    { value: `${data.students.toLocaleString()}+`, label: "Students"        },
    { value: `${data.yearsOfExperience}`,           label: "Years Teaching"  },
    { value: `${data.retreats.length}`,             label: "Retreats Hosted" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-16"
      style={{
        background: `
          radial-gradient(ellipse 70% 65% at 88% 18%, rgba(107,143,113,0.18) 0%, transparent 58%),
          radial-gradient(ellipse 55% 55% at 8%  85%, rgba(139,115,85,0.1)  0%, transparent 55%),
          ${P.bg}
        `,
      }}
    >
      {/* top-right large scroll flower */}
      <ScrollFlower
        size={280}
        opacity={0.055}
        speed={500}
        style={{ position: "absolute", top: "4%", right: "-5%", pointerEvents: "none" }}
      />
      {/* bottom-left reverse scroll flower */}
      <ScrollFlower
        size={110}
        color={P.leaf}
        opacity={0.09}
        speed={300}
        reverse
        style={{ position: "absolute", bottom: "10%", left: "2%", pointerEvents: "none" }}
      />
      {/* top-left vine */}
      <div aria-hidden="true" className="absolute top-16 left-0 pointer-events-none">
        <VineDecor height={380} opacity={0.08} />
      </div>
      {/* right side vine (flipped) */}
      <div aria-hidden="true" className="absolute top-20 right-0 pointer-events-none hidden lg:block">
        <VineDecor height={320} opacity={0.06} flip />
      </div>
      {/* center-top ambient flower */}
      <AmbientFlower
        size={90}
        opacity={0.04}
        duration={40}
        color={P.earth}
        style={{ position: "absolute", top: "8%", left: "42%", pointerEvents: "none" }}
      />
      {/* bottom-center ambient flower */}
      <AmbientFlower
        size={60}
        opacity={0.06}
        duration={28}
        color={P.leaf}
        reverse
        style={{ position: "absolute", bottom: "5%", left: "50%", transform: "translateX(-50%)", pointerEvents: "none" }}
      />
      {/* parallax leaves */}
      <ParallaxLeaf
        size={52}
        rotate={-30}
        yRange={[-80, 20]}
        style={{ position: "absolute", top: "22%", left: "8%", pointerEvents: "none" }}
      />
      <ParallaxLeaf
        size={38}
        rotate={40}
        color={P.earth}
        opacity={0.1}
        yRange={[-50, 10]}
        style={{ position: "absolute", top: "40%", right: "12%", pointerEvents: "none" }}
      />
      <ParallaxLeaf
        size={44}
        rotate={-60}
        yRange={[-100, 0]}
        style={{ position: "absolute", bottom: "24%", right: "6%", pointerEvents: "none" }}
      />
      <ParallaxLeaf
        size={30}
        rotate={120}
        color={P.earth}
        opacity={0.09}
        yRange={[-40, 20]}
        style={{ position: "absolute", top: "60%", left: "28%", pointerEvents: "none" }}
      />
      {/* tiny corner flowers */}
      <AmbientFlower
        size={32}
        opacity={0.1}
        duration={18}
        color={P.earth}
        reverse
        style={{ position: "absolute", top: "18%", right: "22%", pointerEvents: "none" }}
      />
      <AmbientFlower
        size={24}
        opacity={0.12}
        duration={14}
        color={P.leaf}
        style={{ position: "absolute", bottom: "28%", left: "18%", pointerEvents: "none" }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_460px] gap-12 lg:gap-16 items-center">

          <div className="order-2 lg:order-1">
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-1.5 mb-7 px-3.5 py-1.5 rounded-full"
              style={{ backgroundColor: P.sand, color: P.fog }}
            >
              <MapPin size={11} style={{ color: P.earth }} />
              <span className="font-mono text-[10px] tracking-widest uppercase">{data.location}</span>
            </motion.div>

            <motion.div {...fadeUp(0.07)}>
              <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: P.mist }}>
                {data.title}
              </p>
              <h1
                className="font-serif tracking-tight leading-[1.04]"
                style={{ fontSize: "clamp(3rem, 6vw, 5.25rem)", color: P.charcoal }}
              >
                Hi, I&rsquo;m<br />{data.name.split(" ")[0]}.
              </h1>
            </motion.div>

            <motion.p {...fadeUp(0.14)} className="text-base leading-relaxed max-w-md mt-6" style={{ color: P.fog }}>
              {data.philosophy}
            </motion.p>

            <motion.div {...fadeUp(0.21)} className="flex flex-wrap gap-3 mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium px-7 py-3.5 rounded-full transition-colors duration-200"
                style={{ backgroundColor: P.earth, color: "#fff" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = P.earthDark)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = P.earth)}
              >
                Work With Me
              </a>
              <a
                href="#practice"
                className="inline-flex items-center gap-2 text-sm font-medium px-7 py-3.5 rounded-full transition-all duration-200"
                style={{ border: `1.5px solid ${P.taupe}`, color: P.charcoal }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = P.earth; e.currentTarget.style.color = P.earth; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = P.taupe; e.currentTarget.style.color = P.charcoal; }}
              >
                My Classes <ArrowRight size={14} />
              </a>
            </motion.div>

            <motion.div
              {...fadeUp(0.28)}
              className="flex gap-8 mt-10 pt-8"
              style={{ borderTop: `1px solid ${P.border}` }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-serif leading-none tabular-nums" style={{ fontSize: "2rem", color: P.charcoal }}>{s.value}</p>
                  <p className="font-mono text-[10px] tracking-widest uppercase mt-1.5" style={{ color: P.mist }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.15 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div aria-hidden="true" className="absolute -inset-6 pointer-events-none rounded-[3rem]" style={{ backgroundColor: "rgba(107,143,113,0.1)" }} />

              <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: "clamp(240px, 34vw, 420px)",
                    aspectRatio: "4 / 5",
                    borderRadius: "2.5rem",
                    boxShadow: `0 48px 100px ${P.shadow}, 0 8px 24px ${P.shadow}`,
                  }}
                >
                  <img
                    src={data.profileImage}
                    alt={`${data.name} — ${data.title}`}
                    className="w-full h-full object-cover block"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(to bottom, transparent 55%, rgba(44,36,32,0.2) 100%)" }}
                  />
                </div>
                <div aria-hidden="true" className="absolute -inset-3 pointer-events-none rounded-[3rem]" style={{ border: `1px solid ${P.taupe}`, opacity: 0.4 }} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10"
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: P.mist }}>Scroll</span>
        <div className="w-px h-10 animate-[scrollBounce_1.6s_ease-in-out_infinite]" style={{ backgroundColor: P.taupe }} />
      </motion.div>
    </section>
  );
}

/* ─── Marquee ─────────────────────────────────────────── */

function MarqueeStrip() {
  const items = ["Hatha Yoga", "Vinyasa Flow", "Yin Yoga", "Breathwork", "Meditation", "Yoga Nidra", "Pranayama", "Private Sessions"];
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden py-4 relative" style={{ backgroundColor: P.sand, borderTop: `1px solid ${P.border}`, borderBottom: `1px solid ${P.border}` }}>
      <AmbientFlower size={22} opacity={0.18} duration={12} style={{ position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
      <AmbientFlower size={22} opacity={0.18} duration={15} reverse style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
      <AmbientFlower size={16} opacity={0.14} duration={10} color={P.earth} style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
      <div className="flex whitespace-nowrap" style={{ animation: "infinite-scroll 26s linear infinite" }}>
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-6 font-mono text-[10px] tracking-[0.22em] uppercase" style={{ color: P.fog }}>
            {item}
            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: P.earth, opacity: 0.45 }} />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── About ───────────────────────────────────────────── */

function About() {
  const paragraphs = data.bio.split("\n\n");

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: P.bg }}>
      {/* top-right vine */}
      <div aria-hidden="true" className="absolute top-0 right-0 pointer-events-none" style={{ opacity: 0.7 }}>
        <VineDecor height={500} opacity={0.09} flip />
      </div>
      {/* top-left vine */}
      <div aria-hidden="true" className="absolute top-0 left-0 pointer-events-none hidden lg:block">
        <VineDecor height={400} opacity={0.07} />
      </div>
      {/* bottom horizontal vine */}
      <div aria-hidden="true" className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none">
        <HorizontalVine width={600} opacity={0.08} flipV />
      </div>
      {/* large ambient bg flower bottom-left */}
      <AmbientFlower
        size={180}
        opacity={0.035}
        duration={38}
        color={P.leaf}
        style={{ position: "absolute", bottom: "4%", left: "-4%", pointerEvents: "none" }}
      />
      {/* center-top faint ambient */}
      <AmbientFlower
        size={100}
        opacity={0.04}
        duration={44}
        color={P.earth}
        reverse
        style={{ position: "absolute", top: "5%", left: "45%", pointerEvents: "none" }}
      />
      {/* mid-right scroll flower */}
      <ScrollFlower
        size={80}
        opacity={0.07}
        speed={200}
        color={P.earth}
        style={{ position: "absolute", top: "50%", right: "3%", transform: "translateY(-50%)", pointerEvents: "none" }}
      />
      {/* bottom-right ambient */}
      <AmbientFlower
        size={48}
        opacity={0.08}
        duration={20}
        color={P.leaf}
        reverse
        style={{ position: "absolute", bottom: "10%", right: "8%", pointerEvents: "none" }}
      />
      {/* parallax leaf center */}
      <ParallaxLeaf
        size={42}
        rotate={70}
        color={P.earth}
        opacity={0.09}
        yRange={[-50, 20]}
        style={{ position: "absolute", top: "38%", right: "20%", pointerEvents: "none" }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-20 items-start">

          <motion.div {...slideLeft()} className="relative lg:sticky lg:top-24">
            <div className="overflow-hidden" style={{ borderRadius: "2rem", aspectRatio: "3 / 4" }}>
              <motion.div
                initial={{ clipPath: "inset(0 0 100% 0)" }}
                whileInView={{ clipPath: "inset(0 0 0% 0)" }}
                viewport={VP}
                transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
                className="w-full h-full"
              >
                <motion.img
                  initial={{ scale: 1.12 }}
                  whileInView={{ scale: 1 }}
                  viewport={VP}
                  transition={{ duration: 1.5, ease: EASE }}
                  src={data.aboutImage}
                  alt={`${data.name} teaching`}
                  className="w-full h-full object-cover block"
                />
              </motion.div>
            </div>

            <motion.div
              {...fadeUp(0.5)}
              className="absolute -bottom-5 -right-3 sm:-right-7 py-4 px-6 rounded-2xl"
              style={{ backgroundColor: P.earth, color: "#fff", boxShadow: `0 16px 48px ${P.shadow}` }}
            >
              <p className="font-serif text-3xl leading-none">{data.yearsOfExperience}</p>
              <p className="font-mono text-[10px] tracking-widest uppercase mt-1" style={{ opacity: 0.75 }}>Years teaching</p>
            </motion.div>

            {/* flower top-left of image */}
            <div aria-hidden="true" className="absolute -top-5 -left-5 pointer-events-none">
              <ScrollFlower size={72} color={P.leaf} opacity={0.13} speed={280} />
            </div>
            {/* flower bottom-left of image */}
            <div aria-hidden="true" className="absolute -bottom-4 -left-4 pointer-events-none">
              <AmbientFlower size={36} color={P.earth} opacity={0.12} duration={20} reverse />
            </div>
          </motion.div>

          <div className="pt-2 lg:pt-10">
            <motion.div {...fadeUp()}>
              <SectionLabel>About me</SectionLabel>
              <h2 className="font-serif tracking-tight leading-tight mt-3 mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: P.charcoal }}>
                A bit about<br />who I am
              </h2>
            </motion.div>

            <motion.div {...fadeUp(0.1)} className="space-y-5">
              {paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed" style={{ color: P.fog }}>{p}</p>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.18)} className="mt-9">
              <SectionLabel>Certifications</SectionLabel>
              <ul className="mt-4 space-y-2.5">
                {data.certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3 text-sm" style={{ color: P.fog }}>
                    <span className="mt-[0.4rem] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: P.earth }} />
                    {cert}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeUp(0.26)} className="mt-8">
              <SectionLabel>Specialties</SectionLabel>
              <div className="mt-3 flex flex-wrap gap-2">
                {data.specialties.map((spec) => (
                  <span key={spec} className="px-4 py-1.5 rounded-full text-xs font-mono tracking-wide" style={{ border: `1px solid ${P.taupe}`, color: P.fog }}>
                    {spec}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Practice Areas ──────────────────────────────────── */

function PracticeAreas() {
  return (
    <section id="practice" className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: P.surface }}>
      {/* left vine */}
      <div aria-hidden="true" className="absolute top-0 left-0 pointer-events-none">
        <VineDecor height={480} opacity={0.08} />
      </div>
      {/* right vine (flipped) */}
      <div aria-hidden="true" className="absolute top-0 right-0 pointer-events-none">
        <VineDecor height={480} opacity={0.07} flip />
      </div>
      {/* top horizontal vine */}
      <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none">
        <HorizontalVine width={700} opacity={0.07} />
      </div>
      {/* bottom horizontal vine */}
      <div aria-hidden="true" className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none">
        <HorizontalVine width={700} opacity={0.07} flipV />
      </div>
      {/* top-center ambient flower */}
      <AmbientFlower
        size={70}
        opacity={0.05}
        duration={36}
        color={P.earth}
        style={{ position: "absolute", top: "3%", left: "48%", pointerEvents: "none" }}
      />
      {/* bottom-right reverse scroll flower */}
      <ScrollFlower
        size={150}
        opacity={0.06}
        speed={360}
        reverse
        style={{ position: "absolute", bottom: "6%", right: "1%", pointerEvents: "none" }}
      />
      {/* bottom-left scroll flower */}
      <ScrollFlower
        size={90}
        opacity={0.07}
        speed={260}
        color={P.leaf}
        style={{ position: "absolute", bottom: "8%", left: "4%", pointerEvents: "none" }}
      />
      {/* center ambient flower (very faint) */}
      <AmbientFlower
        size={200}
        opacity={0.025}
        duration={60}
        color={P.leaf}
        reverse
        style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }}
      />
      {/* top-right small ambient */}
      <AmbientFlower
        size={38}
        opacity={0.1}
        duration={16}
        color={P.earth}
        reverse
        style={{ position: "absolute", top: "8%", right: "8%", pointerEvents: "none" }}
      />
      {/* parallax leaves */}
      <ParallaxLeaf
        size={40}
        rotate={-45}
        yRange={[-60, 10]}
        style={{ position: "absolute", top: "20%", left: "15%", pointerEvents: "none" }}
      />
      <ParallaxLeaf
        size={34}
        rotate={80}
        color={P.earth}
        opacity={0.09}
        yRange={[-40, 15]}
        style={{ position: "absolute", bottom: "25%", right: "14%", pointerEvents: "none" }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <motion.div {...fadeUp()}>
            <SectionLabel>What I teach</SectionLabel>
            <h2 className="font-serif tracking-tight leading-tight mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: P.charcoal }}>
              My classes &amp;<br />offerings
            </h2>
          </motion.div>
          <motion.p {...fadeUp(0.1)} className="text-sm max-w-xs lg:text-right" style={{ color: P.fog }}>
            Every class is rooted in presence, breath, and the belief that movement is medicine.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.practiceAreas.map((area, i) => {
            const Icon = iconMap[area.icon];
            return (
              <motion.div
                key={area.title}
                {...fadeUp(i * 0.07)}
                whileHover={{ y: -4, boxShadow: `0 20px 50px ${P.shadow}` }}
                className="rounded-3xl p-7 cursor-default transition-shadow duration-300"
                style={{ backgroundColor: P.bg, boxShadow: `0 4px 24px ${P.shadow}` }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "rgba(139,115,85,0.1)" }}>
                  {Icon && <Icon size={18} style={{ color: P.earth }} />}
                </div>
                <h3 className="font-serif text-xl mb-2" style={{ color: P.charcoal }}>{area.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: P.fog }}>{area.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div {...fadeUp(0.32)} className="mt-10 flex justify-center">
          <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-medium group transition-colors duration-200" style={{ color: P.earth }}>
            Interested in a private session?
            <ChevronRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Journey ─────────────────────────────────────────── */

function Journey() {
  return (
    <section id="journey" className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: P.bg }}>
      {/* top-right ambient */}
      <div aria-hidden="true" className="absolute top-10 right-8 pointer-events-none hidden lg:block">
        <AmbientFlower size={56} opacity={0.08} duration={28} reverse />
      </div>
      {/* left vine */}
      <div aria-hidden="true" className="absolute top-0 left-0 pointer-events-none hidden lg:block">
        <VineDecor height={520} opacity={0.07} />
      </div>
      {/* right vine */}
      <div aria-hidden="true" className="absolute top-0 right-0 pointer-events-none hidden lg:block">
        <VineDecor height={520} opacity={0.06} flip />
      </div>
      {/* top horizontal vine */}
      <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none">
        <HorizontalVine width={500} opacity={0.07} />
      </div>
      {/* bottom-center scroll flower */}
      <ScrollFlower
        size={120}
        opacity={0.05}
        speed={280}
        color={P.leaf}
        reverse
        style={{ position: "absolute", bottom: "3%", left: "50%", transform: "translateX(-50%)", pointerEvents: "none" }}
      />
      {/* bottom-left ambient */}
      <AmbientFlower
        size={64}
        opacity={0.07}
        duration={30}
        color={P.earth}
        style={{ position: "absolute", bottom: "8%", left: "5%", pointerEvents: "none" }}
      />
      {/* top-left small ambient */}
      <AmbientFlower
        size={34}
        opacity={0.1}
        duration={18}
        color={P.leaf}
        reverse
        style={{ position: "absolute", top: "10%", left: "12%", pointerEvents: "none" }}
      />
      {/* center-right parallax leaf */}
      <ParallaxLeaf
        size={46}
        rotate={-25}
        color={P.earth}
        opacity={0.08}
        yRange={[-70, 20]}
        style={{ position: "absolute", top: "35%", right: "6%", pointerEvents: "none" }}
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp()} className="mb-14">
          <SectionLabel>Journey</SectionLabel>
          <h2 className="font-serif tracking-tight leading-tight mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: P.charcoal }}>
            My story so far
          </h2>
        </motion.div>

        <div className="divide-y" style={{ borderColor: P.border }}>
          {data.experience.map((item, i) => (
            <motion.div
              key={item.year}
              {...fadeUp(i * 0.05)}
              className="grid grid-cols-[72px_1fr] sm:grid-cols-[110px_1fr] gap-6 sm:gap-10 py-8 group"
            >
              <div className="pt-0.5 flex flex-col items-start gap-2">
                <span
                  className="font-serif tabular-nums"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: P.taupe, lineHeight: 1 }}
                >
                  {item.year}
                </span>
                <AmbientFlower size={18} opacity={0.22} duration={18 + i * 3} color={P.earth} />
              </div>
              <div>
                <h3 className="font-serif text-lg leading-snug mb-2" style={{ color: P.charcoal }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: P.fog }}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Retreats ────────────────────────────────────────── */

function Retreats() {
  return (
    <section id="retreats" className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: P.surface }}>
      {/* top-right vine */}
      <div aria-hidden="true" className="absolute top-0 right-0 pointer-events-none">
        <VineDecor height={400} opacity={0.08} flip />
      </div>
      {/* top-left vine */}
      <div aria-hidden="true" className="absolute top-0 left-0 pointer-events-none">
        <VineDecor height={360} opacity={0.07} />
      </div>
      {/* bottom horizontal vine */}
      <div aria-hidden="true" className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none">
        <HorizontalVine width={650} opacity={0.08} flipV />
      </div>
      {/* center-top faint ambient */}
      <AmbientFlower
        size={110}
        opacity={0.035}
        duration={50}
        color={P.earth}
        style={{ position: "absolute", top: "4%", left: "50%", transform: "translateX(-50%)", pointerEvents: "none" }}
      />
      {/* bottom-left scroll flower */}
      <ScrollFlower
        size={100}
        opacity={0.06}
        speed={240}
        color={P.leaf}
        style={{ position: "absolute", bottom: "5%", left: "3%", pointerEvents: "none" }}
      />
      {/* bottom-right ambient */}
      <AmbientFlower
        size={60}
        opacity={0.07}
        duration={24}
        color={P.earth}
        reverse
        style={{ position: "absolute", bottom: "10%", right: "4%", pointerEvents: "none" }}
      />
      {/* top-center parallax leaf */}
      <ParallaxLeaf
        size={44}
        rotate={-10}
        color={P.leaf}
        opacity={0.1}
        yRange={[-60, 10]}
        style={{ position: "absolute", top: "15%", left: "50%", pointerEvents: "none" }}
      />
      {/* mid-left parallax leaf */}
      <ParallaxLeaf
        size={34}
        rotate={130}
        color={P.earth}
        opacity={0.08}
        yRange={[-40, 20]}
        style={{ position: "absolute", top: "45%", left: "8%", pointerEvents: "none" }}
      />
      {/* top-right ambient small */}
      <AmbientFlower
        size={30}
        opacity={0.11}
        duration={15}
        color={P.leaf}
        style={{ position: "absolute", top: "12%", right: "10%", pointerEvents: "none" }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div {...fadeUp()} className="mb-14">
          <SectionLabel>Retreats &amp; Workshops</SectionLabel>
          <h2 className="font-serif tracking-tight leading-tight mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: P.charcoal }}>
            Retreats I host
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.retreats.map((retreat, i) => (
            <motion.div
              key={retreat.name}
              {...fadeUp(i * 0.08)}
              whileHover={{ y: -4, boxShadow: `0 20px 50px ${P.shadow}` }}
              className="rounded-3xl p-7 flex flex-col transition-shadow duration-300"
              style={{ backgroundColor: P.bg, boxShadow: `0 4px 24px ${P.shadow}` }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full" style={{ backgroundColor: P.sand, color: P.fog }}>
                  <MapPin size={10} style={{ color: P.earth }} />{retreat.location}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full" style={{ backgroundColor: P.sand, color: P.fog }}>
                  <Clock size={10} style={{ color: P.earth }} />{retreat.duration}
                </span>
              </div>
              <h3 className="font-serif text-xl mb-3" style={{ color: P.charcoal }}>{retreat.name}</h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: P.fog }}>{retreat.overview}</p>
              <div className="mt-5 pt-5" style={{ borderTop: `1px solid ${P.border}` }}>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-medium group" style={{ color: P.earth }}>
                  Ask me about this retreat
                  <ChevronRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ────────────────────────────────────── */

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: P.sand }}>
      {/* center bg scroll flower */}
      <ScrollFlower
        size={320}
        opacity={0.038}
        speed={200}
        color={P.earth}
        style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }}
      />
      {/* bottom-left vine */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 pointer-events-none">
        <VineDecor height={360} opacity={0.07} />
      </div>
      {/* top-right vine */}
      <div aria-hidden="true" className="absolute top-0 right-0 pointer-events-none">
        <VineDecor height={360} opacity={0.07} flip />
      </div>
      {/* top horizontal vine */}
      <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none">
        <HorizontalVine width={600} opacity={0.07} />
      </div>
      {/* top-left ambient */}
      <AmbientFlower
        size={72}
        opacity={0.07}
        duration={34}
        color={P.leaf}
        style={{ position: "absolute", top: "5%", left: "4%", pointerEvents: "none" }}
      />
      {/* bottom-right scroll flower */}
      <ScrollFlower
        size={130}
        opacity={0.055}
        speed={180}
        reverse
        color={P.leaf}
        style={{ position: "absolute", bottom: "3%", right: "2%", pointerEvents: "none" }}
      />
      {/* top-right small ambient */}
      <AmbientFlower
        size={36}
        opacity={0.1}
        duration={16}
        color={P.earth}
        reverse
        style={{ position: "absolute", top: "8%", right: "12%", pointerEvents: "none" }}
      />
      {/* bottom-center ambient */}
      <AmbientFlower
        size={50}
        opacity={0.07}
        duration={26}
        color={P.earth}
        style={{ position: "absolute", bottom: "6%", left: "48%", pointerEvents: "none" }}
      />
      {/* parallax leaf top-right */}
      <ParallaxLeaf
        size={46}
        rotate={55}
        color={P.leaf}
        opacity={0.1}
        yRange={[-50, 15]}
        style={{ position: "absolute", top: "20%", right: "5%", pointerEvents: "none" }}
      />
      {/* parallax leaf bottom-left */}
      <ParallaxLeaf
        size={38}
        rotate={-120}
        color={P.earth}
        opacity={0.09}
        yRange={[-30, 20]}
        style={{ position: "absolute", bottom: "20%", left: "7%", pointerEvents: "none" }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div {...fadeUp()} className="mb-14">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="font-serif tracking-tight leading-tight mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: P.charcoal }}>
            What students say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              {...fadeUp(i * 0.07)}
              className="rounded-3xl p-8 flex flex-col"
              style={{ backgroundColor: P.bg, boxShadow: `0 4px 20px ${P.shadow}` }}
            >
              <span className="font-serif text-5xl leading-none select-none mb-3" style={{ color: "rgba(139,115,85,0.2)" }} aria-hidden="true">
                &ldquo;
              </span>
              <p className="font-serif italic leading-relaxed flex-1 -mt-2 text-[1.0625rem]" style={{ color: P.charcoal }}>
                {t.quote}
              </p>
              <div className="mt-6 pt-5" style={{ borderTop: `1px solid ${P.border}` }}>
                <p className="text-sm font-medium" style={{ color: P.charcoal }}>{t.name}</p>
                <p className="font-mono text-xs tracking-wide mt-0.5" style={{ color: P.mist }}>{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Gallery ─────────────────────────────────────────── */

function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: P.bg }}>
      {/* top-right scroll flower */}
      <div aria-hidden="true" className="absolute top-10 right-10 pointer-events-none hidden lg:block">
        <ScrollFlower size={100} opacity={0.08} speed={260} color={P.leaf} />
      </div>
      {/* left vine */}
      <div aria-hidden="true" className="absolute top-0 left-0 pointer-events-none hidden lg:block">
        <VineDecor height={500} opacity={0.07} />
      </div>
      {/* right vine */}
      <div aria-hidden="true" className="absolute top-0 right-0 pointer-events-none hidden lg:block">
        <VineDecor height={500} opacity={0.06} flip />
      </div>
      {/* top horizontal vine */}
      <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none">
        <HorizontalVine width={550} opacity={0.07} />
      </div>
      {/* bottom horizontal vine */}
      <div aria-hidden="true" className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none">
        <HorizontalVine width={550} opacity={0.07} flipV />
      </div>
      {/* top-left ambient */}
      <AmbientFlower
        size={58}
        opacity={0.07}
        duration={26}
        color={P.earth}
        style={{ position: "absolute", top: "6%", left: "6%", pointerEvents: "none" }}
      />
      {/* bottom-left scroll flower */}
      <ScrollFlower
        size={110}
        opacity={0.06}
        speed={220}
        color={P.earth}
        reverse
        style={{ position: "absolute", bottom: "4%", left: "3%", pointerEvents: "none" }}
      />
      {/* bottom-center ambient */}
      <AmbientFlower
        size={66}
        opacity={0.06}
        duration={32}
        color={P.leaf}
        style={{ position: "absolute", bottom: "5%", left: "48%", pointerEvents: "none" }}
      />
      {/* center-right faint scroll flower */}
      <ScrollFlower
        size={80}
        opacity={0.05}
        speed={180}
        color={P.leaf}
        style={{ position: "absolute", top: "45%", right: "2%", pointerEvents: "none" }}
      />
      {/* small parallax leaves */}
      <ParallaxLeaf
        size={36}
        rotate={-55}
        color={P.leaf}
        opacity={0.1}
        yRange={[-55, 15]}
        style={{ position: "absolute", top: "25%", left: "4%", pointerEvents: "none" }}
      />
      <ParallaxLeaf
        size={30}
        rotate={100}
        color={P.earth}
        opacity={0.09}
        yRange={[-40, 10]}
        style={{ position: "absolute", bottom: "30%", right: "5%", pointerEvents: "none" }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div {...fadeUp()} className="mb-14">
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="font-serif tracking-tight leading-tight mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: P.charcoal }}>
            Glimpses of my world
          </h2>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {data.gallery.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.75, ease: EASE, delay: i * 0.07 }}
              className="break-inside-avoid mb-4"
            >
              <div className="overflow-hidden" style={{ borderRadius: "1.25rem" }}>
                <motion.img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full object-cover block"
                  loading="lazy"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.6, ease: EASE }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Resources ───────────────────────────────────────── */

function Resources() {
  return (
    <section id="resources" className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: P.surface }}>
      {/* top-left vine */}
      <div aria-hidden="true" className="absolute top-0 left-0 pointer-events-none">
        <VineDecor height={340} opacity={0.08} />
      </div>
      {/* top-right vine */}
      <div aria-hidden="true" className="absolute top-0 right-0 pointer-events-none">
        <VineDecor height={340} opacity={0.07} flip />
      </div>
      {/* top horizontal vine */}
      <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none">
        <HorizontalVine width={580} opacity={0.08} />
      </div>
      {/* bottom-right ambient */}
      <AmbientFlower
        size={80}
        opacity={0.06}
        duration={30}
        reverse
        style={{ position: "absolute", bottom: "12%", right: "5%", pointerEvents: "none" }}
      />
      {/* bottom-center scroll flower */}
      <ScrollFlower
        size={100}
        opacity={0.055}
        speed={220}
        color={P.leaf}
        style={{ position: "absolute", bottom: "3%", left: "50%", transform: "translateX(-50%)", pointerEvents: "none" }}
      />
      {/* top-right small ambient */}
      <AmbientFlower
        size={40}
        opacity={0.09}
        duration={18}
        color={P.earth}
        style={{ position: "absolute", top: "8%", right: "8%", pointerEvents: "none" }}
      />
      {/* top-center large faint ambient */}
      <AmbientFlower
        size={130}
        opacity={0.03}
        duration={55}
        color={P.earth}
        reverse
        style={{ position: "absolute", top: "2%", left: "45%", pointerEvents: "none" }}
      />
      {/* bottom-left ambient */}
      <AmbientFlower
        size={52}
        opacity={0.07}
        duration={22}
        color={P.leaf}
        style={{ position: "absolute", bottom: "10%", left: "6%", pointerEvents: "none" }}
      />
      {/* parallax leaves */}
      <ParallaxLeaf
        size={42}
        rotate={-35}
        color={P.leaf}
        opacity={0.1}
        yRange={[-60, 15]}
        style={{ position: "absolute", top: "22%", left: "8%", pointerEvents: "none" }}
      />
      <ParallaxLeaf
        size={36}
        rotate={90}
        color={P.earth}
        opacity={0.09}
        yRange={[-45, 10]}
        style={{ position: "absolute", bottom: "28%", right: "10%", pointerEvents: "none" }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div {...fadeUp()} className="mb-14">
          <SectionLabel>Resources</SectionLabel>
          <h2 className="font-serif tracking-tight leading-tight mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: P.charcoal }}>
            Things I share
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {data.resources.map((resource, i) => {
            const Icon = iconMap[resource.icon];
            return (
              <motion.div
                key={resource.title}
                {...fadeUp(i * 0.09)}
                className="rounded-3xl p-7"
                style={{ backgroundColor: P.bg, boxShadow: `0 4px 20px ${P.shadow}` }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "rgba(139,115,85,0.1)" }}>
                  {Icon && <Icon size={18} style={{ color: P.earth }} />}
                </div>
                <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: P.mist }}>{resource.type}</p>
                <h3 className="font-serif text-lg mb-2" style={{ color: P.charcoal }}>{resource.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: P.fog }}>{resource.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─────────────────────────────────────────── */

function Contact() {
  const whatsappNumber = data.contact.whatsapp.replace(/\D/g, "");

  return (
    <section
      id="contact"
      className="py-28 lg:py-36 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 65% at 25% 0%,   rgba(107,143,113,0.14) 0%, transparent 60%),
          radial-gradient(ellipse 65% 60% at 80% 100%, rgba(139,115,85,0.1)   0%, transparent 60%),
          ${P.bg}
        `,
      }}
    >
      {/* large scroll flowers corners */}
      <ScrollFlower
        size={240}
        opacity={0.055}
        speed={300}
        color={P.leaf}
        style={{ position: "absolute", top: "-6%", left: "-4%", pointerEvents: "none" }}
      />
      <ScrollFlower
        size={200}
        opacity={0.05}
        speed={250}
        reverse
        style={{ position: "absolute", bottom: "-6%", right: "-4%", pointerEvents: "none" }}
      />
      {/* top-right scroll flower */}
      <ScrollFlower
        size={120}
        opacity={0.06}
        speed={200}
        color={P.earth}
        reverse
        style={{ position: "absolute", top: "5%", right: "5%", pointerEvents: "none" }}
      />
      {/* bottom-left scroll flower */}
      <ScrollFlower
        size={100}
        opacity={0.065}
        speed={180}
        color={P.leaf}
        style={{ position: "absolute", bottom: "8%", left: "5%", pointerEvents: "none" }}
      />
      {/* left vine */}
      <div aria-hidden="true" className="absolute top-0 left-0 pointer-events-none hidden lg:block">
        <VineDecor height={460} opacity={0.07} />
      </div>
      {/* right vine */}
      <div aria-hidden="true" className="absolute top-0 right-0 pointer-events-none hidden lg:block">
        <VineDecor height={460} opacity={0.07} flip />
      </div>
      {/* top horizontal vine */}
      <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none">
        <HorizontalVine width={480} opacity={0.08} />
      </div>
      {/* bottom horizontal vine */}
      <div aria-hidden="true" className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none">
        <HorizontalVine width={480} opacity={0.08} flipV />
      </div>
      {/* center-top faint ambient */}
      <AmbientFlower
        size={80}
        opacity={0.04}
        duration={40}
        color={P.earth}
        style={{ position: "absolute", top: "6%", left: "50%", transform: "translateX(-50%)", pointerEvents: "none" }}
      />
      {/* parallax leaves */}
      <ParallaxLeaf size={48} rotate={-45} yRange={[-40, 10]} style={{ position: "absolute", top: "15%", right: "8%", pointerEvents: "none" }} />
      <ParallaxLeaf size={36} rotate={60} color={P.earth} opacity={0.1} yRange={[-30, 10]} style={{ position: "absolute", bottom: "20%", left: "6%", pointerEvents: "none" }} />
      <ParallaxLeaf size={30} rotate={-100} color={P.leaf} opacity={0.1} yRange={[-50, 5]} style={{ position: "absolute", top: "40%", left: "12%", pointerEvents: "none" }} />
      <ParallaxLeaf size={28} rotate={80} color={P.earth} opacity={0.08} yRange={[-35, 15]} style={{ position: "absolute", bottom: "35%", right: "10%", pointerEvents: "none" }} />

      <div className="max-w-xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <motion.div {...fadeUp()}>
          <SectionLabel>Get in touch</SectionLabel>
          <h2
            className="font-serif tracking-tight leading-tight mt-3 mb-5"
            style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", color: P.charcoal }}
          >
            Let&rsquo;s connect
          </h2>
        </motion.div>

        <motion.p {...fadeUp(0.1)} className="leading-relaxed mb-10" style={{ color: P.fog }}>
          {data.contact.tagline}
        </motion.p>

        <motion.div {...fadeUp(0.18)} className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`mailto:${data.contact.email}`}
            className="inline-flex items-center gap-2.5 text-sm font-medium px-7 py-3.5 rounded-full w-full sm:w-auto justify-center transition-colors duration-200"
            style={{ backgroundColor: P.earth, color: "#fff" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = P.earthDark)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = P.earth)}
          >
            <Mail size={15} /> Send me an email
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="inline-flex items-center gap-2.5 text-sm font-medium px-7 py-3.5 rounded-full w-full sm:w-auto justify-center transition-all duration-200"
            style={{ border: `1.5px solid ${P.taupe}`, color: P.charcoal }}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = P.earth; e.currentTarget.style.color = P.earth; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = P.taupe; e.currentTarget.style.color = P.charcoal; }}
          >
            <MessageCircle size={15} /> Message on WhatsApp
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.26)} className="flex items-center justify-center gap-6 mt-10">
          {[
            { href: data.socialLinks.instagram, label: "Instagram",  Icon: Camera },
            { href: data.socialLinks.twitter,   label: "X / Twitter",Icon: XIcon  },
            { href: data.socialLinks.youtube,   label: "YouTube",    Icon: Play   },
          ].map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-colors duration-200"
              style={{ color: P.mist }}
              onMouseEnter={(e) => (e.currentTarget.style.color = P.earth)}
              onMouseLeave={(e) => (e.currentTarget.style.color = P.mist)}
            >
              <Icon size={19} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="py-8 relative overflow-hidden" style={{ borderTop: `1px solid ${P.border}`, backgroundColor: P.bg }}>
      {/* footer vine left */}
      <div aria-hidden="true" className="absolute top-0 left-0 pointer-events-none hidden lg:block" style={{ opacity: 0.6 }}>
        <VineDecor height={80} width={70} opacity={0.1} />
      </div>
      {/* footer vine right */}
      <div aria-hidden="true" className="absolute top-0 right-0 pointer-events-none hidden lg:block" style={{ opacity: 0.6 }}>
        <VineDecor height={80} width={70} opacity={0.1} flip />
      </div>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
        <p className="font-serif text-sm" style={{ color: P.charcoal }}>{data.name}</p>
        <div className="flex items-center gap-2">
          <AmbientFlower size={14} opacity={0.3} duration={16} color={P.earth} />
          <p className="font-mono text-xs" style={{ color: P.mist }}>{data.title} &middot; {data.location}</p>
          <AmbientFlower size={14} opacity={0.3} duration={20} color={P.leaf} reverse />
        </div>
        <p className="font-mono text-xs" style={{ color: P.mist }}>&copy; {new Date().getFullYear()} &middot; {data.contact.email}</p>
      </div>
    </footer>
  );
}

/* ─── Root ────────────────────────────────────────────── */

export default function Serenity() {
  return (
    <div style={{ backgroundColor: P.bg, color: P.charcoal }}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:text-white"
        style={{ backgroundColor: P.earth }}
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <MarqueeStrip />
        <About />
        <PracticeAreas />
        <Journey />
        <Retreats />
        <Testimonials />
        <Gallery />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
