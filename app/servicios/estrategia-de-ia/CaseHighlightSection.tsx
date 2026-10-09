'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTag from './SectionTag';
import Button from './Button';

type CaseHighlightProps = {
  slug: string
  imageUrl?: string
  imageAlt?: string
  logoUrl?: string
  logoAlt?: string
}

/**
 * Secció 5 — targeta destacada del cas Altamar. El títol i els paràgrafs són
 * còpia pròpia d'aquesta pàgina (no venen de Sanity): el document de caseStudy
 * amb slug "estrategia-de-ia" encara no existeix a Sanity, així que `slug`,
 * `imageUrl` i `logoUrl` poden no estar disponibles — en aquest cas el
 * component es renderitza igualment, sense imatge ni logotip, sense trencar.
 */
export default function CaseHighlightSection({ slug, imageUrl, imageAlt, logoUrl, logoAlt }: CaseHighlightProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from('.case-content > *', {
        y: 24, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const paragraphStyle = {
    fontFamily: 'var(--font-dm-sans)',
    fontSize: 'var(--text-body-l)',
    lineHeight: 'var(--text-body-l--line-height)',
    fontWeight: 300,
    fontVariationSettings: '"opsz" 14',
    color: 'var(--color-text-secondary-strong)',
  } as const;

  const monoStyle = {
    fontFamily: 'var(--font-dm-mono)',
    fontWeight: 400,
    fontSize: 'var(--text-body-accent-mono)',
    lineHeight: 'var(--text-body-accent-mono--line-height)',
    letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
    color: 'var(--color-text-secondary-strong)',
  } as const;

  return (
    <section
      ref={sectionRef}
      className="w-full flex justify-center py-[64px] md:py-[96px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-white)' }}
    >
      <article
        className="case-content w-full grid grid-cols-1 lg:grid-cols-12 gap-[40px] lg:gap-[48px] items-start p-[24px] md:p-[48px]"
        style={{ maxWidth: '1160px', backgroundColor: 'var(--color-blue-100)', borderRadius: '24px' }}
      >
        <div className="lg:col-span-7 flex flex-col gap-[24px]">
          <SectionTag color="var(--color-text-secondary-strong)">[CASO DE ÉXITO]</SectionTag>
          {logoUrl && (
            // El logotip d'origen (Sanity) no és blanc: aquí es força a negre
            // amb `brightness(0)` perquè contrasti sobre el fons blau clar
            // d'aquesta targeta, sigui quin sigui el color real del logotip.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logoUrl}
              alt={logoAlt ?? 'Altamar'}
              className="self-start"
              style={{ height: '40px', width: 'auto', filter: 'brightness(0)', opacity: 0.8 }}
            />
          )}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-m)',
              lineHeight: 'var(--text-title-m--line-height)',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-blue-400)',
              textWrap: 'balance',
            }}
          >
            Altamar: de querer incorporar IA a decidir dónde invertir.
          </h2>
          <div className="flex flex-col gap-[16px]">
            <p style={paragraphStyle}>
              Altamar necesitaba definir qué papel debía tener la IA en su negocio y qué iniciativas merecía la pena impulsar.
            </p>
            <p style={paragraphStyle}>
              En un proyecto de cinco semanas analizamos su contexto, identificamos oportunidades y construimos una hoja de ruta con iniciativas priorizadas, proveedores evaluados y una propuesta de calendario e inversión.
            </p>
            <p style={paragraphStyle}>
              El trabajo permitió reorientar el presupuesto hacia una cartera de iniciativas y establecer criterios para decidir qué impulsar y qué aplazar.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-[32px]">
          {imageUrl && (
            <div className="relative rounded-[16px] overflow-hidden w-full" style={{ aspectRatio: '4 / 3' }}>
              <Image src={imageUrl} alt={imageAlt ?? ''} fill sizes="(min-width: 1024px) 400px, 90vw" className="object-cover" />
            </div>
          )}
          <dl className="flex flex-col" style={{ borderBottom: '1px solid var(--color-blue-200)' }}>
            {[
              ['Cliente', 'Altamar'],
              ['Servicio', 'Consultoría estratégica'],
              ['Duración', '5 semanas'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between gap-[16px] py-[12px]"
                style={{ borderTop: '1px solid var(--color-blue-200)' }}
              >
                <dt className="uppercase" style={monoStyle}>{label}</dt>
                <dd
                  className="text-right"
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 'var(--text-body-m)',
                    lineHeight: '24px',
                    fontWeight: 400,
                    fontVariationSettings: '"opsz" 14',
                    color: 'var(--color-blue-800)',
                  }}
                >
                  {value}
                </dd>
              </div>
            ))}
          </dl>
          <div>
            <Button href={`/casos-de-exito/${slug}`} variant="primary">
              Ver el caso de Altamar
            </Button>
          </div>
        </div>
      </article>
    </section>
  );
}
