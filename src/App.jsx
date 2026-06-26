import { useEffect, useRef, useState } from "react";
import './App.css'
import background from "./assets/background.png";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Contact from './sections/Contact';
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experiences";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("");
  const isManualScrolling = useRef(false);
  const scrollTimer = useRef(null);

  const handleNavClick = (menu) => {
    setActiveSection(menu);
    isManualScrolling.current = true;
    clearTimeout(scrollTimer.current);
    scrollTimer.current = setTimeout(() => {
      isManualScrolling.current = false;
    }, 800);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScrolling.current) return;
        let best = null;
        let bestRatio = 0;
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
            best = entry;
            bestRatio = entry.intersectionRatio;
          }
        });
        if (best) {
          setActiveSection(best.target.id === "home" ? "" : best.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -20% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      clearTimeout(scrollTimer.current);
    };
  }, []);

  const sectionStyle = {
    position: "relative",
    overflow: "hidden",
    paddingTop: "60px",
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
      }}
    >
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />

      <section id="home" style={{ position: "relative", overflow: "hidden" }}>
        <Hero />
      </section>

      <section id="about" style={{ position: "relative", overflow: "hidden" }}>
        <About />
      </section>

      <section id="skills" style={sectionStyle}>
        <Skills />
      </section>

      <section id="projects" style={sectionStyle}>
        <Projects />
      </section>

      <section id="experiences" style={sectionStyle}>
        <Experience />
      </section>

      <section id="contact" style={{ position: "relative", paddingTop: "60px", paddingBottom: "40px" }}>
        <Contact />
      </section>

      <Footer />
      <br />
    </div>
  );
}

export default App;
