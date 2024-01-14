'use client'
import { ItemSmall } from ".."


export function Vertical({ arrayOfItems }: { arrayOfItems?: any[] }) {
  return (
    <div className="max-h-96 overflow-scroll">
      {arrayOfItems?.map((item, index) => (
        <ItemSmall {...item} name={item.name.toLowerCase()} key={index} />
      ))}
    </div>
  )
}
