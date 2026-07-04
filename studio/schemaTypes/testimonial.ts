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
      type: 'image',
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

          const conflicts: string[] = await client.fetch(
            `*[_type == "testimonial" && !(_id in [$draftId, $publishedId]) && count((placement[])[@ in $values]) > 0].internalName`,
            { draftId: `drafts.${id}`, publishedId: id, values }
          )

          return conflicts.length > 0
            ? `Estas secciones ya están asignadas a otro testimonio: ${conflicts.join(', ')}. Quítalas de ahí primero.`
            : true
        }),
    }),
  ],
  preview: {
    select: { title: 'internalName', subtitle: 'authorRole', media: 'avatar' },
  },
})
