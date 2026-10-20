'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BOOKING_URL } from '@/lib/constants';
import type { CaseStudySlugPair } from '@/lib/i18n';
import type { NavContent } from '@/content/nav/types';
import { LanguagePills } from './LanguageSwitcher';

const monoStyle = {
  fontFamily: 'var(--font-dm-mono)',
  fontSize: '14px',
  lineHeight: '24px',
  letterSpacing: '-0.5px',
}

const sansStyle = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '15px',
  lineHeight: '20px',
  fontWeight: 400,
}

export type MobileMenuItem = { href: string; label: string };

export default function MobileMenu({
  content: c,
  aboutHref,
  caseStudiesItems,
  caseStudyPairs,
}: {
  content: NavContent;
  aboutHref: string;
  caseStudiesItems: MobileMenuItem[];
  caseStudyPairs: CaseStudySlugPair[];
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close the menu whenever the route changes (e.g. after tapping a link).
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Lock page scroll while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="lg:hidden ml-auto">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? c.mobileMenu.closeLabel : c.mobileMenu.openLabel}
        onClick={() => setOpen((prev) => !prev)}
        className="relative z-50 flex flex-col justify-center items-center gap-[5px] size-[40px] cursor-pointer"
      >
        <span
          className="block w-[22px] bg-white transition-transform duration-200"
          style={{ height: '1.5px', transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none' }}
        />
        <span
          className="block w-[22px] bg-white transition-opacity duration-200"
          style={{ height: '1.5px', opacity: open ? 0 : 1 }}
        />
        <span
          className="block w-[22px] bg-white transition-transform duration-200"
          style={{ height: '1.5px', transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }}
        />
      </button>

      {open && (
        <div
          className="fixed inset-x-0 bottom-0 z-40 bg-blue-500 overflow-y-auto"
          style={{ top: 'var(--navbar-height)' }}
        >
          <div className="flex flex-col gap-[28px] px-[25px] py-[32px]">
            <div className="flex flex-col gap-[16px]">
              <p className="uppercase text-white" style={monoStyle}>{c.servicesLabel}</p>
              <div className="flex flex-col gap-[16px] pl-[12px]">
                {c.servicesItems.map((item) => (
                  <Link key={item.href} href={item.href} className="text-white" style={sansStyle}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {caseStudiesItems.length > 0 && (
              <div className="flex flex-col gap-[16px]">
                <p className="uppercase text-white" style={monoStyle}>{c.caseStudiesLabel}</p>
                <div className="flex flex-col gap-[16px] pl-[12px]">
                  {caseStudiesItems.map((item) => (
                    <Link key={item.href} href={item.href} className="text-white" style={sansStyle}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <Link href={aboutHref} className="text-white uppercase" style={monoStyle}>
              {c.aboutLabel}
            </Link>

            <div
              className="flex items-center gap-[12px] pt-[24px]"
              style={{ borderTop: '1px solid rgba(242, 242, 242, 0.15)' }}
            >
              <LanguagePills label={c.languageLabel} caseStudyPairs={caseStudyPairs} />
            </div>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-[8px] bg-grey hover:bg-white rounded-full px-[20px] cursor-pointer transition-colors duration-[330ms] ease-linear"
              style={{ height: '44px' }}
            >
              <span className="text-text-accent uppercase" style={{ ...monoStyle, fontSize: '12px' }}>
                {c.ctaLabel}
              </span>
              <span className="flex items-center justify-center bg-orange rounded-full shrink-0 size-[24px]">
                <img src="/arrow-white.svg" alt="" className="size-[14px] transition-transform duration-300 ease-out group-hover:rotate-45" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
