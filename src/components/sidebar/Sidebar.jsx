import React, { useState, useContext } from "react";
import "./sidebar.css";
import ThemeToggle from "../theme/ThemeToggle";
import LanguageContext from "../language/LanguageContext";
import Select from "react-select";

const scrollTo = (id) => {
  const main = document.querySelector('.main');
  const target = document.getElementById(id);
  if (main && target) {
    main.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
  }
};

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
        <a href="#home" className="nav__logo" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
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
              {[
                { id: 'home',      icon: 'fa-house',        label: 'Home' },
                { id: 'about',     icon: 'fa-user',         label: 'About' },
                { id: 'skills',    icon: 'fa-wrench',       label: 'Skills' },
                { id: 'services',  icon: 'fa-briefcase',    label: 'Services' },
                { id: 'resume',    icon: 'fa-graduation-cap', label: 'Resume' },
                { id: 'portfolio', icon: 'fa-layer-group',  label: 'Portfolio' },
                { id: 'contact',   icon: 'fa-envelope',     label: 'Contact' },
              ].map(({ id, icon, label }) => (
                <li className="nav__item" key={id}>
                  <a
                    href={`#${id}`}
                    className="nav__link"
                    title={label}
                    aria-label={label}
                    onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                  >
                    <i className={`fa-solid ${icon}`} aria-hidden="true"></i>
                  </a>
                </li>
              ))}
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
