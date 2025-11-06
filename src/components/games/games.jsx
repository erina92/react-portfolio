import React, { useContext, useState, useEffect, useMemo } from "react";
import DeathStranding2 from "../../assets/games/death-stranding-two.jpg";
import Expedition33 from "../../assets/games/expedition-33.jpg";
import ACMirage from "../../assets/games/ac-mirage.jpg";
import GhostOfYotei from "../../assets/games/ghost-of-yotei.jpg";
import AstroBot from "../../assets/games/astrobot.jpg";
import HorizonForbiddenWest from "../../assets/games/horizonforbiddenwest.jpg";
// Add your own images for these games in assets/games/ and update the imports below
import FFXVI from "../../assets/games/final-fantasy-16.jpg"; // FINAL FANTASY XVI
import Wukong from "../../assets/games/black-myth.jpg"; // Black Myth: Wukong
import FFVIIR from "../../assets/games/final-fantasy-seven-rebirth.jpg"; // FINAL FANTASY VII REBIRTH
import RDR2 from "../../assets/games/red-dead-two.jpeg"; // Red Dead Redemption 2
import SpiderMan2 from "../../assets/games/spider-man-two.jpg"; // Marvel's Spider-Man 2
import "./games.css";
import LanguageContext from "../language/LanguageContext";
import { useSearch } from "../search/SearchContext";

const Games = () => {
  const { isItalian, isFrench } = useContext(LanguageContext);
  const { filterItems, isSearchActive } = useSearch();
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
        title: "Ghost of Yōtei",
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
      // New games below
      {
        id: 7,
        image: FFXVI,
        title: "FINAL FANTASY XVI",
        url: "https://www.playstation.com/en-us/games/final-fantasy-xvi/",
      },
      {
        id: 8,
        image: Wukong,
        title: "Black Myth: Wukong",
        url: "https://www.playstation.com/en-us/games/black-myth-wukong/",
      },
      {
        id: 9,
        image: FFVIIR,
        title: "FINAL FANTASY VII REBIRTH",
        url: "https://www.playstation.com/en-us/games/final-fantasy-vii-rebirth/",
      },
      {
        id: 10,
        image: RDR2,
        title: "Red Dead Redemption 2",
        url: "https://www.playstation.com/en-us/games/red-dead-redemption-2/",
      },
      {
        id: 11,
        image: SpiderMan2,
        title: "Marvel's Spider-Man 2",
        url: "https://www.playstation.com/en-us/games/marvels-spider-man-2/",
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
          console.log(
            `Trophy API response for ${game.title}:`,
            response.status
          );
          const data = await response.json();
          console.log(`Trophy data for ${game.title}:`, data);
          if (data.trophies) {
            results[game.title] = data.trophies;
          }
        } catch (error) {
          console.error(`Failed to fetch trophies for ${game.title}:`, error);
        }
      }
      console.log("All trophy data:", results);
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
        {isSearchActive && (
          <div
            style={{
              background: "rgba(203, 112, 170, 0.1)",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
              fontSize: "14px",
              color: "var(--title-color)",
            }}
          >
            🔍 Search Active - Showing{" "}
            {filterItems(gamesData, ["title"]).length} of {gamesData.length}{" "}
            games
          </div>
        )}
      </div>
      <div className="games__container grid">
        {filterItems(gamesData, ["title"]).map((game) => {
          const { id, image, title, url } = game;
          const trophies = trophyData[title];
          return (
            <div
              key={id}
              className={`games__card ${
                isSearchActive ? "search-fade-in" : ""
              }`}
            >
              <div className="work__card">
                <div className="work__thumbnail">
                  <img src={image} alt={title} className="work__img" />
                  <div className="work__mask"></div>
                </div>
                <h3 className="games__title">{title}</h3>
                <a
                  href={url}
                  className="work__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-link work__button-icon"></i>
                </a>
                {loading ? (
                  <div className="games__trophies">
                    <span className="trophy__loading">...</span>
                  </div>
                ) : trophies ? (
                  <div className="games__trophies">
                    <div className="trophy__item">
                      <span className="trophy__icon platinum">🏆</span>
                      <span className="trophy__count">{trophies.platinum}</span>
                    </div>
                    <div className="trophy__item">
                      <span className="trophy__icon gold">🥇</span>
                      <span className="trophy__count">{trophies.gold}</span>
                    </div>
                    <div className="trophy__item">
                      <span className="trophy__icon silver">🥈</span>
                      <span className="trophy__count">{trophies.silver}</span>
                    </div>
                    <div className="trophy__item">
                      <span className="trophy__icon bronze">🥉</span>
                      <span className="trophy__count">{trophies.bronze}</span>
                    </div>
                    <div className="trophy__progress">{trophies.progress}%</div>
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
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Games;
