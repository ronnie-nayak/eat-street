'use client'
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";



export default function Provider({ children }) {
  return (
    <RecoilRoot>
      <SessionProvider>
        {children}
      </SessionProvider>
    </RecoilRoot>
  )
}
