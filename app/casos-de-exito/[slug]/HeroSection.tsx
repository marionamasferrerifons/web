'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

type HeroSectionProps = {
  title: string
  subtitle: string
  year: string
  duration: string
  client: string
}

const monoTagStyle = {
  fontFamily: 'var(--font-dm-mono)',
  fontWeight: 400,
  fontSize: 'var(--text-body-accent-mono)',
  lineHeight: 'var(--text-body-accent-mono--line-height)',
  letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
};

const metaTextStyle = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: 'var(--text-body-l)',
  lineHeight: 'var(--text-body-l--line-height)',
  fontWeight: 400,
  fontVariationSettings: '"opsz" 14',
  color: 'var(--color-blue-200)',
};

export default function HeroSection({ title, subtitle, year, duration, client }: HeroSectionProps) {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-tag',      { y: -24, opacity: 0, duration: 0.6 })
        .from('.hero-title',    { y: 48,  opacity: 0, duration: 0.9 }, '-=0.35')
        .from('.hero-meta > *', { y: 20,  opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.4')
        .from('.hero-subtitle', { y: 24,  opacity: 0, duration: 0.7 }, '-=0.2')
        .from('.hero-blob-l',   { x: -40, opacity: 0, duration: 1.0 }, '-=0.9')
        .from('.hero-blob-r',   { x: 40,  opacity: 0, duration: 1.0 }, '<');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden flex flex-col items-center pt-[56px] pb-[64px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-blue-500)' }}
    >
      {/* Left blob */}
      <img
        src="/case-hero-blob-left.svg"
        alt=""
        className="hero-blob-l absolute left-0 top-[96px] hidden md:block"
        style={{ width: '216px', height: '128px', transform: 'scaleY(-1)' }}
        aria-hidden="true"
      />

      {/* Right blob */}
      <img
        src="/case-hero-blob-right.svg"
        alt=""
        className="hero-blob-r absolute right-0 bottom-[40px] hidden md:block"
        style={{ width: '233px', height: '134px' }}
        aria-hidden="true"
      />

      <div
        className="relative flex flex-col items-center gap-[40px] text-center pt-[22px]"
        style={{ maxWidth: '809px', zIndex: 1 }}
      >
        <div className="flex flex-col gap-[16px] items-center">
          <p
            className="hero-tag opacity-65 uppercase"
            style={{ ...monoTagStyle, color: 'var(--color-blue-100)' }}
          >
            [CASO DE ÉXITO]
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
            {title}
          </h1>
        </div>

        <div className="hero-meta flex flex-wrap gap-x-[64px] gap-y-[16px] items-center justify-center">
          <div className="flex items-center gap-[4px]">
            <img src="/case-icon-year.svg" alt="" className="size-[24px]" aria-hidden="true" />
            <span style={metaTextStyle}>{year}</span>
          </div>
          <div className="flex items-center gap-[4px]">
            <img src="/case-icon-duration.svg" alt="" className="size-[24px]" aria-hidden="true" />
            <span style={metaTextStyle}>{duration}</span>
          </div>
          <div className="flex items-center gap-[4px]">
            <img src="/case-icon-client.svg" alt="" className="size-[24px]" aria-hidden="true" />
            <span style={metaTextStyle}>{client}</span>
          </div>
        </div>

        <p
          className="hero-subtitle mx-auto"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-body-l)',
            lineHeight: 'var(--text-body-l--line-height)',
            fontWeight: 300,
            fontVariationSettings: '"opsz" 14',
            color: 'var(--color-blue-100)',
            maxWidth: '570px',
          }}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
}
