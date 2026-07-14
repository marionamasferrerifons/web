'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const serviceCards = [
  {
    icon: '/s3-icon-definition.png',
    iconSize: 48,
    title: 'Definición de la idea editorial',
    description: 'Definimos el ADN pedagógico y editorial de tu proyecto para que conecte con el aula actual, garantizando la cobertura del currículo y la identidad de tu editorial.',
  },
  {
    icon: '/s3-icon-coordination.svg',
    iconSize: 32,
    title: 'Coordinación de proyectos',
    description: 'Lidero la ejecución integral de tu proyecto, centralizando la coordinación de profesionales y el control de plazos, calidad y presupuesto.',
  },
  {
    icon: '/s3-icon-edition.svg',
    iconSize: 32,
    title: 'Edición de libros de texto',
    description: 'Reviso el material de autoría buscando coherencia curricular y sentido didáctico y aplicando las mejores prácticas del oficio de editar.',
  },
  {
    icon: '/s3-icon-authoring.svg',
    iconSize: 32,
    title: 'Autoría de contenidos educativos',
    description: 'Desarrollo propuestas educativas integrando enfoques competenciales y metodologías activas para un aprendizaje real y significativo.',
  },
];

const outcomes = [
  'Proyectos entregados con máxima calidad y puntualidad',
  'Escalar tu capacidad de producción de forma flexible, sin aumentar tu plantilla',
  'Reducir los tiempos de desarrollo con la integración responsable de la IA',
];

export default function Section3() {
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
      className="w-full flex justify-center pt-[240px] pb-[56px] px-[20px] md:px-[40px]"
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
              color: 'var(--color-blue-300)',
            }}
          >
            [LO QUE OFREZCO]
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
            Producción editorial externa{' '}
            <span style={{ color: 'var(--color-orange-400)' }}>confiable</span>
            {' '}y{' '}
            <span style={{ color: 'var(--color-orange-400)' }}>eficiente</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-body-m)',
              lineHeight: 'var(--text-body-m--line-height)',
              fontWeight: 300,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-blue-300)',
              maxWidth: '453px',
            }}
          >
            Te ofrezco un apoyo profesional externo para que puedas desarrollar tus proyectos con garantías de calidad.
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
                La capacidad y el expertise que necesitas para tus contenidos educativos
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'var(--text-body-l)',
                  lineHeight: 'var(--text-body-l--line-height)',
                  fontWeight: 300,
                  fontVariationSettings: '"opsz" 14',
                  color: 'var(--color-blue-300)',
                }}
              >
                Aplica la innovación educativa en tus libros de texto, asegurándote de que cada material cumpla con los requisitos curriculares y con las expectativas del profesorado y alumnado.
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
                      color: 'var(--color-blue-300)',
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
                      color: 'var(--color-blue-300)',
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
                color: 'var(--color-blue-300)',
              }}
            >
              [LO QUE CONSEGUIRÁS]
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
