import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Gym Web',
  description: 'Gym Web Description',
  generator: 'Next.js',
  icons: {
    icon: [
      {
        // url: '/icon-light-32x32.png',
        url: '/Gym-Logo-Graphics-1-18.jpg',

        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'Gym-Logo-Graphics-1-18',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/Gym-Logo-Graphics-1-18.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
