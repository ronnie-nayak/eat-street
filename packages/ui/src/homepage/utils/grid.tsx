import { Item } from ".."
import { v4 as uuidv4 } from "uuid"

export function Grid({ arrayOfItems }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(235px,2fr))",
    }} className="bg-white">
      {arrayOfItems.map((item, index) => (<Item {...item} key={uuidv4()} />))}
    </div>
  )
}
