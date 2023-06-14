import React, { useContext, useState } from "react";
import LanguageContext from "../../components/language/LanguageContext";
import "./portfolio.css";
import Work1 from "../../assets/work-10.svg";
import Work2 from "../../assets/work-11.svg";
import Work3 from "../../assets/work-12.svg";
import EF from "../../assets/EF.png";
import EFCert from "../../assets/EF.pdf";
import Cert1 from "../../assets/basics.png";
import Cert2 from "../../assets/basicsaddon.png";
import Cert3 from "../../assets/plus.png";
import Cert4 from "../../assets/responsive.png";
import Cert5 from "../../assets/react-2.png";
import Cert6 from "../../assets/reactaddon.png";

const Portfolio = () => {
  const [showCertifications, setShowCertifications] = useState(false);
  const [showLinguisticCert, setShowLinguisticCert] = useState(false);
  const { isItalian, isFrench } = useContext(LanguageContext);

  const LinguisticCert = [
    {
      id: 1,
      image: EF,
      title: "EF Set C1",
      category: isItalian
        ? "Certificazioni Linguistiche"
        : "Linguistic Certifications",
      url: EFCert,
    },
  ];

  const Certifications = [
    {
      id: 1,
      image: Cert1,
      title: "SheCodes Basics",
      category: isItalian
        ? "Certificazioni"
        : isFrench
        ? "Certifications"
        : "Certifications",
      url: "https://www.shecodes.io/certificates/f63e4a995eb075b9487d65831e3c695a",
    },
    {
      id: 2,
      image: Cert2,
      title: "SheCodes Basics Add On",
      category: isItalian
        ? "Certificazioni"
        : isFrench
        ? "Certifications"
        : "Certifications",
      url: "https://www.shecodes.io/certificates/c3e8588bf3a907c1e5a1d1cb943c0171",
    },
    {
      id: 3,
      image: Cert3,
      title: "SheCodes Plus",
      category: isItalian
        ? "Certificazioni"
        : isFrench
        ? "Certifications"
        : "Certifications",
      url: "https://www.shecodes.io/certificates/8faaf091487b56103498a3d9a808b50d",
    },
    {
      id: 4,
      image: Cert4,
      title: "SheCodes Responsive Web Development",
      category: isItalian
        ? "Certificazioni"
        : isFrench
        ? "Certifications"
        : "Certifications",
      url: "https://www.shecodes.io/certificates/883ac9c907c8096b6e42d1604e32616c",
    },
    {
      id: 5,
      image: Cert5,
      title: "SheCodes React Development",
      category: isItalian
        ? "Certificazioni"
        : isFrench
        ? "Certifications"
        : "Certifications",
      url: "https://www.shecodes.io/certificates/d568be1e003b3baa32ea9e998a14849e",
    },
    {
      id: 6,
      image: Cert6,
      title: "SheCodes Advanced React Development",
      category: isItalian
        ? "Certificazioni"
        : isFrench
        ? "Certifications"
        : "Certifications",
      url: "https://www.shecodes.io/certificates/4da0d18ba5f933738aa49d062813592f",
    },
  ];
  const Menu = [
    {
      id: 1,
      image: Work1,
      title: isItalian
        ? "App Orologio "
        : isFrench
        ? "Application de fuseaux horaires mondiaux"
        : "World Clock App",
      category: isItalian
        ? "Sviluppo Web"
        : isFrench
        ? "Développement web"
        : "Web Development",
      url: "https://world-clock-erika-1511.netlify.app/",
    },
    {
      id: 2,
      image: Work2,
      title: isItalian
        ? "App Meteo"
        : isFrench
        ? "Application météo"
        : "Weather App",
      category: isItalian
        ? "Integrazione API"
        : isFrench
        ? "Intégration d'API"
        : "API Integration",
      url: "https://react-weather-app-erika.netlify.app/",
    },
    {
      id: 3,
      image: Work3,
      title: isItalian
        ? "App Dizionario"
        : isFrench
        ? "Application de dictionnaire"
        : "Dictionary App",
      category: isItalian
        ? "Progetti React"
        : isFrench
        ? "Projets React"
        : "React Projects",
      url: "https://dictionary-react-1511.netlify.app/",
    },
  ];
  const handleCertificationsClick = () => {
    setShowCertifications(true);
    setShowLinguisticCert(false);
  };

  const handleLinguisticCertClick = () => {
    setShowCertifications(false);
    setShowLinguisticCert(true);
  };

  const handleWebDevProjectsClick = () => {
    setShowCertifications(false);
    setShowLinguisticCert(false);
  };

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">
        {isItalian
          ? "Progetti Open-Source"
          : isFrench
          ? "Projets récents"
          : "Recent Projects"}
      </h2>

      <div className="work__filters">
        <span className="work__item" onClick={handleWebDevProjectsClick}>
          {isItalian
            ? "Progetti Sviluppo Web"
            : isFrench
            ? "Projets de développement web"
            : "Web Development Projects"}
        </span>
        <span className="work__item" onClick={handleCertificationsClick}>
          {isItalian
            ? "Certificazioni"
            : isFrench
            ? "Certifications"
            : "Certifications"}
        </span>
        <span className="work__item" onClick={handleLinguisticCertClick}>
          {isItalian
            ? "Certificazioni Linguistiche"
            : isFrench
            ? "Certifications linguistiques"
            : "Linguistic Certifications"}
        </span>
      </div>

      <div className="work__container grid">
        {showCertifications
          ? Certifications.map((cert) => {
              const { id, image, title, category, url } = cert;
              return (
                <div className="work__card" key={id}>
                  <div className="work__thumbnail">
                    <img src={image} alt="" className="work__img" />
                    <div className="work__mask"></div>
                  </div>

                  <span className="work__category">{category}</span>
                  <h3 className="work__title">{title}</h3>
                  <a
                    href={url}
                    className="work__button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="icon-link work__button-icon"></i>
                  </a>
                </div>
              );
            })
          : showLinguisticCert
          ? LinguisticCert.map((lingCert) => {
              const { id, image, title, category, url } = lingCert;
              return (
                <div className="work__card" key={id}>
                  <div className="work__thumbnail">
                    <img src={image} alt="" className="work__img" />
                    <div className="work__mask"></div>
                  </div>

                  <span className="work__category">{category}</span>
                  <h3 className="work__title">{title}</h3>
                  <a
                    href={url}
                    className="work__button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="icon-link work__button-icon"></i>
                  </a>
                </div>
              );
            })
          : Menu.map((elem) => {
              const { id, image, title, category, url } = elem;
              return (
                <div className="work__card" key={id}>
                  <div className="work__thumbnail">
                    <img src={image} alt="" className="work__img" />
                    <div className="work__mask"></div>
                  </div>

                  <span className="work__category">{category}</span>
                  <h3 className="work__title">{title}</h3>
                  <a
                    href={url}
                    className="work__button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="icon-link work__button-icon"></i>
                  </a>
                </div>
              );
            })}
      </div>
    </section>
  );
};

export default Portfolio;
