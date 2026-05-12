import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebCraft — Premium Website Templates",
  description:
    "Professionally crafted website templates for modern businesses. Fast, beautiful, and ready to launch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-sans antialiased">
        <LoadingScreen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
