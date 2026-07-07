import Link from 'next/link';
import { BOOKING_URL } from '@/lib/constants';
import { client } from '@/sanity/client';
import { CASE_STUDIES_QUERY } from '@/sanity/queries';
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

const SERVICES_ITEMS = [
  { href: '/servicios/estrategia-editorial', label: 'Innovación editorial con IA' },
  { href: '/servicios/servicios-editoriales', label: 'Servicios editoriales con IA aplicada' },
  { href: '/servicios/ecosistema-produccion-editorial', label: 'Sistema de producción editorial con IA' },
]

export default async function Navbar() {
  const caseStudies: {
    _id: string
    title: string
    slug: string | null
    imageCard: { asset: { url: string } | null; alt?: string } | null
  }[] = await client.fetch(CASE_STUDIES_QUERY)
  const caseStudiesItems = caseStudies
    .filter((c) => c.slug)
    .map((c) => ({
      href: `/casos-de-exito/${c.slug}`,
      title: c.title,
      imageUrl: c.imageCard?.asset?.url,
      imageAlt: c.imageCard?.alt,
    }))

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 w-full bg-blue-500 px-[25px] py-[24px]"
      style={{ borderRadius: '0 0 24px 24px' }}
    >
      <div className="relative flex items-center h-[40px]">

        {/* Logo */}
        <Link href="/">
          <img
            src="/logo.png"
            alt="Mariona Masferrer"
            style={{ height: '39.843px', width: '60.44px', objectFit: 'contain' }}
          />
        </Link>

        {/* Nav links — centred (desktop only) */}
        <nav
          className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-[24px] items-center"
          aria-label="Navegación principal"
        >
          <NavDropdown label="Servicios" items={SERVICES_ITEMS} activePrefix="/servicios" />

          <CaseStudiesDropdown items={caseStudiesItems} />

          <NavLink href="/enfoque">Enfoque</NavLink>

          <NavLink href="/sobre-mi">Sobre mí</NavLink>
        </nav>

        {/* Right side (desktop only) */}
        <div className="hidden lg:flex ml-auto items-center gap-[8px]">

          {/* Language selector */}
          <div
            className="flex items-center gap-[8px] border border-[#d4d4d4] rounded-full px-[11px]"
            style={{ height: '28px' }}
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

          {/* CTA button */}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-[4px] bg-grey hover:bg-white rounded-full pl-[11px] pr-[4px] cursor-pointer transition-colors duration-200"
            style={{ height: '28px' }}
          >
            <span
              className="text-orange whitespace-nowrap"
              style={{ ...monoStyle, fontSize: '10px' }}
            >
              RESERVAR UNA LLAMADA
            </span>
            <span className="flex items-center justify-center bg-orange rounded-full shrink-0 size-[19px]">
              <img src="/hero-arrow.svg" alt="" className="size-[12px] transition-transform duration-200 group-hover:rotate-45" aria-hidden="true" />
            </span>
          </a>

        </div>

        {/* Mobile menu (mobile only) */}
        <MobileMenu
          servicesItems={SERVICES_ITEMS}
          caseStudiesItems={caseStudiesItems.map((c) => ({ href: c.href, label: c.title }))}
        />
      </div>
    </header>
  )
}
