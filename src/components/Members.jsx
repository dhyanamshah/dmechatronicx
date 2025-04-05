import React from "react";
import { membersData } from "../constant/index.js";

const allMembers = Object.values(membersData).flat();

const Members = () => {
  return (
    <div className="mt-">
      <div className="grid grid-cols-1 lg:grid-cols-5 memberbox gap-1 lg:gap-1 lg:h-screen h-auto pb-4 overflow-y-auto transition-all duration-300 no-scrollbar">
        {allMembers.map((member) => (
          <div
            key={member.id}
            className="relative group bg-blue-400 p-1 rounded-b-md border-black cursor-pointer transition-transform duration-300 lg:hover:-translate-y-20 filter grayscale hover:grayscale-0"
          >
            <h3 className="absolute top-2 left-2 font-bold font-montserrat text-xl z-10 lg:group-hover:translate-y-[9vh] duration-300 sm:group-hover:translate-y-1">
              {member.role}
            </h3>
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover rounded-md  transition-all duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-black opacity-0 group-hover:opacity-100  duration-295 z-0 lg:group-hover:translate-y-20">
              <h3 className="font-bold font-montserrat text-xl text-white">
                {member.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
