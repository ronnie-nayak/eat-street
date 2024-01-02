
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

    <div>
      <div className="h-36 bg-white flex items-center justify-center">
        <h1 className="text-4xl">Fruits</h1>
      </div>
      <div className="p-9"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 6fr",
          gridTemplateRows: "auto 1fr",
          gridTemplateAreas: `"filter sort" 
                              "filter products"`
        }}
      >
        <div className="">
          <Products filterItems={setPage} />
        </div>
        <div className="">
          <Grid arrayOfItems={page} />
        </div>
      </div>
    </div>
  )
}
