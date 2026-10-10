'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionTag from '@/components/service/SectionTag';
import ActionButtons from '@/components/service/ActionButtons';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-tag',    { y: -24, opacity: 0, duration: 0.6 })
        .from('.hero-title',  { y: 48,  opacity: 0, duration: 0.9 }, '-=0.35')
        .from('.hero-body',   { y: 24,  opacity: 0, duration: 0.7 }, '-=0.5')
        .from('.hero-actions', { y: 16, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero-vec-l',  { x: -40, opacity: 0, duration: 1.0 }, '-=0.9')
        .from('.hero-vec-r',  { x: 40,  opacity: 0, duration: 1.0 }, '<');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden flex flex-col items-center pt-[calc(var(--navbar-height)+56px)] pb-[64px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-green)' }}
    >
      <img
        src="/hero-vector-left.svg"
        alt=""
        className="hero-vec-l absolute left-0 top-[369px] -translate-x-8 hidden lg:block"
        style={{ width: '176.53px', height: '101.51px' }}
        aria-hidden="true"
      />
      <img
        src="/hero-vector-right.svg"
        alt=""
        className="hero-vec-r absolute right-0 top-[111px] translate-x-3 hidden lg:block"
        style={{ width: '176.53px', height: '101.51px' }}
        aria-hidden="true"
      />

      <div className="relative w-full flex flex-col items-center gap-[40px]" style={{ maxWidth: '1160px' }}>
        <div className="flex flex-col items-center gap-[16px] text-center">
          <div className="hero-tag">
            <SectionTag color="var(--color-text-secondary-strong)">[ESTRATEGIA DE IA]</SectionTag>
          </div>
          <h1
            className="hero-title"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-xxl)',
              lineHeight: 'var(--text-title-xxl--line-height)',
              fontWeight: 400,
              color: 'var(--color-blue-400)',
              maxWidth: '860px',
              textWrap: 'balance',
            }}
          >
            Criterio y dirección para decidir{' '}
            <span style={{ color: 'var(--color-white)' }}>qué hacer con la IA</span>
            {' '}en tu editorial.
          </h1>
          <p
            className="hero-body"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-body-l)',
              lineHeight: 'var(--text-body-l--line-height)',
              fontWeight: 300,
              color: 'var(--color-text-secondary-strong)',
              maxWidth: '620px',
              textWrap: 'pretty',
            }}
          >
            Te ayudo a resolver decisiones concretas, explorar oportunidades de negocio y dirigir tus iniciativas de IA. Con conocimiento del sector editorial, de la educación y de la tecnología.
          </p>
        </div>

        <div className="hero-actions w-full flex justify-center">
          <ActionButtons noteColor="var(--color-text-secondary-strong)" />
        </div>
      </div>
    </section>
  );
}
