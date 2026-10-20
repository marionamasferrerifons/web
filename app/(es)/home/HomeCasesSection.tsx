'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTag from '@/components/service/SectionTag';
import Button from '@/components/service/Button';
import type { Locale } from '@/lib/i18n';
import { homeContent } from '@/content/home';

// Els resums (content/home) es basen en les targetes de cas de les pàgines
// d'Estrategia i Producción (5 i 4 setmanes). Sense nom ni logotip del client,
// per decisió editorial.

const bodyL = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: 'var(--text-body-l)',
  lineHeight: 'var(--text-body-l--line-height)',
  fontWeight: 300,
} as const;

/**
 * Secció 4 de la home — dues targetes de cas amb la mateixa estructura
 * (etiqueta, títol, resum i botó), alineades amb CSS subgrid. Fons blue-100,
 * com les targetes de cas de les pàgines de servei.
 */
export default function HomeCasesSection({ locale = 'es' }: { locale?: Locale }) {
  const content = homeContent[locale].cases;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from('.home-cases-header > *', {
        y: 24, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.home-cases-header', start: 'top 85%' },
      });
      gsap.from('.home-case-card', {
        y: 32, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.home-cases-grid', start: 'top 85%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full flex justify-center py-[64px] md:py-[96px] px-[20px] md:px-[40px] bg-white">
      <div className="w-full flex flex-col gap-[48px]" style={{ maxWidth: '1160px' }}>
        <div className="home-cases-header flex flex-col items-center gap-[16px] text-center">
          <SectionTag color="var(--color-text-secondary)">{content.tag}</SectionTag>
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-l)',
              lineHeight: 'var(--text-title-l--line-height)',
              fontWeight: 400,
              color: 'var(--color-blue-400)',
            }}
          >
            {content.title}
          </h2>
          <p style={{ ...bodyL, color: 'var(--color-text-secondary)', maxWidth: '640px', textWrap: 'balance' }}>
            {content.subtitle}
          </p>
        </div>

        <div className="home-cases-grid grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
          {content.items.map((c) => (
            <article
              key={c.href}
              className="home-case-card grid p-[24px] md:p-[40px]"
              style={{
                backgroundColor: 'var(--color-blue-100)',
                borderRadius: '24px',
                gridTemplateRows: 'subgrid',
                gridRow: 'span 4',
                rowGap: 0,
              }}
            >
              <div className="pb-[16px]">
                <SectionTag color="var(--color-text-secondary-strong)">{c.tag}</SectionTag>
              </div>
              <h3
                className="pb-[16px]"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'var(--text-title-s)',
                  lineHeight: 'var(--text-title-s--line-height)',
                  fontWeight: 400,
                  color: 'var(--color-blue-400)',
                  textWrap: 'balance',
                }}
              >
                {c.title}
              </h3>
              <p style={{ ...bodyL, color: 'var(--color-text-secondary-strong)' }}>{c.body}</p>
              <div className="pt-[32px]">
                <Button href={c.href} variant="primary">
                  {c.link}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
