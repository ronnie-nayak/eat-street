

export function Sections({ title, image }: { title: string, image: string }) {
  return (
    <div className=" h-[23.75vh] md:h-[40vh]  w-full px-4 py-8 m-2 rounded-3xl xl:px-8 xl:py-20" style={{
      background: `url(${image}) right center no-repeat #4F743D`,
      backgroundSize: "cover",
    }}>
      <h1
        className=" text-4xl xl:text-4xl  leading-none text-[#243F2F] mb-6 whitespace-pre-wrap">
        {title}
      </h1>
      <button className="bg-white  p-4 rounded-full mb-4">
        Shop Now
      </button>
    </div>
  )
}

export function Sections2({ title, image }: { title: string, image: string }) {
  return (
    <div>
      <div style={{
        background: `url(${image}) right center no-repeat #4F743D`,
        backgroundSize: "cover",
      }} className=" h-[63vh] xl:w-96 xl:h-[70vh] m-4 rounded-3xl flex flex-col items-center text-center px-24 py-8 gap-4 ">
        <h1
          className="text-4xl  leading-none text-[#EBFFDC] ">
          {title}
        </h1>
        <button className="bg-white  p-4 rounded-full mb-4">
          Shop Now
        </button>
      </div>
    </div >
  )
}

export function Sections3({ title, image, discount }: { title: string, image: string, discount: number }) {
  return (
    <div style={{
      background: `url(${image}) 50% 70% no-repeat #4F743D`,
      backgroundSize: "cover",
    }} className=" h-[43vh] m-4 rounded-3xl flex flex-col items-center text-center py-10 xl:w-1/4 ">
      <button className="bg-white text-[#00AA63] text-2xl  px-5 py-1 rounded-full mb-4">
        -{discount}%
      </button>
      <h1
        className="text-4xl  leading-none text-[#243F2F] ">
        {title}
      </h1>
    </div>
  )
}

export function Biker() {
  return (
    <div style={{
      background: "radial-gradient(70.71% 70.71% at 50% 50%, #51A390 3%, #276153 81%)",
    }} className="text-center flex flex-col xl:flex-row gap-4 p-4 xl:px-28 m-4 mt-28 rounded-3xl">
      <img src="/home/biker.png" className="m-auto w-6/12 xl:w-4/12 xl:-mt-32" />
      <div className="flex flex-col gap-4 text-[#D4FFFF] items-center justify-center">
        <h2 className="text-4xl xl:text-6xl w-8/12">
          We Delivery on Next Day from 10:00 AM to 08:00 PM
        </h2>
        <small className="text-base">
          * For Orders starts from $100
        </small>
        <button className="bg-white text-[#276153] p-4 rounded-full mb-4">
          Read More
        </button>
      </div>
    </div>
  )
}

export function Order() {
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

export function Info({ image, first, second }: { image: string, first: string, second: string }) {
  return (
    <div>
      <img src={image} />
      <h3 className="text-lg">
        {first}
      </h3>
      <h4 className="font-normal text-lg">
        {second}
      </h4>
    </div>
  )
}
