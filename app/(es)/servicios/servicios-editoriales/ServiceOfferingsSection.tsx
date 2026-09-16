'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type ServiceCard = { icon: string; iconSize: number; title: string; description: string };

type Section3Props = {
  tag: string;
  title: ReactNode;
  subtitle: string;
  mainCardTitle: string;
  mainCardBody: string;
  serviceCards: ServiceCard[];
  whatYoullGetLabel: string;
  outcomes: string[];
};

export default function Section3({ tag, title, subtitle, mainCardTitle, mainCardBody, serviceCards, whatYoullGetLabel, outcomes }: Section3Props) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.from('.s3-header > *', {
        y: 32,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: { trigger: '.s3-header', start: 'top 80%' },
      });

      // Main card entrance
      gsap.from('.s3-main-card', {
        y: 48,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.s3-main-card', start: 'top 80%' },
      });

      // Service cards stagger
      gsap.from('.s3-service-card', {
        y: 32,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: '.s3-service-card', start: 'top 85%' },
      });

      // Outcomes
      gsap.from('.s3-outcome', {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: { trigger: '.s3-outcome', start: 'top 85%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex justify-center pt-[80px] pb-[56px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-grey)' }}
    >
      <div className="w-full flex flex-col gap-[40px]" style={{ maxWidth: '1400px' }}>

        {/* Section header */}
        <div className="s3-header flex flex-col items-center gap-[16px] text-center">
          <p
            className="opacity-65 uppercase"
            style={{
              fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
              fontSize: 'var(--text-body-accent-mono)',
              lineHeight: 'var(--text-body-accent-mono--line-height)',
              letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
              color: 'var(--color-text-secondary)',
            }}
          >
            {tag}
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-l)',
              lineHeight: 'var(--text-title-l--line-height)',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-blue-400)',
              maxWidth: '685px',
              textWrap: 'balance',
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-body-m)',
              lineHeight: 'var(--text-body-m--line-height)',
              fontWeight: 300,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-text-secondary)',
              maxWidth: '453px',
              textWrap: 'balance',
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* White card */}
        <div className="s3-main-card bg-white rounded-[24px] p-[32px] md:p-[40px] flex flex-col gap-[40px]">

          {/* Top: title+desc left | illustration right */}
          <div className="flex flex-col gap-[32px] lg:flex-row lg:items-start lg:justify-between lg:min-h-[419px]">
            <div className="flex flex-col gap-[24px] flex-1 lg:justify-between lg:gap-0 lg:h-[419px]">
              <h3
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'var(--text-title-m)',
                  lineHeight: 'var(--text-title-m--line-height)',
                  fontWeight: 400,
                  fontVariationSettings: '"opsz" 14',
                  color: 'var(--color-blue-400)',
                }}
              >
                {mainCardTitle}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'var(--text-body-l)',
                  lineHeight: 'var(--text-body-l--line-height)',
                  fontWeight: 300,
                  fontVariationSettings: '"opsz" 14',
                  color: 'var(--color-text-secondary)',
                }}
              >
                {mainCardBody}
              </p>
            </div>
            <div
              className="order-first lg:order-last rounded-[16px] overflow-hidden w-full h-[280px] lg:shrink-0 lg:w-[586px] lg:h-[419px]"
              style={{ backgroundColor: '#f0ad5c' }}
            >
              <img
                src="/s3-editorial-illu.png"
                alt=""
                className="w-full h-full object-cover"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Service cards 2x2 */}
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[16px] lg:flex-row">
              {serviceCards.slice(0, 2).map((card) => (
                <div
                  key={card.title}
                  className="s3-service-card flex-1 flex flex-col justify-between gap-[16px] p-[24px] rounded-[16px]"
                  style={{ backgroundColor: 'var(--color-grey)', minHeight: '245px' }}
                >
                  <div className="flex flex-col gap-[16px]">
                    <div className="relative size-[48px] rounded-[4px] overflow-hidden shrink-0">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img src={card.icon} alt="" style={{ width: card.iconSize, height: card.iconSize }} className="object-contain" aria-hidden="true" />
                      </div>
                    </div>
                    <h4
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: 'var(--text-body-xl)',
                        lineHeight: 'var(--text-body-xl--line-height)',
                        fontWeight: 400,
                        fontVariationSettings: '"opsz" 14',
                        color: 'var(--color-blue-400)',
                      }}
                    >
                      {card.title}
                    </h4>
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: 'var(--text-body-m)',
                      lineHeight: 'var(--text-body-m--line-height)',
                      fontWeight: 300,
                      fontVariationSettings: '"opsz" 14',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-[16px] lg:flex-row">
              {serviceCards.slice(2).map((card) => (
                <div
                  key={card.title}
                  className="s3-service-card flex-1 flex flex-col justify-between gap-[16px] p-[24px] rounded-[16px]"
                  style={{ backgroundColor: 'var(--color-grey)', minHeight: '245px' }}
                >
                  <div className="flex flex-col gap-[16px]">
                    <div className="relative size-[48px] rounded-[4px] overflow-hidden shrink-0">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img src={card.icon} alt="" style={{ width: card.iconSize, height: card.iconSize }} className="object-contain" aria-hidden="true" />
                      </div>
                    </div>
                    <h4
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: 'var(--text-body-xl)',
                        lineHeight: 'var(--text-body-xl--line-height)',
                        fontWeight: 400,
                        fontVariationSettings: '"opsz" 14',
                        color: 'var(--color-blue-400)',
                      }}
                    >
                      {card.title}
                    </h4>
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: 'var(--text-body-m)',
                      lineHeight: 'var(--text-body-m--line-height)',
                      fontWeight: 300,
                      fontVariationSettings: '"opsz" 14',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Lo que conseguirás */}
          <div className="flex flex-col gap-[16px]">
            <p
              className="opacity-65 uppercase"
              style={{
                fontFamily: 'var(--font-dm-mono)',
                fontWeight: 400,
                fontSize: 'var(--text-body-accent-mono)',
                lineHeight: 'var(--text-body-accent-mono--line-height)',
                letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                color: 'var(--color-text-secondary)',
              }}
            >
              {whatYoullGetLabel}
            </p>
            <div className="flex flex-col gap-[24px] lg:flex-row lg:justify-between">
              {outcomes.map((text) => (
                <div key={text} className="s3-outcome flex items-center gap-[16px]" style={{ maxWidth: '413px' }}>
                  <img src="/s3-icon-outcome.svg" alt="" className="size-[32px] shrink-0" aria-hidden="true" />
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: 'var(--text-body-l)',
                      lineHeight: 'var(--text-body-l--line-height)',
                      fontWeight: 300,
                      fontVariationSettings: '"opsz" 14',
                      color: 'var(--color-blue-400)',
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
