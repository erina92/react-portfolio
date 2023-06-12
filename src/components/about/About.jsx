import React from "react";
import "./about.css";
import Image from "../../assets/programmer.png";
import AboutBox from "./AboutBox";
import CV from "../../cv/CV.pdf";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I'm Erika Miglietta, a translator/interpreter and web developer
              from Taranto, Italy. <br /> I specialize in JavaScript and React,
              building interactive applications while bridging the gap between
              languages and technologies.
            </p>
            <a href={CV} className="btn" target="_blank" rel="noreferrer">
              Download CV
            </a>
          </div>
          <div className="about__skills grid">
            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__name">Web Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX Design</h3>
                <span className="skills__number">20%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ux"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Translation</h3>
                <span className="skills__number">100%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage translation"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage react"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
