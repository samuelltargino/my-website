import type { Metadata } from 'next'
/* eslint-disable camelcase */
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={spaceGrotesk.className}>
        <div className="w-full max-w-7xl ">{children}</div>
      </body>
    </html>
  )
}
