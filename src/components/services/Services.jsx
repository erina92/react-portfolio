import React, { useContext } from "react";
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-4.svg";
import LanguageContext from "../../components/language/LanguageContext";
import GoogleCloud from "../../assets/google-cloud.svg";
import OracleCloud from "../../assets/oracle-cloud.svg";
import AzureCloud from "../../assets/azure-cloud.svg";
import AlibabaCloud from "../../assets/alibaba-cloud.svg";

const Services = () => {
  const { isItalian, isFrench } = useContext(LanguageContext);
  const data = [
    {
      id: 1,
      image: Image1,
      title: isItalian
        ? "Design UI/UX"
        : isFrench
        ? "Design UI/UX"
        : "UI/UX design",
      description: isItalian
        ? "Creo interfacce intuitive e visivamente efficaci per migliorare l'esperienza utente."
        : isFrench
        ? "Je crée des interfaces intuitives et visuellement efficaces pour améliorer l'expérience utilisateur."
        : "I create intuitive, visually effective interfaces that improve the user experience.",
    },
    {
      id: 2,
      image: Image2,
      title: isItalian
        ? "Sviluppo Web"
        : isFrench
        ? "Développement Web"
        : "Web Development",
      description: isItalian
        ? "Realizzo siti web semplici e moderni per mostrare il lavoro e creare una presenza online."
        : isFrench
        ? "Je crée des sites web simples et modernes pour présenter le travail et établir une présence en ligne."
        : "I build simple, modern websites to showcase work and establish an online presence.",
    },
    {
      id: 3,
      image: Image3,
      title: isItalian ? "Traduzione" : isFrench ? "Traduction" : "Translation",
      description: isItalian
        ? "Forniamo traduzioni accurate e culturalmente appropriate per superare le barriere linguistiche."
        : isFrench
        ? "Nous fournissons des traductions précises et culturellement appropriées pour surmonter les barrières linguistiques."
        : "I provide accurate, culturally appropriate translations to bridge language barriers.",
    },
  ];
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">
        <span className="services-slash">&#47;</span>
        {isItalian ? "Servizi" : isFrench ? "Services" : "Services"}
      </h2>

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

      {/* Cloud / Infrastructure section */}
      {/* Cloud & Infrastructure subtitle removed per request (was localized intro text) */}

      <div className="services__container grid services__cloud">
        {[
          {
            id: "gcp",
            image: GoogleCloud,
            title: "Google Cloud",
            description: isItalian
              ? "Migrazioni di workload verso GCP, infrastruttura come codice (Terraform), monitoraggio e ottimizzazione dei costi."
              : isFrench
              ? "Migrations de charges de travail vers GCP, infrastructure as code (Terraform), supervision et optimisation des coûts."
              : "Workload migrations to GCP, IaC (Terraform), monitoring and cost optimization.",
          },
          {
            id: "oracle",
            image: OracleCloud,
            title: "Oracle Cloud",
            description: isItalian
              ? "Supporto alla modernizzazione di applicazioni e dati su Oracle Cloud e automazione delle pipeline di deployment."
              : isFrench
              ? "Support à la modernisation des applications et des données sur Oracle Cloud et automatisation des pipelines de déploiement."
              : "Support for application and data modernization on Oracle Cloud and automation of deployment pipelines.",
          },
          {
            id: "azure",
            image: AzureCloud,
            title: "Microsoft Azure",
            description: isItalian
              ? "Adozione di servizi PaaS, infrastrutture ibride e pratiche di sicurezza cloud su Azure."
              : isFrench
              ? "Adoption des services PaaS, infrastructures hybrides et pratiques de sécurité cloud sur Azure."
              : "Adoption of PaaS services, hybrid infrastructures and cloud security practices on Azure.",
          },
          {
            id: "alibaba",
            image: AlibabaCloud,
            title: "Alibaba Cloud",
            description: isItalian
              ? "Migrazioni e configurazioni per scenari APAC, automazione e ottimizzazione delle risorse su Alibaba Cloud."
              : isFrench
              ? "Migrations et configurations pour des scénarios APAC, automatisation et optimisation des ressources sur Alibaba Cloud."
              : "Migrations and configurations for APAC scenarios, automation and resource optimization on Alibaba Cloud.",
          },
        ].map(({ id, image, title, description }) => (
          <div className="services__card" key={id}>
            <img src={image} alt={title} className="services__img" />
            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
