import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { withBasePath } from '@/lib/site-path'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Tim Demesmaeker — UX/UI Designer aus Kiel',
  description:
    'Portfolio von Tim Demesmaeker, UX/UI Designer aus Kiel. Ich übersetze komplexe Probleme in intuitive digitale Erlebnisse.',
  generator: 'v0.app',
  icons: {
    icon: [{ url: withBasePath('/projects/New-icon.jpeg'), type: 'image/jpeg', sizes: '1164x1164' }],
    apple: [{ url: withBasePath('/projects/New-icon.jpeg'), type: 'image/jpeg', sizes: '1164x1164' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
