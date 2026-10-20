'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ActionButtons from '@/components/service/ActionButtons';
import type { Locale } from '@/lib/i18n';
import { homeContent } from '@/content/home';

// Foto provisional (retrat de LinkedIn ampliat amb fons coral) fins que hi hagi
// les fotos definitives: només cal substituir aquest fitxer.
const HERO_PHOTO = '/home-hero-photo-provisional.webp';

export default function HeroSection({ locale = 'es' }: { locale?: Locale }) {
  const c = homeContent[locale].hero;
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-title', { y: 48,  opacity: 0, duration: 0.9 })
        .from('.hero-shape', { scale: 0.8, opacity: 0, duration: 0.9, ease: 'back.out(1.6)' }, '-=0.5')
        .from('.hero-photo', { x: -40, opacity: 0, duration: 0.9 }, '-=0.6')
        .from('.hero-tag',   { y: 24,  opacity: 0, duration: 0.6 }, '-=0.5')
        .from('.hero-body',  { y: 24,  opacity: 0, duration: 0.7 }, '-=0.45')
        .from('.hero-button', { y: 16, opacity: 0, duration: 0.6 }, '-=0.4');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden flex justify-center pt-[calc(var(--navbar-height)+56px)] pb-[56px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-blue-500)' }}
    >
      {/* Decorative scalloped shape — top right */}
      <img
        src="/home-hero-shape.svg"
        alt=""
        className="hero-shape absolute hidden lg:block"
        style={{ right: '0', top: '112px', width: '223px', height: '128px' }}
        aria-hidden="true"
      />

      {/* Photo — flush with the section's true left edge, regardless of viewport width */}
      <Image
        src={HERO_PHOTO}
        alt={c.photoAlt}
        width={340}
        height={207}
        priority
        className="hero-photo absolute hidden lg:block object-cover"
        style={{
          left: '0',
          bottom: '56px',
          maskImage: 'url(/home-hero-photo-mask.svg)',
          WebkitMaskImage: 'url(/home-hero-photo-mask.svg)',
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
        }}
      />

      <div className="relative w-full flex flex-col" style={{ maxWidth: '1400px' }}>
        <h1
          className="hero-title"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-title-xxl)',
            lineHeight: 'var(--text-title-xxl--line-height)',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
            color: 'var(--color-blue-50)',
            maxWidth: '809px',
          }}
        >
          {c.title}
        </h1>

        <div className="flex flex-col md:flex-row md:items-end md:justify-end gap-[40px] mt-[64px] md:mt-[96px]">
          {/* Photo — mobile only; desktop uses the edge-to-edge absolute version above */}
          <Image
            src={HERO_PHOTO}
            alt=""
            width={340}
            height={207}
            className="hero-photo lg:hidden object-cover shrink-0"
            style={{
              maxWidth: '100%',
              maskImage: 'url(/home-hero-photo-mask.svg)',
              WebkitMaskImage: 'url(/home-hero-photo-mask.svg)',
              maskSize: '100% 100%',
              WebkitMaskSize: '100% 100%',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
            }}
          />

          <div className="flex flex-col gap-[8px] items-start" style={{ maxWidth: '562px' }}>
            <p
              className="hero-tag uppercase"
              style={{
                fontFamily: 'var(--font-dm-mono)',
                fontWeight: 400,
                fontSize: 'var(--text-body-accent-mono)',
                lineHeight: 'var(--text-body-accent-mono--line-height)',
                letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                color: 'var(--color-blue-200)',
              }}
            >
              {c.tag}
            </p>
            <p
              className="hero-body"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 'var(--text-body-l)',
                lineHeight: 'var(--text-body-l--line-height)',
                fontWeight: 400,
                fontVariationSettings: '"opsz" 14',
                color: 'var(--color-blue-100)',
              }}
            >
              {c.body}
            </p>

            <div className="hero-button w-full md:w-fit" style={{ marginTop: '24px' }}>
              <ActionButtons inverted showNote={false} locale={locale} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
