import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScroll>
      <LoadingScreen />
      <Navbar />
      <PageTransition>{children}</PageTransition>
    </SmoothScroll>
  );
}
