import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import Dashboard from '@/components/dashboard'
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";



const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'CareAI',
  description: 'Best way to interact with user manuals for any device.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Dashboard>{children}</Dashboard>
      </body>
    </html>
  )
}