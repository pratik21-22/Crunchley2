import { PageLayout } from '@/components/layout/PageLayout'

export default function TermsPage() {
  return (
    <PageLayout>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-6 lg:p-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Terms of Service</h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              By using Crunchley services, you agree to fair and responsible usage terms.
              For complete terms, contact infocrunchley@gmail.com.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
