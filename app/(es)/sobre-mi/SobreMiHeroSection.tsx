'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

type HeroSectionProps = {
  tag: string;
  title: ReactNode;
  body: string;
  photoAlt: string;
};

export default function HeroSection({ tag, title, body, photoAlt }: HeroSectionProps) {
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
      <Image
        src="/hero-photo.png"
        alt={photoAlt}
        width={500}
        height={279}
        priority
        className="hero-photo absolute hidden lg:block object-cover"
        style={{
          top: 'calc(var(--navbar-height) + 36px)',
          right: '0',
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
            {tag}
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
            {body}
          </p>
        </div>
      </div>
    </section>
  );
}
