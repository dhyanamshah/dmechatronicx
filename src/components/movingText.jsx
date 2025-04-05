import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MovingText = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const textElements = containerRef.current.querySelectorAll(".text-block");

    // Reset any existing animations
    gsap.set(textElements, {
      opacity: 0,
      scale: 0.5,
      rotation: 0,
      filter: "blur(0px)",
    });

    // Create the staggered animation
    const timeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
    });

    timeline
      .to(textElements, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      })
      .to(
        textElements,
        {
          scale: 1.1,
          rotation: 1,
          filter: "blur(2px)",
          duration: 1.5,
          stagger: 0.2,
          ease: "power1.inOut",
        },
        "-=0.5"
      )
      .to(
        textElements,
        {
          opacity: 0,
          scale: 1.2,
          rotation: 2,
          filter: "blur(5px)",
          duration: 1,
          stagger: 0.2,
          ease: "power2.in",
        },
        "-=0.8"
      );

    return () => {
      timeline.kill();
    };
  }, []);

  const textBlocks = [
    "In the design of the user experience, one must seek a balance—a harmony between form and function.",
    "Every element should be purposeful, not extraneous, and every action the user takes must feel deliberate and intuitive.",
    "The colors should evoke a sense of calm, yet clarity—soft, yet distinct, guiding the eye without overwhelming it.",
    "They should blend seamlessly, as though they were crafted with the intent to support one another, not fight for attention.",
    "The layout must be structured, a well-ordered path that leads the user from one step to the next with ease.",
    "Elements must not overlap, nor should they be so distant as to create disarray.",
    "Everything in its proper place, each element contributing to the whole.",
    "The experience must be centered around the user—their journey, their needs.",
    "Let this vision guide you as you craft your interface.",
  ];

  return (
    <div
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      ref={containerRef}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {textBlocks.map((text, index) => (
          <div
            key={index}
            className="text-block text-white text-xl md:text-3xl lg:text-4xl font-exo font-bold my-6 mx-10 text-center opacity-0"
            style={{
              position: "absolute",
              top: `${Math.random() * 70 + 15}%`,
              left: `${Math.random() * 70 + 15}%`,
              transform: "translate(-50%, -50%)",
              willChange: "transform, opacity, filter",
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingText;
