import React from "react";
import "./App.css";
import Home from "./components/Home";
import backgroundImage from "./assets/images/cloudyBackground.png";

const App = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col justify-between"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Home></Home>
    </div>
  );
};

export default App;
