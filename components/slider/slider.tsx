'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Item from "../item";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Slider() {

  const slideLeft = () => {
    let slider = document.querySelector(".thefuck")
    console.log(slider?.clientWidth)
    slider.scrollLeft = slider?.scrollLeft + (slider?.clientWidth / 2)
  }
  const slideRight = () => {
    let slider = document.querySelector(".thefuck")
    console.log(slider?.clientWidth)
    slider.scrollLeft = slider?.scrollLeft - (slider?.clientWidth / 2)
  }
  return (
    <div>
      <div className="relative m-16">
        <button className="rounded-full p-2 absolute z-10 -left-6 top-1/2 border-black border-2 bg-white"
          onClick={slideRight}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="h-9 w-9" />
        </button>
        <button className="rounded-full p-2 absolute z-10 -right-6 top-1/2 border-black border-2 bg-white"
          onClick={slideLeft}
        >
          <FontAwesomeIcon icon={faChevronRight} className="h-9 w-9" />
        </button>
        <div className="thefuck flex items-center border-orange-500 border-2 overflow-x-scroll scroll-smooth">
          <div className="w-full min-w-[50%]"><Item /></div>
          <div className="w-full min-w-[50%]"><Item /></div>
          <div className="w-full min-w-[50%]"><Item /></div>
        </div>
      </div>
    </div >
  )
}
