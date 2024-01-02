'use client'
import { Grid, Products } from "@repo/ui/src";
import { useEffect, useState } from "react";

export function ItemsPage({ apiPath }: { apiPath: string }) {
  const [page, setPage] = useState([])

  useEffect(() => {
    const getFruits = async () => {
      try {

        let res = await fetch(apiPath, { method: "GET" })
        let data = await res.json()
        if (res.ok) {
          setPage(data)
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

    <div >
      <div className="h-36 bg-white flex items-center justify-center">
        <h1 className="text-4xl">Fruits</h1>
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
          <Products filterItems={setPage} />
        </div>
        <div className="p-1" style={{ gridArea: "sort" }}>sorting</div>
        <div style={{ gridArea: "products" }}>
          <Grid arrayOfItems={page} />
        </div>
      </div>
    </div>
  )
}
