import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      {children}
    </>
  );
}
