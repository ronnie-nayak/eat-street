import type { Metadata } from 'next'
import '@/styles/globals.css'
import Nav from '@/components/nav'
import { Quicksand } from "next/font/google"

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '700']
})



export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className + "text-sm"} >
        <Nav />
        {children}
      </body>
    </html>
  )
}
