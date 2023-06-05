import React from "react";
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-4.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "My UI/UX design service aims to create intuitive and visually appealing user interfaces that enhance the user experience, leveraging modern design principles to help your websites and applications stand out in the digital landscape.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "As a newcomer in web development, my service focuses on creating simple and modern websites that showcase my work and skills, providing an online presence to help you establish credibility and attract potential clients.",
  },
  {
    id: 3,
    image: Image3,
    title: "Translation",
    description:
      "Drawing on my previous experience and expertise, my translation service provides accurate and culturally sensitive translations to bridge language barriers and effectively convey your message to diverse audiences.",
  },
];

const Services = () => {
  return (
    <section className="services container section">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
