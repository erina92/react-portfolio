import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.instagram.com/eri.codes/"
        className="socials__link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram profile"
      >
        <i className="fa-brands fa-instagram" aria-hidden="true"></i>
      </a>

      <a
        href="https://github.com/erina92"
        className="socials__link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
      >
        <i className="fa-brands fa-square-github" aria-hidden="true"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/erika-miglietta/"
        className="socials__link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
      >
        <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
