import React, { useContext, useState } from "react";
import LanguageContext from "../../components/language/LanguageContext";
import { useSearch } from "../search/SearchContext";
import "./portfolio.css";
import Work1 from "../../assets/work-10.svg";
import Work2 from "../../assets/work-11.svg";
import Work3 from "../../assets/work-12.svg";
import EF from "../../assets/EF/EF.png";
import EFCert from "../../assets/EF/EF.pdf";
import Cert1 from "../../assets/SheCodes/basics.png";
import Cert2 from "../../assets/SheCodes/basicsaddon.png";
import Cert3 from "../../assets/SheCodes/plus.png";
import Cert4 from "../../assets/SheCodes/responsive.png";
import Cert5 from "../../assets/SheCodes/react-2.png";
import Cert6 from "../../assets/SheCodes/reactaddon.png";
import Cert7 from "../../assets/SheCodes/next.png";
import OracleCert from "../../assets/oracle-cert.jpg";
import CommvaultCert from "../../assets/commvault-cert.jpg";
import Cloud1 from "../../assets/Accenture/cloud literacy cert.png";
import Cloud2 from "../../assets/Accenture/cloud career cert.png";
import Cloud3 from "../../assets/Accenture/cloud computing for business.png";
import Cloud4 from "../../assets/Accenture/public cloud platforms.png";
import Cloud5 from "../../assets/Accenture/digital transformation.png";
import AlibabaAutoscaling from "../../assets/alibaba-cloud-badges/autoscaling.png";
import AlibabaEcs from "../../assets/alibaba-cloud-badges/ecs.png";
import AlibabaOss from "../../assets/alibaba-cloud-badges/oss.png";
import AlibabaRds from "../../assets/alibaba-cloud-badges/rds.png";
import AlibabaSlb from "../../assets/alibaba-cloud-badges/slb.png";
import AlibabaTerraform from "../../assets/alibaba-cloud-badges/terraform.png";
import CommvaultBadge1 from "../../assets/commvault-badges/commcell.png";
import CommvaultBadge2 from "../../assets/commvault-badges/commvault.png";
import AlibabaAutoscalingCert from "../../assets/alibaba-cloud-cert/autoscaling-cert.png";
import AlibabaEcsCert from "../../assets/alibaba-cloud-cert/ecs-cert.png";
import AlibabaOssCert from "../../assets/alibaba-cloud-cert/oss-cert.png";
import AlibabaRdsCert from "../../assets/alibaba-cloud-cert/rds-cert.png";
import AlibabaSlbCert from "../../assets/alibaba-cloud-cert/slb-cert.png";
import AlibabaTerraformCert from "../../assets/alibaba-cloud-cert/alibabaterraform-cert.jpg";

const Portfolio = () => {
  const [showCertifications, setShowCertifications] = useState(false);
  const [showLinguisticCert, setShowLinguisticCert] = useState(false);
  const [showAccentureCert, setShowAccentureCert] = useState(false);
  const [showBadges, setShowBadges] = useState(false);
  const { isItalian, isFrench } = useContext(LanguageContext);
  const { filterItems, isSearchActive } = useSearch();

  const AccentureCert = [
    {
      id: 1,
      image: Cloud1,
      title: "Cloud Computing",
      category: "Accenture Cloud Bootcamp",
      url: "https://certificates.cloudacademy.com/079adc1b8ab0c9d6426d54ad3aa4116295bd2669.pdf",
    },
    {
      id: 2,
      image: Cloud2,
      title: "Cloud Computing",
      category: "Accenture Cloud Bootcamp",
      url: "https://certificates.cloudacademy.com/1d5a56d53f9f7d7a249965e9db1c09c75cc4fcc9.pdf",
    },
    {
      id: 3,
      image: Cloud3,
      title: "Cloud Computing",
      category: "Accenture Cloud Bootcamp",
      url: "https://certificates.cloudacademy.com/4bb02e27cdef0e8addd4d7f6e1a020ba22eed282.pdf",
    },
    {
      id: 4,
      image: Cloud4,
      title: "Cloud Computing",
      category: "Accenture Cloud Bootcamp",
      url: "https://certificates.cloudacademy.com/a7650d7c901b77fafd0d3d2a83868dd2138ad09d.pdf",
    },
    {
      id: 5,
      image: Cloud5,
      title: "Cloud Computing",
      category: "Accenture Cloud Bootcamp",
      url: "https://certificates.cloudacademy.com/5559a3c7bb4b0ea376cce6a7758917c3b5c5449d.pdf",
    },
  ];

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
    {
      id: 7,
      image: Cert7,
      title: "SheCodes Next",
      category: isItalian
        ? "Certificazioni"
        : isFrench
        ? "Certifications"
        : "Certifications",
      url: "https://www.shecodes.io/certificates/009e6b3334c2a297b3962f2f96d2c646",
    },
    {
      id: 8,
      image: OracleCert,
      title: "Oracle Certified Foundation Associate Certification",
      category: isItalian
        ? "Certificazioni"
        : isFrench
        ? "Certifications"
        : "Certifications",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=F4F9B877D10A1A8C148698A9BFCCBB47537E6070E5F1157A5B720C430A271AB2",
    },
    {
      id: 9,
      image: CommvaultCert,
      title: "Commvault Certified Professional Certification",
      category: isItalian
        ? "Certificazioni"
        : isFrench
        ? "Certifications"
        : "Certifications",
      url: "https://www.credly.com/badges/3fb81ca6-e2ac-4fdc-a5c7-7d3281d88c05/public_url",
    },
    {
      id: 10,
      image: AlibabaAutoscalingCert,
      title: "Alibaba Cloud - Autoscaling",
      category: isItalian
        ? "Certificazioni"
        : isFrench
        ? "Certifications"
        : "Certifications",
      url: AlibabaAutoscalingCert,
    },
    {
      id: 11,
      image: AlibabaEcsCert,
      title: "Alibaba Cloud - ECS",
      category: isItalian
        ? "Certificazioni"
        : isFrench
        ? "Certifications"
        : "Certifications",
      url: AlibabaEcsCert,
    },
    {
      id: 12,
      image: AlibabaOssCert,
      title: "Alibaba Cloud - OSS",
      category: isItalian
        ? "Certificazioni"
        : isFrench
        ? "Certifications"
        : "Certifications",
      url: AlibabaOssCert,
    },
    {
      id: 13,
      image: AlibabaRdsCert,
      title: "Alibaba Cloud - RDS",
      category: isItalian
        ? "Certificazioni"
        : isFrench
        ? "Certifications"
        : "Certifications",
      url: AlibabaRdsCert,
    },
    {
      id: 14,
      image: AlibabaSlbCert,
      title: "Alibaba Cloud - SLB",
      category: isItalian
        ? "Certificazioni"
        : isFrench
        ? "Certifications"
        : "Certifications",
      url: AlibabaSlbCert,
    },
    {
      id: 15,
      image: AlibabaTerraformCert,
      title: "Alibaba Cloud - Terraform",
      category: isItalian
        ? "Certificazioni"
        : isFrench
        ? "Certifications"
        : "Certifications",
      url: AlibabaTerraformCert,
    },
  ];

  const Badges = [
    {
      id: 1,
      image: AlibabaAutoscaling,
      title: "Autoscaling",
      category: "Alibaba Cloud Badge",
      url: AlibabaAutoscaling,
    },
    {
      id: 2,
      image: AlibabaEcs,
      title: "ECS",
      category: "Alibaba Cloud Badge",
      url: AlibabaEcs,
    },
    {
      id: 3,
      image: AlibabaOss,
      title: "OSS",
      category: "Alibaba Cloud Badge",
      url: AlibabaOss,
    },
    {
      id: 4,
      image: AlibabaRds,
      title: "RDS",
      category: "Alibaba Cloud Badge",
      url: AlibabaRds,
    },
    {
      id: 5,
      image: AlibabaSlb,
      title: "SLB",
      category: "Alibaba Cloud Badge",
      url: AlibabaSlb,
    },
    {
      id: 6,
      image: AlibabaTerraform,
      title: "Terraform on Alibaba",
      category: "Alibaba Cloud Badge",
      url: AlibabaTerraform,
    },
    {
      id: 7,
      image: CommvaultBadge1,
      title: "Commvault - CommCell",
      category: "Commvault Badge",
      url: "https://www.credly.com/badges/371689f0-d4f7-4487-9304-e617970d32f6/public_url",
    },
    {
      id: 8,
      image: CommvaultBadge2,
      title: "Commvault Professional",
      category: "Commvault Badge",
      url: "https://www.credly.com/badges/3fb81ca6-e2ac-4fdc-a5c7-7d3281d88c05/public_url",
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
    setShowAccentureCert(false);
  };

  const handleLinguisticCertClick = () => {
    setShowCertifications(false);
    setShowAccentureCert(false);
    setShowLinguisticCert(true);
  };

  const handleWebDevProjectsClick = () => {
    setShowCertifications(false);
    setShowLinguisticCert(false);
    setShowAccentureCert(false);
  };

  const handleAccentureCloudBootClick = () => {
    setShowCertifications(false);
    setShowLinguisticCert(false);
    setShowAccentureCert(true);
  };

  const handleBadgesClick = () => {
    setShowBadges(true);
    setShowCertifications(false);
    setShowLinguisticCert(false);
    setShowAccentureCert(false);
  };

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">
        <span className="work-slash">&#47;</span>
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
        <span className="work__item" onClick={handleAccentureCloudBootClick}>
          Accenture Cloud Bootcamp
        </span>
        <span className="work__item" onClick={handleBadgesClick}>
          {isItalian ? "Badges" : isFrench ? "Badges" : "Badges"}
        </span>
      </div>

      <div className="work__container grid">
        {showCertifications
          ? filterItems(Certifications, ["title", "category"]).map((cert) => {
              const { id, image, title, category, url } = cert;
              return (
                <div
                  className={`work__card ${
                    isSearchActive ? "search-fade-in" : ""
                  }`}
                  key={id}
                >
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
          ? filterItems(LinguisticCert, ["title", "category"]).map(
              (lingCert) => {
                const { id, image, title, category, url } = lingCert;
                return (
                  <div
                    className={`work__card ${
                      isSearchActive ? "search-fade-in" : ""
                    }`}
                    key={id}
                  >
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
              }
            )
          : showAccentureCert
          ? filterItems(AccentureCert, ["title", "category"]).map((AccCert) => {
              const { id, image, title, category, url } = AccCert;
              return (
                <div
                  className={`work__card ${
                    isSearchActive ? "search-fade-in" : ""
                  }`}
                  key={id}
                >
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
          : showBadges
          ? filterItems(Badges, ["title", "category"]).map((badge) => {
              const { id, image, title, category, url } = badge;
              return (
                <div
                  className={`work__card ${
                    isSearchActive ? "search-fade-in" : ""
                  }`}
                  key={`badge-${id}`}
                >
                  <div className="work__thumbnail">
                    <img src={image} alt={title} className="work__img" />
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
          : filterItems(Menu, ["title", "category"]).map((elem) => {
              const { id, image, title, category, url } = elem;
              return (
                <div
                  className={`work__card ${
                    isSearchActive ? "search-fade-in" : ""
                  }`}
                  key={id}
                >
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
