import Grider from "@/components/grider/grider";
import Products from "@/components/products/products";


export default function Veg() {
  return (
    <div>
      <div className="h-36 bg-white flex items-center justify-center">
        <h1 className="text-4xl">Vegetables</h1>
      </div>
      <div className="flex items-center justify-center p-9">
        <div className="w-1/12 self-start">
          <Products />
        </div>
        <div className="w-11/12">
          <Grider />
        </div>
      </div>
    </div>
  )
}
