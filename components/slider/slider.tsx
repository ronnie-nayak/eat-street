'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Item from "../item";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { slider1State } from "@/atoms/sliders";
import { CCarousel } from "@coreui/react";


export default function Slider() {

  const [progress, setProgress] = useRecoilState(slider1State)
  const shift = () => {
    setProgress(progress + 100)
  }

  return (
    <div className=" relative w-[606px] h-[560px] border-red-500 border-2 ">
      <button className="z-10 -right-5 top-1/2 rounded-full border-gray-200 border-2 p-2 bg-white"
        onClick={shift}
      >
        <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
      </button>
      <div className="relative w-[606px] h-[560px] ">
        <div className={`absolute -left-[${progress}px] flex z-10`}>
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  )
}
