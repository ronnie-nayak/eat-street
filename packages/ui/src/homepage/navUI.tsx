"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BuiltInProviderType } from "next-auth/providers/index";
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
  useSession,
  signOut,
} from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiSlicedBread } from "react-icons/gi";
import { IoCartOutline, IoFishOutline } from "react-icons/io5";
import { LuCarrot, LuCherry, LuCupSoda } from "react-icons/lu";
import { TbMeat } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { Button } from "@repo/ui";

function Option({ title, icon }: { title: string; icon: React.JSX.Element }) {
  return (
    <div className="flex items-center gap-3 font-bold">
      <div className="text-[#00D783] sm:text-[1.5vw]">{icon}</div>
      <h3 className="hover:text-green-500 transition-all duration-300">
        {title}
      </h3>
    </div>
  );
}

export function NavUI() {
  const router = useRouter();
  return (
    <nav className="h-16 2xl:h-24 relative font-normal">
      <div className="fixed top-0 left-0 w-screen h-16 z-10 bg-white flex justify-around items-center px-4 2xl:h-24">
        <Link href="/login" className="mx-auto 2xl:hidden">
          <img src="/nav/logo.png" className="h-12 " />
        </Link>
        <div className="h-[60px] flex items-center justify-center 2xl:hidden absolute left-4 ">
          <FontAwesomeIcon icon={faBars} className="w-[30px] text-4xl" />
        </div>

        <div
          className="hidden 2xl:flex items-center text-[#243F2F] sm:text-[1.25vw] gap-6 mr-20 cursor-pointer"
          onClick={() => router.replace("/login")}
        >
          <Option title="Vegetables" icon={<LuCarrot size={32} />} />
          <Option title="Fresh Fruit" icon={<LuCherry size={32} />} />
          <Option title="Meat" icon={<TbMeat size={32} />} />
          <img src="/nav/logo.png" className="h-10 hidden 2xl:block mx-4" />
          <Option title="Seafood" icon={<IoFishOutline size={32} />} />
          <Option title="Baking" icon={<GiSlicedBread size={32} />} />
          <Option title="Drinks" icon={<LuCupSoda size={32} />} />
        </div>

        <div className="hidden 2xl:flex items-center gap-4 absolute right-9">
          <Link href="/login" className="p-4 rounded-3xl bg-black text-white">
            SignIn
          </Link>
        </div>
      </div>
    </nav>
  );
}
