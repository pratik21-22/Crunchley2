"use client"

import { useRef, useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Field,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const whatsappHref = 'https://wa.me/918102763281?text=Hello%20Crunchley,%20I%20want%20to%20know%20more%20about%20your%20products.'

type FormErrors = {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export function ContactFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [errors, setErrors] = useState<FormErrors>({})
  const formRef = useRef<HTMLFormElement>(null)

  const validateForm = (formData: FormData) => {
    const nextErrors: FormErrors = {}
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const subject = String(formData.get('subject') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    if (!name) {
      nextErrors.name = 'Name is required.'
    }
    if (!email) {
      nextErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!subject) {
      nextErrors.subject = 'Subject is required.'
    }
    if (!message) {
      nextErrors.message = 'Message is required.'
    }

    return nextErrors
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitError(null)

    const formData = new FormData(e.currentTarget)
    const validationErrors = validateForm(formData)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: String(formData.get('name') ?? '').trim(),
          email: String(formData.get('email') ?? '').trim(),
          phone: String(formData.get('phone') ?? '').trim(),
          subject: String(formData.get('subject') ?? '').trim(),
          message: String(formData.get('message') ?? '').trim(),
        }),
      })

      if (!response.ok) {
        const payload = await response.json().catch(() => null)
        throw new Error(payload?.error || 'Could not send your message right now. Please try again shortly.')
      }

      formRef.current?.reset()
      setErrors({})
      setIsSubmitted(true)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to send message at this time.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-5 lg:p-8 shadow-sm">
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-10 lg:py-12 text-center">
          <div className="mb-5 lg:mb-6 flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-8 w-8 lg:h-10 lg:w-10 text-primary" />
          </div>
          <h3 className="mb-2 text-xl lg:text-2xl font-bold text-foreground">Message Sent!</h3>
          <p className="mb-6 max-w-sm text-muted-foreground">
            Thank you for reaching out. We&apos;ll get back to you within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              Send Another Message
            </Button>
            <Button asChild>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      ) : (
        <>
          <h2 className="mb-2 text-xl lg:text-2xl font-bold text-foreground">Send Us a Message</h2>
          <p className="mb-5 lg:mb-6 text-muted-foreground text-sm lg:text-base">
            Fill out the form below and we&apos;ll respond as soon as possible.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <FieldGroup>
              <div className="grid gap-5 lg:gap-6 sm:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="name">Your Name</FieldLabel>
                  <Input id="name" name="name" placeholder="Full name" required className="h-11" aria-invalid={Boolean(errors.name)} />
                  {errors.name ? <p className="mt-1 text-sm text-destructive">{errors.name}</p> : null}
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Email Address</FieldLabel>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required className="h-11" aria-invalid={Boolean(errors.email)} />
                  {errors.email ? <p className="mt-1 text-sm text-destructive">{errors.email}</p> : null}
                </Field>
              </div>

              <Field>
                <FieldLabel htmlFor="phone">Phone Number (Optional)</FieldLabel>
                <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" className="h-11" />
              </Field>

              <Field>
                <FieldLabel htmlFor="subject">Subject</FieldLabel>
                <Input id="subject" name="subject" placeholder="What is this regarding?" required className="h-11" aria-invalid={Boolean(errors.subject)} />
                {errors.subject ? <p className="mt-1 text-sm text-destructive">{errors.subject}</p> : null}
              </Field>

              <Field>
                <FieldLabel htmlFor="message">Your Message</FieldLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help you..."
                  rows={5}
                  required
                  className="resize-none"
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message ? <p className="mt-1 text-sm text-destructive">{errors.message}</p> : null}
              </Field>

              {submitError ? (
                <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                  {submitError}
                </p>
              ) : null}

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </FieldGroup>
          </form>
        </>
      )}
    </div>
  )
}

export function FaqCtaSection() {
  return (
    <section className="py-14 lg:py-16">
      <div className="container mx-auto px-5 lg:px-8 text-center">
        <h2 className="mb-3 lg:mb-4 text-xl lg:text-2xl font-bold text-foreground">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mb-5 lg:mb-6 max-w-xl text-muted-foreground text-sm lg:text-base text-balance leading-relaxed">
          Can&apos;t find what you&apos;re looking for? Check out our FAQ section for quick answers to common questions about orders, shipping, and more.
        </p>
        <Button variant="outline" size="lg">
          View FAQs
        </Button>
      </div>
    </section>
  )
}
