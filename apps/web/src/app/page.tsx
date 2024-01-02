'use client'
import { Banner, Biker, Footer, Grider, Info, ItemSmall, Order, Sections, Sections2, Sections3, Slider } from "@repo/ui/src";
import { dataInfo } from "../lib/data";
import { useEffect, useState } from "react";

export default function Home() {
  const [fruits, setFruits] = useState([])
  useEffect(() => {
    const getFruits = async () => {
      try {

        const res = await fetch("/api/fruits", { method: "GET" })
        const data = await res.json()
        if (res.ok) {
          setFruits(data)
        } else {
          return Promise.reject(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getFruits()
  }, [])

  return (
    <div className="relative">
      <Banner />
      <div className="flex flex-col xl:flex-row justify-center items-center xl:py-8 xl:px-16 m-2">
        <Sections title={"Fresh Seafood\nEveryday!"} image="/home/crab.jpg" />
        <Sections title={"Sweet Organic\nDrinks"} image="/home/bottle.jpg" />
        <Sections title={"For Steak\nLovers"} image="/home/steak.jpg" />
      </div>
      {/* <Tester /> */}
      <h2 className="text-2xl  text-[#243F2F] text-center m-7 ">
        Bestsellers in September
      </h2>
      <div className="xl:hidden">
        <Slider noOfItems={2} name="firsttwo" arrayOfItems={fruits} />
      </div>
      <div className="hidden xl:block m-10">
        <Grider arrayOfItems={fruits} />
      </div>
      <Biker />

      <div className="flex flex-col xl:flex-row items-center justify-between">
        <div className="xl:hidden w-full">
          <Slider noOfItems={2} name="secondtwo" arrayOfItems={fruits} />
        </div>
        <div className="hidden xl:block w-9/12 mx-auto">
          <Slider noOfItems={5} name="lastfive" arrayOfItems={fruits} />
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
        {dataInfo.map((item) => (<Info image={item.image} first={item.first} second={item.second} />))}
      </div>
      <Footer />
    </div >
  )
}
