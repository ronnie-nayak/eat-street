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
        <div className="flex flex-col xl:flex-row gap-4 items-start xl:items-center xl:mt-12 xl:sm:text-[1.25vw]">
          <Link
            href={"/homepage/fruit"}
            className="flex gap-3 bg-limeGreen text-white p-4 rounded-full xl:p-6 hover:text-limeGreen hover:bg-white transition-all duration-300"
          >
            <img src="/home/cart.svg" />
            Explore Shop
          </Link>
          <h2 className="text-white font-semibold">2500+ Fresh Products</h2>
        </div>
      </div>
    </div>
  );
}
