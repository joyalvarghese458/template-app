import type { Metadata } from "next";
import Growthfolio from "./Growthfolio";

const title = "Ashwin James | Performance Marketing Specialist in Dubai, UAE";
const description = "Performance marketing specialist in Dubai helping businesses generate qualified leads through Google Ads, Meta Ads, SEO, conversion optimization and growth systems.";
const url = "https://myportfoliowebsite.com/templates/growthfolio";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function GrowthfolioPage() {
  return <Growthfolio />;
}
