import React, { useContext } from "react";
import "./about.css";
import Image from "../../assets/programmer.png";
import AboutBox from "./AboutBox";
import CV from "../../cv/CV.pdf";
import LanguageContext from "../language/LanguageContext";

const About = () => {
  const { isItalian } = useContext(LanguageContext);
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">{isItalian ? "Chi sono" : "About Me"}</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              {isItalian
                ? "Mi chiamo Erika e sono una traduttrice e di recente sviluppatrice web da Taranto, Puglia."
                : "I'm Erika Miglietta, a translator/interpreter and web developer from Taranto, Italy."}{" "}
              <br />{" "}
              {isItalian
                ? "Sono specializzata in JavaScript e React, creando applicazioni interattive che colmano il divario tra linguaggi e tecnologie."
                : "I specialize in JavaScript and React, building interactive applications while bridging the gap between languages and technologies."}
            </p>
            <a href={CV} className="btn" target="_blank" rel="noreferrer">
              {isItalian ? "Scarica il CV" : "Download CV"}
            </a>
          </div>
          <div className="about__skills grid">
            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__name">
                  {isItalian ? "Sviluppo Web" : "Web Development"}
                </h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">
                  {isItalian
                    ? "Design interfaccia utente/utente esperienza (UI/UX)"
                    : "UI/UX Design"}
                </h3>
                <span className="skills__number">20%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ux"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">
                  {isItalian ? "Traduzione" : "Translation"}
                </h3>
                <span className="skills__number">100%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage translation"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage react"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
