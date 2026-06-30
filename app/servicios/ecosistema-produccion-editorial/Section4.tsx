'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const steps = [
  {
    step: 'PASO 1',
    title: 'Mapeo de contenidos y flujos',
    desc: 'Analizamos todas las tipologías de contenido que produce tu editorial y los flujos de trabajo actuales para entender el punto de partida real.',
  },
  {
    step: 'PASO 2',
    title: 'Selección de oportunidades y KPIs',
    desc: 'Identificamos qué tipologías tienen mayor potencial de optimización y fijamos los indicadores de ahorro de tiempo para la evaluación final.',
  },
  {
    step: 'PASO 3',
    title: 'Codificación del criterio editorial',
    desc: 'Estructuramos el conocimiento editorial y pedagógico acumulado por tu equipo para que la IA pueda trabajar con él de forma consistente.',
  },
  {
    step: 'PASO 4',
    title: 'Desarrollo del ecosistema',
    desc: 'Construimos el sistema: base de conocimiento, configuración de la IA, skills y flujos de producción adaptados a tu editorial.',
  },
  {
    step: 'PASO 5',
    title: 'Testeo y validación',
    desc: 'Probamos el sistema con contenido real de tu editorial. Tu equipo valida los outputs y ajustamos hasta alcanzar tus estándares de calidad.',
  },
  {
    step: 'PASO 6',
    title: 'Implementación y formación',
    desc: 'Desplegamos el sistema en los flujos de trabajo del equipo y los acompañamos para que lo adopten con seguridad y autonomía.',
  },
];

const includes = [
  { icon: '/s4-include-knowledge.svg', title: 'Conocimiento estructurado', desc: 'El criterio editorial de tu equipo, organizado y accesible para la IA.' },
  { icon: '/s4-include-prompt.svg',    title: 'System prompt',             desc: 'Las instrucciones que definen cómo debe comportarse la IA en tu editorial.' },
  { icon: '/s4-include-skills.svg',    title: 'Skills',                    desc: 'Procesos especializados para cada tipología de contenido que produces.' },
  { icon: '/s4-include-agents.svg',    title: 'Agentes',                   desc: 'Automatizaciones que ejecutan secuencias de tareas.' },
  { icon: '/s4-include-prompts.svg',   title: 'Biblioteca de prompts',     desc: 'Los prompts validados y listos para usar en cada caso de uso recurrente.' },
  { icon: '/s4-include-entorno.svg',   title: 'Entorno de producción',     desc: 'El espacio donde tu equipo y la IA trabajan y producen juntos.' },
];

export default function Section4() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from('.s4-header > *', {
        y: 32, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
        scrollTrigger: { trigger: '.s4-header', start: 'top 80%' },
      });
      gsap.from('.s4-card', {
        y: 48, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.s4-card', start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex justify-center py-[56px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-grey)' }}
    >
      <div className="w-full flex flex-col gap-[40px]" style={{ maxWidth: '1400px' }}>

        {/* Header */}
        <div className="s4-header flex flex-col items-center gap-[16px] text-center">
          <p
            className="opacity-65 uppercase"
            style={{
              fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
              fontSize: 'var(--text-body-accent-mono)',
              lineHeight: 'var(--text-body-accent-mono--line-height)',
              letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
              color: 'var(--color-blue-300)',
            }}
          >
            [EN QUÉ CONSISTE]
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
            }}
          >
            Tu editorial tiene <span style={{ color: 'var(--color-orange-400)' }}>criterio</span>.{' '}
            El sistema lo pone a trabajar.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '16px',
              lineHeight: '20px',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-blue-300)',
              maxWidth: '453px',
            }}
          >
            Tu editorial lleva años acumulando un criterio propio que la define. Codificamos este criterio para crear un ecosistema de trabajo donde la IA y tu equipo editorial suman capacidades y multiplican resultados.
          </p>
        </div>

        {/* White card */}
        <div className="s4-card bg-white rounded-[24px] p-[32px] md:p-[40px] flex flex-col gap-[40px]">

          {/* Top: text left + illustration right */}
          <div className="flex flex-col gap-[32px] lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-[24px] lg:justify-between lg:gap-0 lg:min-h-[367px]" style={{ maxWidth: '652px' }}>
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
                Un sistema donde la IA genera el contenido y tus editores lo validan.
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'var(--text-body-l)',
                  lineHeight: 'var(--text-body-l--line-height)',
                  fontWeight: 400,
                  fontVariationSettings: '"opsz" 14',
                  color: 'var(--color-blue-300)',
                }}
              >
                Diseñamos un sistema de producción de contenidos para combinar la velocidad de la IA con la calidad de tu editorial.
              </p>
            </div>
            <div
              className="order-first lg:order-last rounded-[16px] overflow-hidden shrink-0"
              style={{ width: '100%', maxWidth: '541px', height: '367px', backgroundColor: '#f5917a' }}
            >
              <img src="/s4-illustration.png" alt="" className="w-full h-full object-cover" aria-hidden="true" />
            </div>
          </div>

          {/* Steps card */}
          <div
            className="flex flex-col gap-[40px] p-[32px] rounded-[16px] overflow-hidden"
            style={{ backgroundColor: 'var(--color-grey)' }}
          >
            {/* Steps header */}
            <div className="flex flex-col gap-[24px] lg:flex-row lg:items-start lg:justify-between">
              <div className="flex flex-col gap-[24px]">
                <h3
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '32px',
                    lineHeight: '38px',
                    fontWeight: 400,
                    fontVariationSettings: '"opsz" 14',
                    color: 'var(--color-blue-400)',
                  }}
                >
                  ¿Cómo construimos el sistema?
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '16px',
                    lineHeight: '20px',
                    fontWeight: 400,
                    fontVariationSettings: '"opsz" 14',
                    color: 'var(--color-blue-300)',
                    maxWidth: '610px',
                  }}
                >
                  Un proceso en el que construimos, junto a tu equipo, el sistema que reduce el tiempo de producción sin comprometer tus estándares editoriales.
                </p>
              </div>
              <div
                className="flex items-center justify-center rounded-full shrink-0 px-[24px] py-[4px] bg-white"
              >
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '16px',
                    lineHeight: '20px',
                    fontWeight: 400,
                    color: 'var(--color-blue-400)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  RESULTADOS EN 1 SEMANA
                </p>
              </div>
            </div>

            {/* Step rows */}
            <div className="flex flex-col">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="group p-[24px] cursor-pointer border-b overflow-hidden"
                  style={{
                    borderColor: 'var(--color-blue-300)',
                    borderTop: i === 0 ? `1px solid var(--color-blue-300)` : undefined,
                  }}
                >
                  {/* Mobile: stacked layout */}
                  <div className="flex flex-col gap-[16px] lg:hidden">
                    <span
                      style={{
                        fontFamily: 'var(--font-dm-mono)',
                        fontWeight: 400,
                        fontSize: 'var(--text-body-accent-mono)',
                        lineHeight: 'var(--text-body-accent-mono--line-height)',
                        letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                        color: 'var(--color-blue-300)',
                      }}
                    >
                      {s.step}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '24px',
                        lineHeight: '32px',
                        fontWeight: 400,
                        fontVariationSettings: '"opsz" 14',
                        color: 'var(--color-blue-400)',
                      }}
                    >
                      {s.title}
                    </span>
                    <div className="flex gap-[16px] items-start">
                      <span className="shrink-0 rounded-full size-[16px] mt-[2px]" style={{ backgroundColor: 'var(--color-green)' }} />
                      <p
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: '16px',
                          lineHeight: '20px',
                          fontWeight: 400,
                          fontVariationSettings: '"opsz" 14',
                          color: 'var(--color-blue-300)',
                        }}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  {/* Desktop: horizontal layout with hover interaction */}
                  <div className="hidden lg:flex items-center justify-between">
                    {/* Left: step label + title */}
                    <div className="flex gap-[72px] items-center shrink-0">
                      <span
                        style={{
                          fontFamily: 'var(--font-dm-mono)',
                          fontWeight: 400,
                          fontSize: 'var(--text-body-accent-mono)',
                          lineHeight: 'var(--text-body-accent-mono--line-height)',
                          letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                          color: 'var(--color-blue-300)',
                          width: '50px',
                          flexShrink: 0,
                        }}
                      >
                        {s.step}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: '24px',
                          lineHeight: '32px',
                          fontWeight: 400,
                          fontVariationSettings: '"opsz" 14',
                          color: 'var(--color-blue-400)',
                        }}
                      >
                        {s.title}
                      </span>
                    </div>

                    {/* Right: orange arrow (default) → green dot + text (hover) */}
                    <div className="relative flex items-center justify-end shrink-0 h-[32px]" style={{ width: '591px' }}>
                      {/* Orange arrow — hidden on hover */}
                      <div className="absolute right-0 transition-all duration-300 ease-out opacity-100 translate-x-0 group-hover:opacity-0 group-hover:translate-x-4">
                        <span
                          className="flex items-center justify-center rounded-full size-[32px]"
                          style={{ backgroundColor: 'var(--color-orange)' }}
                        >
                          <img src="/hero-arrow.svg" alt="" className="size-[16px]" aria-hidden="true" />
                        </span>
                      </div>

                      {/* Green dot + text — slides in on hover */}
                      <div className="flex gap-[24px] items-center transition-all duration-300 ease-out opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0">
                        <span
                          className="shrink-0 rounded-full size-[16px]"
                          style={{ backgroundColor: 'var(--color-green)' }}
                        />
                        <p
                          style={{
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: '16px',
                            lineHeight: '20px',
                            fontWeight: 400,
                            fontVariationSettings: '"opsz" 14',
                            color: 'var(--color-blue-300)',
                          }}
                        >
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lo que incluye */}
          <div className="flex flex-col gap-[32px]">
            <p
              className="opacity-65 uppercase"
              style={{
                fontFamily: 'var(--font-dm-mono)',
                fontWeight: 400,
                fontSize: 'var(--text-body-accent-mono)',
                lineHeight: 'var(--text-body-accent-mono--line-height)',
                letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                color: 'var(--color-blue-300)',
              }}
            >
              [LO QUE INCLUYE]
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
              {includes.map((item, i) => (
                <div key={i} className="flex flex-col gap-[16px]">
                  <img src={item.icon} alt="" className="size-[28px]" aria-hidden="true" />
                  <div className="flex flex-col gap-[4px]">
                    <p
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '20px',
                        lineHeight: '28px',
                        fontWeight: 600,
                        fontVariationSettings: '"opsz" 14',
                        color: 'var(--color-blue-400)',
                      }}
                    >
                      {item.title}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '20px',
                        lineHeight: '28px',
                        fontWeight: 400,
                        fontVariationSettings: '"opsz" 14',
                        color: 'var(--color-blue-300)',
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
