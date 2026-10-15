import { CLIENT_SPACES, getClientSpace } from '@/lib/clientes'
import { SITE_URL } from '@/lib/constants'

// Fitxer .ics amb les entregues del projecte («Añadir a mi calendario»).
// Es genera en compilar, com la pàgina: només per als projectes amb calendari.
export const dynamic = 'force-static'
export const dynamicParams = false

type Params = { params: Promise<{ cliente: string; proyecto: string }> }

export function generateStaticParams() {
  return CLIENT_SPACES.flatMap((c) =>
    c.projects.filter((p) => p.deliveries?.length).map((p) => ({ cliente: c.slug, proyecto: p.slug }))
  )
}

/** Escapa el text segons RFC 5545. */
const esc = (s: string) => s.replaceAll('\\', '\\\\').replaceAll(';', '\\;').replaceAll(',', '\\,').replaceAll('\n', '\\n').replaceAll('*', '')

/** Plega les línies llargues (RFC 5545: màx. 75 octets; 60 caràcters deixa marge per als accents). */
const fold = (line: string) => line.match(/.{1,60}/gu)?.join('\r\n ') ?? line

const compact = (iso: string) => iso.replaceAll('-', '')

function nextDay(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`)
  d.setUTCDate(d.getUTCDate() + 1)
  return d.toISOString().slice(0, 10)
}

export async function GET(_request: Request, { params }: Params) {
  const { cliente, proyecto } = await params
  const space = getClientSpace(cliente)
  const project = space?.projects.find((p) => p.slug === proyecto)
  if (!space || !project?.deliveries?.length) return new Response('Not found', { status: 404 })

  const url = `${SITE_URL}/clientes/${space.slug}/${project.slug}`
  const titles = new Map(project.blocks.flatMap((b) => b.units.map((u) => [u.code, u.title] as const)))
  const stamp = `${compact(project.deliveriesUpdated ?? project.date)}T000000Z`

  const events = project.deliveries
    .filter((d) => d.units.length > 0)
    .flatMap((d) => [
      'BEGIN:VEVENT',
      `UID:${project.slug}-${d.id}@masferrerifons.com`,
      `DTSTAMP:${stamp}`,
      `DTSTART;VALUE=DATE:${compact(d.date)}`,
      `DTEND;VALUE=DATE:${compact(nextDay(d.date))}`,
      `SUMMARY:${esc(`${project.title} · ${d.label.split(' · ')[0]}: ${d.units.join(', ')}`)}`,
      `DESCRIPTION:${esc([d.label, ...d.units.map((c) => `${c}. ${titles.get(c) ?? ''}`), '', url].join('\n'))}`,
      `URL:${url}#${d.id}`,
      'TRANSP:TRANSPARENT',
      'END:VEVENT',
    ])

  const body = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Mariona Masferrer i Fons//Espacio de trabajo//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:${esc(`${project.title} · Entregas`)}`,
    ...events,
    'END:VCALENDAR',
    '',
  ]
    .map(fold)
    .join('\r\n')

  return new Response(body, {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': `attachment; filename="${project.slug}-entregas.ics"`,
    },
  })
}
