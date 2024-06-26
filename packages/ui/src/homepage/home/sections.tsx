import Link from "next/link";

export function Sections({
  title,
  image,
  path,
}: {
  title: string;
  image: string;
  path: string;
}) {
  return (
    <div
      className=" h-[23.75vh] md:h-[40vh]  w-full px-4 py-8 m-2 rounded-3xl xl:px-8 xl:py-20 hover:-translate-y-2 transition-all duration-500"
      style={{
        background: `url(${image}) right center no-repeat #4F743D`,
        backgroundSize: "cover",
      }}
    >
      <h1 className=" sm:text-[2vw] leading-none text-[#243F2F] mb-6 whitespace-pre-wrap ">
        {title}
      </h1>
      <Link
        href={path}
        className="bg-white  p-4 rounded-full mb-4 hover:text-white transition-all duration-300 hover:bg-limeGreen"
      >
        Shop Now
      </Link>
    </div>
  );
}

export function Sections2({ title, image }: { title: string; image: string }) {
  return (
    <div>
      <div
        style={{
          background: `url(${image}) center no-repeat #4F743D`,
          backgroundSize: "cover",
        }}
        className=" h-[63vh] xl:min-w-52 xl:h-[70vh] m-4 rounded-3xl flex flex-col items-center text-center px-24 py-8 gap-4 "
      >
        <h1 className="sm:text-[2vw]  leading-none text-[#EBFFDC] ">{title}</h1>
        <Link
          href={"/homepage/baking"}
          className="bg-white  p-4 rounded-full mb-4 hover:text-white transition-all duration-300 hover:bg-limeGreen"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export function Sections3({
  title,
  image,
  discount,
}: {
  title: string;
  image: string;
  discount: number;
}) {
  return (
    <div
      style={{
        background: `url(${image}) 50% 70% no-repeat #4F743D`,
        backgroundSize: "cover",
      }}
      className=" h-[43vh] m-4 rounded-3xl flex flex-col items-center text-center py-10 xl:w-1/4  hover:-translate-y-4 transition-all duration-500"
    >
      <button className="bg-white text-[#00AA63] sm:text-[1.5vw]  px-5 py-1 rounded-full mb-4">
        -{discount}%
      </button>
      <h1 className="sm:text-[2vw]  leading-none text-[#243F2F] ">{title}</h1>
    </div>
  );
}

export function Biker() {
  return (
    <div
      style={{
        background:
          "radial-gradient(70.71% 70.71% at 50% 50%, #51A390 3%, #276153 81%)",
      }}
      className="text-center flex flex-col xl:flex-row gap-4 p-4 xl:px-28 m-4 mt-28 rounded-3xl items-center"
    >
      <img src="/home/biker.png" className="m-auto w-6/12 xl:w-4/12 " />
      <div className="flex flex-col gap-4 text-[#D4FFFF] items-center justify-center">
        <h2 className="text-[2vw] xl:text-[2.5vw] w-8/12">
          We Delivery on Next Day from 10:00 AM to 08:00 PM
        </h2>
        <small className="sm:text-[0.85vw]">
          * For Orders starts from $100
        </small>
        <Link
          href={"/homepage/carts"}
          className="bg-white text-[#276153] p-4 rounded-full mb-4 hover:text-white transition-all duration-300 hover:bg-limeGreen"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export function Order() {
  return (
    <div
      style={{
        background:
          "radial-gradient(70.71% 70.71% at 50% 50%, #495875 41%, #48556F 100%)",
      }}
      className="text-center flex flex-col xl:flex-row gap-4 p-4 pb-0  m-4 mt-28 rounded-3xl xl:h-[30vw] items-center justify-center xl:items-end"
    >
      <img src="/lghome/man.png" className="hidden xl:block w-[15%]" />

      <div className="flex flex-col items-center justify-center gap-4 self-center">
        <h2 className=" text-[#D4FFFF] sm:text-[2vw]">
          Order from our Apps and Get Free Delivery
        </h2>
        <small className="text-[#D4FFFF] sm:text-[1vw]  ">
          * Free Delivery For Orders Starts From $50
        </small>
        <div className="flex gap-2 w-1/2 cursor-pointer">
          <img src="/home/appStore.png" className="w-full" />
          <img src="/home/googlePlay.png" className="w-full" />
        </div>
      </div>

      <img src="/home/phonegirl.png" className="w-[20%] " />
    </div>
  );
}

export function Info({
  image,
  first,
  second,
}: {
  image: string;
  first: string;
  second: string;
}) {
  return (
    <div>
      <img src={image} />
      <h3 className="sm:text-[1vw]">{first}</h3>
      <h4 className="font-normal sm:text-[1vw]">{second}</h4>
    </div>
  );
}
