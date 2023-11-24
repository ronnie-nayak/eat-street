import Item from "../item";


export default function Slider() {
  return (
    <div className="relative w-[606px] h-[560px] border-red-500 border-2 overflow-hidden">
      <div className="absolute flex ">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
}
