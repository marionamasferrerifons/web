'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTag from '@/components/service/SectionTag';
import Button from '@/components/service/Button';
import { WHATSAPP_URL_ACOMPANAMIENTO, WHATSAPP_URL_CURSO, WHATSAPP_URL_EMPRESAS } from '@/lib/constants';

const SERVICES = [
  {
    id: 'curso',
    tag: '[Curso]',
    // Sense enllaç al curs fins que Cálamo y Cran publiqui la pàgina: llavors,
    // afegir el botó «Ver el curso en Cálamo y Cran» i revisar l'estat.
    status: 'Próximamente',
    title: 'IA para el trabajo de edición',
    // Crèdit editorial: el curs és una coautoria amb Cálamo y Cran.
    credit: {
      label: 'Un curso de',
      authors: ['Mariona Masferrer i Fons', 'Cálamo & Cran'],
      logo: '/calamo-y-cran-sello.png',
      logoAlt: 'Cálamo y Cran',
    },
    body: 'Un curso práctico para incorporar la IA al trabajo editorial de forma estructurada. Empezamos desde las bases y construimos juntos un sistema completo de trabajo. Ideal si quieres empezar con una base sólida y transferible a cualquier proyecto.',
    cta: 'Pregúntame sobre el curso',
    href: WHATSAPP_URL_CURSO,
    illustration: '/formacion-curso.svg',
  },
  {
    id: 'acompanamiento',
    tag: '[Acompañamiento individual]',
    title: 'Convierte la IA en tu gran aliada',
    body: 'Entiendes lo que la IA puede hacer, pero cuando intentas aplicarla a tus proyectos, no siempre sabes por dónde empezar o qué ajustar cuando el resultado no es el esperado. En las sesiones individuales trabajamos sobre tus tareas reales para que la IA se convierta en tu gran aliada.',
    cta: 'Hablar sobre mi acompañamiento',
    href: WHATSAPP_URL_ACOMPANAMIENTO,
    illustration: '/formacion-acompanamiento.svg',
  },
  {
    id: 'empresas',
    tag: '[Formación para empresas]',
    title: 'Haz que tu equipo sea parte del cambio',
    body: 'La IA está transformando los flujos de trabajo en las editoriales. Acompaño a tu equipo en este cambio cultural y operativo: resolvemos dudas reales, generamos confianza y les damos el método que necesitan para adoptar la IA con criterio y autonomía. Formación práctica, adaptada a vuestro contexto y orientada a resultados.',
    cta: 'Hablar sobre la formación de mi equipo',
    href: WHATSAPP_URL_EMPRESAS,
    illustration: '/formacion-empresas.svg',
  },
];

/**
 * Seccions 3, 4 i 6 — els tres serveis en targetes grans alternades, com
 * «Servicios» de la home, però amb el text com a protagonista (3 : 2) i la
 * il·lustració sencera sobre el seu fons coral clar. Cada targeta té el seu
 * `id` perquè hi portin els enllaços de la secció 2.
 */
export default function TrainingServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<Element>('.training-card').forEach((card) => {
        gsap.from(card, {
          y: 40, opacity: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%' },
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
      <div className="w-full flex flex-col gap-[64px]" style={{ maxWidth: '1160px' }}>
        {SERVICES.map((s, i) => {
          const reversed = i % 2 === 1;
          return (
            <article
              key={s.id}
              id={s.id}
              className={`training-card grid grid-cols-1 overflow-hidden bg-white scroll-mt-[calc(var(--navbar-height)+24px)] ${
                reversed ? 'lg:grid-cols-[2fr_3fr]' : 'lg:grid-cols-[3fr_2fr]'
              } lg:min-h-[440px]`}
              style={{ borderRadius: '24px' }}
            >
              <div className={`flex flex-col gap-[24px] p-[24px] md:p-[48px] ${reversed ? 'lg:order-2' : ''}`}>
                <div className="flex flex-col gap-[16px]">
                  <div className="flex flex-wrap items-center gap-x-[12px] gap-y-[8px] min-h-[24px]">
                    <SectionTag color="var(--color-text-secondary)">{s.tag}</SectionTag>
                    {s.status && (
                      <span
                        className="inline-flex items-center gap-[8px] rounded-full px-[12px] py-[2px] uppercase"
                        style={{
                          backgroundColor: 'var(--color-coral-100)',
                          color: 'var(--color-blue-800)',
                          fontFamily: 'var(--font-dm-mono)',
                          fontWeight: 400,
                          fontSize: '12px',
                          lineHeight: '24px',
                          letterSpacing: '-0.5px',
                        }}
                      >
                        <span aria-hidden="true" className="rounded-full bg-orange" style={{ width: '8px', height: '8px' }} />
                        {s.status}
                      </span>
                    )}
                  </div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: 'var(--text-title-m)',
                      lineHeight: 'var(--text-title-m--line-height)',
                      fontWeight: 400,
                      color: 'var(--color-blue-400)',
                      textWrap: 'balance',
                    }}
                  >
                    {s.title}
                  </h2>
                  {s.credit && (
                    <div
                      className="flex items-center gap-[14px] pt-[12px] mt-[4px]"
                      style={{ borderTop: '1px solid var(--color-blue-100)' }}
                    >
                      <img
                        src={s.credit.logo}
                        alt={s.credit.logoAlt}
                        width={48}
                        height={48}
                        className="shrink-0 rounded-full"
                        style={{ width: '48px', height: '48px' }}
                      />
                      <p className="flex flex-col gap-[2px]">
                        <span
                          className="uppercase"
                          style={{
                            fontFamily: 'var(--font-dm-mono)',
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: '16px',
                            letterSpacing: '-0.5px',
                            color: 'var(--color-text-secondary)',
                          }}
                        >
                          {s.credit.label}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: 'var(--text-body-m)',
                            lineHeight: '22px',
                            fontWeight: 400,
                            color: 'var(--color-blue-800)',
                          }}
                        >
                          <span className="whitespace-nowrap">{s.credit.authors[0]}</span>{' '}
                          <span aria-hidden="true" style={{ color: 'var(--color-text-secondary)', fontWeight: 300 }}>×</span>
                          <span className="sr-only">y</span>{' '}
                          <span className="whitespace-nowrap">{s.credit.authors[1]}</span>
                        </span>
                      </p>
                    </div>
                  )}
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 'var(--text-body-l)',
                    lineHeight: 'var(--text-body-l--line-height)',
                    fontWeight: 300,
                    color: 'var(--color-text-secondary)',
                    textWrap: 'pretty',
                  }}
                >
                  {s.body}
                </p>
                <div className="mt-auto">
                  <Button href={s.href} variant="primary" surface="white" icon="chat" wrap>
                    {s.cta}
                  </Button>
                </div>
              </div>
              <div
                className={`relative min-h-[240px] ${reversed ? 'lg:order-1' : ''}`}
                style={{ backgroundColor: 'var(--color-coral-100)' }}
              >
                <img
                  src={s.illustration}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
