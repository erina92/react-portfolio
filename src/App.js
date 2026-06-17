import React, { Suspense, lazy } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import LanguageProvider from "./components/language/LanguageProvider";
import Home from "./components/home/Home";
import About from "./components/about/About";
import useDarkMode from "./DarkMode";
import WhatsAppButton from "./components/whatsapp/WhatsAppButton";
import ScrollDots from "./components/scrolldots/ScrollDots";

const Music = lazy(() => import("./components/music/Music"));
const Games = lazy(() => import("./components/games/Games"));
const Skills = lazy(() => import("./components/skills/Skills"));
const Services = lazy(() => import("./components/services/Services"));
const Resume = lazy(() => import("./components/resume/Resume"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));

function App() {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <LanguageProvider>
      <div className={darkMode ? "dark-mode" : ""}>
        <Sidebar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <main className="main">
          <Home />
          <About />
          <Suspense fallback={<div className="section-loading"></div>}>
            <Music />
            <Games />
            <Skills />
            <Services />
            <Resume />
            <Portfolio />
            <Contact />
          </Suspense>
        </main>
      </div>
      <WhatsAppButton />
      <ScrollDots />
    </LanguageProvider>
  );
}

export default App;
