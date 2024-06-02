import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import Logo from "../assets/Logo.png";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex text-3xl font-bold tracking-tight text-orange-500">
          <img src={Logo} alt="ITEats Logo" className="rounded-full h-12 mr-2" />
          <span className="text-3xl font-bold tracking-tight text-orange-500">ITEats</span>

        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;