import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "This template preview is coming soon.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ComingSoonTemplatePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#06122b]">
      {/* Reuse the same artwork as a blurred cover background so the side fill matches the image edges. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/commingsoon.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-105 object-cover blur-2xl"
      />
      <div className="absolute inset-0 bg-[#06122b]/40" aria-hidden="true" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/commingsoon.webp"
        alt="Coming soon template preview"
        className="relative h-screen w-screen object-contain"
      />
    </main>
  );
}
