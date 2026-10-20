import Link from 'next/link';
import { BOOKING_URL } from '@/lib/constants';
import { CASE_STUDIES_PREFIX, caseStudyPath, localizedPath, type CaseStudySlugPair, type Locale } from '@/lib/i18n';
import { client } from '@/sanity/client';
import { fetchLocalized } from '@/sanity/fetchLocalized';
import { CASE_STUDIES_QUERY, CASE_STUDY_SLUG_PAIRS_QUERY } from '@/sanity/queries';
import { squareThumbnailUrl } from '@/sanity/image';
import { navContent } from '@/content/nav';
import NavDropdown from './NavDropdown';
import CaseStudiesDropdown from './CaseStudiesDropdown';
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';
import LanguageSwitcher from './LanguageSwitcher';

const monoStyle = {
  fontFamily: 'var(--font-dm-mono)',
  fontSize: '14px',
  lineHeight: '24px',
  letterSpacing: '-0.5px',
}

export default async function Navbar({ locale }: { locale: Locale }) {
  const c = navContent[locale]
  let caseStudiesItems: { href: string; title: string; imageUrl?: string; imageAlt?: string }[] = []
  let caseStudyPairs: CaseStudySlugPair[] = []

  try {
    const [caseStudies, pairs] = await Promise.all([
      fetchLocalized<{
        _id: string
        title: string
        slug: string | null
        imageCard: { asset: { _id: string; url: string } | null; alt?: string } | null
      }[]>(CASE_STUDIES_QUERY, locale),
      client.fetch<CaseStudySlugPair[]>(CASE_STUDY_SLUG_PAIRS_QUERY),
    ])
    caseStudyPairs = pairs
    caseStudiesItems = caseStudies.data
      .filter((cs) => cs.slug)
      .map((cs) => ({
        href: caseStudyPath(cs.slug!, caseStudies.locale),
        title: cs.title,
        imageUrl: cs.imageCard?.asset?._id ? squareThumbnailUrl(cs.imageCard.asset._id, 48) : undefined,
        imageAlt: cs.imageCard?.alt,
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
        <Link href={localizedPath('/', locale)}>
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
          <NavDropdown
            label={c.servicesLabel}
            items={c.servicesItems}
            activePrefix={locale === 'ca' ? '/ca/serveis' : '/servicios'}
          />

          <CaseStudiesDropdown
            items={caseStudiesItems}
            label={c.caseStudiesLabel}
            activePrefix={CASE_STUDIES_PREFIX[locale]}
          />

          <NavLink href={localizedPath('/sobre-mi', locale)}>{c.aboutLabel}</NavLink>
        </nav>

        {/* Right side (desktop only) */}
        <div className="hidden lg:flex ml-auto items-center gap-[8px]">

          <LanguageSwitcher label={c.languageLabel} caseStudyPairs={caseStudyPairs} />

          {/* CTA button */}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-[8px] bg-white hover:bg-grey rounded-full pl-[20px] pr-[6px] cursor-pointer transition-colors duration-[330ms] ease-linear"
            style={{ height: '40px' }}
          >
            <span
              className="whitespace-nowrap uppercase text-text-accent"
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
          content={c}
          aboutHref={localizedPath('/sobre-mi', locale)}
          caseStudiesItems={caseStudiesItems.map((cs) => ({ href: cs.href, label: cs.title }))}
          caseStudyPairs={caseStudyPairs}
        />
      </div>
    </header>
  )
}
