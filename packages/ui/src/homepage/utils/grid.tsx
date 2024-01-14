import { JSX } from "react/jsx-runtime"
import { Item } from ".."
import { Props } from "../../types";

export function Grid({ arrayOfItems }: { arrayOfItems: Array<Props> }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(260px,2fr))",
    }} className="bg-white">
      {arrayOfItems.map((item, index) => (<Item {...item} key={index} />))}
    </div>
  )
}
