import React, { useContext } from "react";
import LanguageContext from "../../components/language/LanguageContext";

const ScrollDown = () => {
  const { isItalian, isFrench } = useContext(LanguageContext);
  return (
    <div className="scroll__down">
      <a href="#about" className="mouse__wrapper">
        <span className="home__scroll-name">
          {isItalian
            ? "Scorri in basso"
            : isFrench
            ? "Défilez vers le bas"
            : "Scroll Down"}
        </span>
        <span className="mouse">
          <span className="wheel"></span>
        </span>
      </a>
    </div>
  );
};

export default ScrollDown;
