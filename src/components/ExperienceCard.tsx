import { useLanguage } from "@/context/LanguageContext";
import { MdOutlineWork } from "react-icons/md";

const text = {
  PL: { header: "Doświadczenie", date: "obecnie" },
  EN: { header: "Experience", date: "current" },
};

export const ExperienceCard = () => {
  const { currentLang } = useLanguage();
  const currentText = text[currentLang];

  return (
    <div className="flex flex-col items-start justify-center overflow-hidden border-2 border-[#656565] rounded-lg bg-secondary p-5 gap-5">
      <div className="flex items-center gap-2 text-2xl">
        <MdOutlineWork className="text-primary" />
        <h1 className="text-text font-medium">{currentText.header}</h1>
      </div>
      <div className="text-text ">
        <h1 className="text-xl font-medium my-2">PTWP-Online sp. z o.o</h1>

        <p className="">07.2024 - {currentText.date}</p>
        <p className="my-1.5">Frontend Developer</p>
      </div>
    </div>
  );
};
