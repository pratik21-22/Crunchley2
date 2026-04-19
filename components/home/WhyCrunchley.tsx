import { Flame, Leaf, Zap } from 'lucide-react'
import { SectionTitle } from '@/components/shared/SectionTitle'

const reasons = [
	{
		icon: Flame,
		title: 'Roasted Process',
		description: 'We roast our makhana for a light, crispy texture without deep frying.',
	},
	{
		icon: Leaf,
		title: 'Real Ingredients',
		description: 'Crafted with authentic spices and seasonings, never artificial filler flavours.',
	},
	{
		icon: Zap,
		title: 'Snack Smart',
		description: 'A wholesome option for work breaks, travel packs, and evening cravings.',
	},
]

export function WhyCrunchley() {
	return (
		<section className="py-20 lg:py-28 bg-secondary">
			<div className="container mx-auto px-5 lg:px-8">
				<SectionTitle
					badge="Why Crunchley"
					title="Made For Taste, Backed By Better Nutrition"
					description="From sourcing to seasoning, every step is designed to deliver a cleaner snacking experience."
				/>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{reasons.map((reason) => (
						<article
							key={reason.title}
							className="rounded-2xl border border-border bg-card p-6 lg:p-8 transition-all duration-300 hover:shadow-lg"
						>
							<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
								<reason.icon className="h-6 w-6 text-accent" />
							</div>
							<h3 className="mt-5 text-xl font-semibold text-foreground">{reason.title}</h3>
							<p className="mt-3 text-sm lg:text-base text-muted-foreground leading-relaxed">{reason.description}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
