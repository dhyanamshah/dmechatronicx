import React, { useEffect, useRef, useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaHandPointUp,
  FaPlayCircle,
  FaPauseCircle,
} from "react-icons/fa";
import {
  initCardTiltEffect,
  initProjectCardScrollAnimations,
} from "../animations/animations";
import TechBadge from "./TechBadge";

// Create a global reference to track the currently playing video
const currentlyPlayingVideo = {
  videoRef: null,
  setIsPlaying: null,
};

const ProjectCards = ({ project, index, cardsRef }) => {
  const cardRef = useRef(null);
  const cardContentRef = useRef(null);
  const cardGlowRef = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const techStackRef = useRef(null);
  const linksRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Check if the project has video
  const hasVideo = !!project.video;

  useEffect(() => {
    // Set reference in the parent component's ref array
    if (cardRef.current) {
      cardsRef.current[index] = cardRef.current;
    }

    // Determine if this card has reversed layout (on odd indexes)

    // Use the card tilt animation with layout information
    const tiltCleanup = initCardTiltEffect(
      cardRef,
      cardContentRef,
      cardGlowRef
    );

    // Initialize scroll trigger animations
    const scrollCleanup = initProjectCardScrollAnimations(
      cardRef,
      titleRef,
      techStackRef,
      linksRef
    );

    // Return combined cleanup functions
    return () => {
      tiltCleanup();
      scrollCleanup();
    };
  }, [index, cardsRef]);

  const toggleVideoPlay = () => {
    if (!hasVideo) return; // Don't do anything if there's no video

    // If a different video is currently playing, stop it
    if (
      currentlyPlayingVideo.videoRef &&
      currentlyPlayingVideo.videoRef !== videoRef.current
    ) {
      currentlyPlayingVideo.videoRef.pause();
      if (currentlyPlayingVideo.setIsPlaying) {
        currentlyPlayingVideo.setIsPlaying(false);
      }
    }

    // Toggle current video state
    if (!isPlaying) {
      // Start playing this video
      setIsPlaying(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current
            .play()
            .catch((e) => console.error("Error playing video:", e));
          // Set this as the currently playing video
          currentlyPlayingVideo.videoRef = videoRef.current;
          currentlyPlayingVideo.setIsPlaying = setIsPlaying;
        }
      }, 50);
    } else {
      // Stop playing this video
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
        currentlyPlayingVideo.videoRef = null;
        currentlyPlayingVideo.setIsPlaying = null;
      }
    }
  };

  // Handle video end
  const handleVideoEnd = () => {
    setIsPlaying(false);
    currentlyPlayingVideo.videoRef = null;
    currentlyPlayingVideo.setIsPlaying = null;
  };

  return (
    <div
      ref={cardRef}
      className={`flex flex-col ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-6 mb-24 project-item`}
    >
      <div
        className="lg:w-1/2 w-full overflow-hidden rounded-lg perspective-1000 project-image-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="tilt-card w-full h-full preserve-3d relative group cursor-pointer"
          onClick={hasVideo ? toggleVideoPlay : undefined}
        >
          {hasVideo ? (
            isPlaying ? (
              <>
                <video
                  ref={videoRef}
                  src={project.video}
                  className="w-full h-full object-cover rounded-lg"
                  autoPlay
                  muted={false}
                  onEnded={handleVideoEnd}
                />
                <div className="absolute bottom-4 right-4 z-10">
                  <FaPauseCircle className="text-4xl text-white opacity-70 hover:opacity-100 transition-opacity" />
                </div>
              </>
            ) : (
              <>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover rounded-lg transition-opacity duration-500 group-hover:opacity-100 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-cyan-600 rounded-lg flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0 opacity-50">
                  <FaHandPointUp className="text-4xl rotate-[-30deg] text-white opacity-100 group-hover:scale-125 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaPlayCircle className="text-5xl text-white shadow-lg" />
                </div>
              </>
            )
          ) : (
            // Simple image display for projects without video
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover rounded-lg transition-opacity duration-500 opacity-80"
            />
          )}

          <div
            ref={cardGlowRef}
            className="glow-effect absolute inset-0 opacity-0 transition-opacity duration-300 z-0 rounded-lg"
          ></div>
        </div>
      </div>

      {/* Project Details */}
      <div
        ref={cardContentRef}
        className="lg:w-1/2 w-full flex flex-col justify-center relative z-10 transition-transform duration-300"
      >
        <h3
          ref={titleRef}
          className="text-2xl font-bold font-comfortaa mb-4 text-cyan-400"
        >
          {project.name}
        </h3>

        <div
          className={`transition-all duration-500 overflow-hidden ${
            isHovered ? "max-h-[300px] opacity-100 mb-6" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-gray-300 font-montserrat">{project.description}</p>
        </div>

        {/* Date */}
        <p className="text-gray-400 font-montserrat mb-2">
          <strong>Date:</strong> {project.date}
        </p>

        {/* Tech stack tags*/}
        <div ref={techStackRef} className="flex flex-wrap gap-3 mb-6">
          {project.techstack &&
            project.techstack.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
        </div>

        {/* Project links */}
        <div ref={linksRef} className="flex gap-4">
          {project.links &&
            project.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                {link.platform === "GitHub" ? (
                  <FaGithub />
                ) : (
                  <FaExternalLinkAlt />
                )}
                <span>{link.platform}</span>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
