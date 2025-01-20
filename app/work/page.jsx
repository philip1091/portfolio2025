"use client";

import { motion } from "motion/react";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";


const projects = [
  {
    num: "01",
    category: "Backend development",
    title: "Beijing Auto Show",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius dolorem recusandae praesentium ipsum unde asperiores.",
    stack: [
      { name: "NodeJs" },
      { name: "ExpressJs" },
      { name: "Javascript" },
      { name: "WebScrapping" },
      { name: "MongoDB" },
      { name: "Docker" },
    ],
    image: "/assets/work/thumb1.png",
    github: "https://github.com",
  },
  {
    num: "02",
    category: "Software development",
    title: "Porsche ColorWall",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius dolorem recusandae praesentium ipsum unde asperiores.",
    stack: [
      { name: "ElectronJs" },
      { name: "MongoDB" },
      { name: "ReactJS" },
      { name: "Python" },
      { name: "FastAPI" },
      { name: "Javascript" },
      { name: "Css3" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/thumb2.png",
    github: "https://github.com",
  },
  {
    num: "03",
    category: "FullStack development",
    title: "Porsche Car Selection",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius dolorem recusandae praesentium ipsum unde asperiores.",
    stack: [
      { name: "Laravel" },
      { name: "Php" },
      { name: "Css3" },
      { name: "Javascript" },
      { name: "Mysql" },
      { name: "Docker" },
    ],
    image: "/assets/work/thumb2.png",
    github: "https://github.com",
  },
  {
    num: "04",
    category: "Frontend development",
    title: "Ferrari GTS Engagement",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius dolorem recusandae praesentium ipsum unde asperiores.",
    stack: [{ name: "ReactJs" }, { name: "Css3" }, { name: "Docker" }],
    image: "/assets/work/thumb2.png",
    github: "https://github.com",
  },
  {
    num: "05",
    category: "Frontend development",
    title: "Burundi Cleaninng Company",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius dolorem recusandae praesentium ipsum unde asperiores.",
    stack: [{ name: "ReactJs" }, { name: "Css3" }],
    image: "/assets/work/thumb2.png",
    github: "https://github.com",
  },
  {
    num: "06",
    category: "frontend development",
    title: "PhilipDev Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius dolorem recusandae praesentium ipsum unde asperiores.",
    stack: [{ name: "NextJs" }, { name: "Tailwind.css" }],
    image: "/assets/work/thumb2.png",
    github: "https://github.com",
  },
  {
    num: "07",
    category: "(internship) FullStack development",
    title: "Tai2tai",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius dolorem recusandae praesentium ipsum unde asperiores.",
    stack: [
      { name: "Laravel" },
      { name: "Php" },
      { name: "Css3" },
      { name: "Javascript" },
      { name: "Mysql" },
      { name: "Docker" },
    ],
    image: "/assets/work/thumb2.png",
    github: "https://github.com",
  },
];


const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div>
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {console.log(project)}
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-sm text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && "," }
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div>

              </div>
            </div>
          </div>
          <div className="w-full">slider</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
