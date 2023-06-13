import React, { useState } from "react";
import LanguageContext from "./LanguageContext";

const LanguageProvider = ({ children }) => {
  const [isItalian, setIsItalian] = useState(false);

  const toggleLanguage = () => {
    setIsItalian(!isItalian);
  };

  return (
    <LanguageContext.Provider value={{ isItalian, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
