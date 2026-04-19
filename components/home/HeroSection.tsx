import Image from 'next/image'
import Link from 'next/link'
import { BadgeCheck, Leaf, ShieldCheck, Sparkles } from 'lucide-react'

const trustBadges = [
	{ icon: ShieldCheck, label: 'Roasted Not Fried' },
	{ icon: Leaf, label: 'Natural Ingredients' },
	{ icon: BadgeCheck, label: 'FSSAI Compliant' },
	{ icon: Sparkles, label: 'Premium Taste' },
]

export function HeroSection() {
	return (
		<section className="relative overflow-hidden pt-14 pb-20 lg:pt-18 lg:pb-24">
			<div className="absolute inset-0 bg-linear-to-br from-secondary/92 via-background/98 to-secondary/48" />
			<div className="absolute inset-0 bg-radial-[at_18%_18%] from-secondary/45 via-secondary/8 to-transparent" aria-hidden="true" />
			<div className="absolute inset-0 bg-radial-[at_76%_76%] from-secondary/24 via-transparent to-transparent" aria-hidden="true" />
			<div className="absolute -top-20 -left-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
			<div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
			<div className="container mx-auto px-5 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
					<div>
						<span className="inline-block px-4 py-1.5 mb-5 text-sm font-semibold text-accent bg-accent/10 rounded-full ring-1 ring-accent/20">
							Roasted Makhana Snacks
						</span>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.08] tracking-tight max-w-[14ch] sm:max-w-[16ch] lg:max-w-[17ch]">
							<span className="block">Elevate Everyday Snacking</span>
							<span className="block">With <span className="text-accent">Crunchley</span></span>
						</h1>
						<p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl text-pretty leading-relaxed">
							Premium roasted makhana crafted with real spices, deep crunch, and clean ingredients for a richer snack experience.
						</p>
						<div className="mt-8 flex flex-wrap gap-3.5">
							<Link
								href="/flavours"
								className="inline-flex items-center justify-center rounded-xl bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[0_12px_24px_-16px_rgba(110,82,26,0.5)] ring-1 ring-accent/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-[0_16px_28px_-18px_rgba(110,82,26,0.58)]"
							>
								Explore Flavours
							</Link>
							<Link
								href="/business-enquiry"
								className="inline-flex items-center justify-center rounded-xl border border-primary/20 bg-card/90 px-6 py-3 text-sm font-semibold text-foreground shadow-[0_10px_24px_-18px_rgba(20,52,37,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary"
							>
								Partner With Us
							</Link>
						</div>

						<div className="mt-7 flex flex-wrap gap-2.5">
							{trustBadges.map((badge) => (
								<div
									key={badge.label}
									className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-3.5 py-2 text-xs font-semibold text-foreground shadow-[0_8px_18px_-14px_rgba(20,52,37,0.6)]"
								>
									<badge.icon size={14} className="text-primary" />
									<span>{badge.label}</span>
								</div>
							))}
						</div>
					</div>

					<div className="relative mx-auto w-full max-w-160">
						<div className="absolute -inset-7 bg-accent/18 rounded-[2.25rem] blur-3xl" aria-hidden="true" />
						<div className="absolute -inset-8 bg-primary/10 rounded-[2.5rem] blur-[70px]" aria-hidden="true" />
						<div className="relative lg:-mr-6 xl:-mr-10 shadow-[0_34px_72px_-38px_rgba(20,52,37,0.78)] overflow-hidden rounded-[1.75rem] mask-[radial-gradient(120%_100%_at_50%_50%,black_72%,transparent_100%)]">
							<Image
								src="/images/hero-crunchley-jars.png"
								alt="Crunchley premium flavour jar collection"
								width={1536}
								height={1024}
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 46vw"
								className="w-full h-auto object-contain"
								priority
							/>
							<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-secondary/10 via-transparent to-secondary/6 mix-blend-multiply" />
							<div className="pointer-events-none absolute inset-0 bg-radial-[at_50%_50%] from-transparent via-transparent to-background/14" />
							<div className="pointer-events-none absolute -inset-1 bg-radial-[at_50%_50%] from-transparent via-transparent to-background/35 opacity-60" />
						</div>
						<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-border bg-card/95 px-4 py-2.5 text-xs font-semibold text-primary shadow-[0_14px_28px_-18px_rgba(20,52,37,0.85)]">
							Crunchley Signature Roast
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
