'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import RecoloredLogo, { needsLuminanceMask } from '@/components/RecoloredLogo';
import type { Logo } from './LogosSection';

// Mida òptica: cada logotip es dimensiona per superfície, no per alçada, perquè
// els allargats (Junior Report, Altamar) no dominin sobre els compactes.
const LOGO_AREA = 2000;
const MIN_H = 16;
const MAX_H = 34;

function opticalHeight(aspect: number) {
  return Math.max(MIN_H, Math.min(MAX_H, Math.sqrt(LOGO_AREA / aspect)));
}

// Fitxers amb molt de marge transparent al voltant: la mida natural enganya.
const SCALE_OVERRIDES: Record<string, number> = { actilearning: 1.4 };

function normalize(alt: string) {
  return alt.toLowerCase().replace(/^logo\s*(de\s*)?/, '').replace(/\s+/g, '');
}

function scaleFor(alt: string) {
  const normalized = normalize(alt);
  const match = Object.keys(SCALE_OVERRIDES).find((name) => normalized.includes(name));
  return match ? SCALE_OVERRIDES[match] : 1;
}

// Siluetes blanques per als logotips sense transparència (vegeu LogoTile).
const MASKED_SILHOUETTES: Record<string, string> = {
  mcgrawhill: '/logo-mcgrawhill-blanco.png',
};

// Mateix criteri que needsLuminanceMask: coincidència parcial del nom.
function silhouetteFor(alt: string) {
  const normalized = normalize(alt);
  const match = Object.keys(MASKED_SILHOUETTES).find((name) => normalized.includes(name));
  return match ? MASKED_SILHOUETTES[match] : undefined;
}

function LogoTile({ logo, hidden }: { logo: Logo; hidden: boolean }) {
  // Els logotips amb màscara de luminància (sense transparència, quadrats) no
  // tenen mida natural llegible: es fixen a la mida màxima.
  const masked = needsLuminanceMask(logo.alt);
  const [height, setHeight] = useState(masked ? 30 : 25);
  const tileRef = useRef<HTMLLIElement>(null);

  const measure = useCallback((img: HTMLImageElement | null | undefined) => {
    if (img?.naturalWidth && img.naturalHeight) setHeight(opticalHeight(img.naturalWidth / img.naturalHeight) * scaleFor(logo.alt));
  }, [logo.alt]);

  // La imatge pot haver carregat abans de la hidratació (i llavors onLoad no salta).
  useEffect(() => {
    const img = tileRef.current?.querySelector('img');
    if (img?.complete) measure(img);
  }, [measure]);

  return (
    <li
      ref={tileRef}
      className="flex items-center justify-center shrink-0 rounded-[16px]"
      style={{ width: '200px', height: '88px', backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
      aria-hidden={hidden || undefined}
    >
      {masked ? (
        // La màscara de luminància no es veu bé en aquesta mida: per a aquests
        // logotips (avui només McGraw-Hill) es fa servir una silueta blanca
        // preparada, amb les lletres retallades.
        <img
          src={silhouetteFor(logo.alt) ?? logo.src}
          alt={hidden ? '' : logo.alt}
          style={{ height: `${height}px`, width: 'auto', opacity: 0.8 }}
        />
      ) : (
        <RecoloredLogo
          src={logo.src}
          name={logo.alt}
          alt={hidden ? '' : logo.alt}
          opacity={0.8}
          className="w-auto object-contain"
          style={{ height: `${height}px`, maxWidth: '150px' }}
          onLoad={(e) => measure(e.currentTarget)}
        />
      )}
    </li>
  );
}

/**
 * Franja de confiança de la home, unida al hero (mateix fons blau): una sola
 * fila de targetes amb els logotips en blanc que es desplaça sola, com la
 * marquesina anterior. S'atura en passar-hi el ratolí; amb
 * `prefers-reduced-motion` queda quieta i es pot desplaçar a mà. Sense rètol:
 * s'entén pel context.
 */
export default function LogosStripSection({ logos }: { logos: Logo[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [animated, setAnimated] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- preferència del sistema, només es llegeix en muntar
      setAnimated(false);
      return;
    }

    const track = trackRef.current;
    if (!track) return;

    const ctx = gsap.context(() => {
      // La llista està duplicada: es desplaça exactament la meitat i torna a
      // començar sense que es noti.
      const tween = gsap.to(track, { xPercent: -50, duration: logos.length * 4, ease: 'none', repeat: -1 });
      const pause = () => tween.pause();
      const play = () => tween.play();
      track.addEventListener('mouseenter', pause);
      track.addEventListener('mouseleave', play);
      return () => {
        track.removeEventListener('mouseenter', pause);
        track.removeEventListener('mouseleave', play);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, [logos.length]);

  if (logos.length === 0) return null;

  const items = animated ? [...logos, ...logos] : logos;

  return (
    <section
      ref={sectionRef}
      aria-label="Editoriales y organizaciones con las que he trabajado"
      className="w-full flex justify-center pb-[56px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-blue-500)' }}
    >
      <div
        className="w-full pt-[40px]"
        style={{ maxWidth: '1400px', borderTop: '1px solid rgba(255, 255, 255, 0.18)' }}
      >
        <div
          className={`relative ${animated ? 'overflow-hidden' : 'overflow-x-auto'}`}
          // Sense animació la fila es desplaça a mà: ha de ser accessible amb teclat.
          tabIndex={animated ? undefined : 0}
        >
          {animated && (
            <>
              <div
                className="absolute inset-y-0 left-0 z-10 pointer-events-none"
                style={{ width: '80px', background: 'linear-gradient(to right, var(--color-blue-500), transparent)' }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-y-0 right-0 z-10 pointer-events-none"
                style={{ width: '80px', background: 'linear-gradient(to left, var(--color-blue-500), transparent)' }}
                aria-hidden="true"
              />
            </>
          )}
          <ul ref={trackRef} className="flex flex-nowrap gap-[16px] w-max pr-[16px]">
            {items.map((logo, i) => (
              <LogoTile key={`${logo.src}-${i}`} logo={logo} hidden={i >= logos.length} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
