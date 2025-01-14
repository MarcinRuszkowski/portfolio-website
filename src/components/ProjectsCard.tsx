import { FaFileCode } from "react-icons/fa";
import { ExpandableCard } from "./ui/expandable-card-demo-standard";
import quiz from "../assets/quiz.png";
import champa from "../assets/champa.png";
import cms from "../assets/cms.png";
import taskManager from "../assets/task-manager.png";

const cards = [
  {
    title: "Task Manager",
    desc: "React / Redux / Tailwind /TS",
    src: taskManager,
    ctaLink: "https://github.com/MarcinRuszkowski/task-manager",
    content: () => (
      <p>
        Aplikacja do zarządzania zadaniami. Możliwośc dodawania, edytowania,
        usuwania oraz filtrowania tasków.
      </p>
    ),
  },
  {
    title: "CMS",
    desc: "React / Tailwind / NodeJS / Express / MongoDB",
    src: cms,
    ctaLink: "https://github.com/MarcinRuszkowski/CMS-FULLSTACK",
    content: () => (
      <p>
        Portal dla firm, w której pracownicy mogą załatwiać różne sprawy
        związane z pracą. Planowanie nieobecności, sprawdzenie ważnych wydarzeń
        związanych z życiem firmy, zbiór dokumentów poszczególnych spółek, itd.
        Możliwość dodawania/edytowanie użytkowników przez admina, autoryzacji
        użytkownika, filtrowanie pracowników z bazy po kryteriach.
      </p>
    ),
  },
  {
    title: "Polish Quiz",
    desc: "React / Redux / Tailwind / TS",
    src: quiz,
    ctaLink: "https://github.com/MarcinRuszkowski/polish-quiz",
    content: () => (
      <p>
        Quiz z obrazkami i ograniczoną liczbą żyć. Możliwośc restartowania gry w
        dowolnym momencie. 5 poziomów do ukończenia gry.
      </p>
    ),
  },
  {
    title: "Champa",
    desc: "React / Tailwind / TS",
    src: champa,
    ctaLink: "https://github.com/MarcinRuszkowski/champa-page",
    content: () => (
      <p>
        Prosta strona o moim psie - reproduktorze. Galeria zdjęć, osiągniecia
        przedstawione na lini czasu wraz ze zdjęciami i opisem. Formularz
        kontaktowy.
      </p>
    ),
  },
];

export const ProjectsCard = () => {
  return (
    <div className="flex flex-col items-start justify-center overflow-hidden border-2 border-[#656565] rounded-lg bg-secondary p-5 gap-5">
      <div className="flex  items-center gap-2 text-2xl">
        <FaFileCode className="text-primary" />
        <h1 className="text-text font-medium">Projekty</h1>
      </div>
      <div className="w-full">
        <ExpandableCard cards={cards} />
      </div>
    </div>
  );
};
