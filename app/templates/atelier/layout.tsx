import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atelier — Premium Agency Portfolio Template",
  description:
    "Atelier is a flagship premium portfolio template for creative agencies and luxury studios. Stunning animations, full-bleed imagery, and a cinematic feel. Starting at AED 149.",
  alternates: {
    canonical: "/templates/atelier",
  },
  openGraph: {
    url: "https://www.myportfoliowebsite.com/templates/atelier",
    title: "Atelier — Premium Agency Portfolio Template | My Portfolio",
    description:
      "A flagship premium portfolio template for creative agencies and luxury studios. Stunning animations, full-bleed imagery, and a cinematic feel.",
  },
};

export default function AtelierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
