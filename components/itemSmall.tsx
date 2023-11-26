

export default function ItemSmall() {
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
