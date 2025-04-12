import React, { useEffect, useRef } from "react";
import { FaGithub, FaFacebook, FaLinkedin, FaTimes } from "react-icons/fa";
import TechBadge from "./TechBadge";
import { initMemberModalAnimations } from "../animations/animations.js";

const MemberModals = ({ member, onClose }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Get animation handlers from the animation.js
    const { handleClose, setupEscKeyListener } = initMemberModalAnimations(
      modalRef,
      contentRef,
      onClose
    );

    // Store the close handler for use in the component
    modalCloseHandler.current = handleClose;

    // Setup ESC key listener and get its cleanup function
    const cleanupListener = setupEscKeyListener();

    // Return combined cleanup function
    return cleanupListener;
  }, [onClose]);

  // Ref to store the close handler from the animation module
  const modalCloseHandler = useRef(null);

  // Handler that calls the animation close function
  const handleClose = (e) => {
    if (modalCloseHandler.current) {
      modalCloseHandler.current(e);
    }
  };

  // Map platform to icon
  const getPlatformIcon = (platform) => {
    switch (platform?.toLowerCase()) {
      case "github":
        return <FaGithub />;
      case "facebook":
        return <FaFacebook />;
      case "linkedin":
        return <FaLinkedin />;
      default:
        return <FaGithub />;
    }
  };

  return (
    <div
      ref={modalRef}
      className="absolute inset-0 z-20 bg-black/0 overflow-hidden"
    >
      <div
        ref={contentRef}
        className="absolute inset-0 bg-black/95 backdrop-blur-sm flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white/70 hover:text-white z-30 p-2"
          onClick={handleClose}
          aria-label="Close details"
        >
          <FaTimes className="text-xl" />
        </button>

        <div className="flex flex-col h-full">
          {/* Top section with name and role */}
          <div className="p-6 pb-2">
            <h2 className="font-bold font-montserrat text-2xl text-blue-300 mb-1">
              {member.name}
            </h2>
            <h3 className="font-montserrat text-white/80 text-lg">
              {member.role}
            </h3>
          </div>

          {/* Main content area with scrolling */}
          <div className="flex-grow overflow-y-auto p-6 pt-2">
            {/* Description */}
            <p className="font-prompt text-white/70 mb-6">
              {member.description ||
                "A valued member of our team bringing unique skills and perspective to our projects."}
            </p>

            {/* Skills section with TechBadge component */}
            {member.skills?.length > 0 && (
              <div className="mb-6">
                <h4 className="font-montserrat font-semibold text-white/90 mb-3">
                  Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, index) => (
                    <TechBadge key={index} tech={skill} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer with social links */}
          {member.links?.length > 0 && (
            <div className="p-6 pt-0 border-t border-white/10">
              <div className="flex gap-3">
                {member.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-900/20 hover:bg-blue-900/40 text-blue-300 rounded-full transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {getPlatformIcon(link.platform)}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberModals;
