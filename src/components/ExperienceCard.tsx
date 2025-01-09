import { FaLaptopCode } from "react-icons/fa";

export const ExperienceCard = () => {
  return (
    <div className="flex flex-col items-start justify-center overflow-hidden border-2 border-[#656565] rounded-lg bg-secondary p-5 gap-5">
      <div className="flex items-center gap-2 text-2xl">
        <FaLaptopCode className="text-primary" />
        <h1 className="text-text font-medium">Doświadczenie</h1>
      </div>
      <div className="text-text ">
        <h1 className="text-xl font-medium my-2">PTWP-Online sp. z o.o</h1>

        <p className="">07.2024 - obecnie</p>
        <p className="my-1.5">Frontend Developer</p>
      </div>
    </div>
  );
};
