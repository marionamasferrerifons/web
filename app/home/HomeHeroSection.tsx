'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BOOKING_URL } from '@/lib/constants';

export default function HeroSection() {
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
      {/* Decorative scalloped shape — top right, bleeding off the edge */}
      <img
        src="/home-hero-shape.svg"
        alt=""
        className="hero-shape absolute hidden lg:block"
        style={{ right: '-12px', top: '87px', width: '223px', height: '128px' }}
        aria-hidden="true"
      />

      {/* Photo — flush with the section's true left edge, regardless of viewport width */}
      <img
        src="/home-hero-photo.png"
        alt="Mariona Masferrer"
        className="hero-photo absolute hidden lg:block object-cover"
        style={{
          left: '0',
          bottom: '56px',
          width: '340px',
          height: '207px',
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
          Te ayudo a{' '}
          <span style={{ color: 'var(--color-orange-400)' }}>decidir</span>
          {' '}qué adoptar y qué dejar de lado en el sector editorial
        </h1>

        <div className="flex flex-col md:flex-row md:items-end md:justify-end gap-[40px] mt-[64px] md:mt-[96px]">
          {/* Photo — mobile only; desktop uses the edge-to-edge absolute version above */}
          <img
            src="/home-hero-photo.png"
            alt="Mariona Masferrer"
            className="hero-photo lg:hidden object-cover shrink-0"
            style={{
              width: '340px',
              height: '207px',
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
              [+15 AÑOS DE EXPERIENCIA]
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
              Acompañamiento estratégico para directivos editoriales que buscan integrar la innovación en IA, combinando experiencia editorial, pedagógica y tecnológica.
            </p>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button group flex items-center gap-[16px] bg-grey hover:bg-white rounded-full cursor-pointer transition-colors duration-[330ms] ease-linear"
              style={{ paddingLeft: '28px', paddingRight: '12px', paddingTop: '8px', paddingBottom: '8px', marginTop: '16px' }}
            >
              <span
                className="uppercase text-orange"
                style={{
                  fontFamily: 'var(--font-dm-mono)',
                  fontWeight: 400,
                  fontSize: 'var(--text-body-accent-mono)',
                  lineHeight: 'var(--text-body-accent-mono--line-height)',
                  letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                }}
              >
                RESERVAR UNA LLAMADA
              </span>
              <span className="flex items-center justify-center bg-orange rounded-full shrink-0 size-[27px]">
                <img
                  src="/arrow-white.svg"
                  alt=""
                  className="size-4 transition-transform duration-300 ease-out group-hover:rotate-45"
                  aria-hidden="true"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
