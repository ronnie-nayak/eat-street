
export default function Biker() {
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
