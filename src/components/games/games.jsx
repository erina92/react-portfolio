import React, { useContext } from "react";
import DeathStranding2 from "../../assets/games/death-stranding-two.jpg";
import Expedition33 from "../../assets/games/expedition-33.jpg";
import ACMirage from "../../assets/games/ac-mirage.jpg";
import GhostOfYotei from "../../assets/games/ghost-of-yotei.jpg";
import AstroBot from "../../assets/games/astrobot.jpg";
import HorizonForbiddenWest from "../../assets/games/horizonforbiddenwest.jpg";
import "./games.css";
import LanguageContext from "../language/LanguageContext";

const Games = () => {
  const { isItalian, isFrench } = useContext(LanguageContext);
  return (
    <section className="games container section" id="games">
      <h2 className="section__title">
        <span className="games-slash">&#47;</span>
        {isItalian ? "Giochi" : isFrench ? "Jeux Vidéo" : "Videogames"}
      </h2>
      <div className="games__filters">
        <span className="games__item">
          {isItalian
            ? "🎮 I miei giochi preferiti"
            : isFrench
            ? "🎮 Mes jeux préférés"
            : "🎮 My favorite games"}
        </span>
      </div>
      <div className="games__container grid">
        <a
          href="https://www.playstation.com/en-us/games/death-stranding-2-on-the-beach/"
          target="_blank"
          rel="noopener noreferrer"
          className="games__link"
        >
          <div className="work__card">
            <div className="work__thumbnail">
              <img
                src={DeathStranding2}
                alt="Death Stranding 2"
                className="work__img"
              />
            </div>
            <h3 className="games__title">Death Stranding 2</h3>
          </div>
        </a>
        <a
          href="https://store.playstation.com/en-us/product/EP7579-PPSA17599_00-EXP33000000PS5EU"
          target="_blank"
          rel="noopener noreferrer"
          className="games__link"
        >
          <div className="work__card">
            <div className="work__thumbnail">
              <img
                src={Expedition33}
                alt="Clair Obscur: Expedition 33"
                className="work__img"
              />
            </div>
            <h3 className="games__title">Clair Obscur: Expedition 33</h3>
          </div>
        </a>
        <a
          href="https://www.playstation.com/en-us/games/assassins-creed-mirage/"
          target="_blank"
          rel="noopener noreferrer"
          className="games__link"
        >
          <div className="work__card">
            <div className="work__thumbnail">
              <img
                src={ACMirage}
                alt="Assassin's Creed Mirage"
                className="work__img"
              />
            </div>
            <h3 className="games__title">Assassin's Creed Mirage</h3>
          </div>
        </a>
        <a
          href="https://www.playstation.com/en-us/games/ghost-of-yotei/"
          target="_blank"
          rel="noopener noreferrer"
          className="games__link"
        >
          <div className="work__card">
            <div className="work__thumbnail">
              <img
                src={GhostOfYotei}
                alt="Ghost of Yotei"
                className="work__img"
              />
            </div>
            <h3 className="games__title">Ghost of Yotei</h3>
          </div>
        </a>
        <a
          href="https://www.playstation.com/en-us/games/astro-bot/"
          target="_blank"
          rel="noopener noreferrer"
          className="games__link"
        >
          <div className="work__card">
            <div className="work__thumbnail">
              <img src={AstroBot} alt="Astro Bot" className="work__img" />
            </div>
            <h3 className="games__title">Astro Bot</h3>
          </div>
        </a>
        <a
          href="https://www.playstation.com/en-us/games/horizon-forbidden-west/"
          target="_blank"
          rel="noopener noreferrer"
          className="games__link"
        >
          <div className="work__card">
            <div className="work__thumbnail">
              <img
                src={HorizonForbiddenWest}
                alt="Horizon Forbidden West"
                className="work__img"
              />
            </div>
            <h3 className="games__title">Horizon Forbidden West</h3>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Games;
