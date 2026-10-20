'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTag from '@/components/service/SectionTag';
import ActionButtons from '@/components/service/ActionButtons';
import type { Locale } from '@/lib/i18n';
import { estrategiaContent } from '@/content/estrategia-de-ia';

function CheckIcon() {
  return (
    <svg className="shrink-0 mt-[2px]" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="var(--color-blue-400)" strokeWidth="1.5" />
      <path d="M7.5 12.5l3 3 6-6.5" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const bodyL = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: 'var(--text-body-l)',
  lineHeight: 'var(--text-body-l--line-height)',
  fontWeight: 300,
} as const;

// Il·lustració de cada modalitat; el text ve de content/estrategia-de-ia, en el mateix ordre.
const CARD_LAYOUT = [
  { key: 'punctual', illustration: '/section3-illu-2.svg', illustrationBg: 'var(--color-green)' },
  { key: 'direccion', illustration: '/section3-illu-3.svg', illustrationBg: 'var(--color-green)' },
];

export default function CollaborationSection({ locale = 'es' }: { locale?: Locale }) {
  const c = estrategiaContent[locale].collaboration;
  const CARDS = CARD_LAYOUT.map((layout, i) => ({ ...layout, ...c.cards[i] }));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from('.collab-header > *', {
        y: 24, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.collab-header', start: 'top 85%' },
      });
      gsap.from('.collab-card', {
        y: 32, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.collab-cards', start: 'top 85%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex justify-center py-[64px] md:py-[96px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-grey)' }}
    >
      <div className="w-full flex flex-col gap-[48px]" style={{ maxWidth: '1160px' }}>
        <div className="collab-header flex flex-col items-center gap-[16px] text-center">
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-l)',
              lineHeight: 'var(--text-title-l--line-height)',
              fontWeight: 400,
              color: 'var(--color-blue-400)',
            }}
          >
            {c.title}
          </h2>
          <p style={{ ...bodyL, color: 'var(--color-text-secondary)', maxWidth: '560px', textWrap: 'balance' }}>
            {c.subtitle}
          </p>
        </div>

        <div className="bg-white flex flex-col gap-[40px] p-[16px] md:p-[40px]" style={{ borderRadius: '24px' }}>
          {/* Les dues targetes comparteixen els mateixos 4 "trams" (il·lustració /
              capçalera / llista / bloc final) via CSS subgrid, perquè les files
              quedin alineades encara que la llista d'"¿En qué te ayudo?" tingui
              un nombre d'elements diferent a cada targeta.
              Breakpoint arrodonit a `lg` (1024px): l'spec demana "≤900px una
              columna" i el projecte no té cap breakpoint propi a 900px. */}
          <div
            className="collab-cards grid grid-cols-1 lg:grid-cols-2 gap-y-[16px] gap-x-[16px]"
          >
            {CARDS.map((card) => (
              <article
                key={card.key}
                className="collab-card grid p-[24px] md:p-[32px]"
                style={{
                  backgroundColor: 'var(--color-grey)',
                  borderRadius: '16px',
                  gridTemplateRows: 'subgrid',
                  gridRow: 'span 4',
                  rowGap: 0,
                }}
              >
                <div className="rounded-[12px] overflow-hidden mb-[32px]" style={{ backgroundColor: card.illustrationBg, height: '200px' }}>
                  <img src={card.illustration} alt="" className="w-full h-full object-cover object-left-top" aria-hidden="true" />
                </div>

                <div className="flex flex-col gap-[12px] pb-[32px]">
                  <SectionTag color="var(--color-text-secondary)">{card.tag}</SectionTag>
                  <h3
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: 'var(--text-title-m)',
                      lineHeight: 'var(--text-title-m--line-height)',
                      fontWeight: 400,
                      color: 'var(--color-blue-400)',
                    }}
                  >
                    {card.title}
                  </h3>
                  <p style={{ ...bodyL, color: 'var(--color-text-secondary)' }}>{card.body}</p>
                </div>

                <div
                  className="flex flex-col gap-[16px] pt-[24px] pb-[32px]"
                  style={{ borderTop: '1px solid var(--color-blue-200)' }}
                >
                  <SectionTag color="var(--color-text-secondary)">{c.helpsLabel}</SectionTag>
                  <ul className="flex flex-col gap-[12px]">
                    {card.helps.map((help) => (
                      <li key={help} className="flex items-start gap-[12px]">
                        <CheckIcon />
                        <span style={{ ...bodyL, color: 'var(--color-blue-500)' }}>{help}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white flex flex-col gap-[8px] self-end w-full" style={{ borderRadius: '12px', padding: '24px' }}>
                  <SectionTag color="var(--color-text-secondary)">{c.outcomeLabel}</SectionTag>
                  <p style={{ ...bodyL, color: 'var(--color-blue-500)' }}>{card.outcome}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center">
            <ActionButtons surface="white" noteColor="var(--color-text-secondary)" locale={locale} />
          </div>
        </div>
      </div>
    </section>
  );
}
