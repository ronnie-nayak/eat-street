
'use client'
import { Grider, Products } from "@repo/ui/src";
import { useEffect, useState } from "react";


export default function Carts() {
  const [carts, setCarts] = useState([])
  useEffect(() => {
    const getCarts = async () => {
      try {

        const res = await fetch("/api/carts", { method: "GET" })
        const data = await res.json()
        if (res.ok) {
          setCarts(data.favorites)
        } else {
          return Promise.reject(data)
        }
      } catch (error) {
        console.log(error)
      }

    }
    getCarts()
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
          <Grider arrayOfItems={carts} />
        </div>
      </div>
    </div>
  )
}
