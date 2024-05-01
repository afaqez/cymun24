import React from "react";
import backgroundImage from "../assets/images/united-nations-bg.png";
import Navbar from "./Navbar";
import { Timer } from "./Timer";

const Main = () => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar></Navbar>
      <div className="font-semibold flex flex-col items-center mt-10 md:mt-20 lg:mt-40">
        <h2 className="text-lg md:text-xl lg:text-2xl">CYMUN24</h2>
        <h1 className="mt-3 text-lg md:text-2xl lg:text-5xl font-bold text-[#010123] text-center">
          Capital University Islamabad's <br />
          First Official MUN is finally here!
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <Timer></Timer>
      </div>
      <div className="flex flex-col items-center">
        <button className="text-xl font-montserrat bg-[#010145] text-white px-5 py-2 rounded-full hover:bg-[#437fa8]">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Main;
