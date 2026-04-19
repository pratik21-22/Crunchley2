import { Quote } from 'lucide-react'
import { SectionTitle } from '@/components/shared/SectionTitle'

const testimonials = [
	{
		quote: 'Crunchley is my go-to office snack. It is light, tasty, and keeps me full between meetings.',
		name: 'Riya S.',
		role: 'Product Manager',
	},
	{
		quote: 'Peri Peri and Cheese are always in my pantry now. Great flavour and zero greasy after-feel.',
		name: 'Aman K.',
		role: 'Fitness Coach',
	},
	{
		quote: 'Our cafe customers love these. The repeat demand has been amazing for a healthy snack option.',
		name: 'Neha R.',
		role: 'Cafe Owner',
	},
]

export function Testimonials() {
	return (
		<section className="py-20 lg:py-28 bg-background">
			<div className="container mx-auto px-5 lg:px-8">
				<SectionTitle
					badge="Loved By Customers"
					title="What People Say About Crunchley"
				/>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{testimonials.map((item) => (
						<article key={item.name} className="rounded-2xl border border-border bg-card p-6 lg:p-8">
							<Quote className="h-8 w-8 text-accent" />
							<p className="mt-5 text-sm lg:text-base text-muted-foreground leading-relaxed">{item.quote}</p>
							<div className="mt-6">
								<p className="font-semibold text-foreground">{item.name}</p>
								<p className="text-sm text-muted-foreground">{item.role}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
