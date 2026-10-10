import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/constants";

// Font variable amb l'eix de mida òptica (opsz 9–40): permet que els títols
// grans de les pàgines de servei facin servir el disseny «display» de DM Sans.
// La resta del lloc fixa "opsz" 14 (body a globals.css i estils inline), el
// valor per defecte de la versió estàtica anterior, i no canvia d'aspecte.
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  axes: ["opsz"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mariona Masferrer i Fons — Estrategia editorial con IA",
    template: "%s · Mariona Masferrer i Fons",
  },
  description:
    "Acompañamiento estratégico para editoriales que integran la IA en su producción sin perder rigor editorial ni pedagógico.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Mariona Masferrer i Fons",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${dmSans.variable} ${dmMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}