import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <main style={{ width: "100%", overflowX: "hidden" }}>
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />

      <Contact />
      <ScrollToTop />
    </main>
  );
}

export default App;
