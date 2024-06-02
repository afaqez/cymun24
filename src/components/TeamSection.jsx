import React from "react";

const TeamSection = () => {
  return (
    <div className="relative bg-gray-900 text-white py-20 px-10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url('../assets/images/apoq.jpg')` }}
      ></div>
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-10">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="flex flex-col items-center">
            <img
              src="/path/to/member1.jpg"
              alt="Member 1"
              className="w-32 h-32 rounded-full mb-4"
            />
            <p>Member 1</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/path/to/member2.jpg"
              alt="Member 2"
              className="w-32 h-32 rounded-full mb-4"
            />
            <p>Member 2</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/path/to/member3.jpg"
              alt="Member 3"
              className="w-32 h-32 rounded-full mb-4"
            />
            <p>Member 3</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/path/to/member4.jpg"
              alt="Member 4"
              className="w-32 h-32 rounded-full mb-4"
            />
            <p>Member 4</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/path/to/president.jpg"
              alt="President"
              className="w-32 h-32 rounded-full mb-4"
            />
            <p>President</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
