import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onefolio — Creative Flow Designer Portfolio Template",
  description:
    "Onefolio is a creative flow portfolio template for designers, creators, and founders. Fluid scroll experience with bold brand identity. Starting at AED 49.",
  alternates: {
    canonical: "/templates/onefolio",
  },
  openGraph: {
    url: "https://www.myportfoliowebsite.com/templates/onefolio",
    title: "Onefolio — Creative Flow Designer Portfolio Template | My Portfolio",
    description:
      "A creative flow portfolio template for designers, creators, and founders. Fluid scroll experience with bold brand identity.",
  },
};

export default function OnefolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
