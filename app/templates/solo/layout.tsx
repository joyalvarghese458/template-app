import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solo — Graphic Designer Single Page Portfolio Template",
  description:
    "Solo is a single-page portfolio template for graphic and brand designers. Bold personality, minimal clutter, maximum impact. Starting at AED 49.",
  alternates: {
    canonical: "/templates/solo",
  },
  openGraph: {
    url: "https://www.myportfoliowebsite.com/templates/solo",
    title: "Solo — Graphic Designer Single Page Portfolio Template | My Portfolio",
    description:
      "A single-page portfolio for graphic and brand designers. Bold personality, minimal clutter, maximum impact.",
  },
};

export default function SoloLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
