import React, { useContext } from "react";
import "./resume.css";
import Card from "./Card";
import LanguageContext from "../../components/language/LanguageContext";

const Resume = () => {
  const { isItalian } = useContext(LanguageContext);
  const Data = [
    {
      id: 1,
      category: "education",
      icon: "icon-graduation",
      year: "2022 - 2023",
      title: "SheCodes React Web Development",
      institution: "SheCodes",
      desc: isItalian
        ? "Workshop di Programmazione online per donne"
        : "Online Coding Workshops for Women",
    },
    {
      id: 2,
      category: "education",
      icon: "icon-graduation",
      year: "2022",
      title: "EF set English Certificate C1 advanced",
      institution: "EF - Education First Italia",
    },
    {
      id: 3,
      category: "education",
      icon: "icon-graduation",
      year: "2015 - 2018",
      title: isItalian
        ? "Master in Traduzione Specialistica (LM94)"
        : "Master's Degree in Specialized Translation",
      institution: "University of Bari Aldo Moro",
    },
    {
      id: 4,
      category: "education",
      icon: "icon-graduation",
      year: "2011 - 2015",
      title: isItalian
        ? "Laurea Triennale in Comunicazione Linguistica e Interculturale(L12)"
        : "Bachelor's degree in Language and Intercultural Mediation, Linguistic and Intercultural Communication",
      institution: "University of Bari Aldo Moro",
    },
    {
      id: 5,
      category: "experience",
      icon: "icon-briefcase",
      year: "2019 - 2021",
      title: isItalian ? "Interprete" : "Consecutive interpreter",
      institution: "Fincantieri",
    },
    {
      id: 6,
      category: "experience",
      icon: "icon-briefcase",
      year: "2017 - 2020",
      title: isItalian ? "Traduttore Tecnico" : "Translator",
      institution: "SJS Engineering srl",
    },
    {
      id: 7,
      category: "experience",
      icon: "icon-briefcase",
      year: "2009 - 2013",
      title: isItalian ? "Trascrittore" : "Transcriber",
      institution: "Alchemy Translations",
    },
    {
      id: 8,
      category: "experience",
      icon: "icon-briefcase",
      year: "2019",
      title: isItalian ? "Traduttore Audiovisivo" : "Audiovisual Translator",
      institution: "10D Film",
    },
  ];
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">
        {isItalian ? "Esperienze" : "Experience"}
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
