import React, { useState, useContext } from "react";
import "./sidebar.css";
import Logo from "../../assets/coding.png";
import LanguageContext from "../language/LanguageContext";
import Select from "react-select";

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  const { isItalian, isFrench, toggleLanguage } = useContext(LanguageContext);
  const languageOptions = [
    { value: "en", label: "En" },
    { value: "it", label: "It" },
    { value: "fr", label: "Fr" },
  ];

  const handleLanguageChange = (selectedOption) => {
    const selectedLanguage = selectedOption.value;

    if (selectedLanguage === "it") {
      toggleLanguage("it");
    } else if (selectedLanguage === "fr") {
      toggleLanguage("fr");
    } else {
      toggleLanguage("en");
    }
  };

  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav__logo">
          <img src={Logo} alt="" />
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <div className="nav__link language">
                  <Select
                    options={languageOptions}
                    onChange={handleLanguageChange}
                    defaultValue={languageOptions.find(
                      (option) =>
                        option.value ===
                        (isItalian ? "it" : isFrench ? "fr" : "en")
                    )}
                    className="language-dropdown"
                    classNamePrefix="language-dropdown"
                  />
                </div>
              </li>
              <li className="nav__item">
                <a href="#home" className="nav__link" title="Home">
                  <i className="fa-solid fa-house"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link" title="About">
                  <i className="fa-solid fa-user"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#skills" className="nav__link" title="Skills">
                  <i className="fa-solid fa-wrench"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i className="fa-solid fa-briefcase"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#resume" className="nav__link" title="Resume">
                  <i className="fa-solid fa-graduation-cap"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#portfolio" className="nav__link" title="Portfolio">
                  <i className="fa-solid fa-layer-group"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link" title="Contact">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="nav__footer">
          <span className="copyright">&copy; 2022 - 2023.</span>
        </div>
      </aside>

      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <i className="fa-solid fa-bars"></i>
      </div>
    </>
  );
};

export default Sidebar;
