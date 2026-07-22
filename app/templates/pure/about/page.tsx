import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://myportfoliowebsite.com/templates/pure/about",
  },
};

export default function Page() {
  return <PageClient />;
}