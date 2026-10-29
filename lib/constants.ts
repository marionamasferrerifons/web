import type { Locale } from './i18n'

export const BOOKING_URL =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0z4P3GnumK8qcgUbLh8kmC2WUy1gcGLr4Mplgv2u0-uxPiitbJbZeu7hNBNue8Q_ubhdSrIuYL'

// Domini canònic: l'apex redirigeix (308) a www, i els rastrejadors (WhatsApp)
// segueixen malament les redireccions de og:image.
export const SITE_URL = 'https://www.masferrerifons.com'

/** Obre una conversa de WhatsApp amb un missatge suggerit que el visitant pot editar abans d'enviar. */
export const whatsappUrl = (message: string) =>
  'https://wa.me/34622803203?text=' + encodeURIComponent(message)

// Missatges suggerits de WhatsApp per tema, en l'idioma de la pàgina.
const WHATSAPP_MESSAGES = {
  general: {
    es: 'Hola, Mariona. Me gustaría comentarte una cuestión sobre IA en mi editorial.',
    ca: "Hola, Mariona. M'agradaria comentar-te una qüestió sobre IA a la meva editorial.",
  },
  produccion: {
    es: 'Hola, Mariona. Me gustaría comentarte una necesidad de producción de contenidos educativos con IA.',
    ca: "Hola, Mariona. M'agradaria comentar-te una necessitat de producció de continguts educatius amb IA.",
  },
  formacion: {
    es: 'Hola, Mariona. Me gustaría comentarte una cuestión sobre formación en IA.',
    ca: "Hola, Mariona. M'agradaria comentar-te una qüestió sobre formació en IA.",
  },
  curso: {
    es: 'Hola, Mariona. Me gustaría preguntarte sobre el curso «IA para el trabajo de edición».',
    ca: "Hola, Mariona. M'agradaria preguntar-te sobre el curs «IA per a la feina d'edició».",
  },
  acompanamiento: {
    es: 'Hola, Mariona. Me interesa el acompañamiento individual para aplicar la IA a mi trabajo.',
    ca: "Hola, Mariona. M'interessa l'acompanyament individual per aplicar la IA a la meva feina.",
  },
  empresas: {
    es: 'Hola, Mariona. Me gustaría hablar sobre la formación en IA para el equipo de mi editorial.',
    ca: "Hola, Mariona. M'agradaria parlar de la formació en IA per a l'equip de la meva editorial.",
  },
} satisfies Record<string, Record<Locale, string>>

export type WhatsappTopic = keyof typeof WHATSAPP_MESSAGES

export const whatsappFor = (topic: WhatsappTopic, locale: Locale = 'es') =>
  whatsappUrl(WHATSAPP_MESSAGES[topic][locale])
