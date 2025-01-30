import { useState, ReactNode } from "react";
import { LanguageContext, Language } from "./LanguageContext";

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    return (localStorage.getItem("language") as Language) || "PL";
  });

  const switchLanguage = () => {
    setCurrentLang((prev) => {
      const newLang = prev === "PL" ? "EN" : "PL";
      localStorage.setItem("language", newLang);
      return newLang;
    });
  };

  return (
    <LanguageContext.Provider value={{ currentLang, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
