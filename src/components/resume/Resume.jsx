import React, { useContext } from "react";
import "./resume.css";
import Card from "./Card";
import LanguageContext from "../../components/language/LanguageContext";

const Resume = () => {
  const { isItalian, isFrench } = useContext(LanguageContext);
  const Data = [
    {
      id: 1,
      category: "education",
      icon: "fa-solid fa-graduation-cap",
      year: "2022 - 2023",
      title: "SheCodes React Web Development",
      institution: "SheCodes",
      desc: isItalian
        ? "Workshop di Programmazione online per donne"
        : isFrench
        ? "Un atelier de code réservé aux femmes"
        : "Online Coding Workshops for Women",
    },
    {
      id: 2,
      category: "education",
      icon: "fa-solid fa-graduation-cap",
      year: "2022",
      title: "EF set English Certificate C1 advanced",
      institution: "EF - Education First Italia",
    },
    {
      id: 3,
      category: "education",
      icon: "fa-solid fa-graduation-cap",
      year: "2015 - 2018",
      title: isItalian
        ? "Master in Traduzione Specialistica (LM94)"
        : isFrench
        ? "Master en Traduction Spécialisée."
        : "Master's Degree in Specialized Translation",
      institution: "University of Bari Aldo Moro",
    },
    {
      id: 4,
      category: "education",
      icon: "fa-solid fa-graduation-cap",
      year: "2011 - 2015",
      title: isItalian
        ? "Laurea Triennale in Comunicazione Linguistica e Interculturale(L12)"
        : isFrench
        ? "Diplôme de licence en Médiation Linguistique et Interculturelle, Communication Linguistique et Interculturelle."
        : "Bachelor's degree in Language and Intercultural Mediation, Linguistic and Intercultural Communication",
      institution: "University of Bari Aldo Moro",
    },
    {
      id: 9,
      category: "experience",
      icon: "fa-solid fa-briefcase",
      year: "2024 - present",
      title: isItalian
        ? "Infra Transformation Analyst"
        : isFrench
        ? "Infra Transformation Analyst"
        : "Infra Transformation Analyst",
      institution: "Accenture",
    },
    {
      id: 5,
      category: "experience",
      icon: "fa-solid fa-briefcase",
      year: "2019 - 2021",
      title: isItalian
        ? "Interprete"
        : isFrench
        ? "Interprète consécutif"
        : "Consecutive interpreter",
      institution: "Fincantieri",
    },
    {
      id: 6,
      category: "experience",
      icon: "fa-solid fa-briefcase",
      year: "2017 - 2020",
      title: isItalian
        ? "Traduttore Tecnico"
        : isFrench
        ? "Traductrice"
        : "Translator",
      institution: "SJS Engineering srl",
    },
    {
      id: 7,
      category: "experience",
      icon: "fa-solid fa-briefcase",
      year: "2009 - 2013",
      title: isItalian
        ? "Trascrittrice"
        : isFrench
        ? "Transcriptrice"
        : "Transcriber",
      institution: "Alchemy Translations",
    },
    {
      id: 8,
      category: "experience",
      icon: "fa-solid fa-briefcase",
      year: "2019",
      title: isItalian
        ? "Traduttore Audiovisivo"
        : isFrench
        ? "Traductrice audiovisuelle"
        : "Audiovisual Translator",
      institution: "10D Film",
    },
  ];
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">
        <span className="resume-slash">&#47;</span>
        {isItalian ? "Esperienze" : isFrench ? "Expérience " : "Experience"}
      </h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  institution={val.institution}
                  url={val.url}
                />
              );
            } else {
              return null;
            }
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  institution={val.institution}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
