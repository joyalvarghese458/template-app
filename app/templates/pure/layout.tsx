import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pure - Creator Portfolio Template",
  description:
    "Pure is a light editorial creator portfolio template for personal brands, photographers, and modern creators. Clean typography, fast load, and a refined premium aesthetic. Starting at AED 149.",
  openGraph: {
    url: "https://myportfoliowebsite.com/templates/pure",
    title: "Pure - Creator Portfolio Template | My Portfolio",
    description:
      "A light editorial creator portfolio template for personal brands, photographers, and modern creators.",
  },
};

export default function PureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
