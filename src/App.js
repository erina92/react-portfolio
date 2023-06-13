import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import LanguageProvider from "./components/language/LanguageProvider";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <LanguageProvider>
      <div>
        <Sidebar />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Services />
          <Resume />
          <Portfolio />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
