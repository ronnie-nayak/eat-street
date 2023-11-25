'use client'
import Item from "../item";

export default function Slider() {

  return (
    <div>
      <div className="thefuck flex items-center border-orange-500 border-2 overflow-x-scroll">
        <div className="w-full"><Item /></div>
        <div className="w-full"><Item /></div>
        <div className="w-full"><Item /></div>
        <div className="w-full"><Item /></div>
        <div className="w-full"><Item /></div>
        <div className="w-full"><Item /></div>
        <div className="w-full"><Item /></div>
        <div className="w-full"><Item /></div>
        <div className="w-full"><Item /></div>
        <div className="w-full"><Item /></div>
      </div>
    </div>
  )
}
