import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="w-full h-[70px] bg-blue-400 p-4">
      <nav className="mx-auto flex flex-row-reverse items-center gap-40 h-full sm:max-w-[560px] md:max-w-[688px] lg:max-w-[944px] xl:max-w-[1200px] 2xl:max-w-[1400px] ">
        <Link to="shoppingCart" className="relative cursor-pointer ">
          <FaShoppingCart size={30} className="text-white" />
          <span className="text-[14px] absolute -top-[10px] leading-[18px] -right-[7px] text-white w-5 h-5 inline-block text-center bg-orange-500 rounded-full">
            0
          </span>
        </Link>
        <Link to="/" className="text-white text-[16px] ">
          Home
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
