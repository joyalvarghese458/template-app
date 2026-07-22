import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://myportfoliowebsite.com/templates/designer-pro/contact",
  },
};

export default function Page() {
  return <PageClient />;
}