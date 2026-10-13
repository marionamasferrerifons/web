'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionTag from '@/components/service/SectionTag';
import ActionButtons from '@/components/service/ActionButtons';
import { WHATSAPP_URL_FORMACION } from '@/lib/constants';

/**
 * Capçalera de Formación en IA. Recupera el color coral i la disposició de
 * l'antiga pàgina «ecosistema-produccion-editorial» (etiqueta i titular a la
 * dreta; text i accions a baix a l'esquerra) amb les mides i el bloc
 * d'accions de les altres pàgines de servei.
 */
export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-tag',     { y: -24, opacity: 0, duration: 0.6 })
        .from('.hero-title',   { y: 48,  opacity: 0, duration: 0.9 }, '-=0.35')
        .from('.hero-body',    { y: 24,  opacity: 0, duration: 0.7 }, '-=0.5')
        .from('.hero-actions', { y: 16,  opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero-vec-l',   { x: -40, opacity: 0, duration: 1.0 }, '-=0.9')
        .from('.hero-vec-r',   { x: 40,  opacity: 0, duration: 1.0 }, '<')
        .from('.hero-blob',    { y: 60,  opacity: 0, duration: 1.0 }, '<');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden flex justify-center pt-[calc(var(--navbar-height)+56px)] lg:pt-[calc(var(--navbar-height)+104px)] pb-[56px] md:pb-[72px] px-[20px] md:px-[40px] lg:min-h-[704px]"
      style={{ backgroundColor: 'var(--color-orange)' }}
    >
      <img
        src="/hero-vector-orange-left.svg"
        alt=""
        className="hero-vec-l absolute left-0 top-[calc(var(--navbar-height)+40px)] hidden lg:block"
        style={{ width: '177px', height: '102px' }}
        aria-hidden="true"
      />
      <img
        src="/hero-vector-orange-right.svg"
        alt=""
        className="hero-vec-r absolute right-0 bottom-[40px] hidden lg:block"
        style={{ width: '177px', height: '102px' }}
        aria-hidden="true"
      />
      <img
        src="/hero-vector16.svg"
        alt=""
        className="hero-blob absolute left-0 bottom-[-5px] hidden lg:block"
        style={{ width: '335px', height: '355px' }}
        aria-hidden="true"
      />

      <div className="relative w-full flex flex-col justify-between gap-[40px] lg:gap-[56px]" style={{ maxWidth: '1160px' }}>
        <div className="flex flex-col items-start md:items-end gap-[16px] md:text-right">
          <div className="hero-tag">
            <SectionTag color="var(--color-blue-800)">[FORMACIÓN EN IA]</SectionTag>
          </div>
          <h1
            className="hero-title"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-xxl)',
              lineHeight: 'var(--text-title-xxl--line-height)',
              fontWeight: 400,
              color: 'var(--color-white)',
              maxWidth: '800px',
              textWrap: 'balance',
            }}
          >
            Aprende a{' '}
            <span style={{ color: 'var(--color-blue-500)' }}>aplicar la IA</span>
            {' '}a tu trabajo editorial.
          </h1>
        </div>

        <div className="flex flex-col gap-[32px] w-full" style={{ maxWidth: '580px' }}>
          <p
            className="hero-body"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-body-l)',
              lineHeight: 'var(--text-body-l--line-height)',
              fontWeight: 300,
              color: 'var(--color-blue-800)',
              textWrap: 'pretty',
            }}
          >
            Tanto si estás empezando como si ya te has formado y te cuesta llevar lo aprendido a la práctica, te ayudo a trabajar con IA con criterio profesional y autonomía.
          </p>
          <div className="hero-actions w-full md:w-fit">
            <ActionButtons
              noteColor="var(--color-blue-800)"
              secondaryColor="var(--color-blue-800)"
              whatsappHref={WHATSAPP_URL_FORMACION}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
