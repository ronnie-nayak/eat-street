import { JSX } from "react/jsx-runtime"
import { Item } from ".."
import { v4 as uuidv4 } from "uuid"

export function Grid({ arrayOfItems }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(260px,2fr))",
    }} className="bg-white">
      {arrayOfItems.map((item: JSX.IntrinsicAttributes & { _id: string; name: string; desc: string; count: number; favouriteUsers?: any[] | undefined; cartUsers?: any[] | undefined }) => (<Item {...item} key={uuidv4()} />))}
    </div>
  )
}
