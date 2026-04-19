import type { Metadata, Viewport } from 'next'
import { DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: 'Crunchley | Premium Healthy Snacks',
    template: '%s | Crunchley',
  },
  description: 'Crunchley - Premium, healthy snacks crafted with care. Experience the perfect crunch in every bite.',
  keywords: ['healthy snacks', 'premium snacks', 'natural ingredients', 'crunchley'],
}

export const viewport: Viewport = {
  themeColor: '#2d5a3d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
