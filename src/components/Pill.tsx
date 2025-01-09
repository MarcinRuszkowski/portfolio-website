import React from "react";

type PillProps = {
  pills: { name: string; icon: React.ReactNode }[];
};

export const Pill: React.FC<PillProps> = ({ pills }) => {
  return (
    <>
      {pills.map((pill, index) => (
        <div
          key={index}
          className="flex items-center justify-center gap-2 bg-primary text-sm rounded-xl px-1.5 py-0.5"
        >
          {pill.icon}
          <span>{pill.name}</span>
        </div>
      ))}
    </>
  );
};
