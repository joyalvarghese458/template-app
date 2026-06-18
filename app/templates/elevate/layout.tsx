import { Bebas_Neue, DM_Mono, DM_Sans } from "next/font/google";

const bebasNeue = Bebas_Neue({
  variable: "--font-ev-heading",
  weight: "400",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-ev-body",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-ev-mono",
  weight: "400",
  subsets: ["latin"],
});

export default function ElevateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${bebasNeue.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      {children}
    </div>
  );
}
