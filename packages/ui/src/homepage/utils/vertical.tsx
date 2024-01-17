'use client'
import { ItemSmall } from ".."


export function Vertical({ arrayOfItems }: { arrayOfItems?: any[] }) {
  return (
    <div className="h-96 overflow-scroll ">
      {
        arrayOfItems?.length === 0 ? <div>No items</div> :
          arrayOfItems?.map((item, index) => (
            <ItemSmall {...item} name={item.name.toLowerCase()} key={index} />
          ))}
    </div>
  )
}
