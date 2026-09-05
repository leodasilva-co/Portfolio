import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, IBM_Plex_Mono, Caveat } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-handwriting',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Leo da Silva — Design, tecnologia e intenção',
  description: 'Leo da Silva desenha e constrói produtos digitais claros, úteis e memoráveis.',
  generator: 'Leo da Silva',
  keywords: ['design de produto', 'estratégia digital', 'engenharia front-end', 'Leo da Silva', 'Portugal', 'Frontend', 'Product Design', 'Product Strategy', 'Product Engineering', 'UX Design', 'UI Design', 'UX Strategy', 'UX Engineering', 'UI Strategy', 'UI Engineering', 'Design Thinking', 'Design Sprint', 'Design System', 'Design System Engineering', 'Frontend Engineering', 'Frontend Design', 'Frontend Strategy', 'Frontend Thinking', 'Frontend Sprint', 'Frontend System', 'Frontend System Engineering', 'Angola', 'Design de Produto', 'Estratégia Digital', 'Engenharia Front-end'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/apple-icon.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className={`${dmSans.variable} ${ibmPlexMono.variable} ${caveat.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

