import Grider from "@/components/grider/grider";
import Banner from "@/components/home/banner";
import Footer from "@/components/home/footer";
import { Sections, Sections2, Sections3, Biker, Order, Info } from "@/components/home/sections";
import { ItemSmall } from "@/components/item";
import Slider from "@/components/slider/slider";

export default function Home() {
  return (
    <div className="relative">
      <Banner />
      <div className="flex flex-col xl:flex-row justify-center items-center xl:py-8 xl:px-16 m-2">
        <Sections title={"Fresh Seafood\nEveryday!"} image="/home/crab.jpg" />
        <Sections title={"Sweet Organic\nDrinks"} image="/home/bottle.jpg" />
        <Sections title={"For Steak\nLovers"} image="/home/steak.jpg" />
      </div>
      <h2 className="text-2xl  text-[#243F2F] text-center m-7 ">
        Bestsellers in September
      </h2>
      <div className="xl:hidden">
        <Slider noOfItems={2} name="firsttwo" />
      </div>
      <div className="hidden xl:block">
        <Grider />
      </div>
      <Biker />

      <div className="flex flex-col xl:flex-row items-center justify-between">
        <div className="xl:hidden w-full">
          <Slider noOfItems={2} name="secondtwo" />
        </div>
        <div className="hidden xl:block w-full">
          <Slider noOfItems={5} name="lastfive" />
        </div>
        <Sections2 title="Tasty Cheeses From Farm Vendors" image="/home/cheese.jpg" />
      </div>

      <div className="flex flex-col xl:flex-row xl:items-center justify-between">
        <Sections3 title="For Ten Chicken Eggs" image="/home/egg.jpg" discount={33} />
        <Sections3 title="For Friday Big Discounts for Seafood" image="/home/lobster.jpg" discount={25} />
        <Sections3 title="Excellent Bread From Our Bakers" image="/home/bread.jpg" discount={33} />
        <Sections3 title="Order Burger with Great Meat" image="/home/burger.jpg" discount={50} />
      </div>
      <ItemSmall />
      <Order />
      <div className="flex flex-row xl:justify-around gap-4 p-10">
        <Info image="/home/scooter.svg" first="Free Delivery Across the US!" second="Free delivery for all orders above $100" />
        <Info image="/home/heart.svg" first="100% Satisfaction Guarantee!" second="Providing help in case of dissatisfaction" />
        <Info image="/home/chat.svg" first="Top-Notch Support" second="Chat with us if you’ve any questions" />
        <Info image="/home/card.svg" first="Secure Payments" second="We use safest payment technologies" />
      </div>
      <Footer />
    </div >
  )
}
