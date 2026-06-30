'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-tag',     { y: -24, opacity: 0, duration: 0.6 })
        .from('.hero-title',   { y: 64,  opacity: 0, duration: 1.0 }, '-=0.35')
        .from('.hero-body',    { y: 40,  opacity: 0, duration: 0.8 }, '-=0.55')
        .from('.hero-cta',     { y: 24,  opacity: 0, duration: 0.6 }, '-=0.45')
        .from('.hero-vector',  { x: 40,  opacity: 0, duration: 1.0 }, '-=0.8')
        .from('.hero-blob',    { x: -40, opacity: 0, duration: 1.0 }, '<');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden flex justify-center pt-[56px] pb-[56px] min-h-[580px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-orange-400)' }}
    >
      {/* Bottom-left blob */}
      <img
        src="/hero-orange-blob.svg"
        alt=""
        className="hero-blob absolute left-0 bottom-0"
        style={{ width: '341px', height: '364px' }}
        aria-hidden="true"
      />

      {/* Top-right vector */}
      <img
        src="/hero-vector-orange.svg"
        alt=""
        className="hero-vector absolute right-0 top-[32px]"
        style={{ width: '289px', height: '166px' }}
        aria-hidden="true"
      />

      <div className="relative w-full flex flex-col" style={{ maxWidth: '1400px', zIndex: 1 }}>

        {/* Tag */}
        <p
          className="hero-tag opacity-65 uppercase mb-[16px]"
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontWeight: 400,
            fontSize: 'var(--text-body-accent-mono)',
            lineHeight: 'var(--text-body-accent-mono--line-height)',
            letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
            color: 'var(--color-blue-400)',
          }}
        >
          [Servicios editoriales]
        </p>

        {/* Title — left-aligned, ~57% width */}
        <h1
          className="hero-title mb-[48px] w-full md:max-w-[57%]"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-title-xxl)',
            lineHeight: 'var(--text-title-xxl--line-height)',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
            color: 'var(--color-blue-50)',
          }}
        >
          Los servicios editoriales de siempre, potenciados con la tecnología de hoy
        </h1>

        {/* Description + CTA — below title, pushed to the right */}
        <div className="flex justify-end md:justify-end">
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
              Producción externalizada de materiales educativos con criterio editorial riguroso, mirada pedagógica y eficiencia real gracias a la IA.
            </p>

            <button
              className="hero-cta group flex items-center gap-4 rounded-full pl-7 pr-3 py-2 transition-colors duration-200 w-fit"
              style={{ backgroundColor: 'var(--color-grey)' }}
            >
              <span
                className="uppercase"
                style={{
                  fontFamily: 'var(--font-dm-mono)',
                  fontWeight: 400,
                  fontSize: 'var(--text-body-accent-mono)',
                  lineHeight: 'var(--text-body-accent-mono--line-height)',
                  letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                  color: 'var(--color-orange)',
                }}
              >
                RESERVAR UNA LLAMADA
              </span>
              <span
                className="flex items-center justify-center rounded-full shrink-0 size-[27px]"
                style={{ backgroundColor: 'var(--color-orange)' }}
              >
                <img
                  src="/hero-arrow.svg"
                  alt=""
                  className="size-4 transition-transform duration-200 group-hover:rotate-45"
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
