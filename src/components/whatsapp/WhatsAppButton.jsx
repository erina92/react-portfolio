import React from "react";
import "./whatsapp.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/393473334037?text=Ciao%20Erika!"
      className="whatsapp__float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact me on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
    </a>
  );
};

export default WhatsAppButton;
