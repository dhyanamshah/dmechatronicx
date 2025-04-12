import React, { useEffect, useRef } from "react";
import particlesConfig from "../assets/particlesjs-config.json";

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

        // Initialize particles
        window.particlesJS("particles-js", particlesConfig);
      } catch (error) {
        console.error("Failed to load particles.js:", error);
      }
    };

    loadParticlesJS();

    // Cleanup
    return () => {
      if (window.pJSDom && window.pJSDom.length) {
        window.pJSDom.forEach((dom) => dom.pJS.fn.vendors.destroypJS());
        window.pJSDom = [];
      }
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
