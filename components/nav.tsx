import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Nav() {
  return (
    <div className="flex justify-between items-center pr-4">
      <div className="w-[86px] h-[60px] flex items-center justify-center">
        <FontAwesomeIcon icon={faBars} className="w-[30px] " />
      </div>
      <Image src={"/nav/tastydaily.png"} width={101} height={0} alt="tastydaily" />
      <FontAwesomeIcon icon={faCartShopping} className="w-[24px] text-[#03AB64]" />
    </div >
  )
}
