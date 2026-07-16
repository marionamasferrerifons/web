'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BOOKING_URL } from '@/lib/constants';

const card1Workshops = [
  {
    label: 'WORKSHOP 1',
    title: 'Innovar la propuesta de valor',
    duration: '4 horas',
    format: 'In-company',
    description: 'Exploramos cómo reimaginar el valor que ofreces a tus usuarios, entendiendo sus necesidades y descubriendo cómo la IA puede ayudarnos a satisfacerlas.',
    outcomes: [
      'Identificar oportunidades concretas para crear nuevos productos y servicios educativos',
      'Redefinir tu propuesta de valor para que sea más relevante en un mundo transformado por la tecnología',
      'Generar hipótesis de innovación validadas con criterio editorial y pedagógico',
    ],
  },
  {
    label: 'WORKSHOP 2',
    title: 'Innovar la relación con los clientes',
    duration: '4 horas',
    format: 'In-company',
    description: 'Descubrimos cómo usar la IA para mejorar la experiencia del alumnado, el profesorado y los centros educativos, creando relaciones más profundas y modelos de negocio más sostenibles.',
    outcomes: [
      'Diseñar experiencias personalizadas que aumenten la satisfacción y retención.',
      'Explorar nuevos modelos de ingresos y canales de relación con clientes.',
      'Entender cómo la IA cambia las expectativas de tus usuarios.',
    ],
  },
  {
    label: 'WORKSHOP 3',
    title: 'Innovar los procesos operativos',
    duration: '4 horas',
    format: 'In-company',
    description: 'Analizamos cómo la IA puede hacer tu editorial más eficiente. Observamos tus procesos internos para identificar dónde la IA genera mayor impacto operativo.',
    outcomes: [
      'Reducir tiempos y costes en procesos automatizables manteniendo altos estándares de calidad.',
      'Liberar talento creativo para tareas de mayor valor estratégico.',
      'Crear una editorial más ágil y preparada para el futuro.',
    ],
  },
];

const linkStyle = {
  fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
  fontSize: 'var(--text-body-m)',
  lineHeight: 'var(--text-body-m--line-height)',
};

function ServiceLink({ open, onToggle }: { open?: boolean; onToggle?: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="group flex items-end gap-[4px] border-b border-orange w-fit cursor-pointer bg-transparent hover:bg-white transition-colors duration-200"
    >
      <span className="text-orange uppercase py-[5px]" style={linkStyle}>
        {open ? 'ver menos del servicio' : 'ver más del servicio'}
      </span>
      <img
        src={open ? '/link-minus.svg' : '/link-arrow.svg'}
        alt=""
        className="size-[20px] mb-[5px] transition-transform duration-200 group-hover:rotate-45"
        aria-hidden="true"
      />
    </button>
  );
}

export default function ServiciosClient() {
  const [card1Open, setCard1Open] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(0);
  const [card2Open, setCard2Open] = useState(false);
  const [card3Open, setCard3Open] = useState(false);

  const ws = card1Workshops[selectedWorkshop];

  const heroRef = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const heroCtx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-tag',      { y: -24, opacity: 0, duration: 0.6 })
        .from('.hero-title',    { y: 64,  opacity: 0, duration: 1.0 }, '-=0.35')
        .from('.hero-body',     { y: 40,  opacity: 0, duration: 0.8 }, '-=0.55')
        .from('.hero-cta',      { y: 24,  opacity: 0, duration: 0.6 }, '-=0.45')
        .from('.hero-vector-r', { x: 40,  opacity: 0, duration: 1.0 }, '-=0.8')
        .from('.hero-vector-l', { x: -40, opacity: 0, duration: 1.0 }, '<');
    }, heroRef);

    const s2Ctx = gsap.context(() => {
      gsap.from('.s2-ellipse', {
        scale: 0.85,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.s2-ellipse', start: 'top 85%' },
      });

      gsap.from('.s2-title', {
        y: 48,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.s2-title', start: 'top 80%' },
      });

      gsap.from('.s2-item', {
        y: 32,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: '.s2-item', start: 'top 80%' },
      });
    }, section2Ref);

    const s3Ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: '.s3-header', start: 'top 80%' },
        defaults: { ease: 'power3.out' },
      });

      tl.from('.s3-tag',      { y: -20, opacity: 0, duration: 0.5 })
        .from('.s3-title',    { y: 48,  opacity: 0, duration: 0.9 }, '-=0.2')
        .from('.s3-subtitle', { y: 32,  opacity: 0, duration: 0.7 }, '-=0.5');

      gsap.utils.toArray<Element>('.s3-card').forEach((card) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%' },
        });
      });
    }, section3Ref);

    return () => {
      heroCtx.revert();
      s2Ctx.revert();
      s3Ctx.revert();
    };
  }, []);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative w-full overflow-hidden bg-green flex flex-col items-center pt-[calc(var(--navbar-height)+80px)] pb-[56px] min-h-[660px] px-[20px] md:px-0">

        <img
          src="/hero-vector-right.svg"
          alt=""
          className="hero-vector-r absolute right-0 top-[111px] translate-x-3"
          style={{ width: '176.53px', height: '101.51px' }}
          aria-hidden="true"
        />

        <img
          src="/hero-vector-left.svg"
          alt=""
          className="hero-vector-l absolute left-0 top-[369px] -translate-x-8"
          style={{ width: '176.53px', height: '101.51px' }}
          aria-hidden="true"
        />

        <div className="relative flex flex-col items-center gap-[45px] w-full" style={{ zIndex: 1 }}>

          <div className="flex flex-col items-center gap-4 text-center w-full" style={{ maxWidth: '809px' }}>
            <p
              className="hero-tag text-blue-400 opacity-65 uppercase whitespace-nowrap overflow-hidden text-ellipsis w-full"
              style={{
                fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
                fontSize: 'var(--text-body-accent-mono)',
                lineHeight: 'var(--text-body-accent-mono--line-height)',
                letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
              }}
            >
              [ESTRATEGIA EDITORIAL]
            </p>
            <h1
              className="hero-title text-blue-500"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 'var(--text-title-xxl)',
                lineHeight: 'var(--text-title-xxl--line-height)',
                fontWeight: 400,
                fontVariationSettings: '"opsz" 14',
              }}
            >
              Diseña el{' '}
              <span className="text-blue-50">futuro</span>
              {' '}de tu editorial con una estrategia propia y rigurosa
            </h1>
          </div>

          <div className="flex flex-col items-center gap-6 w-full" style={{ maxWidth: '570px' }}>
            <p
              className="hero-body text-blue-300 text-center"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 'var(--text-body-l)',
                lineHeight: 'var(--text-body-l--line-height)',
                fontWeight: 300,
                fontVariationSettings: '"opsz" 14',
                maxWidth: '468px',
              }}
            >
              En un sector en plena transformación, diseñamos juntos una estrategia que integre la IA con criterio editorial y pedagógico, generando una ventaja competitiva sostenible.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta group flex items-center gap-4 bg-grey hover:bg-white rounded-full pl-7 pr-3 py-2 transition-colors duration-[330ms] ease-linear"
            >
              <span
                className="text-orange uppercase"
                style={{
                  fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
                  fontSize: 'var(--text-body-accent-mono)',
                  lineHeight: 'var(--text-body-accent-mono--line-height)',
                  letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                }}
              >
                RESERVAR UNA LLAMADA
              </span>
              <span className="flex items-center justify-center bg-orange rounded-full shrink-0 size-[27px]">
                <img src="/arrow-white.svg" alt="" className="size-4 transition-transform duration-300 ease-out group-hover:rotate-45" aria-hidden="true" />
              </span>
            </a>
          </div>

        </div>

      </section>

      {/* Section 2 — ¿Te pasa que...? */}
      <section ref={section2Ref} className="relative bg-grey overflow-hidden pt-[64px] px-[20px] md:px-0" style={{ minHeight: '780px' }}>

        <img
          src="/section2-ellipse.svg"
          alt=""
          className="s2-ellipse absolute left-1/2 -translate-x-1/2"
          style={{ width: '800px', height: '800px', top: '-78px', zIndex: 0 }}
          aria-hidden="true"
        />

        <div
          className="relative mx-auto flex flex-col items-center gap-[40px] py-[64px]"
          style={{ maxWidth: '1161px', zIndex: 1 }}
        >
          <h2
            className="s2-title text-blue-400"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-xl)',
              lineHeight: 'var(--text-title-xl--line-height)',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
            }}
          >
            ¿Te pasa que...?
          </h2>

          <div className="flex flex-col gap-[16px] items-center" style={{ maxWidth: '664px' }}>
            {[
              { dot: 'var(--color-blue-300)',   text: 'Sientes incertidumbre y miedo ante la avalancha de IA' },
              { dot: 'var(--color-orange-200)', text: 'No tienes claro qué rol va a jugar tu editorial en el futuro educativo' },
              { dot: 'var(--color-blue-300)',   text: 'Los últimos proyectos de innovación no han generado el impacto esperado' },
              { dot: 'var(--color-orange)',     text: 'Las pruebas con la IA no han estado a la altura de los estándares de tu editorial' },
              { dot: 'var(--color-blue-100)',   text: 'Tienes miedo a malgastar presupuesto en modas tecnológicas' },
              { dot: 'var(--color-orange-200)', text: 'Las consultoras generalistas no comprenden las particularidades de nuestro sector' },
            ].map(({ dot, text }, i) => (
              <div key={i} className="s2-item flex items-center gap-[8px] bg-white rounded-[8px] p-[14px]">
                <div className="rounded-full shrink-0 size-[10px]" style={{ backgroundColor: dot }} />
                <p
                  className="text-blue-300"
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 'var(--text-body-m)',
                    lineHeight: 'var(--text-body-m--line-height)',
                    fontWeight: 300,
                    fontVariationSettings: '"opsz" 14',
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Section 3 — Lo que ofrezco */}
      <section ref={section3Ref} className="bg-grey py-[56px] px-[20px]">
        <div className="mx-auto flex flex-col gap-[40px]" style={{ maxWidth: '1400px' }}>

          {/* Header */}
          <div className="s3-header flex flex-col items-center gap-[16px] text-center">
            <p
              className="s3-tag text-blue-300 opacity-65 uppercase"
              style={{
                fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
                fontSize: 'var(--text-body-accent-mono)',
                lineHeight: 'var(--text-body-accent-mono--line-height)',
                letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
              }}
            >
              [LO QUE OFREZCO]
            </p>
            <div className="flex flex-col items-center gap-[16px]" style={{ maxWidth: '684px' }}>
              <h2
                className="s3-title text-blue-400"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'var(--text-title-l)',
                  lineHeight: 'var(--text-title-l--line-height)',
                  fontWeight: 400,
                  fontVariationSettings: '"opsz" 14',
                }}
              >
                <span className="text-orange-400">Estrategia</span>{' '}y{' '}
                <span className="text-orange-400">dirección</span>{' '}
                para navegar la incertidumbre
              </h2>
              <p
                className="s3-subtitle text-blue-300"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'var(--text-body-m)',
                  lineHeight: 'var(--text-body-m--line-height)',
                  fontWeight: 300,
                  fontVariationSettings: '"opsz" 14',
                  maxWidth: '453px',
                }}
              >
                Te ofrezco tres modalidades de colaboración para explorar cómo navegar el nuevo paradigma de forma sensata y protegiendo la identidad de tu editorial.
              </p>
            </div>
          </div>

          {/* Service cards */}
          <div className="flex flex-col gap-[24px]">

            {/* Card 1 — expandable */}
            <div className="s3-card bg-white rounded-[24px] p-[32px] md:p-[40px] flex flex-col gap-[40px]">

              {/* Main content */}
              <div className="flex flex-col gap-[24px] md:flex-row md:items-start md:justify-between md:h-[419px]">
                <div className="flex flex-col gap-[24px] md:justify-between md:h-full" style={{ maxWidth: '652px' }}>
                  <div className="flex flex-col gap-[24px]">
                    <h3
                      className="text-blue-400"
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: 'var(--text-title-m)',
                        lineHeight: 'var(--text-title-m--line-height)',
                        fontWeight: 400,
                        fontVariationSettings: '"opsz" 14',
                      }}
                    >
                      Explorar nuevas oportunidades estratégicas
                    </h3>
                    <p
                      className="text-blue-300"
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: 'var(--text-body-l)',
                        lineHeight: 'var(--text-body-l--line-height)',
                        fontWeight: 300,
                        fontVariationSettings: '"opsz" 14',
                      }}
                    >
                      Workshops de innovación diseñados específicamente para editoriales educativas. Cada uno te permite descubrir oportunidades reales en áreas clave de tu negocio.
                    </p>
                  </div>
                  <ServiceLink open={card1Open} onToggle={() => setCard1Open(!card1Open)} />
                </div>
                <div className="order-first md:order-last rounded-[16px] overflow-hidden h-[260px] w-full md:h-full md:w-[586px] md:shrink-0" style={{ backgroundColor: '#cfece7' }}>
                  <img src="/section3-illu-1.svg" alt="" className="size-full object-cover" aria-hidden="true" />
                </div>
              </div>

              {/* Expanded section */}
              {card1Open && (
                <div className="flex flex-col gap-[24px]">

                  {/* Workshop tabs */}
                  <div className="flex gap-[40px]">
                    {card1Workshops.map((workshop, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedWorkshop(i)}
                        className="flex-1 text-left py-[20px] cursor-pointer"
                        style={{
                          background: 'transparent',
                          borderBottom: `2px solid ${selectedWorkshop === i ? 'var(--color-orange-400)' : 'var(--color-blue-100)'}`,
                        }}
                      >
                        <p
                          className="text-blue-300"
                          style={{
                            fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
                            fontSize: 'var(--text-body-accent-mono)',
                            lineHeight: 'var(--text-body-accent-mono--line-height)',
                            letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                          }}
                        >
                          {workshop.label}
                        </p>
                        <p
                          className="mt-[4px]"
                          style={{
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: 'var(--text-body-xl)',
                            lineHeight: 'var(--text-body-xl--line-height)',
                            fontWeight: 300,
                            fontVariationSettings: '"opsz" 14',
                            color: selectedWorkshop === i ? 'var(--color-blue-400)' : 'var(--color-blue-300)',
                          }}
                        >
                          {workshop.title}
                        </p>
                      </button>
                    ))}
                  </div>

                  {/* Workshop detail panel */}
                  <div className="bg-grey rounded-[16px] p-[32px]">

                    {/* Label + badges */}
                    <div className="flex items-center justify-between">
                      <p
                        className="text-blue-300"
                        style={{
                          fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
                          fontSize: 'var(--text-body-accent-mono)',
                          lineHeight: 'var(--text-body-accent-mono--line-height)',
                          letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                        }}
                      >
                        {ws.label}
                      </p>
                      <div className="flex gap-[8px]">
                        {[ws.duration, ws.format].map((badge) => (
                          <span
                            key={badge}
                            className="bg-white rounded-full px-[16px] py-[4px] text-blue-400"
                            style={{
                              fontFamily: 'var(--font-dm-sans)',
                              fontSize: 'var(--text-body-accent-mono)',
                              fontWeight: 300,
                            }}
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Title */}
                    <h4
                      className="text-blue-400 mt-[4px]"
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: 'var(--text-title-s)',
                        lineHeight: 'var(--text-title-s--line-height)',
                        fontWeight: 400,
                        fontVariationSettings: '"opsz" 14',
                      }}
                    >
                      {ws.title}
                    </h4>

                    {/* Description + outcomes */}
                    <div className="flex flex-col gap-[24px] md:flex-row md:gap-[40px] mt-[16px]">
                      <p
                        className="text-blue-300 flex-1"
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: 'var(--text-body-m)',
                          lineHeight: 'var(--text-body-m--line-height)',
                          fontWeight: 300,
                          fontVariationSettings: '"opsz" 14',
                        }}
                      >
                        {ws.description}
                      </p>
                      <div className="flex-1 flex flex-col gap-[16px] mt-[8px]">
                        <p
                          className="text-blue-300"
                          style={{
                            fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
                            fontSize: 'var(--text-body-accent-mono)',
                            lineHeight: 'var(--text-body-accent-mono--line-height)',
                            letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                          }}
                        >
                          [LO QUE CONSEGUIRÁS]
                        </p>
                        {ws.outcomes.map((outcome, i) => (
                          <div key={i} className="flex items-center gap-[12px]">
                            <span className="bg-green rounded-full size-[24px] flex items-center justify-center shrink-0">
                              <img src="/hero-arrow.svg" alt="" className="size-[12px]" aria-hidden="true" />
                            </span>
                            <p
                              className="text-blue-400"
                              style={{
                                fontFamily: 'var(--font-dm-sans)',
                                fontSize: 'var(--text-body-m)',
                                lineHeight: 'var(--text-body-m--line-height)',
                                fontWeight: 300,
                                fontVariationSettings: '"opsz" 14',
                              }}
                            >
                              {outcome}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              )}

            </div>

            {/* Card 2 — expandable */}
            <div className="s3-card bg-white rounded-[24px] p-[32px] md:p-[40px] flex flex-col gap-[64px]">
              <div className="flex flex-col gap-[24px] md:flex-row md:items-start md:justify-between md:h-[419px]">
                <div className="flex flex-col gap-[24px] md:justify-between md:h-full" style={{ maxWidth: '652px' }}>
                  <div className="flex flex-col gap-[24px]">
                    <h3
                      className="text-blue-400"
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: 'var(--text-title-m)',
                        lineHeight: 'var(--text-title-m--line-height)',
                        fontWeight: 400,
                        fontVariationSettings: '"opsz" 14',
                      }}
                    >
                      Diseñar una hoja de ruta clara y medible
                    </h3>
                    <p
                      className="text-blue-300"
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: 'var(--text-body-l)',
                        lineHeight: 'var(--text-body-l--line-height)',
                        fontWeight: 300,
                        fontVariationSettings: '"opsz" 14',
                      }}
                    >
                      Un programa intensivo para tener claro qué hacer y cómo hacerlo. Conseguirás un plan de acción a un año con un horizonte estratégico de tres años.
                    </p>
                  </div>
                  <ServiceLink open={card2Open} onToggle={() => setCard2Open(!card2Open)} />
                </div>
                <div className="order-first md:order-last rounded-[16px] overflow-hidden h-[260px] w-full md:h-full md:w-[586px] md:shrink-0" style={{ backgroundColor: '#cfece7' }}>
                  <img src="/section3-illu-2.svg" alt="" className="size-full object-cover" aria-hidden="true" />
                </div>
              </div>

              {card2Open && (
                <div className="flex flex-col gap-[40px]">

                  {/* Programme panel */}
                  <div className="bg-grey rounded-[16px] p-[32px] flex flex-col gap-[40px]">

                    <div className="flex flex-col gap-[16px] md:flex-row md:items-start md:justify-between">
                      <div className="flex flex-col gap-[24px]" style={{ maxWidth: '610px' }}>
                        <h4
                          className="text-blue-400"
                          style={{
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: 'var(--text-title-s)',
                            lineHeight: 'var(--text-title-s--line-height)',
                            fontWeight: 400,
                            fontVariationSettings: '"opsz" 14',
                          }}
                        >
                          Programa de consultoría estratégica
                        </h4>
                        <p
                          className="text-blue-300"
                          style={{
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: 'var(--text-body-m)',
                            lineHeight: 'var(--text-body-m--line-height)',
                            fontWeight: 300,
                            fontVariationSettings: '"opsz" 14',
                          }}
                        >
                          Un proceso colaborativo en el que construimos el marco estratégico completo para adoptar la IA con rigor y alineación empresarial.
                        </p>
                      </div>
                      <span
                        className="bg-white rounded-full px-[24px] py-[4px] text-blue-400 shrink-0"
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: 'var(--text-body-m)',
                          lineHeight: 'var(--text-body-m--line-height)',
                          fontWeight: 300,
                        }}
                      >
                        5 semanas
                      </span>
                    </div>

                    {/* Weekly rows */}
                    <div className="flex flex-col">
                      {[
                        { label: 'SEMANA 1', title: 'Diagnóstico profundo', detail: 'Llevamos a cabo un análisis interno, externo, de competidores y de escenarios futuros de la industria editorial y educativa.' },
                        { label: 'SEMANA 2', title: 'Definición de objetivos estratégicos', detail: 'Establecemos metas claras de negocio que guíen cualquier decisión posterior' },
                        { label: 'SEMANA 3', title: 'Detección de oportunidades', detail: 'Identificamos áreas de oportunidad en las que la IA puede contribuir a los objetivos estratégicos de la editorial' },
                        { label: 'SEMANA 4', title: 'Priorización y planificación', detail: 'Exploramos y priorizamos iniciativas, evaluamos proveedores y definimos gobernanza' },
                        { label: 'SEMANA 5', title: 'Hoja de ruta final', detail: 'Entrega del plan estratégico completo con calendario definido, responsables claros y métricas de impacto para la evaluación' },
                      ].map(({ label, title, detail }, i) => (
                        <div
                          key={i}
                          className="group flex items-center justify-between p-[24px] cursor-default"
                          style={{
                            borderTop: i === 0 ? '1px solid var(--color-blue-300)' : 'none',
                            borderBottom: '1px solid var(--color-blue-300)',
                          }}
                        >
                          <div className="flex items-center gap-[72px]">
                            <p
                              className="text-blue-300 shrink-0"
                              style={{
                                fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
                                fontSize: 'var(--text-body-accent-mono)',
                                lineHeight: 'var(--text-body-accent-mono--line-height)',
                                letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                                width: '69px',
                              }}
                            >
                              {label}
                            </p>
                            <p
                              className="text-blue-400"
                              style={{
                                fontFamily: 'var(--font-dm-sans)',
                                fontSize: 'var(--text-body-xl)',
                                lineHeight: 'var(--text-body-xl--line-height)',
                                fontWeight: 300,
                                fontVariationSettings: '"opsz" 14',
                              }}
                            >
                              {title}
                            </p>
                          </div>

                          <div className="relative flex items-center" style={{ maxWidth: '591px' }}>
                            <span className="absolute right-0 flex items-center justify-center bg-orange rounded-full shrink-0 size-[28px] group-hover:opacity-0 transition-opacity duration-200">
                              <img src="/hero-arrow.svg" alt="" className="size-[14px]" aria-hidden="true" />
                            </span>
                            <div className="flex items-center gap-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <div className="bg-green rounded-full shrink-0 size-[16px]" />
                              <p
                                className="text-blue-300"
                                style={{
                                  fontFamily: 'var(--font-dm-sans)',
                                  fontSize: 'var(--text-body-m)',
                                  lineHeight: 'var(--text-body-m--line-height)',
                                  fontWeight: 300,
                                  fontVariationSettings: '"opsz" 14',
                                }}
                              >
                                {detail}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* [LO QUE CONSEGUIRÁS] */}
                  <div className="flex flex-col gap-[16px]">
                    <p
                      className="text-blue-300"
                      style={{
                        fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
                        fontSize: 'var(--text-body-accent-mono)',
                        lineHeight: 'var(--text-body-accent-mono--line-height)',
                        letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                      }}
                    >
                      [LO QUE CONSEGUIRÁS]
                    </p>
                    <div className="flex flex-col gap-[24px] md:flex-row md:gap-[40px]">
                      {[
                        'Una visión clara del rol estratégico que debe jugar tu editorial en la era de la IA',
                        'Una hoja de ruta priorizada y realista, adaptada a tus recursos y cultura.',
                        'Criterio sólido para tomar decisiones de inversión con confianza y seguridad',
                      ].map((text, i) => (
                        <div key={i} className="flex flex-1 items-center gap-[16px]">
                          <img src="/outcome-icon.svg" alt="" className="size-[32px] shrink-0" aria-hidden="true" />
                          <p
                            className="text-blue-400"
                            style={{
                              fontFamily: 'var(--font-dm-sans)',
                              fontSize: 'var(--text-body-l)',
                              lineHeight: 'var(--text-body-l--line-height)',
                              fontWeight: 300,
                              fontVariationSettings: '"opsz" 14',
                            }}
                          >
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}
            </div>

            {/* Card 3 — expandable */}
            <div className="s3-card bg-white rounded-[24px] p-[32px] md:p-[40px] flex flex-col gap-[64px]">
              <div className="flex flex-col gap-[24px] md:flex-row md:items-start md:justify-between md:h-[419px]">
                <div className="flex flex-col gap-[24px] md:justify-between md:h-full" style={{ maxWidth: '652px' }}>
                  <div className="flex flex-col gap-[24px]">
                    <h3
                      className="text-blue-400"
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: 'var(--text-title-m)',
                        lineHeight: 'var(--text-title-m--line-height)',
                        fontWeight: 400,
                        fontVariationSettings: '"opsz" 14',
                      }}
                    >
                      Ejecutar con liderazgo experto y flexible
                    </h3>
                    <p
                      className="text-blue-300"
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: 'var(--text-body-l)',
                        lineHeight: 'var(--text-body-l--line-height)',
                        fontWeight: 300,
                        fontVariationSettings: '"opsz" 14',
                      }}
                    >
                      El servicio de dirección estratégica de IA que necesitas para trabajar de forma sostenida y efectiva. Sin contratación fija y con modalidad flexible.
                    </p>
                  </div>
                  <ServiceLink open={card3Open} onToggle={() => setCard3Open(!card3Open)} />
                </div>
                <div className="order-first md:order-last rounded-[16px] overflow-hidden h-[260px] w-full md:h-full md:w-[586px] md:shrink-0" style={{ backgroundColor: '#cfece7' }}>
                  <img src="/section3-illu-3.svg" alt="" className="size-full object-cover" aria-hidden="true" />
                </div>
              </div>

              {card3Open && (
                <div className="flex flex-col gap-[40px]">

                  <div className="bg-grey rounded-[16px] p-[32px] flex flex-col gap-[24px] md:flex-row md:gap-[40px] md:items-start">

                    <div className="flex-1 flex flex-col gap-[24px]">
                      <h4
                        className="text-blue-400"
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: 'var(--text-title-s)',
                          lineHeight: 'var(--text-title-s--line-height)',
                          fontWeight: 400,
                          fontVariationSettings: '"opsz" 14',
                        }}
                      >
                        CAIO as a Service
                      </h4>
                      <p
                        className="text-blue-300"
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: 'var(--text-body-m)',
                          lineHeight: 'var(--text-body-m--line-height)',
                          fontWeight: 300,
                          fontVariationSettings: '"opsz" 14',
                        }}
                      >
                        Un servicio en el que pagas solo por lo que necesitas, ideal para editoriales que quieren avanzar con rigor, pero que no quieren asumir el coste de una contratación senior.
                      </p>
                    </div>

                    <div className="flex-1 flex flex-col gap-[24px]">
                      <p
                        className="text-blue-300"
                        style={{
                          fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
                          fontSize: 'var(--text-body-accent-mono)',
                          lineHeight: 'var(--text-body-accent-mono--line-height)',
                          letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                        }}
                      >
                        [CÓMO FUNCIONA]
                      </p>
                      {[
                        'Acompañamiento continuo y flexible (reuniones periódicas con dirección y equipos clave)',
                        'Liderazgo estratégico de todas las iniciativas de IA',
                        'Soporte en la toma de decisiones críticas y alineación con los objetivos de negocio',
                        'Transferencia de conocimiento y formación interna progresiva',
                      ].map((text, i) => (
                        <div key={i} className="flex items-center gap-[16px]">
                          <img src="/caio-step-icon.svg" alt="" className="size-[24px] shrink-0" aria-hidden="true" />
                          <p
                            className="text-blue-500"
                            style={{
                              fontFamily: 'var(--font-dm-sans)',
                              fontSize: 'var(--text-body-l)',
                              lineHeight: 'var(--text-body-l--line-height)',
                              fontWeight: 300,
                              fontVariationSettings: '"opsz" 14',
                            }}
                          >
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>

                  </div>

                  <div className="flex flex-col gap-[16px]">
                    <p
                      className="text-blue-300"
                      style={{
                        fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
                        fontSize: 'var(--text-body-accent-mono)',
                        lineHeight: 'var(--text-body-accent-mono--line-height)',
                        letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                      }}
                    >
                      [LO QUE CONSEGUIRÁS]
                    </p>
                    <div className="flex flex-col gap-[24px] md:flex-row md:gap-[40px]">
                      {[
                        'Dirección experta y con criterio sectorial para ejecutar tu estrategia de IA',
                        'Avance constante sin perder el control ni la esencia de tu editorial',
                        'Reducción de riesgos y maximización del retorno de la inversión en IA',
                        'Una aliada estratégica que entiende tanto la tecnología como las particularidades del mundo editorial educativo',
                      ].map((text, i) => (
                        <div key={i} className="flex flex-1 flex-col items-start gap-[16px]">
                          <img src="/outcome-icon.svg" alt="" className="size-[32px] shrink-0" aria-hidden="true" />
                          <p
                            className="text-blue-400"
                            style={{
                              fontFamily: 'var(--font-dm-sans)',
                              fontSize: 'var(--text-body-l)',
                              lineHeight: 'var(--text-body-l--line-height)',
                              fontWeight: 300,
                              fontVariationSettings: '"opsz" 14',
                            }}
                          >
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
