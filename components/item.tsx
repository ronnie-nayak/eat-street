import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AspectRatio from "./aspectRatio";
import { IoCartOutline } from "react-icons/io5";

export default function Item() {
  return (
    <AspectRatio width={300} height={560} >
      <div style={{
        display: "grid",
        gridTemplateRows: "2fr 5fr 1fr",
        gridTemplateAreas: ` "image" "content" "price" `
      }} className="relative h-full bg-white">
        <header style={{
          gridArea: "image"
        }} className="">
          <img src="/items/mint.jpg" className="w-full" />
        </header>
        <section style={{
          gridArea: "content"
        }} className="p-9 ">
          <h2 className="font-semibold text-3xl">Mint</h2>
          <p className="text-1xl py-2">
            The mint plant is a herbaceous perennial that is widely known.
          </p>
        </section>
        <footer style={{
          gridArea: "price"
        }} className="flex items-center justify-between px-4 py-8 ">
          <h3 className="font-semibold text-[#00AA63] text-2xl">$13.00</h3>
          <button className="rounded-full p-2 bg-gray-200">
            <IoCartOutline size={26} className="text-[#243F2F]" />
          </button>
        </footer>

        <div className="absolute top-2 left-2 flex gap-1 items-center">
          <span className="px-2 py-1 rounded-full bg-[#243F2F] text-white font-bold text-xs">NEW</span>
          <span className="px-2 py-1 rounded-full bg-[#00AA63] text-white font-bold text-xs">SALE</span>
          <span className="px-2 py-1 rounded-full bg-[#F73E04] text-white font-bold text-xs">OUT OF STOCK</span>
        </div>

        <div className="absolute top-2 right-2 flex flex-col gap-2 items-center">
          <button className="rounded-full p-2 border-gray-200 border-2">
            <FontAwesomeIcon icon={faHeart} className="w-5" />
          </button>
          <button className="rounded-full p-2 border-gray-200 border-2">
            <FontAwesomeIcon icon={faEye} className="w-5" />
          </button>
        </div>
      </div >
    </AspectRatio >
  )
}
