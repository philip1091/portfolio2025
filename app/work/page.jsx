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
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";
import Link from "next/link";
import Image from "next/image";


const projects = [
  {
    num: "01",
    category: "Software development",
    title: "Porsche ColorWall",
    description:
      "In this project, I developed an Electron-based desktop application for showcasing Porsche cars and their color options in an interactive and visually appealing manner. The application seamlessly integrates with physical button controls using the MQTT protocol, allowing users to select and display car colors dynamically. Designed with user engagement in mind, the app offers a smooth, responsive interface and is tailored for showroom and retail environments, enhancing the customer experience by bridging the physical and digital worlds. Successfully deployed and utilized in high-profile Porsche stores, demonstrating reliability and innovation in automotive presentation technology.",
    stack: [
      { name: "ElectronJs" },
      { name: "MongoDB" },
      { name: "ReactJS" },
      { name: "Python" },
      { name: "Javascript" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/work1.png",
    live: "",
    github: "https://github.com",
  },
  {
    num: "02",
    category: "Backend development",
    title: "Beijing Auto Show",
    description:
      "In this project, users interact with Porsche cars by customizing interior and exterior designs. I worked on the backend to handle user selections, storing the data securely and generating a QR code linked to their configuration on the Porsche website. The system consolidates all elements into a final webpage displaying the QR code, the selected car, and the user’s image. This seamless integration ensures a dynamic and personalized experience for users, enabling them to preview and share their customizations effortlessly. My contribution focused on backend development, data processing, and delivering a polished, user-centered digital solution",
    stack: [
      { name: "NodeJs" },
      { name: "Javascript" },
      { name: "WebScrapping" },
      { name: "MongoDB" },
      { name: "Docker" },
    ],
    image: "/assets/work/work2.png",
    live: "",
    github: "https://github.com",
  },
  {
    num: "03",
    category: "FullStack development",
    title: "Porsche Car Selection",
    description:
      "In this project, users begin by selecting the Porsche car type they desire, such as the Porsche Cayenne, followed by choosing the specific model. They are then directed to a 3D customization page built with Unity. My role involved developing an overlay page on top of the 3D customization interface, enabling users to finalize their car selection. I utilized Laravel (PHP framework) to manage the backend, storing all images and user data in a MySQL database. Additionally, I integrated the Vuplex API to facilitate seamless communication between the Unity 3D environment and the Laravel application.",
    stack: [
      { name: "Laravel" },
      { name: "Php" },
      { name: "Css3" },
      { name: "Javascript" },
      { name: "Mysql" },
      { name: "Docker" },
    ],
    image: "/assets/work/work3.png",
    live: "",
    github: "https://github.com",
  },
  {
    num: "04",
    category: "Fullstack development",
    title: "Ferrari GTS Engagement",
    description:
      "In this project, I developed a user registration page for a Ferrari showcase event featuring the new 296 GTS. Attendees registered by providing their information and electronically signing forms. I designed and implemented a backend using Python and MongoDB to securely store user data, ensuring efficient data management and scalability. To streamline deployment, I containerized the entire application using Docker, enabling seamless remote deployment and system reliability. This solution provided a smooth registration process, combining user convenience with robust backend architecture tailored to meet the event’s operational needs.",
    stack: [{ name: "ReactJs" }, { name: "Css3" }, { name: "Docker" }],
    image: "/assets/work/work4.png",
    live: "",
    github: "https://github.com",
  },
  {
    num: "05",
    category: "Frontend development",
    title: "Burundi Cleaninng Company",
    description:
      "In this project, I developed a showcase webpage to highlight the services offered by the company that hired me. I used React.js to create a dynamic and visually engaging interface that effectively communicated the company's offerings. Images used on the webpage were managed and stored efficiently using BusyBox, ensuring lightweight and streamlined performance. To facilitate seamless deployment and scalability, I containerized the application using Docker, enabling remote deployment with ease. This project delivered a professional, user-friendly solution that showcased the company’s services while leveraging modern tools for efficient development and deployment.",
    stack: [{ name: "ReactJs" }, { name: "Css3" }],
    image: "/assets/work/work5.png",
    live: "",
    github: "https://github.com",
  },
  {
    num: "06",
    category: "frontend development",
    title: "PhilipDev Portfolio",
    description:
      "I developed this portfolio website to showcase my services, resume, and professional work. Built with Next.js, the site features a modern, responsive design that highlights my skills and projects effectively. To ensure scalability and streamlined deployment, I utilized Docker to containerize the application, enabling efficient remote deployment. The website was hosted on AWS, leveraging its robust infrastructure for high availability and performance. This project demonstrates my technical expertise in building and deploying professional-grade web applications, while providing potential clients and employers with a comprehensive view of my capabilities and achievements.",
    stack: [{ name: "NextJs" }, { name: "Tailwind.css" }],
    image: "/assets/work/work6.png",
    live: "",
    github: "https://github.com",
  },
  {
    num: "07",
    category: "(internship) FullStack development",
    title: "Tai2tai",
    description:
      "In this project, I developed a website for a recruitment company in Shanghai as part of my internship. I utilized Laravel for the frontend and PHP for the backend, with MySQL to handle data storage. To streamline content management, I integrated the Laravel Voyager plugin, enabling the creation of an intuitive admin interface where website content could be updated without modifying the code. Additionally, I containerized the entire application using Docker, ensuring efficient remote deployment and scalability. This project demonstrated my ability to deliver a dynamic, user-friendly website while implementing robust backend solutions.",
    stack: [
      { name: "Laravel" },
      { name: "Php" },
      { name: "Css3" },
      { name: "Javascript" },
      { name: "Mysql" },
      { name: "Docker" },
    ],
    image: "/assets/work/work7.png",
    live: "",
    github: "https://github.com",
  },
];


const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-5 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="pb-12">
          <span className="text-sm text-white/60">
            Most of the projects I’ve worked on were private, as they were
            developed while working for other companies. This portfolio
            showcases the projects that company owners have permitted me to
            share publicly. These examples highlight my expertise and
            contributions within the constraints of confidentiality agreements.
          </span>
        </div>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
                <span className="text-lg text-accent break-words">
                  {" "}
                  - {project.title}
                </span>
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-sm text-accent break-words">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20 mb-10"></div>
              {/* <div className="flex items-center gap-4">

                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="w-full xl:h-[80vh] xl:w-[50%] relative">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] xl:center-swiper"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-primary">
                      <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                      <div className="relative w-full h-full ">
                        <Image
                          src={project.image}
                          fill
                          alt={project.title}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
