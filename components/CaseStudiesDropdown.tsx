'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const monoStyle = {
  fontFamily: 'var(--font-dm-mono)',
  fontSize: '14px',
  lineHeight: '24px',
  letterSpacing: '-0.5px',
}

export type CaseStudyItem = {
  href: string;
  title: string;
  imageUrl?: string;
  imageAlt?: string;
}

export default function CaseStudiesDropdown({ items }: { items: CaseStudyItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname.startsWith('/casos-de-exito');

  return (
    <div
      className="relative flex items-center gap-[4px]"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="relative text-white whitespace-nowrap uppercase cursor-pointer"
        style={monoStyle}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        Casos de éxito
        {isActive && (
          <span
            className="absolute left-0 right-0 bg-orange"
            style={{ bottom: '-6px', height: '1.5px' }}
            aria-hidden="true"
          />
        )}
      </button>
      <svg
        width="14" height="7" viewBox="0 0 14 7"
        fill="none" xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-200"
        style={{ transform: open ? 'rotate(180deg)' : 'none' }}
        aria-hidden="true"
      >
        <path d="M1 1L7 6L13 1" stroke="var(--color-orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      {open && items.length > 0 && (
        // Top starts flush at 100% (no dead zone) — the visual gap is
        // padding *inside* this hoverable box, so the pointer never leaves
        // the subtree while moving from the label down into the menu.
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: '100%', paddingTop: '16px', width: '440px' }}
        >
          <div
            className="flex flex-col rounded-[20px] bg-grey p-[8px]"
            style={{ boxShadow: '0 20px 40px rgba(1, 44, 151, 0.4)' }}
          >
            {items.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="group/card flex items-center gap-[12px] rounded-[14px] px-[12px] py-[10px] hover:bg-white transition-colors duration-150"
                style={{
                  borderTop: i > 0 ? '1px solid rgba(1, 24, 83, 0.08)' : 'none',
                }}
              >
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.imageAlt || ''}
                    className="rounded-[10px] object-cover shrink-0 transition-transform duration-200 group-hover/card:scale-105"
                    style={{ width: '48px', height: '48px' }}
                  />
                ) : (
                  <div
                    className="rounded-[10px] shrink-0"
                    style={{ width: '48px', height: '48px', backgroundColor: 'var(--color-blue-400)' }}
                  />
                )}

                <div className="flex flex-col min-w-0">
                  <p
                    className="text-blue-800"
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '13px',
                      lineHeight: '17px',
                      fontWeight: 400,
                    }}
                  >
                    {item.title}
                  </p>
                </div>

                <span
                  className="ml-auto flex items-center justify-center bg-orange rounded-full shrink-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-150"
                  style={{ width: '20px', height: '20px' }}
                >
                  <img src="/hero-arrow.svg" alt="" className="size-[10px]" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
