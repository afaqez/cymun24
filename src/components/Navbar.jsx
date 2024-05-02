import React, { useState } from "react";
import logo from "../assets/images/cymun-logo.png";
import MenuIcon from "../assets/icons/MenuIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center w-[92%] mx-auto py-4">
      <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
        <img src={logo} alt="Logo" className="w-36 mx-auto md:mx-0" />
      </div>

      <div
        className={`nav-link text-xl md:static fixed top-0 md:min-h-fit min-h-screen ${
          isOpen ? "right-0" : "-right-full"
        } md:w-auto w-8/12 md:bg-transparent bg-white md:bg-opacity-0 bg-opacity-50 flex items-center px-5 md:px-0 py-10 md:py-0 transition-all duration-500 ease-in-out z-20`}
      >
        <ul className="hidden md:flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          <li>
            <a className="font-poppins hover:text-gray" href="#">
              About
            </a>
          </li>
          <li>
            <a className="font-poppins hover:text-gray" href="#">
              Committee
            </a>
          </li>
          <li>
            <a className="font-poppins hover:text-gray" href="#">
              Council
            </a>
          </li>
        </ul>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <button className="text-xl font-poppins bg-[#010145] text-white px-6 py-2 rounded-full hover:bg-[#437fa8] transition-colors duration-300 transform hover:scale-105">
          Register Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
