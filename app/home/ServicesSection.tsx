'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Card = {
  href: string;
  title: string;
  subtitle: string;
  body: string;
  image: string;
  bgColor: string;
  imageSide: 'left' | 'right';
};

type ServicesSectionProps = {
  tag: string;
  title: ReactNode;
  cards: Card[];
};

export default function ServicesSection({ tag, title, cards }: ServicesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: '.services-header', start: 'top 80%' },
        defaults: { ease: 'power3.out' },
      })
        .from('.services-tag',   { y: -20, opacity: 0, duration: 0.5 })
        .from('.services-title', { y: 48,  opacity: 0, duration: 0.9 }, '-=0.2');

      gsap.utils.toArray<Element>('.services-card').forEach((card) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%' },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col items-center gap-[64px] py-[56px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-grey)' }}
    >
      <div className="services-header flex flex-col gap-[16px] items-center text-center" style={{ maxWidth: '690px' }}>
        <p
          className="services-tag uppercase"
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontWeight: 400,
            fontSize: 'var(--text-body-accent-mono)',
            lineHeight: 'var(--text-body-accent-mono--line-height)',
            letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
            color: 'var(--color-text-secondary)',
            opacity: 0.65,
          }}
        >
          {tag}
        </p>
        <h2
          className="services-title"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-title-l)',
            lineHeight: 'var(--text-title-l--line-height)',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
            color: 'var(--color-blue-400)',
          }}
        >
          {title}
        </h2>
      </div>

      <div className="w-full flex flex-col gap-[64px]" style={{ maxWidth: '1163px' }}>
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="services-card group relative overflow-hidden rounded-[24px] flex flex-col md:flex-row items-stretch"
            style={{ backgroundColor: card.bgColor, minHeight: '480px' }}
          >
            {/* Text side */}
            <div
              className={`flex-1 md:flex-[0.9] flex flex-col justify-between gap-[24px] p-[32px] md:p-[40px] relative z-10 ${
                card.imageSide === 'left' ? 'md:order-2' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-[16px]">
                <div className="flex flex-col gap-[8px]">
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: 'var(--text-title-s)',
                      lineHeight: 'var(--text-title-s--line-height)',
                      fontWeight: 400,
                      fontVariationSettings: '"opsz" 14',
                      color: 'var(--color-blue-400)',
                    }}
                  >
                    {card.title}
                  </p>
                  <p
                    className="italic"
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: 'var(--text-body-m)',
                      lineHeight: 'var(--text-body-m--line-height)',
                      fontWeight: 400,
                      fontVariationSettings: '"opsz" 14',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {card.subtitle}
                  </p>
                </div>
                <span
                  className="relative flex items-center justify-center rounded-full shrink-0 bg-grey"
                  style={{ width: '48px', height: '48px' }}
                >
                  <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" style={{ backgroundColor: 'var(--color-orange)' }} />
                  <img
                    src="/arrow-orange.svg"
                    alt=""
                    className="relative size-[24px] transition-all duration-200 group-hover:rotate-45 group-hover:opacity-0"
                    aria-hidden="true"
                  />
                  <img
                    src="/arrow-white.svg"
                    alt=""
                    className="absolute size-[24px] opacity-0 transition-all duration-200 group-hover:rotate-45 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'var(--text-body-m)',
                  lineHeight: 'var(--text-body-m--line-height)',
                  fontWeight: 400,
                  fontVariationSettings: '"opsz" 14',
                  color: 'var(--color-text-secondary)',
                  maxWidth: '410px',
                }}
              >
                {card.body}
              </p>
            </div>

            {/* Illustration side */}
            <div className={`relative flex-1 md:flex-[1.3] overflow-hidden ${card.imageSide === 'left' ? 'md:order-1' : ''}`} style={{ minHeight: '240px' }}>
              <img
                src={card.image}
                alt=""
                className="services-card-image absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                aria-hidden="true"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
