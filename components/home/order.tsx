

export default function Order() {
  return (
    <div style={{
      background: "radial-gradient(70.71% 70.71% at 50% 50%, #495875 41%, #48556F 100%)",
    }} className="text-center flex flex-col xl:flex-row gap-4 p-4 pb-0 xl:px-52 m-4 mt-28 rounded-3xl xl:h-[60vh] items-center xl:items-end">

      <img src="/lghome/man.png" className="hidden xl:block w-3/12" />

      <div className="flex flex-col items-center justify-center gap-4 self-center">
        <h2 className=" text-[#D4FFFF] text-4xl">
          Order from our Apps and Get Free Delivery
        </h2>
        <small className="text-[#D4FFFF] text-lg  ">
          * Free Delivery For Orders Starts From $50
        </small>
        <div className="flex gap-2 w-1/2">
          <img src="/home/appStore.png" className="w-full" />
          <img src="/home/googlePlay.png" className="w-full" />
        </div>
      </div>

      <img src="/home/phonegirl.png" className="w-4/12 xl:-mt-16" />
    </div>
  )
}
