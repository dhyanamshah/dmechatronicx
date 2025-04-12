import BackgroundEffect from "./BackgroundEffect";

const Contact = () => {
  return (
    <section
      id="contacts"
      className="w-screen overflow-hidden h-full sm:py-32 py-20 sm:px-10 px-5 bg-zinc-950 relative z-10 content-section"
    >
      <BackgroundEffect
        variant="contact"
        opacity={0.3}
        circleColors={[
          "rgba(5, 135, 158, 0.2), rgba(5, 135, 158, 0.05)",
          "rgba(25, 68, 105, 0.25), rgba(25, 68, 105, 0.05)",
          "rgba(10, 30, 60, 0.3), rgba(10, 30, 60, 0.05)",
        ]}
      />
      <h1 id="header" className="title">
        Contact Us
      </h1>
      <div>
        
      </div>
    </section>
  );
};

export default Contact;
