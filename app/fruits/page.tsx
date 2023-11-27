'use client'
import Grider from "@/components/grider/grider";
import Products from "@/components/products/products";
import { useEffect, useState } from "react";


export default function Fruit() {
  const [fruits, setFruits] = useState([1, 2, 3, 4, 5, 6, 7, 8])

  useEffect(() => {
    const getFruits = async () => {
      let yal = await fetch("/api/fruits", { method: "GET" })
      let tal = await yal.json()
      console.log(tal)
      setFruits(tal)
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
