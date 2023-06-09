import React from "react";
import "./sidebar.css";
import Logo from "../../assets/logo-3.svg";

const Sidebar = () => {
  return (
    <aside className="aside">
      <a href="#home" className="nav__logo">
        <img src={Logo} alt="" />
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
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
              <a href="#skills" className="nav__link" title="Skills">
                <i className="fa-solid fa-wrench"></i>
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
  );
};

export default Sidebar;
