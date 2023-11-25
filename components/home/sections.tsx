

export default function Sections({ title, image }: { title: string, image: string }) {
  return (
    <div>
      <div className=" h-[23vh] md:h-[40vh] lg:h-[50vh] px-4 py-8 m-2 rounded-3xl" style={{
        background: `url(${image}) right center no-repeat #4F743D`,
        backgroundSize: "cover",
      }}>
        <h1
          className="w-[33%] text-[4vw] lg:text-[4vw] font-bold leading-none text-[#243F2F] mb-6">
          {title}
        </h1>
        <button className="bg-white font-bold p-4 rounded-full mb-4">
          Shop Now
        </button>
      </div>
    </div >
  )
}
