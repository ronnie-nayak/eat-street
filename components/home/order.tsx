

export default function Order() {
  return (
    <div style={{
      background: "radial-gradient(70.71% 70.71% at 50% 50%, #495875 41%, #48556F 100%)",
    }} className="text-center flex flex-col gap-4 p-4 pb-0 m-4 rounded-3xl items-center">
      <h2 className="font-bold text-[#D4FFFF] text-4xl">
        Order from our Apps and Get Free Delivery
      </h2>
      <small className="text-[#D4FFFF] text-lg font-bold ">
        * Free Delivery For Orders Starts From $50
      </small>
      <div className="flex gap-2 w-1/2">
        <img src="/home/appStore.png" className="w-full" />
        <img src="/home/googlePlay.png" className="w-full" />
      </div>
      <img src="/home/phonegirl.png" className="m-auto w-5/12" />
    </div>
  )
}
