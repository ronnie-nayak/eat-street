


export default function Sections2({ title, image }: { title: string, image: string }) {
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
