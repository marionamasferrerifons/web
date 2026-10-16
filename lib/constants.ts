export const BOOKING_URL =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0z4P3GnumK8qcgUbLh8kmC2WUy1gcGLr4Mplgv2u0-uxPiitbJbZeu7hNBNue8Q_ubhdSrIuYL'

// Domini canònic: l'apex redirigeix (308) a www, i els rastrejadors (WhatsApp)
// segueixen malament les redireccions de og:image.
export const SITE_URL = 'https://www.masferrerifons.com'

/** Obre una conversa de WhatsApp amb un missatge suggerit que el visitant pot editar abans d'enviar. */
export const whatsappUrl = (message: string) =>
  'https://wa.me/34622803203?text=' + encodeURIComponent(message)

export const WHATSAPP_URL = whatsappUrl(
  'Hola, Mariona. Me gustaría comentarte una cuestión sobre IA en mi editorial.',
)

export const WHATSAPP_URL_PRODUCCION = whatsappUrl(
  'Hola, Mariona. Me gustaría comentarte una necesidad de producción de contenidos educativos con IA.',
)

export const WHATSAPP_URL_FORMACION = whatsappUrl(
  'Hola, Mariona. Me gustaría comentarte una cuestión sobre formación en IA.',
)

export const WHATSAPP_URL_CURSO = whatsappUrl(
  'Hola, Mariona. Me gustaría preguntarte sobre el curso «IA para el trabajo de edición».',
)

export const WHATSAPP_URL_ACOMPANAMIENTO = whatsappUrl(
  'Hola, Mariona. Me interesa el acompañamiento individual para aplicar la IA a mi trabajo.',
)

export const WHATSAPP_URL_EMPRESAS = whatsappUrl(
  'Hola, Mariona. Me gustaría hablar sobre la formación en IA para el equipo de mi editorial.',
)
