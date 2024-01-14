'use client'
import { Grid, Products } from "@repo/ui/src";
import { useCallback, useEffect, useState } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export function ItemsPage({ apiPath, name }: { apiPath: string, name: string }) {
  const [page, setPage] = useState([])
  const [filteredPage, setFilteredPage] = useState([])

  const searchParams = useSearchParams()

  useEffect(() => {
    if (filteredPage) {

      const timeout = setTimeout(() => {
        const lowPriceSearch = searchParams.has("lower") ? searchParams.get("lower") : 0
        const highPriceSearch = searchParams.has("upper") ? searchParams.get("upper") : 1000
        // const ratingSearch = searchParams.has("rating") ? searchParams.get("rating") : null
        let filteredData = page
        if (lowPriceSearch) filteredData = filteredData.filter((row) => row.price >= parseInt(lowPriceSearch))
        if (highPriceSearch) filteredData = filteredData.filter((row) => row.price <= parseInt(highPriceSearch))
        // if (ratingSearch) filteredData = filteredData.filter((row) => row.rating === parseInt(ratingSearch))
        console.log(filteredData)
        setFilteredPage(() => [...filteredData])
        // setPage(1)
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [searchParams])

  useEffect(() => {
    const getFruits = async () => {
      try {

        let res = await fetch(apiPath, { method: "GET" })
        let data = await res.json()
        if (res.ok) {
          setPage(data)
          setFilteredPage(data)
        } else {
          return Promise.reject(data)
        }
      } catch (error) {
      }
    }
    getFruits()
  }, [])
  return (

    <div >
      <div className="h-36 bg-white flex items-center justify-center">
        <h1 className="text-4xl">{name}</h1>
      </div>
      <div className="m-9 bg-white border-2 rounded-3xl overflow-hidden border-gray-500"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 6fr",
          gridTemplateRows: "50px ",
          gridTemplateAreas: `"filter sort" 
                              "filter products"`
        }}
      >
        <div className="py-4 p-2 border border-gray-300" style={{ gridArea: "filter" }}>
          <Products />
        </div>
        <div className="p-1" style={{ gridArea: "sort" }}>sorting</div>
        <div style={{ gridArea: "products" }}>
          <Grid arrayOfItems={filteredPage} />
        </div>
      </div>
    </div>
  )
}
