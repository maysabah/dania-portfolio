import { useCallback, useState } from "react";
import daniaPhoto from "./assets/dania.jpeg";

import { useTheme } from "./hooks/useTheme";
import { useReveal } from "./hooks/useReveal";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { useActiveSection } from "./hooks/useActiveSection";
import { useMagnetic, useSpotlight } from "./hooks/useInteractions";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Interests from "./components/Interests";
import Experience from "./components/Experience";
import Career from "./components/Career";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const NAV_IDS = ["about", "experience", "skills", "contact"];

export default function App() {
  const { theme, toggle } = useTheme();
  const [showIntro, setShowIntro] = useState(true);
  const [hiding, setHiding] = useState(false);

  useReveal();
  useScrollProgress();
  useMagnetic();
  useSpotlight();
  const active = useActiveSection(NAV_IDS);

  const enter = useCallback(() => {
    setHiding(true);
    setTimeout(() => setShowIntro(false), 700);
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />

      {/* Layered cinematic background: aurora + mesh orbs + grid + grain */}
      <div className="bg" aria-hidden="true">
        <div className="bg__aurora" />
        <div className="bg__orbs">
          <span />
          <span />
          <span />
        </div>
        <div className="bg__grid" />
        <div className="bg__noise" />
      </div>

      {showIntro && <Intro photo={daniaPhoto} hiding={hiding} onEnter={enter} />}

      <Navbar theme={theme} onToggleTheme={toggle} active={active} />

      <main>
        <Hero photo={daniaPhoto} />

        <div className="content">
          <div className="content__grid">
            <aside className="sidebar">
              <Education />
              <Skills />
              <Languages />
              <Interests />
            </aside>

            <div className="main-col">
              <Experience />
              <Career />
              <Courses />
            </div>
          </div>

          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}
