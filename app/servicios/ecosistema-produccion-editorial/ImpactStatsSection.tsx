'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const checkItems = [
  'Evaluaciones tipo test',
  'Diseño de índices',
  'Guías didácticas',
  'Redacción de actividades',
  'Redacción de contenido principal',
  'Redacción de retos y casos',
  'Desarrollo de solucionarios',
];

export default function Section5() {
  const sectionRef   = useRef<HTMLElement>(null);
  const headerRef    = useRef<HTMLDivElement>(null);
  const blobRef      = useRef<HTMLDivElement>(null);
  const statLabelRef = useRef<HTMLParagraphElement>(null);
  const arrowRef     = useRef<HTMLImageElement>(null);
  const num60Ref     = useRef<HTMLSpanElement>(null);
  const num90Ref     = useRef<HTMLSpanElement>(null);
  const statDescRef  = useRef<HTMLParagraphElement>(null);
  const mobileNumRef = useRef<HTMLParagraphElement>(null);
  const rightTextRef = useRef<HTMLParagraphElement>(null);
  const checklistRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Header — both breakpoints
      gsap.from(headerRef.current, {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
      });

      // ── Desktop ──────────────────────────────────────────────
      mm.add('(min-width: 1024px)', () => {
        // Hide right content immediately — revealed after blob completes
        gsap.set(rightTextRef.current, { opacity: 0, y: 20 });
        const listItems = checklistRef.current?.querySelectorAll('li');
        if (listItems?.length) gsap.set(listItems, { opacity: 0, y: 20 });

        // Stat label
        gsap.from(statLabelRef.current, {
          y: 16,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: statLabelRef.current, start: 'top 88%' },
        });

        // Arrow
        gsap.from(arrowRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: arrowRef.current, start: 'top 88%' },
        });

        // Count up
        const countObj = { v60: 0, v90: 0 };
        ScrollTrigger.create({
          trigger: statLabelRef.current,
          start: 'top 88%',
          once: true,
          onEnter: () => {
            gsap.to(countObj, {
              v60: 60,
              v90: 90,
              duration: 1.8,
              ease: 'power2.out',
              onUpdate() {
                if (num60Ref.current) num60Ref.current.textContent = String(Math.round(countObj.v60));
                if (num90Ref.current) num90Ref.current.textContent = String(Math.round(countObj.v90));
              },
            });
          },
        });

        // Stat description
        gsap.from(statDescRef.current, {
          y: 16,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: statDescRef.current, start: 'top 90%' },
        });

        // Blob scales up → then right content appears
        gsap.from(blobRef.current, {
          scale: 0,
          opacity: 0,
          duration: 1.2,
          ease: 'back.out(1.4)',
          transformOrigin: 'center bottom',
          scrollTrigger: { trigger: blobRef.current, start: 'top 90%' },
          onComplete() {
            gsap.to(rightTextRef.current, {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: 'power2.out',
            });
            const items = checklistRef.current?.querySelectorAll('li');
            if (items?.length) {
              gsap.to(items, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.08,
                ease: 'power2.out',
                delay: 0.1,
              });
            }
          },
        });
      });

      // ── Mobile ───────────────────────────────────────────────
      mm.add('(max-width: 1023px)', () => {
        // Mobile count up
        const mobileCountObj = { v60: 0, v90: 0 };
        ScrollTrigger.create({
          trigger: mobileNumRef.current,
          start: 'top 90%',
          once: true,
          onEnter: () => {
            gsap.to(mobileCountObj, {
              v60: 60,
              v90: 90,
              duration: 1.8,
              ease: 'power2.out',
              onUpdate() {
                if (mobileNumRef.current) {
                  mobileNumRef.current.textContent = `${Math.round(mobileCountObj.v60)}–${Math.round(mobileCountObj.v90)}%`;
                }
              },
            });
          },
        });

        // Right text and checklist on scroll
        gsap.from(rightTextRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: rightTextRef.current, start: 'top 85%' },
        });

        const items = checklistRef.current?.querySelectorAll('li');
        if (items?.length) {
          gsap.from(items, {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: { trigger: checklistRef.current, start: 'top 85%' },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col items-center gap-[40px] pt-[56px] px-[20px] overflow-hidden"
      style={{ backgroundColor: '#ec937e' }}
    >
      {/* Header */}
      <div ref={headerRef} className="flex flex-col items-center gap-[16px] text-center">
        <p
          className="opacity-65 uppercase"
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontWeight: 400,
            fontSize: 'var(--text-body-accent-mono)',
            lineHeight: 'var(--text-body-accent-mono--line-height)',
            letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
            color: 'var(--color-white)',
          }}
        >
          [IMPACTO]
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-title-l)',
            lineHeight: 'var(--text-title-l--line-height)',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
            color: 'var(--color-white)',
            maxWidth: '576px',
          }}
        >
          Produce <span style={{ color: 'var(--color-blue-400)' }}>más</span> con el mismo equipo
        </h2>
      </div>

      {/* Content */}
      <div className="w-full flex flex-col lg:flex-row items-end gap-[40px] lg:gap-[94px]" style={{ maxWidth: '1165px' }}>

        {/* Left: blue arch blob + stats */}
        <div ref={blobRef} className="relative shrink-0 hidden lg:block" style={{ width: 545, height: 576 }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div style={{ width: 576, height: 544, transform: 'rotate(-90deg)', flexShrink: 0 }}>
              <img
                src="/s5-blue-blob.svg"
                alt=""
                style={{ width: '100%', height: '100%' }}
                aria-hidden="true"
              />
            </div>
          </div>

          <div
            className="absolute flex flex-col gap-[60px]"
            style={{ left: '50%', transform: 'translateX(-50%)', top: 289, width: 419 }}
          >
            <div className="flex flex-col gap-[12px]">
              <p
                ref={statLabelRef}
                style={{
                  fontFamily: 'var(--font-dm-mono)',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: 'var(--color-blue-200)',
                }}
              >
                TIEMPO DE PRODUCCIÓN
              </p>
              <div className="flex items-end gap-[8px]">
                <img ref={arrowRef} src="/s5-arrow-down.svg" alt="" style={{ width: 52, height: 52 }} aria-hidden="true" />
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '80px',
                    lineHeight: '68px',
                    fontWeight: 400,
                    fontVariationSettings: '"opsz" 14',
                    color: 'var(--color-white)',
                  }}
                >
                  <span ref={num60Ref}>0</span>–<span ref={num90Ref}>0</span>%
                </p>
              </div>
            </div>

            <p
              ref={statDescRef}
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '16px',
                lineHeight: '20px',
                fontWeight: 400,
                fontVariationSettings: '"opsz" 14',
                color: 'var(--color-grey)',
              }}
            >
              Reducción del tiempo de producción según tipología de contenido, calculada a partir de los flujos reales de la editorial.
            </p>
          </div>
        </div>

        {/* Mobile stats */}
        <div
          className="lg:hidden flex flex-col gap-[16px] w-full rounded-[24px] px-[24px] py-[32px]"
          style={{ backgroundColor: 'var(--color-blue-400)' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '24px',
              color: 'var(--color-blue-200)',
            }}
          >
            TIEMPO DE PRODUCCIÓN
          </p>
          <p
            ref={mobileNumRef}
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '64px',
              lineHeight: '64px',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-white)',
            }}
          >
            0–0%
          </p>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '16px',
              lineHeight: '20px',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-grey)',
            }}
          >
            Reducción del tiempo de producción según tipología de contenido, calculada a partir de los flujos reales de la editorial.
          </p>
        </div>

        {/* Right: text + checklist */}
        <div
          className="flex flex-col gap-[32px] pb-[56px] w-full"
          style={{ paddingLeft: 0 }}
        >
          <div className="lg:pt-[78px] flex flex-col gap-[32px]">
            <p
              ref={rightTextRef}
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '24px',
                lineHeight: '32px',
                fontWeight: 400,
                fontVariationSettings: '"opsz" 14',
                color: 'var(--color-white)',
                maxWidth: '525px',
              }}
            >
              Algunos ejemplos de tipologías que el sistema puede producir:
            </p>
            <ul ref={checklistRef} className="flex flex-col gap-[24px]">
              {checkItems.map((item, i) => (
                <li key={i} className="flex items-center gap-[8px]">
                  <img
                    src="/s5-check-icon.svg"
                    alt=""
                    className="shrink-0"
                    style={{ width: 24, height: 24 }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '20px',
                      lineHeight: '28px',
                      fontWeight: 400,
                      fontVariationSettings: '"opsz" 14',
                      color: 'var(--color-blue-50)',
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
