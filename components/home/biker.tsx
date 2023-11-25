
export default function Biker() {
  return (
    <div style={{
      background: "radial-gradient(70.71% 70.71% at 50% 50%, #51A390 3%, #276153 81%)",
    }} className="text-center px-48 flex flex-col gap-4 p-4 m-4 rounded-3xl">
      <img src="/home/biker.png" className="m-auto" />
      <h2 className="font-bold text-[#D4FFFF] text-4xl">
        We Delivery on Next Day from 10:00 AM to 08:00 PM
      </h2>
      <small className="text-[#D4FFFF] text-base font-bold">
        * For Orders starts from $100
      </small>
      <button className="flex gap-3 bg-white text-[#276153] font-bold text-white p-4 rounded-full mb-4 m-auto">
        Read More
      </button>
    </div>
  )
}
