'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionTag from '@/components/service/SectionTag';
import ActionButtons from '@/components/service/ActionButtons';
import { WHATSAPP_URL_PRODUCCION } from '@/lib/constants';

/**
 * Capçalera de Producción editorial con IA. Conserva la disposició de l'antiga
 * pàgina de serveis editorials (titular a l'esquerra; text i accions a sota,
 * desplaçats a la dreta) amb les mides i el bloc d'accions d'Estrategia de IA.
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
        .from('.hero-blob',    { y: 60,  opacity: 0, duration: 1.0 }, '-=0.9')
        .from('.hero-vector',  { x: 40,  opacity: 0, duration: 1.0 }, '<');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden flex justify-center pt-[calc(var(--navbar-height)+56px)] lg:pt-[calc(var(--navbar-height)+88px)] pb-[72px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-orange-400)' }}
    >
      <img
        src="/hero-orange-blob.svg"
        alt=""
        className="hero-blob absolute left-0 bottom-0 hidden lg:block"
        style={{ width: '341px', height: '364px' }}
        aria-hidden="true"
      />
      <img
        src="/hero-vector-orange.svg"
        alt=""
        className="hero-vector absolute right-0 top-[calc(var(--navbar-height)+32px)] hidden lg:block"
        style={{ width: '289px', height: '166px' }}
        aria-hidden="true"
      />

      <div className="relative w-full flex flex-col gap-[40px]" style={{ maxWidth: '1160px' }}>
        <div className="flex flex-col gap-[16px]">
          <div className="hero-tag">
            <SectionTag color="var(--color-blue-800)">[PRODUCCIÓN EDITORIAL CON IA]</SectionTag>
          </div>
          <h1
            className="hero-title"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-xxl)',
              lineHeight: 'var(--text-title-xxl--line-height)',
              fontWeight: 400,
              color: 'var(--color-white)',
              maxWidth: '760px',
              textWrap: 'balance',
            }}
          >
            IA aplicada a la{' '}
            <span style={{ color: 'var(--color-blue-500)' }}>producción</span>
            {' '}de contenidos educativos.
          </h1>
        </div>

        <div className="flex flex-col gap-[32px] w-full lg:self-end" style={{ maxWidth: '640px' }}>
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
            Te ayudo a mejorar la producción de tu editorial: creo y edito materiales, reviso los contenidos que ya generáis o preparo los procesos para que tu equipo pueda producir y validar con IA.
          </p>
          <div className="hero-actions w-full md:w-fit">
            <ActionButtons noteColor="var(--color-blue-800)" whatsappHref={WHATSAPP_URL_PRODUCCION} />
          </div>
        </div>
      </div>
    </section>
  );
}
