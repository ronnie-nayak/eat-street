'use client'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BuiltInProviderType } from "next-auth/providers/index";
import { ClientSafeProvider, LiteralUnion, getProviders, signIn, useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { GiSlicedBread } from "react-icons/gi";
import { IoCartOutline, IoFishOutline } from "react-icons/io5";
import { LuCarrot, LuCherry, LuCupSoda } from "react-icons/lu";
import { TbMeat } from "react-icons/tb";
import { PopupSearch } from ".";
import { useRouter } from "next/navigation";

function Option({ title, icon }: { title: string, icon: React.JSX.Element }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-[#00D783] text-[1.5vw]" >
        {icon}
      </div>
      <h3>{title}</h3>
    </div>

  )
}


export function Nav() {

  const { data: session } = useSession()

  return (
    <nav className="h-16 2xl:h-24 relative">
      <div className="fixed top-0 left-0 w-screen h-16 z-10 bg-white flex justify-around items-center px-4 2xl:h-24">

        <div className="h-[60px] flex items-center justify-center 2xl:hidden">
          <FontAwesomeIcon icon={faBars} className="w-[30px] " />
        </div>
        <img src="/nav/tastydaily.png" className="h-12 mx-auto 2xl:hidden" />
        <IoCartOutline size={26} className="text-[#243F2F] 2xl:hidden" />


        <div className="hidden 2xl:flex items-center text-[#243F2F] text-[1.5vw] gap-6 mr-9">

          <Link href="/homepage/vegetable">
            <Option title="Vegetables" icon={<LuCarrot size={32} />} />
          </Link>
          <Link href="/homepage/fruit">
            <Option title="Fresh Fruit" icon={<LuCherry size={32} />} />
          </Link>

          <Link href="/homepage/meat">
            <Option title="Meat" icon={<TbMeat size={32} />} />
          </Link>
          <Link href="/homepage">
            <img src="/lghome/tastydaily.png" className="h-10 hidden 2xl:block mx-4" />
          </Link>

          <Link href="/homepage/seafood">
            <Option title="Seafood" icon={<IoFishOutline size={32} />} />
          </Link>

          <Link href="/homepage/baking">
            <Option title="Baking" icon={<GiSlicedBread size={32} />} />
          </Link>

          <Link href="/homepage/drink">
            <Option title="Drinks" icon={<LuCupSoda size={32} />} />
          </Link>
        </div>

        <div className="hidden 2xl:flex items-center gap-4 justify-self-end absolute right-9">
          <PopupSearch />
          <Link href="/homepage/favourites">
            <FaRegHeart size={22} />
          </Link>
          <Link href="/homepage/carts">
            <IoCartOutline size={26} className="text-[#243F2F] " />
          </Link>
          <div className="bg-black rounded-3xl flex gap-2 items-center p-1 font-bold pr-2 cursor-pointer"
            onClick={() => signOut()}
          >
            <img src={session?.user?.image ?? ""} className="w-10 h-10 rounded-full" />
            <h2 className="text-white">Sign Out</h2>
          </div>

        </div>
      </div >
    </nav>
  )
}
