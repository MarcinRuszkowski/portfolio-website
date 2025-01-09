import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between sticky top-0 p-5">
      <h1 className="text-white">Marcin Ruszkowski</h1>
      <div className="flex gap-5 text-gray-400">
        <button className="text-lg">O mnie</button>
        <button className="text-lg">Doświadczenie</button>
        <button className="text-lg">Projekty</button>
        <button className="text-lg">Kontakt</button>
      </div>
      <button className="text-white">PL</button>
    </nav>
  );
};
