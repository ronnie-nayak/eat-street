export default function Banner() {
  return (
    <div>
      <div className="h-[29.5vh] md:h-[40vh] lg:h-[52vh] px-4 py-8 lg:p-14 lg:py-20" style={{
        background: "url('/home/banner.jpg') right no-repeat #4F743D",
        backgroundSize: "cover",
      }}>
        <h1
          className="w-[78%] text-[6vw] lg:text-[4.5vw] font-bold leading-none text-[#EBFFDC] mb-4">
          Order Tasty Fruits <br />
          and Get Free Delivery!
        </h1>
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center lg:mt-12 lg:text-xl">
          <button className="flex gap-3 bg-[#243F2F] font-bold text-white p-4 rounded-full lg:p-6">
            <img src="/home/cart.svg" />
            Explore Shop
          </button>
          <h2 className="text-white font-semibold">
            2500+ Fresh Products
          </h2>
        </div>
      </div>
    </div >

  );
}
