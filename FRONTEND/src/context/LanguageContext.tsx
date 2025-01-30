import { createContext } from "react";

export type Language = "PL" | "EN";

export type LanguageContextProps = {
  currentLang: Language;
  switchLanguage: () => void;
};

export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);
