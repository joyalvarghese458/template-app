import type { Metadata } from "next";

import AmplifyTemplate from "./AmplifyTemplate";

export const metadata: Metadata = {
  title: "Amplify | Digital Marketer Portfolio Template",
  description:
    "A mobile-first career portfolio template for digital marketers, built to spotlight campaign strategy, channel performance, and measurable growth.",
  openGraph: {
    title: "Amplify | Digital Marketer Portfolio Template",
    description:
      "A mobile-first career portfolio template for digital marketers, built to spotlight campaign strategy, channel performance, and measurable growth.",
    type: "website",
  },
};

export default function AmplifyPage() {
  return <AmplifyTemplate />;
}
