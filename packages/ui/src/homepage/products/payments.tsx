import { useEffect, useState } from "react"

export function Payments() {
  const [page, setPage] = useState([])

  useEffect(() => {
    const getFruits = async () => {
      try {

        let res = await fetch("/api/carts", { method: "GET" })
        let data = await res.json()
        if (res.ok) {
          setPage(data)
        } else {
          return Promise.reject(data)
        }
      } catch (error) {
      }
    }
    getFruits()
  }, [])
  return (
    <div>
      {page}
    </div>
  )
}
