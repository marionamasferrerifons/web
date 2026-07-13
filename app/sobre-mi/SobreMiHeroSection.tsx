'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-tag',   { y: -24, opacity: 0, duration: 0.6 })
        .from('.hero-title', { y: 48,  opacity: 0, duration: 0.9 }, '-=0.35')
        .from('.hero-photo', { x: 40,  opacity: 0, duration: 0.9 }, '-=0.6')
        .from('.hero-blob',  { x: -40, opacity: 0, duration: 0.9 }, '<')
        .from('.hero-body',  { y: 24,  opacity: 0, duration: 0.7 }, '-=0.5');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden flex justify-center pt-[calc(var(--navbar-height)+56px)] pb-[80px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-blue-500)' }}
    >
      {/* Photo — top right, wave-masked */}
      <img
        src="/about-hero-photo.png"
        alt="Mariona Masferrer"
        className="hero-photo absolute hidden lg:block object-cover"
        style={{
          top: 'calc(var(--navbar-height) + 36px)',
          right: '0',
          width: '500px',
          height: '279px',
          maskImage: 'url(/about-hero-photo-mask.svg)',
          WebkitMaskImage: 'url(/about-hero-photo-mask.svg)',
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
        }}
      />

      {/* Blob — flush with the section's true left edge, regardless of viewport width */}
      <img
        src="/about-hero-blob.svg"
        alt=""
        className="hero-blob absolute left-0"
        style={{ bottom: '80px', width: '213px', height: '123px' }}
        aria-hidden="true"
      />

      <div className="relative w-full flex flex-col" style={{ maxWidth: '1400px' }}>
        <div className="flex flex-col gap-[16px] items-start" style={{ maxWidth: '809px' }}>
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
            [SOBRE MÍ]
          </p>
          <h1
            className="hero-title"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-l)',
              lineHeight: 'var(--text-title-l--line-height)',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-blue-50)',
            }}
          >
            Soy Mariona y ayudo a{' '}
            <span style={{ color: 'var(--color-orange-400)' }}>editoriales educativas</span>
            {' '}a trazar su camino en la era de la IA.
          </h1>
        </div>

        <div className="flex md:justify-end mt-[64px] md:mt-[96px]">
          <p
            className="hero-body"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-body-l)',
              lineHeight: 'var(--text-body-l--line-height)',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-blue-100)',
              maxWidth: '570px',
            }}
          >
            Llevo más de diez años trabajando en el cruce entre edición, educación e innovación tecnológica. He sido editora, docente y ahora acompaño a editoriales que quieren convertir la IA en ventaja competitiva sin renunciar al rigor editorial y pedagógico.
          </p>
        </div>
      </div>
    </section>
  );
}
