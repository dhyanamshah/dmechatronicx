import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { initContactAnimations } from "../animations/animations.js";
import BackgroundEffect from "./BackgroundEffect";

const Contact = () => {
  const formRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(() => {
    const cleanup = initContactAnimations(formRef, headerRef);
    return cleanup;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You could add form submission logic here (email service, etc.)
    alert("Thank you for your message! We'll get back to you soon.");
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="w-screen overflow-hidden h-full sm:py-32 py-20 sm:px-10 px-5 bg-zinc-950 relative z-10 content-section"
    >
      <BackgroundEffect
        variant="contact"
        opacity={0.3}
        circleColors={[
          "rgba(5, 105, 188, 0.15), rgba(5, 105, 188, 0.02)",
          "rgba(5, 165, 188, 0.2), rgba(5, 165, 188, 0.05)",
          "rgba(15, 58, 95, 0.15), rgba(15, 58, 95, 0.02)",
        ]}
      />

      <div className="max-w-4xl mx-auto">
        <h1 ref={headerRef} className="title">
          Get In Touch
        </h1>

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <div className="contact-info">
            <div className="mb-8 opacity-0 contact-item">
              <h3 className="text-xl font-montserrat font-semibold text-blue-400 mb-2">
                Let's Connect
              </h3>
              <p className="text-gray-400">
                Have a project in mind or just want to chat about tech? We'd
                love to hear from you!
              </p>
            </div>

            <div className="mb-8 opacity-0 contact-item">
              <h3 className="text-xl font-montserrat font-semibold text-blue-400 mb-2">
                Email Us
              </h3>
              <a
                href="mailto:team.dmechatronicx@example.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                ic.rexsymond.barba@cvsu.edu.ph
              </a>
            </div>

            <div className="mb-8 opacity-0 contact-item">
              <h3 className="text-xl font-montserrat font-semibold text-blue-400 mb-2">
                Visit us on LinkedIn
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/d-mechatronicx17/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
                {/* <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Facebook
                </a> */}
              </div>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form opacity-0 transform translate-y-12"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                placeholder="Your name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-500 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
