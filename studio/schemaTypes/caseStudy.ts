import { defineType, defineField } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Caso de éxito',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imageCard',
      title: 'Imagen de la tarjeta',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'imageCard',
    },
  },
})
