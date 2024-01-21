'use client'
import { ItemSmall } from ".."


export function Vertical({ arrayOfItems }: { arrayOfItems?: any[] }) {
  return (
    <div className="h-96 overflow-scroll ">
      {
        arrayOfItems?.length === 0 ? <div className="text-center font-bold sm:text-[1vw] p-4">No items</div> :
          arrayOfItems?.map((item, index) => (
            <ItemSmall {...item} key={index} />
          ))}
    </div>
  )
}
