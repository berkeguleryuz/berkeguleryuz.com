import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Mono } from 'next/font/google'

const space_mono = Space_Mono({ weight:["400", "700"], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Berke Güleryüz || Your Future Developer || Community Manager',
  description: 'Your Future Developer || Community Manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={space_mono.className}>{children}</body>
    </html>
  )
}
