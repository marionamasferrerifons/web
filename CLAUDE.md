@AGENTS.md

# Contracte del projecte

## Llegir abans de tocar codi
- `docs/architecture.md` — estructura de l'App Router i integració amb Sanity
- `docs/design-system.md` — convencions de Tailwind, GSAP i components
- `docs/roadmap.md` — prioritats actuals i enllaç a `mejoras/`

## Registrar canvis
Afegeix una entrada a `CHANGELOG.md` (què / quan / per què) per a qualsevol canvi de contingut, disseny o estructura — no cal per a fixes trivials o typos.

## Guardrails
- No commitejar `.env.local` ni cap token de Sanity (`SANITY_API_READ_TOKEN` o d'escriptura). Si en cal un de nou, documenta'l a `.env.example` sense el valor.
- Si es modifica `studio/schemaTypes/`, revisa l'impacte a les queries GROQ de `sanity/queries.ts`.
- `studio/` és un subprojecte Sanity independent (propi `package.json`) — no assumir que comparteix dependències amb l'app principal.

## Revisió de seguretat
Executa `/security-review` abans de fusionar canvis que toquin variables d'entorn, tokens de Sanity, o qualsevol formulari/enviament de dades.
