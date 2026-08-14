# Changelog

Registre de canvis importants del projecte. Format per entrada: **què** ha canviat, **quan**, i **per què**. No cal registrar fixes trivials o typos.

## 2026-08-14
**Què:** S'ha adoptat una estructura de context persistent per al projecte: `CLAUDE.md` ampliat com a contracte d'entrada, `docs/` (architecture, design-system, roadmap), `CHANGELOG.md`, `mejoras/`, `.claude/settings.json`, `.env.example`, `LICENSE` i plantilla de PR a `.github/`.
**Per què:** El repositori no tenia cap context viu més enllà d'un avís sobre la versió de Next.js; les decisions d'arquitectura i disseny es perdien entre converses, i l'historial de git (missatges com "Update page.tsx") no explicava el perquè dels canvis.
