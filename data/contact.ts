import {
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
} from 'lucide-react'

export const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    value: '8102763281',
    href: 'tel:+918102763281',
    description: 'Mon-Sat, 9am-6pm IST',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'infocrunchley@gmail.com',
    href: 'mailto:infocrunchley@gmail.com',
    description: 'We reply within 24 hours',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '8102763281',
    href: 'https://wa.me/918102763281',
    description: 'Quick responses',
  },
  {
    icon: MapPin,
    title: 'Address',
    value: 'Anandpuri Ward No. 23, Shivpuri',
    href: 'https://maps.google.com/?q=Anandpuri+Ward+No.+23,+Shivpuri,+Purnia,+Bihar+854301',
    description: 'Purnia, Bihar 854301',
  },
] as const

export const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/crunchley_india/', label: 'Instagram' },
  { icon: Twitter, href: 'https://x.com/CrunchleyIndia', label: 'Twitter / X' },
] as const

export const officeHours = [
  { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
  { day: 'Sunday', time: 'Closed' },
] as const
