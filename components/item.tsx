import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Item() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "300px",
      gridTemplateRows: "240px 200px 120px",
      gridTemplateAreas: ` "image" "content" "price" `
    }} className="relative border-gray-200 border-2 w-[300px]">
      <header style={{
        gridArea: "image"
      }} className="absolute -z-10">
        <img src="/items/mint.jpg" />
      </header>
      <section style={{
        gridArea: "content"
      }} className="p-4">
        <h2 className="font-bold">Mint</h2>
        <p>
          The mint plant is a herbaceous perennial that is widely known.
        </p>
      </section>
      <footer style={{
        gridArea: "price",
        alignSelf: "end"
      }} className="flex items-center justify-between px-4 py-8">
        <h3 className="font-bold text-[#00AA63] ">$13.00</h3>
        <button className="rounded-full border-gray-200 border-2 p-2">
          <FontAwesomeIcon icon={faShoppingCart} className="w-5" />
        </button>
      </footer>

      <div className="absolute top-2 left-2 flex gap-1 items-center">
        <span className="px-2 py-1 rounded-full bg-[#243F2F] text-white font-bold text-xs">NEW</span>
        <span className="px-2 py-1 rounded-full bg-[#00AA63] text-white font-bold text-xs">SALE</span>
        <span className="px-2 py-1 rounded-full bg-[#F73E04] text-white font-bold text-xs">OUT OF STOCK</span>
      </div>

      <div className="absolute top-2 right-2 flex flex-col gap-2 items-center">
        <button className="rounded-full border-gray-200 border-2 p-2">
          <FontAwesomeIcon icon={faHeart} className="w-5" />
        </button>
        <button className="rounded-full border-gray-200 border-2 p-2">
          <FontAwesomeIcon icon={faEye} className="w-5" />
        </button>
      </div>
    </div >
  )
}
