"use client";
import {
  Banner,
  Biker,
  Footer,
  Info,
  Item,
  Loading,
  NavUI,
  Order,
  Props,
  Sections,
  Sections2,
  Sections3,
  Slider,
} from "@repo/ui";
import { dataInfo, datax, dataxVeggies } from "../lib/data";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "authenticated") {
    router.replace("/homepage");
  }

  if (status === "loading" || status === "authenticated")
    return (
      <div className="w-screen h-screen">
        <Loading />
      </div>
    );

  return (
    <div className="relative font-bold">
      <NavUI />
      <Banner />
      <div className="flex flex-col xl:flex-row justify-center items-center xl:py-8 xl:px-16 m-2">
        <Sections
          path="/login"
          title={"Fresh Seafood\nEveryday!"}
          image="/home/crab.jpg"
        />
        <Sections
          path="/login"
          title={"Sweet Organic\nDrinks"}
          image="/home/bottle.jpg"
        />
        <Sections
          path="/login"
          title={"For Steak\nLovers"}
          image="/home/steak.jpg"
        />
      </div>
      <h2 className="sm:text-[1.5vw]  text-[#243F2F] text-center m-7 ">
        Bestsellers in September
      </h2>
      <div className="xl:hidden">
        <Slider arrayOfItems={datax} />
      </div>
      <div className="hidden xl:block m-10">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(300px,2fr))",
          }}
          className="bg-white"
        >
          {datax
            .map((item, index) => <Item {...item} key={index} />)
            .splice(0, 10)}
        </div>
      </div>
      <Biker />

      <div className="flex flex-col xl:flex-row items-center justify-between">
        <div className="xl:hidden w-full">
          <Slider arrayOfItems={dataxVeggies} />
        </div>
        <div className="hidden xl:block w-9/12 mx-auto">
          <Slider arrayOfItems={dataxVeggies} />
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
      <Footer />
    </div>
  );
}
