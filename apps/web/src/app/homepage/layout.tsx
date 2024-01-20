'use client'
import { Footer, Loading, Nav } from "@repo/ui";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { status } = useSession()
  const router = useRouter()
  if (status === "unauthenticated") {
    router.replace("/login")
  }
  if (status === "loading") {
    return <div className="w-screen h-screen"><Loading /></div>
  }
  return (
    <div>
      <>
        <Nav />
        <div className="bg-[#EFF5EE] font-bold">
          {children}
        </div>
        <Footer />
      </>
    </div>
  )
}
