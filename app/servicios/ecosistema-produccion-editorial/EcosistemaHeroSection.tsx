'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-tag',    { y: -24, opacity: 0, duration: 0.6 })
        .from('.hero-title',  { y: 64,  opacity: 0, duration: 1.0 }, '-=0.35')
        .from('.hero-body',   { y: 40,  opacity: 0, duration: 0.8 }, '-=0.55')
        .from('.hero-cta',    { y: 24,  opacity: 0, duration: 0.6 }, '-=0.45')
        .from('.hero-vec-r',  { x: 40,  opacity: 0, duration: 1.0 }, '-=0.8')
        .from('.hero-vec-l',  { x: -40, opacity: 0, duration: 1.0 }, '<')
        .from('.hero-blob',   { x: -40, opacity: 0, duration: 1.0 }, '<');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden flex flex-col items-center pt-[calc(var(--navbar-height)+80px)] pb-[56px] min-h-[600px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-orange)' }}
    >
      {/* Top-left vector */}
      <img
        src="/hero-vector-orange-left.svg"
        alt=""
        className="hero-vec-l absolute left-0 top-[40px]"
        style={{ width: '177px', height: '102px' }}
        aria-hidden="true"
      />

      {/* Bottom-right vector */}
      <img
        src="/hero-vector-orange-right.svg"
        alt=""
        className="hero-vec-r absolute right-0 bottom-[40px]"
        style={{ width: '177px', height: '102px' }}
        aria-hidden="true"
      />

      {/* Bottom-left blob */}
      <img
        src="/hero-vector16.svg"
        alt=""
        className="hero-blob absolute left-0 bottom-[-5px]"
        style={{ width: '335px', height: '355px' }}
        aria-hidden="true"
      />

      <div className="relative w-full flex flex-col flex-1" style={{ maxWidth: '1400px', zIndex: 1 }}>

        {/* Top group: Tag + Title */}
        <div>
        <p
          className="hero-tag opacity-65 uppercase mb-[16px] text-left md:text-right"
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontWeight: 400,
            fontSize: 'var(--text-body-accent-mono)',
            lineHeight: 'var(--text-body-accent-mono--line-height)',
            letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
            color: 'var(--color-grey)',
          }}
        >
          [Ecosistema de Producción Editorial]
        </p>

        <h1
          className="hero-title text-left md:text-right w-full md:max-w-[800px] md:ml-auto"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-title-xxl)',
            lineHeight: 'var(--text-title-xxl--line-height)',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
            color: 'var(--color-white)',
          }}
        >
          Optimiza tu producción haciendo que la IA trabaje con tu{' '}
          <span style={{ color: 'var(--color-blue-400)' }}>criterio editorial</span>
        </h1>
        </div>

        {/* Description + CTA — pinned to bottom */}
        <div className="flex justify-start mt-auto">
          <div className="flex flex-col gap-[24px]" style={{ maxWidth: '470px' }}>
            <p
              className="hero-body"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 'var(--text-body-l)',
                lineHeight: 'var(--text-body-l--line-height)',
                fontWeight: 300,
                fontVariationSettings: '"opsz" 14',
                color: 'var(--color-grey)',
              }}
            >
              Te ayudo a implementar un ecosistema de producción editorial para que la IA desarrolle contenidos con tus estándares y ayude de verdad a tu equipo editorial.
            </p>

            <button
              className="hero-cta group flex items-center gap-4 bg-grey hover:bg-white rounded-full pl-7 pr-3 py-2 transition-colors duration-[330ms] ease-linear w-fit"
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
                EXPLORAR TU PROYECTO
              </span>
              <span className="flex items-center justify-center bg-orange rounded-full shrink-0 size-[27px]">
                <img
                  src="/arrow-white.svg"
                  alt=""
                  className="size-4 transition-transform duration-300 ease-out group-hover:rotate-45"
                  aria-hidden="true"
                />
              </span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
