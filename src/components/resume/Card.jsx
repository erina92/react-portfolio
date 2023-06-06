import React from "react";

const Card = (props) => {
  return (
    <div className="timeline__item">
      <i className={props.icon}></i>
      <span className="timeline__date">{props.year}</span>
      <h3 className="timeline__title">{props.title}</h3>
      <p className="timeline__institution">{props.institution}</p>
      <p className="timeline__text">{props.desc}</p>
      <p className="timeline__thesis">{props.thesis}</p>
    </div>
  );
};

export default Card;
