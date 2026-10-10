'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTag from '@/components/service/SectionTag';

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

const OPTIONS = [
  {
    key: 'generalistas',
    title: 'Un sistema sobre herramientas como ChatGPT o Claude',
    body: 'Quizás todavía no habéis incorporado herramientas de IA, o ya tenéis licencias pero os cuesta aprovecharlas. También puede que cada editor experimente por su cuenta. Un sistema compartido os permite agilizar la producción y mantener los criterios de calidad de vuestra editorial.',
    value: 'Permite cubrir una necesidad concreta sin las grandes inversiones que implican los desarrollos a medida. Podemos aprovechar las herramientas que ya tenéis y ampliar el sistema a medida que comprobamos los resultados.',
    helps: [
      'Reviso contigo qué herramienta encaja mejor con tu editorial.',
      'Organizo los materiales de partida, convierto el criterio editorial y pedagógico en instrucciones y configuro los procesos para crear tus contenidos.',
      'Acompaño al equipo para que pueda utilizar el sistema de forma autónoma.',
    ],
  },
  {
    key: 'propia',
    title: 'Un sistema sobre una herramienta desarrollada para tu editorial',
    body: 'Puede que estéis diseñando una nueva herramienta, desarrollándola o intentando incorporarla a vuestro flujo de producción. Necesitáis que responda a vuestro criterio editorial y pedagógico y que sus resultados sean útiles para el equipo.',
    value: 'Una herramienta propia puede conectarse con los sistemas que ya utilizáis. También se puede entrenar específicamente con ejemplos de vuestra editorial para ajustarla a vuestros requisitos concretos.',
    helps: [
      'Trabajo con los responsables editoriales y tecnológicos para definir cómo debe funcionar el sistema.',
      'Preparo los materiales de partida, traduzco el criterio editorial y pedagógico en requisitos y diseño las pruebas para evaluar los resultados.',
      'Acompaño el piloto y su incorporación al trabajo del equipo.',
    ],
  },
];

const BENEFITS = [
  {
    icon: '/s3-icon-result.svg',
    title: 'Más capacidad de producción',
    body: 'Publicar más materiales con el mismo equipo, agilizando las tareas repetitivas y dedicando más tiempo al criterio editorial y pedagógico.',
  },
  {
    icon: '/s3-icon-edition.svg',
    title: 'Ahorro de costes',
    body: 'Reducir las horas de trabajo interno y la necesidad de externalizar determinadas tareas de producción, manteniendo los criterios de calidad acordados.',
  },
  {
    icon: '/s3-icon-knowledge.svg',
    title: 'Implantación progresiva',
    body: 'Empezar por un caso de uso concreto, comprobar su impacto y ampliar el sistema a otros materiales o procesos cuando los resultados lo justifiquen.',
  },
  {
    icon: '/s3-icon-team.svg',
    title: 'Criterios compartidos y resultados consistentes',
    body: 'Las pautas de tu editorial se codifican y el equipo dispone de una base común para producir y revisar los materiales.',
  },
];

/**
 * Secció 3 — què és un sistema de producció amb IA, les dues formes de posar-lo
 * en marxa (comparador de 2 targetes amb subgrid, com el d'Estrategia) i què
 * aporta a l'editorial (4 beneficis, mateix patró que els passos d'Estrategia).
 */
export default function ProductionSystemSection() {
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
              ¿Qué es un{' '}
              <span style={{ color: 'var(--color-orange-400)' }}>sistema de producción</span>
              {' '}con IA?
            </h2>
            <p style={{ ...bodyL, color: 'var(--color-text-secondary)', textWrap: 'pretty' }}>
              Es una forma sistematizada de producir contenidos educativos que combina tus materiales de partida, tu criterio editorial y pedagógico, las herramientas de IA y la validación de tu equipo de edición.
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
            <h2 style={{ ...titleStyle('m'), textWrap: 'balance' }}>Dos formas de ponerlo en marcha</h2>
            <p style={{ ...bodyL, color: 'var(--color-text-secondary)', maxWidth: '600px', textWrap: 'balance' }}>
              Te ayudo a diseñar ese sistema y ponerlo en marcha para que podáis aplicarlo a vuestra producción habitual.
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
                  <SectionTag color="var(--color-text-secondary)">¿Qué aporta esta alternativa?</SectionTag>
                  <p style={{ ...bodyL, color: 'var(--color-blue-500)' }}>{option.value}</p>
                </div>

                <div className="flex flex-col gap-[16px] pt-[24px]" style={{ borderTop: '1px solid var(--color-blue-200)' }}>
                  <SectionTag color="var(--color-text-secondary)">¿En qué te ayudo?</SectionTag>
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
          <h2 className="text-center" style={titleStyle('m')}>¿Qué aporta a tu editorial?</h2>
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
            ¿Todavía estás decidiendo qué iniciativas de IA impulsar?{' '}
            <Link
              href="/servicios/estrategia-de-ia"
              className="underline underline-offset-2 hover:no-underline focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px]"
              style={{ color: 'var(--color-text-accent)', outlineColor: 'var(--color-blue-800)' }}
            >
              Te ayudo con la estrategia de IA
            </Link>
            .
          </p>
        </div>

      </div>
    </section>
  );
}
