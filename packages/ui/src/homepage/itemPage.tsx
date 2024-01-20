'use client'
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
import { toast } from "sonner"
import { IconClock, IconTick } from '../react-svg/svg';
import moment from 'moment';
import { Props } from '@repo/ui';
import { v4 } from 'uuid';
import { useRouter } from 'next/navigation';

const promises = [
  "100% Money Back Warranty",
  "Free and Fast Delivery",
  "All Items Top Best Quality",
  "24/7 Support"
]



export function ItemPage({ _id, name, desc, price, sold, oldPrice, stock, dateAdded, favouriteUsers, cartUsers, comments, totalStars, image }: Props) {


  const [fav, setFav] = useState(false)
  const [cart, setCart] = useState(false)
  const [amount, setAmount] = useState(1)
  const { data: session } = useSession()

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
      if (!res.ok) {
        setFav(prev => !prev)
        return Promise.reject(data)
      }
    } catch (error) {
      setFav(prev => !prev)
      router.replace("/login")
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
      if (!res.ok) {
        setCart(prev => !prev)
        return Promise.reject(data)
      }
    } catch (error) {
      setCart(prev => !prev)
      router.replace("/login")
    }
  }

  const cartButton = () => {
    addToCart()
    if (cart) {
      toast.success("Removed from cart")
    } else {
      toast.success("Added to cart")
    }
  }


  let rating = 0
  if (comments?.length! > 0) {
    rating = Math.ceil(totalStars! / comments?.length!)
  }


  const uniqueStars = v4()
  return (
    <div className="m-auto max-w-7xl relative">
      <AspectRatio ratio={1150 / 600} >
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateAreas: ` "image content" `
        }} className="h-full bg-white border border-gray-300 ">
          <header style={{
            gridArea: "image"
          }} className="overflow-hidden cursor-pointer" >
            <img src={`${image}`} className="w-full " />
          </header>


          <div style={{ gridArea: "content" }}>
            <section className="p-9 overflow-clip cursor-pointer" >

              <h2 className="text-[2.25vw] text-[150%] mb-4">{name}</h2>
              <p className="text-1xl py-2 font-normal mb-6">
                {desc}
              </p>

              {
                rating > 0 && (

                  <div className="rating pointer-events-none m-4 ">
                    <input type="radio" name={`rating-${uniqueStars}-fullpage`} className="mask mask-star-2 bg-orange-400" checked={rating === 1} />
                    <input type="radio" name={`rating-${uniqueStars}-fullpage`} className="mask mask-star-2 bg-orange-400" checked={rating === 2} />
                    <input type="radio" name={`rating-${uniqueStars}-fullpage`} className="mask mask-star-2 bg-orange-400" checked={rating === 3} />
                    <input type="radio" name={`rating-${uniqueStars}-fullpage`} className="mask mask-star-2 bg-orange-400" checked={rating === 4} />
                    <input type="radio" name={`rating-${uniqueStars}-fullpage`} className="mask mask-star-2 bg-orange-400" checked={rating === 5} />
                  </div>
                )
              }


              <div className="mb-2 w-9/12">
                <div className="mb-2 bg-white h-2 rounded-full overflow-hidden w-full bg-gray-300/25">
                  <motion.div className="bg-forestGreen h-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(sold / stock) * 100}%` }}
                    transition={{ duration: 3 }}
                  ></motion.div>
                </div>
                <div className="font-thin text-sm flex gap-16">
                  <h4 >Sold: {sold}</h4>
                  <h4 >Available: {stock - sold}</h4>
                </div>
              </div >
            </section>
            <footer className="p-9 ">
              <div className='flex gap-4 items-baseline mb-4'>
                {oldPrice > 0 && <h4 className="font-semibold text-[1vw] line-through text-gray-600">${oldPrice}</h4>}
                <h3 className="font-semibold text-[#00AA63] text-[1.75vw]">${price}</h3>
              </div>


              <div className='flex gap-4 items-center'>
                <div className='flex gap-2 p-2 border border-black w-min rounded-3xl'>
                  <button className='w-9 text-[1.5vw]' disabled={amount === 1} onClick={() => setAmount((old) => old - 1)}>
                    −
                  </button>
                  <h2 className='w-5 grid place-items-center text-[1.25vw]'>{amount}</h2>
                  <button className='w-9 text-[1.5vw]' disabled={amount === (stock - sold)} onClick={() => setAmount((old) => old + 1)}>
                    +
                  </button>
                </div>
                <button className="flex gap-4 rounded-full p-6 text-white bg-limeGreen hover:bg-green-950 transition-all duration-300"
                  onClick={cartButton}
                >
                  <IoCartOutline size={26} />
                  <h2>{cart ? "Remove from Cart" : "Add to Cart"}</h2>

                </button>

                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className={clsx(fav ? "border-pink-400" : "border-gray-200",
                        "heart-container w-9 h-9 p-7  border-2 rounded-full hover:border-pink-400 z-0 overflow-hidden")}
                        title="Like" onClick={addToFavourites}>
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
                </TooltipProvider>
              </div>

              <div className='p-3 w-5/6 bg-gray-200 font-thin border border-gray-400 text-sm rounded-xl mt-4'>

                <IconClock className="h-9 w-9 inline-block mr-2 text-green-500" />
                We Delivery on Next Day from 10:00 AM to 08:00 PM </div>
              <ul className='font-thin mt-4 text-sm'>
                {
                  promises.map((e, i) => (
                    <li key={i} className='flex gap-2'>
                      <IconTick className="h-5 w-5 inline-block mr-2 text-green-500" />
                      <h2 className='text-md font-semibold'>{e}</h2>
                    </li>
                  ))
                }
              </ul>

            </footer>
          </div>

        </div >
      </AspectRatio >

      <div className="absolute top-14 left-6 flex flex-col gap-1">
        <div className="flex gap-1">
          {((moment(dateAdded).add(3, 'y').toDate()) >= new Date()) && <span className="px-2 py-1 rounded-full bg-limeGreen text-white  text-xs">NEW</span>}
          {oldPrice > 0 && <span className="px-2 py-1 rounded-full bg-forestGreen text-white  text-xs">SALE</span>}
        </div>
        {!(stock - sold) && <span className="px-2 py-1 rounded-full bg-[#F73E04] text-white  text-xs">OUT OF STOCK</span>}
      </div>
    </div>
  )
}


