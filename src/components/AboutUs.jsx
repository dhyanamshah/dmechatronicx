import { useGSAP } from "@gsap/react";
import MissionAndVision from "./MissionAndVision";
import { initAboutUsAnimations } from "../animations/animations.js";
import BackgroundEffect from "./BackgroundEffect";
import AboutUsCards from "./AboutUsCards.jsx";
import "../styles/aboutUsCards.css";

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
      <BackgroundEffect
        variant="about"
        opacity={0.4}
        circleColors={[
          "rgba(5, 105, 188, 0.2), rgba(5, 105, 188, 0.05)",
          "rgba(15, 38, 95, 0.3), rgba(15, 38, 95, 0.05)",
          "rgba(0, 40, 70, 0.3), rgba(0, 40, 70, 0.05)",
        ]}
      />

      <h1 id="header" className="title">
        About Us
      </h1>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-8">
        <AboutUsCards />
        <div className="rounded-lg shadow-md p-6 md:row-span-2">
          <p className="font-prompt text-start text-lg sm:text-2xl text-gray-700">
            <span className="para">
              At D.mechatronicX, we are a team of passionate and ambitious innovators from across India, united by a shared love for robotics and technology.{" "}
            </span>
            <span className="para">
              Our members bring diverse skills and perspectives, but we are bound by one mission: to push the boundaries of what's possible in competitive robotics.{" "}
            </span>
            <span className="para">
              Over the years, we've taken our ideas from sketches and prototypes to fully functional robots that have earned us recognition and victories in national and international competitions.{" "}
            </span>
            <span className="para">
              Every challenge we face is an opportunity to learn, collaborate, and grow stronger as a team.{" "}
            </span>
            <span className="para">
              We believe in blending creativity, engineering precision, and teamwork to solve real-world problems and inspire the next generation of roboticists.{" "}
            </span>
            <span className="para">
              For us, robotics is more than competition—it's a way to make an impact, showcase the power of innovation, and prove that with determination,{" "}
              <span className="font-bold">
                anything is achievable.
              </span>
            </span>
          </p>
          <MissionAndVision />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
