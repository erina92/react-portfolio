import React, { useContext } from "react";
import "./home.css";
import Me from "../../assets/profile-pic.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import LanguageContext from "../language/LanguageContext";

const Home = () => {
  const { isItalian } = useContext(LanguageContext);

  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Erika Miglietta</h1>
        <span className="home__education">
          {isItalian
            ? "Sono una traduttrice e una sviluppatrice Front-End"
            : "I am a Translator and a Front-End Developer"}
        </span>

        <HeaderSocials />

        <a href="#contact" className="btn">
          {isItalian ? "Contattami" : "Hire Me"}
        </a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
};

export default Home;
