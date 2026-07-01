import type { Metadata } from "next";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";
import theme from "./_components/theme.module.css";

export const metadata: Metadata = {
  title: "DevHub | Doctor Portfolio Template",
  description:
    "DevHub is a five-page, mobile-responsive doctor portfolio template with a premium landing page, strong hero image treatment, and warm clinical storytelling.",
  alternates: {
    canonical: "/templates/p2",
  },
  openGraph: {
    url: "https://www.myportfoliowebsite.com/templates/p2",
    title: "DevHub | Doctor Portfolio Template",
    description:
      "A five-page doctor portfolio template built for private practice, concierge care, and premium personal branding.",
  },
};

export default function P2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={theme.root}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
