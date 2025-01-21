import img from "../assets/sample_img.jpg";
import cv from "../assets/Marcin-Ruszkowski-CV.pdf";
import cvImg from "../assets/cvImg.png";
import { Pill } from "../component/Pill";
import { FaGithub, FaHeart, FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdCake } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { TbFileCv } from "react-icons/tb";
import { LinkPreview } from "@/component/ui/link-preview";
import outlook from "../assets/outlook.png";

const pills = [
  { name: "Katowice, Polska", icon: <FaLocationDot /> },
  { name: ">1year", icon: <MdOutlineWork /> },
  { name: "Polski & Angielski", icon: <GrLanguage /> },
  { name: "23yo", icon: <MdCake /> },
  { name: "Dog Lover", icon: <FaHeart /> },
];

export const HeaderCard = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden border-2 border-border rounded-lg bg-secondary p-5 gap-5">
      <div className="flex flex-col sm:flex-row justify-start items-center gap-8 w-full">
        <img
          src={img}
          alt=""
          className="w-[150px] h-[150px]  rounded-full border-2 border-border"
        />
        <div className="flex flex-col text-primary">
          <h1 className="text-3xl font-bold">Marcin Ruszkowski</h1>
          <p className="">Frontend developer</p>
          <div className="flex gap-3 text-text text-xl mt-2">
            <LinkPreview
              url="mailto:marcin.ruszkowski01@gmail.com"
              imageSrc={outlook}
              isStatic
              className="p-2 rounded-full text-text"
            >
              <IoIosMail />
            </LinkPreview>
            <LinkPreview
              url={cv}
              imageSrc={cvImg}
              isStatic
              className="p-2 rounded-full text-text"
            >
              <TbFileCv />
            </LinkPreview>

            <LinkPreview
              url="https://github.com/MarcinRuszkowski"
              className="p-2 rounded-full text-text"
            >
              <FaGithub />
            </LinkPreview>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap p-2 bg-[#121212] border-2 border-border file:rounded-xl w-full gap-2">
        <Pill pills={pills} />
      </div>
    </div>
  );
};
