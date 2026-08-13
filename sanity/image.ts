import { createImageUrlBuilder } from '@sanity/image-url'
import { client } from './client'

const builder = createImageUrlBuilder(client)

// Sanity's asset URL builder needs a reference, not the flat `url` string
// our GROQ queries already resolve — pass the asset `_id` fetched alongside
// it. Every query in sanity/queries.ts fetches `asset-> { _id, url }` for
// this reason.
export function urlForAsset(assetId: string) {
  return builder.image({ asset: { _ref: assetId } }).auto('format')
}

// Sized presets matching each context's actual display size (×2 for
// retina), so assets are never downloaded at many times their rendered
// size (see informe finding P-02, e.g. logos served at 20-40x display size).
export const squareThumbnailUrl = (assetId: string, size = 96) =>
  urlForAsset(assetId).width(size).height(size).fit('crop').quality(80).url()

export const testimonialAvatarUrl = (assetId: string) => squareThumbnailUrl(assetId)

export const testimonialLogoUrl = (assetId: string) =>
  urlForAsset(assetId).width(300).height(121).fit('max').quality(80).url()

export const industryLogoUrl = (assetId: string) =>
  urlForAsset(assetId).height(120).fit('max').quality(80).url()

export const caseStudyCardImageUrl = (assetId: string) =>
  urlForAsset(assetId).width(640).height(400).fit('crop').quality(75).url()

export const projectImageUrl = (assetId: string) =>
  urlForAsset(assetId).width(560).height(760).fit('crop').quality(75).url()

export const processImageUrl = (assetId: string) =>
  urlForAsset(assetId).width(1140).height(641).fit('crop').quality(75).url()

export const lightboxImageUrl = (assetId: string) =>
  urlForAsset(assetId).width(1600).fit('max').quality(80).url()

type RawTestimonialImage = { asset: { _id: string; url: string } | null; alt?: string } | null

// Every testimonial placement (home, enfoque, servicios, case studies)
// renders the same avatar + optional logo shape. Centralizing the guard +
// sizing here means every caller gets both for free instead of repeating
// the optional-chaining checks from CLAUDE.md's data-safety rule.
export function testimonialImageProps(testimonial: { avatar: RawTestimonialImage; logo: RawTestimonialImage } | null | undefined) {
  if (!testimonial?.avatar?.asset?._id) return null
  return {
    avatarUrl: testimonialAvatarUrl(testimonial.avatar.asset._id),
    avatarAlt: testimonial.avatar.alt,
    logoUrl: testimonial.logo?.asset?._id ? testimonialLogoUrl(testimonial.logo.asset._id) : undefined,
    logoAlt: testimonial.logo?.alt,
  }
}
