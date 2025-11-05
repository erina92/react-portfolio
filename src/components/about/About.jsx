import React, { useContext } from "react";
import "./about.css";
import Image from "../../assets/programmer.png";
import AboutBox from "./AboutBox";
import LanguageContext from "../language/LanguageContext";

const About = () => {
  const { isItalian, isFrench } = useContext(LanguageContext);
  const ResumeUrl = require("../../cv/Resume.pdf");
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">
        <span className="about-slash">&#47;</span>
        {isItalian ? "Chi sono" : isFrench ? "Mieux me connaître" : "About Me"}
      </h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              {isItalian
                ? "Mi chiamo Erika e sono una traduttrice e di recente sviluppatrice web da Taranto, Puglia."
                : isFrench
                ? "Je suis Erika Miglietta, traductrice/interprète et développeuse web de Taranto, Italie."
                : "My name is Erika, a translator and web developer from Taranto, Puglia."}{" "}
              <br />{" "}
              {isItalian
                ? "La mia passione per la logica dei linguaggi, sia umani che informatici, mi ha portato a specializzarmi in JavaScript e React."
                : isFrench
                ? "Ma passion pour la logique des langages, qu'ils soient humains ou informatiques, m'a amenée à me spécialiser en JavaScript et React."
                : "My passion for the logic of languages—both human and computer—led me to specialize in JavaScript and React."}
              <br />
              {isItalian
                ? "Dalla fine del 2024, lavoro come Infra Transformation Analyst in Accenture, dove gestisco e mi interfaccio quotidianamente con le principali console cloud, tra cui Google Cloud, Oracle, Azure e Alibaba. Questa esperienza ha ampliato le mie competenze tecniche, permettendomi di operare all'intersezione tra lo sviluppo software e le infrastrutture cloud all'avanguardia."
                : isFrench
                ? "Depuis fin 2024, je travaille en tant qu'Analyste en Transformation d'Infrastructure chez Accenture, où je gère et interagis quotidiennement avec les principales consoles cloud, notamment Google Cloud, Oracle, Azure et Alibaba. Ce rôle a élargi mes compétences techniques, me permettant d'opérer à l'intersection du développement logiciel et des infrastructures cloud de pointe."
                : "Since late 2024, I have been working as an Infra Transformation Analyst at Accenture, where I manage and interface daily with major cloud consoles, including Google Cloud, Oracle, Azure, and Alibaba. This role has broadened my technical skills, allowing me to operate at the intersection of software development and cutting-edge cloud infrastructure."}
              {isItalian
                ? "Nel mio tempo libero, sono una videogiocatrice da sempre e amo immergermi nel mondo dei manga e degli anime."
                : isFrench
                ? "Pendant mon temps libre, je suis une joueuse de jeux vidéo depuis toujours et j'adore me plonger dans l'univers des mangas et des animes."
                : "In my free time, I am a lifelong gamer and love to immerse myself in the world of manga and anime."}
              <br />
            </p>
            <a
              href={ResumeUrl}
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              {isItalian
                ? "Scarica il CV"
                : isFrench
                ? "Télécharger CV"
                : "Download CV"}
            </a>
          </div>
          <div className="about__skills grid">
            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__name">
                  {isItalian
                    ? "Sviluppo Web"
                    : isFrench
                    ? " Développement Web"
                    : "Web Development"}
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
                    : isFrench
                    ? "Design UI/UX"
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
                  {isItalian
                    ? "Traduzione"
                    : isFrench
                    ? "Traduction"
                    : "Translation"}
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
            {/* Cloud provider skill bars */}
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Google Cloud</h3>
                <span className="skills__number">30%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage gcp"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Oracle Cloud</h3>
                <span className="skills__number">30%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage oracle"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Alibaba Cloud</h3>
                <span className="skills__number">30%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage alibaba"></span>
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
