import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";

export default function Nav() {
  return (
    <div className="flex justify-center items-center px-4 lg:h-20">
      <div className=" h-[60px] flex items-center justify-center lg:hidden">
        <FontAwesomeIcon icon={faBars} className="w-[30px] " />
      </div>
      <img src="/nav/tastydaily.png" className="h-12 mx-auto lg:hidden" />
      <IoCartOutline size={26} className="text-[#243F2F] lg:hidden" />

      <div className="hidden lg:block ">
        <div>

        </div>
        <img src="/lghome/tastydaily.png" className="h-10 hidden lg:block" />
      </div>

    </div >
  )
}
