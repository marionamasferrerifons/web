'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTag from '@/components/service/SectionTag';

const DECISIONS = [
  {
    number: '01',
    title: '¿Dónde puede ayudarnos la IA?',
    body: 'Te ayudo a identificar qué problemas de tu editorial merece la pena abordar con IA y dónde podría aportar valor.',
  },
  {
    number: '02',
    title: '¿Por dónde empezamos entre tantas ideas?',
    body: 'Te ayudo a priorizar iniciativas según su valor, viabilidad y encaje con los objetivos de tu editorial.',
  },
  {
    number: '03',
    title: '¿Qué herramienta de IA incorporamos?',
    body: 'Te ayudo a comparar alternativas y valorar la inversión, los recursos y las dependencias que implica cada opción.',
  },
  {
    number: '04',
    title: '¿Tiene sentido esta propuesta de un proveedor?',
    body: 'Te ayudo a entender y valorar lo que las empresas tecnológicas te ofrecen y te doy pautas para tomar decisiones informadas.',
  },
  {
    number: '05',
    title: '¿Podemos crear nuevos productos o negocios?',
    body: 'Te ayudo a explorar oportunidades de negocio a partir de tu catálogo, tu conocimiento y las necesidades de docentes, centros y alumnado.',
  },
  {
    number: '06',
    title: '¿Por qué no funciona lo que hemos probado?',
    body: 'Te ayudo a analizar los bloqueos y a decidir si conviene ajustar el enfoque de la iniciativa, replantearla o detenerla antes de comprometer más presupuesto.',
  },
];

export default function DecisionsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from('.decisions-title', {
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.decisions-title', start: 'top 85%' },
      });

      gsap.utils.toArray<HTMLElement>('.decision-card').forEach((card, i) => {
        gsap.from(card, {
          y: 24, opacity: 0, duration: 0.6, ease: 'power3.out', delay: (i % 3) * 0.08,
          scrollTrigger: { trigger: card, start: 'top 90%' },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex justify-center py-[64px] md:py-[96px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-grey)' }}
    >
      <div className="w-full flex flex-col gap-[56px]" style={{ maxWidth: '1160px' }}>
        <h2
          className="decisions-title text-center mx-auto"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'var(--text-title-l)',
            lineHeight: 'var(--text-title-l--line-height)',
            fontWeight: 400,
            color: 'var(--color-blue-400)',
            maxWidth: '820px',
            textWrap: 'balance',
          }}
        >
          Te ayudo a responder las preguntas que{' '}
          <span style={{ color: 'var(--color-orange-400)' }}>no puedes seguir aplazando.</span>
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
          {DECISIONS.map((d) => (
            <li
              key={d.number}
              className="decision-card bg-white flex flex-col gap-[16px] p-[24px] md:p-[32px]"
              style={{ borderRadius: '24px' }}
            >
              <SectionTag color="var(--color-text-secondary)">{d.number}</SectionTag>
              <h3
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'var(--text-body-xl)',
                  lineHeight: 'var(--text-body-xl--line-height)',
                  fontWeight: 400,
                  color: 'var(--color-blue-400)',
                  textWrap: 'balance',
                }}
              >
                {d.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'var(--text-body-m)',
                  lineHeight: '24px',
                  fontWeight: 300,
                  color: 'var(--color-text-secondary)',
                }}
              >
                {d.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
