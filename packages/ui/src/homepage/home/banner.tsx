import Link from "next/link";

export function Banner() {
  return (
    <div>
      <div
        className="h-[29.5vh] md:h-[40vh] xl:h-[52vh] px-4 py-8 xl:p-14 xl:py-20"
        style={{
          background: "url('/home/banner.jpg') right no-repeat #4F743D",
          backgroundSize: "cover",
        }}
      >
        <h1 className="w-[78%] text-[6vw] xl:text-[4.5vw]  leading-none text-[#EBFFDC] mb-4">
          Order Tasty Fruits <br />
          and Get Free Delivery!
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center sm:mt-12 text-[4vw] sm:text-[1.5vw]">
          <Link
            href={"/homepage/fruit"}
            className="flex gap-3 justify-start items-center bg-limeGreen text-white  p-4 rounded-full hover:text-limeGreen hover:bg-white transition-all duration-300"
          >
            <img src="/home/cart.svg" />
            <h2>Explore Shop</h2>
          </Link>
          <h2 className="text-white font-semibold">2500+ Fresh Products</h2>
        </div>
      </div>
    </div>
  );
}
