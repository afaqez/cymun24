import React from "react";
import logo from "../assets/images/cymun-logo.png";
import MenuIcon from "../assets/icons/MenuIcon";

const Navbar = () => {
  const navLinks = document.querySelector(".nav-link");
  function menuClick() {
    navLinks.classList.toggle("top-[9%]");
  }
  return (
    <nav className="flex justify-between items-center w-[92%] mx-auto">
      <div>
        <img src={logo} alt="Logo" className="w-36" />
      </div>

      <div className="nav-link text-xl md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[100%] md:w-auto w-full flex items-center px-5">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          <li>
            <a className="font-montserrat hover:text-gray" href="#">
              About
            </a>
          </li>
          <li>
            <a className="font-montserrat hover:text-gray" href="#">
              Committee
            </a>
          </li>
          <li>
            <a className="font-montserrat hover:text-gray" href="#">
              Council
            </a>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-xl font-montserrat bg-[#010145] text-white px-5 py-2 rounded-full hover:bg-[#437fa8]">
          Register Now
        </button>
        <div className="md:hidden cursor-pointer" onClick={menuClick}>
          <MenuIcon></MenuIcon>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
