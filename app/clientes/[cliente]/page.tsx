import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { CLIENT_SPACES, formatDateLong, getClientSpace } from '@/lib/clientes'
import { ClientFooter, ClientHeader, StatusPill, monoStyle } from '../ClientUi'

type Props = { params: Promise<{ cliente: string }> }

// Només existeixen els clients de `CLIENT_SPACES`; la resta, 404.
export const dynamicParams = false

export function generateStaticParams() {
  return CLIENT_SPACES.map((c) => ({ cliente: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cliente } = await params
  const space = getClientSpace(cliente)
  return { title: space ? `${space.name} · Espacio de trabajo` : 'Espacio de trabajo' }
}

export default async function ClientDashboardPage({ params }: Props) {
  const { cliente } = await params
  const space = getClientSpace(cliente)
  if (!space) notFound()

  return (
    <div className="min-h-screen flex flex-col bg-grey">
      <ClientHeader clientName={space.name} />

      <main className="flex-1 px-[20px] md:px-[40px] pt-[48px] md:pt-[72px] pb-[64px] md:pb-[96px]">
        <div className="mx-auto w-full max-w-[1160px] flex flex-col gap-[56px]">

          <div className="flex flex-col gap-[24px]">
            <h1
              style={{
                fontSize: 'var(--text-title-l)',
                lineHeight: 'var(--text-title-l--line-height)',
                fontWeight: 400,
                color: 'var(--color-blue-400)',
              }}
            >
              Hola, equipo de <span style={{ color: 'var(--color-orange-400)' }}>{space.name}.</span>
            </h1>
            <p
              style={{
                fontSize: 'var(--text-body-l)',
                lineHeight: 'var(--text-body-l--line-height)',
                fontWeight: 300,
                color: 'var(--color-text-secondary)',
                maxWidth: '640px',
              }}
            >
              {space.intro}
            </p>
          </div>

          <section aria-labelledby="proyectos-activos" className="flex flex-col gap-[24px]">
            <div className="flex items-baseline gap-[16px]">
              <h2
                id="proyectos-activos"
                style={{
                  fontSize: 'var(--text-title-m)',
                  lineHeight: 'var(--text-title-m--line-height)',
                  fontWeight: 400,
                  color: 'var(--color-blue-400)',
                }}
              >
                Proyectos activos
              </h2>
              <span
                className="rounded-full px-[12px] bg-blue-100"
                style={{ ...monoStyle, color: 'var(--color-text-secondary-strong)' }}
              >
                {space.projects.length}
              </span>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
              {space.projects.map((p) => (
                <li key={p.slug} className="flex">
                  <Link
                    href={`/clientes/${space.slug}/${p.slug}`}
                    className="group flex flex-col gap-[20px] w-full p-[24px] md:p-[32px] md:min-h-[320px] rounded-[24px] bg-white transition-[box-shadow,transform] duration-[250ms] hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(1,24,83,.10)] focus-visible:outline-[3px] focus-visible:outline-blue-800 focus-visible:outline-offset-[3px]"
                  >
                    <div className="flex justify-between items-center gap-[12px]">
                      <span style={{ ...monoStyle, color: 'var(--color-text-secondary)' }}>
                        {p.kind} · {p.meta}
                      </span>
                      <StatusPill>{p.status}</StatusPill>
                    </div>
                    <h3
                      style={{
                        fontSize: 'var(--text-title-s)',
                        lineHeight: 'var(--text-title-s--line-height)',
                        fontWeight: 400,
                        color: 'var(--color-blue-400)',
                      }}
                    >
                      {p.title}
                    </h3>
                    <p style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 300, color: 'var(--color-text-secondary)' }}>
                      {p.summary}
                    </p>
                    <div
                      className="mt-auto flex justify-between items-center gap-[12px] pt-[20px]"
                      style={{ borderTop: '1px solid var(--color-blue-100)' }}
                    >
                      <span style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 300, color: 'var(--color-text-secondary)' }}>
                        Versión {p.version} · {formatDateLong(p.date)}
                      </span>
                      <span aria-hidden="true" className="w-[40px] h-[40px] rounded-full bg-orange flex items-center justify-center shrink-0">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:rotate-45">
                          <path d="M4 12L12 4M12 4H5.5M12 4V10.5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

        </div>
      </main>

      <ClientFooter lead="¿Dudas?" />
    </div>
  )
}
