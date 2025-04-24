import React, { useEffect, useRef } from "react";
import particlesConfig from "../assets/particlesjs-config.json";
import { initResponsiveParticles } from "../animations/animations";

const ParticlesBackground = () => {
  const particlesContainerRef = useRef(null);

  useEffect(() => {
    // Load particles.js script dynamically
    const loadParticlesJS = async () => {
      try {
        if (!window.particlesJS) {
          const script = document.createElement("script");
          script.src =
            "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
          script.async = true;

          await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
          });
        }

        // Initialize responsive particles after script is loaded
        return initResponsiveParticles(particlesContainerRef, particlesConfig);
      } catch (error) {
        console.error("Failed to load particles.js:", error);
        return () => {}; // Return empty cleanup function in case of error
      }
    };

    // Execute and store cleanup function
    const cleanupPromise = loadParticlesJS();

    // Cleanup both the script and the particles
    return () => {
      cleanupPromise.then((cleanup) => cleanup && cleanup());
    };
  }, []);

  return (
    <div
      id="particles-js"
      ref={particlesContainerRef}
      className="absolute inset-0 z-0"
    ></div>
  );
};

export default ParticlesBackground;
