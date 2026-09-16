import { defineType, defineField } from 'sanity'
import { CommentIcon } from '@sanity/icons'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonio',
  type: 'document',
  icon: CommentIcon,
  fields: [
    defineField({
      name: 'internalName',
      title: 'Nombre interno',
      description: 'Solo para identificarlo en el Studio, ej. "Altamar — Ana Pérez"',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Cita',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'authorName',
      title: 'Nombre del autor/a',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'authorRole',
      title: 'Cargo / Editorial',
      description: 'Ej. Principal Director de Edebé',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'language',
      title: 'Idioma',
      type: 'string',
      options: {
        list: [
          { title: 'Castellano', value: 'es' },
          { title: 'Català', value: 'ca' },
        ],
        layout: 'radio',
      },
      initialValue: 'es',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'translationOf',
      title: 'Traducción de',
      description: 'Si este testimonio es la versión en catalán, enlaza aquí el testimonio original en castellano.',
      type: 'reference',
      to: [{ type: 'testimonial' }],
      weak: true,
      hidden: ({ document }) => document?.language !== 'ca',
    }),
    defineField({
      name: 'avatar',
      title: 'Foto del autor/a',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto alternativo',
          type: 'string',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo de la editorial / cliente',
      description: 'Selecciona el logo ya existente en "Logos de industria". Si no está en la lista, créalo ahí primero.',
      type: 'reference',
      to: [{ type: 'industryLogo' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'placement',
      title: 'Dónde aparece',
      description:
        'Secciones fijas de la web donde se muestra este testimonio. Un mismo testimonio puede aparecer en varias secciones, pero cada sección solo puede estar asignada a un testimonio.',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Home — Sección naranja', value: 'home-orange' },
          { title: 'Home — Sección verde', value: 'home-green' },
          { title: 'Enfoque', value: 'enfoque' },
          { title: 'Servicios — Estrategia editorial', value: 'estrategia-editorial' },
          { title: 'Servicios — Servicios editoriales', value: 'servicios-editoriales' },
          { title: 'Servicios — Ecosistema de producción editorial', value: 'ecosistema-produccion-editorial' },
        ],
        layout: 'grid',
      },
      validation: (rule) =>
        rule.custom(async (placement, context) => {
          const values = placement as string[] | undefined
          if (!values || values.length === 0) return true

          const { document, getClient } = context
          const client = getClient({ apiVersion: '2024-01-01' })
          const id = document!._id.replace(/^drafts\./, '')
          const language = (document!.language as string | undefined) ?? 'es'

          const conflicts: string[] = await client.fetch(
            `*[_type == "testimonial" && !(_id in [$draftId, $publishedId]) && language == $language && count((placement[])[@ in $values]) > 0].internalName`,
            { draftId: `drafts.${id}`, publishedId: id, values, language }
          )

          return conflicts.length > 0
            ? `Estas secciones ya están asignadas a otro testimonio: ${conflicts.join(', ')}. Quítalas de ahí primero.`
            : true
        }),
    }),
  ],
  preview: {
    select: { title: 'internalName', subtitle: 'authorRole', media: 'avatar', language: 'language' },
    prepare({ title, subtitle, media, language }) {
      return {
        title: `${title} (${language === 'ca' ? 'CA' : 'ES'})`,
        subtitle,
        media,
      }
    },
  },
})
