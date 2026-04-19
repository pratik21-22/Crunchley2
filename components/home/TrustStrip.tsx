import { BadgeCheck, Leaf, ShieldCheck, Sparkles } from 'lucide-react'

const trustItems = [
	{ icon: ShieldCheck, title: 'Roasted, Not Fried', description: 'Cleaner crunch in every bite.' },
	{ icon: Leaf, title: 'Natural Ingredients', description: 'No artificial colours or flavours.' },
	{ icon: BadgeCheck, title: 'FSSAI Compliant', description: 'Produced with strict quality checks.' },
	{ icon: Sparkles, title: 'Loved Nationwide', description: 'Trusted by modern snackers daily.' },
]

export function TrustStrip() {
	return (
		<section className="border-y border-border bg-card py-10 lg:py-12">
			<div className="container mx-auto px-5 lg:px-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
					{trustItems.map((item) => (
						<article key={item.title} className="flex items-start gap-3 lg:gap-4">
							<div className="flex h-11 w-11 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
								<item.icon className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
							</div>
							<div>
								<h3 className="font-semibold text-foreground text-sm lg:text-base">{item.title}</h3>
								<p className="text-xs lg:text-sm text-muted-foreground">{item.description}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
