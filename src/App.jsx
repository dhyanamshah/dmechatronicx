import "./index.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/AboutUs";
import Members from "./components/Members";

function App() {
  return (
    <main className="body">
      <NavBar />
      <Hero />
      <About />
      <Members />
    </main>
  );
}

export default App;
