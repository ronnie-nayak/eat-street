'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Item from "../item";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function Slider() {
  const [progress, setProgress] = useState(0)
  const shift = () => {
    setProgress((old) => old + 100)
  }
  return (
    <div className="ml-[700px] relative w-[606px] h-[560px] border-red-500 border-2 ">
      <button className="absolute z-10 -right-5 top-1/2 rounded-full border-gray-200 border-2 p-2 bg-white"
        onClick={shift}
      >
        <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
      </button>
      <div className="ml-56 relative w-[606px] h-[560px] ">
        <div className={`absolute -left-[${progress}px] flex  `}>
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  )
}
