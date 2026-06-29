import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";
import Cursor from "./_components/Cursor";
import SmoothScroll from "./_components/SmoothScroll";
import theme from "./_components/theme.module.css";

const fraunces = Fraunces({
  variable: "--font-helm-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-helm-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Helm — Executive Portfolio Template for CEOs & Founders",
  description:
    "Helm is a five-page, editorial-minimalist portfolio template for CEOs, founders, and group executives. Ivory-and-bronze design system, signature scroll animations, and real photography.",
  alternates: {
    canonical: "/templates/helm",
  },
  openGraph: {
    url: "https://www.myportfoliowebsite.com/templates/helm",
    title: "Helm — Executive Portfolio Template | My Portfolio",
    description:
      "A five-page, editorial-minimalist portfolio template for CEOs, founders, and group executives.",
  },
};

export default function HelmLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${fraunces.variable} ${inter.variable} ${theme.root}`}>
      <SmoothScroll>
        <Cursor />
        <Nav />
        <main>{children}</main>
        <Footer />
      </SmoothScroll>
    </div>
  );
}
