'use client'
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { AspectRatio } from "../../components/ui/aspect-ratio";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'
import { PopupPreview } from ".";
import { useRecoilValue } from "recoil";
import { idState } from "@repo/atoms"
import { Props } from "../types";


export function Item({ _id, name, desc, price, sold, oldPrice, stock, newTag, favouriteUsers, cartUsers }: Props) {
  const { data: session } = useSession()
  const [fav, setFav] = useState(false)
  const [cart, setCart] = useState(false)
  const router = useRouter()
  useEffect(() => {
    const isFav: boolean = favouriteUsers?.some(e => e.refId === session?.user?.id) ?? false
    const isCart: boolean = cartUsers?.some(e => e.refId === session?.user?.id) ?? false
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
      const data = await res.json()
      if (res.ok) {
      } else {
        setFav(prev => !prev)
        return Promise.reject(data)
      }
    } catch (error) {
      setFav(prev => !prev)
    }
  }
  const addToCart = async () => {
    try {

      setCart(prev => !prev)
      const res = await fetch(`/api/carts`, {
        method: "PATCH",
        body: JSON.stringify({ _id, amount: 1 }),
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
    }
  }

  return (
    <div style={{
      minWidth: "260px",
      maxWidth: "545px",
    }} className="relative">
      <AspectRatio ratio={270 / 480}  >
        <div style={{
          display: "grid",
          gridTemplateRows: "5fr 5fr 1fr",
          gridTemplateAreas: ` "image" "content" "price" `
        }} className="h-full bg-white border border-gray-300" >
          <header style={{
            gridArea: "image"
          }} className="overflow-hidden cursor-pointer" onClick={() => router.push("/item/" + _id)}>
            <img src={`/items/${name.toLowerCase()}.jpg`} className="w-full hover:scale-125 transition duration-300" />
          </header>
          <section style={{
            gridArea: "content"
          }} className="p-9 overflow-clip cursor-pointer" onClick={() => router.push("/item/" + _id)}>

            <div className="mb-2 ">
              <div className="bg-white h-2 rounded-full overflow-hidden w-full bg-gray-300/25">
                <motion.div className="bg-forestGreen h-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(sold / stock) * 100}%` }}
                  transition={{ duration: 3 }}
                ></motion.div>
              </div>
              <div className="font-thin text-sm flex justify-between">
                <h4>Sold: {sold}</h4>
                <h4>Available: {stock - sold}</h4>
              </div>
            </div >
            <h2 className="font-semibold text-[150%]">{name}</h2>
            <p className="text-1xl py-2 font-normal">
              {desc}
            </p>
          </section>
          <footer style={{
            gridArea: "price",
            alignSelf: "end"
          }} className="flex items-center justify-between px-4 py-8 ">
            <div>
              {oldPrice && <h4 className="font-semibold text-lg line-through text-gray-600">${oldPrice}</h4>}
              <h3 className="font-semibold text-[#00AA63] text-2xl">${price}</h3>
            </div>
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <button className={`${cart ? 'text-white bg-gray-800' : 'text-limeGreen bg-gray-200'} rounded-full p-2 border-2 hover:border-limeGreen transition-all duration-300`}
                    onClick={addToCart}
                  >
                    <IoCartOutline size={26} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to Cart</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </footer>

        </div >
      </AspectRatio >

      <div className="absolute top-2 left-2 flex flex-col gap-1">
        <div className="flex gap-1">
          {newTag && <span className="px-2 py-1 rounded-full bg-limeGreen text-white  text-xs">NEW</span>}
          {oldPrice && <span className="px-2 py-1 rounded-full bg-forestGreen text-white  text-xs">SALE</span>}
        </div>
        {!(stock - sold) && <span className="px-2 py-1 rounded-full bg-[#F73E04] text-white  text-xs">OUT OF STOCK</span>}
      </div>

      <div className="absolute top-2 right-2 flex flex-col gap-2 items-center">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              <div className={clsx(fav ? "border-pink-400" : "border-gray-200",
                "heart-container w-9 h-9 p-2  border-2 rounded-full hover:border-pink-400 z-0 overflow-hidden")} title="Like" onClick={addToFavourites}>
                <input type="checkbox" className="checkbox" id="Give-It-An-Id" checked={fav} />
                <div className="svg-container">
                  <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                    </path>
                  </svg>
                  <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                    </path>
                  </svg>
                  <svg className="svg-celebrate" width="60" height="60" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="10,10 20,20"></polygon>
                    <polygon points="10,50 20,50"></polygon>
                    <polygon points="20,80 30,70"></polygon>
                    <polygon points="90,10 80,20"></polygon>
                    <polygon points="90,50 80,50"></polygon>
                    <polygon points="80,80 70,70"></polygon>
                  </svg>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to favourites</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <button className="rounded-full p-2 border-gray-200 border-2 z-20">

                <PopupPreview _id={_id} >
                  <FontAwesomeIcon icon={faEye} className="w-5" />
                </PopupPreview>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Quick View</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div >
  )
}

export function ItemSmall({ name, price, _id }: Props) {
  const router = useRouter()
  return (
    <div className="flex  items-center h-[80px] gap-4 m-4 bg-white rounded-xl w-96 px-9 font-bold cursor-pointer"
      onClick={() => router.push("/item/" + _id)}
    >
      <img src={`/items/${name}.jpg`} className="h-full w-[80px] object-cover rounded-xl" />
      <div>
        <h3 className=" text-2xl text-[#243F2F]">{name}</h3>
        <h3 className=" text-lg text-[#0BAD69]">${price}</h3>
      </div>
    </div >
  )
}
