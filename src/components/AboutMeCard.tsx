import { TbInfoSquareFilled } from "react-icons/tb";
import { HiAcademicCap } from "react-icons/hi";

export const AboutMeCard = () => {
  return (
    <div className="flex flex-col items-start justify-center overflow-hidden border-2 border-[#656565] rounded-lg bg-secondary p-5 gap-5">
      <div className="flex items-center gap-2 text-2xl">
        <TbInfoSquareFilled className="text-primary" />
        <h1 className="text-text font-medium">O mnie</h1>
      </div>
      <p className="text-md text-text">
        Mam półroczne doświadczenie jako frontend developer. Pracuję w
        JavaScript oraz frameworku React, koncentrując się na tworzeniu
        wydajnych, estetycznych i responsywnych interfejsów użytkownika.
        Aktywnie rozwijam swoją wiedzę, by dostarczać kod najwyższej jakości.
        Jestem zaangażowany w dalszy rozwój zawodowy w branży IT, szczególnie w
        doskonaleniu umiejętności technicznych oraz efektywnej współpracy
        zespołowej przy realizacji ambitnych projektów.
      </p>
      <div className="text-text">
        <div className="flex items-center gap-2">
          <HiAcademicCap className="text-primary" />
          <h1 className="text-xl font-medium my-2">Wykształcenie</h1>
        </div>

        <p className="">10.2023 - obecnie</p>
        <p className="my-1.5">Cyberbezpieczeństwo</p>
        <p className="text-xs">Wyższa Szkoła Kształcenia Zawodowego</p>
      </div>
    </div>
  );
};
