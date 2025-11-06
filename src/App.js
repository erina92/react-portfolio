import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import LanguageProvider from "./components/language/LanguageProvider";
import { SearchProvider } from "./components/search/SearchContext";
import SearchBar from "./components/search/SearchBar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Music from "./components/music/Music";
import Games from "./components/games/games";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import DarkMode from "./DarkMode";

function App() {
  const [darkMode, toggleDarkMode] = DarkMode();

  return (
    <LanguageProvider>
      <SearchProvider>
        <div className={darkMode ? "dark-mode" : ""}>
          <Sidebar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <main className="main">
            <Home />
            <About />
            <SearchBar />
            <Music />
            <Games />
            <Skills />
            <Services />
            <Resume />
            <Portfolio />
            <Contact />
          </main>
        </div>
      </SearchProvider>
    </LanguageProvider>
  );
}

export default App;
