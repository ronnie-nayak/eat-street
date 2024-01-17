'use client'
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { FormEvent, FormEventHandler, useEffect, useState } from "react"
import { IoSearch } from "react-icons/io5"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../../../components/ui/dialog"
import { Vertical } from "./vertical"
import { useRouter } from "next/navigation"

export function PopupSearch() {
  const [search, setSearch] = useState([])
  const [inputValue, setInputValue] = useState("")
  useEffect(() => {
    const getFruits = async () => {
      try {
        const res = await fetch("/api/search", {
          method: "PATCH",
          body: JSON.stringify({ search: inputValue }),
          headers: {
            "Content-Type": "application/json"
          }
        })
        const data = await res.json()
        if (res.ok) {
          setSearch(() => data)
        } else {
          return Promise.reject(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getFruits()
  }, [inputValue])

  const router = useRouter()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setInputValue("")
    setSearch([])
    router.push(`/homepage/search?search=${inputValue}`)
  }


  return (
    <div className="cursor-pointer">
      <Dialog>
        <DialogTrigger asChild>
          <IoSearch size={22} />
        </DialogTrigger>
        <DialogContent className=" w-[1000px]  flex flex-col justify-center items-center bg-transparent border-0 shadow-none">
          <DialogHeader className="flex w-full">
            <DialogTitle className="text-white self-center text-5xl">Search</DialogTitle>
            <DialogClose className="h-14 w-14 rounded-full self-end bg-white font-bold text-xl">X</DialogClose>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="flex w-full gap-4 items-center p-4 px-20 bg-white rounded-xl">
            <Input className="h-12 rounded-full border border-gray-500" placeholder="Search" onChange={(event) => setInputValue(event.target.value)} />
            <DialogClose>
              <Button type="submit" className=" h-12 w-12 rounded-full bg-[#00D783] flex justify-center items-center">
                <IoSearch size={22} />
              </Button>
            </DialogClose>
          </form>
          <DialogClose>
            <Vertical arrayOfItems={search} />
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div >
  )
}
