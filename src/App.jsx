import "./index.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/AboutUs";
import Members from "./components/Members";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
          <Contact />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
