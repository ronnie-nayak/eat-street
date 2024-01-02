'use client'
import { dataState } from "@repo/atoms"
import { ItemSmall } from ".."
import { v4 } from "uuid"
import { useState } from "react"


export function Vertical({ arrayOfItems }: { arrayOfItems?: any[] }) {

  const [fruits, setFruits] = useState([])
  return (
    <div className="h-96 overflow-scroll">
      {fruits.map((item, index) => (
        <ItemSmall {...item} key={v4()} />
      ))}
    </div>
  )
}
