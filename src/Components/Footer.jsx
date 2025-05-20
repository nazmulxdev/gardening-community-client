import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logoImage from "../assets/—Pngtree—green sprout leaf logo design_7431531.png";

const Footer = () => {
  return (
    <div className="backGround">
      <footer className="max-w-screen-2xl mx-auto px-6 py-16  text-base-content ">
        {/* Contact Info */}
        <div className="grid grid-cols-1 justify-start items-start mx-auto mb-6">
          <img className="w-24 sm:mx-auto" src={logoImage} alt="" />
          <p className="font-bold text-start sm:text-center text-2xl">
            <span className="text-green-500">Green</span>Circle
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 items-center justify-between mx-auto">
          {" "}
          <div className="space-y-2">
            <p className="font-semibold">Contact</p>
            <p>Email: nazmulxdev@gmail.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          {/* Terms */}
          <div className="space-y-2">
            <p className="font-semibold">Terms</p>
            <a href="#" className="link link-hover">
              Privacy Policy
            </a>
            <br />
            <a href="#" className="link link-hover">
              Terms & Conditions
            </a>
          </div>
          {/* Social Links */}
          <div>
            <p className="font-semibold">Follow Us</p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-blue-600 text-xl hover:text-blue-800">
                <FaFacebook />
              </a>
              <a href="#" className="text-sky-500 text-xl hover:text-sky-700">
                <FaTwitter />
              </a>
              <a href="#" className="text-pink-600 text-xl hover:text-pink-800">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-dotted border-gray-400 my-4"></div>
        <div>
          <p className="text-start sm:text-center my-4">
            Copyright © {new Date().getFullYear()} - All right reserved by Green
            Circle
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
