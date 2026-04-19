"use client"

import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Field,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { businessTypes, partnerTypes } from '@/data/business'

export function BusinessEnquiryFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-10 lg:gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="mb-4 text-2xl font-bold text-foreground">Ready to Partner?</h2>
              <p className="mb-8 text-muted-foreground text-pretty leading-relaxed">
                Fill out the form and our business development team will get back to you within 24-48 hours with a customized proposal.
              </p>

              <div className="space-y-5 lg:space-y-6">
                <div className="rounded-xl border border-border bg-card p-5 lg:p-6">
                  <h3 className="mb-3 font-semibold text-foreground">We Work With</h3>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    {partnerTypes.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl bg-accent/10 p-5 lg:p-6">
                  <p className="text-sm font-medium text-foreground">Minimum Order Quantity</p>
                  <p className="text-2xl lg:text-3xl font-bold text-primary">50 Units</p>
                  <p className="mt-1 text-sm text-muted-foreground">Flexible MOQ for first-time partners</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-border bg-card p-5 lg:p-8 shadow-sm">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-10 lg:py-12 text-center">
                    <div className="mb-5 lg:mb-6 flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle2 className="h-8 w-8 lg:h-10 lg:w-10 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl lg:text-2xl font-bold text-foreground">Thank You!</h3>
                    <p className="mb-6 max-w-sm text-muted-foreground">
                      Your enquiry has been submitted successfully. Our team will contact you within 24-48 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Submit Another Enquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="mb-5 lg:mb-6 text-lg lg:text-xl font-semibold text-foreground">
                      Business Enquiry Form
                    </h3>
                    <FieldGroup>
                      <div className="grid gap-5 lg:gap-6 sm:grid-cols-2">
                        <Field>
                          <FieldLabel htmlFor="name">Full Name</FieldLabel>
                          <Input id="name" name="name" placeholder="Your full name" required className="h-11" />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                          <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" required className="h-11" />
                        </Field>
                      </div>

                      <div className="grid gap-5 lg:gap-6 sm:grid-cols-2">
                        <Field>
                          <FieldLabel htmlFor="email">Email Address</FieldLabel>
                          <Input id="email" name="email" type="email" placeholder="you@company.com" required className="h-11" />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="city">City</FieldLabel>
                          <Input id="city" name="city" placeholder="Your city" required className="h-11" />
                        </Field>
                      </div>

                      <Field>
                        <FieldLabel htmlFor="businessType">Business Type</FieldLabel>
                        <Select name="businessType" required>
                          <SelectTrigger id="businessType" className="h-11 w-full">
                            <SelectValue placeholder="Select your business type" />
                          </SelectTrigger>
                          <SelectContent>
                            {businessTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </Field>

                      <Field>
                        <FieldLabel htmlFor="requirement">Your Requirement</FieldLabel>
                        <Textarea
                          id="requirement"
                          name="requirement"
                          placeholder="Tell us about your business needs, expected volumes, and any specific requirements..."
                          rows={5}
                          required
                          className="resize-none"
                        />
                      </Field>

                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          'Submitting...'
                        ) : (
                          <>
                            Submit Enquiry
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </FieldGroup>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
