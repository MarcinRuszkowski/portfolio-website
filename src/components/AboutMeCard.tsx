import { TbInfoSquareFilled } from "react-icons/tb";
import { HiAcademicCap } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";

const text = {
  PL: {
    header: "O mnie",
    desc: "Mam półroczne doświadczenie jako frontend developer. Pracuję w JavaScript oraz frameworku React, koncentrując się na tworzeniu wydajnych, estetycznych i responsywnych interfejsów użytkownika. Aktywnie rozwijam swoją wiedzę, by dostarczać kod najwyższej jakości. Jestem zaangażowany w dalszy rozwój zawodowy w branży IT, szczególnie w doskonaleniu umiejętności technicznych oraz efektywnej współpracy zespołowej przy realizacji ambitnych projektów.",
    subheader: "Wykształcenie",
    date: "obecnie",
    studyField: "Cyberbezpieczeństwo",
  },
  EN: {
    header: "About me",
    desc: "I have six months of experience as a frontend developer. I work with JavaScript and the React framework, focusing on creating efficient, aesthetic, and responsive user interfaces. I actively develop my knowledge to deliver high-quality code. I am committed to further professional development in the IT industry, particularly in improving technical skills and effective teamwork on ambitious projects.",
    subheader: "Education",
    date: "current",
    studyField: "Cybersecurity",
  },
};

export const AboutMeCard = () => {
  const { currentLang } = useLanguage();
  const currentText = text[currentLang];

  return (
    <div className="flex flex-col items-start justify-center overflow-hidden border-2 border-[#656565] rounded-lg bg-secondary p-5 gap-5">
      <div className="flex items-center gap-2 text-2xl">
        <TbInfoSquareFilled className="text-primary" />
        <h1 className="text-text font-medium">{currentText.header}</h1>
      </div>
      <p className="text-md text-text">{currentText.desc}</p>
      <div className="text-text">
        <div className="flex items-center gap-2">
          <HiAcademicCap className="text-primary" />
          <h1 className="text-xl font-medium my-2">{currentText.subheader}</h1>
        </div>
        <p className="">10.2023 - {currentText.date}</p>
        <p className="my-1.5">{currentText.studyField}</p>
        <p className="text-xs">Wyższa Szkoła Kształcenia Zawodowego</p>
      </div>
    </div>
  );
};
