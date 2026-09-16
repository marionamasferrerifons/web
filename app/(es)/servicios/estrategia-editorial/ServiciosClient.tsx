'use client';

import { useState, useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BOOKING_URL } from '@/lib/constants';

export type ServiciosClientContent = {
  hero: { tag: string; title: ReactNode; body: string; ctaLabel: string }
  section2: { title: string; items: { dot: string; text: string }[] }
  section3: { tag: string; title: ReactNode; subtitle: string }
  serviceLink: { viewMore: string; viewLess: string }
  card1: {
    title: string
    body: string
    workshops: { label: string; title: string; duration: string; format: string; description: string; outcomes: string[] }[]
    whatYoullGetLabel: string
  }
  card2: {
    title: string
    body: string
    expandedTitle: string
    expandedBody: string
    durationBadge: string
    weeks: { label: string; title: string; detail: string }[]
    whatYoullGetLabel: string
    whatYoullGetItems: string[]
  }
  card3: {
    title: string
    body: string
    expandedTitle: string
    expandedBody: string
    howItWorksLabel: string
    howItWorksItems: string[]
    whatYoullGetLabel: string
    whatYoullGetItems: string[]
  }
}

// Flag reutilitzable per amagar/mostrar Card 1 sense eliminar-ne el codi.
const SHOW_CARD_1 = false;

const linkStyle = {
  fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
  fontSize: 'var(--text-body-m)',
  lineHeight: 'var(--text-body-m--line-height)',
};

function ServiceLink({ open, onToggle, labels }: { open?: boolean; onToggle?: () => void; labels: { viewMore: string; viewLess: string } }) {
  return (
    <button
      onClick={onToggle}
      className="group flex items-end gap-[4px] border-b border-orange w-fit cursor-pointer bg-transparent hover:bg-white transition-colors duration-200"
    >
      <span className="text-text-accent uppercase py-[5px]" style={linkStyle}>
        {open ? labels.viewLess : labels.viewMore}
      </span>
      <img
        src={open ? '/link-minus.svg' : '/link-arrow.svg'}
        alt=""
        className="size-[20px] mb-[5px] transition-transform duration-200 group-hover:rotate-45"
        aria-hidden="true"
      />
    </button>
  );
}

export default function ServiciosClient({ content }: { content: ServiciosClientContent }) {
  const [card1Open, setCard1Open] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(0);
  const [card2Open, setCard2Open] = useState(false);
  const [card3Open, setCard3Open] = useState(false);

  const ws = content.card1.workshops[selectedWorkshop];

  const heroRef = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const heroCtx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-tag',      { y: -24, opacity: 0, duration: 0.6 })
        .from('.hero-title',    { y: 64,  opacity: 0, duration: 1.0 }, '-=0.35')
        .from('.hero-body',     { y: 40,  opacity: 0, duration: 0.8 }, '-=0.55')
        .from('.hero-cta',      { y: 24,  opacity: 0, duration: 0.6 }, '-=0.45')
        .from('.hero-vector-r', { x: 40,  opacity: 0, duration: 1.0 }, '-=0.8')
        .from('.hero-vector-l', { x: -40, opacity: 0, duration: 1.0 }, '<');
    }, heroRef);

    const s2Ctx = gsap.context(() => {
      gsap.from('.s2-ellipse', {
        scale: 0.85,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.s2-ellipse', start: 'top 85%' },
      });

      gsap.from('.s2-title', {
        y: 48,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.s2-title', start: 'top 80%' },
      });

      gsap.from('.s2-item', {
        y: 32,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: '.s2-item', start: 'top 80%' },
      });
    }, section2Ref);

    const s3Ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: '.s3-header', start: 'top 80%' },
        defaults: { ease: 'power3.out' },
      });

      tl.from('.s3-tag',      { y: -20, opacity: 0, duration: 0.5 })
        .from('.s3-title',    { y: 48,  opacity: 0, duration: 0.9 }, '-=0.2')
        .from('.s3-subtitle', { y: 32,  opacity: 0, duration: 0.7 }, '-=0.5');

      gsap.utils.toArray<Element>('.s3-card').forEach((card) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%' },
        });
      });
    }, section3Ref);

    return () => {
      heroCtx.revert();
      s2Ctx.revert();
      s3Ctx.revert();
    };
  }, []);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative w-full overflow-hidden bg-green flex flex-col items-center pt-[calc(var(--navbar-height)+80px)] pb-[56px] min-h-[660px] px-[20px] md:px-0">

        <img
          src="/hero-vector-right.svg"
          alt=""
          className="hero-vector-r absolute right-0 top-[111px] translate-x-3"
          style={{ width: '176.53px', height: '101.51px' }}
          aria-hidden="true"
        />

        <img
          src="/hero-vector-left.svg"
          alt=""
          className="hero-vector-l absolute left-0 top-[369px] -translate-x-8"
          style={{ width: '176.53px', height: '101.51px' }}
          aria-hidden="true"
        />

        <div className="relative flex flex-col items-center gap-[45px] w-full" style={{ zIndex: 1 }}>

          <div className="flex flex-col items-center gap-4 text-center w-full" style={{ maxWidth: '809px' }}>
            <p
              className="hero-tag text-blue-400 opacity-65 uppercase whitespace-nowrap overflow-hidden text-ellipsis w-full"
              style={{
                fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
                fontSize: 'var(--text-body-accent-mono)',
                lineHeight: 'var(--text-body-accent-mono--line-height)',
                letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
              }}
            >
              {content.hero.tag}
            </p>
            <h1
              className="hero-title text-blue-500"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 'var(--text-title-xxl)',
                lineHeight: 'var(--text-title-xxl--line-height)',
                fontWeight: 400,
                fontVariationSettings: '"opsz" 14',
              }}
            >
              {content.hero.title}
            </h1>
          </div>

          <div className="flex flex-col items-center gap-6 w-full" style={{ maxWidth: '570px' }}>
            <p
              className="hero-body text-text-secondary-strong text-center"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 'var(--text-body-l)',
                lineHeight: 'var(--text-body-l--line-height)',
                fontWeight: 300,
                fontVariationSettings: '"opsz" 14',
                maxWidth: '468px',
                textWrap: 'balance',
              }}
            >
              {content.hero.body}
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta group flex items-center gap-4 bg-grey hover:bg-white rounded-full pl-7 pr-3 py-2 transition-colors duration-[330ms] ease-linear"
            >
              <span
                className="text-text-accent uppercase"
                style={{
                  fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
                  fontSize: 'var(--text-body-accent-mono)',
                  lineHeight: 'var(--text-body-accent-mono--line-height)',
                  letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                }}
              >
                {content.hero.ctaLabel}
              </span>
              <span className="flex items-center justify-center bg-orange rounded-full shrink-0 size-[27px]">
                <img src="/arrow-white.svg" alt="" className="size-4 transition-transform duration-300 ease-out group-hover:rotate-45" aria-hidden="true" />
              </span>
            </a>
          </div>

        </div>

      </section>

      {/* Section 2 — ¿Te pasa que...? */}
      <section ref={section2Ref} className="relative bg-grey overflow-hidden pt-[64px] px-[20px] md:px-0" style={{ minHeight: '780px' }}>

        <img
          src="/section2-ellipse.svg"
          alt=""
          className="s2-ellipse absolute left-1/2 -translate-x-1/2"
          style={{ width: '800px', height: '800px', top: '-78px', zIndex: 0 }}
          aria-hidden="true"
        />

        <div
          className="relative mx-auto flex flex-col items-center gap-[40px] py-[64px]"
          style={{ maxWidth: '1161px', zIndex: 1 }}
        >
          <h2
            className="s2-title text-blue-400"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-xl)',
              lineHeight: 'var(--text-title-xl--line-height)',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
            }}
          >
            {content.section2.title}
          </h2>

          <div className="flex flex-col gap-[16px] items-center" style={{ maxWidth: '664px' }}>
            {content.section2.items.map(({ dot, text }, i) => (
              <div key={i} className="s2-item flex items-center gap-[8px] bg-white rounded-[8px] p-[14px]">
                <div className="rounded-full shrink-0 size-[10px]" style={{ backgroundColor: dot }} />
                <p
                  className="text-text-secondary"
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 'var(--text-body-m)',
                    lineHeight: 'var(--text-body-m--line-height)',
                    fontWeight: 300,
                    fontVariationSettings: '"opsz" 14',
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Section 3 — Lo que ofrezco */}
      <section ref={section3Ref} className="bg-grey py-[56px] px-[20px]">
        <div className="mx-auto flex flex-col gap-[40px]" style={{ maxWidth: '1400px' }}>

          {/* Header */}
          <div className="s3-header flex flex-col items-center gap-[16px] text-center">
            <p
              className="s3-tag text-text-secondary opacity-65 uppercase"
              style={{
                fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
                fontSize: 'var(--text-body-accent-mono)',
                lineHeight: 'var(--text-body-accent-mono--line-height)',
                letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
              }}
            >
              {content.section3.tag}
            </p>
            <div className="flex flex-col items-center gap-[16px]" style={{ maxWidth: '684px' }}>
              <h2
                className="s3-title text-blue-400"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'var(--text-title-l)',
                  lineHeight: 'var(--text-title-l--line-height)',
                  fontWeight: 400,
                  fontVariationSettings: '"opsz" 14',
                }}
              >
                {content.section3.title}
              </h2>
              <p
                className="s3-subtitle text-text-secondary"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'var(--text-body-m)',
                  lineHeight: 'var(--text-body-m--line-height)',
                  fontWeight: 300,
                  fontVariationSettings: '"opsz" 14',
                  maxWidth: '453px',
                  textWrap: 'balance',
                }}
              >
                {content.section3.subtitle}
              </p>
            </div>
          </div>

          {/* Service cards */}
          <div className="flex flex-col gap-[24px]">

            {/* Card 1 — expandable */}
            {SHOW_CARD_1 && (
            <div className="s3-card bg-white rounded-[24px] p-[32px] md:p-[40px] flex flex-col gap-[40px]">

              {/* Main content */}
              <div className="flex flex-col gap-[24px] md:flex-row md:items-start md:justify-between md:h-[419px]">
                <div className="flex flex-col gap-[24px] md:justify-between md:h-full" style={{ maxWidth: '652px' }}>
                  <div className="flex flex-col gap-[24px]">
                    <h3
                      className="text-blue-400"
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: 'var(--text-title-m)',
                        lineHeight: 'var(--text-title-m--line-height)',
                        fontWeight: 400,
                        fontVariationSettings: '"opsz" 14',
                      }}
                    >
                      {content.card1.title}
                    </h3>
                    <p
                      className="text-text-secondary"
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: 'var(--text-body-l)',
                        lineHeight: 'var(--text-body-l--line-height)',
                        fontWeight: 300,
                        fontVariationSettings: '"opsz" 14',
                      }}
                    >
                      {content.card1.body}
                    </p>
                  </div>
                  <ServiceLink open={card1Open} onToggle={() => setCard1Open(!card1Open)} labels={content.serviceLink} />
                </div>
                <div className="order-first md:order-last rounded-[16px] overflow-hidden h-[260px] w-full md:h-full md:w-[586px] md:shrink-0" style={{ backgroundColor: '#cfece7' }}>
                  <img src="/section3-illu-1.svg" alt="" className="size-full object-cover" aria-hidden="true" />
                </div>
              </div>

              {/* Expanded section */}
              {card1Open && (
                <div className="flex flex-col gap-[24px]">

                  {/* Workshop tabs */}
                  <div className="flex gap-[40px]">
                    {content.card1.workshops.map((workshop, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedWorkshop(i)}
                        className="flex-1 text-left py-[20px] cursor-pointer"
                        style={{
                          background: 'transparent',
                          borderBottom: `2px solid ${selectedWorkshop === i ? 'var(--color-orange-400)' : 'var(--color-blue-100)'}`,
                        }}
                      >
                        <p
                          className="text-text-secondary"
                          style={{
                            fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
                            fontSize: 'var(--text-body-accent-mono)',
                            lineHeight: 'var(--text-body-accent-mono--line-height)',
                            letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                          }}
                        >
                          {workshop.label}
                        </p>
                        <p
                          className="mt-[4px]"
                          style={{
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: 'var(--text-body-xl)',
                            lineHeight: 'var(--text-body-xl--line-height)',
                            fontWeight: 300,
                            fontVariationSettings: '"opsz" 14',
                            color: selectedWorkshop === i ? 'var(--color-blue-400)' : 'var(--color-blue-300)',
                          }}
                        >
                          {workshop.title}
                        </p>
                      </button>
                    ))}
                  </div>

                  {/* Workshop detail panel */}
                  <div className="bg-grey rounded-[16px] p-[32px]">

                    {/* Label + badges */}
                    <div className="flex items-center justify-between">
                      <p
                        className="text-text-secondary"
                        style={{
                          fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
                          fontSize: 'var(--text-body-accent-mono)',
                          lineHeight: 'var(--text-body-accent-mono--line-height)',
                          letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                        }}
                      >
                        {ws.label}
                      </p>
                      <div className="flex gap-[8px]">
                        {[ws.duration, ws.format].map((badge) => (
                          <span
                            key={badge}
                            className="bg-white rounded-full px-[16px] py-[4px] text-blue-400"
                            style={{
                              fontFamily: 'var(--font-dm-sans)',
                              fontSize: 'var(--text-body-accent-mono)',
                              fontWeight: 300,
                            }}
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Title */}
                    <h4
                      className="text-blue-400 mt-[4px]"
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: 'var(--text-title-s)',
                        lineHeight: 'var(--text-title-s--line-height)',
                        fontWeight: 400,
                        fontVariationSettings: '"opsz" 14',
                      }}
                    >
                      {ws.title}
                    </h4>

                    {/* Description + outcomes */}
                    <div className="flex flex-col gap-[24px] md:flex-row md:gap-[40px] mt-[16px]">
                      <p
                        className="text-text-secondary flex-1"
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: 'var(--text-body-m)',
                          lineHeight: 'var(--text-body-m--line-height)',
                          fontWeight: 300,
                          fontVariationSettings: '"opsz" 14',
                        }}
                      >
                        {ws.description}
                      </p>
                      <div className="flex-1 flex flex-col gap-[16px] mt-[8px]">
                        <p
                          className="text-text-secondary"
                          style={{
                            fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
                            fontSize: 'var(--text-body-accent-mono)',
                            lineHeight: 'var(--text-body-accent-mono--line-height)',
                            letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                          }}
                        >
                          {content.card1.whatYoullGetLabel}
                        </p>
                        {ws.outcomes.map((outcome, i) => (
                          <div key={i} className="flex items-center gap-[12px]">
                            <span className="bg-green rounded-full size-[24px] flex items-center justify-center shrink-0">
                              <img src="/hero-arrow.svg" alt="" className="size-[12px]" aria-hidden="true" />
                            </span>
                            <p
                              className="text-blue-400"
                              style={{
                                fontFamily: 'var(--font-dm-sans)',
                                fontSize: 'var(--text-body-m)',
                                lineHeight: 'var(--text-body-m--line-height)',
                                fontWeight: 300,
                                fontVariationSettings: '"opsz" 14',
                              }}
                            >
                              {outcome}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              )}

            </div>
            )}

            {/* Card 2 — expandable */}
            <div className="s3-card bg-white rounded-[24px] p-[32px] md:p-[40px] flex flex-col gap-[64px]">
              <div className="flex flex-col gap-[24px] md:flex-row md:items-start md:justify-between md:h-[419px]">
                <div className="flex flex-col gap-[24px] md:justify-between md:h-full" style={{ maxWidth: '652px' }}>
                  <div className="flex flex-col gap-[24px]">
                    <h3
                      className="text-blue-400"
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: 'var(--text-title-m)',
                        lineHeight: 'var(--text-title-m--line-height)',
                        fontWeight: 400,
                        fontVariationSettings: '"opsz" 14',
                      }}
                    >
                      {content.card2.title}
                    </h3>
                    <p
                      className="text-text-secondary"
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: 'var(--text-body-l)',
                        lineHeight: 'var(--text-body-l--line-height)',
                        fontWeight: 300,
                        fontVariationSettings: '"opsz" 14',
                      }}
                    >
                      {content.card2.body}
                    </p>
                  </div>
                  <ServiceLink open={card2Open} onToggle={() => setCard2Open(!card2Open)} labels={content.serviceLink} />
                </div>
                <div className="order-first md:order-last rounded-[16px] overflow-hidden h-[260px] w-full md:h-full md:w-[586px] md:shrink-0" style={{ backgroundColor: '#cfece7' }}>
                  <img src="/section3-illu-2.svg" alt="" className="size-full object-cover" aria-hidden="true" />
                </div>
              </div>

              {card2Open && (
                <div className="flex flex-col gap-[40px]">

                  {/* Programme panel */}
                  <div className="bg-grey rounded-[16px] p-[32px] flex flex-col gap-[40px]">

                    <div className="flex flex-col gap-[16px] md:flex-row md:items-start md:justify-between">
                      <div className="flex flex-col gap-[24px]" style={{ maxWidth: '610px' }}>
                        <h4
                          className="text-blue-400"
                          style={{
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: 'var(--text-title-s)',
                            lineHeight: 'var(--text-title-s--line-height)',
                            fontWeight: 400,
                            fontVariationSettings: '"opsz" 14',
                          }}
                        >
                          {content.card2.expandedTitle}
                        </h4>
                        <p
                          className="text-text-secondary"
                          style={{
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: 'var(--text-body-m)',
                            lineHeight: 'var(--text-body-m--line-height)',
                            fontWeight: 300,
                            fontVariationSettings: '"opsz" 14',
                          }}
                        >
                          {content.card2.expandedBody}
                        </p>
                      </div>
                      <span
                        className="bg-white rounded-full px-[24px] py-[4px] text-blue-400 shrink-0"
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: 'var(--text-body-m)',
                          lineHeight: 'var(--text-body-m--line-height)',
                          fontWeight: 300,
                        }}
                      >
                        {content.card2.durationBadge}
                      </span>
                    </div>

                    {/* Weekly rows */}
                    <div className="flex flex-col">
                      {content.card2.weeks.map(({ label, title, detail }, i) => (
                        <div
                          key={i}
                          className="group flex items-center justify-between p-[24px] cursor-default"
                          style={{
                            borderTop: i === 0 ? '1px solid var(--color-blue-300)' : 'none',
                            borderBottom: '1px solid var(--color-blue-300)',
                          }}
                        >
                          <div className="flex items-center gap-[72px]">
                            <p
                              className="text-text-secondary shrink-0"
                              style={{
                                fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
                                fontSize: 'var(--text-body-accent-mono)',
                                lineHeight: 'var(--text-body-accent-mono--line-height)',
                                letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                                width: '69px',
                              }}
                            >
                              {label}
                            </p>
                            <p
                              className="text-blue-400"
                              style={{
                                fontFamily: 'var(--font-dm-sans)',
                                fontSize: 'var(--text-body-xl)',
                                lineHeight: 'var(--text-body-xl--line-height)',
                                fontWeight: 300,
                                fontVariationSettings: '"opsz" 14',
                              }}
                            >
                              {title}
                            </p>
                          </div>

                          <div className="relative flex items-center" style={{ maxWidth: '591px' }}>
                            <span className="absolute right-0 flex items-center justify-center bg-orange rounded-full shrink-0 size-[28px] group-hover:opacity-0 transition-opacity duration-200">
                              <img src="/hero-arrow.svg" alt="" className="size-[14px]" aria-hidden="true" />
                            </span>
                            <div className="flex items-center gap-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <div className="bg-green rounded-full shrink-0 size-[16px]" />
                              <p
                                className="text-text-secondary"
                                style={{
                                  fontFamily: 'var(--font-dm-sans)',
                                  fontSize: 'var(--text-body-m)',
                                  lineHeight: 'var(--text-body-m--line-height)',
                                  fontWeight: 300,
                                  fontVariationSettings: '"opsz" 14',
                                }}
                              >
                                {detail}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* [LO QUE CONSEGUIRÁS] */}
                  <div className="flex flex-col gap-[16px]">
                    <p
                      className="text-text-secondary"
                      style={{
                        fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
                        fontSize: 'var(--text-body-accent-mono)',
                        lineHeight: 'var(--text-body-accent-mono--line-height)',
                        letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                      }}
                    >
                      {content.card2.whatYoullGetLabel}
                    </p>
                    <div className="flex flex-col gap-[24px] md:flex-row md:gap-[40px]">
                      {content.card2.whatYoullGetItems.map((text, i) => (
                        <div key={i} className="flex flex-1 items-center gap-[16px]">
                          <img src="/outcome-icon.svg" alt="" className="size-[32px] shrink-0" aria-hidden="true" />
                          <p
                            className="text-blue-400"
                            style={{
                              fontFamily: 'var(--font-dm-sans)',
                              fontSize: 'var(--text-body-l)',
                              lineHeight: 'var(--text-body-l--line-height)',
                              fontWeight: 300,
                              fontVariationSettings: '"opsz" 14',
                            }}
                          >
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}
            </div>

            {/* Card 3 — expandable */}
            <div className="s3-card bg-white rounded-[24px] p-[32px] md:p-[40px] flex flex-col gap-[64px]">
              <div className="flex flex-col gap-[24px] md:flex-row md:items-start md:justify-between md:h-[419px]">
                <div className="flex flex-col gap-[24px] md:justify-between md:h-full" style={{ maxWidth: '652px' }}>
                  <div className="flex flex-col gap-[24px]">
                    <h3
                      className="text-blue-400"
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: 'var(--text-title-m)',
                        lineHeight: 'var(--text-title-m--line-height)',
                        fontWeight: 400,
                        fontVariationSettings: '"opsz" 14',
                      }}
                    >
                      {content.card3.title}
                    </h3>
                    <p
                      className="text-text-secondary"
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: 'var(--text-body-l)',
                        lineHeight: 'var(--text-body-l--line-height)',
                        fontWeight: 300,
                        fontVariationSettings: '"opsz" 14',
                      }}
                    >
                      {content.card3.body}
                    </p>
                  </div>
                  <ServiceLink open={card3Open} onToggle={() => setCard3Open(!card3Open)} labels={content.serviceLink} />
                </div>
                <div className="order-first md:order-last rounded-[16px] overflow-hidden h-[260px] w-full md:h-full md:w-[586px] md:shrink-0" style={{ backgroundColor: '#cfece7' }}>
                  <img src="/section3-illu-3.svg" alt="" className="size-full object-cover" aria-hidden="true" />
                </div>
              </div>

              {card3Open && (
                <div className="flex flex-col gap-[40px]">

                  <div className="bg-grey rounded-[16px] p-[32px] flex flex-col gap-[24px] md:flex-row md:gap-[40px] md:items-start">

                    <div className="flex-1 flex flex-col gap-[24px]">
                      <h4
                        className="text-blue-400"
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: 'var(--text-title-s)',
                          lineHeight: 'var(--text-title-s--line-height)',
                          fontWeight: 400,
                          fontVariationSettings: '"opsz" 14',
                        }}
                      >
                        {content.card3.expandedTitle}
                      </h4>
                      <p
                        className="text-text-secondary"
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: 'var(--text-body-m)',
                          lineHeight: 'var(--text-body-m--line-height)',
                          fontWeight: 300,
                          fontVariationSettings: '"opsz" 14',
                        }}
                      >
                        {content.card3.expandedBody}
                      </p>
                    </div>

                    <div className="flex-1 flex flex-col gap-[24px]">
                      <p
                        className="text-text-secondary"
                        style={{
                          fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
                          fontSize: 'var(--text-body-accent-mono)',
                          lineHeight: 'var(--text-body-accent-mono--line-height)',
                          letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                        }}
                      >
                        {content.card3.howItWorksLabel}
                      </p>
                      {content.card3.howItWorksItems.map((text, i) => (
                        <div key={i} className="flex items-center gap-[16px]">
                          <img src="/caio-step-icon.svg" alt="" className="size-[24px] shrink-0" aria-hidden="true" />
                          <p
                            className="text-blue-500"
                            style={{
                              fontFamily: 'var(--font-dm-sans)',
                              fontSize: 'var(--text-body-l)',
                              lineHeight: 'var(--text-body-l--line-height)',
                              fontWeight: 300,
                              fontVariationSettings: '"opsz" 14',
                            }}
                          >
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>

                  </div>

                  <div className="flex flex-col gap-[16px]">
                    <p
                      className="text-text-secondary"
                      style={{
                        fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
                        fontSize: 'var(--text-body-accent-mono)',
                        lineHeight: 'var(--text-body-accent-mono--line-height)',
                        letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
                      }}
                    >
                      {content.card3.whatYoullGetLabel}
                    </p>
                    <div className="flex flex-col gap-[24px] md:flex-row md:gap-[40px]">
                      {content.card3.whatYoullGetItems.map((text, i) => (
                        <div key={i} className="flex flex-1 flex-col items-start gap-[16px]">
                          <img src="/outcome-icon.svg" alt="" className="size-[32px] shrink-0" aria-hidden="true" />
                          <p
                            className="text-blue-400"
                            style={{
                              fontFamily: 'var(--font-dm-sans)',
                              fontSize: 'var(--text-body-l)',
                              lineHeight: 'var(--text-body-l--line-height)',
                              fontWeight: 300,
                              fontVariationSettings: '"opsz" 14',
                            }}
                          >
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
