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
          <div className="slide"><Home /></div>
          <div className="slide"><About /></div>
          <Suspense fallback={<div className="slide section-loading"></div>}>
            <div className="slide"><Music /></div>
            <div className="slide"><Games /></div>
            <div className="slide"><Skills /></div>
            <div className="slide"><Services /></div>
            <div className="slide"><Resume /></div>
            <div className="slide"><Portfolio /></div>
            <div className="slide"><Contact /></div>
          </Suspense>
        </main>
      </div>
      <WhatsAppButton />
      <ScrollDots />
    </LanguageProvider>
  );
}

export default App;
