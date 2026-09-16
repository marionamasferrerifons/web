import type { ServiciosClientContent } from '@/app/(es)/servicios/estrategia-editorial/ServiciosClient'

export type EstrategiaEditorialContent = {
  client: ServiciosClientContent
  cta: { title: string; subtitle: string }
}
