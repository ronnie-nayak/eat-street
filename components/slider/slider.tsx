'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Item from "../item";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

export default function Slider({ noOfItems, name }: { noOfItems: number, name: string }) {

  const widthOfItems = Math.floor(100 / noOfItems)
  const slideLeft = () => {
    let slider = document.querySelector(`.${name}`)
    console.log(slider?.clientWidth)
    slider.scrollLeft = slider?.scrollLeft + (slider?.clientWidth / noOfItems) + 1.5
  }
  const slideRight = () => {
    let slider = document.querySelector(`.${name}`)
    console.log(slider?.clientWidth)
    slider.scrollLeft = slider?.scrollLeft - (slider?.clientWidth / noOfItems) - 1.5
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
      <div className={`${name} flex items-center rounded-xl h-full overflow-y-clip overflow-x-scroll scroll-smooth `}>
        <div style={{
          minWidth: `${widthOfItems}%`
        }} className={`w-full `}><Item /></div>
        <div style={{
          minWidth: `${widthOfItems}%`
        }} className={`w-full `}><Item /></div>
        <div style={{
          minWidth: `${widthOfItems}%`
        }} className={`w-full `}><Item /></div>
        <div style={{
          minWidth: `${widthOfItems}%`
        }} className={`w-full `}><Item /></div>
        <div style={{
          minWidth: `${widthOfItems}%`
        }} className={`w-full `}><Item /></div>
        <div style={{
          minWidth: `${widthOfItems}%`
        }} className={`w-full `}><Item /></div>
        <div style={{
          minWidth: `${widthOfItems}%`
        }} className={`w-full `}><Item /></div>
        <div style={{
          minWidth: `${widthOfItems}%`
        }} className={`w-full `}><Item /></div>
        <div style={{
          minWidth: `${widthOfItems}%`
        }} className={`w-full `}><Item /></div>
        <div style={{
          minWidth: `${widthOfItems}%`
        }} className={`w-full `}><Item /></div>
        <div style={{
          minWidth: `${widthOfItems}%`
        }} className={`w-full `}><Item /></div>
        <div style={{
          minWidth: `${widthOfItems}%`
        }} className={`w-full `}><Item /></div>
        <div style={{
          minWidth: `${widthOfItems}%`
        }} className={`w-full `}><Item /></div>




      </div>
    </div >
  )
}
