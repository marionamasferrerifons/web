'use client';

import { useEffect, useRef } from 'react';
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

// Àncora i il·lustració de cada modalitat; el text ve de content/produccion, en el mateix ordre.
const LAYOUT = [
  { id: 'creacion', illustration: '/produccion-creacion.svg' },
  { id: 'revision', illustration: '/produccion-revision.svg' },
  { id: 'sistema', illustration: '/produccion-procesos.svg' },
];

/**
 * Secció 2 — les tres modalitats en una graella de tres columnes dins un marc
 * blanc (variant de svccard-grid). Les dues files (il·lustració / text) es
 * comparteixen via CSS subgrid perquè els textos quedin alineats entre
 * columnes. Per sota de `lg`, una columna.
 */
export default function ModalitiesSection({ locale = 'es' }: { locale?: Locale }) {
  const c = produccionContent[locale].modalities;
  const MODALITIES = LAYOUT.map((layout, i) => ({ ...layout, ...c.items[i] }));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from('.modalities-header > *', {
        y: 24, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.modalities-header', start: 'top 85%' },
      });
      gsap.from('.modality-card', {
        y: 32, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.modalities-grid', start: 'top 85%' },
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
        <div className="modalities-header flex flex-col items-center gap-[16px] text-center">
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-l)',
              lineHeight: 'var(--text-title-l--line-height)',
              fontWeight: 400,
              color: 'var(--color-blue-400)',
              maxWidth: '820px',
              textWrap: 'balance',
            }}
          >
            {c.title}
          </h2>
          <p style={{ ...bodyL, color: 'var(--color-text-secondary)', maxWidth: '560px', textWrap: 'balance' }}>
            {c.subtitle}
          </p>
        </div>

        <div className="bg-white p-[16px] md:p-[40px]" style={{ borderRadius: '24px' }}>
          <div className="modalities-grid grid grid-cols-1 lg:grid-cols-3 gap-[16px]">
            {MODALITIES.map((m) => (
              <article
                key={m.id}
                id={m.id}
                className="modality-card grid p-[24px]"
                style={{
                  backgroundColor: 'var(--color-grey)',
                  borderRadius: '16px',
                  gridTemplateRows: 'subgrid',
                  gridRow: 'span 2',
                  rowGap: 0,
                }}
              >
                <div
                  className="rounded-[12px] overflow-hidden mb-[28px]"
                  style={{ backgroundColor: 'var(--color-orange-100)', height: '220px' }}
                >
                  <img src={m.illustration} alt="" className="w-full h-full object-cover object-left-top" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <SectionTag color="var(--color-text-secondary)">{m.tag}</SectionTag>
                  <h3
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: 'var(--text-title-s)',
                      lineHeight: 'var(--text-title-s--line-height)',
                      fontWeight: 400,
                      color: 'var(--color-blue-400)',
                    }}
                  >
                    {m.title}
                  </h3>
                  <p style={{ ...bodyL, color: 'var(--color-text-secondary)' }}>{m.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
