'use client'
import { useEffect, useState } from "react"
import { Grid } from ".."
import { useRouter } from 'next/navigation'
import { Props } from "../../types"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table"
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group"
import { Label } from "../../../components/ui/label"
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "../../.."

export function Payments() {
  const [page, setPage] = useState<Array<{ refId: Props, quantity: number }>>([])
  const [subTotal, setSubTotal] = useState<number>(0)
  const [shipping, setShipping] = useState<number>(5)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const router = useRouter()
  useEffect(() => {
    const getCarts = async () => {
      try {
        let res = await fetch("/api/carts", { method: "GET" })
        let data = await res.json()
        if (res.ok) {
          setPage(data)
        } else {
          return Promise.reject(data)
        }
      } catch (error) {
        router.replace("/login")
      }
    }
    getCarts()
  }, [])
  useEffect(() => {
    let subTotal = 0
    page.forEach((item) => {
      subTotal += item.refId.price * item.quantity
    })
    setSubTotal(subTotal)
  }, [page])


  const redirectToCheckout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault()
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_TEST_STRIPE_PUBLISHABLE_KEY as string);

      if (!stripe) throw new Error('Stripe failed to initialize.');

      const checkoutResponse = await fetch('/api/checkout_session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ page, shipping }),
      });

      const { sessionId } = await checkoutResponse.json();
      const stripeError = await stripe.redirectToCheckout({ sessionId });

      if (stripeError) {
        console.error(stripeError);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (page.length === 0) return (
    <div className="py-7">
      <div className="w-7/12 h-5/6 bg-white rounded-xl m-auto flex p-4 gap-4">
        <h1 className="sm:text-[1.5vw] text-center m-auto">No items in cart</h1>
      </div>
    </div>
  )

  const endPage = Math.ceil(page.length / 5)
  return (
    <div className="py-7">
      <div className="w-full sm:w-7/12 h-5/6 bg-white rounded-xl m-auto flex flex-col-reverse sm:flex-row p-4 gap-4">
        <div>
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-5/12">Image</TableHead>
                <TableHead className="">Product</TableHead>
                <TableHead className="">Quantity</TableHead>
                <TableHead className="text-right">SubTotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {page.map((item, index) => (
                <TableRow key={index} className="cursor-pointer"
                  onClick={() => router.push("/homepage/item/" + item.refId._id)}
                >
                  <TableCell className="font-medium"><img src={item.refId.image} className="h-full w-full sm:w-5/12 " /></TableCell>
                  <TableCell className="w-8/12"><div>
                    <h3 className=" sm:text-[1.5vw] text-[#243F2F] mb-3">{item.refId.name}</h3>
                    <h3 className=" sm:text-[1vw] text-[#0BAD69]">${item.refId.price}</h3></div></TableCell>
                  <TableCell className=" sm:text-[1vw]"><h1>{item.quantity}</h1></TableCell>
                  <TableCell className="text-right sm:text-[1.5vw] text-limeGreen"><h1>${item.refId.price * item.quantity}</h1></TableCell>
                </TableRow>
              )).slice((pageNumber - 1) * 5, pageNumber * 5)}
            </TableBody>
          </Table>
          <div className="p-8 flex gap-5 justify-center items-center">
            <Button disabled={pageNumber === 1 ? true : false} onClick={() => setPageNumber(old => old - 1)}>Previous</Button>
            <p>Page {!endPage ? 0 : pageNumber} of {endPage}</p>
            <Button disabled={endPage === pageNumber || !endPage ? true : false} onClick={() => setPageNumber(old => old + 1)}>Next</Button>
          </div>
        </div>
        <form className="flex flex-col w-full sm:w-1/2 p-8 border border-green-900 rounded-xl pt-10 h-min">
          <div className="border border-gray-300"></div>
          <div className="flex justify-between py-4 items-baseline">
            <h2 className="font-medium sm:text-[1.5vw]">Subtotal</h2>
            <h2 className="text-forestGreen sm:text-[1vw]">${subTotal.toFixed(2)}</h2>
          </div>
          <div className="border border-gray-300"></div>
          <RadioGroup defaultValue="option-one" className="py-4">
            <h2 className="font-medium sm:text-[1.5vw]">Shipping</h2>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" onClick={() => setShipping(5)} />
              <Label htmlFor="option-one" className="sm:text-[0.85vw]">Normal Shipping</Label>
              <h2 className="text-forestGreen sm:text-[1vw]">$5.00</h2>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" onClick={() => setShipping(10)} />
              <Label htmlFor="option-two" className="sm:text-[0.85vw]">Express Shipping</Label>
              <h2 className="text-forestGreen sm:text-[1vw]">$10.00</h2>
            </div>
          </RadioGroup>
          <div className="border border-gray-300 mt-20"></div>
          <div className="flex justify-between py-4 items-baseline">
            <h2 className="font-medium sm:text-[1.5vw]">Total</h2>
            <h2 className="text-forestGreen sm:text-[1vw]">${(subTotal + shipping).toFixed(2)}</h2>
          </div>
          <button
            type="submit"
            onClick={(e) => page.length > 0 && redirectToCheckout(e)}
            disabled={page.length === 0}
            className="bg-limeGreen text-white rounded-xl px-4 py-2">Checkout</button>
        </form>
      </div >
    </div >
  )
}
