import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center w-[92%] mx-auto py-4">
      <div className="flex items-center justify-center w-full">
        <div className="glow mb-4 animate-fade-in">
          <h2 className="text-[#ffffff] font-spartan text-5xl md:text-6xl lg:text-8xl">
            CY'MUN'<span className="text-[#fe0a0a]">24</span>
          </h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
