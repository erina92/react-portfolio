import React, { useContext } from "react";
import LanguageContext from "../language/LanguageContext";

const AboutBox = () => {
  const { isItalian } = useContext(LanguageContext);
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon fa-solid fa-fire"></i>

        <div>
          <h3 className="about__title">3</h3>
          <span className="about__subtitle">
            {isItalian ? "Progetti Completati" : "Projects Completed"}
          </span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon fa-solid fa-mug-hot"></i>

        <div>
          <h3 className="about__title">6000</h3>
          <span className="about__subtitle">
            {isItalian ? "Tazzine di caffè" : "Cups of coffee"}
          </span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon fa-solid fa-face-smile"></i>

        <div>
          <h3 className="about__title">20</h3>
          <span className="about__subtitle">
            {isItalian ? "Clienti soddisfatti" : "Satisfied clients"}
          </span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon fa-regular fa-hourglass-half"></i>

        <div>
          <h3 className="about__title">10+</h3>
          <span className="about__subtitle">
            {isItalian ? "Anni di studio" : "Years of learning"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
