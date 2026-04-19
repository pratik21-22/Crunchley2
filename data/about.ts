import { Eye, Flame, Heart, Leaf, Package, Shield, Sparkles, Target, Users } from 'lucide-react'

export const aboutValues = [
  {
    icon: Leaf,
    title: 'Natural Ingredients',
    description: 'We focus on thoughtfully sourced ingredients and cleaner roasting-first processes.',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every batch is crafted with care to deliver consistency in taste, crunch, and quality.',
  },
  {
    icon: Sparkles,
    title: 'Bold Innovation',
    description: 'We build modern flavours and formats while staying grounded in better nutrition.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'We grow with partners, customers, and communities that believe in better snacking.',
  },
] as const

export const qualityCards = [
  {
    icon: Flame,
    title: 'Roasted Not Fried',
    description: 'Our core process is built around roasting for a lighter, cleaner snack experience.',
  },
  {
    icon: Leaf,
    title: 'Premium Ingredients',
    description: 'We choose quality ingredients and seasonings that support better everyday snacking.',
  },
  {
    icon: Heart,
    title: 'Better Nutrition',
    description: 'We design products to balance taste and nutrition so they fit real daily routines.',
  },
  {
    icon: Sparkles,
    title: 'Bold Flavours',
    description: 'From classic to adventurous, our flavours are crafted to stay exciting and satisfying.',
  },
  {
    icon: Shield,
    title: 'Honest Quality',
    description: 'Clear standards, consistent batches, and transparent product intent in every launch.',
  },
  {
    icon: Package,
    title: 'Growing Product Range',
    description: 'Starting with roasted makhana, we are expanding into roasted dry fruits and more healthy snacks.',
  },
] as const

export const missionVision = {
  mission: {
    icon: Target,
    title: 'Our Mission',
    description:
      "To build a trusted healthy snacks brand that makes better snacking practical, tasty, and accessible - starting with roasted makhana and scaling into more nutritious categories.",
  },
  vision: {
    icon: Eye,
    title: 'Our Vision',
    description:
      "To become a go-to name in modern healthy snacking through thoughtful products, honest quality, and a steadily expanding range for every lifestyle.",
  },
} as const
