import React from "react";
import { useGSAP } from "@gsap/react";
import { initMissionVisionAnimations } from "../animations/animations.js";

const MissionAndVision = () => {
  useGSAP(() => {
    // Initialize animations and store cleanup function
    const cleanup = initMissionVisionAnimations();

    // Return cleanup function
    return cleanup;
  }, []);

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-6 pt-12 items-start">
      {/* Mission section */}
      <div id="mission" className="p-6">
        {/* dot */}
        <div className="hidden md:block w-5 h-5 rounded-full bg-blue-600 absolute z-10 top-[0vh] left-[18vh] lg:top-[1vh]" />
        <div className="hidden md:block w-32 h-1 rounded-full bg-blue-600 absolute z-0 bottom-[25vh] md:top-[2vh]" />

        <h3 className="text-2xl font-exo font-bold mb-4 text-blue-600 md:text-white">
          Mission
        </h3>
        <ul className="text-lg text-gray-700 para space-y-3">
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
            <span>To design, build, and compete with cutting-edge robots that showcase our creativity and engineering skills.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
            <span>To foster collaboration and knowledge-sharing among passionate students from diverse backgrounds.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
            <span>To push boundaries in competitive robotics while inspiring the next generation of problem-solvers and innovators.</span>
          </li>
        </ul>
      </div>

      {/* Vision section */}
      <div id="vision" className="p-6">
        <div className="hidden md:block w-5 h-5 rounded-full bg-blue-600 absolute z-10 top-[0vh] left-[18vh] lg:top-[1vh]" />
        <div className="hidden md:block w-32 h-1 rounded-full bg-blue-600 absolute z-0 bottom-[21vh] md:top-[2vh]" />
        <h3 className="text-2xl font-exo font-bold mb-4 text-blue-600 md:text-white">
          Vision
        </h3>
        <p className="text-lg text-gray-700 para">
          To become a pioneering force in robotics, empowering young innovators across India to create technologies that inspire, compete, and make a lasting global impact.
        </p>
      </div>
    </div>
  );
};

export default MissionAndVision;
