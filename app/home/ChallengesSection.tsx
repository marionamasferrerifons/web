'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Challenge = {
  avatar: string;
  size: number;
  left: number;
  top: number;
  label: string;
  side: 'left' | 'right';
};

type ChallengesSectionProps = {
  title: ReactNode;
  challenges: Challenge[];
};

export default function ChallengesSection({ title, challenges }: ChallengesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        defaults: { ease: 'power3.out' },
      })
        .from('.challenges-title', { y: 32, opacity: 0, duration: 0.8 })
        .from('.challenges-item', { scale: 0.7, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.6)' }, '-=0.4');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex justify-center py-[64px] md:py-[96px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-grey)' }}
    >
      <div className="relative w-full flex flex-col items-center" style={{ maxWidth: '1400px' }}>
        <h2
          className="challenges-title text-center"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-title-xl)',
            lineHeight: 'var(--text-title-xl--line-height)',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
            color: 'var(--color-blue-400)',
            maxWidth: '690px',
          }}
        >
          {title}
        </h2>

        {/* Desktop — floating avatars scattered around the title */}
        <div className="hidden lg:block relative w-full" style={{ height: '389px', marginTop: '48px' }}>
          {challenges.map((c, i) => {
            const avatar = (
              <img
                key="avatar"
                src={c.avatar}
                alt=""
                className="challenges-item rounded-full shrink-0 relative"
                style={{ width: `${c.size}px`, height: `${c.size}px`, zIndex: 1 }}
                aria-hidden="true"
              />
            );
            const label = (
              <div
                key="label"
                className="challenges-item bg-white rounded-[8px] px-[14px] py-[6px] whitespace-nowrap relative"
                style={{ zIndex: 2, marginLeft: c.side === 'right' ? '-16px' : undefined, marginRight: c.side === 'left' ? '-16px' : undefined }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {c.label}
                </p>
              </div>
            );

            // For side==='left' the label renders before the avatar in DOM order,
            // so the box must grow leftward from the avatar's own right edge
            // (anchored via `right`) — anchoring by `left` would keep the label
            // pinned at c.left and push the avatar further right than intended.
            const anchorStyle =
              c.side === 'left'
                ? { right: `${1400 - (c.left + c.size)}px` }
                : { left: `${c.left}px` };

            return (
              <div
                key={i}
                className="absolute flex items-center"
                style={{ ...anchorStyle, top: `${c.top}px`, height: `${c.size}px` }}
              >
                {c.side === 'left' ? [label, avatar] : [avatar, label]}
              </div>
            );
          })}
        </div>

        {/* Mobile / tablet — simple stacked list */}
        <div className="lg:hidden flex flex-col gap-[16px] w-full mt-[40px]" style={{ maxWidth: '480px' }}>
          {challenges.map((c, i) => (
            <div key={i} className="challenges-item flex items-center gap-[12px] bg-white rounded-[8px] px-[16px] py-[12px]">
              <img src={c.avatar} alt="" className="rounded-full shrink-0" style={{ width: '40px', height: '40px' }} aria-hidden="true" />
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: 'var(--color-text-secondary)',
                }}
              >
                {c.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
