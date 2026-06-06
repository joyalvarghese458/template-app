"use client";

import { useEffect, useRef, useState } from "react";

const ROLES = ["Creative", "Fullstack", "Founder", "Scholar"];
const HLS_SRC =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

interface HeroProps {
  ready: boolean;
}

export default function Hero({ ready }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // HLS video — native support only (Safari/iOS); other browsers see dark bg
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_SRC;
    }
  }, []);

  // Role cycling
  useEffect(() => {
    if (!ready) return;
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % ROLES.length),
      2000
    );
    return () => clearInterval(id);
  }, [ready]);

  // GSAP entrance — starts only after loading screen exits
  useEffect(() => {
    if (!ready) return;
    let ctx: { revert: () => void } | null = null;
    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ ease: "power3.out" });
        tl.fromTo(
          ".dp-name-reveal",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
        ).fromTo(
          ".dp-blur-in",
          { opacity: 0, filter: "blur(10px)", y: 20 },
          { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
          "-=0.8"
        );
      }, sectionRef);
    })();
    return () => ctx?.revert();
  }, [ready]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
          aria-hidden="true"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
        />
        {/* Bottom fade to bg */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            background:
              "linear-gradient(to top, hsl(0 0% 4%), transparent)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Eyebrow */}
        <p
          className="dp-blur-in text-xs uppercase tracking-[0.3em] mb-8"
          style={{ color: "hsl(0 0% 53%)", opacity: 0 }}
        >
          COLLECTION &#8217;26
        </p>

        {/* Name */}
        <h1
          className="dp-name-reveal text-6xl md:text-8xl lg:text-9xl italic leading-[0.9] tracking-tight mb-6"
          style={{
            fontFamily:
              "var(--dp-font-display, var(--font-serif, serif))",
            color: "hsl(0 0% 96%)",
            opacity: 0,
          }}
        >
          Michael Smith
        </h1>

        {/* Role line */}
        <p
          className="dp-blur-in text-base md:text-lg mb-6"
          style={{ color: "hsl(0 0% 53%)", opacity: 0 }}
        >
          A{" "}
          <span
            key={roleIndex}
            className="italic inline-block"
            style={{
              fontFamily:
                "var(--dp-font-display, var(--font-serif, serif))",
              color: "hsl(0 0% 96%)",
              animation: ready
                ? "dp-role-fade-in 0.4s ease-out"
                : "none",
            }}
          >
            {ROLES[roleIndex]}
          </span>{" "}
          lives in Chicago.
        </p>

        {/* Description */}
        <p
          className="dp-blur-in text-sm md:text-base max-w-md mx-auto mb-12"
          style={{ color: "hsl(0 0% 53%)", opacity: 0 }}
        >
          Designing seamless digital interactions by focusing on the unique
          nuances which bring systems to life.
        </p>

        {/* CTAs */}
        <div
          className="dp-blur-in inline-flex gap-4 flex-wrap justify-center"
          style={{ opacity: 0 }}
        >
          <button
            className="relative rounded-full text-sm px-7 py-3.5 font-medium transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "hsl(0 0% 96%)",
              color: "hsl(0 0% 4%)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "hsl(0 0% 4%)";
              el.style.color = "hsl(0 0% 96%)";
              el.style.outline =
                "2px solid transparent";
              el.style.boxShadow =
                "0 0 0 2px #89AACC";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "hsl(0 0% 96%)";
              el.style.color = "hsl(0 0% 4%)";
              el.style.boxShadow = "none";
            }}
          >
            See Works
          </button>

          <button
            className="rounded-full text-sm px-7 py-3.5 border-2 transition-all duration-300 hover:scale-105"
            style={{
              borderColor: "hsl(0 0% 12%)",
              backgroundColor: "hsl(0 0% 4%)",
              color: "hsl(0 0% 96%)",
            }}
          >
            Reach out...
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span
          className="text-xs uppercase tracking-[0.2em]"
          style={{ color: "hsl(0 0% 53%)" }}
        >
          SCROLL
        </span>
        <div
          className="relative w-px h-10 overflow-hidden"
          style={{ backgroundColor: "hsl(0 0% 12%)" }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-1/3"
            style={{
              background:
                "linear-gradient(90deg, #89AACC, #4E85BF)",
              animation:
                "dp-scroll-down 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
