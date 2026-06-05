import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono, Hanken_Grotesk } from 'next/font/google'
import './globals.css'
import { SmoothScroll } from '@/components/SmoothScroll'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-hanken',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rajeshuriti.com'),
  title: 'Rajesh Uriti | Solution Architect & AI Transformation Leader',
  description:
    '16+ years designing enterprise-scale systems. Solution Architect specializing in cloud architecture (AWS), microservices transformation, and enterprise AI with Anthropic Claude, OpenAI GPT, and Google Gemini.',
  keywords: [
    'Solution Architect',
    'Enterprise Architect',
    'GenAI Architect',
    'AI Architect',
    'Cloud Architect',
    'AWS Architect',
    'Digital Transformation Leader',
    'Enterprise AI Consultant',
    'Microservices Architecture',
    'AI Transformation',
    'Rajesh Uriti',
  ],
  authors: [{ name: 'Rajesh Uriti' }],
  creator: 'Rajesh Uriti',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://rajeshuriti.com',
    title: 'Rajesh Uriti | Solution Architect & AI Transformation Leader',
    description:
      '16+ years designing enterprise-scale systems. Cloud architecture, microservices transformation, and enterprise AI.',
    siteName: 'Rajesh Uriti Portfolio',
    images: [
      {
        url: '/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'Rajesh Uriti — Solution Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajesh Uriti | Solution Architect & AI Transformation Leader',
    description:
      '16+ years designing enterprise-scale systems. Cloud architecture, microservices, enterprise AI.',
    images: ['/web-app-manifest-512x512.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${hankenGrotesk.variable}`} suppressHydrationWarning>
      {/*
       * suppressHydrationWarning on <body> suppresses Dark Reader's injected
       * data-darkreader-* attributes and CSS custom properties on child elements.
       * This does NOT hide real bugs — it only tolerates browser-extension DOM
       * mutations that are outside our control.
       */}
      <body suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
