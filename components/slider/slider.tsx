import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Item from "../item";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


export default function Slider() {
  return (
    <div className="relative w-[606px] h-[560px] border-red-500 border-2 ">
      <button className="absolute z-10 -right-5 top-1/2 rounded-full border-gray-200 border-2 p-2 bg-white">
        <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
      </button>
      <div className="relative w-[606px] h-[560px] overflow-hidden">
        <div className="absolute flex -z-10">
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
    </div>
  )
}
