export default function Banner() {
  return (
    <div>
      <div className="h-[29vh] md:h-[40vh] lg:h-[50vh] px-4 py-8" style={{
        background: "url('/home/banner.jpg') right no-repeat #4F743D",
        backgroundSize: "cover",
      }}>
        <h1
          className="w-[78%] text-[6vw] lg:text-[4vw] font-bold leading-none text-[#EBFFDC] mb-4">
          Order Tasty Fruits
          and Get Free Delivery!
        </h1>
        <button className="flex gap-3 bg-[#243F2F] font-bold text-white p-4 rounded-full mb-4">
          <img src="/home/cart.svg" />
          Explore Shop
        </button>
        <h2 className="text-white font-semibold">
          2500+ Fresh Products
        </h2>
      </div>
    </div >

  );
}
