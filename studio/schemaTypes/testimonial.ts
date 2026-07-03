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
  ],
  preview: {
    select: { title: 'internalName', subtitle: 'authorRole', media: 'avatar' },
  },
})
