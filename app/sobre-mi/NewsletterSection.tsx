'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function NewsletterSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        defaults: { ease: 'power3.out' },
      });

      tl.from('.newsletter-illustration', { opacity: 0, y: 40, rotate: -8, scale: 0.85, duration: 0.9, ease: 'back.out(1.6)' })
        .from('.newsletter-title',    { y: 32, opacity: 0, duration: 0.8 }, '-=0.5')
        .from('.newsletter-subtitle', { y: 20, opacity: 0, duration: 0.6 }, '-=0.5')
        .from('.newsletter-button',   { y: 16, opacity: 0, duration: 0.5 }, '-=0.4')
        .from('.newsletter-side-deco', { opacity: 0, scale: 0.7, duration: 0.7, stagger: 0.15, ease: 'back.out(1.6)' }, '-=0.6');

      // Continuous idle floating motion for the "fancy" feel
      gsap.to('.newsletter-illustration', {
        y: '-=14',
        rotate: '+=2',
        duration: 3.2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
      gsap.to('.newsletter-side-deco-1', {
        y: '-=10',
        rotate: '-=3',
        duration: 2.6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
      gsap.to('.newsletter-side-deco-2', {
        y: '+=10',
        rotate: '+=3',
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden flex justify-center py-[96px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-blue-100)' }}
    >
      {/* Left illustration — open letter with fanned pages peeking out of an envelope */}
      <img
        src="/about-nl-letter-open.svg"
        alt=""
        className="newsletter-illustration absolute hidden lg:block"
        style={{ width: '300px', aspectRatio: '420 / 446', left: '-20px', bottom: '10px' }}
        aria-hidden="true"
      />

      {/* Right decorative envelopes */}
      <img
        src="/about-nl-envelope-closed.svg"
        alt=""
        className="newsletter-side-deco newsletter-side-deco-1 absolute hidden lg:block"
        style={{ width: '276px', height: '159px', right: '-60px', top: '20px', transform: 'rotate(-14.5deg)' }}
        aria-hidden="true"
      />
      <img
        src="/about-nl-postcard.svg"
        alt=""
        className="newsletter-side-deco newsletter-side-deco-2 absolute hidden lg:block"
        style={{ width: '220px', height: '151px', right: '60px', top: '190px', transform: 'rotate(11deg)' }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-center gap-[32px]" style={{ maxWidth: '686px' }}>
        <div className="flex flex-col gap-[16px] items-center">
          <h2
            className="newsletter-title text-center"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-l)',
              lineHeight: 'var(--text-title-l--line-height)',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-blue-400)',
            }}
          >
            Una <span style={{ color: 'var(--color-orange-400)' }}>newsletter</span> para el sector editorial educativo
          </h2>
          <p
            className="newsletter-subtitle text-center"
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
            Cada mes, escribo una newsletter con reflexiones sobre el presente y el futuro de las editoriales educativas.
          </p>
        </div>

        <button
          className="newsletter-button group flex items-center gap-[16px] bg-white hover:bg-grey rounded-full cursor-pointer transition-colors duration-[330ms] ease-linear"
          style={{ paddingLeft: '28px', paddingRight: '12px', paddingTop: '8px', paddingBottom: '8px' }}
        >
          <span
            className="uppercase text-orange"
            style={{
              fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
              fontSize: 'var(--text-body-accent-mono)',
              lineHeight: 'var(--text-body-accent-mono--line-height)',
              letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
            }}
          >
            SUSCRIBIRME
          </span>
          <span className="flex items-center justify-center bg-orange rounded-full shrink-0 size-[27px]">
            <img
              src="/arrow-white.svg"
              alt=""
              className="size-4 transition-transform duration-300 ease-out group-hover:rotate-45"
              aria-hidden="true"
            />
          </span>
        </button>
      </div>
    </section>
  );
}
