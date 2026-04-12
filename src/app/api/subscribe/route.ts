import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  // TODO: Replace console.log with real email service integration.
  // Buttondown: POST https://api.buttondown.email/v1/subscribers
  // ConvertKit: POST https://api.convertkit.com/v3/forms/{formId}/subscribe
  // Both require an API key stored in process.env.EMAIL_API_KEY

  try {
    const body = await req.json()
    const { email } = body

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    console.log('[subscribe] new signup:', email)

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }
}
