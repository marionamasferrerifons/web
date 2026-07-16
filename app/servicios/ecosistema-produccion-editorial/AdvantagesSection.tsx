'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ventajas = [
  {
    label: 'VENTAJA 1',
    title: 'Progresivo',
    desc: 'Empieza con una tipología de contenido, valida el impacto y amplía cuando veas resultados. Sin grandes inversiones iniciales ni actos de fe.',
  },
  {
    label: 'VENTAJA 2',
    title: 'Activo propio',
    desc: 'Todo lo construido te pertenece. Vive en archivos que controlas tú, compatible con las herramientas de hoy y las del futuro.',
  },
  {
    label: 'VENTAJA 3',
    title: 'No disruptivo',
    desc: 'Se integra en tus flujos y herramientas actuales. Sin cambios forzados ni curvas de aprendizaje.',
  },
  {
    label: 'VENTAJA 4',
    title: 'Escalable hacia IA privada',
    desc: 'Empieza con Claude, ChatGPT o Gemini y migra hacia una instancia privada cuando quieras aumentar la seguridad y el control de costes.',
  },
];

export default function Section5b() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.ventaja-card').forEach((card) => {
        gsap.from(card, {
          y: 24,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%' },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col items-center gap-[64px] xl:gap-[48px] 2xl:gap-[64px] px-[20px] py-[56px]"
      style={{ backgroundColor: 'var(--color-white)' }}
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-[16px] text-center">
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
          [VENTAJAS]
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
          Crea la infraestructura de producción del{' '}
          <span style={{ color: 'var(--color-orange-400)' }}>futuro</span>
        </h2>
      </div>

      {/* Content */}
      <div
        className="w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-[32px]"
        style={{ maxWidth: '1400px' }}
      >
        {/* Left: 2x2 grid, all text always visible */}
        <div className="grid grid-cols-2 gap-x-[24px] gap-y-[32px] w-full lg:w-[661px] shrink-0">
          {ventajas.map((v, i) => (
            <div
              key={i}
              className="ventaja-card flex flex-col gap-[8px] pt-[16px]"
              style={{ borderTop: '1px solid var(--color-blue-300)' }}
            >
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
                {v.label}
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '20px',
                  lineHeight: '28px',
                  fontWeight: 400,
                  fontVariationSettings: '"opsz" 14',
                  color: 'var(--color-blue-400)',
                }}
              >
                {v.title}
              </p>
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
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Right: illustration — height derives from the SVG's own aspect
            ratio (661:524) instead of fixed per-breakpoint heights, so
            object-contain never has to letterbox and the pink background
            always fills the box edge-to-edge. */}
        <div
          className="order-first lg:order-none w-full lg:w-[661px] shrink-0 rounded-[24px] overflow-hidden aspect-[661/524]"
        >
          <img
            src="/s5b-ventajas-diagram.svg"
            alt="GEM Especialista workflow"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
