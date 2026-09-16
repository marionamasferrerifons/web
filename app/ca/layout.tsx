import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar locale="ca" />
      {children}
      <Footer locale="ca" />
    </>
  );
}
