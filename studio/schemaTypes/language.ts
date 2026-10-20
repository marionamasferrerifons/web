import { defineField } from 'sanity'

// Camps d'idioma compartits pels documents traduïbles. Els documents creats
// abans de la versió catalana no tenen `language`: la web els tracta com a
// castellà (vegeu coalesce(language, "es") a sanity/queries.ts de l'app).
export function languageFields(type: string, translationHint: string) {
  return [
    defineField({
      name: 'language',
      title: 'Idioma',
      description: 'Si se deja vacío, cuenta como castellano.',
      type: 'string',
      options: {
        list: [
          { title: 'Castellano', value: 'es' },
          { title: 'Català', value: 'ca' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'es',
    }),
    defineField({
      name: 'translationOf',
      title: 'Traducción de',
      description: translationHint,
      type: 'reference',
      to: [{ type }],
      weak: true,
      hidden: ({ document }) => document?.language !== 'ca',
    }),
  ]
}

/** Afegeix (ES)/(CA) al títol de la previsualització a les llistes de l'Studio. */
export function withLanguageTag(title: string | undefined, language: string | undefined) {
  return `${title ?? ''} (${language === 'ca' ? 'CA' : 'ES'})`
}
