import logo from "../assets/logo1.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MovingText from "./movingText";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, duration: 0.5, scale: 1, x: 0 });
    gsap.to("#hero-text", { opacity: 1, duration: 0.5, delay: 0.3, y: -25 });
    gsap.to("#welcome-text", { opacity: 1, duration: 0.5, delay: 0.5, x: 0 });
    gsap.to("#welcome-description", {
      opacity: 1,
      duration: 0.5,
      delay: 0.7,
      x: 0,
    });
  }, []);
  return (
    <section id="hero" className="w-full mx-auto relative">
      {/* <div className="absolute rotate-[-15deg] inset-0 opacity-70 z-0">
        <MovingText className="" />
      </div> */}

      <div className="h-5/6 flex-center flex-col herobox relative z-10">
        <div className="flex flex-col items-center justify-center gap-4 w-full px-4">
          <img
            id="hero"
            src={logo}
            alt="Logo"
            className="w-1/3 mx-auto max-sm:my-12 max-sm:w-full opacity-0 scale-0 -translate-x-96 mt-5 px-3"
          />
          <span>
            <h1
              id="hero-text"
              className="font-comfortaa ml-12 font-bold text-2xl text-center opacity-0 translate-y-10 "
            >
              Team Portfolio
            </h1>
          </span>
          <div className="flex flex-col items-start justify-start w-full px-8 mt-8">
            <h2
              id="welcome-text"
              className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-left text-white opacity-0 -translate-x-10"
            >
              Welcome to Our Team Portfolio
            </h2>
            <p
              id="welcome-description"
              className="text-lg font-exo text-left text-gray-300 opacity-0 -translate-x-10 mt-4"
            >
              Discover our projects, skills, and achievements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
