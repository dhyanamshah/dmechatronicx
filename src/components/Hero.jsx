import logo from "../assets/logo1.svg";
import { useGSAP } from "@gsap/react";
import TechStack from "./TechStack";
import { initHeroAnimations } from "../animations/animations.js";

const Hero = () => {
  useGSAP(() => {
    initHeroAnimations();
  }, []);

  return (
    <section
      id="home"
      className="hero-container h-screen w-full fixed top-0 left-0 z-0 herobox"
    >
      <div className="hero-space-top w-full h-16"></div>
      <div id="hero" className="w-full h-full mx-auto relative">
        <div className="h-full flex-center flex-col relative z-0">
          <div className="hero-content flex flex-col items-center justify-center gap-4 w-full px-4">
            <img
              id="hero"
              src={logo}
              alt="Logo"
              className="w-[100vh] mx-auto max-sm:my-12 max-sm:w-full opacity-0 scale-0 lg:mb-0 -translate-x-96 mt-5 px-3 md:mb-10"
            />
            <span>
              <h1
                id="hero-text"
                className="font-comfortaa ml-12 text-white font-bold lg:text-3xl text-center opacity-0 translate-y-[-9vh] translate-x-32 relative"
              >
                Team Portfolio
              </h1>
            </span>
          </div>
          <div className="tech-stack">
            <TechStack />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
