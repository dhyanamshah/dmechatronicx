import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MissionAndVision from "./MissionAndVision";

// Ensure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  useGSAP(() => {
    // Create a timeline for the about section animations
    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom-=100",
        end: "bottom top+=100",
        toggleActions: "play none none reverse", // play on enter, reverse on leave
        onEnter: () => console.log("About section entered"),
        onLeaveBack: () => console.log("About section left"),
      },
    });

    // Add animations to the timeline
    aboutTl.to("#aboutUs", { opacity: 1, duration: 1, x: 0 });
    aboutTl.fromTo(
      ".para",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2 },
      "-=0.5" // Start a bit before the previous animation finishes
    );

    // Clean up ScrollTrigger instances when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="about"
      className="w-screen overflow-hidden h-full sm:py-32 py-20 sm:px-10 px-5 bg-zinc-950 relative z-10 content-section"
    >
      <h1 id="aboutUs" className="title">
        About Us
      </h1>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-8">
        <div className="rounded-lg shadow-md p-6 md:row-span-2">
          <p className="font-prompt text-start text-lg sm:text-2xl text-gray-700">
            <span className="para">
              We&apos;re five driven college students,{" "}
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
