'use client'
import { v4 } from "uuid"
import { ItemSmall } from ".."


export function Vertical({ arrayOfItems }: { arrayOfItems?: any[] }) {
  return (
    <div className="max-h-96 overflow-scroll">
      {arrayOfItems?.map((item) => (
        <ItemSmall {...item} name={item.name.toLowerCase()} key={v4()} />
      ))}
    </div>
  )
}
