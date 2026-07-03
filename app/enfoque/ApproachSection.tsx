'use client';

import { Fragment, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function buildWords(segments: { text: string; color: string }[]) {
  const words: { text: string; color: string }[] = [];
  segments.forEach((segment) => {
    segment.text.split(' ').filter(Boolean).forEach((text) => {
      words.push({ text, color: segment.color });
    });
  });
  return words;
}

const titleWords = buildWords([
  { text: 'Por eso', color: 'var(--color-blue-400)' },
  { text: 'el enfoque importa', color: 'var(--color-orange-400)' },
  { text: 'tanto como la herramienta', color: 'var(--color-blue-400)' },
]);

const bodyWords = buildWords([
  {
    text: 'Combinar criterio editorial, mirada pedagógica y comprensión tecnológica permite integrar nuevos procesos sin perder claridad, intención ni calidad.',
    color: 'var(--color-blue-300)',
  },
]);

function FillingWords({ words }: { words: { text: string; color: string }[] }) {
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="word" style={{ color: word.color, opacity: 0.2 }}>
            {word.text}
          </span>
          {i < words.length - 1 && ' '}
        </Fragment>
      ))}
    </>
  );
}

export default function ApproachSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        defaults: { ease: 'power3.out' },
      }).from('.approach-shape', { scale: 0.8, opacity: 0, duration: 0.9, ease: 'back.out(1.6)' });

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 55%',
          scrub: 1,
        },
      }).to('.word', { opacity: 1, stagger: 0.05 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden flex justify-center py-[64px] md:py-[112px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-grey)' }}
    >
      <div className="relative w-full flex flex-col gap-[32px] md:block md:h-[279px]" style={{ maxWidth: '1400px' }}>
        <p
          className="approach-title md:absolute md:left-0 md:top-0 md:w-[809px]"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-title-xl)',
            lineHeight: 'var(--text-title-xl--line-height)',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
          }}
        >
          <FillingWords words={titleWords} />
        </p>

        <img
          src="/enfoque-focus-shape.svg"
          alt=""
          className="approach-shape hidden lg:block absolute"
          style={{ right: '-20px', top: '8px', width: '351px', height: '208px' }}
          aria-hidden="true"
        />

        <p
          className="approach-body md:absolute md:left-[831px] md:top-[189px] md:w-[570px]"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-body-l)',
            lineHeight: 'var(--text-body-l--line-height)',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
          }}
        >
          <FillingWords words={bodyWords} />
        </p>
      </div>
    </section>
  );
}
