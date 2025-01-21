import EN from "../assets/EN.png";
import PL from "../assets/PL.png";
import { useLanguage } from "../context/LanguageContext";

export const LanguageToggle = () => {
  const { currentLang, switchLanguage } = useLanguage();

  return (
    <button
      onClick={switchLanguage}
    >
      <img
        src={currentLang === "PL" ? PL : EN}
        alt={currentLang}
        className="w-8 h-8 object-contain"
      />
    </button>
  );
};
