'use client';

import { BOOKING_URL, whatsappFor, type WhatsappTopic } from '@/lib/constants';
import type { Locale } from '@/lib/i18n';
import { sharedContent } from '@/content/shared';
import Button from './Button';

/**
 * Bloc d'accions comú de les pàgines de servei: botó principal de reserva +
 * botó secundari de WhatsApp, amb una nota centrada a sota. A mòbil els
 * botons s'apilen a amplada completa i la nota es manté a sota.
 * `whatsappTopic` permet que cada servei porti el seu missatge suggerit.
 */
export default function ActionButtons({
  inverted = false,
  surface = 'color',
  noteColor,
  whatsappTopic = 'general',
  locale = 'es',
  secondaryColor,
  showNote = true,
}: {
  inverted?: boolean;
  surface?: 'color' | 'white';
  noteColor?: string;
  whatsappTopic?: WhatsappTopic;
  locale?: Locale;
  /** Color de vora i text del botó de WhatsApp quan el fons el demana (p. ex. coral). */
  secondaryColor?: string;
  /** El hero de la home no porta la nota sota els botons. */
  showNote?: boolean;
}) {
  const c = sharedContent[locale].actionButtons;
  return (
    <div className="flex flex-col items-center gap-[16px] w-full">
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-[16px] md:gap-[24px] w-full md:w-auto">
        <Button href={BOOKING_URL} variant="primary" surface={surface}>
          {c.booking}
        </Button>
        <Button href={whatsappFor(whatsappTopic, locale)} variant="secondary" inverted={inverted} color={secondaryColor} icon="chat">
          {c.whatsapp}
        </Button>
      </div>
      {showNote && <p
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
        {c.note}
      </p>}
    </div>
  );
}
