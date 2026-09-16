import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'

// Testimonials and case studies fan out across most of the site's 8 routes
// (home, enfoque, estrategia-editorial, servicios-editoriales, the case
// study's own page) — mapping document type to affected paths would need
// to be kept in sync with every page's data dependencies. Revalidating
// everything on each publish is the simpler, always-correct choice at this
// scale (small site, infrequent publishes).
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET
  if (!secret) {
    return NextResponse.json({ message: 'Missing SANITY_REVALIDATE_SECRET' }, { status: 500 })
  }

  const signature = req.headers.get(SIGNATURE_HEADER_NAME)
  const body = await req.text()

  if (!signature || !(await isValidSignature(body, signature, secret))) {
    return NextResponse.json({ message: 'Invalid signature' }, { status: 401 })
  }

  // sanity/client.ts uses useCdn: true, which can serve stale data for a
  // few seconds after a mutation — wait briefly so the revalidated pages
  // fetch fresh content instead of re-caching what just went stale.
  await new Promise((resolve) => setTimeout(resolve, 1000))

  revalidatePath('/', 'layout')

  return NextResponse.json({ revalidated: true, now: Date.now() })
}
