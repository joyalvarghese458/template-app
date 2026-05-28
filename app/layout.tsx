import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const SITE_URL = "https://www.myportfoliowebsite.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | My Portfolio",
    default: "My Portfolio — Professional Portfolio Templates",
  },
  description:
    "Hand-crafted portfolio templates for designers, developers, photographers, and creators. Starting from AED 49. One-time payment, lifetime ownership.",
  keywords: [
    "portfolio templates",
    "portfolio website",
    "designer portfolio",
    "developer portfolio",
    "photographer portfolio",
    "professional portfolio",
    "buy portfolio template",
    "portfolio builder",
  ],
  authors: [{ name: "My Portfolio", url: SITE_URL }],
  creator: "My Portfolio",
  publisher: "My Portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "My Portfolio",
    title: "My Portfolio — Professional Portfolio Templates",
    description:
      "Hand-crafted portfolio templates for designers, developers, photographers, and creators. Starting from AED 49. One-time payment, lifetime ownership.",
    images: [
      {
        url: "/landing-img.png",
        width: 1200,
        height: 630,
        alt: "My Portfolio — Professional Portfolio Templates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Portfolio — Professional Portfolio Templates",
    description:
      "Hand-crafted portfolio templates for designers, developers, photographers, and creators. Starting from AED 49.",
    images: ["/landing-img.png"],
  },
  verification: {
    google: "2uHzaEXJTXe_lr1P4q-uSK9vhmZ1YCr9B_3p7zWR4Yc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable}`} data-scroll-behavior="smooth">
      <body className="font-sans antialiased bg-canvas-bg text-ink">
        {children}
      </body>
    </html>
  );
}
