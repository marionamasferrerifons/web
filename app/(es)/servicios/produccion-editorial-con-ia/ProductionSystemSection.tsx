'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTag from '@/components/service/SectionTag';
import type { Locale } from '@/lib/i18n';
import { produccionContent } from '@/content/produccion';

const bodyL = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: 'var(--text-body-l)',
  lineHeight: 'var(--text-body-l--line-height)',
  fontWeight: 300,
} as const;

const bodyM = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: 'var(--text-body-m)',
  lineHeight: '24px',
  fontWeight: 300,
} as const;

const titleStyle = (size: 'l' | 'm' | 's') => ({
  fontFamily: 'var(--font-dm-sans)',
  fontSize: `var(--text-title-${size})`,
  lineHeight: `var(--text-title-${size}--line-height)`,
  fontWeight: 400,
  color: 'var(--color-blue-400)',
});

function CheckIcon() {
  return (
    <svg className="shrink-0 mt-[2px]" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="var(--color-blue-400)" strokeWidth="1.5" />
      <path d="M7.5 12.5l3 3 6-6.5" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Clau de cada alternativa; el text ve de content/produccion, en el mateix ordre.
const OPTION_KEYS = ['generalistas', 'propia'];

// Icona de cada benefici; el text ve de content/produccion, en el mateix ordre.
const BENEFIT_ICONS = ['/s3-icon-result.svg', '/s3-icon-edition.svg', '/s3-icon-knowledge.svg', '/s3-icon-team.svg'];

/**
 * Secció 3 — què és un sistema de producció amb IA, les dues formes de posar-lo
 * en marxa (comparador de 2 targetes amb subgrid, com el d'Estrategia) i què
 * aporta a l'editorial (4 beneficis, mateix patró que els passos d'Estrategia).
 */
export default function ProductionSystemSection({ locale = 'es' }: { locale?: Locale }) {
  const c = produccionContent[locale].system;
  const OPTIONS = c.options.map((option, i) => ({ ...option, key: OPTION_KEYS[i] }));
  const BENEFITS = c.benefits.map((benefit, i) => ({ ...benefit, icon: BENEFIT_ICONS[i] }));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.system-block').forEach((block) => {
        gsap.from(block, {
          y: 32, opacity: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: block, start: 'top 85%' },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sistema-de-produccion"
      className="w-full flex justify-center py-[64px] md:py-[96px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-white)' }}
    >
      <div className="w-full flex flex-col gap-[56px]" style={{ maxWidth: '1160px' }}>

        {/* Què és */}
        <div className="system-block grid grid-cols-1 lg:grid-cols-12 gap-[32px] lg:gap-[40px] items-center">
          <div className="lg:col-span-5 flex flex-col gap-[24px]">
            <h2 style={{ ...titleStyle('l'), textWrap: 'balance' }}>
              {c.title}
            </h2>
            <p style={{ ...bodyL, color: 'var(--color-text-secondary)', textWrap: 'pretty' }}>
              {c.body}
            </p>
          </div>
          <div
            className="lg:col-span-7 hidden lg:block rounded-[24px] overflow-hidden"
            style={{ aspectRatio: '541 / 367', backgroundColor: 'var(--color-orange-100)' }}
          >
            <img src="/produccion-procesos.svg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
          </div>
        </div>

        {/* Dues formes de posar-lo en marxa */}
        <div className="system-block flex flex-col gap-[40px]">
          <div className="flex flex-col items-center gap-[16px] text-center">
            <h2 style={{ ...titleStyle('m'), textWrap: 'balance' }}>{c.optionsTitle}</h2>
            <p style={{ ...bodyL, color: 'var(--color-text-secondary)', maxWidth: '600px', textWrap: 'balance' }}>
              {c.optionsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
            {OPTIONS.map((option) => (
              <article
                key={option.key}
                className="grid p-[24px] md:p-[40px]"
                style={{
                  backgroundColor: 'var(--color-grey)',
                  borderRadius: '24px',
                  gridTemplateRows: 'subgrid',
                  gridRow: 'span 3',
                  rowGap: 0,
                }}
              >
                <div className="flex flex-col gap-[16px] pb-[28px]">
                  <h3 style={titleStyle('s')}>{option.title}</h3>
                  <p style={{ ...bodyL, color: 'var(--color-text-secondary)' }}>{option.body}</p>
                </div>

                <div className="bg-white flex flex-col gap-[8px] mb-[28px]" style={{ borderRadius: '12px', padding: '24px' }}>
                  <SectionTag color="var(--color-text-secondary)">{c.valueLabel}</SectionTag>
                  <p style={{ ...bodyL, color: 'var(--color-blue-500)' }}>{option.value}</p>
                </div>

                <div className="flex flex-col gap-[16px] pt-[24px]" style={{ borderTop: '1px solid var(--color-blue-200)' }}>
                  <SectionTag color="var(--color-text-secondary)">{c.helpsLabel}</SectionTag>
                  <ul className="flex flex-col gap-[12px]">
                    {option.helps.map((help) => (
                      <li key={help} className="flex items-start gap-[12px]">
                        <CheckIcon />
                        <span style={{ ...bodyL, color: 'var(--color-blue-500)' }}>{help}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Què aporta */}
        <div className="system-block flex flex-col gap-[40px]">
          <h2 className="text-center" style={titleStyle('m')}>{c.benefitsTitle}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
            {BENEFITS.map((benefit) => (
              <li
                key={benefit.title}
                className="flex flex-col gap-[12px] pt-[24px]"
                style={{ borderTop: '1px solid var(--color-blue-200)' }}
              >
                <img src={benefit.icon} alt="" className="size-[32px]" aria-hidden="true" />
                <h3
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 'var(--text-body-xl)',
                    lineHeight: 'var(--text-body-xl--line-height)',
                    fontWeight: 400,
                    color: 'var(--color-blue-400)',
                  }}
                >
                  {benefit.title}
                </h3>
                <p style={{ ...bodyM, color: 'var(--color-text-secondary)' }}>{benefit.body}</p>
              </li>
            ))}
          </ul>
          <p style={{ ...bodyM, color: 'var(--color-text-secondary)' }}>
            {c.strategyPrompt}{' '}
            <Link
              href={c.strategyHref}
              className="underline underline-offset-2 hover:no-underline focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px]"
              style={{ color: 'var(--color-text-accent)', outlineColor: 'var(--color-blue-800)' }}
            >
              {c.strategyLink}
            </Link>
            .
          </p>
        </div>

      </div>
    </section>
  );
}
