'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type ValueCardProps = {
  icon: string
  title: string
  description: string
  height: number
}

function ValueCard({ icon, title, description, height }: ValueCardProps) {
  return (
    <div
      className="value-card relative z-10 bg-white rounded-[24px] p-[32px] flex flex-col justify-between gap-[24px] w-full"
      style={{ height: `${height}px` }}
    >
      <div className="flex flex-col gap-[16px] items-center">
        <img src={icon} alt="" className="size-[40px]" aria-hidden="true" />
        <p
          className="text-center"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-body-xl)',
            lineHeight: 'var(--text-body-xl--line-height)',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
            color: 'var(--color-blue-400)',
          }}
        >
          {title}
        </p>
      </div>
      <p
        className="text-center"
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: 'var(--text-body-m)',
          lineHeight: 'var(--text-body-m--line-height)',
          fontWeight: 400,
          fontVariationSettings: '"opsz" 14',
          color: 'var(--color-blue-300)',
        }}
      >
        {description}
      </p>
    </div>
  );
}

const values: ValueCardProps[] = [
  {
    icon: '/about-icon-humanismo.svg',
    title: 'Humanismo',
    description: 'Pongo a las personas en el centro, porque la tecnología solo tiene sentido si generan un impacto positivo real.',
    height: 304,
  },
  {
    icon: '/about-icon-excelencia.svg',
    title: 'Excelencia y estrategia',
    description: 'Trabajo garantizando una ejecución rigurosa y manteniendo la visión a global y el horizonte a largo plazo.',
    height: 350,
  },
  {
    icon: '/about-icon-innovacion.svg',
    title: 'Innovación sensata',
    description: 'Integro nuevas tecnologías y metodologías solo cuando aportan un valor real al aprendizaje y al proceso editorial.',
    height: 350,
  },
  {
    icon: '/about-icon-integridad.svg',
    title: 'Integridad',
    description: 'Actúo con ética y transparencia para construir relaciones de confianza: mis valores no se ponen en juego.',
    height: 284,
  },
  {
    icon: '/about-icon-valentia.svg',
    title: 'Valentía comprometida',
    description: 'Me atrevo a cuestionar lo establecido y a proponer caminos divergentes, pero siempre después de un análisis sólido y con responsabilidad.',
    height: 284,
  },
  {
    icon: '/about-icon-valor.svg',
    title: 'Cercanía  ',
    description: 'Escucho y co-creo con quienes trabajo, porque las mejores soluciones nacen de la suma de perspectivas y del diálogo.',
    height: 350,
  },
];

const columns = [
  { items: [values[0], values[1]], offset: '126px' },
  { items: [values[2], values[3]], offset: '222px' },
  { items: [values[4], values[5]], offset: '0px' },
];

export default function ValuesSection({
  title = 'Trabajo siempre guiada por la ética y el rigor.',
}: {
  title?: string
}) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        defaults: { ease: 'power3.out' },
      })
        .from('.values-tag',   { y: -20, opacity: 0, duration: 0.5 })
        .from('.values-title', { y: 40,  opacity: 0, duration: 0.8 }, '-=0.25');

      // Each card animates independently, triggered by its own scroll
      // position — not a single shared trigger on the grid — since the
      // masonry-style column offsets mean cards sit at very different
      // heights on the page.
      gsap.utils.toArray<HTMLElement>('.value-card').forEach((card) => {
        gsap.from(card, {
          y: 32,
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
      className="w-full flex justify-center py-[56px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-grey)' }}
    >
      <div className="relative w-full" style={{ maxWidth: '1400px' }}>
        <div className="values-header flex flex-col gap-[16px] items-start" style={{ maxWidth: '820px' }}>
          <p
            className="values-tag uppercase opacity-65"
            style={{
              fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
              fontSize: 'var(--text-body-accent-mono)',
              lineHeight: 'var(--text-body-accent-mono--line-height)',
              letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
              color: 'var(--color-blue-300)',
            }}
          >
            [MIS VALORES]
          </p>
          <h2
            className="values-title"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-l)',
              lineHeight: 'var(--text-title-l--line-height)',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-blue-400)',
            }}
          >
            {title}
          </h2>
        </div>

        {/* Cards start almost flush under the title, matching Figma (~0px gap) */}
        <div className="relative mt-0">
          {/* Decorative shapes — positioned to match Figma's absolute coordinates,
              using the top of the shortest (right) column as the y origin */}
          <img
            src="/about-values-shape-orange.svg"
            alt=""
            className="absolute hidden lg:block"
            style={{ width: '220px', height: '206px', left: '778px', top: '215px' }}
            aria-hidden="true"
          />
          <div
            className="absolute hidden lg:block rounded-full"
            style={{
              width: '230px',
              height: '230px',
              left: '337px',
              top: '293px',
              backgroundColor: 'var(--color-green)',
            }}
            aria-hidden="true"
          />
          <img
            src="/about-values-shape-red.svg"
            alt=""
            className="absolute hidden lg:block"
            style={{ width: '220px', height: '229px', left: '1089px', top: '612px' }}
            aria-hidden="true"
          />

          <div className="values-grid relative grid grid-cols-1 lg:grid-cols-3 gap-[20px] items-start">
            {columns.map((col, i) => (
              <div key={i} className="flex flex-col gap-[20px]">
                <div className="hidden lg:block" style={{ marginTop: col.offset }} />
                {col.items.map((item, j) => (
                  <ValueCard key={j} {...item} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
