import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav() {
  return (
    <div>
      <div className="w-[86px] h-[60px] ">
        <FontAwesomeIcon icon={faBars} className="w-[30px] m-auto" />
      </div>
    </div>
  )
}
