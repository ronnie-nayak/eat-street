import Item from "../item";


export default function Grider({ arrayOfItems }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))"
    }} className="bg-white">
      {arrayOfItems.map((item, index) => (<Item {...item} key={index} />))}
    </div>
  )
}
