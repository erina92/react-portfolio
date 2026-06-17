import React, { useState, useEffect } from "react";
import "./scrolldots.css";

const SECTIONS = ['home', 'about', 'music', 'games', 'skills', 'services', 'resume', 'portfolio', 'contact'];

const ScrollDots = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const main = document.querySelector('.main');
    if (!main) return;

    const handleScroll = () => {
      const sectionWidth = main.clientWidth;
      const index = Math.round(main.scrollLeft / sectionWidth);
      setActive(index);
    };

    main.addEventListener('scroll', handleScroll, { passive: true });
    return () => main.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const main = document.querySelector('.main');
    const target = document.getElementById(id);
    if (main && target) {
      main.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
    }
  };

  return (
    <div className="scroll-dots" role="navigation" aria-label="Section navigation">
      {SECTIONS.map((id, i) => (
        <button
          key={id}
          className={`scroll-dot ${i === active ? 'active' : ''}`}
          onClick={() => scrollTo(id)}
          aria-label={`Go to ${id}`}
        />
      ))}
    </div>
  );
};

export default ScrollDots;
