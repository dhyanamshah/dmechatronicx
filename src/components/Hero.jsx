import logo from "/mechlogo2.png";
import { useGSAP } from "@gsap/react";
import TechStack from "./TechStack";
import { initHeroAnimations } from "../animations/animations.js";
// import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  useGSAP(() => {
    initHeroAnimations();
  }, []);

  return (
    <section
      id="home"
      className="hero-container h-screen w-full fixed top-0 left-0 z-0 herobox"
    >
      {/* Add particles background */}
      {/* <ParticlesBackground /> */}

      <div className="hero-space-top w-full h-16"></div>
      <div id="hero" className="w-full h-full mx-auto relative">
        <div className="h-full flex-center flex-col relative z-2">
          {/* Updated z-index to be higher than particles (z-1) */}
          <div className="hero-content flex flex-col items-center justify-center gap-4 w-full px-4">
            <img
              id="hero"
              src={logo}
              alt="Logo"
              className="w-[100vh] mx-auto max-sm:my-12 max-sm:w-full opacity-0 scale-0 lg:mb-0 -translate-x-96 mt-5 px-3 md:mb-10"
            />
            <div className="text-center mb-6">
              <h2
                className="font-exo text-white font-bold text-4xl lg:text-6xl text-center opacity-0 translate-y-[-9vh] translate-x-32 relative mb-2 tracking-wider"
                style={{
                  background: 'linear-gradient(45deg, #00ffff, #0080ff, #8000ff)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
                  letterSpacing: '0.1em'
                }}
              >
                D.MechatronicX
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto opacity-0 translate-y-[-9vh] translate-x-32 relative"></div>
            </div>
            <span>
              <h1
                id="hero-text"
                className="font-comfortaa ml-12 text-white font-bold lg:text-3xl text-center opacity-0 translate-y-[-9vh] translate-x-32 relative"
              >
                Team D.MechatronicX
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
