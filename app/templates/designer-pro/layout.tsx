import type { Metadata } from "next";
import PageEnter from "./_components/PageEnter";

export const metadata: Metadata = {
  title: "Designer Pro — Dark Animated Creative Portfolio Template",
  description:
    "Designer Pro is a dark, animated single-page portfolio for creatives. Features loading screen, full-viewport hero with mesh gradient, bento grid, parallax gallery, and GSAP scroll animations.",
  alternates: {
    canonical: "/templates/designer-pro",
  },
  openGraph: {
    url: "https://www.myportfoliowebsite.com/templates/designer-pro",
    title: "Designer Pro — Dark Animated Creative Portfolio Template | My Portfolio",
    description:
      "A dark, animated single-page portfolio for creatives. Loading screen, full-viewport hero, bento grid, parallax gallery, and GSAP-powered scroll animations.",
  },
};

export default function DesignerProLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/*
        The shared site shell sets <html> background to white (app/globals.css,
        for the mostly-light template catalog). Designer Pro's own dark bg only
        lives on a div further down the tree, so on a hard refresh the browser
        paints that white <html> background first, before any client JS has
        run, producing a white flash on first paint. A plain CSS override here
        takes effect the instant it's parsed (no JS/hydration wait), and is
        automatically removed when navigating away from Designer Pro, since this
        whole subtree unmounts then.
      */}
      <style>{`html, body { background-color: hsl(0 0% 4%) !important; }`}</style>
      <PageEnter>{children}</PageEnter>
    </>
  );
}
