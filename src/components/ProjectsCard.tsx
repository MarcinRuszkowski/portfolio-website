import { FaFileCode } from "react-icons/fa";
import { ExpandableCard } from "../component/ui/expandable-card-demo-standard";
import quiz from "../assets/quiz.png";
import champa from "../assets/champa.png";
import cms from "../assets/cms.png";
import taskManager from "../assets/task-manager.png";
import { useLanguage } from "@/context/LanguageContext";

const text = {
  PL: {
    header: "Projekty",
    taskManagerDesc:
      "Aplikacja do zarządzania zadaniami. Możliwośc dodawania, edytowania, usuwania oraz filtrowania tasków.",
    CMSDesc:
      "System dla firm, w której pracownicy mogą załatwiać różne sprawy związane z pracą. Planowanie nieobecności, sprawdzenie ważnych wydarzeń związanych z życiem firmy, zbiór dokumentów poszczególnych spółek, itd. Możliwość dodawania/edytowanie użytkowników przez admina, autoryzacji użytkownika, filtrowanie pracowników z bazy po kryteriach.",
    quizDesc:
      "Quiz z obrazkami i ograniczoną liczbą żyć. Możliwośc restartowania gry w dowolnym momencie. 5 poziomów do ukończenia gry.",
    champaDesc:
      "Prosta strona o moim psie - reproduktorze. Galeria zdjęć, osiągniecia przedstawione na lini czasu wraz ze zdjęciami i opisem. Formularz kontaktowy.",
  },
  EN: {
    header: "Projekty",
    taskManagerDesc:
      "Task management app. You can add, edit, delete, and filter tasks.",
    CMSDesc:
      "Content Management System for companies where employees can handle handle different work things. Plan absences, check important company events, access a collection of documents for individual subsidiaries, etc. The admin can add/edit users, authorize users, and filter employees in the database based on criteria.",
    quizDesc:
      "A quiz with pictures and a limited number of lives. You can restart the game at any time. Five levels to complete the game.",
    champaDesc:
      "A simple page about my dog - a stud. Photo gallery, achievements shown on a timeline with pictures and descriptions. Contact form.",
  },
};

export const ProjectsCard = () => {
  const { currentLang } = useLanguage();
  const currentText = text[currentLang];

  const cards = [
    {
      title: "Task Manager",
      desc: "React / Redux / Tailwind /TS",
      src: taskManager,
      ctaLink: "https://github.com/MarcinRuszkowski/task-manager",
      content: () => <p>{currentText.taskManagerDesc}</p>,
    },
    {
      title: "CMS",
      desc: "React / Tailwind / NodeJS / Express / MongoDB",
      src: cms,
      ctaLink: "https://github.com/MarcinRuszkowski/CMS-FULLSTACK",
      content: () => <p>{currentText.CMSDesc}</p>,
    },
    {
      title: "Polish Quiz",
      desc: "React / Redux / Tailwind / TS",
      src: quiz,
      ctaLink: "https://github.com/MarcinRuszkowski/polish-quiz",
      content: () => <p>{currentText.quizDesc}</p>,
    },
    {
      title: "Champa",
      desc: "React / Tailwind / TS / NodeJS",
      src: champa,
      ctaLink: "https://github.com/MarcinRuszkowski/champa-page",
      content: () => <p>{currentText.champaDesc}</p>,
    },
  ];

  return (
    <div className="flex flex-col items-start justify-center overflow-hidden border-2 border-border rounded-lg bg-secondary p-5 gap-5">
      <div className="flex items-center gap-2 text-2xl">
        <FaFileCode className="text-primary" />
        <h1 className="text-text font-medium">{currentText.header}</h1>
      </div>
      <div className="w-full">
        <ExpandableCard cards={cards} />
      </div>
    </div>
  );
};
