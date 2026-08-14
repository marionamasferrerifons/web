@AGENTS.md

## Data & animation safety

- Every read of Sanity data must validate shape before rendering. Don't assume a referenced document, image, or asset exists — a testimonial can be unpublished, an image field can be empty. Guard with optional chaining and skip rendering the section (or fall back) rather than letting the page crash. Pattern already in use: `{testimonial?.avatar?.asset?.url && <TestimonialSection ... />}` (see `app/page.tsx`, `app/enfoque/page.tsx`, `app/casos-de-exito/[slug]/page.tsx`).
- Animations must never leave content permanently invisible if their trigger fails to fire. Any `gsap.from()` driven by ScrollTrigger needs `immediateRender: false` so the DOM's default state is visible, plus `invalidateOnRefresh: true` so a trigger doesn't go stale after late layout shifts (fonts, images loading). See `components/FooterClient.tsx` for the reference implementation.
- Collections and route-level documents get their own guard, distinct from the single-field check above: an empty array means don't render the section (`if (caseStudies.length === 0) return null` in `CaseStudiesSection.tsx`), and a missing document on a dynamic route means a real 404, not a crash (`if (!caseStudy) notFound()` in `app/casos-de-exito/[slug]/page.tsx`).
