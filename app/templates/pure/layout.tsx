import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pure — Clean Personal Portfolio Template",
  description:
    "Pure is a minimal, light personal portfolio template for creators and personal brands. Clean typography, fast load, and a modern aesthetic. Starting at AED 49.",
  alternates: {
    canonical: "/templates/pure",
  },
  openGraph: {
    url: "https://www.myportfoliowebsite.com/templates/pure",
    title: "Pure — Clean Personal Portfolio Template | My Portfolio",
    description:
      "A minimal, light personal portfolio template for creators and personal brands. Clean typography, fast load, and a modern aesthetic.",
  },
};

export default function PureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
