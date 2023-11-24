import Banner from "@/components/home/banner";
import Sections from "@/components/home/sections";
import Item from "@/components/item";
import Slider from "@/components/slider/slider";

export default function Home() {
  return (
    <div className="relative">
      <Banner />
      <Sections title="Fresh Seafood Everyday!" image="/home/crab.jpg" />
      <Sections title="Sweet Organic Drinks" image="/home/bottle.jpg" />
      <Sections title="For Steak Lovers" image="/home/steak.jpg" />
      <h2 className="text-[4vw] font-bold text-[#243F2F] text-center m-7">
        Bestsellers in September
      </h2>
      <Slider />
      <Item />
    </div>
  )
}
