import type { Metadata } from "next";
import Serenity from "./serenity";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://myportfoliowebsite.com/templates/serenity",
  },
  title: "Aria Blossom — Yoga Master & Wellness Guide",
  description:
    "Yoga master, meditation teacher, and retreat host. Discover transformative classes, sacred retreats, and private wellness coaching rooted in fifteen years of dedicated practice.",
  openGraph: {
    title: "Aria Blossom — Yoga Master & Wellness Guide",
    description:
      "Yoga master, meditation teacher, and retreat host. Discover transformative classes, sacred retreats, and private wellness coaching.",
    type: "website",
  },
};

export default function SerenityPage() {
  return <Serenity />;
}
