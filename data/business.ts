import { Building2, Handshake, TrendingUp, Users } from 'lucide-react'

export const businessBenefits = [
  {
    icon: Building2,
    title: 'Wholesale Pricing',
    description: 'Competitive rates for bulk orders',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Personal account manager',
  },
  {
    icon: TrendingUp,
    title: 'Growth Partnership',
    description: 'Marketing support & co-branding',
  },
  {
    icon: Handshake,
    title: 'Flexible Terms',
    description: 'Customized payment options',
  },
] as const

export const businessTypes = [
  { value: 'retail', label: 'Retail Store / Supermarket' },
  { value: 'cafe', label: 'Cafe / Restaurant' },
  { value: 'hotel', label: 'Hotel / Hospitality' },
  { value: 'distributor', label: 'Distributor / Wholesaler' },
  { value: 'corporate', label: 'Corporate / Gifting' },
  { value: 'online', label: 'Online / E-commerce' },
  { value: 'other', label: 'Other' },
] as const

export const partnerTypes = [
  'Retail Stores & Supermarkets',
  'Cafes & Restaurants',
  'Hotels & Airlines',
  'Corporate Gifting',
  'Distributors & Wholesalers',
] as const
