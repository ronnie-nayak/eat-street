



export default function Sections3({ title, image, discount }: { title: string, image: string, discount: number }) {
  return (
    <div>
      <div style={{
        background: `url(${image}) 0px -390px no-repeat #4F743D`,
        backgroundSize: "cover",
      }} className=" h-[43vh] m-4 rounded-3xl flex flex-col items-center text-center py-4  ">
        <button className="bg-white text-[#00AA63] text-2xl font-bold px-5 py-1 rounded-full mb-4">
          -{discount}%
        </button>
        <h1
          className="text-4xl font-bold leading-none text-[#243F2F] ">
          {title}
        </h1>
      </div>
    </div >
  )
}
