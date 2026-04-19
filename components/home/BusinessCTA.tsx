import Link from 'next/link'

export function BusinessCTA() {
	return (
		<section className="py-20 lg:py-28 bg-primary">
			<div className="container mx-auto px-5 lg:px-8">
				<div className="rounded-3xl bg-primary-foreground/10 border border-primary-foreground/20 p-8 md:p-12 lg:p-14 text-center">
					<span className="inline-block px-4 py-1.5 mb-5 text-sm font-medium text-accent-foreground bg-accent rounded-full">
						Business Partnerships
					</span>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
						Bring Crunchley To Your Shelves
					</h2>
					<p className="mt-5 max-w-2xl mx-auto text-primary-foreground/85 text-base lg:text-lg leading-relaxed">
						We partner with retailers, cafes, and distributors to serve high-quality makhana snacks at scale.
					</p>
					<div className="mt-8 flex flex-wrap justify-center gap-3">
						<Link
							href="/business-enquiry"
							className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
						>
							Start Business Enquiry
						</Link>
						<Link
							href="/contact"
							className="inline-flex items-center justify-center rounded-lg border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
						>
							Contact Team
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
