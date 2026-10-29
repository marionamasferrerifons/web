'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RecoloredLogo from '@/components/RecoloredLogo';

export type Logo = {
  src: string;
  alt: string;
};

// Some logos read visually smaller/bigger than the rest at the default
// 25px height, so individual ones get a nudge to match perceived size.
const HEIGHT_OVERRIDES: Record<string, number> = {
  actilearning: 29,
  juniorreport: 18,
  altamar: 19,
};

function logoHeight(alt: string) {
  const normalized = alt.toLowerCase().replace(/é/g, 'e').replace(/\s+/g, '');
  const match = Object.keys(HEIGHT_OVERRIDES).find((name) => normalized.includes(name));
  return match ? HEIGHT_OVERRIDES[match] : 25;
}

export default function LogosSection({ logos }: { logos: Logo[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicated so the track can loop seamlessly — the tween scrolls exactly
  // one set's width (xPercent -50) then jumps back unnoticed.
  const trackLogos = [...logos, ...logos];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        defaults: { ease: 'power3.out' },
      })
        .from('.logos-tag', { y: 16, opacity: 0, duration: 0.6 })
        .from('.logos-marquee', { y: 16, opacity: 0, duration: 0.6 }, '-=0.4');

      const marqueeTween = gsap.to(trackRef.current, {
        xPercent: -50,
        duration: logos.length * 3,
        ease: 'none',
        repeat: -1,
      });

      const track = trackRef.current;
      track?.addEventListener('mouseenter', () => marqueeTween.pause());
      track?.addEventListener('mouseleave', () => marqueeTween.play());
    }, sectionRef);

    return () => ctx.revert();
  }, [logos.length]);

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col md:flex-row items-center justify-between gap-[24px] py-[40px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-blue-500)' }}
    >
      <p
        className="logos-tag uppercase shrink-0"
        style={{
          fontFamily: 'var(--font-dm-mono)',
          fontWeight: 400,
          fontSize: 'var(--text-body-accent-mono)',
          lineHeight: 'var(--text-body-accent-mono--line-height)',
          letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
          color: 'var(--color-blue-200)',
        }}
      >
        [EDITORIALES PARA LAS QUE HE TRABAJADO]
      </p>

      <div className="logos-marquee relative overflow-hidden w-full" style={{ maxWidth: '600px' }}>
        {/* Edge fades — solid gradient overlays (not a CSS mask) so they don't
            create a stacking context and break the logos' mix-blend-mode
            against the section's real blue background below. */}
        <div
          className="absolute inset-y-0 left-0 z-10 pointer-events-none"
          style={{ width: '64px', background: 'linear-gradient(to right, var(--color-blue-500), transparent)' }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 right-0 z-10 pointer-events-none"
          style={{ width: '64px', background: 'linear-gradient(to left, var(--color-blue-500), transparent)' }}
          aria-hidden="true"
        />

        <div
          ref={trackRef}
          className="flex items-center flex-nowrap gap-x-[56px] w-max"
        >
          {trackLogos.map((logo, i) => {
            const height = logoHeight(logo.alt);
            return (
              <div
                key={i}
                className="flex items-center justify-center shrink-0"
                style={{ height: '55px' }}
              >
                <RecoloredLogo
                  src={logo.src}
                  name={logo.alt}
                  alt={logo.alt}
                  className="w-auto max-w-full object-contain"
                  style={{ height: `${height}px` }}
                  aria-hidden={i >= logos.length}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
