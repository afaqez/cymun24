import { useEffect, useState } from "react";
import { timeCalculation } from "../utils/timeCalculation";

export const Timer = () => {
  const [countdown, setCountdown] = useState(() => timeCalculation() || []);

  useEffect(() => {
    const updateCountdown = setInterval(() => {
      const newCountdown = timeCalculation() || [];
      setCountdown(newCountdown);
    }, 1000);

    return () => {
      clearInterval(updateCountdown);
    };
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 uppercase font-montserrat mt-8 md:mt-12 lg:mt-20">
      {countdown.length === 0 ? (
        <p className="font-montserrat text-2xl md:text-3xl lg:text-4xl text-white duration-300 ease-in animate-fade-in">
          That is all folks!
        </p>
      ) : (
        countdown.map((count, index) => {
          const timerID = ["days", "hours", "minutes", "seconds"];

          return (
            <div key={index} className="animate-slide-up">
              <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-md inline-flex flex-col text-4xl md:text-5xl lg:text-7xl w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 items-center justify-center relative">
                <div className="h-1/2 w-full flex justify-center overflow-hidden">
                  <p className="animate-count font-bold text-white">
                    {count < 10 ? `0${count}` : count}
                  </p>
                </div>

                <p className="font-medium text-sm md:text-base lg:text-lg text-white text-center mt-4 md:mt-6 lg:mt-8 tracking-wider">
                  {timerID[index]}
                </p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
