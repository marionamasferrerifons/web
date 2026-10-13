'use client';

import { usePathname } from 'next/navigation';

/**
 * Amaga la navegació i el peu del lloc a l'espai de clients (`/clientes`),
 * que té la seva pròpia capçalera simplificada.
 */
export default function HideInClientSpace({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === '/clientes' || pathname?.startsWith('/clientes/')) return null;
  return <>{children}</>;
}
