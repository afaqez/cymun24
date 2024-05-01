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
  }, [countdown]);

  return (
    <div className="flex gap-8 uppercase font-red-hat mt-32 laptop:mt-20 tablet:scale-75 mobile:scale-100 mobile:gap-4 mobile:mt-20">
      {countdown.length === 0 ? (
        <p className="font-red-hat text-4xl text-white duration-300	ease-in">
          That is all folks!
        </p>
      ) : (
        countdown.map((count, index) => {
          const timerID = ["days", "hours", "minutes", "seconds"];

          return (
            <div key={index}>
              {/* // flip-card */}
              <div className="text-soft-red inline-flex flex-col text-7.5xl w-40 h-40 items-center justify-center card-shadow relative leading-loose mobile:w-16 mobile:text-3xl mobile:h-16 mobile:leading-[4rem]">
                {/* top */}
                <div className="backdrop-blur-md h-1/2 w-full flex justify-center overflow-hidden rounded-t-lg">
                  <p className="">{count < 10 ? `0${count}` : count}</p>
                </div>

                <p className="font-semibold text-xl font-montserrat text-grayish text-center mt-9 tracking-widest border-teal-200 mobile:text-[0.5rem] mobile:mt-2">
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
