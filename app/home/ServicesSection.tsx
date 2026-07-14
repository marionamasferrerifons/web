'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CARDS = [
  {
    href: '/servicios/estrategia-editorial',
    title: 'Innovación editorial con IA',
    subtitle: 'Te ayudo a trabajar como yo trabajo',
    body: 'Acompaño a editoriales educativas en el proceso de incorporar la IA de forma estratégica y responsable: desde entender dónde están hoy hasta construir los sistemas y las capacidades para trabajar diferente.',
    image: '/home-service-card1.png',
    bgColor: 'var(--color-white)',
    imageSide: 'right' as const,
  },
  {
    href: '/servicios/servicios-editoriales',
    title: 'Servicios editoriales con IA aplicada',
    subtitle: 'Lo que hago yo, aplicado a tu proyecto',
    body: 'Dirijo proyectos editoriales completos con un equipo de colaboradores de confianza. La IA forma parte del método de trabajo como herramienta integrada en la producción diaria. Esto explica la eficiencia y la calidad de los entregables.',
    image: '/home-service-card2.png',
    bgColor: 'var(--color-white)',
    imageSide: 'left' as const,
  },
  {
    href: '/servicios/ecosistema-produccion-editorial',
    title: 'Sistema de producción editorial con IA',
    subtitle: 'El criterio de tu editorial, codificado y amplificado.',
    body: 'Diseño e implanto un sistema de producción a medida que codifica el conocimiento editorial y pedagógico de tu organización en un entorno de IA. El equipo mantiene el criterio; la IA multiplica la capacidad productiva.',
    image: '/home-service-card3.png',
    bgColor: 'var(--color-white)',
    imageSide: 'right' as const,
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: '.services-header', start: 'top 80%' },
        defaults: { ease: 'power3.out' },
      })
        .from('.services-tag',   { y: -20, opacity: 0, duration: 0.5 })
        .from('.services-title', { y: 48,  opacity: 0, duration: 0.9 }, '-=0.2');

      gsap.utils.toArray<Element>('.services-card').forEach((card) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.7,
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
      className="w-full flex flex-col items-center gap-[64px] py-[56px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-grey)' }}
    >
      <div className="services-header flex flex-col gap-[16px] items-center text-center" style={{ maxWidth: '690px' }}>
        <p
          className="services-tag uppercase"
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontWeight: 400,
            fontSize: 'var(--text-body-accent-mono)',
            lineHeight: 'var(--text-body-accent-mono--line-height)',
            letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
            color: 'var(--color-blue-300)',
            opacity: 0.65,
          }}
        >
          [SERVICIOS]
        </p>
        <p
          className="services-title"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-title-l)',
            lineHeight: 'var(--text-title-l--line-height)',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
            color: 'var(--color-blue-400)',
          }}
        >
          Lorem ipsum dolor sit amet{' '}
          <span style={{ color: 'var(--color-orange-400)' }}>consectetur</span>
          . Volutpat scelerisque cras
        </p>
      </div>

      <div className="w-full flex flex-col gap-[40px]" style={{ maxWidth: '1163px' }}>
        {CARDS.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="services-card group relative overflow-hidden rounded-[24px] flex flex-col md:flex-row items-stretch"
            style={{ backgroundColor: card.bgColor, minHeight: '365px' }}
          >
            {/* Text side */}
            <div
              className={`flex-1 flex flex-col justify-between gap-[24px] p-[32px] md:p-[40px] relative z-10 ${
                card.imageSide === 'left' ? 'md:order-2' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-[16px]">
                <div className="flex flex-col gap-[8px]">
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: 'var(--text-title-s)',
                      lineHeight: 'var(--text-title-s--line-height)',
                      fontWeight: 400,
                      fontVariationSettings: '"opsz" 14',
                      color: 'var(--color-blue-400)',
                    }}
                  >
                    {card.title}
                  </p>
                  <p
                    className="italic"
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: 'var(--text-body-m)',
                      lineHeight: 'var(--text-body-m--line-height)',
                      fontWeight: 400,
                      fontVariationSettings: '"opsz" 14',
                      color: 'var(--color-blue-300)',
                    }}
                  >
                    {card.subtitle}
                  </p>
                </div>
                <span
                  className="relative flex items-center justify-center rounded-full shrink-0 bg-grey"
                  style={{ width: '48px', height: '48px' }}
                >
                  <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" style={{ backgroundColor: 'var(--color-orange)' }} />
                  <img
                    src="/arrow-orange.svg"
                    alt=""
                    className="relative size-[24px] transition-all duration-200 group-hover:rotate-45 group-hover:opacity-0"
                    aria-hidden="true"
                  />
                  <img
                    src="/arrow-white.svg"
                    alt=""
                    className="absolute size-[24px] opacity-0 transition-all duration-200 group-hover:rotate-45 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'var(--text-body-m)',
                  lineHeight: 'var(--text-body-m--line-height)',
                  fontWeight: 400,
                  fontVariationSettings: '"opsz" 14',
                  color: 'var(--color-blue-300)',
                  maxWidth: '410px',
                }}
              >
                {card.body}
              </p>
            </div>

            {/* Illustration side */}
            <div className={`relative flex-1 overflow-hidden ${card.imageSide === 'left' ? 'md:order-1' : ''}`} style={{ minHeight: '240px' }}>
              <img
                src={card.image}
                alt=""
                className="services-card-image absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                aria-hidden="true"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
