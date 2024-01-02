'use client'
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoCartOutline } from "react-icons/io5";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { AspectRatio } from ".";

type Props = {
  _id: string,
  name: string,
  desc: string,
  count: number,
  favouriteUsers?: Array<any>,
  cartUsers?: Array<any>
}

export function Item({ _id, name, desc, count, favouriteUsers, cartUsers }: Props) {
  const { data: session, status } = useSession()
  const [fav, setFav] = useState(false)
  const [cart, setCart] = useState(false)
  useEffect(() => {
    const isFav: boolean = favouriteUsers?.includes(session?.user?.id) ?? false
    const isCart: boolean = cartUsers?.includes(session?.user?.id) ?? false
    setFav(isFav)
    setCart(isCart)
  }, [session])

  const addToFavourites = async () => {
    try {
      setFav(prev => !prev)
      const res = await fetch(`/api/favourites`, {
        method: "PATCH",
        body: JSON.stringify({ _id }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = res.json()
      if (res.ok) {
      } else {
        setFav(prev => !prev)
        return Promise.reject(data)
      }
    } catch (error) {
      setFav(prev => !prev)
      console.log(error)
    }
  }
  const addToCart = async () => {
    try {

      setCart(prev => !prev)
      const res = await fetch(`/api/carts`, {
        method: "PATCH",
        body: JSON.stringify({ _id }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = res.json()
      if (res.ok) {
      } else {
        setCart(prev => !prev)
        return Promise.reject(data)
      }
    } catch (error) {
      setCart(prev => !prev)
      console.log(error)
    }
  }

  return (
    <AspectRatio width={270} height={480} >
      <div style={{
        display: "grid",
        gridTemplateRows: "2fr 5fr 1fr",
        gridTemplateAreas: ` "image" "content" "price" `
      }} className="relative h-full bg-white border border-gray-300">
        <header style={{
          gridArea: "image"
        }} className="">
          <img src={`/items/${name}.jpg`} className="w-full" />
        </header>
        <section style={{
          gridArea: "content"
        }} className="p-9 overflow-clip">
          <h2 className="font-semibold text-3xl">{name}</h2>
          <p className="text-1xl py-2 font-normal">
            {desc}
          </p>
        </section>
        <footer style={{
          gridArea: "price",
          alignSelf: "end"
        }} className="flex items-center justify-between px-4 py-8 ">
          <h3 className="font-semibold text-[#00AA63] text-2xl">${count}.00</h3>
          <button className={`${cart ? 'text-white bg-gray-800' : 'text-[#243F2F] bg-gray-200'} rounded-full p-2 `}
            onClick={addToCart}
          >
            <IoCartOutline size={26} />
          </button>
        </footer>

        <div className="absolute top-2 left-2 flex gap-1 items-center">
          <span className="px-2 py-1 rounded-full bg-[#243F2F] text-white  text-xs">NEW</span>
          <span className="px-2 py-1 rounded-full bg-[#00AA63] text-white  text-xs">SALE</span>
          <span className="px-2 py-1 rounded-full bg-[#F73E04] text-white  text-xs">OUT OF STOCK</span>
        </div>

        <div className="absolute top-2 right-2 flex flex-col gap-2 items-center">
          <button className={`${fav ? 'border-red-600' : 'border-gray-200 '} rounded-full p-2 border-2`}
            onClick={addToFavourites}
          >
            <FontAwesomeIcon icon={faHeart} className="w-5" />
          </button>
          <button className="rounded-full p-2 border-gray-200 border-2">
            <FontAwesomeIcon icon={faEye} className="w-5" />
          </button>
        </div>
      </div >
    </AspectRatio >
  )
}

export function ItemSmall() {
  return (
    <div className="flex items-center h-[80px] gap-4 m-4">
      <img src="/items/mint.jpg" className="h-full w-[80px] object-cover rounded-xl" />
      <div>
        <h3 className=" text-[#243F2F]">Mint</h3>
        <h3 className=" text-[#0BAD69]">$13.00 – $22.00</h3>
      </div>
    </div >
  )
}
