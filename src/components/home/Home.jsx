import React, { useContext } from "react";
import "./home.css";
import Me from "../../assets/profile/profile-pic.png";
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
        <h1 className="home__name">
          <span className="brace">&#60;</span>
          <span className="slash">&#47;</span>Erika Miglietta
          <span className="brace">&#62;</span>
        </h1>
        <span className="home__education">
          {isItalian
            ? "Sono una traduttrice e una sviluppatrice Front-End, Infra Transformation Analyst in Accenture dal 2024"
            : isFrench
            ? "Je suis traductrice et développeuse Front-End, Infra Transformation Analyst in Accenture depuis 2024"
            : "I am a Translator and a Front-End Developer, Infra Transformation Analyst in Accenture since 2024"}
        </span>
        <br />
        <span className="home__location">
          <a
            href="https://www.google.it/maps/place/Taranto+TA/@40.4391673,17.1679316,12z/data=!3m1!4b1!4m6!3m5!1s0x13471d1819a77b13:0x64f8f9a58d57dfcf!8m2!3d40.4643606!4d17.2470303!16zL20vMGZrYnk?entry=ttu"
            target="blank"
            rel="nonreferrer"
            title="Taranto"
            className="home-city"
          >
            📍Taranto, Puglia, Italy
          </a>
        </span>

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
