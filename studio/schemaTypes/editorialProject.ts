import { defineType, defineField } from 'sanity'
import { BookIcon } from '@sanity/icons'

export const editorialProject = defineType({
  name: 'editorialProject',
  title: 'Proyecto editorial',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      description: 'Ej. "Cuaderno de Lengua Castellana y Literatura"',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publisher',
      title: 'Editorial',
      description: 'Ej. "Editorial SM"',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'grade',
      title: 'Curso',
      description: 'Ej. "2º primaria"',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Rol',
      description: 'Tu rol en el proyecto. Ej. "Coordinación editorial"',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Año',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagen',
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
      name: 'order',
      title: 'Orden',
      description: 'Los proyectos se muestran de menor a mayor. Déjalo vacío para que aparezca al final.',
      type: 'number',
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
      description: 'Si este proyecto es la versión en catalán, enlaza aquí el original en castellano.',
      type: 'reference',
      to: [{ type: 'editorialProject' }],
      weak: true,
      hidden: ({ document }) => document?.language !== 'ca',
    }),
  ],
  orderings: [
    {
      title: 'Orden manual',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'publisher', media: 'image', language: 'language' },
    prepare({ title, subtitle, media, language }) {
      return {
        title: `${title} (${language === 'ca' ? 'CA' : 'ES'})`,
        subtitle,
        media,
      }
    },
  },
})
