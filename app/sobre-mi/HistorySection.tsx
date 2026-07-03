'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Milestone = {
  date: string
  description: ReactNode
}

type HistoryEntryData = {
  title: string
  description: string
  milestones: Milestone[]
  titleSide: 'left' | 'right'
}

const LOREM_INTRO = 'Lorem ipsum dolor sit amet consectetur. Neque adipiscing adipiscing tristique quis. Nisi proin commodo purus semper consequat aliquam. Posuere metus lobortis pellentesque dui tristique lacus quis. In magna senectus';
const LOREM_REPEATED = 'Lorem ipsum dolor sit amet consectetur. Mi tincidunt donec dignissim tincidunt dignissim pellentesque tempor diam. Nec placerat adipiscing quis nulla nisl. Risus nec leo venenatis phasellus semper mollis.';

const boldStyle = { fontWeight: 600, color: 'var(--color-blue-400)' } as const;

const entries: HistoryEntryData[] = [
  {
    title: 'Entre libros y estrategia',
    description: LOREM_INTRO,
    titleSide: 'left',
    milestones: [
      { date: '2004-2009', description: <>Estudié <strong style={boldStyle}>Filología Catalana</strong> en la UAB</> },
      { date: '2009-2012', description: <>Trabajé como <strong style={boldStyle}>gestora cultural</strong> en el IRL</> },
      { date: '2012-2013', description: <>Hice un máster en <strong style={boldStyle}>Filosofía Contemporánea</strong> en la UIB</> },
    ],
  },
  {
    title: 'El libro digital',
    description: LOREM_REPEATED,
    titleSide: 'right',
    milestones: [
      { date: '2012-2014', description: <>Mi primera experiencia como <strong style={boldStyle}>coordinadora editorial</strong></> },
      { date: '2014', description: <>Hice un máster en <strong style={boldStyle}>edición digital</strong> en la UA</> },
    ],
  },
  {
    title: 'La educación',
    description: LOREM_REPEATED,
    titleSide: 'left',
    milestones: [
      { date: '2015-2019', description: <>Trabajo intenso como <strong style={boldStyle}>editora digital</strong> en Editorial Altamar</> },
    ],
  },
  {
    title: 'Dentro del aula',
    description: LOREM_REPEATED,
    titleSide: 'right',
    milestones: [
      { date: '2019-2021', description: <><strong style={boldStyle}>Profesora</strong> de lengua y literatura</> },
    ],
  },
  {
    title: 'Buenos Aires',
    description: LOREM_REPEATED,
    titleSide: 'left',
    milestones: [
      { date: '2021', description: <>Empecé a trabajar como <strong style={boldStyle}>editora freelance</strong> especializada en educación</> },
      { date: '2019-2021', description: <>Me formé en <strong style={boldStyle}>Pedagogías para la Igualdad</strong> en la UBA</> },
    ],
  },
  {
    title: 'La inteligencia artificial',
    description: LOREM_REPEATED,
    titleSide: 'right',
    milestones: [
      { date: '2024', description: <>Estudié el máster en <strong style={boldStyle}>IA e Innovación</strong> de Founderz</> },
    ],
  },
  {
    title: 'Hoy',
    description: 'Acompaño a editoriales educativas en un momento en que su papel está más cuestionado que nunca. Mi trabajo es ayudarlas a evolucionar su estrategia de negocio y sus sistemas de producción para navegar con seguridad un sector transformado por la IA',
    titleSide: 'left',
    milestones: [
      { date: '2025', description: <>De editora a consultora de <strong style={boldStyle}>innovación</strong> y producción editorial</> },
    ],
  },
];

const titleStyle = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: 'var(--text-title-s)',
  lineHeight: 'var(--text-title-s--line-height)',
  fontWeight: 400,
  fontVariationSettings: '"opsz" 14',
  color: 'var(--color-blue-400)',
} as const;

const bodyStyle = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: 'var(--text-body-m)',
  lineHeight: 'var(--text-body-m--line-height)',
  fontWeight: 400,
  fontVariationSettings: '"opsz" 14',
  color: 'var(--color-blue-300)',
} as const;

const dateTagStyle = {
  fontFamily: 'var(--font-dm-mono)',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '24px',
  letterSpacing: '-0.5px',
  color: 'var(--color-blue-500)',
} as const;

function TitleBlock({ title, description, align }: { title: string; description: string; align: 'left' | 'right' }) {
  return (
    <div className={`flex flex-col gap-[24px] w-full ${align === 'right' ? 'items-start text-left' : 'items-end text-right'}`}>
      <p style={titleStyle}>{title}</p>
      <p style={bodyStyle}>{description}</p>
    </div>
  );
}

function MilestonesBlock({ milestones, align }: { milestones: Milestone[]; align: 'left' | 'right' }) {
  return (
    <div className={`history-milestones flex flex-col gap-[24px] w-full ${align === 'left' ? 'items-end text-right' : 'items-start'}`}>
      {milestones.map((m, i) => (
        <div key={i} className={`flex flex-col gap-[10px] w-full ${align === 'left' ? 'items-end' : 'items-start'}`}>
          <span
            className="rounded-[8px] px-[16px] py-[4px] w-fit"
            style={{ ...dateTagStyle, backgroundColor: 'var(--color-blue-100)' }}
          >
            {m.date}
          </span>
          <p style={bodyStyle}>{m.description}</p>
        </div>
      ))}
    </div>
  );
}

export default function HistorySection({
  title = 'Lorem ipsum dolor sit amet consectetur. At.',
}: {
  title?: string
}) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        defaults: { ease: 'power3.out' },
      })
        .from('.history-tag',   { y: -20, opacity: 0, duration: 0.5 })
        .from('.history-title', { y: 40,  opacity: 0, duration: 0.8 }, '-=0.25');

      gsap.utils.toArray<HTMLElement>('.history-row-desktop').forEach((row) => {
        const isTitleLeft = row.dataset.titleSide === 'left';
        gsap.timeline({
          scrollTrigger: { trigger: row, start: 'top 85%' },
          defaults: { ease: 'power3.out' },
        })
          .from(row.children[0], { x: isTitleLeft ? -32 : 32, opacity: 0, duration: 0.7 })
          .from(row.children[2], { x: isTitleLeft ? 32 : -32, opacity: 0, duration: 0.7 }, '-=0.55')
          .from(row.querySelector('.history-milestones')?.children ?? [], { opacity: 0, y: 16, duration: 0.5, stagger: 0.12 }, '-=0.4');
      });

      gsap.utils.toArray<HTMLElement>('.history-row-mobile').forEach((row) => {
        gsap.timeline({
          scrollTrigger: { trigger: row, start: 'top 85%' },
          defaults: { ease: 'power3.out' },
        })
          .from(row, { y: 24, opacity: 0, duration: 0.7 })
          .from(row.querySelector('.history-milestones')?.children ?? [], { opacity: 0, y: 16, duration: 0.5, stagger: 0.12 }, '-=0.4');
      });

      gsap.from('.history-line', {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
      });

      gsap.from('.history-line-mobile', {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden flex justify-center py-[56px] px-[20px] md:px-[40px]"
      style={{ backgroundColor: 'var(--color-white)' }}
    >
      {/* Decorative shapes */}
      <img
        src="/about-history-shape-orange-top.svg"
        alt=""
        className="absolute hidden lg:block left-0"
        style={{ width: '237px', height: '136px', top: '27%' }}
        aria-hidden="true"
      />
      <img
        src="/about-history-shape-green.svg"
        alt=""
        className="absolute hidden lg:block right-0"
        style={{ width: '280px', height: '161px', top: '55%' }}
        aria-hidden="true"
      />
      <img
        src="/about-history-shape-orange-bottom.svg"
        alt=""
        className="absolute hidden lg:block left-0"
        style={{ width: '161px', height: '93px', top: '92%' }}
        aria-hidden="true"
      />

      <div className="relative w-full flex flex-col items-center gap-[96px]" style={{ maxWidth: '1160px' }}>
        <div className="flex flex-col gap-[16px] items-center text-center" style={{ maxWidth: '685px' }}>
          <p
            className="history-tag uppercase opacity-65"
            style={{
              fontFamily: 'var(--font-dm-mono)',
              fontWeight: 400,
              fontSize: 'var(--text-body-accent-mono)',
              lineHeight: 'var(--text-body-accent-mono--line-height)',
              letterSpacing: 'var(--text-body-accent-mono--letter-spacing)',
              color: 'var(--color-blue-300)',
            }}
          >
            [MI HISTORIA]
          </p>
          <h2
            className="history-title"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'var(--text-title-l)',
              lineHeight: 'var(--text-title-l--line-height)',
              fontWeight: 400,
              fontVariationSettings: '"opsz" 14',
              color: 'var(--color-blue-400)',
            }}
          >
            {title}
          </h2>
        </div>

        <div className="relative w-full flex flex-col gap-[96px] lg:gap-[240px]" style={{ maxWidth: '925px' }}>
          <div
            className="history-line hidden lg:block absolute left-1/2 -translate-x-1/2 w-[2px]"
            style={{
              top: '-45px',
              height: 'calc(100% + 45px)',
              background: 'linear-gradient(to bottom, transparent 0%, var(--color-green) 15%, var(--color-green) 85%, transparent 100%)',
            }}
            aria-hidden="true"
          />
          <div
            className="history-line-mobile lg:hidden absolute left-[9px] w-[2px]"
            style={{
              top: '-24px',
              height: 'calc(100% + 24px)',
              background: 'linear-gradient(to bottom, transparent 0%, var(--color-green) 15%, var(--color-green) 85%, transparent 100%)',
            }}
            aria-hidden="true"
          />
          {entries.map((entry, i) => (
            <div key={i} className="history-row-wrapper relative z-10">
              <div className="hidden lg:block">
                <HistoryRowWithSide entry={entry} />
              </div>
              <div className="lg:hidden">
                <HistoryRowMobile entry={entry} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HistoryRowWithSide({ entry }: { entry: HistoryEntryData }) {
  return (
    <div data-title-side={entry.titleSide} className="history-row-desktop relative grid grid-cols-[1fr_18px_1fr] gap-[33px] items-start w-full">
      {entry.titleSide === 'left' ? (
        <>
          <TitleBlock title={entry.title} description={entry.description} align="left" />
          <div className="flex justify-center pt-[10px]">
            <img src="/about-history-dot.svg" alt="" className="size-[18px] shrink-0" aria-hidden="true" />
          </div>
          <MilestonesBlock milestones={entry.milestones} align="right" />
        </>
      ) : (
        <>
          <MilestonesBlock milestones={entry.milestones} align="left" />
          <div className="flex justify-center pt-[10px]">
            <img src="/about-history-dot.svg" alt="" className="size-[18px] shrink-0" aria-hidden="true" />
          </div>
          <TitleBlock title={entry.title} description={entry.description} align="right" />
        </>
      )}
    </div>
  );
}

function HistoryRowMobile({ entry }: { entry: HistoryEntryData }) {
  return (
    <div className="history-row-mobile flex gap-[20px] w-full">
      <div className="flex flex-col items-center pt-[6px] shrink-0" style={{ width: '18px' }}>
        <img src="/about-history-dot.svg" alt="" className="size-[18px] shrink-0" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-[16px] flex-1 min-w-0">
        <p style={titleStyle}>{entry.title}</p>
        <p style={bodyStyle}>{entry.description}</p>
        <div className="history-milestones flex flex-col gap-[24px] items-start w-full mt-[8px]">
          {entry.milestones.map((m, i) => (
            <div key={i} className="flex flex-col gap-[10px] items-start w-full">
              <span
                className="rounded-[8px] px-[16px] py-[4px] w-fit"
                style={{ ...dateTagStyle, backgroundColor: 'var(--color-blue-100)' }}
              >
                {m.date}
              </span>
              <p style={bodyStyle}>{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
