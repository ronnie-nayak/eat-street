'use client'
import { IoSearch } from "react-icons/io5"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../../../components/ui/dialog"
import { Vertical } from "./vertical"
import { useEffect, useState } from "react"

export function PopupSearch() {
  const [fruits, setFruits] = useState()
  useEffect(() => {
    const getFruits = async () => {
      try {
        const res = await fetch("/api/fruits", { method: "GET" })
        const data = await res.json()
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
    <div className="cursor-pointer">
      <Dialog>
        <DialogTrigger asChild>
          <IoSearch size={22} />
        </DialogTrigger>
        <DialogContent className=" w-[1000px] ">
          <DialogHeader>
            <DialogTitle>Search</DialogTitle>
          </DialogHeader>
          <form className="flex gap-2">
            <input type="text" className="w-full h-12 rounded-full px-4" placeholder="Search" />
            <button type="submit" className=" h-12 w-12 rounded-full bg-[#00D783] flex justify-center items-center"
            >
              <IoSearch size={22} />
            </button>
          </form>

          <Vertical arrayOfItems={fruits} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
