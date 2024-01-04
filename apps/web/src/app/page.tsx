'use client'
import { Banner, Biker, Footer, Grid, Info, Order, Sections, Sections2, Sections3, Slider } from "@repo/ui/src";
import { dataInfo } from "../lib/data";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { dataState } from "@repo/atoms"

export default function Home() {
  const [fruits, setFruits] = useRecoilState(dataState)
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
      <h2 className="text-2xl  text-[#243F2F] text-center m-7 ">
        Bestsellers in September
      </h2>
      <div className="xl:hidden">
        <Slider arrayOfItems={fruits} />
      </div>
      <div className="hidden xl:block m-10">
        <Grid arrayOfItems={fruits} />
      </div>
      <Biker />

      <div className="flex flex-col xl:flex-row items-center justify-between">
        <div className="xl:hidden w-full">
          <Slider arrayOfItems={fruits} />
        </div>
        <div className="hidden xl:block w-9/12 mx-auto">
          <Slider arrayOfItems={fruits} />
        </div>
        <Sections2 title="Tasty Cheeses From Farm Vendors" image="/home/cheese.jpg" />
      </div>

      <div className="flex flex-col xl:flex-row xl:items-center justify-between">
        <Sections3 title="For Ten Chicken Eggs" image="/home/egg.jpg" discount={33} />
        <Sections3 title="For Friday Big Discounts for Seafood" image="/home/lobster.jpg" discount={25} />
        <Sections3 title="Excellent Bread From Our Bakers" image="/home/bread.jpg" discount={33} />
        <Sections3 title="Order Burger with Great Meat" image="/home/burger.jpg" discount={50} />
      </div>
      <Order />
      <div className="flex flex-row xl:justify-around gap-4 p-10">
        {dataInfo.map((item) => (<Info image={item.image} first={item.first} second={item.second} />))}
      </div>
    </div >
  )
}
