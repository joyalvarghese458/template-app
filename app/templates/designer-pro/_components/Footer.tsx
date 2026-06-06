"use client";

import { useEffect, useRef } from "react";

const HLS_SRC =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
const MARQUEE_TEXT = "BUILDING THE FUTURE • ";
const SOCIALS = [
  { label: "Twitter",  href: "https://x.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "GitHub",   href: "https://github.com" },
] as const;

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // HLS video — native only, flipped vertically
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_SRC;
    }
  }, []);

  // GSAP marquee — infinite left scroll
  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    (async () => {
      const { default: gsap } = await import("gsap");
      if (!marqueeRef.current) return;
      ctx = gsap.context(() => {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          duration: 40,
          ease: "none",
          repeat: -1,
        });
      });
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <footer
      className="relative overflow-hidden pt-16 md:pt-20 pb-8 md:pb-12"
      style={{ backgroundColor: "hsl(0 0% 4%)" }}
    >
      {/* Background video — vertically flipped */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
          style={{ transform: "translate(-50%, -50%) scaleY(-1)" }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        />
      </div>

      <div className="relative z-10">
        {/* Marquee */}
        <div className="overflow-hidden mb-12 md:mb-16">
          <div
            ref={marqueeRef}
            className="whitespace-nowrap inline-flex"
            aria-hidden="true"
          >
            {Array.from({ length: 20 }, (_, i) => (
              <span
                key={i}
                className="text-4xl md:text-6xl lg:text-7xl font-normal italic mx-2 md:mx-4 flex-shrink-0"
                style={{
                  fontFamily:
                    "var(--dp-font-display, var(--font-serif, serif))",
                  color: "hsl(0 0% 96% / 0.07)",
                  letterSpacing: "0.02em",
                }}
              >
                {MARQUEE_TEXT}
              </span>
            ))}
          </div>
        </div>

        {/* CTA email */}
        <div className="text-center mb-16 px-6">
          <p
            className="text-xs uppercase tracking-[0.3em] mb-6"
            style={{ color: "hsl(0 0% 53%)" }}
          >
            Get in touch
          </p>
          <a
            href="mailto:hello@jamesarcher.com"
            className="relative inline-flex group"
          >
            <span
              className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(90deg, #89AACC, #4E85BF)",
              }}
              aria-hidden="true"
            />
            <span
              className="relative z-10 inline-flex items-center gap-2 rounded-full text-sm px-7 py-3.5 border transition-colors duration-300"
              style={{
                borderColor: "hsl(0 0% 12%)",
                backgroundColor: "hsl(0 0% 4%)",
                color: "hsl(0 0% 96%)",
              }}
            >
              hello@jamesarcher.com{" "}
              <span aria-hidden="true">↗</span>
            </span>
          </a>
        </div>

        {/* Footer bar */}
        <div
          className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid hsl(0 0% 12%)" }}
        >
          {/* Social links */}
          <div className="flex items-center gap-6">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs transition-colors duration-200"
                style={{ color: "hsl(0 0% 53%)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "hsl(0 0% 96%)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "hsl(0 0% 53%)";
                }}
              >
                {social.label}
              </a>
            ))}
          </div>

          {/* Available badge */}
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{
                backgroundColor: "#22c55e",
                animation: "dp-pulse-glow 2s ease-in-out infinite",
              }}
            />
            <span
              className="text-xs"
              style={{ color: "hsl(0 0% 53%)" }}
            >
              Available for projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
