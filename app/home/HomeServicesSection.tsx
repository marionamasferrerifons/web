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

// Il·lustracions reutilitzades de cada pàgina de servei, amb el fons del seu color.
const SERVICES = [
  {
    href: '/servicios/estrategia-de-ia',
    title: 'Estrategia de IA',
    body: 'Te ayudo a tomar decisiones sobre IA, valorar oportunidades y dirigir las iniciativas de tu editorial. Para resolver una cuestión concreta o para liderar proyectos que requieren continuidad.',
    link: 'Ver estrategia de IA',
    illustration: '/section3-illu-2.svg',
    illustrationBg: 'var(--color-green)',
  },
  {
    href: '/servicios/produccion-editorial-con-ia',
    title: 'Producción editorial con IA',
    body: 'Creo y edito materiales educativos, reviso los contenidos que ya generáis o preparo un sistema para que tu equipo pueda producir contenidos publicables con IA.',
    link: 'Ver producción editorial con IA',
    illustration: '/produccion-procesos.svg',
    illustrationBg: 'var(--color-orange-100)',
  },
  {
    href: '/servicios/formacion-en-ia',
    title: 'Formación en IA',
    body: 'Te ayudo a entender y dominar la IA y a aplicar lo aprendido a tu trabajo editorial. Con opciones para profesionales individuales y formación adaptada a tu equipo.',
    link: 'Ver formación en IA',
    illustration: '/formacion-curso.svg',
    illustrationBg: 'var(--color-coral-100)',
  },
];

/**
 * Secció 3 de la home (`#servicios`) — mateixa visualització que les
 * modalitats de Producción (ModalitiesSection): marc blanc amb tres targetes
 * grises, il·lustració a dalt i files alineades amb CSS subgrid. Sense
 * numeració: són opcions independents, no fases. Per sota de `lg`, una columna.
 */
export default function HomeServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from('.home-services-header > *', {
        y: 24, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.home-services-header', start: 'top 85%' },
      });
      gsap.from('.home-service-card', {
        y: 32, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.home-services-grid', start: 'top 85%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="w-full flex justify-center py-[64px] md:py-[96px] px-[20px] md:px-[40px] scroll-mt-[var(--navbar-height)]"
      style={{ backgroundColor: 'var(--color-grey)' }}
    >
      <div className="w-full flex flex-col gap-[48px]" style={{ maxWidth: '1160px' }}>
        <div className="home-services-header flex flex-col items-center gap-[16px] text-center">
          <SectionTag color="var(--color-text-secondary)">[Servicios]</SectionTag>
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-l)',
              lineHeight: 'var(--text-title-l--line-height)',
              fontWeight: 400,
              color: 'var(--color-blue-400)',
            }}
          >
            ¿Cómo puedo <span style={{ color: 'var(--color-orange-400)' }}>ayudarte</span>?
          </h2>
          <p style={{ ...bodyL, color: 'var(--color-text-secondary)', maxWidth: '640px', textWrap: 'balance' }}>
            Adapto mi trabajo a las necesidades concretas de tu editorial, a tus objetivos y a cómo trabaja tu equipo.
          </p>
        </div>

        <div className="bg-white p-[16px] md:p-[40px]" style={{ borderRadius: '24px' }}>
          <div className="home-services-grid grid grid-cols-1 lg:grid-cols-3 gap-[16px]">
            {SERVICES.map((s) => (
              <article
                key={s.href}
                className="home-service-card grid p-[24px]"
                style={{
                  backgroundColor: 'var(--color-grey)',
                  borderRadius: '16px',
                  gridTemplateRows: 'subgrid',
                  gridRow: 'span 3',
                  rowGap: 0,
                }}
              >
                <div
                  className="rounded-[12px] overflow-hidden mb-[28px]"
                  style={{ backgroundColor: s.illustrationBg, height: '220px' }}
                >
                  <img src={s.illustration} alt="" className="w-full h-full object-cover object-left-top" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <h3
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: 'var(--text-title-s)',
                      lineHeight: 'var(--text-title-s--line-height)',
                      fontWeight: 400,
                      color: 'var(--color-blue-400)',
                    }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ ...bodyL, color: 'var(--color-text-secondary)' }}>{s.body}</p>
                </div>
                <Link
                  href={s.href}
                  className="group inline-flex items-center gap-[12px] min-h-[44px] mt-[20px] self-start uppercase text-text-accent focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px]"
                  style={{
                    fontFamily: 'var(--font-dm-mono)',
                    fontWeight: 400,
                    fontSize: 'var(--text-body-accent-mono)',
                    lineHeight: 'var(--text-body-accent-mono--line-height)',
                    letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                    outlineColor: 'var(--color-blue-800)',
                  }}
                >
                  {s.link}
                  <span className="flex items-center justify-center bg-orange rounded-full shrink-0" style={{ width: '32px', height: '32px' }}>
                    <img
                      src="/arrow-white.svg"
                      alt=""
                      className="transition-transform duration-300 ease-out group-hover:rotate-45"
                      style={{ width: '14px', height: '14px' }}
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
