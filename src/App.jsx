import "./index.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/AboutUs";
import Members from "./components/Members";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="body relative">
      <NavBar />
      <div className="content-wrapper">
        <Hero />
        <div className="content-sections">
          <div className="h-screen"></div>{" "}
          {/* Spacer to push content below hero */}
          <About />
          <Members />
          <Projects />
          <Contact />
        </div>
      </div>
    </main>
  );
}

export default App;
