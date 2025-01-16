import img from "../assets/sample_img.jpg";
import cv from "../assets/Marcin-Ruszkowski-CV.pdf";
import { Pill } from "../component/Pill";
import { FaGithub, FaHeart, FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdCake } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";

import { GrLanguage } from "react-icons/gr";
import { TbFileCv } from "react-icons/tb";

const pills = [
  { name: "Katowice, Poland", icon: <FaLocationDot /> },
  { name: ">1year", icon: <MdOutlineWork /> },
  { name: "Polish & English", icon: <GrLanguage /> },
  { name: "23yo", icon: <MdCake /> },
  { name: "Dog Lover", icon: <FaHeart /> },
];

export const HeaderCard = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden border-2 border-[#656565] rounded-lg bg-secondary p-5 gap-5">
      <div className="flex justify-start items-center gap-8 w-full">
        <img
          src={img}
          alt=""
          className="w-[150px] h-[150px]  rounded-full border-2 border-[#656565] "
        />
        <div className="flex flex-col text-primary">
          <h1 className="text-3xl font-bold">Marcin Ruszkowski</h1>
          <p className="">Frontend developer</p>
          <div className="flex gap-3 text-text text-xl mt-2">
            <a
              href="mailto:marcin.ruszkowski01@gmail.com"
              className="p-2 rounded-full hover:bg-secondary-hover"
            >
              <IoIosMail />
            </a>
            <a
              href="https://github.com/MarcinRuszkowski"
              className="p-2 rounded-full hover:bg-secondary-hover"
            >
              <FaGithub />
            </a>
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary-hover"
            >
              <TbFileCv />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap p-2 bg-[#121212] border-2 border-[#656565] rounded-xl w-full gap-2">
        <Pill pills={pills} />
      </div>
    </div>
  );
};
