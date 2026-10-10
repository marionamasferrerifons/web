'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const STEPS = [
  {
    number: '01',
    title: 'Análisis de los retos estratégicos de tu negocio',
    body: 'Ponemos sobre la mesa tus objetivos, recursos e idiosincrasia para decidir dónde la IA aporta valor.',
  },
  {
    number: '02',
    title: 'Recomendaciones fundamentadas',
    body: 'Contrastamos alternativas, identificamos riesgos y priorizamos las oportunidades en función de su impacto.',
  },
  {
    number: '03',
    title: 'Hoja de ruta concreta para avanzar con claridad',
    body: 'Definimos qué hacer a continuación, quién debe participar y cómo valorar los resultados.',
  },
];

export default function WorkProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from('.process-header > *', {
        y: 24, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.process-header', start: 'top 85%' },
      });

      gsap.utils.toArray<HTMLElement>('.process-step').forEach((step, i) => {
        gsap.from(step, {
          y: 24, opacity: 0, duration: 0.6, delay: i * 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: step, start: 'top 90%' },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex justify-center py-[64px] md:py-[96px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-white)' }}
    >
      <div className="w-full flex flex-col gap-[48px] md:gap-[64px]" style={{ maxWidth: '1160px' }}>
        <div className="process-header grid grid-cols-1 lg:grid-cols-12 gap-[24px] lg:gap-[40px] items-start">
          <h2
            className="lg:col-span-5"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-l)',
              lineHeight: 'var(--text-title-l--line-height)',
              fontWeight: 400,
              color: 'var(--color-blue-400)',
            }}
          >
            ¿Cómo trabajo?
          </h2>
          <p
            className="lg:col-span-7"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-body-l)',
              lineHeight: 'var(--text-body-l--line-height)',
              fontWeight: 300,
              color: 'var(--color-text-secondary)',
              maxWidth: '640px',
              textWrap: 'pretty',
            }}
          >
            Mi experiencia como editora y docente me permite valorar cómo las decisiones sobre IA afectan a la calidad del contenido publicado, al equipo que lo produce y a quienes lo utilizan.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-[32px] md:gap-[40px]">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="process-step flex flex-col gap-[16px] pt-[24px]"
              style={{ borderTop: '1px solid var(--color-blue-200)' }}
            >
              <div className="flex items-center gap-[12px]">
                <span
                  className="rounded-full shrink-0"
                  style={{ width: '12px', height: '12px', backgroundColor: 'var(--color-green)', outline: '1px solid var(--color-blue-300)' }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-dm-mono)',
                    fontWeight: 400,
                    fontSize: 'var(--text-body-accent-mono)',
                    lineHeight: 'var(--text-body-accent-mono--line-height)',
                    letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {step.number}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'var(--text-body-xl)',
                  lineHeight: 'var(--text-body-xl--line-height)',
                  fontWeight: 400,
                  color: 'var(--color-blue-400)',
                }}
              >
                {step.title}
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
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
