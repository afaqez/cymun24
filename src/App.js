import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import backgroundImage from "./assets/images/cloudyBackground.png";

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-container">
      <div
        className={`bg-layer ${scrollY > 300 ? "red" : "black"}`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="relative z-10">
        <Home />
      </div>
    </div>
  );
};

export default App;
