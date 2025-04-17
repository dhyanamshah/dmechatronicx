import React, { useState } from "react";
import { membersData } from "../constant/index.js";
import MemberModals from "./MemberModals";
import BackgroundEffect from "./BackgroundEffect";

const allMembers = Object.values(membersData).flat();

const Members = () => {
  // Add state for selected member
  const [selectedMember, setSelectedMember] = useState(null);

  // Handle card click to show member details
  const handleCardClick = (member) => {
    setSelectedMember(member);
  };

  // Handle closing the detail modal
  const handleCloseDetails = () => {
    setSelectedMember(null);
  };

  return (
    <section
      id="members"
      className="w-screen overflow-hidden h-full sm:py-32 py-20 sm:px-10 px-5 bg-black relative z-10"
    >
      <BackgroundEffect
        variant="members"
        opacity={0.3}
        circleColors={[
          "rgba(5, 135, 158, 0.2), rgba(5, 135, 158, 0.05)",
          "rgba(25, 68, 105, 0.25), rgba(25, 68, 105, 0.05)",
          "rgba(10, 30, 60, 0.3), rgba(10, 30, 60, 0.05)",
        ]}
      />

      <h1 id="header" className="title">
        Members
      </h1>
      <div className="bg-black/80 flex flex-col">
        <div className="p-5 h-full">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 memberbox overflow-y-auto transition-all duration-300 no-scrollbar gap-4">
            {allMembers.map((member) => {
              // Check if this specific member has an active modal
              const isActive =
                selectedMember && selectedMember.id === member.id;
              const anyModalActive = selectedMember !== null;

              return (
                <div
                  key={member.id}
                  className={`relative group bg-blue-400 border-4 border-black rounded-b-md cursor-pointer transition-transform duration-300 
                    ${isActive ? "" : "lg:hover:-translate-y-20"}
                    ${
                      anyModalActive
                        ? isActive
                          ? "grayscale-0"
                          : "grayscale hover:grayscale-0"
                        : "filter grayscale hover:grayscale-0"
                    }
                    min-h-[15vh] lg:min-h-[85vh] md:min-h-[70vh] sm:min-h-[30vh]`}
                  onClick={() => handleCardClick(member)}
                >
                  <h3
                    className={`absolute top-2 left-2 font-bold font-montserrat text-xl z-10 
                    ${
                      !isActive && "lg:group-hover:translate-y-[9vh]"
                    } duration-300 sm:group-hover:translate-y-1`}
                  >
                    {member.role}
                  </h3>
                  <img
                    src={member.image}
                    alt={member.name}
                    draggable="false"
                    className="w-full h-full object-cover rounded-md transition-all duration-300"
                  />
                  <div
                    className={`absolute bottom-0 left-0 w-full p-6 bg-black 
                    ${
                      isActive
                        ? "opacity-0"
                        : "opacity-0 group-hover:opacity-100 duration-295 z-0 lg:group-hover:translate-y-20"
                    }`}
                  >
                    <h3 className="font-bold font-montserrat text-xl text-white">
                      {member.name}
                    </h3>
                  </div>

                  {/* Member details modal when clicked */}
                  {isActive && (
                    <MemberModals
                      member={selectedMember}
                      onClose={handleCloseDetails}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
