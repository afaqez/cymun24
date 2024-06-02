import React from "react";
import { ReactComponent as CommitteeSessionIcon } from "../assets/icons/committeeSession.svg";
import { ReactComponent as UNcommittees } from "../assets/icons/unCommittees.svg";
import { ReactComponent as Delegates } from "../assets/icons/delegates.svg";
import { ReactComponent as SocialEvents } from "../assets/icons/socialEvents.svg";

const Stats = () => {
  return (
    <div className="bg-gray-100 rounded-lg p-2 shadow-lg">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 flex flex-col justify-between">
          <div className="flex justify-center">
            <CommitteeSessionIcon />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              Committee Sessions
            </h3>
            <p className="text-lg text-gray-600">10</p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 flex flex-col justify-between">
          <div className="flex justify-center">
            <UNcommittees />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              UN Committees
            </h3>
            <p className="text-lg text-gray-600">8</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 flex flex-col justify-between ">
          <div className="flex justify-center">
            <Delegates />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              Delegates and Team Members
            </h3>
            <p className="text-lg text-gray-600">300+</p>
          </div>
        </div>
        <div className=" bg-white rounded-lg p-4 flex flex-col justify-between ">
          <div className="flex justify-center">
            <SocialEvents />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              Social Events
            </h3>
            <p className="text-lg text-gray-600">3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
