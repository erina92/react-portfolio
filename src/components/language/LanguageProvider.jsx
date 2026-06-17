import React, { useState } from "react";
import LanguageContext from "./LanguageContext";

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const isItalian = language === "it";
  const isFrench = language === "fr";

  const toggleLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
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
