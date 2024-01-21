'use client'
import { BreadCrumbs, ItemSmall, Props } from "@repo/ui";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@repo/ui";


export default function Favourites() {
  const router = useRouter()
  const pathname = usePathname()
  const [page, setPage] = useState<Props[]>([])

  useEffect(() => {
    const getFavourites = async () => {
      try {

        let res = await fetch('/api/favourites', { method: "GET" })
        let data = await res.json()
        if (res.ok) {
          setPage(data)
        } else {
          return Promise.reject(data)
        }
      } catch (error) {
        router.replace("/login")
      }
    }
    getFavourites()
  }, [])

  return (
    <div>
      <div className="h-36 bg-white flex flex-col gap-6 items-center justify-center">
        <BreadCrumbs path={pathname.split("/").splice(2)} />
        <h1 className="text-[2vw]">Favourites</h1>
      </div>
      <Table className="w-2/4 mx-auto p-4 bg-white rounded-3xl my-9">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px] text-center">Image</TableHead>
            <TableHead >Product</TableHead>
            <TableHead >Price</TableHead>
            <TableHead >Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {page.length === 0 ? (<div className="text-center font-bold text-[1vw] p-4">No Favourites</div>) :
            page.map((item, index) => (
              <TableRow key={index} className="cursor-pointer text-[1.75vw]"
                onClick={() => router.push("/homepage/item/" + item._id)}
              >
                <TableCell className="font-medium"><img src={item.image} className="h-full w-[180px] object-cover rounded-xl" /></TableCell>
                <TableCell>
                  <h3 className="  text-[#243F2F]">{item.name}</h3>
                </TableCell>
                <TableCell>
                  <h3 className="  text-[#0BAD69]">${item.price}</h3></TableCell>
                <TableCell className=""><h1>{item.stock}</h1></TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div >
  )
}
