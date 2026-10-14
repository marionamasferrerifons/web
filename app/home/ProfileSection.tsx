'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/components/service/Button';
import SectionTag from '@/components/service/SectionTag';

const iconPath = {
  stroke: 'var(--color-orange)',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

const CONTRIBUTIONS: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: 'Conozco el trabajo editorial',
    body: 'He trabajado en autoría, edición y gestión de proyectos. Conozco las exigencias del contenido, los calendarios y la coordinación entre profesionales.',
    // Llibre obert
    icon: <path d="M4 7c4-2 8-2 12 1v17c-4-3-8-3-12-1Z M28 7c-4-2-8-2-12 1v17c4-3 8-3 12-1Z" {...iconPath} />,
  },
  {
    title: 'Entiendo el uso educativo de los contenidos',
    body: 'Mi experiencia docente me ayuda a valorar si un material es claro, adecuado a su nivel y útil para enseñar y aprender.',
    // Birret
    icon: <path d="M2 12l14-6 14 6-14 6Z M8 15v6c4 4 12 4 16 0v-6 M30 12v8" {...iconPath} />,
  },
  {
    title: 'Trabajo con la IA en la práctica',
    body: 'Aplico IA a procesos editoriales reales. Pruebo sus posibilidades, reviso sus resultados y ajusto las instrucciones y los procesos según lo que necesita cada proyecto.',
    // Xip
    icon: (
      <path
        d="M11 9h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2Z M13 13h6v6h-6Z M9 13H5M9 19H5M27 13h-4M27 19h-4M13 9V5M19 9V5M13 27v-4M19 27v-4"
        {...iconPath}
      />
    ),
  },
];

/**
 * Secció 5 de la home — perfil i diferencial: foto, títol i presentació
 * centrats, i tres aportacions en fila amb icona (mateix patró que «¿Qué
 * aporta a tu editorial?» de Producción), totes visibles sense interacció.
 * La foto és provisional fins que hi hagi les definitives.
 */
export default function ProfileSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from('.profile-intro > *', {
        y: 24, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.profile-intro', start: 'top 85%' },
      });
      gsap.from('.profile-item', {
        y: 24, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.profile-items', start: 'top 85%' },
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
      <div className="w-full flex flex-col gap-[56px]" style={{ maxWidth: '1160px' }}>
        <div className="profile-intro flex flex-col items-center gap-[24px] md:gap-[32px] text-center">
          <Image
            src="/mariona-perfil-provisional.webp"
            alt="Mariona Masferrer"
            width={180}
            height={180}
            className="rounded-full"
          />
          <div className="flex flex-col items-center gap-[16px]">
            <SectionTag color="var(--color-text-secondary)">[Sobre mí]</SectionTag>
            <h2
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 'var(--text-title-l)',
                lineHeight: 'var(--text-title-l--line-height)',
                fontWeight: 400,
                color: 'var(--color-blue-400)',
                maxWidth: '820px',
                textWrap: 'balance',
              }}
            >
              Criterio editorial, experiencia en el aula y{' '}
              <span style={{ color: 'var(--color-orange-400)' }}>práctica con IA</span>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 'var(--text-body-l)',
                lineHeight: 'var(--text-body-l--line-height)',
                fontWeight: 300,
                color: 'var(--color-text-secondary)',
                maxWidth: '720px',
                textWrap: 'balance',
              }}
            >
              Mi experiencia como editora y docente guía mi forma de aplicar la IA: parto de cómo se producen los materiales, de lo que necesitan quienes los utilizan y de los estándares de calidad que deben cumplir.
            </p>
          </div>
        </div>

        <ul className="profile-items grid grid-cols-1 lg:grid-cols-3 gap-[32px]">
          {CONTRIBUTIONS.map((c) => (
            <li
              key={c.title}
              className="profile-item flex flex-col gap-[12px] pt-[24px]"
              style={{ borderTop: '1px solid var(--color-blue-200)' }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">{c.icon}</svg>
              <h3
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'var(--text-body-xl)',
                  lineHeight: 'var(--text-body-xl--line-height)',
                  fontWeight: 400,
                  color: 'var(--color-blue-400)',
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '16px',
                  lineHeight: '24px',
                  fontWeight: 300,
                  color: 'var(--color-text-secondary)',
                }}
              >
                {c.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="flex justify-center">
          <Button href="/sobre-mi" variant="primary">
            Conoce mi trayectoria
          </Button>
        </div>
      </div>
    </section>
  );
}
