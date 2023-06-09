import React from "react";
import HTML from "../../assets/html.svg";
import CSS from "../../assets/css.svg";
import Javascript from "../../assets/javascript.svg";
import ReactLogo from "../../assets/react.svg";
import BootStrap from "../../assets/bootstrap.svg";
import VSCode from "../../assets/vscode.svg";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills container section" id="skills">
      <h2 className="section__title">Skills</h2>

      <div className="skills__container grid">
        <div className="skills__card">
          <header className="skill-card__header">
            <img src={HTML} alt="HTML" className="skill-card__icon" />
          </header>
        </div>
        <div className="skills__card">
          <header className="skill-card__header">
            <img src={CSS} alt="HTML" className="skill-card__icon" />
          </header>
        </div>
        <div className="skills__card">
          <header className="skill-card__header">
            <img src={Javascript} alt="HTML" className="skill-card__icon" />
          </header>
        </div>
        <div className="skills__card">
          <header className="skill-card__header">
            <img src={ReactLogo} alt="HTML" className="skill-card__icon" />
          </header>
        </div>
        <div className="skills__card">
          <header className="skill-card__header">
            <img src={BootStrap} alt="HTML" className="skill-card__icon" />
          </header>
        </div>
        <div className="skills__card">
          <header className="skill-card__header">
            <img src={VSCode} alt="HTML" className="skill-card__icon" />
          </header>
        </div>
      </div>
    </section>
  );
};

export default Skills;
