import { defineType, defineField } from 'sanity'
import { CaseIcon } from '@sanity/icons'

export const industryLogo = defineType({
  name: 'industryLogo',
  title: 'Logo de industria',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      description: 'Nombre de la empresa o industria, ej. "Editorial SM"',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
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
      name: 'order',
      title: 'Orden',
      description: 'Los logos se muestran de menor a mayor. Déjalo vacío para que aparezca al final.',
      type: 'number',
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
    select: { title: 'name', media: 'logo' },
  },
})
