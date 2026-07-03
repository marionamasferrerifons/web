'use client';

import { useEffect, useRef } from 'react';
import { PortableText, type PortableTextBlock, type PortableTextComponents } from '@portabletext/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const bodyComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-[20px] last:mb-0">{children}</p>,
  },
};

type ChallengeSectionProps = {
  question: string
  text: PortableTextBlock[]
}

export default function ChallengeSection({ question, text }: ChallengeSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        defaults: { ease: 'power3.out' },
      }).from('.challenge-content > *', { y: 32, opacity: 0, duration: 0.8, stagger: 0.15 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex justify-center py-[56px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-orange-200)' }}
    >
      <div className="challenge-content flex flex-col gap-[24px] w-full" style={{ maxWidth: '923px' }}>
        <p
          className="uppercase"
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontWeight: 400,
            fontSize: 'var(--text-body-accent-mono)',
            lineHeight: 'var(--text-body-accent-mono--line-height)',
            letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
            color: 'var(--color-blue-50)',
          }}
        >
          Reto
        </p>

        <h2
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-title-m)',
            lineHeight: 'var(--text-title-m--line-height)',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
            color: 'var(--color-blue-400)',
          }}
        >
          {question}
        </h2>

        <div
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-body-m)',
            lineHeight: 'var(--text-body-m--line-height)',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
            color: 'var(--color-blue-50)',
          }}
        >
          <PortableText value={text} components={bodyComponents} />
        </div>
      </div>
    </section>
  );
}
