import type { Metadata } from "next";

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
  return <>{children}</>;
}
