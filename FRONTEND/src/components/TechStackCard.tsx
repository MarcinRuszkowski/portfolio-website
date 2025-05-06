import { IconCloud } from "../component/ui/icon-cloud";
import { FaCode } from "react-icons/fa";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "react native",
  "redux",
  "tailwindcss",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "git",
  "angular",
  "python",
  "mongodb",
  "shadcnui",
  "github",
  "npm",
  "postman",
  "zustand",
  "reactquery",
  "vitest",
];

export const TechStackCard = () => {
  const linkedSlugs = slugs.filter(
    (slug) =>
      slug !== "zustand" && slug !== "tanstack query" && slug !== "react native"
  );

  const slugsName = slugs.filter(
    (slug) => slug !== "reactquery" && slug !== ""
  );

  const images = linkedSlugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="flex flex-col items-start justify-center overflow-hidden border-2 border-border rounded-lg bg-secondary  md:pt-0 px-5 gap-5">
      <div className="flex items-center gap-2 text-2xl self-start pt-5">
        <FaCode className="text-primary" />
        <h1 className="text-text font-medium">Tech Stack</h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center w-full">
        <ul className="list-disc list-inside grid grid-cols-2 md:grid-cols-1 gap-y-1 gap-5 pb-5 md:pb-0 flex-none sm:self-start">
          {slugsName.map((slug, index) => (
            <li key={index} className="text-sm text-text">
              {slug === "nodedotjs" ? "nodejs" : slug}
            </li>
          ))}
        </ul>
        <div className=" flex justify-center flex-1">
          <IconCloud images={images} />
        </div>
      </div>
    </div>
  );
};
