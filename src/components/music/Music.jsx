import React, { useContext } from "react";
import "./music.css";
import LanguageContext from "../language/LanguageContext";

const Music = () => {
  const { isItalian, isFrench } = useContext(LanguageContext);
  return (
    <section className="music container section" id="music">
      <h2 className="section__title">
        <span className="music-slash">&#47;</span>
        {isItalian
          ? "Codici e Note"
          : isFrench
          ? "Vers de Code et de Mélodie"
          : "Code & Chords"}
      </h2>
      <div className="music__filters">
        <span className="music__item">
          {isItalian
            ? "🎧 La mia Playlist Spotify"
            : isFrench
            ? "🎧 Liste de lecture Spotify"
            : "🎧 My Spotify Playlist"}
        </span>
      </div>

      <div className="music__container grid">
        <div className="music__card">
          <header className="music-card__header">
            <iframe
              title="Embedded Content"
              style={{ borderRadius: "12px", border: "0px" }}
              src="https://open.spotify.com/embed/track/6Ec5LeRzkisa5KJtwLfOoW?utm_source=generator"
              width="300"
              height="300"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen;
        picture-in-picture"
              loading="lazy"
              className="embed__content"
            ></iframe>
          </header>
        </div>
        <div className="music__card">
          <header className="music-card__header">
            <iframe
              title="Embedded Content"
              style={{ borderRadius: "12px", border: "0px" }}
              src="https://open.spotify.com/embed/track/0RiRZpuVRbi7oqRdSMwhQY?utm_source=generator"
              width="300"
              height="300"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="embed__content"
            ></iframe>
          </header>
        </div>
        <div className="music__card">
          <header className="music-card__header">
            <iframe
              title="Embedded Content"
              style={{ borderRadius: "12px", border: "0px" }}
              src="https://open.spotify.com/embed/track/0lJrPatloYarTbsKciShJu?utm_source=generator"
              width="300"
              height="300"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="embed__content"
            ></iframe>
          </header>
        </div>
        <div className="music__card">
          <header className="music-card__header">
            <iframe
              title="Embedded Content"
              style={{ borderRadius: "12px", border: "0px" }}
              src="https://open.spotify.com/embed/track/1yLsZ8fuQJqk2cm1VDWTGb?utm_source=generator"
              width="300"
              height="300"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="embed__content"
            ></iframe>
          </header>
        </div>
        <div className="music__card">
          <header className="music-card__header">
            <iframe
              title="Embedded Content"
              style={{ borderRadius: "12px", border: "0px" }}
              src="https://open.spotify.com/embed/track/166Dyvfibu4SOygA4vub85?utm_source=generator"
              width="300"
              height="300"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="embed__content"
            ></iframe>
          </header>
        </div>
        <div className="music__card">
          <header className="music-card__header">
            <iframe
              title="Embedded Content"
              style={{ borderRadius: "12px", border: "0px" }}
              src="https://open.spotify.com/embed/track/3YNFRvI0WnbvFdxUCQiKjR?utm_source=generator"
              width="300"
              height="300"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="embed__content"
            ></iframe>
          </header>
        </div>
      </div>
    </section>
  );
};

export default Music;
