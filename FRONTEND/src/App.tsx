import { HeaderCard } from "./components/HeaderCard";
import { TechStackCard } from "./components/TechStackCard";
import { AboutMeCard } from "./components/AboutMeCard";
import { ExperienceCard } from "./components/ExperienceCard";
import { ProjectsCard } from "./components/ProjectsCard";
import { ContactCard } from "./components/ContactCard";
import { LanguageToggle } from "./layout/LanguageToggle";
import ScrollProgress from "./component/ui/scroll-progress";
import { LanguageProvider } from "./context/LanguageProvider";

const App = () => {
  return (
    <LanguageProvider>
      <ScrollProgress className="top-0" />
      <div className="flex flex-col items-center justify-center relative">
        <div className="absolute top-6 right-8 md:right-16 xl:top-5  xl:right-5">
          <LanguageToggle />
        </div>
        <div className="w-[90%]  xl:w-2/5 space-y-5 m-5">
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
