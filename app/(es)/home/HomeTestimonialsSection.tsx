'use client';

import { useEffect, useRef, useState } from 'react';
import TestimonialSection from '@/app/(es)/servicios/estrategia-editorial/TestimonialSection';
import SectionTag from '@/components/service/SectionTag';
import type { Locale } from '@/lib/i18n';
import { homeContent } from '@/content/home';

export type HomeTestimonial = {
  id: string
  quote: string
  authorName: string
  authorRole: string
  avatarUrl: string
  avatarAlt?: string
  logoUrl?: string
  logoAlt?: string
}

// Els colors de targeta alternen com a la resta de pàgines (verd i taronja).
const CARD_COLORS = ['var(--color-green)', 'var(--color-orange-400)'];
const INTERVAL_MS = 7000;

function ArrowIcon({ direction }: { direction: 'prev' | 'next' }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direction === 'prev' ? 'M19 12H5M11 6l-6 6 6 6' : 'M5 12h14M13 6l6 6-6 6'}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Secció 7 de la home — la targeta de testimoni de la resta de pàgines
 * (TestimonialSection) dins un carrusel: un testimoni alhora, avançament
 * automàtic cada 7 s que s'atura en passar-hi el ratolí o el focus (i no
 * s'activa amb `prefers-reduced-motion`), fletxes i punts. Amb un sol
 * testimoni es mostra la targeta sola, sense controls.
 */
export default function HomeTestimonialsSection({ testimonials, locale = 'es' }: { testimonials: HomeTestimonial[]; locale?: Locale }) {
  const c = homeContent[locale].testimonials;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);
  const count = testimonials.length;

  useEffect(() => {
    if (count < 2 || paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL_MS);
    return () => clearInterval(timer);
  }, [count, paused]);

  if (count === 0) return null;

  const current = testimonials[index % count];
  const go = (i: number) => setIndex((i + count) % count);

  return (
    <section className="w-full flex justify-center py-[64px] md:py-[96px] px-[20px] md:px-[40px] bg-white">
      <div
        ref={regionRef}
        className="w-full flex flex-col gap-[40px]"
        style={{ maxWidth: '1400px' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={(e) => {
          if (!regionRef.current?.contains(e.relatedTarget as Node)) setPaused(false);
        }}
      >
        <div className="flex flex-col items-center gap-[16px] text-center">
          <SectionTag color="var(--color-text-secondary)">{c.tag}</SectionTag>
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-l)',
              lineHeight: 'var(--text-title-l--line-height)',
              fontWeight: 400,
              color: 'var(--color-blue-400)',
              textWrap: 'balance',
            }}
          >
            {c.title}
          </h2>
        </div>

        <div
          aria-roledescription={count > 1 ? c.carouselRole : undefined}
          aria-label={c.carouselLabel}
          aria-live={paused ? 'polite' : 'off'}
        >
          {/* La key remunta la targeta a cada canvi perquè torni a fer la seva entrada animada. */}
          <div key={current.id}>
            <TestimonialSection
              hideHeader
              locale={locale}
              quote={current.quote}
              authorName={current.authorName}
              authorRole={current.authorRole}
              avatarUrl={current.avatarUrl}
              avatarAlt={current.avatarAlt}
              logoUrl={current.logoUrl}
              logoAlt={current.logoAlt}
              cardColor={CARD_COLORS[index % CARD_COLORS.length]}
            />
          </div>
        </div>

        {count > 1 && (
          <div className="flex items-center justify-center gap-[20px]">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label={c.prev}
              className="flex items-center justify-center rounded-full bg-grey hover:bg-blue-100 text-blue-500 transition-colors cursor-pointer focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px]"
              style={{ width: '56px', height: '56px', outlineColor: 'var(--color-blue-800)' }}
            >
              <ArrowIcon direction="prev" />
            </button>
            <div className="flex items-center gap-[10px]">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={c.goTo.replace('{n}', String(i + 1)).replace('{total}', String(count))}
                  aria-current={i === index ? 'true' : undefined}
                  className="rounded-full cursor-pointer transition-all duration-300 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px]"
                  style={{
                    height: '10px',
                    width: i === index ? '28px' : '10px',
                    backgroundColor: i === index ? 'var(--color-blue-500)' : 'var(--color-blue-200)',
                    outlineColor: 'var(--color-blue-800)',
                  }}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label={c.next}
              className="flex items-center justify-center rounded-full bg-grey hover:bg-blue-100 text-blue-500 transition-colors cursor-pointer focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px]"
              style={{ width: '56px', height: '56px', outlineColor: 'var(--color-blue-800)' }}
            >
              <ArrowIcon direction="next" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
