import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";
import Certifications from "./Certifications";

const Portfolio = () => {
  const [showCertifications, setShowCertifications] = useState(false);

  return (
    <section className="work container section">
      <h2 className="section__title">Recent Projects</h2>

      <div className="work__filters">
        <span
          className="work__item"
          onClick={() => setShowCertifications(false)}
        >
          Web Development Projects
        </span>
        <span
          className="work__item"
          onClick={() => setShowCertifications(true)}
        >
          Certifications
        </span>
      </div>

      <div className="work__container grid">
        {showCertifications
          ? Certifications.map((cert) => {
              const { id, image, title, category } = cert;
              return (
                <div className="work__card" key={id}>
                  <div className="work__thumbnail">
                    <img src={image} alt="" className="work__img" />
                    <div className="work__mask"></div>
                  </div>

                  <span className="work__category">{category}</span>
                  <h3 className="work__title">{title}</h3>
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
