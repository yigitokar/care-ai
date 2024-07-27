import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'Your App Name',
  description: 'Description of your app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          manrope.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}