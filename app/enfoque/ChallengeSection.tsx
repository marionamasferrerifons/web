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
  { text: 'El reto actual es incorporar tecnología', color: 'var(--color-blue-400)' },
  { text: 'respetando y entendiendo', color: 'var(--color-orange-400)' },
  { text: 'lo que ya funciona', color: 'var(--color-blue-400)' },
]);

const bodyWords = buildWords([
  {
    text: 'En proyectos editoriales y educativos, la tecnología impacta directamente en la calidad del contenido, los equipos y la forma de trabajar.',
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

export default function ChallengeSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        defaults: { ease: 'power3.out' },
      }).from('.challenge-shape', { scale: 0.8, opacity: 0, duration: 0.9, ease: 'back.out(1.6)' });

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
      <div className="relative w-full flex flex-col gap-[32px] md:block md:h-[378px]" style={{ maxWidth: '1400px' }}>
        <p
          className="challenge-title md:absolute md:left-[593px] md:top-0 md:w-[809px]"
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
          src="/enfoque-context-shape.svg"
          alt=""
          className="challenge-shape hidden lg:block absolute"
          style={{ left: '-29px', top: '112px', width: '216px', height: '128px' }}
          aria-hidden="true"
        />

        <p
          className="challenge-body md:absolute md:left-0 md:top-[288px] md:w-[571px]"
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
