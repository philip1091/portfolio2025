"use client";
// import Typical from "react-typical";
import { ReactTyped } from "react-typed";
import { motion } from "motion/react";
const Intro = () => {
  return (
    <div>
      <span>a </span>
      <ReactTyped
        strings={[
          "Software Developer",
          "Web Developer",
          "Frontend Developer",
          "Fullstack Developer",
        ]}
        className="text-accent border-none font-extrabold "
        typeSpeed={70}
        backSpeed={70}
        loop
      />
    </div>
  );
}

export default Intro
