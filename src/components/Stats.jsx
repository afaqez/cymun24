import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactComponent as CommitteeSessionIcon } from "../assets/icons/committeeSession.svg";
import { ReactComponent as UNcommittees } from "../assets/icons/unCommittees.svg";
import { ReactComponent as Delegates } from "../assets/icons/delegates.svg";
import { ReactComponent as SocialEvents } from "../assets/icons/socialEvents.svg";

const Stats = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" },
  };

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const controls = useAnimation();

  if (inView) {
    controls.start("visible");
  }

  return (
    <motion.div
      className="bg-gray-100 rounded-lg p-6 shadow-lg container mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        ref={ref}
      >
        <motion.div
          className="bg-white bg-opacity-25 rounded-lg p-6 flex flex-col justify-between items-center transform transition-all duration-300"
          variants={cardVariants}
          initial="hidden"
          animate={controls}
          whileHover="hover"
        >
          <div className="flex justify-center mb-4">
            <CommitteeSessionIcon className="h-24 w-24" />
          </div>
          <div className="text-center">
            <h3 className="text-sm font-semibold text-white mb-2">
              Committee Sessions
            </h3>
            <p className="text-2xl text-white">10</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white bg-opacity-25 rounded-lg p-6 flex flex-col justify-between items-center transform transition-all duration-300"
          variants={cardVariants}
          initial="hidden"
          animate={controls}
          whileHover="hover"
        >
          <div className="flex justify-center mb-4">
            <UNcommittees className="h-24 w-24" />
          </div>
          <div className="text-center">
            <h3 className="text-sm font-semibold text-white mb-2">
              UN Committees
            </h3>
            <p className="text-2xl text-white">8</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white bg-opacity-25 rounded-lg p-6 flex flex-col justify-between items-center transform transition-all duration-300"
          variants={cardVariants}
          initial="hidden"
          animate={controls}
          whileHover="hover"
        >
          <div className="flex justify-center mb-4">
            <Delegates className="h-24 w-24" />
          </div>
          <div className="text-center">
            <h3 className="text-sm font-semibold text-white mb-2">
              Delegates and Team Members
            </h3>
            <p className="text-2xl text-white">300+</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white bg-opacity-25 rounded-lg p-6 flex flex-col justify-between items-center transform transition-all duration-300"
          variants={cardVariants}
          initial="hidden"
          animate={controls}
          whileHover="hover"
        >
          <div className="flex justify-center mb-4">
            <SocialEvents className="h-24 w-24" />
          </div>
          <div className="text-center">
            <h3 className="text-sm font-semibold text-white mb-2">
              Social Events
            </h3>
            <p className="text-2xl text-white">3</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Stats;
