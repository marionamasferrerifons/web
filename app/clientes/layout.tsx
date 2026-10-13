import type { Metadata } from 'next'

// Espai ocult: fora dels buscadors (també és a robots.txt i fora del sitemap).
export const metadata: Metadata = {
  robots: { index: false, follow: false, nocache: true },
}

export default function ClientesLayout({ children }: { children: React.ReactNode }) {
  return <div className="optical-auto">{children}</div>
}
