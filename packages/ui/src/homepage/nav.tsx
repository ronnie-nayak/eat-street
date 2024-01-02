'use client'
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoCartOutline, IoFishOutline, IoSearch, IoStorefrontOutline } from "react-icons/io5";
import { LuCarrot, LuCherry, LuCupSoda } from "react-icons/lu";
import { TbMeat } from "react-icons/tb";
import { GiSlicedBread } from "react-icons/gi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { signIn, signOut, useSession, getProviders, } from "next-auth/react"
import { useEffect, useState } from "react";
import Link from "next/link";

function Option({ title, icon }: { title: string, icon: React.JSX.Element }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-[#00D783] text-xl" >
        {icon}
      </div>
      <h3>{title}</h3>
    </div>

  )
}

function handleSearch(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  console.log("search")

}

export function Nav() {
  const { data: session, status } = useSession()
  const [searchStart, setSearchStart] = useState(false)
  const [providers, setProviders] = useState(null)

  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders()
      setProviders(response)
    }
    setProvider()
  }, [])

  return (
    <nav className="h-16 xl:h-24 relative">
      <div className="fixed top-0 left-0 w-screen h-16 z-10 bg-white flex justify-around items-center px-4 xl:h-24">

        <div className="h-[60px] flex items-center justify-center xl:hidden">
          <FontAwesomeIcon icon={faBars} className="w-[30px] " />
        </div>
        <img src="/nav/tastydaily.png" className="h-12 mx-auto xl:hidden" />
        <IoCartOutline size={26} className="text-[#243F2F] xl:hidden" />


        <div className="hidden xl:flex items-center text-[#243F2F] text-xl gap-6 mr-9">
          <Option title="Shop" icon={<IoStorefrontOutline size={32} />} />
          <Option title="Vegetables" icon={<LuCarrot size={32} />} />
          <Link href="/fruits">
            <Option title="Fresh Fruit" icon={<LuCherry size={32} />} />
          </Link>
          <Option title="Meat" icon={<TbMeat size={32} />} />
          <Link href="/">
            <img src="/lghome/tastydaily.png" className="h-10 hidden xl:block mx-4" />
          </Link>
          <Option title="Seafood" icon={<IoFishOutline size={32} />} />
          <Option title="Baking" icon={<GiSlicedBread size={32} />} />
          <Option title="Drinks" icon={<LuCupSoda size={32} />} />
          <Option title="Other" icon={<HiOutlineSquares2X2 size={32} />} />
        </div>

        <div className="hidden xl:flex items-center gap-4 justify-self-end absolute right-9">
          <div className="cursor-pointer" onClick={() => setSearchStart((oldVal) => !oldVal)}>
            <IoSearch size={22} />
          </div>
          {session?.user ? (
            <>
              <Link href="favourites">
                <FaRegHeart size={22} />
              </Link>
              <IoCartOutline size={26} className="text-[#243F2F] " />
              <img onClick={signOut} src={session?.user?.image} className="w-10 h-10 rounded-full" />
            </>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                  >
                    SignIn
                  </button>
                )
                )
              }
            </>
          )}

        </div>
      </div >


      {searchStart && (
        <div className="h-full w-full bg-black/80 fixed z-10 grid place-items-center">
          <div className="">
            <form className="flex gap-2">
              <input type="text" className="w-full h-12 rounded-full px-4" placeholder="Search" />
              <button type="submit" className=" h-12 w-12 rounded-full bg-[#00D783] flex justify-center items-center"
                onClick={handleSearch}
              >
                <IoSearch size={22} />
              </button>
            </form>
          </div>
        </div>
      )}


    </nav>
  )
}
