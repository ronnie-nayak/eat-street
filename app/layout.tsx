'use client'
import '@/styles/globals.css'
import Nav from '@/components/nav'
import { Quicksand } from "next/font/google"
import { RecoilRoot } from 'recoil'
import Provider from '@/components/provider'

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '700']
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className} >
        <RecoilRoot>
          <Provider>
            <Nav />
            <div className="bg-[#EFF5EE] font-bold">
              {children}
            </div>
          </Provider>
        </RecoilRoot>
      </body>
    </html>
  )
}
