import React from "react";
import { Header } from "./components/Header";
import { TechStack } from "./components/TechStack";
import { AboutMe } from "./components/AboutMe";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-2/5 space-y-5 m-5">
        <Header />
        <AboutMe />
        <TechStack />
      </div>
    </div>
  );
};

export default App;
