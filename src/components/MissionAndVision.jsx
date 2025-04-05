import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MissionAndVision = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#mission",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.inOut", delay: 0.3 }
    );

    gsap.fromTo(
      "#vision",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.inOut", delay: 0.6 }
    );
  }, []);

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
      {/* Mission section */}
      <div id="mission" className="rounded-lg p-6">
        {/* dot */}
        <div className="w-5 h-5 rounded-full bg-blue-600 absolute z-10 top-[1vh] left-[18vh]" />
        <div className="w-32 h-1 rounded-full bg-blue-600 absolute z-0 bottom-[18vh] md:top-[2vh]" />

        <h3 className="text-2xl font-exo font-bold mb-4 text-white">Mission</h3>
        <p className="text-lg text-gray-700 para">
          We aim to be a recognized team of developers known for delivering
          impactful digital solutions and inspiring others through our work.
        </p>
      </div>

      {/* Vision section */}
      <div id="vision" className="rounded-lg p-6">
        <div className="w-5 h-5 rounded-full bg-blue-600 absolute z-10 top-[1vh] left-[18vh]" />
        <div className="w-32 h-1 rounded-full bg-blue-600 absolute z-0 bottom-[18vh] md:top-[2vh]" />
        <h3 className="text-2xl font-exo font-bold mb-4 text-white">Vision</h3>
        <p className="text-lg text-gray-700 para">
          Our mission is to build innovative, efficient, and user-friendly
          software that showcases our skills, creativity, and passion for
          technology.
        </p>
      </div>
    </div>
  );
};

export default MissionAndVision;
