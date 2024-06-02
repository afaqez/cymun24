// src/components/PresidentsMessage.jsx
import React from "react";
import presidentImage from "../assets/images/president.svg";

const PresidentsMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8 shadow-lg max-w-3xl mx-auto text-center relative">
        <img
          src={presidentImage}
          alt="President"
          className="w-38 h-38 md:w-48 md:h-48 object-cover mx-auto mb-4"
          style={{ borderRadius: "50%" }}
        />
        <h2 className="font-spartan text-3xl font-extrabold text-gray-200 sm:text-4xl">
          President's Message
        </h2>
        <p className="mt-4 text-lg text-white text-left text-justify font-spartan">
          Greetings, <br />
          <br />
          I, Abdul Moiz Kamran, President of CY'MUN'24, extend a warm invitation
          to you for our inaugural event. This conference promises to be a
          landmark experience, etching its name in the annals of MUN history.{" "}
          <br /> We are confident that CY'MUN will be the most eagerly awaited
          MUN conference in the country. Having you join us would be a
          tremendous honor. We eagerly anticipate your participation. <br />
        </p>
        <div className="flex flex-col justify-end mt-4">
          <p className="text-xl text-white font-bold font-spartan mr-2">
            Abdul Moiz Kamran
          </p>
          <p className="text-lg text-white font-spartan">President CY'MUN'24</p>
        </div>
      </div>
    </div>
  );
};

export default PresidentsMessage;
