'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TestimonialSection from '@/app/servicios/estrategia-editorial/TestimonialSection'

type Testimonial = {
  quote: string
  authorName: string
  authorRole: string
  avatarUrl: string
  avatarAlt?: string
  logoUrl: string
  logoAlt?: string
}

const CARDS = [
  {
    title: 'Proyectos más claros, coherentes y sostenibles',
    body: 'La combinación entre criterio editorial, pedagogía y tecnología permite desarrollar contenidos útiles, bien estructurados y pensados para mantenerse sólidos también a largo plazo.',
  },
  {
    title: 'La tecnología funciona mejor cuando hay criterio detrás',
    body: 'Integrar IA dentro de procesos editoriales no consiste en automatizar por automatizar, sino en tomar mejores decisiones sobre qué mejorar, qué mantener y dónde realmente aporta valor.',
  },
  {
    title: 'Contenido que se produce y se entiende mejor',
    body: 'Trabajar desde una mirada editorial y pedagógica permite construir materiales más claros, comprensibles y alineados con cómo las personas aprenden y utilizan el contenido.',
  },
];

export default function PracticeSection({ testimonial }: { testimonial: Testimonial }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        defaults: { ease: 'power3.out' },
      })
        .from('.practice-header > *', { y: 24, opacity: 0, duration: 0.7, stagger: 0.1 })
        .from('.practice-card', { y: 32, opacity: 0, duration: 0.7, stagger: 0.1 }, '-=0.3');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col gap-[24px] items-center py-[56px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-grey)' }}
    >
      <div className="practice-header w-full flex flex-col items-start gap-[16px]" style={{ maxWidth: '1400px', marginBottom: '40px' }}>
        <p
          className="uppercase"
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontWeight: 400,
            fontSize: 'var(--text-body-accent-mono)',
            lineHeight: 'var(--text-body-accent-mono--line-height)',
            letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
            color: 'var(--color-blue-300)',
            opacity: 0.65,
          }}
        >
          [TRADUCCIÓN A LA PRÁCTICA]
        </p>
        <div className="w-full flex flex-col md:flex-row gap-[24px] items-start md:items-end justify-between">
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-l)',
              lineHeight: 'var(--text-title-l--line-height)',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-blue-400)',
              maxWidth: '690px',
            }}
          >
            Una forma de trabajar que{' '}
            <span style={{ color: 'var(--color-orange-400)' }}>impacta</span>
            {' '}en el resultado final
          </p>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-body-m)',
              lineHeight: 'var(--text-body-m--line-height)',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-blue-300)',
              maxWidth: '453px',
            }}
          >
            La IA no se incorpora desde fuera ni de forma experimental. Forma parte del proceso editorial, integrada en el día a día y con criterios claros de calidad.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-[20px] items-stretch" style={{ maxWidth: '1400px' }}>
        {CARDS.map((card, i) => (
          <div
            key={i}
            className="practice-card bg-white rounded-[24px] p-[32px] flex flex-col justify-between gap-[24px] flex-1"
            style={{ minHeight: '280px' }}
          >
            <div className="flex items-start justify-between gap-[16px]">
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'var(--text-body-xl)',
                  lineHeight: '30px',
                  fontWeight: 400,
                  fontVariationSettings: '"opsz" 14',
                  color: 'var(--color-blue-400)',
                }}
              >
                {card.title}
              </p>
              <span
                className="flex items-center justify-center rounded-[4px] shrink-0 size-[48px]"
                style={{ backgroundColor: 'var(--color-orange-200)' }}
              >
                <img src="/enfoque-work-loader.svg" alt="" className="size-[32px]" aria-hidden="true" />
              </span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 'var(--text-body-m)',
                lineHeight: 'var(--text-body-m--line-height)',
                fontWeight: 400,
                fontVariationSettings: '"opsz" 14',
                color: 'var(--color-blue-300)',
              }}
            >
              {card.body}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full" style={{ maxWidth: '1400px' }}>
        <TestimonialSection
          hideHeader
          quote={testimonial.quote}
          authorName={testimonial.authorName}
          authorRole={testimonial.authorRole}
          avatarUrl={testimonial.avatarUrl}
          avatarAlt={testimonial.avatarAlt}
          logoUrl={testimonial.logoUrl}
          logoAlt={testimonial.logoAlt}
        />
      </div>
    </section>
  );
}
