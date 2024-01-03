'use client'
import { v4 } from "uuid"
import { ItemSmall } from ".."


export function Vertical({ arrayOfItems }: { arrayOfItems?: any[] }) {
  console.log(arrayOfItems)
  return (
    <div className="h-96 overflow-scroll">
      {arrayOfItems?.map((item) => (
        <ItemSmall {...item} key={v4()} />
      ))}
    </div>
  )
}
