import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indie — Motion & VFX Cinematic Portfolio Template",
  description:
    "Indie is a cinematic portfolio template for motion designers and VFX artists. Bold visuals, immersive scroll, and a full 3D feel. Starting at AED 49.",
  alternates: {
    canonical: "/templates/indie",
  },
  openGraph: {
    url: "https://www.myportfoliowebsite.com/templates/indie",
    title: "Indie — Motion & VFX Cinematic Portfolio Template | My Portfolio",
    description:
      "A cinematic portfolio template for motion designers and VFX artists. Bold visuals, immersive scroll, and a full 3D feel.",
  },
};

export default function IndieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
