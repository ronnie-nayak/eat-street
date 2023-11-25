

export default function Sections({ title, image }: { title: string, image: string }) {
  return (
    <div className=" h-[23.75vh] md:h-[40vh]  w-full px-4 py-8 m-2 rounded-3xl lg:px-8 lg:py-20" style={{
      background: `url(${image}) right center no-repeat #4F743D`,
      backgroundSize: "cover",
    }}>
      <h1
        className=" text-4xl lg:text-4xl font-bold leading-none text-[#243F2F] mb-6 whitespace-pre-wrap">
        {title}
      </h1>
      <button className="bg-white font-bold p-4 rounded-full mb-4">
        Shop Now
      </button>
    </div>
  )
}
