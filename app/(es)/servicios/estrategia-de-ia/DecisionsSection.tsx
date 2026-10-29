'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTag from '@/components/service/SectionTag';
import type { Locale } from '@/lib/i18n';
import { estrategiaContent } from '@/content/estrategia-de-ia';

export default function DecisionsSection({ locale = 'es' }: { locale?: Locale }) {
  const c = estrategiaContent[locale].decisions;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from('.decisions-title', {
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.decisions-title', start: 'top 85%' },
      });

      gsap.utils.toArray<HTMLElement>('.decision-card').forEach((card, i) => {
        gsap.from(card, {
          y: 24, opacity: 0, duration: 0.6, ease: 'power3.out', delay: (i % 3) * 0.08,
          scrollTrigger: { trigger: card, start: 'top 90%' },
        });
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
      <div className="w-full flex flex-col gap-[56px]" style={{ maxWidth: '1160px' }}>
        <h2
          className="decisions-title text-center mx-auto"
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

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
          {c.items.map((d, i) => ({ ...d, number: (i + 1).toString().padStart(2, '0') })).map((d) => (
            <li
              key={d.number}
              className="decision-card bg-white flex flex-col gap-[16px] p-[24px] md:p-[32px]"
              style={{ borderRadius: '24px' }}
            >
              <SectionTag color="var(--color-text-secondary)">{d.number}</SectionTag>
              <h3
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'var(--text-body-xl)',
                  lineHeight: 'var(--text-body-xl--line-height)',
                  fontWeight: 400,
                  color: 'var(--color-blue-400)',
                  textWrap: 'balance',
                }}
              >
                {d.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'var(--text-body-m)',
                  lineHeight: '24px',
                  fontWeight: 300,
                  color: 'var(--color-text-secondary)',
                }}
              >
                {d.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
