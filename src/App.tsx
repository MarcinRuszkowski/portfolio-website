import { HeaderCard } from "./components/HeaderCard";
import { TechStackCard } from "./components/TechStackCard";
import { AboutMeCard } from "./components/AboutMeCard";
import { ExperienceCard } from "./components/ExperienceCard";
import { ProjectsCard } from "./components/ProjectsCard";
import { ContactCard } from "./components/ContactCard";
import { LanguageToggle } from "./layout/LanguageToggle";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
  return (
    <LanguageProvider>
      <div className="flex flex-col items-center justify-center relative">
        <LanguageToggle />
        <div className="w-[90%] md:w-2/5 space-y-5 m-5">
          <HeaderCard />
          <AboutMeCard />
          <TechStackCard />
          <ExperienceCard />
          <ProjectsCard />
          <ContactCard />
        </div>
      </div>
    </LanguageProvider>
  );
};

export default App;
