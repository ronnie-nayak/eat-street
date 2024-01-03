import { faFacebookF, faInstagram, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export function Footer() {
  return (
    <footer className="bg-[#15211A]  text-[#658372] py-4 px-9 xl:flex ">
      <div className="  flex flex-col gap-2 items-center xl:items-start justify-center w-full ">
        <small className="hover:text-white transition duration-300" >About Us</small>
        <small className="hover:text-white transition duration-300" >Contact Us</small>
        <small className="hover:text-white transition duration-300" >Shipping Policy</small>
        <small className="hover:text-white transition duration-300" >Refund Policy</small>
        <small className="hover:text-white transition duration-300" >Privacy Policy</small>
        <small className="hover:text-white transition duration-300" >Delivery Info</small>
        <small className="hover:text-white transition duration-300" >Terms and Conditions</small>
      </div>
      <div className="text-center flex flex-col gap-2 items-center xl:items-end order-2 w-full">
        <h2 className="text-[#04B06C] text-lg  mt-4">Get Latest News</h2>
        <p className="w-6/12">Sign up to get 10% off your first order and stay up to date on the latest product releases, special offers and news.</p>
        <div className="flex bg-[#111A14]  rounded-full border border-green-900 h-14 p-1 items-center gap-4 ">
          <FontAwesomeIcon icon={faEnvelope} className="text-[#04B06C] ml-3" />
          <form className="w-5/12 flex">
            <input type="email" placeholder="Your Email" className="bg-[#111A14]  " />
            <button className=" text-white text-sm px-4 h-12 rounded-full bg-[#00AA63] hover:text-[#00AA63] hover:bg-white transition duration-300">Subscribe</button>
          </form>
        </div>
        <h2 className="text-[#04B06C] text-lg mt-4">Payment Accepted</h2>
        <div className="flex gap-1 w-1/3">
          <img className="w-full" src="/home/cards/visa.png" />
          <img className="w-full" src="/home/cards/mastercard.png" />
          <img className="w-full" src="/home/cards/applepay.png" />
          <img className="w-full" src="/home/cards/paypal.png" />
          <img className="w-full" src="/home/cards/amex.png" />
          <img className="w-full" src="/home/cards/crypto.png" />
        </div>
      </div>
      <div className="text-center flex flex-col gap-2 items-center order-1">
        <img src="/home/tastydaily.png" className="w-1/3 my-4" />
        <p className="w-8/12">We're Tasty Daily Shop, an innovative team of food engineers. Our unique model minimizes fresh food handling by up to 85%, sourcing locally and dispatching within hours through cold chain logistics in eco-friendly containers.</p>
        <div className="flex gap-4 text-[#00AA63] my-4" >
          <FontAwesomeIcon className="hover:text-white transition duration-300 cursor-pointer" size="xl" icon={faFacebookF} />
          <FontAwesomeIcon className="hover:text-white transition duration-300 cursor-pointer" size="xl" icon={faInstagram} />
          <FontAwesomeIcon className="hover:text-white transition duration-300 cursor-pointer" size="xl" icon={faWhatsapp} />
          <FontAwesomeIcon className="hover:text-white transition duration-300 cursor-pointer" size="xl" icon={faYoutube} />
        </div>
        <small>
          © 2023 Eat Street Ronnie Nayak
        </small>
      </div>

    </footer >
  )
}
