'use client'
import { usePathname } from 'next/navigation'
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
import { toast } from "sonner"
import { useRecoilValue } from 'recoil';
import { idState } from '@repo/atoms';
import { v4 } from 'uuid';

type Props = {
  _id?: string,
  name?: string,
  desc?: string,
  price?: number,
  oldPrice?: number,
  stock: number,
  sold: number,
  newTag?: boolean,
  favouriteUsers?: Array<any>,
  cartUsers?: Array<any>
}



export function ItemPage({ _id }: { _id: string }) {

  const pathname = usePathname().split("/").slice(0, -1)
  const [page, setPage] = useState<Props>({ sold: 1, stock: 1 })
  const [fav, setFav] = useState(false)
  const [cart, setCart] = useState(false)
  const [amount, setAmount] = useState(1)
  const [loading, setLoading] = useState(true)
  const { data: session } = useSession()
  useEffect(() => {
    const getFruits = async () => {
      try {
        let res = await fetch("/api/item", {
          method: "PATCH",
          body: JSON.stringify({ _id }),
          headers: {
            "Content-Type": "application/json"
          }
        })
        let data = await res.json()
        if (res.ok) {
          setPage(data)
        } else {
          return Promise.reject(data)
        }
      } catch (error) {
      }
    }
    getFruits()
  }, []
  )

  useEffect(() => {
    setFav(page?.favouriteUsers?.some(e => e.refId === session?.user?.id) ?? false)
    setCart(page?.cartUsers?.some(e => e.refId === session?.user?.id) ?? false)
    setLoading(false)
  }, [page])

  useEffect(() => {
  }, [fav, cart])

  const addToFavourites = async () => {
    setFav(prev => !prev)
    const res = await fetch(`/api/favourites`, {
      method: "PATCH",
      body: JSON.stringify({ _id }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
  }
  const addToCart = async () => {
    setCart(prev => !prev)
    const res = await fetch(`/api/carts`, {
      method: "PATCH",
      body: JSON.stringify({ _id, amount }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
  }

  const cartButton = () => {
    addToCart()
    if (cart) {
      toast.success("Removed from cart")
    } else {
      toast.success("Added to cart")
    }
  }

  return (
    <>
      <div className="m-aut bg-white flex justify-center text-sm font-light p-2 breadcrumbs">
        <ul>
          {pathname.map((item) => <li key={v4()}>{item}</li>)}
        </ul>
      </div>
      {
        loading ?
          (<div className="m-auto max-w-6xl py-9" > loading</div>)
          :
          (<div className="m-auto max-w-7xl py-9 relative">
            <AspectRatio ratio={1150 / 550} >
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateAreas: ` "image content" `
              }} className="h-full bg-white border border-gray-300">
                <header style={{
                  gridArea: "image"
                }} className="overflow-hidden cursor-pointer" >
                  <img src={`/items/${page?.name?.toLowerCase()}.jpg`} className="w-full " />
                </header>


                <div style={{ gridArea: "content" }}>
                  <section className="p-9 overflow-clip cursor-pointer" >

                    <h2 className="text-5xl text-[150%] mb-4">{page?.name}</h2>
                    <p className="text-1xl py-2 font-normal mb-6">
                      {page?.desc}
                    </p>


                    <div className="mb-2 w-9/12">
                      <div className="mb-2 bg-white h-2 rounded-full overflow-hidden w-full bg-gray-300/25">
                        <motion.div className="bg-forestGreen h-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${(page?.sold / page?.stock) * 100}%` }}
                          transition={{ duration: 3 }}
                        ></motion.div>
                      </div>
                      <div className="font-thin text-sm flex justify-between">
                        <h4>Sold: {page?.sold}</h4>
                        <h4>Available: {page?.stock ?? 1 - page?.sold}</h4>
                      </div>
                    </div >
                  </section>
                  <footer className="p-9 ">
                    <div className='flex gap-4 items-baseline mb-4'>
                      {page?.oldPrice && <h4 className="font-semibold text-lg line-through text-gray-600">${page?.oldPrice}</h4>}
                      <h3 className="font-semibold text-[#00AA63] text-3xl">${page?.price}</h3>
                    </div>


                    <div className='flex gap-4 items-center'>
                      <div className='flex gap-2 p-2 border border-black w-min rounded-3xl'>
                        <button className='w-9 text-2xl' disabled={amount === 1} onClick={() => setAmount((old) => old - 1)}>
                          −
                        </button>
                        <h2 className='w-5 grid place-items-center text-xl'>{amount}</h2>
                        <button className='w-9 text-2xl' disabled={amount === (page?.stock - page?.sold)} onClick={() => setAmount((old) => old + 1)}>
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
                              "heart-container w-9 h-9 p-7  border-2 rounded-full hover:border-pink-400 z-0 overflow-hidden")} title="Like" onClick={addToFavourites}>
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

                    <div className='p-3 w-4/6 bg-gray-200 font-thin border border-gray-400 text-sm rounded-xl mt-4'> We Delivery on Next Day from 10:00 AM to 08:00 PM </div>
                    <ul className='font-thin mt-4 text-sm'>
                      <li>100% Money Back Warranty</li>
                      <li>Free and Fast Delivery</li>
                      <li>All Items Top Best Quality</li>
                      <li>24/7 Support</li>
                    </ul>

                  </footer>
                </div>

              </div >
            </AspectRatio >

            <div className="absolute top-14 left-6 flex flex-col gap-1">
              <div className="flex gap-1">
                {page?.newTag && <span className="px-2 py-1 rounded-full bg-limeGreen text-white  text-xs">NEW</span>}
                {page?.oldPrice && <span className="px-2 py-1 rounded-full bg-forestGreen text-white  text-xs">SALE</span>}
              </div>
              {!(page?.stock - page?.sold) && <span className="px-2 py-1 rounded-full bg-[#F73E04] text-white  text-xs">OUT OF STOCK</span>}
            </div>
          </div>)}
    </>


  )
}


