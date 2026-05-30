import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile One — Personal Brand Portfolio Template",
  description:
    "Profile One is a premium personal brand portfolio template with an interactive 3D particle field, smooth animations, and a cinematic dark aesthetic. Perfect for founders, coaches, and creators.",
  alternates: {
    canonical: "/templates/profile-one",
  },
  openGraph: {
    url: "https://www.myportfoliowebsite.com/templates/profile-one",
    title: "Profile One — Personal Brand Portfolio Template | My Portfolio",
    description:
      "A premium personal brand template featuring an interactive WebGL particle field, Framer Motion animations, and a cinematic dark aesthetic.",
  },
};

export default function ProfileOneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
