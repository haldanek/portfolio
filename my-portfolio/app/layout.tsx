import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kimberlee Haldane - Portfolio',
  description: 'Professional portfolio showcasing my work and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

