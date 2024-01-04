'use client'
import { Button } from "../../../components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form"
import { Input } from "../../../components/ui/input"
import * as z from "zod"
import { useEffect, useState } from "react"
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
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

export function PopupSearch() {
  const [search, setSearch] = useState([])
  // useEffect(() => {
  // }, [])



  const formSchema = z.object({
    search: z.string()
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const getFruits = async () => {
      try {
        const res = await fetch("/api/search", {
          method: "PATCH",
          body: JSON.stringify({ search: values.search }),
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
      }
    }
    getFruits()
    console.log(values)
  }
  return (
    <div className="cursor-pointer">
      <Dialog>
        <DialogTrigger asChild>
          <IoSearch size={22} />
        </DialogTrigger>
        <DialogContent className=" w-[1000px] h-5/6 flex flex-col justify-center items-center bg-transparent border-0 shadow-none">
          <DialogHeader>
            <DialogTitle className="text-white">Search</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full gap-4 items-center p-4 px-20 bg-white rounded-xl">
              <FormField
                control={form.control}
                name="search"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input className="h-12 rounded-full border border-gray-500" placeholder="Search" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className=" h-12 w-12 rounded-full bg-[#00D783] flex justify-center items-center"
              >
                <IoSearch size={22} />
              </Button>
            </form>
          </Form>
          <DialogClose>
            <Vertical arrayOfItems={search} />
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  )
}
