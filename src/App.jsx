import "./index.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/AboutUs";

function App() {
  return (
    <main className="body">
      <NavBar />
      <Hero />
      <About />
    </main>
  );
}

export default App;
