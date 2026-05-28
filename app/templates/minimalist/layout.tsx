import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minimalist — Clean Resume & CV Portfolio Template",
  description:
    "Minimalist is a single-page resume portfolio template for writers, consultants, and personal brands. Clean lines, readable typography, instant impact. Starting at AED 49.",
  alternates: {
    canonical: "/templates/minimalist",
  },
  openGraph: {
    url: "https://www.myportfoliowebsite.com/templates/minimalist",
    title: "Minimalist — Clean Resume & CV Portfolio Template | My Portfolio",
    description:
      "A single-page resume portfolio for writers, consultants, and personal brands. Clean lines, readable typography, instant impact.",
  },
};

export default function MinimalistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
