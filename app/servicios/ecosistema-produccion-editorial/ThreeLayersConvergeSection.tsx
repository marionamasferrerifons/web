'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Positions within a 1400px-wide reference canvas (from Figma). The whole
// composition is scaled down to fit narrower "lg" containers — see
// DESIGN_WIDTH / scale below — so these stay fixed regardless of viewport.
const DESIGN_WIDTH = 1400;
const DESIGN_HEIGHT = 586;
const LEFT_START   = 33;
const LEFT_END     = 392;
const RIGHT_START  = 1065;
const RIGHT_END    = 694;
const BOTTOM_TOP_START = 154;
const BOTTOM_TOP_END   = 370;
const BOTTOM_LEFT  = 398; // (1400 - 604) / 2

// The left/right pieces meet edge-to-edge at x=694 and the bottom piece
// meets their bottom edge at y=370 — an exact touching seam that can leave a
// 1px gap on non-integer display scaling. A small overlap hides that.
const SEAM_OVERLAP = 3;

export default function Section3() {
  const sectionRef  = useRef<HTMLElement>(null);
  const outerRef    = useRef<HTMLDivElement>(null);
  const leftRef     = useRef<HTMLDivElement>(null);
  const rightRef    = useRef<HTMLDivElement>(null);
  const bottomRef   = useRef<HTMLDivElement>(null);
  const resultRef   = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Scale the whole pixel-choreographed composition to fit whatever width
  // the container actually has, so it stays centered and never overflows on
  // "lg but not full 1400px" screens (typical laptops).
  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const update = () => setScale(Math.min(1, el.clientWidth / DESIGN_WIDTH));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1.5,
          start: 'top top',
          end: '+=1400',
        },
      });

      // Phase 1 (0→1): three pieces converge to center — pushed past their
      // exact touching edges by SEAM_OVERLAP so no subpixel gap can show.
      tl.to(leftRef.current,   { x: LEFT_END - LEFT_START + SEAM_OVERLAP,     duration: 1 }, 0)
        .to(rightRef.current,  { x: RIGHT_END - RIGHT_START - SEAM_OVERLAP,   duration: 1 }, 0)
        .to(bottomRef.current, { y: BOTTOM_TOP_END - BOTTOM_TOP_START - SEAM_OVERLAP, x: -6 + SEAM_OVERLAP, duration: 1 }, 0)

      // Phase 2 (0.8→1.5): card content fades, result appears
        .to('.s3-card-content', { opacity: 0, duration: 0.3 }, 0.8)
        .to(resultRef.current, { opacity: 1, duration: 0.5 }, 1.0);
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col items-center gap-[40px] py-[56px] px-[20px]"
      style={{ backgroundColor: '#ec937e' }}
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-[16px] text-center">
        <p
          className="opacity-65 uppercase"
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontWeight: 400,
            fontSize: 'var(--text-body-accent-mono)',
            lineHeight: 'var(--text-body-accent-mono--line-height)',
            letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
            color: 'var(--color-grey)',
          }}
        >
          [TRES CAPAS]
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-title-l)',
            lineHeight: 'var(--text-title-l--line-height)',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
            color: 'var(--color-white)',
            maxWidth: '685px',
          }}
        >
          Una <span style={{ color: 'var(--color-blue-400)' }}>suma</span> de inteligencias
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: 400,
            fontVariationSettings: '"opsz" 14',
            color: 'var(--color-grey)',
            maxWidth: '453px',
          }}
        >
          Combinamos el conocimiento pedagógico y editorial que has construido durante años, la capacidad de generación a escala de la IA y el criterio humano de tu equipo.
        </p>
      </div>

      {/* ── DESKTOP: animated cards ──
          The inner canvas below is always DESIGN_WIDTH×DESIGN_HEIGHT and all
          the pixel choreography lives inside it unchanged; this outer
          wrapper just scales that whole canvas down uniformly to fit
          whatever width the container actually has, so it's always centered
          and never overflows on "lg but narrower than 1400px" screens. */}
      <div
        ref={outerRef}
        className="hidden lg:block relative w-full shrink-0"
        style={{ height: DESIGN_HEIGHT * scale }}
      >
      <div
        className="absolute top-0 left-1/2"
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: 'top center',
        }}
      >
        {/* LEFT CARD */}
        <div
          ref={leftRef}
          className="absolute top-0"
          style={{ left: LEFT_START, width: 302, height: 370 }}
        >
          <div
            className="bg-white overflow-hidden w-full h-full"
            style={{ borderRadius: '128px 0 0 0', boxShadow: '0 4px 4px 0 rgba(150,150,150,0.25)' }}
          >
            <div className="s3-card-content flex flex-col justify-between h-full p-[32px]">
              <div className="flex flex-col gap-[16px] items-end">
                <div className="size-[48px] rounded-[4px] overflow-hidden flex items-center justify-center">
                  <img src="/s3-icon-knowledge.svg" alt="" className="size-[32px]" />
                </div>
                <p
                  className="text-right"
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '24px',
                    lineHeight: '32px',
                    fontWeight: 400,
                    fontVariationSettings: '"opsz" 14',
                    color: 'var(--color-blue-400)',
                  }}
                >
                  Tu conocimiento editorial
                </p>
              </div>
              <p
                className="text-right"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '16px',
                  lineHeight: '20px',
                  fontWeight: 400,
                  fontVariationSettings: '"opsz" 14',
                  color: 'var(--color-blue-300)',
                }}
              >
                El criterio pedagógico y editorial que tu equipo ha acumulado durante años, codificado y operativo.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CARD — horizontally mirrored so arch is top-right */}
        <div
          ref={rightRef}
          className="absolute top-0"
          style={{ left: RIGHT_START, width: 302, height: 370 }}
        >
          <div style={{ transform: 'scaleX(-1)', width: '100%', height: '100%' }}>
            <div
              className="bg-white overflow-hidden w-full h-full"
              style={{ borderRadius: '128px 0 0 0' }}
            >
              <div style={{ transform: 'scaleX(-1)', width: '100%', height: '100%' }}>
                <div className="s3-card-content flex flex-col justify-between h-full p-[32px]">
                  <div className="flex flex-col gap-[16px] items-start">
                    <div className="size-[48px] rounded-[4px] overflow-hidden flex items-center justify-center">
                      <img src="/s3-icon-team.svg" alt="" className="size-[32px]" />
                    </div>
                    <p
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '24px',
                        lineHeight: '32px',
                        fontWeight: 400,
                        fontVariationSettings: '"opsz" 14',
                        color: 'var(--color-blue-400)',
                      }}
                    >
                      Tu equipo editorial en el centro
                    </p>
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '16px',
                      lineHeight: '20px',
                      fontWeight: 400,
                      fontVariationSettings: '"opsz" 14',
                      color: 'var(--color-blue-300)',
                    }}
                  >
                    El criterio no se delega. Tu equipo supervisa y valida cada paso del proceso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CARD — width trimmed by 2×SEAM_OVERLAP to match the
            left+right cards' final combined span, now that they're inset by
            SEAM_OVERLAP on each side to close their own seam. */}
        <div
          ref={bottomRef}
          className="absolute"
          style={{ left: BOTTOM_LEFT, top: BOTTOM_TOP_START, width: 604 - SEAM_OVERLAP * 2, height: 216 }}
        >
          <div
            className="bg-white w-full h-full"
            style={{ boxShadow: '0 4px 2px 0 rgba(150,150,150,0.25)' }}
          >
            <div className="s3-card-content flex flex-col items-center justify-between h-full p-[32px]">
              <div className="flex flex-col gap-[16px] items-center">
                <div className="size-[48px] rounded-[4px] overflow-hidden flex items-center justify-center">
                  <img src="/s3-icon-ai.svg" alt="" className="size-[32px]" />
                </div>
                <p
                  className="text-center"
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '24px',
                    lineHeight: '32px',
                    fontWeight: 400,
                    fontVariationSettings: '"opsz" 14',
                    color: 'var(--color-blue-400)',
                  }}
                >
                  La potencia de la IA
                </p>
              </div>
              <p
                className="text-center"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '16px',
                  lineHeight: '20px',
                  fontWeight: 400,
                  fontVariationSettings: '"opsz" 14',
                  color: 'var(--color-blue-300)',
                  maxWidth: '441px',
                }}
              >
                Velocidad y capacidad de generación a escala, aplicada sobre tu conocimiento estructurado.
              </p>
            </div>
          </div>
        </div>

        {/* RESULT OVERLAY — fades in when pieces are assembled */}
        <div
          ref={resultRef}
          className="absolute flex items-center justify-center"
          style={{
            left: LEFT_END + SEAM_OVERLAP,
            top: 0,
            width: 604,
            height: 586,
            opacity: 0,
            pointerEvents: 'none',
          }}
        >
          <div className="flex flex-col items-center gap-[16px] text-center" style={{ maxWidth: '440px' }}>
            <img src="/s3-icon-result.svg" alt="" className="size-[48px]" />
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '48px',
                lineHeight: '50px',
                fontWeight: 400,
                fontVariationSettings: '"opsz" 14',
                color: 'var(--color-orange)',
              }}
            >
              Resultado
            </p>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '20px',
                lineHeight: '28px',
                fontWeight: 400,
                fontVariationSettings: '"opsz" 14',
                color: 'var(--color-orange)',
              }}
            >
              Un sistema de producción editorial con tus estándares y a la velocidad de la IA.
            </p>
          </div>
        </div>
      </div>
      </div>

      {/* ── MOBILE: static stacked layout ── */}
      <div className="lg:hidden flex flex-col gap-[24px] w-full">
        {[
          {
            icon: '/s3-icon-knowledge.svg',
            title: 'Tu conocimiento editorial',
            desc: 'El criterio pedagógico y editorial que tu equipo ha acumulado durante años, codificado y operativo.',
          },
          {
            icon: '/s3-icon-team.svg',
            title: 'Tu equipo editorial en el centro',
            desc: 'El criterio no se delega. Tu equipo supervisa y valida cada paso del proceso.',
          },
          {
            icon: '/s3-icon-ai.svg',
            title: 'La potencia de la IA',
            desc: 'Velocidad y capacidad de generación a escala, aplicada sobre tu conocimiento estructurado.',
          },
        ].map((card, i) => (
          <div key={i} className="bg-white rounded-[16px] p-[24px] flex flex-col gap-[16px]">
            <img src={card.icon} alt="" className="size-[32px]" />
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '20px',
                lineHeight: '28px',
                fontWeight: 400,
                color: 'var(--color-blue-400)',
              }}
            >
              {card.title}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '16px',
                lineHeight: '20px',
                fontWeight: 400,
                color: 'var(--color-blue-300)',
              }}
            >
              {card.desc}
            </p>
          </div>
        ))}

        {/* Result card */}
        <div className="bg-white rounded-[16px] p-[24px] flex flex-col items-center gap-[16px] text-center">
          <img src="/s3-icon-result.svg" alt="" className="size-[48px]" />
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '32px',
              lineHeight: '38px',
              fontWeight: 400,
              color: 'var(--color-orange)',
            }}
          >
            Resultado
          </p>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '16px',
              lineHeight: '20px',
              fontWeight: 400,
              color: 'var(--color-orange)',
            }}
          >
            Un sistema de producción editorial con tus estándares y a la velocidad de la IA.
          </p>
        </div>
      </div>
    </section>
  );
}
