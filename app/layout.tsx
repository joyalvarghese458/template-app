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

export const metadata: Metadata = {
  title: "My Portfolio — Professional Portfolio Templates",
  description:
    "Hand-crafted portfolio templates for designers, developers, photographers, and creators. Pick a tier from AED 49 and launch in days.",
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
