import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  email: z.string().trim().min(1, 'Email is required').email('Invalid email'),
  phone: z.string().trim().optional(),
  subject: z.string().trim().min(1, 'Subject is required'),
  message: z.string().trim().min(1, 'Message is required'),
})

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Please fill all required fields correctly.' },
        { status: 400 },
      )
    }

    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Contact service is not configured yet. Please try again shortly.' },
        { status: 500 },
      )
    }

    const resend = new Resend(apiKey)
    const data = parsed.data
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Crunchley Website <onboarding@resend.dev>'
    const safeName = escapeHtml(data.name)
    const safeEmail = escapeHtml(data.email)
    const safePhone = escapeHtml(data.phone || 'Not provided')
    const safeSubject = escapeHtml(data.subject)
    const safeMessage = escapeHtml(data.message)

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: ['infocrunchley@gmail.com'],
      replyTo: data.email,
      subject: `Crunchley Contact: ${data.subject}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || 'Not provided'}`,
        '',
        'Message:',
        data.message,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937;">
          <h2 style="margin: 0 0 12px; color: #14532d;">New Contact Inquiry - Crunchley</h2>
          <p style="margin: 0 0 8px;"><strong>Name:</strong> ${safeName}</p>
          <p style="margin: 0 0 8px;"><strong>Email:</strong> ${safeEmail}</p>
          <p style="margin: 0 0 8px;"><strong>Phone:</strong> ${safePhone}</p>
          <p style="margin: 0 0 8px;"><strong>Subject:</strong> ${safeSubject}</p>
          <p style="margin: 16px 0 6px;"><strong>Message:</strong></p>
          <p style="margin: 0; white-space: pre-wrap;">${safeMessage}</p>
        </div>
      `,
    })

    if (error) {
      return NextResponse.json(
        { error: 'Could not send your message right now. Please try again shortly.' },
        { status: 500 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: 'Unexpected error while sending your message.' },
      { status: 500 },
    )
  }
}
