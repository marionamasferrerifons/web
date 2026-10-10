'use client';

import { BOOKING_URL, WHATSAPP_URL } from '@/lib/constants';
import Button from './Button';

/**
 * Bloc d'accions comú de les pàgines de servei: botó principal de reserva +
 * botó secundari de WhatsApp, amb una nota centrada a sota. A mòbil els
 * botons s'apilen a amplada completa i la nota es manté a sota.
 * `whatsappHref` permet que cada servei porti el seu missatge suggerit.
 */
export default function ActionButtons({
  inverted = false,
  surface = 'color',
  noteColor,
  whatsappHref = WHATSAPP_URL,
}: {
  inverted?: boolean;
  surface?: 'color' | 'white';
  noteColor?: string;
  whatsappHref?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-[16px] w-full">
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-[16px] md:gap-[24px] w-full md:w-auto">
        <Button href={BOOKING_URL} variant="primary" surface={surface}>
          Reservar una sesión gratuita
        </Button>
        <Button href={whatsappHref} variant="secondary" inverted={inverted} icon="chat">
          Hablar por WhatsApp
        </Button>
      </div>
      <p
        className="text-center"
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: 300,
          color: noteColor ?? 'var(--color-text-secondary)',
          maxWidth: '460px',
          textWrap: 'balance',
        }}
      >
        1 hora para entender tu necesidad y valorar cómo puedo ayudarte. O, si lo prefieres, escríbeme y empezamos a hablar.
      </p>
    </div>
  );
}
