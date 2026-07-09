'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Pill({ dot, text, indent = false }: { dot: string; text: string; indent?: boolean }) {
  return (
    <div
      className="s2-pill bg-white inline-flex items-center gap-[8px] p-[14px] rounded-[8px] w-fit"
      style={{ marginLeft: indent ? '80px' : '0' }}
    >
      <div className="rounded-full shrink-0 size-[10px]" style={{ backgroundColor: dot }} />
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
        {text}
      </p>
    </div>
  );
}

export default function Section2() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Scroll-driven color fill for both titles — start nearly invisible
      gsap.fromTo(
        '.fill-title-1',
        { color: 'rgba(5, 66, 167, 0.05)' },
        {
          color: 'rgba(5, 66, 167, 1)',
          scrollTrigger: {
            trigger: '.fill-title-1',
            start: 'top 75%',
            end: 'bottom 40%',
            scrub: 0.5,
          },
        }
      );

      gsap.fromTo(
        '.fill-title-2-blue',
        { color: 'rgba(5, 66, 167, 0.05)' },
        {
          color: 'rgba(5, 66, 167, 1)',
          scrollTrigger: {
            trigger: '.fill-title-2-blue',
            start: 'top 75%',
            end: 'bottom 40%',
            scrub: 0.5,
          },
        }
      );

      gsap.fromTo(
        '.fill-title-2-orange',
        { color: 'rgba(236, 154, 55, 0.05)' },
        {
          color: 'rgba(236, 154, 55, 1)',
          scrollTrigger: {
            trigger: '.fill-title-2-orange',
            start: 'top 75%',
            end: 'bottom 40%',
            scrub: 0.5,
          },
        }
      );

      // Pills: hidden initially, appear after a delay once the section is in view
      gsap.set('.s2-pill', { opacity: 0, y: 24 });
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 65%',
        onEnter: () => {
          gsap.to('.s2-pill', {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.12,
            delay: 0.5,
          });
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex justify-center py-[80px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-grey)' }}
    >
      <div className="w-full flex flex-col gap-[134px]" style={{ maxWidth: '1400px' }}>

        {/* Row 1: Title left | Pills right */}
        <div className="flex flex-col gap-[40px] md:flex-row md:items-start md:gap-[40px]">
          <h2
            className="fill-title-1 flex-1"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-l)',
              lineHeight: 'var(--text-title-l--line-height)',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: 'rgba(5, 66, 167, 0.05)',
            }}
          >
            Necesitas cumplir con el plan de producción
          </h2>

          <div className="flex flex-col gap-[16px] flex-1">
            <Pill
              dot="var(--color-orange)"
              text="Tu equipo editorial está al límite y no puede absorber más proyectos"
            />
            <Pill
              dot="var(--color-green)"
              text="Necesitas escalar la producción sin aumentar tu plantilla fija"
              indent
            />
          </div>
        </div>

        {/* Row 2: Pills left | Title right */}
        <div className="flex flex-col gap-[40px] md:flex-row md:items-end md:gap-[40px]">
          <div className="flex flex-col gap-[16px] flex-1">
            <Pill
              dot="var(--color-orange)"
              text="Quieres publicar con rigor, pero los plazos ajustados hacen que la calidad se resienta"
            />
            <Pill
              dot="var(--color-blue-300)"
              text="Necesitas incorporar nuevos enfoques didácticos y buscas editores con experiencia real en el aula."
            />
          </div>

          <h2
            className="flex-1 text-left md:text-right"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-l)',
              lineHeight: 'var(--text-title-l--line-height)',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
            }}
          >
            <span className="fill-title-2-blue" style={{ color: 'rgba(5, 66, 167, 0.05)' }}>
              y delegar con{' '}
            </span>
            <span className="fill-title-2-orange" style={{ color: 'rgba(236, 154, 55, 0.05)' }}>
              tranquilidad
            </span>
            <span className="fill-title-2-blue" style={{ color: 'rgba(5, 66, 167, 0.05)' }}>
              {' '}en alguien con oficio y rigor
            </span>
          </h2>
        </div>

      </div>
    </section>
  );
}
