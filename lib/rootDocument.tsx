import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HideInClientSpace from "@/components/HideInClientSpace";
import SiteAnalytics from "@/components/SiteAnalytics";
import { SITE_URL } from "@/lib/constants";
import { localizedPath, type Locale } from "@/lib/i18n";

// Cada idioma té el seu layout arrel (app/(es)/layout.tsx i app/(ca)/ca/layout.tsx)
// perquè <html lang> sigui correcte sense fer dinàmiques les rutes. Tot el que
// comparteixen viu aquí.

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

const SITE_COPY: Record<Locale, { title: string; description: string; ogAlt: string; ogLocale: string }> = {
  es: {
    title: "Mariona Masferrer i Fons — IA para editoriales educativas",
    description:
      "Acompañamiento estratégico para editoriales que integran la IA en su producción sin perder rigor editorial ni pedagógico.",
    ogAlt: "Mariona Masferrer i Fons — Estrategia editorial con IA",
    ogLocale: "es_ES",
  },
  ca: {
    title: "Mariona Masferrer i Fons — IA per a editorials educatives",
    description:
      "Acompanyament estratègic per a editorials que integren la IA a la seva producció sense perdre rigor editorial ni pedagògic.",
    ogAlt: "Mariona Masferrer i Fons — Estratègia editorial amb IA",
    ogLocale: "ca_ES",
  },
};

export function siteMetadata(locale: Locale): Metadata {
  const copy = SITE_COPY[locale];
  const home = localizedPath("/", locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: copy.title,
      template: "%s · Mariona Masferrer i Fons",
    },
    description: copy.description,
    alternates: {
      canonical: home,
    },
    openGraph: {
      type: "website",
      locale: copy.ogLocale,
      alternateLocale: locale === "es" ? ["ca_ES"] : ["es_ES"],
      siteName: "Mariona Masferrer i Fons",
      url: home,
      // Declarades aquí (no amb app/opengraph-image.png): la convenció de fitxer
      // substituiria openGraph.images i no permet afegir la versió quadrada.
      // La horitzontal va primer (LinkedIn, WhatsApp gran); la quadrada serveix
      // per a les miniatures que retallen en quadrat.
      images: [
        { url: "/og-image.png", width: 1200, height: 630, alt: copy.ogAlt },
        { url: "/og-image-square.png", width: 600, height: 600, alt: copy.ogAlt },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/og-image.png"],
    },
  };
}

export function RootDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={locale}>
      <body className={`${dmSans.variable} ${dmMono.variable}`}>
        <HideInClientSpace>
          <Navbar locale={locale} />
        </HideInClientSpace>
        {children}
        <HideInClientSpace>
          <Footer locale={locale} />
        </HideInClientSpace>
        <SiteAnalytics />
      </body>
    </html>
  );
}
