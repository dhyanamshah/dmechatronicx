import React from "react";
import { membersData } from "../constant/index.js";

const allMembers = Object.values(membersData).flat();

const Members = () => {
  return (
    <section
      id="members"
      className="w-screen overflow-hidden h-full sm:py-32 py-20 sm:px-10 px-5 bg-zinc-950 relative z-10"
    >
      <h1 id="header" className="title">
        Members
      </h1>
      <div className="bg-black flex flex-col">
        <div className="p-5 h-full">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 memberbox overflow-y-auto transition-all duration-300 no-scrollbar gap-4">
            {allMembers.map((member) => (
              <div
                key={member.id}
                className="relative group bg-blue-400 border-4 border-black rounded-b-md cursor-pointer transition-transform duration-300 lg:hover:-translate-y-20 filter grayscale hover:grayscale-0 min-h-[15vh] lg:min-h-[85vh] md:min-h-[70vh] sm:min-h-[30vh]"
              >
                <h3 className="absolute top-2 left-2 font-bold font-montserrat text-xl z-10 lg:group-hover:translate-y-[9vh] duration-300 sm:group-hover:translate-y-1">
                  {member.role}
                </h3>
                <img
                  src={member.image}
                  alt={member.name}
                  draggable="false"
                  className="w-full h-full object-cover rounded-md transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-black opacity-0 group-hover:opacity-100 duration-295 z-0 lg:group-hover:translate-y-20">
                  <h3 className="font-bold font-montserrat text-xl text-white">
                    {member.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
