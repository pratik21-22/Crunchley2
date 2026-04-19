import { PageLayout } from '@/components/layout/PageLayout'

export default function PrivacyPage() {
  return (
    <PageLayout>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-6 lg:p-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Privacy Policy</h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We respect your privacy and handle your information responsibly. For policy details,
              contact us at infocrunchley@gmail.com.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
