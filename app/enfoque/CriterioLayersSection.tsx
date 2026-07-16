'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const DIAMOND_PATH =
  'M243.07 148.266L8.89418 85.5185C-2.98479 82.3355 -2.95719 65.4703 8.93213 62.3262L243.108 0.398706C245.132 -0.136426 247.26 -0.13295 249.282 0.408795L480.398 62.3362C492.237 65.5083 492.264 82.2968 480.436 85.5081L249.32 148.255C247.274 148.811 245.117 148.814 243.07 148.266Z';

type Layer = {
  key: string;
  label: string;
  color: string;
  title: string;
  body: string;
  benefits: string[];
  align: 'left' | 'right';
  // Offset in px from the card's vertical center — keeps the line/copy
  // aligned with the diamond stack (which is centered via flexbox) no
  // matter how tall the white card is.
  centerOffset: number;
};

const LAYERS: Layer[] = [
  {
    key: 'editorial',
    label: 'EDITORIAL',
    color: 'var(--color-orange-400)',
    title: 'Entiendo cómo funciona una editorial por dentro',
    body: 'Desde los procesos de producción hasta las decisiones estratégicas, lo que permite aplicar IA sin romper lo que ya funciona.',
    benefits: ['Beneficio 1', 'Beneficio 1', 'Beneficio 1'],
    align: 'left',
    centerOffset: -181,
  },
  {
    key: 'pedagogia',
    label: 'PEDAGOGIA',
    color: 'var(--color-green)',
    title: 'Entiendo el contenido desde quien lo enseña y quien lo produce',
    body: 'Haber trabajado como docente me permite entender cómo se usa el contenido en la práctica, algo clave a la hora de aplicar IA sin perder valor educativo.',
    benefits: [],
    align: 'right',
    centerOffset: -61,
  },
  {
    key: 'tecnologia',
    label: 'TECNOLOGÍA',
    color: 'var(--color-orange)',
    title: 'Uso la IA en la práctica',
    body: 'Trabajo con IA desde dentro del proceso editorial, lo que permite entender sus límites, sus riesgos y su verdadero potencial.',
    benefits: [],
    align: 'left',
    centerOffset: 89,
  },
];

function Diamond({ className, color, opacity }: { className: string; color: string; opacity?: number }) {
  return (
    <svg className={className} viewBox="0 0 490 149" style={{ width: '100%', height: 'auto', display: 'block', opacity }}>
      <path d={DIAMOND_PATH} fill={color} />
    </svg>
  );
}

function LayerCopy({ layer }: { layer: Layer }) {
  return (
    <div className="flex flex-col gap-[16px]">
      <p
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: 'var(--text-body-xl)',
          lineHeight: 'var(--text-body-xl--line-height)',
          fontWeight: 400,
          fontVariationSettings: '"opsz" 14',
          color: 'var(--color-blue-500)',
        }}
      >
        {layer.title}
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
        {layer.body}
      </p>
      {layer.benefits.length > 0 && (
        <div className="flex flex-col gap-[12px]">
          {layer.benefits.map((benefit, i) => (
            <div key={i} className="flex items-center gap-[8px]">
              <img src="/enfoque-check.svg" alt="" className="size-[20px] shrink-0" aria-hidden="true" />
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'var(--text-body-m)',
                  lineHeight: 'var(--text-body-m--line-height)',
                  fontWeight: 400,
                  fontVariationSettings: '"opsz" 14',
                  color: 'var(--color-blue-500)',
                }}
              >
                {benefit}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CriterioSection() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      gsap.set('.diamond-editorial', { opacity: 1 });
      gsap.set('.diamond-pedagogia, .diamond-tecnologia', { opacity: 0.45 });
      gsap.set('.content-editorial, .line-editorial', { opacity: 1 });
      gsap.set('.content-pedagogia, .line-pedagogia, .content-tecnologia, .line-tecnologia', { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top top',
          end: '+=2400',
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      });

      tl.to('.content-editorial, .line-editorial', { opacity: 0, duration: 1 }, 1)
        .to('.diamond-editorial', { opacity: 0.45, duration: 1 }, 1)
        .to('.diamond-pedagogia', { opacity: 1, duration: 1 }, 1)
        .to('.content-pedagogia, .line-pedagogia', { opacity: 1, duration: 1 }, 1.3)
        .to('.content-pedagogia, .line-pedagogia', { opacity: 0, duration: 1 }, 2.3)
        .to('.diamond-pedagogia', { opacity: 0.45, duration: 1 }, 2.3)
        .to('.diamond-tecnologia', { opacity: 1, duration: 1 }, 2.3)
        .to('.content-tecnologia, .line-tecnologia', { opacity: 1, duration: 1 }, 2.6);
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
    {/* Orange backdrop covers only the header — it ends exactly where the white
        card begins, so nothing below the card (including the pin's reserved
        scroll space) is tinted orange. */}
    <div
      className="w-full flex flex-col items-center pt-[56px] px-[16px]"
      style={{ backgroundColor: 'var(--color-orange-400)' }}
    >
      <div className="flex flex-col gap-[16px] items-center text-center" style={{ maxWidth: '690px' }}>
        <p
          className="uppercase"
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontWeight: 400,
            fontSize: 'var(--text-body-accent-mono)',
            lineHeight: 'var(--text-body-accent-mono--line-height)',
            letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
            color: 'var(--color-blue-500)',
            opacity: 0.65,
          }}
        >
          [MI ENFOQUE]
        </p>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-title-l)',
            lineHeight: 'var(--text-title-l--line-height)',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
            color: 'var(--color-blue-50)',
          }}
        >
          El <span style={{ color: 'var(--color-blue-400)' }}>criterio</span> de alguien que conoce el sector
        </p>
      </div>
      <div style={{ height: '40px' }} aria-hidden="true" />
    </div>

    <section className="w-full flex flex-col items-center px-[16px]">
      {/* Mobile / tablet — simple stacked layout, no pin/crossfade */}
      <div className="lg:hidden relative w-full">
        <div
          className="absolute top-0 bottom-0"
          style={{ left: '-16px', right: '-16px', backgroundColor: 'var(--color-orange-400)', zIndex: 0 }}
          aria-hidden="true"
        />
        <div className="relative bg-white rounded-t-[24px] w-full flex flex-col px-[24px] py-[48px]" style={{ zIndex: 1 }}>
          {LAYERS.map((layer, i) => (
            <div
              key={layer.key}
              className="flex flex-col gap-[24px] items-center"
              style={{
                paddingTop: i > 0 ? '32px' : 0,
                paddingBottom: i < LAYERS.length - 1 ? '32px' : 0,
                borderTop: i > 0 ? '1px solid rgba(1,44,151,0.15)' : undefined,
              }}
            >
              <div className="relative w-full">
                <Diamond className="" color={layer.color} />
                <span
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 'var(--text-body-l)',
                    color: 'var(--color-blue-500)',
                  }}
                >
                  {layer.label}
                </span>
              </div>
              <div className="w-full">
                <LayerCopy layer={layer} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop — pinned diamond stack with scroll-driven opacity crossfade */}
      <div className="hidden lg:block relative w-full">
      {/* This wrapper (not just the white card) is what GSAP pins, so the orange
          margins stay fixed in sync with the card instead of scrolling away.
          It's also taller than the card by 16px so a strip of orange shows
          above the card once it's pinned flush against the viewport top. */}
      <div ref={cardRef} className="relative w-full" style={{ height: '100vh', paddingTop: '16px' }}>
        <div
          className="absolute top-0 bottom-0"
          style={{ left: '-16px', right: '-16px', backgroundColor: 'var(--color-orange-400)', zIndex: 0 }}
          aria-hidden="true"
        />
      <div
        className="relative bg-white rounded-t-[24px] w-full overflow-hidden"
        style={{ height: 'calc(100vh - 16px)', zIndex: 1 }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative" style={{ width: '558px' }}>
            {LAYERS.map((layer, i) => (
              <div
                key={layer.key}
                className="relative"
                style={{ marginBottom: i < LAYERS.length - 1 ? '-30px' : 0, zIndex: LAYERS.length - i }}
              >
                <Diamond className={`diamond diamond-${layer.key}`} color={layer.color} />
                <span
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 'var(--text-body-l)',
                    color: 'var(--color-blue-500)',
                  }}
                >
                  {layer.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {LAYERS.map((layer) => (
          <div
            key={layer.key}
            className={`line-${layer.key} absolute`}
            style={{
              top: `calc(50% + ${layer.centerOffset}px)`,
              height: '1px',
              backgroundColor: 'rgba(1,44,151,0.15)',
              [layer.align]: '48px',
              width: 'clamp(0px, calc(50% - 279px - 48px), 325px)',
            }}
          />
        ))}

        {LAYERS.map((layer) => (
          <div
            key={layer.key}
            className={`content-block content-${layer.key} absolute`}
            style={{
              top: `calc(50% + ${layer.centerOffset + 24}px)`,
              [layer.align]: '48px',
              width: 'clamp(0px, calc(50% - 279px - 48px), 325px)',
              zIndex: 10,
            }}
          >
            <LayerCopy layer={layer} />
          </div>
        ))}
      </div>
      </div>
      </div>
    </section>
    </>
  );
}
