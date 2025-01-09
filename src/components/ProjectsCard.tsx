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
        Lana Del Rey, an iconic American singer-songwriter, is celebrated for
        her melancholic and cinematic music style. Born Elizabeth Woolridge
        Grant in New York City, she has captivated audiences worldwide with her
        haunting voice and introspective lyrics.
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
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful
        voice and profound lyrics that resonate deeply with his audience.
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
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful
        voice and profound lyrics that resonate deeply with his audience.
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
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful
        voice and profound lyrics that resonate deeply with his audience.
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
