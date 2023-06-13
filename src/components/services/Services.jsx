import React, { useContext } from "react";
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-4.svg";
import LanguageContext from "../../components/language/LanguageContext";

const Services = () => {
  const { isItalian } = useContext(LanguageContext);
  const data = [
    {
      id: 1,
      image: Image1,
      title: isItalian ? "Design UI/UX" : "UI/UX design",
      description: isItalian
        ? "Il mio servizio di design UI/UX mira a creare interfacce utente intuitive e visivamente accattivanti che migliorano l'esperienza dell'utente, sfruttando i moderni principi di design per far risaltare i tuoi siti web e applicazioni nel panorama digitale."
        : "My UI/UX design service aims to create intuitive and visually appealing user interfaces that enhance the user experience, leveraging modern design principles to help your websites and applications stand out in the digital landscape.",
    },
    {
      id: 2,
      image: Image2,
      title: isItalian ? "Sviluppo Web" : "Web Development",
      description: isItalian
        ? "Come principiante nello sviluppo web, il mio servizio si concentra sulla creazione di siti web semplici e moderni che mettono in mostra il mio lavoro e le mie competenze, offrendo una presenza online per aiutarti a stabilire credibilità e attrarre potenziali clienti."
        : "As a newcomer in web development, my service focuses on creating simple and modern websites that showcase my work and skills, providing an online presence to help you establish credibility and attract potential clients.",
    },
    {
      id: 3,
      image: Image3,
      title: isItalian ? "Traduzione" : "Translation",
      description: isItalian
        ? "Attingendo alla mia precedente esperienza e competenza, il mio servizio di traduzione offre traduzioni accurate e culturalmente sensibili per superare le barriere linguistiche e trasmettere efficacemente il tuo messaggio a un pubblico diversificato."
        : "Drawing on my previous experience and expertise, my translation service provides accurate and culturally sensitive translations to bridge language barriers and effectively convey your message to diverse audiences.",
    },
  ];
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">{isItalian ? "Servizi" : "Services"}</h2>

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
