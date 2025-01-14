import { IconCloud } from "./ui/icon-cloud";
import { FaCode } from "react-icons/fa";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "redux",
  "tailwindcss",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "git",
  "python",
  "mongodb",
  "shadcnui",
  "github",
];

export const TechStackCard = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden border-2 border-[#656565] rounded-lg bg-secondary pt-5">
      
      <div className="flex items-center gap-2 text-2xl self-start mx-5">
        <FaCode className="text-primary" />
        <h1 className="text-text font-medium">Tech Stack</h1>
      </div>
      <div className="flex flex-row items-center">
        <ul className="list-disc list-inside space-y-1">
          {slugs.map((slug, index) => (
            <li key={index} className="text-sm text-text">
              {slug === "nodedotjs" ? "nodejs" : slug}
            </li>
          ))}
        </ul>

        <IconCloud images={images} />
      </div>
    </div>
  );
};
