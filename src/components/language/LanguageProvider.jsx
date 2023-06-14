import React, { useState } from "react";
import LanguageContext from "./LanguageContext";

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [isItalian, setIsItalian] = useState(false);
  const [isFrench, setIsFrench] = useState(false);

  const toggleLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setIsItalian(selectedLanguage === "it");
    setIsFrench(selectedLanguage === "fr");
  };

  const languageContextValue = {
    language,
    isItalian,
    isFrench,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={languageContextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
