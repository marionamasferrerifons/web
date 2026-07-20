'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Card = {
  number: string;
  title: string;
  body: string;
  align: 'center' | 'left';
  tall?: boolean;
  shape?: 'orange' | 'green' | 'coral';
};

const TITLE = 'Proyectos más claros, coherentes y sostenibles';
const BODY =
  'La combinación entre criterio editorial, pedagogía y tecnología permite desarrollar contenidos útiles, bien estructurados y pensados para mantenerse sólidos también a largo plazo.';

const COLUMNS: Card[][] = [
  [
    { number: '[01]', title: TITLE, body: BODY, align: 'center' },
    { number: '[04]', title: TITLE, body: BODY, align: 'left', tall: true, shape: 'green' },
  ],
  [
    { number: '[02]', title: TITLE, body: BODY, align: 'center', tall: true, shape: 'orange' },
    { number: '[05]', title: TITLE, body: BODY, align: 'center' },
  ],
  [
    { number: '[03]', title: TITLE, body: BODY, align: 'center' },
    { number: '[06]', title: TITLE, body: BODY, align: 'left', tall: true, shape: 'coral' },
  ],
];

function WorkCard({ card }: { card: Card }) {
  const centered = card.align === 'center';

  return (
    <div
      className={`work-card relative overflow-hidden bg-white rounded-[24px] p-[32px] flex flex-col gap-[24px] w-full ${
        centered ? 'items-center' : 'items-start'
      }`}
      style={card.tall ? { height: '482px', justifyContent: card.align === 'left' ? 'space-between' : 'flex-start' } : undefined}
    >
      {card.shape === 'orange' && (
        <img
          src="/enfoque-work-shape-orange.svg"
          alt=""
          className="absolute"
          style={{ bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '203px', height: '155px' }}
          aria-hidden="true"
        />
      )}
      {card.shape === 'green' && (
        <div
          className="absolute rounded-full"
          style={{ right: '-40px', top: '135px', width: '230px', height: '230px', backgroundColor: 'var(--color-green)' }}
          aria-hidden="true"
        />
      )}
      {card.shape === 'coral' && (
        <img
          src="/enfoque-work-shape-coral.svg"
          alt=""
          className="absolute"
          style={{ right: 0, top: '213px', width: '96px', height: '270px' }}
          aria-hidden="true"
        />
      )}

      <div
        className={`relative flex flex-col gap-[16px] w-full ${centered ? 'items-center text-center' : 'items-start text-left'}`}
        style={!centered && card.shape ? { maxWidth: '300px' } : undefined}
      >
        <img src="/enfoque-work-loader.svg" alt="" className="size-[48px]" aria-hidden="true" />
        <div className={`flex flex-col gap-[8px] w-full ${centered ? 'items-center text-center' : 'items-start text-left'}`}>
          <p
            className="uppercase"
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
            {card.number}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-body-xl)',
              lineHeight: 'var(--text-body-xl--line-height)',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-blue-400)',
            }}
          >
            {card.title}
          </p>
        </div>
      </div>

      <p
        className={`relative ${centered ? 'text-center' : 'text-left'}`}
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: 'var(--text-body-m)',
          lineHeight: 'var(--text-body-m--line-height)',
          fontWeight: 400,
          fontVariationSettings: '"opsz" 14',
          color: 'var(--color-blue-300)',
          maxWidth: !centered && card.shape ? '300px' : undefined,
        }}
      >
        {card.body}
      </p>
    </div>
  );
}

export default function WorkPrinciplesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        defaults: { ease: 'power3.out' },
      }).from('.work-header > *', { y: 24, opacity: 0, duration: 0.7, stagger: 0.1 });

      // Each card animates on its own scroll trigger — not a single shared
      // one on the section — since the 3-column masonry layout means cards
      // sit at very different heights on the page. The first card in each
      // column still lines up at the same height as its row-mates (grid is
      // items-start), so without a delay they'd all pop in at once. Cards
      // render column-by-column (2 per column), so Math.floor(i / 2) gives
      // the column index for a left-to-right cascade.
      gsap.utils.toArray<HTMLElement>('.work-card').forEach((card, i) => {
        const column = Math.floor(i / 2);
        gsap.from(card, {
          y: 32,
          opacity: 0,
          duration: 0.7,
          delay: column * 0.15,
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
      className="w-full flex flex-col gap-[40px] items-center px-[16px] py-[56px]"
      style={{ backgroundColor: 'var(--color-grey)' }}
    >
      <div className="work-header w-full flex flex-col items-start gap-[16px]" style={{ maxWidth: '1400px' }}>
        <p
          className="uppercase"
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
          [PRINCIPIOS DE TRABAJO]
        </p>
        <div className="w-full flex flex-col md:flex-row gap-[24px] items-start md:items-end justify-between">
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-l)',
              lineHeight: 'var(--text-title-l--line-height)',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-blue-400)',
              maxWidth: '690px',
            }}
          >
            Una forma de trabajar que{' '}
            <span style={{ color: 'var(--color-orange-400)' }}>impacta</span>
            {' '}en el resultado final
          </p>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-body-m)',
              lineHeight: 'var(--text-body-m--line-height)',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-blue-300)',
              maxWidth: '453px',
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Metus tincidunt velit leo imperdiet malesuada congue nisi. Lectus egestas lacinia neque egestas nunc nibh pellentesque tortor vitae.
          </p>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[20px] items-start" style={{ maxWidth: '1400px' }}>
        {COLUMNS.map((column, i) => (
          <div key={i} className="flex flex-col gap-[20px]">
            {column.map((card) => (
              <WorkCard key={card.number} card={card} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
