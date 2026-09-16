import Link from 'next/link';
import { BOOKING_URL } from '@/lib/constants';
import { client } from '@/sanity/client';
import { CASE_STUDIES_QUERY } from '@/sanity/queries';
import { squareThumbnailUrl } from '@/sanity/image';
import { navContentEs } from '@/content/nav/es';
import { navContentCa } from '@/content/nav/ca';
import NavDropdown from './NavDropdown';
import CaseStudiesDropdown from './CaseStudiesDropdown';
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';

const monoStyle = {
  fontFamily: 'var(--font-dm-mono)',
  fontSize: '14px',
  lineHeight: '24px',
  letterSpacing: '-0.5px',
}

// La versión en catalán (/ca) está en revisión con la clienta — el selector
// se activa cuando dé luz verde para publicarlo.
const SHOW_LANGUAGE_SELECTOR = false

export default async function Navbar({ locale = 'es' }: { locale?: 'es' | 'ca' }) {
  const c = locale === 'ca' ? navContentCa : navContentEs
  const caseStudiesHrefPrefix = locale === 'ca' ? '/ca/casos-dexit' : '/casos-de-exito'
  let caseStudiesItems: { href: string; title: string; imageUrl?: string; imageAlt?: string }[] = []

  try {
    const caseStudies: {
      _id: string
      title: string
      slug: string | null
      imageCard: { asset: { _id: string; url: string } | null; alt?: string } | null
    }[] = await client.fetch(CASE_STUDIES_QUERY, { language: locale })
    caseStudiesItems = caseStudies
      .filter((c) => c.slug)
      .map((c) => ({
        href: `${caseStudiesHrefPrefix}/${c.slug}`,
        title: c.title,
        imageUrl: c.imageCard?.asset?._id ? squareThumbnailUrl(c.imageCard.asset._id, 48) : undefined,
        imageAlt: c.imageCard?.alt,
      }))
  } catch (error) {
    console.error('Navbar: failed to fetch case studies from Sanity', error)
  }

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 w-full bg-blue-500 px-[20px] md:px-[40px] py-[24px]"
      style={{ borderRadius: '0 0 24px 24px' }}
    >
      <div className="relative flex items-center h-[40px]">

        {/* Logo */}
        <Link href={c.homeHref}>
          <img
            src="/logo.svg"
            alt={c.logoAlt}
            style={{ height: '39.843px', width: 'auto' }}
          />
        </Link>

        {/* Nav links — centred (desktop only) */}
        <nav
          className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-[24px] items-center"
          aria-label={c.navAriaLabel}
        >
          <NavDropdown label={c.servicesLabel} items={c.servicesItems} activePrefix={locale === 'ca' ? '/ca/serveis' : '/servicios'} />

          <CaseStudiesDropdown items={caseStudiesItems} label={c.caseStudiesLabel} activePrefix={c.caseStudiesActivePrefix} />

          <NavLink href={c.aboutHref}>{c.aboutLabel}</NavLink>
        </nav>

        {/* Right side (desktop only) */}
        <div className="hidden lg:flex ml-auto items-center gap-[8px]">

          {/* Language selector */}
          {SHOW_LANGUAGE_SELECTOR && (
            <div
              className="flex items-center gap-[8px] border border-[#d4d4d4] rounded-full px-[11px]"
              style={{ height: '40px' }}
            >
              <span className="text-white" style={monoStyle}>ES</span>
              <svg
                width="14" height="7" viewBox="0 0 14 7"
                fill="none" xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M1 1L7 6L13 1" stroke="var(--color-orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}

          {/* CTA button */}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-[8px] bg-white hover:bg-grey rounded-full pl-[20px] pr-[6px] cursor-pointer transition-colors duration-[330ms] ease-linear"
            style={{ height: '40px' }}
          >
            <span
              className="whitespace-nowrap text-text-accent"
              style={{ ...monoStyle, fontSize: '13px' }}
            >
              {c.ctaLabel}
            </span>
            <span
              className="flex items-center justify-center rounded-full shrink-0 bg-orange"
              style={{ width: '28px', height: '28px' }}
            >
              <img
                src="/arrow-white.svg"
                alt=""
                className="size-[16px] transition-transform duration-300 ease-out group-hover:rotate-45"
                aria-hidden="true"
              />
            </span>
          </a>

        </div>

        {/* Mobile menu (mobile only) */}
        <MobileMenu
          servicesLabel={c.servicesLabel}
          servicesItems={c.servicesItems}
          caseStudiesLabel={c.caseStudiesLabel}
          caseStudiesItems={caseStudiesItems.map((item) => ({ href: item.href, label: item.title }))}
          aboutLabel={c.aboutLabel}
          aboutHref={c.aboutHref}
          ctaLabel={c.mobileMenu.ctaLabel}
          openLabel={c.mobileMenu.openLabel}
          closeLabel={c.mobileMenu.closeLabel}
        />
      </div>
    </header>
  )
}
