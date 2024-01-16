'use client'
import { Button, Item, Props, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui"
import { useEffect, useState } from "react"

export function Grid({ arrayOfItems }: { arrayOfItems: Array<Props> }) {
  const [page, setPage] = useState(1)
  const [localData, setLocalData] = useState([])
  const [column, setColumn] = useState('')
  const [direction, setDirection] = useState(1)

  const sortingFunction = (col, dir) => {
    // let direction = 1
    // let column = event.target.id

    const sortedData = localData.sort((a, b) => {
      if (a[column] >= b[column]) {
        return direction
      }
      return -direction
    })
    setLocalData(old => [...sortedData])
  }

  useEffect(() => setLocalData(arrayOfItems), [arrayOfItems])

  const endPage = Math.ceil(arrayOfItems.length / 10)
  return (
    <div>
      <div className="flex gap-6 items-center p-10">
        <Select onValueChange={(val) => setColumn(val)} >
          <SelectTrigger className="w-1/3 ml-auto">
            <SelectValue placeholder="Select a column to sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">name</SelectItem>
            <SelectItem value="price">price</SelectItem>
            <SelectItem value="stock">stock</SelectItem>
            <SelectItem value="dateAdded">date</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(val) => setDirection(val === "Asc" ? 1 : -1)} >
          <SelectTrigger className="w-1/3">
            <SelectValue placeholder="Select Direction" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Asc">Asc</SelectItem>
            <SelectItem value="Desc">Desc</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={() => sortingFunction(column, direction)}>Sort</Button>
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(300px,2fr))",
      }} className="bg-white">

        {
          localData.map((item, index) => (<Item {...item} key={index} />)).splice((page - 1) * 10, page * 10)
        }
      </div>
      <div className="p-8 flex gap-5 justify-center items-center">
        <Button disabled={page === 1 ? true : false} onClick={() => setPage(old => old - 1)}>Previous</Button>
        <p>Page {!endPage ? 0 : page} of {endPage}</p>
        <Button disabled={endPage === page || !endPage ? true : false} onClick={() => setPage(old => old + 1)}>Next</Button>
      </div>
    </div>
  )
}
