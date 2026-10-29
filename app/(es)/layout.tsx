import { RootDocument, siteMetadata } from "@/lib/rootDocument";

export const metadata = siteMetadata("es");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootDocument locale="es">{children}</RootDocument>;
}
