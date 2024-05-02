import React from "react";
import backgroundImage from "../assets/images/united-nations-bg.png";
import Navbar from "./Navbar";
import { Timer } from "./Timer";

const Main = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col justify-between"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />

      <div className="flex-grow flex flex-col justify-center items-center text-center px-4 py-10 md:py-20">
        <div className="glow mb-4 animate-fade-in">
          <h2 className="text-[#ffffff] font-sedgwick text-5xl md:text-xl lg:text-2xl">
            CY'MUN24
          </h2>
        </div>
        <div className="mb-8 animate-slide-up">
          <h1 className="font-trocchi text-2xl md:text-3xl lg:text-5xl font-bold text-[#010123]">
            Capital University Islamabad's First Official MUN is finally here!
          </h1>
        </div>
        <div className="mb-8">
          <Timer />
        </div>
        <div>
          <button className="text-xl font-montserrat bg-[#010145] text-white px-6 py-3 rounded-full hover:bg-[#437fa8] transition-colors duration-300 animate-bounce">
            Register Now
          </button>
        </div>
      </div>

      <div className="font-bold text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} CYMUN. All rights reserved.
      </div>
    </div>
  );
};

export default Main;
