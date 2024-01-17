'use client'
import { BuiltInProviderType } from "next-auth/providers/index"
import { ClientSafeProvider, LiteralUnion, getProviders, signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import * as z from "zod"
import { Button } from "@repo/ui"

export default function Login() {
  const { data: session, status } = useSession()
  const router = useRouter()
  if (status === "authenticated") {
    router.push("/homepage")
  }


  const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null)

  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders()
      setProviders(response)
    }
    setProvider()
  }, [])


  function guestUser() {
    const res = signIn('credentials', {
      email: "aa@bb.lk",
      redirect: false,
    })
    console.log(res, "user????")
    router.replace("/homepage")
  }

  if (status === "loading") {
    return <div>Loading</div>
  }
  return (
    <div className="relative">
      <div className="h-screen w-screen grid place-items-center" style={{
        background: "url('/login/preview.png') center no-repeat blue",
        backgroundSize: "cover",
        filter: "blur(4px)",
      }} >
      </div >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2/6 w-2/6 rounded-3xl bg-white">
        {providers ? (<div>Loading</div>) :
          (
            <>
              <button
                type="button"
                key="Google"
                onClick={() => signIn("google")}
                className="bg-blue-600 text-black font-bold py-2 px-4 rounded mr-16 border border-black"
              >
                "Google"
              </button>

              <button
                type="button"
                key="Github"
                onClick={() => signIn("github")}
                className="bg-blue-600 text-black font-bold py-2 px-4 rounded mr-16 border border-black"
              >
                "Github"
              </button>
              <Button onClick={guestUser} >Guest User</Button>
            </>
          )
        }

      </div>
    </div>
  )
}
