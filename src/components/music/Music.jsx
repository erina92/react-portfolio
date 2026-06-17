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

      <div className="music__container">
        {[
          "6Ec5LeRzkisa5KJtwLfOoW",
          "0RiRZpuVRbi7oqRdSMwhQY",
          "0lJrPatloYarTbsKciShJu",
          "1yLsZ8fuQJqk2cm1VDWTGb",
          "166Dyvfibu4SOygA4vub85",
          "3YNFRvI0WnbvFdxUCQiKjR",
          "3sK8wGT43QFpWrvNQsrQya",
          "0LTSNmOLBt25GMjHlxp9OR",
          "2vIJ2wlcjywHXjyJSiDhuH",
        ].map((id) => (
          <iframe
            key={id}
            title={`Spotify track ${id}`}
            src={`https://open.spotify.com/embed/track/${id}?utm_source=generator`}
            width="100%"
            height="100"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="embed__content"
          />
        ))}
      </div>
    </section>
  );
};

export default Music;
