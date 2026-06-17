import React, { useState, useContext } from "react";
import "./sidebar.css";
import ThemeToggle from "../theme/ThemeToggle";
import LanguageContext from "../language/LanguageContext";
import Select from "react-select";

const Sidebar = ({ toggleDarkMode, darkMode }) => {
  const [toggle, showMenu] = useState(false);
  const { isItalian, isFrench, toggleLanguage } = useContext(LanguageContext);
  const languageOptions = [
    { value: "en", label: "🇺🇸" },
    { value: "it", label: "🇮🇹" },
    { value: "fr", label: "🇫🇷" },
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
      {/* Mobile Theme Toggle - Top Right Corner */}
      <div className="mobile-theme-toggle">
        <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav__logo">
          <i className="fa-solid fa-code"></i>
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item theme-toggle-item">
                <ThemeToggle
                  darkMode={darkMode}
                  toggleDarkMode={toggleDarkMode}
                />
              </li>
              <li className="nav__item">
                <div className="nav__link language">
                  <Select
                    options={languageOptions}
                    onChange={handleLanguageChange}
                    components={{
                      IndicatorSeparator: () => null,
                      DropdownIndicator: () => null,
                    }}
                    defaultValue={languageOptions.find(
                      (option) =>
                        option.value ===
                        (isItalian ? "it" : isFrench ? "fr" : "en")
                    )}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      colors: {
                        ...theme.colors,
                        primary25: "#c4a7e7",
                        primary: "#c4a7e7",
                      },
                    })}
                    className="language-dropdown"
                    classNamePrefix="language-dropdown"
                  />
                </div>
              </li>
              <li className="nav__item">
                <a href="#home" className="nav__link" title="Home" aria-label="Home">
                  <i className="fa-solid fa-house" aria-hidden="true"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link" title="About" aria-label="About">
                  <i className="fa-solid fa-user" aria-hidden="true"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#skills" className="nav__link" title="Skills" aria-label="Skills">
                  <i className="fa-solid fa-wrench" aria-hidden="true"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#services" className="nav__link" aria-label="Services">
                  <i className="fa-solid fa-briefcase" aria-hidden="true"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#resume" className="nav__link" title="Resume" aria-label="Resume">
                  <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#portfolio" className="nav__link" title="Portfolio" aria-label="Portfolio">
                  <i className="fa-solid fa-layer-group" aria-hidden="true"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link" title="Contact" aria-label="Contact">
                  <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="nav__footer">
          <span className="copyright">&copy; 2022 - 2025.</span>
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
