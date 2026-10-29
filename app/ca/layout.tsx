import { RootDocument, siteMetadata } from "@/lib/rootDocument";

export const metadata = siteMetadata("ca");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootDocument locale="ca">{children}</RootDocument>;
}
