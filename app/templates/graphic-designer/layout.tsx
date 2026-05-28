import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luminary — Graphic Designer Portfolio Template",
  description:
    "Luminary is a premium single-page portfolio template for graphic designers, brand designers, and motion creatives. Bold layouts, smooth transitions. Starting at AED 99.",
  alternates: {
    canonical: "/templates/graphic-designer",
  },
  openGraph: {
    url: "https://www.myportfoliowebsite.com/templates/graphic-designer",
    title: "Luminary — Graphic Designer Portfolio Template | My Portfolio",
    description:
      "A premium single-page portfolio for graphic designers, brand designers, and motion creatives. Bold layouts, smooth transitions.",
  },
};

export default function GraphicDesignerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
