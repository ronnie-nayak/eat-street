'use client'
import { Grider, Products } from "@repo/ui/src";
import { useEffect, useState } from "react";


export default function Favourites() {
  const [favourites, setFavourites] = useState([])
  useEffect(() => {
    const getFavourites = async () => {
      try {

        const res = await fetch("/api/favourites", { method: "GET" })
        const data = await res.json()
        if (res.ok) {
          setFavourites(data.favorites)
        } else {
          return Promise.reject(data)
        }
      } catch (error) {
        console.log(error)
      }

    }
    getFavourites()
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
          <Grider arrayOfItems={favourites} />
        </div>
      </div>
    </div>
  )
}
