import React, { useContext } from "react";
import "./home.css";
import Me from "../../assets/profile-pic.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import LanguageContext from "../language/LanguageContext";

const Home = () => {
  const { isItalian, isFrench } = useContext(LanguageContext);

  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Erika Miglietta</h1>
        <span className="home__education">
          {isItalian
            ? "Sono una traduttrice e una sviluppatrice Front-End"
            : isFrench
            ? "Je suis traductrice et développeuse Front-End"
            : "I am a Translator and a Front-End Developer"}
        </span>
        <br />
        <span className="home__location">📍Taranto, Puglia, Italy</span>

        <HeaderSocials />

        <a href="#contact" className="btn">
          {isItalian ? "Contattami" : isFrench ? "Contactez-moi" : "Hire Me"}
        </a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
};

export default Home;
