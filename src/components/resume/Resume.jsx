import React from "react";
import "./resume.css";
import Data from "./Data";
import Card from "./Card";

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  institution={val.institution}
                  url={val.url}
                  desc={val.desc}
                  thesis={val.thesis}
                />
              );
            } else {
              return null;
            }
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  institution={val.institution}
                  desc={val.desc}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
