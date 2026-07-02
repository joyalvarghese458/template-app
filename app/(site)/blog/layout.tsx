import type { Metadata } from "next";

const BLOG_URL = "https://www.myportfoliowebsite.com/blog";

export const metadata: Metadata = {
  title: "Portfolio Blog",
  description:
    "Actionable portfolio guides, personal branding advice, and career insights for professionals building a stronger online presence.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    url: BLOG_URL,
    title: "Portfolio Blog",
    description:
      "Actionable portfolio guides, personal branding advice, and career insights for professionals building a stronger online presence.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Blog",
    description:
      "Actionable portfolio guides, personal branding advice, and career insights for professionals building a stronger online presence.",
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
