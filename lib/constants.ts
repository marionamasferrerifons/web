export const BOOKING_URL =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0z4P3GnumK8qcgUbLh8kmC2WUy1gcGLr4Mplgv2u0-uxPiitbJbZeu7hNBNue8Q_ubhdSrIuYL'

export const SITE_URL = 'https://masferrerifons.com'

/** Obre una conversa de WhatsApp amb un missatge suggerit que el visitant pot editar abans d'enviar. */
export const whatsappUrl = (message: string) =>
  'https://wa.me/34622803203?text=' + encodeURIComponent(message)

export const WHATSAPP_URL = whatsappUrl(
  'Hola, Mariona. Me gustaría comentarte una cuestión sobre IA en mi editorial.',
)

export const WHATSAPP_URL_PRODUCCION = whatsappUrl(
  'Hola, Mariona. Me gustaría comentarte una necesidad de producción de contenidos educativos con IA.',
)
