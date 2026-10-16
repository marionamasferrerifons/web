'use client';

import { Analytics } from '@vercel/analytics/next';

// Rutes que no compten com a visites: l'espai privat de clients i la galeria interna.
const EXCLUDED = ['/clientes', '/dev'];

/**
 * Vercel Web Analytics (sense cookies). Viu en un component client perquè
 * `beforeSend` és una funció i no es pot passar des del layout (Server Component).
 */
export default function SiteAnalytics() {
  return (
    <Analytics
      beforeSend={(event) => {
        const { pathname } = new URL(event.url);
        const excluded = EXCLUDED.some((p) => pathname === p || pathname.startsWith(`${p}/`));
        return excluded ? null : event;
      }}
    />
  );
}
