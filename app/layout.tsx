import '@/styles/globals.css'
import Nav from '@/components/nav'
import { Quicksand } from "next/font/google"
import Provider from './provider'

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata = {
  title: "Eat Street",
  description: "Discover & Share a world of Flavour",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className} >
        <Provider>
          <Nav />
          <div className="bg-[#EFF5EE] font-bold">
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}
