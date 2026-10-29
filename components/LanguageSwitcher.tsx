'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { LOCALES, localeFromPath, switchLocalePath, type CaseStudySlugPair } from '@/lib/i18n';

const monoStyle = {
  fontFamily: 'var(--font-dm-mono)',
  fontSize: '14px',
  lineHeight: '24px',
  letterSpacing: '-0.5px',
}

const sansStyle = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 400,
}

// Els enllaços entre idiomes són <a> normals (no <Link>): cada idioma té el
// seu propi layout arrel (<html lang>), i Next fa igualment una càrrega completa.

/**
 * Selector de l'escriptori: mostra l'idioma actual amb la fletxa taronja, amb
 * el mateix aspecte que els desplegables de NavDropdown (sense contorn), i obre
 * un desplegable amb tots dos idiomes.
 */
export default function LanguageSwitcher({
  label,
  caseStudyPairs,
}: {
  label: string;
  caseStudyPairs: CaseStudySlugPair[];
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const current = localeFromPath(pathname);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-[4px] px-[12px] text-white hover:text-orange cursor-pointer transition-colors duration-200"
        style={{ height: '40px' }}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`${label}: ${LOCALES.find((l) => l.code === current)?.label}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="uppercase whitespace-nowrap" style={monoStyle}>{current}</span>
        <svg
          width="14" height="7" viewBox="0 0 14 7"
          fill="none" xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-200"
          style={{ transform: open ? 'rotate(180deg)' : 'none' }}
          aria-hidden="true"
        >
          <path d="M1 1L7 6L13 1" stroke="var(--color-orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {open && (
        // Mateix patró que NavDropdown: el buit visual és padding dins la caixa,
        // perquè el punter no en surti en baixar cap al menú.
        <div className="absolute right-0" style={{ top: '100%', paddingTop: '16px', minWidth: '180px' }}>
          <ul
            className="flex flex-col rounded-[16px] bg-grey overflow-hidden"
            style={{ boxShadow: '0 12px 32px rgba(1, 44, 151, 0.35)' }}
          >
            {LOCALES.map(({ code, label: name }) => {
              const isCurrent = code === current;
              return (
                <li key={code}>
                  <a
                    href={switchLocalePath(pathname, code, caseStudyPairs)}
                    hrefLang={code}
                    lang={code}
                    aria-current={isCurrent ? 'true' : undefined}
                    className="flex items-center gap-[10px] text-blue-800 whitespace-nowrap px-[20px] py-[12px] hover:bg-white transition-colors duration-150"
                    style={sansStyle}
                    onClick={() => setOpen(false)}
                  >
                    <span
                      className="rounded-full shrink-0"
                      style={{ width: '6px', height: '6px', backgroundColor: isCurrent ? 'var(--color-orange)' : 'transparent' }}
                      aria-hidden="true"
                    />
                    <span className="uppercase" style={{ ...monoStyle, fontSize: '13px' }}>{code}</span>
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

/** Versió del menú mòbil: dues pastilles, l'activa farcida de blanc. */
export function LanguagePills({
  label,
  caseStudyPairs,
}: {
  label: string;
  caseStudyPairs: CaseStudySlugPair[];
}) {
  const pathname = usePathname();
  const current = localeFromPath(pathname);

  return (
    <nav className="flex items-center gap-[8px]" aria-label={label}>
      {LOCALES.map(({ code, label: name }) => {
        const isCurrent = code === current;
        return (
          <a
            key={code}
            href={switchLocalePath(pathname, code, caseStudyPairs)}
            hrefLang={code}
            lang={code}
            aria-current={isCurrent ? 'true' : undefined}
            aria-label={name}
            className={`flex items-center border rounded-full px-[12px] uppercase transition-colors duration-200 ${
              isCurrent ? 'bg-white border-white text-blue-800' : 'border-[#d4d4d4] text-white'
            }`}
            style={{ ...monoStyle, height: '28px' }}
          >
            {code}
          </a>
        );
      })}
    </nav>
  );
}
