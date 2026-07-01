import { defineType, defineField } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

const richTextBlock = {
  type: 'block',
  styles: [{ title: 'Normal', value: 'normal' }],
  lists: [],
  marks: {
    decorators: [
      { title: 'Negrita', value: 'strong' },
      { title: 'Cursiva', value: 'em' },
    ],
    annotations: [],
  },
} as const

const richTextBlockWithList = {
  ...richTextBlock,
  lists: [{ title: 'Lista', value: 'bullet' }],
} as const

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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
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
    defineField({
      name: 'year',
      title: 'Año',
      type: 'string',
      description: 'Año del proyecto, ej. 2025',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duración',
      type: 'string',
      description: 'Duración del proyecto, ej. 6 meses',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Editorial / cliente',
      type: 'string',
      description: 'Nombre de la editorial o cliente, ej. Altamar',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'context',
      title: 'Contexto',
      type: 'array',
      of: [richTextBlock],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'challengeQuestion',
      title: 'Reto — Pregunta',
      type: 'string',
      description: 'Ej. ¿Cómo escalar la producción sin perder el rigor?',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'challengeText',
      title: 'Reto — Texto',
      type: 'array',
      of: [richTextBlock],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'solutionTitle',
      title: 'Solución — Título',
      type: 'string',
      description: 'Ej. Un ecosistema de producción editorial en Claude',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'solutionText',
      title: 'Solución — Texto',
      description: 'Usa Mayús+Intro para un salto de línea dentro del mismo punto de la lista (ej. título en negrita + descripción).',
      type: 'array',
      of: [richTextBlockWithList],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'results',
      title: 'Resultados',
      description: 'Exactamente 3 resultados destacados.',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'resultItem',
          fields: [
            defineField({
              name: 'number',
              title: 'Número',
              type: 'string',
              description: 'Ej. 5, 70-90%, 22.000 €',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Texto',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: 'number', subtitle: 'label' },
          },
        },
      ],
      validation: (rule) => rule.required().length(3),
    }),
    defineField({
      name: 'processTitle',
      title: 'Proceso — Título',
      type: 'string',
      description: 'Ej. El proceso de trabajo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'processText',
      title: 'Proceso — Texto',
      description: 'Usa Mayús+Intro para un salto de línea dentro del mismo párrafo (ej. fase en negrita + descripción).',
      type: 'array',
      of: [richTextBlock],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'processImages',
      title: 'Proceso — Imágenes',
      description: 'Opcional. Si no se añade ninguna imagen, esta parte no se muestra (el texto sí se muestra siempre).',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Texto alternativo',
              type: 'string',
            }),
          ],
        },
      ],
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
