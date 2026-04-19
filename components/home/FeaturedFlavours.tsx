import Image from 'next/image'
import Link from 'next/link'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { flavours } from '@/data/flavours'

export function FeaturedFlavours() {
	const topFlavours = flavours.slice(0, 3)

	return (
		<section className="py-20 lg:py-28 bg-background">
			<div className="container mx-auto px-5 lg:px-8">
				<SectionTitle
					badge="Signature Picks"
					title="Flavours You Will Keep Reaching For"
					description="Bold seasonings, premium makhana, and a satisfying crunch that works for every mood."
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{topFlavours.map((flavour) => (
						<article
							key={flavour.name}
							className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-xl"
						>
							  <div className="relative aspect-4/3 overflow-hidden">
								<Image
									src={flavour.image}
									alt={flavour.name}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-foreground">{flavour.name}</h3>
								<p className="mt-2 text-sm text-muted-foreground">{flavour.tagline}</p>
							</div>
						</article>
					))}
				</div>

				<div className="mt-10 text-center">
					<Link
						href="/flavours"
						className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
					>
						View All Flavours
					</Link>
				</div>
			</div>
		</section>
	)
}
