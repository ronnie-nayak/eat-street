import { JSX } from "react/jsx-runtime"
import { Item } from ".."
import { v4 as uuidv4 } from "uuid"
import { Props } from "../../types";

export function Grid({ arrayOfItems }: { arrayOfItems: Array<Props> }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(260px,2fr))",
    }} className="bg-white">
      {arrayOfItems.map((item) => (<Item {...item} key={uuidv4()} />))}
    </div>
  )
}
