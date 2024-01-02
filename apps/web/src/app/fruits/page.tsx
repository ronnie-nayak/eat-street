'use client'
import { Grider, Products } from "@repo/ui/src";
import { useEffect, useState } from "react";


export default function Fruit() {
  const [fruits, setFruits] = useState([])

  useEffect(() => {
    const getFruits = async () => {
      try {

        let res = await fetch("/api/fruits", { method: "GET" })
        let data = await res.json()
        if (res.ok) {
          setFruits(data)
        } else {
          return Promise.reject(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getFruits()
  }, [])

  return (
    <div>
      <div className="h-36 bg-white flex items-center justify-center">
        <h1 className="text-4xl">Vegetables</h1>
      </div>
      <div className="flex items-center justify-center p-9">
        <div className="w-1/12 self-start">
          <Products />
        </div>
        <div className="w-11/12  py-2 ">
          <Grider arrayOfItems={fruits} />
        </div>
      </div>
    </div>
  )
}
