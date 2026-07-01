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
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(37, 99, 235, 0.22), transparent 38%), radial-gradient(circle at top right, rgba(29, 78, 216, 0.16), transparent 30%), linear-gradient(135deg, #102c72 0%, #07183d 52%, #030817 100%)",
        }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/commingsoon.webp"
        alt="Coming soon template preview"
        className="relative h-screen w-screen object-contain"
      />
    </main>
  );
}
