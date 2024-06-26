"use client";
import {
  Banner,
  Biker,
  Footer,
  Grid,
  Info,
  Item,
  Loading,
  Order,
  Props,
  Sections,
  Sections2,
  Sections3,
  Slider,
} from "@repo/ui";
import { useEffect, useState } from "react";
import { dataInfo, datax } from "../../lib/data";
import { notFound, useRouter } from "next/navigation";

export default function HomePage() {
  const [fruits, setFruits] = useState<Props[]>([]);
  const [veggies, setVeggies] = useState<Props[]>([]);
  const router = useRouter();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("/api/getProducts?type=fruit", {
          method: "GET",
        });
        const data = await res.json();
        if (res.ok) {
          setFruits(data);
        }
      } catch (error) {
        router.replace("/login");
      }
    };
    getProducts();

    const getProductsVeggies = async () => {
      try {
        const res = await fetch("/api/getProducts?type=vegetable", {
          method: "GET",
        });
        const data = await res.json();
        if (res.ok) {
          setVeggies(data);
        }
      } catch (error) {
        router.replace("/login");
      }
    };
    getProductsVeggies();
  }, []);

  return (
    <div className="relative">
      <Banner />
      <div className="flex flex-col xl:flex-row justify-center items-center xl:py-8 xl:px-16 m-2">
        <Sections
          path="/homepage/seafood"
          title={"Fresh Seafood\nEveryday!"}
          image="/home/crab.jpg"
        />
        <Sections
          path="/homepage/drink"
          title={"Sweet Organic\nDrinks"}
          image="/home/bottle.jpg"
        />
        <Sections
          path="/homepage/meat"
          title={"For Steak\nLovers"}
          image="/home/steak.jpg"
        />
      </div>
      <h2 className="sm:text-[1.5vw] text-[#243F2F] text-center m-7 ">
        Bestsellers in September
      </h2>
      <div className="xl:hidden">
        {fruits.length === 0 ? <Loading /> : <Slider arrayOfItems={fruits} />}
      </div>
      <div className="hidden xl:block m-10">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(300px,2fr))",
          }}
          className="bg-white"
        >
          {fruits.length === 0 ? (
            <Loading />
          ) : (
            fruits
              .map((item, index) => <Item {...item} key={index} />)
              .splice(0, 10)
          )}
        </div>
      </div>
      <Biker />

      <div className="flex flex-col xl:flex-row items-center justify-between">
        <div className="xl:hidden w-full">
          {veggies.length === 0 ? (
            <Loading />
          ) : (
            <Slider arrayOfItems={veggies} />
          )}
        </div>
        <div className="hidden xl:block w-9/12 mx-auto">
          {veggies.length === 0 ? (
            <Loading />
          ) : (
            <Slider arrayOfItems={veggies} />
          )}
        </div>
        <Sections2
          title="Tasty Cheeses From Farm Vendors"
          image="/home/cheese.jpg"
        />
      </div>

      <div className="flex flex-col xl:flex-row xl:items-center justify-between">
        <Sections3
          title="For Ten Chicken Eggs"
          image="/home/egg.jpg"
          discount={33}
        />
        <Sections3
          title="For Friday Big Discounts for Seafood"
          image="/home/lobster.jpg"
          discount={25}
        />
        <Sections3
          title="Excellent Bread From Our Bakers"
          image="/home/bread.jpg"
          discount={33}
        />
        <Sections3
          title="Order Burger with Great Meat"
          image="/home/burger.jpg"
          discount={50}
        />
      </div>
      <Order />
      <div className="flex flex-row xl:justify-around gap-4 p-10">
        {dataInfo.map((item, i) => (
          <Info
            key={i}
            image={item.image}
            first={item.first}
            second={item.second}
          />
        ))}
      </div>
    </div>
  );
}
