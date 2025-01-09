import { HeaderCard } from "./components/HeaderCard";
import { TechStackCard } from "./components/TechStackCard";
import { AboutMeCard } from "./components/AboutMeCard";
import { ExperienceCard } from "./components/ExperienceCard";
import { ProjectsCard } from "./components/ProjectsCard";
import img from "./assets/sample_img.jpg";

const App = () => {
  console.log(typeof img);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[90%] md:w-2/5 space-y-5 m-5">
        <HeaderCard />
        <AboutMeCard />
        <TechStackCard />
        <ExperienceCard />
        <ProjectsCard />
      </div>
    </div>
  );
};

export default App;
