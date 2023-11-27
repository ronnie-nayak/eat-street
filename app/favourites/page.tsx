
'use client'
import Grider from "@/components/grider/grider";
import Products from "@/components/products/products";
import { useEffect, useState } from "react";

import { signIn, signOut, useSession, getProviders, } from "next-auth/react"

export default function Fruit() {
  const [fruits, setFruits] = useState([])
  const { data: session } = useSession()

  useEffect(() => {
    const getFruits = async () => {
      let yal = await fetch("api/favourites")
      let tal = await yal.json()
      console.log(tal)
      setFruits(tal)
    }
    getFruits()
  }, [])

  return (
    <div>
      <div className="h-36 bg-white flex items-center justify-center">
        <h1 className="text-4xl">Wishlist</h1>
      </div>
      <div className="flex items-center justify-center p-9">
        <div className="w-1/12 self-start">
          <Products />
        </div>
        <div className="w-11/12  py-2 ">
          sldkfjs
        </div>
      </div>
    </div>
  )
}
