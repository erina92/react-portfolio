import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.instagram.com/eri.codes/"
        className="socials__link"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>

      <a
        href="https://github.com/erina92"
        className="socials__link"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-square-github"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/erika-miglietta/"
        className="socials__link"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
