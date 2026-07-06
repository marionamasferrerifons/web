'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const monoStyle = {
  fontFamily: 'var(--font-dm-mono)',
  fontWeight: 400,
  fontSize: 'var(--text-body-accent-mono)',
  lineHeight: 'var(--text-body-accent-mono--line-height)',
  letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
}

type TestimonialSectionProps = {
  quote: string
  authorName: string
  authorRole: string
  avatarUrl: string
  avatarAlt?: string
  logoUrl: string
  logoAlt?: string
  cardColor?: string
  hideHeader?: boolean
}

export default function TestimonialSection({
  quote,
  authorName,
  authorRole,
  avatarUrl,
  avatarAlt,
  logoUrl,
  logoAlt,
  cardColor = 'var(--color-orange-400)',
  hideHeader = false,
}: TestimonialSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!hideHeader) {
        gsap.timeline({
          scrollTrigger: { trigger: '.ts-header', start: 'top 80%' },
          defaults: { ease: 'power3.out' },
        })
          .from('.ts-tag',   { y: -20, opacity: 0, duration: 0.5 })
          .from('.ts-title', { y: 48,  opacity: 0, duration: 0.9 }, '-=0.2');
      }

      gsap.timeline({
        scrollTrigger: { trigger: '.ts-card', start: 'top 80%' },
        defaults: { ease: 'power3.out' },
      })
        .from('.ts-decoration', { x: -60, opacity: 0, duration: 0.9 })
        .from('.ts-quote',      { x: 40,  opacity: 0, duration: 0.9 }, '-=0.6')
        .from('.ts-author',     { y: 20,  opacity: 0, duration: 0.6 }, '-=0.4');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const card = (
        <div
          className="ts-card relative w-full overflow-hidden rounded-[24px] flex items-center"
          style={{ backgroundColor: cardColor }}
        >
          {/* Left decoration — brand shape + logo */}
          <div
            className="ts-decoration hidden md:block relative shrink-0"
            style={{ width: '351px', height: '224px' }}
          >
            <svg
              viewBox="0 0 378 217"
              preserveAspectRatio="none"
              width="100%"
              height="100%"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0"
            >
              <path
                d="M62.239 217.387H0V41.5684C27.0881 -18.9508 89.9019 -8.51647 125.057 41.5684C178.077 -32.3067 231.673 10.7871 251.844 41.5684C272.13 15.6913 289.88 0.874355 315.237 0.874355H378.055V173.041C338.866 238.777 301.982 223.126 251.844 179.823C202.282 238.777 161.94 217.387 125.057 179.823C97.3939 210.709 71.6521 217.735 62.239 217.387Z"
                fill="white"
                fillOpacity="0.2"
              />
            </svg>
            <img
              src={logoUrl}
              alt={logoAlt ?? ''}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '150px',
                height: '60.48px',
                objectFit: 'contain',
              }}
            />
          </div>

          {/* Quote content */}
          <div className="flex-1 min-w-0 flex flex-col justify-center px-[20px] py-[32px] md:px-[64px] md:py-[56px]">
            <p
              className="ts-quote"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 'var(--text-title-s)',
                lineHeight: 'var(--text-title-s--line-height)',
                fontWeight: 300,
                fontVariationSettings: '"opsz" 14',
                color: 'var(--color-blue-800)',
              }}
            >
              &quot;{quote}&quot;
            </p>

            {/* Author */}
            <div className="ts-author flex items-center gap-[16px]" style={{ marginTop: '32px' }}>
              <img
                src={avatarUrl}
                alt={avatarAlt ?? authorName}
                className="rounded-full shrink-0 object-cover"
                style={{ width: '48px', height: '48px' }}
              />
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'var(--text-body-m)',
                  lineHeight: 'var(--text-body-m--line-height)',
                  fontWeight: 300,
                  fontVariationSettings: '"opsz" 14',
                  color: 'var(--color-blue-800)',
                }}
              >
                {authorName}, {authorRole}
              </p>
            </div>
          </div>
        </div>
  );

  if (hideHeader) {
    return <div ref={sectionRef as React.RefObject<HTMLDivElement>}>{card}</div>;
  }

  return (
    <section ref={sectionRef} className="bg-grey py-[56px] px-[20px]">
      <div className="mx-auto flex flex-col gap-[64px] items-center" style={{ maxWidth: '1400px' }}>

        {/* Header */}
        <div className="ts-header flex flex-col gap-[16px] items-center text-center">
          <p className="ts-tag text-blue-300 opacity-65 uppercase" style={monoStyle}>
            [TESTIMONIOS]
          </p>
          <h2
            className="ts-title"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-l)',
              lineHeight: 'var(--text-title-l--line-height)',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-blue-400)',
            }}
          >
            Esto es lo que dicen{' '}
            <span style={{ color: 'var(--color-orange-400)' }}>mis clientes</span>
          </h2>
        </div>

        {card}

      </div>
    </section>
  );
}
