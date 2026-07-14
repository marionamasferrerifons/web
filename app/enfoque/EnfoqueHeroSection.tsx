'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BOOKING_URL } from '@/lib/constants';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-tag',   { y: -24, opacity: 0, duration: 0.6 })
        .from('.hero-title', { y: 48,  opacity: 0, duration: 0.9 }, '-=0.35')
        .from('.hero-shape', { scale: 0.8, opacity: 0, duration: 0.9, ease: 'back.out(1.6)' }, '-=0.6')
        .from('.hero-body',  { y: 24,  opacity: 0, duration: 0.7 }, '-=0.5')
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
      {/* Decorative scalloped shape — bottom right, bleeding off the edge */}
      <img
        src="/enfoque-hero-shape.svg"
        alt=""
        className="hero-shape absolute hidden lg:block"
        style={{ right: '-12px', bottom: '72px', width: '289px', height: '166px' }}
        aria-hidden="true"
      />

      <div className="relative w-full flex flex-col" style={{ maxWidth: '1400px' }}>
        <div className="flex flex-col gap-[16px] items-center text-center mx-auto" style={{ maxWidth: '809px' }}>
          <p
            className="hero-tag uppercase"
            style={{
              fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
              fontSize: 'var(--text-body-accent-mono)',
              lineHeight: 'var(--text-body-accent-mono--line-height)',
              letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
              color: 'var(--color-blue-100)',
            }}
          >
            [ENFOQUE]
          </p>
          <h1
            className="hero-title"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-xxl)',
              lineHeight: 'var(--text-title-xxl--line-height)',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-blue-50)',
            }}
          >
            Hola Lorem ipsum dolor sit amet{' '}
            <span style={{ color: 'var(--color-orange-400)' }}>consectetur</span>
            . Eu imperdiet cursus cras.
          </h1>
        </div>

        <div className="flex flex-col items-start gap-[24px] mt-[64px] md:mt-[96px]" style={{ maxWidth: '570px' }}>
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
            Trabajo en el punto donde la tecnología, el contenido y el uso real se cruzan, para integrar la IA sin comprometer la calidad ni el valor educativo.
          </p>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button group flex items-center gap-[16px] bg-grey hover:bg-white rounded-full cursor-pointer transition-colors duration-[330ms] ease-linear"
            style={{ paddingLeft: '28px', paddingRight: '12px', paddingTop: '8px', paddingBottom: '8px' }}
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
    </section>
  );
}
