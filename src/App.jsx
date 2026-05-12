import { ThemeProvider } from "./context/ThemeContext";
import { useScrollReveal } from "./hooks/useScrollReveal";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Story from "./components/Story/Story";
import Expertise from "./components/Expertise/Expertise";
import Results from "./components/Results/Results";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./styles/global.css";

function Portfolio() {
  useScrollReveal();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Story />
        <Expertise />
        <Results />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
