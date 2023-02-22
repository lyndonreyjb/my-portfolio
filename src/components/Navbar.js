import React, { useState } from "react";
import { RxCross2, RxTokens } from "react-icons/rx";
import Logo from "../icons/logo.png";

<RxTokens.Provider
  value={{
    color: "blue",
    className: "global-class-name",
  }}></RxTokens.Provider>;

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center mx-auto px-4 pt-2 max-w-[1240px] text-brown">
      {" "}
      {/*Desktop Menu*/}
      <img src={Logo} alt="logo" className="max-w-[90px]"></img>
      <ul className="hidden md:flex text-white font-medium">
        <li className="p-4">Home</li>
        <li className="p-4">Projects</li>
        <li className="p-4">Contact</li>
        <li className="p-4">About</li>
      </ul>
      <div className="block md:hidden">
        <div onClick={handleNav} className="cursor-pointer">
          {nav ? (
            <RxCross2 size={35} color="#FCD34D" />
          ) : (
            <RxTokens size={35} color="#FCD34D" />
          )}
        </div>
        <div 
          className={
            nav
              ? "rounded-l-lg cursor-pointer w-[30%] h-[100%] fixed right-0 top-0 border- bg-[#2a9d8f] ease-in-out duration-500 "
              : "rounded-l-lg top-0 w-[25%] h-[100%] ease-in-out duration-500 fixed right-[-100%]"
          }>
          <div onClick={handleNav} className="p-3 cursor-pointer right-0 top-0">
          {nav ? (
            <RxCross2 size={35} color="#FCD34D" />
          ) : (
            <RxTokens size={35} color="#FCD34D" />// updated
          )}
          </div>
          <ul className="p-4 uppercase font-medium text-white">
            <li className="p-4 cursor-pointer hover:bg-amber-300 hover:text-black rounded-md duration-200">
              Home
            </li>
            <li className="p-4 cursor-pointer hover:bg-amber-300 hover:text-black rounded-md duration-200">
              Projects
            </li>
            <li className="p-4 cursor-pointer hover:bg-amber-300 hover:text-black rounded-md duration-200">
              Contact
            </li>
            <li className="p-4 mb-4 cursor-pointer hover:bg-amber-300 hover:text-black rounded-md duration-200">
              About
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
