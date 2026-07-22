import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://myportfoliowebsite.com/templates/graphic-designer",
  },
};

export default function Page() {
  return <PageClient />;
}