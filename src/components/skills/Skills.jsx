import React, { useContext } from "react";
import HTML from "../../assets/html-5.png";
import CSS from "../../assets/css.png";
import Javascript from "../../assets/js-2.png";
import ReactLogo from "../../assets/react.png";
import Npm from "../../assets/npm.png";
import BootStrap from "../../assets/bootstrap.png";
import VSCode from "../../assets/visual-studio.png";
import FigmaLogo from "../../assets/figma.png";
import GitLogo from "../../assets/git.png";
import Github from "../../assets/github-2.png";
import Slack from "../../assets/slack-logo.png";
import NetlifyLogo from "../../assets/netlify.svg";
import Nodejs from "../../assets/nodejs.png";
import Paintnet from "../../assets/paint.png";
import GoogleCloud from "../../assets/google-cloud.svg";
import OracleCloud from "../../assets/oracle-cloud.svg";
import AzureCloud from "../../assets/azure-cloud.svg";
import AlibabaCloud from "../../assets/alibaba-cloud.svg";
import LanguageContext from "../../components/language/LanguageContext";
import "./skills.css";

const Skills = () => {
  const { isItalian, isFrench } = useContext(LanguageContext);
  return (
    <section className="skills container section" id="skills">
      <h2 className="section__title">
        <span className="skill-slash">&#47;</span>
        {isItalian ? "Competenze" : isFrench ? "Compétences" : "Skills"}
      </h2>
      <div className="skill__filters">
        <span className="skill__item">
          {isItalian
            ? "Linguaggi di programmazione e software"
            : isFrench
            ? "Langages de programmation & Logiciels"
            : "Languages & Tools"}
        </span>
      </div>

      <div className="skills__container grid">
        <div className="skills__card">
          <header className="skill-card__header">
            <img
              src={HTML}
              alt="HTML"
              className="skill-card__icon"
              title="HTML"
            />
          </header>
        </div>
        
        <div className="skills__card">
          <header className="skill-card__header">
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={CSS}
                alt="CSS"
                className="skill-card__icon"
                title="CSS"
              />
            </a>
          </header>
        </div>
        <div className="skills__card">
          <header className="skill-card__header">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Javascript}
                alt="JS"
                className="skill-card__icon"
                title="Javascript"
              />
            </a>
          </header>
        </div>
        <div className="skills__card">
          <header className="skill-card__header">
            <a href="https://react.dev/" target="_blank" rel="noreferrer">
              <img
                src={ReactLogo}
                alt="React"
                className="skill-card__icon"
                title="React"
              />
            </a>
          </header>
        </div>
        <div className="skills__card">
          <header className="skill-card__header">
            <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">
              <img
                src={Npm}
                alt="Npm"
                className="skill-card__icon"
                title="Npm"
              />
            </a>
          </header>
        </div>
        <div className="skills__card">
          <header className="skill-card__header">
            <a href="https://nodejs.org/en" target="_blank" rel="noreferrer">
              <img
                src={Nodejs}
                alt="Nodejs"
                className="skill-card__icon"
                title="Nodejs"
              />
            </a>
          </header>
        </div>
        <div className="skills__card">
          <header className="skill-card__header">
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={VSCode}
                alt="VSCode"
                className="skill-card__icon"
                title="Microsoft Visual Studio"
              />
            </a>
          </header>
        </div>
        <div className="skills__card">
          <header className="skill-card__header">
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              <img
                src={GitLogo}
                alt="Git"
                className="skill-card__icon"
                title="Git"
              />
            </a>
          </header>
        </div>
        <div className="skills__card">
          <header className="skill-card__header">
            <a
              href="https://desktop.github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Github}
                alt="Github"
                className="skill-card__icon"
                title="Github"
              />
            </a>
          </header>
        </div>
        <div className="skills__card">
          <header className="skill-card__header">
            <a
              href="https://slack.com/intl/it-it"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Slack}
                alt="Slack"
                className="skill-card__icon"
                title="Slack"
              />
            </a>
          </header>
        </div>
        <div className="skills__card">
          <header className="skill-card__header">
            <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
              <img
                src={NetlifyLogo}
                alt="Netlify"
                className="skill-card__icon"
                title="Netlify"
              />
            </a>
          </header>
        </div>
        <div className="skills__card">
          <header className="skill-card__header">
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={BootStrap}
                alt="BootStrap"
                className="skill-card__icon"
                title="BootStrap"
              />
            </a>
          </header>
        </div>
        <div className="skills__card">
          <header className="skill-card__header">
            <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
              <img
                src={FigmaLogo}
                alt="Figma"
                className="skill-card__icon"
                title="Figma"
              />
            </a>
          </header>
        </div>
        <div className="skills__card">
          <header className="skill-card__header">
            <a
              href="https://www.getpaint.net/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Paintnet}
                alt="Paintnet"
                className="skill-card__icon"
                title="Paintnet"
              />
            </a>
          </header>
        </div>
        <div className="skills__card">
          <header className="skill-card__header">
            <a href="https://cloud.google.com/" target="_blank" rel="noreferrer">
              <img
                src={GoogleCloud}
                alt="Google Cloud"
                className="skill-card__icon"
                title="Google Cloud"
              />
            </a>
          </header>
        </div>
        <div className="skills__card">
          <header className="skill-card__header">
            <a href="https://www.oracle.com/cloud/" target="_blank" rel="noreferrer">
              <img
                src={OracleCloud}
                alt="Oracle Cloud"
                className="skill-card__icon"
                title="Oracle Cloud"
              />
            </a>
          </header>
        </div>
        <div className="skills__card">
          <header className="skill-card__header">
            <a href="https://azure.microsoft.com/" target="_blank" rel="noreferrer">
              <img
                src={AzureCloud}
                alt="Azure"
                className="skill-card__icon"
                title="Azure"
              />
            </a>
          </header>
        </div>
        <div className="skills__card">
          <header className="skill-card__header">
            <a href="https://www.alibabacloud.com/" target="_blank" rel="noreferrer">
              <img
                src={AlibabaCloud}
                alt="Alibaba Cloud"
                className="skill-card__icon"
                title="Alibaba Cloud"
              />
            </a>
          </header>
        </div>
      </div>
    </section>
  );
};

export default Skills;
