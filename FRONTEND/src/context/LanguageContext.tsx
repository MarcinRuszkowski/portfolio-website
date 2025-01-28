import { createContext, useContext, useState, ReactNode } from "react";

type Language = "PL" | "EN";

type LanguageContextProps = {
  currentLang: Language;
  switchLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

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
