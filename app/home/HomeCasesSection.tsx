'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTag from '@/components/service/SectionTag';
import Button from '@/components/service/Button';

// Resums basats en les targetes de cas de les pàgines d'Estrategia i Producción
// (5 i 4 setmanes). Sense nom ni logotip del client, per decisió editorial.
const CASES = [
  {
    tag: '[Estrategia de IA]',
    title: 'Consultoría para detectar oportunidades de negocio y reorientar la inversión en IA',
    body: 'En cinco semanas analizamos el contexto de la editorial y definimos una hoja de ruta con iniciativas priorizadas y proveedores evaluados. El trabajo permitió reorientar el presupuesto y establecer criterios para decidir qué impulsar y qué aplazar.',
    link: 'Ver el caso de estrategia',
    href: '/casos-de-exito/estrategia-de-ia',
  },
  {
    tag: '[Producción editorial con IA]',
    title: 'Desarrollo de un sistema para producir materiales complementarios con Claude',
    body: 'En cuatro semanas preparamos un sistema en Claude para producir guías didácticas, solucionarios, retos, evaluaciones y presentaciones. Codificamos el criterio editorial y pedagógico, configuramos los procesos y formamos al equipo para utilizarlos.',
    link: 'Ver el caso de producción',
    href: '/casos-de-exito/altamar-produccion-editorial-claude',
  },
];

const bodyL = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: 'var(--text-body-l)',
  lineHeight: 'var(--text-body-l--line-height)',
  fontWeight: 300,
} as const;

/**
 * Secció 4 de la home — dues targetes de cas amb la mateixa estructura
 * (etiqueta, títol, resum i botó), alineades amb CSS subgrid. Fons blue-100,
 * com les targetes de cas de les pàgines de servei.
 */
export default function HomeCasesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from('.home-cases-header > *', {
        y: 24, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.home-cases-header', start: 'top 85%' },
      });
      gsap.from('.home-case-card', {
        y: 32, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.home-cases-grid', start: 'top 85%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full flex justify-center py-[64px] md:py-[96px] px-[20px] md:px-[40px] bg-white">
      <div className="w-full flex flex-col gap-[48px]" style={{ maxWidth: '1160px' }}>
        <div className="home-cases-header flex flex-col items-center gap-[16px] text-center">
          <SectionTag color="var(--color-text-secondary)">[Casos de éxito]</SectionTag>
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-l)',
              lineHeight: 'var(--text-title-l--line-height)',
              fontWeight: 400,
              color: 'var(--color-blue-400)',
            }}
          >
            Proyectos que ya he <span style={{ color: 'var(--color-orange-400)' }}>realizado</span>
          </h2>
          <p style={{ ...bodyL, color: 'var(--color-text-secondary)', maxWidth: '640px', textWrap: 'balance' }}>
            Dos proyectos recientes en los que aplicamos la IA a decisiones y procesos reales de una editorial educativa.
          </p>
        </div>

        <div className="home-cases-grid grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
          {CASES.map((c) => (
            <article
              key={c.href}
              className="home-case-card grid p-[24px] md:p-[40px]"
              style={{
                backgroundColor: 'var(--color-blue-100)',
                borderRadius: '24px',
                gridTemplateRows: 'subgrid',
                gridRow: 'span 4',
                rowGap: 0,
              }}
            >
              <div className="pb-[16px]">
                <SectionTag color="var(--color-text-secondary-strong)">{c.tag}</SectionTag>
              </div>
              <h3
                className="pb-[16px]"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'var(--text-title-s)',
                  lineHeight: 'var(--text-title-s--line-height)',
                  fontWeight: 400,
                  color: 'var(--color-blue-400)',
                  textWrap: 'balance',
                }}
              >
                {c.title}
              </h3>
              <p style={{ ...bodyL, color: 'var(--color-text-secondary-strong)' }}>{c.body}</p>
              <div className="pt-[32px]">
                <Button href={c.href} variant="primary">
                  {c.link}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
