'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { Item } from "..";

export function Slider({ noOfItems, name, arrayOfItems }: { noOfItems: number, name: string, arrayOfItems: Array<any> }) {

  const widthOfItems = Math.floor(100 / noOfItems)
  const slideLeft = () => {
    let slider = document.querySelector(`.${name}`)
    slider!.scrollLeft += 300
  }
  const slideRight = () => {
    let slider = document.querySelector(`.${name}`)
    slider!.scrollLeft -= 300
  }
  return (
    <div className="relative m-10 rounded-full">
      <button className="rounded-full p-2 absolute z-10 -left-6 top-1/2 border-gray-300 border-2 bg-white"
        onClick={slideRight}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="h-6 w-6" />
      </button>
      <button className="rounded-full p-2 absolute z-10 -right-6 top-1/2 border-gray-300 border-2 bg-white"
        onClick={slideLeft}
      >
        <FontAwesomeIcon icon={faChevronRight} className="h-6 w-6" />
      </button>
      <div className={`${name} flex rounded-xl overflow-y-clip overflow-x-scroll scroll-smooth snap-x`}>
        {arrayOfItems.map((item, index) => (
          <div className="snap-start snap-normal">
            <Item {...item} key={index} />
          </div>
        ))}

      </div>
    </div >
  )
}
