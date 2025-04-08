import { useGSAP } from "@gsap/react";
import MissionAndVision from "./MissionAndVision";
import { initAboutUsAnimations } from "../animations/animations.js";

const AboutUs = () => {
  useGSAP(() => {
    // Initialize animations and store cleanup function
    const cleanup = initAboutUsAnimations();

    // Return cleanup function
    return cleanup;
  }, []);

  return (
    <section
      id="about"
      className="w-screen overflow-hidden h-full sm:py-32 py-20 sm:px-10 px-5 bg-zinc-950 relative z-10 content-section"
    >
      <h1 id="header" className="title">
        About Us
      </h1>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-8">
        <div className="rounded-lg shadow-md p-6 md:row-span-2">
          <p className="font-prompt text-start text-lg sm:text-2xl text-gray-700">
            <span className="para">
              We&apos;re college students from CvSU Imus,{" "}
            </span>
            <span className="para">
              each with a unique spark, but united by one goal: to make an
              impact.{" "}
            </span>
            <span className="para">
              We&apos;re here to push the limits, break the mold, and turn ideas
              into action. With creativity, determination, and a whole lot of
              passion,{" "}
            </span>
            <span className="para">
              we&apos;re ready to take on any challenge and leave our mark.
              Welcome to our journey—let&apos;s build something unforgettable.
            </span>
          </p>
        </div>

        <MissionAndVision />
      </div>
    </section>
  );
};

export default AboutUs;
