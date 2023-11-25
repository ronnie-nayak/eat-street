import Banner from "@/components/home/banner";
import Biker from "@/components/home/biker";
import Footer from "@/components/home/footer";
import Info from "@/components/home/info";
import Order from "@/components/home/order";
import Sections2 from "@/components/home/section2";
import Sections3 from "@/components/home/section3";
import Sections from "@/components/home/sections";
import Item from "@/components/item";
import ItemSmall from "@/components/itemSmall";
import Slider from "@/components/slider/slider";

export default function Home() {
  return (
    <div className="relative">
      <Banner />
      <Sections title="Fresh Seafood Everyday!" image="/home/crab.jpg" />
      <Sections title="Sweet Organic Drinks" image="/home/bottle.jpg" />
      <Sections title="For Steak Lovers" image="/home/steak.jpg" />
      <h2 className="text-[5vw] font-bold text-[#243F2F] text-center m-7">
        Bestsellers in September
      </h2>
      <Slider />
      <Biker />
      <Slider />
      <Sections2 title="Tasty Cheeses From Farm Vendors" image="/home/cheese.jpg" />
      <Sections3 title="For Ten Chicken Eggs" image="/home/egg.jpg" discount={33} />
      <Sections3 title="For Friday Big Discounts for Seafood" image="/home/lobster.jpg" discount={25} />
      <Sections3 title="Excellent Bread From Our Bakers" image="/home/bread.jpg" discount={33} />
      <Sections3 title="Order Burger with Great Meat" image="/home/burger.jpg" discount={50} />
      <ItemSmall />
      <Order />
      <div className="flex flex-col gap-4 p-4">
        <Info image="/home/scooter.svg" first="Free Delivery Across the US!" second="Free delivery for all orders above $100" />
        <Info image="/home/heart.svg" first="100% Satisfaction Guarantee!" second="Providing help in case of dissatisfaction" />
        <Info image="/home/chat.svg" first="Top-Notch Support" second="Chat with us if you’ve any questions" />
        <Info image="/home/card.svg" first="Secure Payments" second="We use safest payment technologies" />
      </div>
      <Footer />
    </div>
  )
}
