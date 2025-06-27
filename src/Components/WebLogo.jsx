import { Link } from "react-router";
import webLogo from "../assets/—Pngtree—green sprout leaf logo design_7431531.png";

const WebLogo = () => {
  return (
    <Link to="/">
      <div className="flex justify-center items-center">
        <img className="w-16 lg:w-20" src={webLogo} alt="webLogo" />
        <p className="font-bold hidden md:block">
          <span className="text-green-500">Green</span>Circle
        </p>
      </div>
    </Link>
  );
};

export default WebLogo;
