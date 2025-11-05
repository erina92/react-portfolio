import React, { useContext, useState, useEffect, useMemo } from "react";
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
  const [trophyData, setTrophyData] = useState({});
  const [loading, setLoading] = useState(true);

  const gamesData = useMemo(
    () => [
      {
        id: 1,
        image: DeathStranding2,
        title: "Death Stranding 2",
        url: "https://www.playstation.com/en-us/games/death-stranding-2-on-the-beach/",
      },
      {
        id: 2,
        image: Expedition33,
        title: "Clair Obscur: Expedition 33",
        url: "https://store.playstation.com/en-us/product/EP7579-PPSA17599_00-EXP33000000PS5EU",
      },
      {
        id: 3,
        image: ACMirage,
        title: "Assassin's Creed Mirage",
        url: "https://www.playstation.com/en-us/games/assassins-creed-mirage/",
      },
      {
        id: 4,
        image: GhostOfYotei,
        title: "Ghost of Yotei",
        url: "https://www.playstation.com/en-us/games/ghost-of-yotei/",
      },
      {
        id: 5,
        image: AstroBot,
        title: "Astro Bot",
        url: "https://www.playstation.com/en-us/games/astro-bot/",
      },
      {
        id: 6,
        image: HorizonForbiddenWest,
        title: "Horizon Forbidden West",
        url: "https://www.playstation.com/en-us/games/horizon-forbidden-west/",
      },
    ],
    []
  );

  useEffect(() => {
    const fetchTrophies = async () => {
      const results = {};
      for (const game of gamesData) {
        try {
          const response = await fetch(
            `/api/psn-trophies?title=${encodeURIComponent(game.title)}`
          );
          const data = await response.json();
          if (data.trophies) results[game.title] = data.trophies;
        } catch (error) {
          console.error(`Failed to fetch trophies for ${game.title}:`, error);
        }
      }
      setTrophyData(results);
      setLoading(false);
    };
    fetchTrophies();
  }, [gamesData]);

  return (
    <section className="games container section" id="games">
      <h2 className="section__title">
        <span className="games-slash">&#47;</span>
        {isItalian ? "Giochi" : isFrench ? "Jeux Vidéo" : "Videogames"}
      </h2>
      <div className="games__filters">
        <span className="games__item">
          {isItalian
            ? "I miei giochi preferiti"
            : isFrench
            ? "Mes jeux préférés"
            : "My favorite games"}
        </span>
      </div>
      <div className="games__container grid">
        {gamesData.map((game) => {
          const { id, image, title, url } = game;
          const trophies = trophyData[title];
          return (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="games__link"
            >
              <div className="work__card">
                <div className="work__thumbnail">
                  <img src={image} alt={title} className="work__img" />
                  <div className="work__mask"></div>
                </div>
                <h3 className="games__title">{title}</h3>
                {loading ? (
                  <div className="games__trophies">
                    <span className="trophy__loading">...</span>
                  </div>
                ) : trophies ? (
                  <div className="games__trophies">
                    <div className="trophy__item">
                      <span className="trophy__icon">P</span>
                      <span className="trophy__count">{trophies.platinum}</span>
                    </div>
                    <div className="trophy__item">
                      <span className="trophy__icon">G</span>
                      <span className="trophy__count">{trophies.gold}</span>
                    </div>
                    <div className="trophy__item">
                      <span className="trophy__icon">S</span>
                      <span className="trophy__count">{trophies.silver}</span>
                    </div>
                    <div className="trophy__item">
                      <span className="trophy__icon">B</span>
                      <span className="trophy__count">{trophies.bronze}</span>
                    </div>
                  </div>
                ) : (
                  <div className="games__trophies">
                    <span className="trophy__coming-soon">
                      {isItalian
                        ? "Prossimamente"
                        : isFrench
                        ? "Bientôt"
                        : "Coming Soon"}
                    </span>
                  </div>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Games;
